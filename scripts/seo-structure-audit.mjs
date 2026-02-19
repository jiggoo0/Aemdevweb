/**
 * [SYSTEM_SCRIPT]: MASTER_INTEGRITY_ORCHESTRATOR v18.0.5 (ULTIMATE_UNIFIED)
 * [STRATEGY]: Template Validation + SEO Inspection | TS-Loader Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

async function runMasterAudit() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const ROOT = path.resolve(__dirname, "..");
  const TEMPLATE_BASE = path.join(ROOT, "components/templates");

  const globalStats = {
    templates: { total: 0, passed: 0, failed: 0 },
    seo: { total: 0, optimized: 0, weak: 0 },
  };

  console.log("\n" + "=".repeat(60));
  console.log("🛡️  AEMZA MACKS - MASTER AUDIT PROTOCOL");
  console.log("=".repeat(60));

  try {
    // --- PHASE 01: TEMPLATE INTEGRITY ---
    console.log("\n[PHASE 01]: TEMPLATE INTEGRITY CHECK");
    console.log("-".repeat(40));

    const { MASTER_REGISTRY } = await import("../constants/master-registry.ts");

    MASTER_REGISTRY.forEach((service) => {
      globalStats.templates.total++;
      const slug = service.templateSlug;
      const dir = path.join(TEMPLATE_BASE, slug);

      process.stdout.write(`Node: [${slug.padEnd(15)}] `);

      if (!fs.existsSync(dir) || !fs.existsSync(path.join(dir, "Index.tsx"))) {
        console.log("❌ CRITICAL_MISSING");
        globalStats.templates.failed++;
      } else {
        const compCount = fs.existsSync(path.join(dir, "_components"))
          ? fs.readdirSync(path.join(dir, "_components")).filter((f) => !f.startsWith(".")).length
          : 0;
        console.log(`✅ OK (${compCount.toString().padStart(2)} comps)`);
        globalStats.templates.passed++;
      }
    });

    // --- PHASE 02: SEO CONTENT INSPECTION ---
    console.log("\n[PHASE 02]: SEO CONTENT INSPECTION");
    console.log("-".repeat(40));

    const { AREA_NODES } = await import("../constants/area-nodes/index.ts");

    AREA_NODES.forEach((node) => {
      globalStats.seo.total++;
      const issues = [];

      if (!node.seoTitle || node.seoTitle.length < 30) issues.push("Title thin");
      if (!node.seoDescription || node.seoDescription.length < 100) issues.push("Desc thin");
      if ((node.keywords?.length || 0) < 3) issues.push("Low keywords");
      if (!node.localContext?.hyperLocalKeywords?.length) issues.push("No hyper-local");

      process.stdout.write(`Area: [${node.province.padEnd(12)}] `);

      if (issues.length === 0) {
        console.log("✅ OPTIMIZED");
        globalStats.seo.optimized++;
      } else {
        console.log(`⚠️  WEAK (${issues.length} issues)`);
        globalStats.seo.weak++;
      }
    });

    // --- FINAL REPORT ---
    console.log("\n" + "=".repeat(60));
    console.log("📊 FINAL AUDIT REPORT");
    console.log("=".repeat(60));
    console.log(`TEMPLATES: ${globalStats.templates.passed}/${globalStats.templates.total} ACTIVE`);
    console.log(`SEO NODES: ${globalStats.seo.optimized}/${globalStats.seo.total} OPTIMIZED`);
    console.log("=".repeat(60));

    if (globalStats.templates.failed > 0 || globalStats.seo.weak > 2) {
      console.log("\n🚨 ACTION REQUIRED: ระบบตรวจพบจุดบกพร่องที่ต้องแก้ไขก่อน Deploy");
      process.exit(1);
    } else {
      console.log("\n✨ SYSTEM STABLE: โครงสร้างและเนื้อหาพร้อมสำหรับการรันโปรเจกต์");
      process.exit(0);
    }
  } catch (err) {
    console.error(`\n🚨 [ENGINE_CRASH]: ${err.message}`);
    process.exit(1);
  }
}

runMasterAudit();
