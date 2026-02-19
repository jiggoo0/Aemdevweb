/* global process, console */
/**
 * [SCRIPT]: IMAGE_AUDIT_SYSTEM v18.0.4 (SYSTEM_AWARE)
 * [STRATEGY]: System File Protection | Dynamic Path Suppression | Recursive Quarantine
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- [CONFIGURATIONS] ---
const CONFIG = {
  publicDir: "./public",
  backupDir: "./_quarantine_assets_",
  scanDirs: ["./app", "./components", "./constants", "./lib", "./content"],
  scanExts: [".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".mdx"],
  imgExts: [".jpg", ".jpeg", ".png", ".webp", ".svg", ".ico", ".avif"],
  // [NEW]: ไฟล์ที่ต้องห้ามแตะต้อง (System Critical)
  ignoreList: [
    "favicon.ico",
    "apple-touch-icon.png",
    "android-chrome",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "grid-pattern.svg",
    "logo-icon.svg",
    "manifest.ts",
    "manifest.json",
    "robots.ts",
    "sitemap.ts",
  ],
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// [HELPER]: Recursive File Walker
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!["node_modules", ".next", ".git"].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
};

// [HELPER]: Path Normalizer
const normalizePath = (filePath) => {
  return filePath
    .replace(/\\/g, "/")
    .replace(/^\.\/public\//, "/")
    .replace(/^public\//, "/");
};

console.log("\n🚀 INITIALIZING ASSET AUDIT PROTOCOL v18.0.4...");

// --- 1. INDEXING PHASE ---
const physicalImages = getAllFiles(CONFIG.publicDir)
  .filter((f) => CONFIG.imgExts.includes(path.extname(f).toLowerCase()))
  .map((f) => ({ originalPath: f, normalized: normalizePath(f) }));

// --- 2. SCANNING PHASE ---
const codeFiles = CONFIG.scanDirs.flatMap((dir) =>
  getAllFiles(dir).filter((f) => CONFIG.scanExts.includes(path.extname(f))),
);

const usedImages = new Set();
const missingReferences = [];

// [REGEX]: ตรวจจับ Path รูปภาพในรูปแบบต่างๆ
const imageRegex = new RegExp(
  `(/images/[^'"\\s\`\\(\\)]+\\.(${CONFIG.imgExts.map((e) => e.replace(".", "")).join("|")}))`,
  "gi",
);

codeFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    let ref = match[1];
    let normalizedRef = ref.replace(/\\/g, "/");

    // ตรวจสอบการใช้งานจริง
    const found = physicalImages.find(
      (p) => normalizedRef === p.normalized || p.normalized.includes(normalizedRef),
    );

    if (found) {
      usedImages.add(found.normalized);
    } else {
      // [FILTER]: กรองเอาเฉพาะ Static Path ที่หาไม่เจอ (ข้าม Dynamic Path ${...})
      if (!ref.startsWith("http") && !ref.includes("${")) {
        missingReferences.push({ file, ref });
      }
    }
  }
});

// --- 3. ANALYSIS & QUARANTINE PHASE ---

// [STRATEGY]: กรองไฟล์ที่ไม่ถูกใช้ และไม่อยู่ในรายการที่ต้องยกเว้น
const unusedImages = physicalImages.filter((img) => {
  const isUsed = usedImages.has(img.normalized);
  const isIgnored = CONFIG.ignoreList.some((ignore) => img.normalized.includes(ignore));
  return !isUsed && !isIgnored;
});

console.log(`\n📊 AUDIT SUMMARY:`);
console.log(`   - Total Assets Indexed: ${physicalImages.length}`);
console.log(`   - Verified In-Use:     ${usedImages.size}`);
console.log(`   - Protected (System):  ${CONFIG.ignoreList.length} rules active`);
console.log(`   - Unused Detected:     ${unusedImages.length}`);

if (unusedImages.length > 0) {
  console.log(`\n📦 EXECUTING QUARANTINE (Moving Unused Assets)...`);

  unusedImages.forEach((img) => {
    const relPath = path.relative(CONFIG.publicDir, img.originalPath);
    const destPath = path.join(CONFIG.backupDir, relPath);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    try {
      // [SAFE_MOVE]: Copy + Unlink เพื่อรองรับข้าม Filesystem
      fs.copyFileSync(img.originalPath, destPath);
      fs.unlinkSync(img.originalPath);
      console.log(`   [MOVED] ${img.normalized}`);
    } catch (e) {
      console.error(`   [FAIL] ${img.normalized}: ${e.message}`);
    }
  });
}

if (missingReferences.length > 0) {
  console.log(`\n❌ BROKEN LINKS DETECTED (Strict Paths Only):`);
  const grouped = missingReferences.reduce((acc, curr) => {
    acc[curr.file] = acc[curr.file] || [];
    acc[curr.file].push(curr.ref);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([file, refs]) => {
    console.log(`   📍 ${file}`);
    [...new Set(refs)].forEach((r) => console.log(`      - ${r}`));
  });
} else {
  console.log(`\n✅ ALL STATIC REFERENCES VERIFIED.`);
}

console.log("\n🚀 AUDIT COMPLETE.");
