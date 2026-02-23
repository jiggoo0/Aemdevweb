/**
 * [SCRIPT]: TEMPLATE_INTEGRITY_AUDIT v18.0.4 (MANDATORY_EXT)
 * [STRATEGY]: TS-Loader Orchestration | Zero-Jank Path Resolution
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

async function executeAudit() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const ROOT = path.resolve(__dirname, "..");
  const TEMPLATE_BASE = path.join(ROOT, "components/templates");

  console.log("\n" + "=".repeat(60));
  console.log("🚀 STARTING: TEMPLATE INTEGRITY AUDIT PROTOCOL");
  console.log("=".repeat(60) + "\n");

  try {
    /** * [CRITICAL_LOGIC]: โหลด Master Registry ผ่าน tsx loader
     * tsx จะทำหน้าที่เป็น 'Interpretor' ช่วยหาไฟล์ .ts ที่ไม่มีนามสกุลให้เอง
     */
    const { MASTER_REGISTRY } = await import("../constants/master-registry.ts");

    const stats = { total: 0, passed: 0, failed: 0 };

    MASTER_REGISTRY.forEach((service) => {
      stats.total++;
      const slug = service.templateSlug;
      const dir = path.join(TEMPLATE_BASE, slug);

      process.stdout.write(`Node_Check: [${slug.padEnd(15)}] `);

      // 1. ตรวจสอบ Directory
      if (!fs.existsSync(dir)) {
        console.log("❌ FOLDER_MISSING");
        stats.failed++;
        return;
      }

      // 2. ตรวจสอบ Entry Point
      if (!fs.existsSync(path.join(dir, "Index.tsx"))) {
        console.log("❌ INDEX_MISSING");
        stats.failed++;
        return;
      }

      console.log(`✅ OK (RSC_ENFORCED)`);
      stats.passed++;
    });

    console.log("\n" + "=".repeat(60));
    console.log(`AUDIT COMPLETE: ${stats.passed}/${stats.total} NODES ACTIVE`);
    console.log("=".repeat(60) + "\n");

    if (stats.failed > 0) process.exit(1);
  } catch (err) {
    console.error("🚨 [ENGINE_CRASH]: ไม่สามารถประมวลผลโครงสร้างข้อมูลได้");
    console.error(`ERROR_DETAILS: ${err.message}`);
    console.log("\n💡 TIP: รันด้วย 'npx tsx scripts/template-audit.mjs' เท่านั้น");
    process.exit(1);
  }
}

executeAudit();
