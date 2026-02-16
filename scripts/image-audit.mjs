/**
 * [SCRIPT]: IMAGE_AUDIT_SYSTEM v18.0.2 (PRECISION_ENGINE)
 * [STRATEGY]: Regex Extraction & Path Normalization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
const CONFIG = {
  publicDir: "./public",
  backupDir: "./_backup_unused_images_",
  scanDirs: ["./app", "./components", "./constants", "./data", "./lib", "./content", "./styles"],
  scanExts: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss", ".md", ".mdx"],
  imgExts: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".ico", ".avif"],
};

// [UTILS]: Path Handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper: Recursive File Walker
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
};

// Helper: Normalize Path to standard "/images/..." format for comparison
const normalizePath = (filePath) => {
  // Convert backslashes to slashes
  let clean = filePath.replace(/\\/g, "/");
  
  // Remove public prefix or local relative dots
  clean = clean.replace(/^\.\/public\//, "/");
  clean = clean.replace(/^public\//, "/");
  
  // Ensure it starts with / if it looks like an absolute path from root
  if (!clean.startsWith("/") && !clean.startsWith(".")) {
    clean = "/" + clean;
  }
  return clean;
};

console.log("\n🚀 INITIALIZING AEM IMAGE AUDIT v18.0.2...");

// --- STEP 1: INDEX PHYSICAL ASSETS ---
console.log("📂 Indexing physical images in ./public...");

const physicalImages = getAllFiles(CONFIG.publicDir)
  .filter(f => CONFIG.imgExts.includes(path.extname(f).toLowerCase()))
  .map(f => {
    return {
      originalPath: f, // ./public/images/logo.png
      normalized: normalizePath(f) // /images/logo.png
    };
  });

const physicalImageSet = new Set(physicalImages.map(img => img.normalized));
console.log(`   > Found ${physicalImages.length} physical images.`);

// --- STEP 2: SCAN CODEBASE ---
console.log("🔍 Scanning codebase for references...");

const codeFiles = [];
CONFIG.scanDirs.forEach(dir => {
  const files = getAllFiles(dir).filter(f => CONFIG.scanExts.includes(path.extname(f)));
  codeFiles.push(...files);
});

const usedImages = new Set();
const missingImages = new Set();

// Regex to find anything that looks like an image file
// Matches: "image.png", '/path/to/image.jpg', url(image.webp)
const imageRegex = new RegExp(`['"\\(]([^'"\\)]+\\.(${CONFIG.imgExts.map(e => e.replace('.', '')).join('|')}))['"\\)]`, 'gi');

codeFiles.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  let match;

  // Reset regex index for each file
  while ((match = imageRegex.exec(content)) !== null) {
    let ref = match[1]; // The captured path
    
    // Normalize reference for comparison
    // Case 1: /images/pic.png -> /images/pic.png
    // Case 2: public/images/pic.png -> /images/pic.png
    // Case 3: images/pic.png -> /images/pic.png
    let normalizedRef = ref.replace(/\\/g, "/");
    
    // Handle Next.js Import aliases or root paths
    if (normalizedRef.startsWith("public/")) normalizedRef = "/" + normalizedRef.replace("public/", "");
    if (!normalizedRef.startsWith("/") && !normalizedRef.startsWith("http") && !normalizedRef.startsWith("data:")) {
       // Assume root relative if not starting with . or /
       if (!normalizedRef.startsWith(".")) normalizedRef = "/" + normalizedRef;
    }

    // Check if it matches any physical image
    // Note: We check endsWith because sometimes code uses dynamic paths or imports
    const foundPhysical = physicalImages.find(p => 
      normalizedRef === p.normalized || 
      normalizedRef.endsWith(p.normalized) ||
      p.normalized.endsWith(normalizedRef)
    );

    if (foundPhysical) {
      usedImages.add(foundPhysical.normalized);
    } else {
      // If it looks like a local asset path but not found
      if (!normalizedRef.startsWith("http") && !normalizedRef.startsWith("data:")) {
         // Filter out potential false positives (like variable names ending in .png if any)
         // Check if the extension is valid
         if (CONFIG.imgExts.includes(path.extname(normalizedRef).toLowerCase())) {
             missingImages.add({ file: file, ref: ref });
         }
      }
    }
  }
});

console.log(`   > Scanned ${codeFiles.length} files.`);
console.log(`   > Found references to ${usedImages.size} unique images.`);

// --- STEP 3: ANALYZE RESULTS ---

// Calculate Unused
const unusedImagesList = physicalImages.filter(img => !usedImages.has(img.normalized));

console.log("\n📊 --- AUDIT REPORT --- 📊");

// REPORT: Missing Images
if (missingImages.size > 0) {
  console.log(`\n❌ MISSING IMAGES (Referenced in code, but not found):`);
  missingImages.forEach(item => {
    console.log(`   - "${item.ref}" \n     in: ${item.file}`);
  });
} else {
  console.log("\n✅ INTEGRITY CHECK PASSED: No missing images.");
}

// REPORT: Unused Images & Backup
if (unusedImagesList.length > 0) {
  console.log(`\n⚠️  UNUSED IMAGES DETECTED: ${unusedImagesList.length} files`);
  console.log(`   Moving to backup directory: ${CONFIG.backupDir}...`);

  if (!fs.existsSync(CONFIG.backupDir)) fs.mkdirSync(CONFIG.backupDir);

  let moveCount = 0;
  unusedImagesList.forEach(img => {
    try {
      const fileName = path.basename(img.originalPath);
      // Create subfolder structure in backup if needed, or just flatten? 
      // For safety, let's flatten but prepend timestamp if conflict, or keep folder structure.
      // Simple strategy: Flatten for now.
      const destPath = path.join(CONFIG.backupDir, fileName);
      
      // Move file
      fs.renameSync(img.originalPath, destPath);
      console.log(`   [MOVED] ${img.normalized}`);
      moveCount++;
    } catch (e) {
      console.error(`   [ERROR] Could not move ${img.originalPath}: ${e.message}`);
    }
  });
  console.log(`\n📦 Successfully moved ${moveCount} files to quarantine.`);
} else {
  console.log("\n✨ CLEAN ASSET STATUS: All images are in use.");
}

console.log("\n🚀 AUDIT COMPLETE.");
