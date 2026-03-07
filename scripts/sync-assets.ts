/**
 * [ASSET ARCHITECT]: LOCAL_TO_CLOUD_SYNC v18.0.0 (SYNC_MAXIMIZED)
 * [STRATEGY]: Recursive Discovery | Batch Upload | Vercel Blob Edge
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const IMAGE_DIR = path.join(process.cwd(), "public/images");

/**
 * @function walkDir
 * ค้นหาไฟล์ทั้งหมดในโฟลเดอร์แบบ Recursive
 */
function walkDir(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

async function sync() {
  console.log("🚀 Starting Asset Sync: Local -> Vercel Blob");

  if (!fs.existsSync(IMAGE_DIR)) {
    console.error("❌ Error: public/images directory not found.");
    return;
  }

  const files = walkDir(IMAGE_DIR);
  console.log(`📊 Found ${files.length} assets to sync...`);

  const results: Record<string, string> = {};

  for (const filePath of files) {
    const relativePath = path.relative(path.join(process.cwd(), "public"), filePath);
    const fileBuffer = fs.readFileSync(filePath);

    try {
      console.log(`📤 Uploading: ${relativePath}...`);
      const { url } = await put(relativePath, fileBuffer, {
        access: "public",
        addRandomSuffix: false, // ใช้ชื่อเดิมเพื่อให้จัดการง่ายในการอัปเดต DB
      });
      results[relativePath] = url;
      console.log(`✅ Success: ${url}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${relativePath}:`, error);
    }
  }

  // [OUTPUT]: บันทึกแผนผังรูปภาพใหม่ลงไฟล์เพื่อให้คุณนำไปใช้ต่อ
  fs.writeFileSync("asset-migration-report.json", JSON.stringify(results, null, 2));

  console.log("\n✨ Asset Sync Completed!");
  console.log("📝 Report saved to: asset-migration-report.json");
}

sync();
