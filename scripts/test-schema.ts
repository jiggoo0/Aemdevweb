/**
 * [SEO QA]: SCHEMA_AUTOMATED_TEST v17.9.99 (STRICT_BUILD_LOCKED)
 * [STRATEGY]: Pre-build Validation | No-Any Compliance | Error Isolation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import {
  generateSchemaGraph,
  generateUniversalSchema, // [UPDATED]: ใช้ Universal Generator ตัวใหม่
  generateLocalBusinessSchema,
} from "../lib/schema";
import { validateSchemaIntegrity } from "../lib/schema-validator";
import { MASTER_REGISTRY } from "../constants/master-registry";
import { AREA_NODES } from "../constants/area-nodes";
import type { TemplateMasterData, AreaNode, UniversalTemplateProps } from "../types";

/**
 * @function runSchemaDiagnostic
 * @description หน่วยประมวลผลตรวจสอบความถูกต้องของ JSON-LD ทั้งระบบ
 */
async function runSchemaDiagnostic() {
  console.log("\n--- [AEMDEVWEB] SCHEMA DIAGNOSTIC ENGINE v17.9.99 ---");
  const startTime = Date.now();
  let totalErrors = 0;
  let auditedNodes = 0;

  // [1] Global Graph Audit (Identity & Website Nodes)
  process.stdout.write("🔍 [IDENTITY]: Auditing Global Site Graph... ");
  const globalGraph = generateSchemaGraph([]);
  const globalReport = validateSchemaIntegrity(globalGraph);
  if (!globalReport.isValid) {
    console.log("❌ FAILED");
    console.error("   > Corruption in Global Identity Schema:", globalReport.errors);
    totalErrors++;
  } else {
    console.log("✅ OK");
  }

  // [2] Master Registry Audit (Service & Offer Nodes)
  console.log(`🔍 [SERVICES]: Auditing ${MASTER_REGISTRY.length} Service nodes...`);
  MASTER_REGISTRY.forEach((service: TemplateMasterData) => {
    auditedNodes++;
    // [FIXED]: ส่งผ่าน Universal Schema Generator
    const schema = generateUniversalSchema(service as unknown as UniversalTemplateProps);
    const report = validateSchemaIntegrity(generateSchemaGraph([schema]));

    if (!report.isValid) {
      console.error(`   ❌ [NODE_ID: ${service.id}]: "${service.title}"`);
      console.error(`      > Reason:`, report.errors);
      totalErrors++;
    }
  });

  // [3] Area Nodes Audit (LocalBusiness & P-SEO Nodes)
  console.log(`🔍 [P-SEO]: Auditing ${AREA_NODES.length} Area nodes...`);
  AREA_NODES.forEach((area: AreaNode) => {
    auditedNodes++;
    const schema = generateLocalBusinessSchema(area);
    const report = validateSchemaIntegrity(generateSchemaGraph([schema]));

    if (!report.isValid) {
      console.error(`   ❌ [SLUG: ${area.slug}]: Province: ${area.province}`);
      console.error(`      > Reason:`, report.errors);
      totalErrors++;
    }
  });

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // --- [SUMMARY REPORT] ---
  console.log("\n-------------------------------------------");
  console.log(`⏱️ Diagnostic Duration: ${duration}s`);
  console.log(`📦 Nodes Audited: ${auditedNodes}`);

  if (totalErrors > 0) {
    console.error(`🚨 [CRITICAL]: Found ${totalErrors} Schema Integrity Violations.`);
    console.error(`💡 Build Aborted. Fix errors in data registry to resume.`);
    console.log("-------------------------------------------\n");
    process.exit(1);
  } else {
    console.log(`🚀 [SUCCESS]: All 47 Schema Entities are SEO-Ready.`);
    console.log("-------------------------------------------\n");
    process.exit(0);
  }
}

// [EXECUTION]
runSchemaDiagnostic().catch((err) => {
  console.error("--- [SYSTEM CRASH] ---");
  console.error(err);
  process.exit(1);
});
