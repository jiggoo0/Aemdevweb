/* global console */
/**
 * [HELPER]: BLUR_DATA_GENERATOR v17.7.8 (METADATA_LOCKED)
 * [STRATEGY]: Sharp Engine | Dimension Extraction | Zero-CLS Hardening
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */
import sharp from "sharp";
import { writeFileSync, readdirSync, lstatSync } from "fs";
import { join, relative } from "path";

const IMG_DIR = "./public/images";
const OUTPUT_FILE = "./constants/image-blur-data.ts";
const registry = {};

// [FILTER]: ระบุโฟลเดอร์ที่ไม่ต้องการประมวลผล
const EXCLUDED_DIRS = ["temp", "unused"];

async function processDirectory(dir) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    const relPath = relative(IMG_DIR, fullPath);

    if (lstatSync(fullPath).isDirectory()) {
      if (EXCLUDED_DIRS.some((ex) => relPath.includes(ex))) continue;
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
      const publicPath = "/" + relative("./public", fullPath);

      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        // ประมวลผลรูปภาพจิ๋วเพื่อทำ Blur (เพิ่มคุณภาพเล็กน้อยเป็น 25)
        const buffer = await image.resize(12).webp({ quality: 25 }).toBuffer();

        // สร้าง Object ตามโครงสร้าง ImageBlurNode
        registry[publicPath] = {
          blurDataURL: `data:image/webp;base64,${buffer.toString("base64")}`,
          width: metadata.width || 0,
          height: metadata.height || 0,
        };

        console.log(`⚡ [Sharp] Optimized [${metadata.width}x${metadata.height}]: ${publicPath}`);
      } catch (err) {
        console.error(`❌ Failed: ${publicPath}`, err.message);
      }
    }
  }
}

console.log("--- STARTING HIGH-FIDELITY BLUR GENERATION ---");
try {
  await processDirectory(IMG_DIR);

  // [FIX]: ใช้ 'import type' เพื่อแก้ปัญหา ESLint consistent-type-imports
  const content = `/**
 * [SYSTEM GENERATED]: IMAGE_BLUR_REGISTRY v17.7.8
 * DO NOT EDIT MANUALLY. Run 'node scripts/gen-blur-data.mjs'
 */
import type { ImageBlurRegistry } from "@/types";

export const IMAGE_BLUR_DATA: ImageBlurRegistry = ${JSON.stringify(registry, null, 2)} as const;
`;

  writeFileSync(OUTPUT_FILE, content);
  console.log(`\n--- COMPLETED: ${Object.keys(registry).length} nodes baked ---`);
} catch (error) {
  console.error("--- CRITICAL SYSTEM ERROR ---", error.message);
}
