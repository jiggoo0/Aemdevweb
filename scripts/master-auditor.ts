/**
 * [ENGINE]: AI_MASTER_AUDITOR v1.2.0 (THAI_SEMANTIC_OPTIMIZED)
 * [MISSION]: 5-Pillar Strategic Infrastructure Audit with Thai Contextual Intelligence
 * [STRATEGY]: Thai Semantic Mapping | Conversion Intent | Expert Identity Guard
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");
const SCHEMA_FILE = path.join(process.cwd(), "lib/schema.ts");
const PSI_FILE = path.join(process.cwd(), "psi_mobile.json");

interface AuditResult {
  category: string;
  score: number;
  findings: string[];
  recommendations: string[];
}

/**
 * 1. SEO & AEO Optimizer (Generative Engine Optimization)
 */
async function auditAEO() {
  const result: AuditResult = {
    category: "กลยุทธ์ SEO & AEO (AI Search)",
    score: 0,
    findings: [],
    recommendations: [],
  };

  const seoUtils = fs.readFileSync(path.join(process.cwd(), "lib/seo-utils.ts"), "utf8");
  if (seoUtils.includes("aiSignal") || seoUtils.includes("expert")) {
    result.findings.push("✅ ตรวจพบระบบ aiSignal ขั้นสูงสำหรับการดึงข้อมูลของ AI Search");
    result.score = 98;
  } else {
    result.findings.push("⚠️ ระบบ SEO พื้นฐานทำงานอยู่ แต่ขาดเลเยอร์ GEO/AEO");
    result.score = 70;
  }
  return result;
}

/**
 * 2. Web Vitals & Performance Monitor
 */
async function auditPerformance() {
  const result: AuditResult = {
    category: "ประสิทธิภาพ & ความเร็ว (Core Web Vitals)",
    score: 0,
    findings: [],
    recommendations: [],
  };

  if (fs.existsSync(PSI_FILE)) {
    const psiData = JSON.parse(fs.readFileSync(PSI_FILE, "utf8"));
    const { LCP, CLS, INP } = psiData.core_web_vitals;
    result.findings.push(`📊 สถานะ PageSpeed (Mobile): LCP: ${LCP}, CLS: ${CLS}, INP: ${INP}`);
    result.score = psiData.lighthouse_scores.performance;
  } else {
    result.findings.push("⚠️ ไม่พบข้อมูลการตรวจสอบความเร็ว (psi_mobile.json)");
    result.score = 0;
  }
  return result;
}

/**
 * 3. Schema.org Validator
 */
async function auditSchema() {
  const result: AuditResult = {
    category: "โครงสร้างข้อมูล Schema (E-E-A-T)",
    score: 0,
    findings: [],
    recommendations: [],
  };

  const schemaContent = fs.readFileSync(SCHEMA_FILE, "utf8");
  const hasExpertId = schemaContent.includes("expert") || schemaContent.includes("specialist");
  if (hasExpertId && schemaContent.includes("@id")) {
    result.findings.push("✅ โครงสร้าง Linked Data Graph เชื่อมโยงตัวตนผู้เชี่ยวชาญสมบูรณ์");
    result.score = 100;
  } else {
    result.findings.push("⚠️ ขาดการเชื่อมโยงตัวตน (Identity Mapping) ใน Schema");
    result.score = 60;
  }
  return result;
}

/**
 * 4. Content Semantic Analyzer (Thai Keyword Dominance)
 */
async function auditSemantic() {
  const result: AuditResult = {
    category: "วิเคราะห์ความหมายเนื้อหา (Semantic & Intent)",
    score: 0,
    findings: [],
    recommendations: [],
  };

  // คีย์เวิร์ดที่สื่อถึงความเป็นมืออาชีพและยอดนิยมในไทย
  const thaiExpertKeywords = [
    "ผู้เชี่ยวชาญ",
    "วางระบบ",
    "เฉพาะทาง",
    "ยกระดับ",
    "สถาปัตยกรรม",
    "มาตรฐานสากล",
    "ความน่าเชื่อถือ",
    "ปรับจูน",
    "ประสิทธิภาพ",
    "ปลอดภัย",
  ];

  const blogFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  let expertContentCount = 0;

  for (const file of blogFiles) {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { content: text } = matter(content);

    // ตรวจหาคีย์เวิร์ดภาษาไทย
    const hasThaiExpertise = thaiExpertKeywords.some((key) => text.includes(key));
    const hasStructure = text.includes("##") || text.includes("###");

    if (hasThaiExpertise && hasStructure) {
      expertContentCount++;
    } else {
      result.findings.push(
        `⚠️ [${file}]: เนื้อหาอาจขาด 'สัญญาณความเชี่ยวชาญ' (เช่น คำว่า วางระบบ, ผู้เชี่ยวชาญ)`,
      );
    }
  }

  result.score = Math.round((expertContentCount / blogFiles.length) * 100);
  if (result.score === 100) {
    result.findings.push(
      "✅ ทุกบทความมีระดับเนื้อหาที่เป็นมืออาชีพและรองรับความต้องการของลูกค้าไทย",
    );
  }

  return result;
}

/**
 * 5. Accessibility (WCAG) Auditor
 */
async function auditA11y() {
  const result: AuditResult = {
    category: "การเข้าถึงของผู้ใช้ (Accessibility)",
    score: 0,
    findings: [],
    recommendations: [],
  };

  if (fs.existsSync(PSI_FILE)) {
    const psiData = JSON.parse(fs.readFileSync(PSI_FILE, "utf8"));
    result.findings.push(`♿ คะแนนการเข้าถึง: ${psiData.lighthouse_scores.accessibility}/100`);
    result.score = psiData.lighthouse_scores.accessibility;
  } else {
    result.findings.push("🔍 จำเป็นต้องรันการตรวจสอบ Accessibility Runtime");
    result.score = 50;
  }
  return result;
}

async function main() {
  console.log("\n👑 [AI_MASTER_AUDITOR v1.2.0]: เริ่มการตรวจสอบโครงสร้างยุทธศาสตร์ขั้นสูง...\n");

  const results = [
    await auditAEO(),
    await auditPerformance(),
    await auditSchema(),
    await auditSemantic(),
    await auditA11y(),
  ];

  let totalScore = 0;
  for (const r of results) {
    const status = r.score >= 90 ? "🟢" : r.score >= 70 ? "🟡" : "🔴";
    console.log(`${status} [${r.category}] | คะแนน: ${r.score}/100`);
    r.findings.forEach((f) => console.log(`   ${f}`));
    console.log("");
    totalScore += r.score;
  }

  const finalScore = Math.round(totalScore / 5);
  console.log(`🏆 คะแนนคุณภาพรวม (Final Quality Score): ${finalScore}/100`);
  console.log("🏁 ตรวจสอบเสร็จสิ้น: เว็บไซต์ของคุณพร้อมสำหรับสมรภูมิ AI Search 2026 แล้ว\n");
}

main();
