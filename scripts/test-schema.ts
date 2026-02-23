/**
 * [SEO QA]: SCHEMA_AUTOMATED_TEST v18.0.3 (STRICT_TYPES)
 * [STRATEGY]: Pre-build Validation | Identity Injection Test | Zero-Any Compliance
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import {
  generateSchemaGraph,
  generateUniversalSchema,
  generateLocalBusinessSchema,
} from "../lib/schema";
import { validateSchemaIntegrity } from "../lib/schema-validator";
import type { ValidationReport } from "../lib/schema-validator";
import { MASTER_REGISTRY } from "../constants/master-registry";
import { AREA_NODES } from "../constants/area-nodes";
import type { AreaNode, TemplateMasterData } from "../types";

async function runSchemaDiagnostic() {
  console.log("\n--- [AEMDEVWEB] SCHEMA DIAGNOSTIC ENGINE v18.0.3 ---");
  const startTime = Date.now();
  let totalErrors = 0;
  let auditedNodes = 0;

  // ---------------------------------------------------------
  // [1] Global Graph Audit (Identity & E-E-A-T)
  // ---------------------------------------------------------
  process.stdout.write("🔍 [IDENTITY]: Auditing Global Site Graph... ");

  const globalGraph = generateSchemaGraph([]);
  const globalReport: ValidationReport = validateSchemaIntegrity(globalGraph);

  if (!globalReport.isValid) {
    console.log("❌ FAILED");
    globalReport.errors.forEach((e) => console.error(`   > ${e}`));
    totalErrors++;
  } else {
    console.log("✅ OK");
  }

  // ---------------------------------------------------------
  // [2] Service Nodes Audit (7 Services Expected)
  // ---------------------------------------------------------
  console.log(`\n🔍 [SERVICES]: Auditing ${MASTER_REGISTRY.length} Service nodes...`);

  MASTER_REGISTRY.forEach((service: TemplateMasterData) => {
    auditedNodes++;
    const node = generateUniversalSchema(service);
    const graph = generateSchemaGraph([node]);
    const report: ValidationReport = validateSchemaIntegrity(graph);

    if (!report.isValid) {
      console.error(`   ❌ [ID: ${service.id}]: "${service.title}"`);
      report.errors.forEach((e) => console.error(`      > ${e}`));
      totalErrors++;
    }
  });

  // ---------------------------------------------------------
  // [3] Area Nodes Audit (P-SEO / 20 จังหวัด)
  // ---------------------------------------------------------
  console.log(`\n🔍 [P-SEO]: Auditing ${AREA_NODES.length} Area nodes...`);

  AREA_NODES.forEach((area: AreaNode) => {
    auditedNodes++;
    const node = generateLocalBusinessSchema(area);
    const graph = generateSchemaGraph([node]);
    const report: ValidationReport = validateSchemaIntegrity(graph);

    if (!report.isValid) {
      console.error(`   ❌ [SLUG: ${area.slug}]: ${area.province}`);
      report.errors.forEach((e) => console.error(`      > ${e}`));
      totalErrors++;
    }
  });

  // ---------------------------------------------------------
  // [4] Cross-Reference Audit (Registry Sync)
  // ---------------------------------------------------------
  process.stdout.write("\n🔍 [SYNC]: Auditing Master-Area Cross-References... ");
  let syncErrors = 0;

  MASTER_REGISTRY.forEach((service) => {
    const activeNodes = AREA_NODES.filter((a) => a.templateSlug === service.templateSlug);
    if (service.activeAreas?.length !== activeNodes.length) {
      syncErrors++;
      console.error(
        `\n   ❌ [SERVICE: ${service.templateSlug}]: ActiveAreas mismatch (${service.activeAreas?.length} vs ${activeNodes.length})`,
      );
    }
  });

  AREA_NODES.forEach((area) => {
    const service = MASTER_REGISTRY.find((s) => s.templateSlug === area.templateSlug);
    if (!service) {
      syncErrors++;
      console.error(
        `\n   ❌ [AREA: ${area.slug}]: Points to non-existent templateSlug "${area.templateSlug}"`,
      );
    }

    // [TECHNICAL_AUTHORITY_CHECK]: Verify mandatory insights for Area Nodes
    if (area.marketSaturation === undefined) {
      syncErrors++;
      console.error(`\n   ❌ [AREA: ${area.slug}]: Missing marketSaturation data`);
    }
    if (!area.regionalRoadmap || area.regionalRoadmap.length !== 3) {
      syncErrors++;
      console.error(`\n   ❌ [AREA: ${area.slug}]: Missing or invalid 3-step regionalRoadmap`);
    }
  });

  if (syncErrors > 0) {
    console.log("❌ FAILED");
    totalErrors += syncErrors;
  } else {
    console.log("✅ OK");
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  // ---------------------------------------------------------
  // [SUMMARY REPORT]
  // ---------------------------------------------------------
  console.log("\n-------------------------------------------");
  console.log(`⏱️  Diagnostic Duration: ${duration}s`);
  console.log(`📦 Nodes Audited: ${auditedNodes}`);

  if (totalErrors > 0) {
    console.error(`🚨 [CRITICAL]: Found ${totalErrors} Schema Violations.`);
    console.error(`💡 ACTION: Fix Absolute URL logic or Data Registry files.`);
    process.exit(1);
  } else {
    console.log(`🚀 [SUCCESS]: System Integrity Verified. No SEO Leaks found.`);
    console.log("-------------------------------------------\n");
    process.exit(0);
  }
}

// Global Crash Guard
runSchemaDiagnostic().catch((err) => {
  console.error("\n💥 [SYSTEM CRASH]: Unexpected Diagnostic Failure");
  console.error(err);
  process.exit(1);
});
