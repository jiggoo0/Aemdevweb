/**
 * [AI TOOL]: CONTENT_PERSONA_ANALYZER v1.0.1
 * [STRATEGY]: Psychological Trigger Scan | ROI Focus Detection | B2B Hook Analysis
 */

const fs = require("fs");
const path = require("path");

const ROI_INDICATORS = [/ROI/gi, /ยอดขาย/g, /ผลตอบแทน/g, /กำไร/g, /ยอดโอน/g, /ลดต้นทุน/g];
const AUTHORITY_INDICATORS = [/Specialist/gi, /ผู้เชี่ยวชาญ/g, /วิศวกรรม/g, /Infrastructure/gi];

function analyzeContent() {
  console.log("🧠 Analyzing Content Psychology for B2B/SME Alignment...");

  const contentPath = "./content/blog";
  const results = [];

  if (!fs.existsSync(contentPath)) {
    console.log("⚠️ Directory not found: ./content/blog");
    return;
  }

  const files = fs.readdirSync(contentPath).filter((f) => f.endsWith(".mdx"));

  files.forEach((file) => {
    const content = fs.readFileSync(path.join(contentPath, file), "utf8");
    let roiScore = 0;
    let authScore = 0;

    ROI_INDICATORS.forEach((reg) => {
      const matches = content.match(reg);
      if (matches) roiScore += matches.length;
    });

    AUTHORITY_INDICATORS.forEach((reg) => {
      const matches = content.match(reg);
      if (matches) authScore += matches.length;
    });

    results.push({
      file: file.slice(0, 30) + "...",
      roiHits: roiScore,
      authorityHits: authScore,
      status: roiScore >= 2 && authScore >= 2 ? "✅ Strong Hook" : "⚠️ Needs Refinement",
    });
  });

  console.log("\n📈 CONTENT PSYCHOLOGY REPORT:");
  console.table(results);
}

analyzeContent();
