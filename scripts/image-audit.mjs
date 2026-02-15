/**
 * [SCRIPT]: IMAGE_AUDIT_SYSTEM v18.0.1 (ESLINT_COMPLIANT)
 * [STRATEGY]: Filesystem vs Source-Code Cross-Reference
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
const IMAGE_DIR = "./public/images";
const SCAN_DIRS = ["./app", "./components", "./constants", "./data", "./lib"];
const EXTENSIONS = [".tsx", ".ts", ".js", ".jsx", ".json"];
const IMG_EXTS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BACKUP_DIR = "./_backup_images_";

// [FIX]: ลบ __dirname ออกเพราะไม่ได้ใช้งาน เพื่อแก้ error TS / ESLint
fileURLToPath(import.meta.url);

// Helper: อ่านไฟล์ทั้งหมดในโฟลเดอร์แบบ Recursive
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);
  let updatedFiles = arrayOfFiles;

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updatedFiles = getAllFiles(fullPath, updatedFiles);
    } else {
      updatedFiles.push(fullPath);
    }
  });

  return updatedFiles;
};

console.log("🚀 Starting Image Audit System...");

// 1. รวบรวมรูปภาพที่มีอยู่จริงใน Disk
if (!fs.existsSync(IMAGE_DIR)) {
  console.error(`❌ Error: Directory ${IMAGE_DIR} not found.`);
  process.exit(1);
}

const allImages = getAllFiles(IMAGE_DIR)
  .filter((file) => IMG_EXTS.includes(path.extname(file).toLowerCase()))
  .map((file) => file.replace(/\\/g, "/").replace("public/", "/"));

const imageUsageMap = new Map();
allImages.forEach((img) => imageUsageMap.set(img, false));

// 2. รวบรวมไฟล์ Code ทั้งหมด
let codeFiles = [];
SCAN_DIRS.forEach((dir) => {
  if (fs.existsSync(dir)) {
    const files = getAllFiles(dir).filter((file) => EXTENSIONS.includes(path.extname(file)));
    codeFiles = [...codeFiles, ...files];
  }
});

const missingImages = new Set();
const foundReferences = new Set();

// 3. วิเคราะห์การใช้งาน
console.log(`🔍 Scanning ${codeFiles.length} source files for image references...`);

codeFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");

  // เช็ครูปที่มีอยู่จริง
  allImages.forEach((img) => {
    const imgName = img.replace("/images/", "");
    if (content.includes(img) || content.includes(imgName)) {
      imageUsageMap.set(img, true);
      foundReferences.add(img);
    }
  });

  // เช็ครูปที่ถูกเรียกแต่ไม่มีไฟล์จริง
  const regex = /\/images\/[a-zA-Z0-9\-_./]+\.(jpg|jpeg|png|gif|webp|svg)/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const referencedImg = match[0];
    if (!imageUsageMap.has(referencedImg)) {
      missingImages.add(referencedImg);
    }
  }
});

// 4. แยกแยะผลลัพธ์
const unusedImages = allImages.filter((img) => !imageUsageMap.get(img));

console.log("\n--- 📊 AUDIT REPORT ---");

if (missingImages.size > 0) {
  console.error("\n❌ MISSING IMAGES (Called in code but not found in disk):");
  missingImages.forEach((img) => console.error(`   - ${img}`));
} else {
  console.log("\n✅ No missing images found.");
}

if (unusedImages.length > 0) {
  console.log(`\n⚠️  UNUSED IMAGES (${unusedImages.length} files found):`);

  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR);

  unusedImages.forEach((img) => {
    const sourcePath = path.join("public", img);
    const destPath = path.join(BACKUP_DIR, path.basename(img));

    console.log(`   - Moving: ${img} -> ${BACKUP_DIR}`);

    try {
      fs.renameSync(sourcePath, destPath);
    } catch (err) {
      console.error(`   ! Failed to move ${img}:`, err.message);
    }
  });
  console.log(`\n📦 Unused images have been moved to: ${BACKUP_DIR}`);
} else {
  console.log("\n✨ Everything is clean! No unused images found.");
}

console.log("\n--- END OF AUDIT ---");
