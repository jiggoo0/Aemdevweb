#!/bin/bash

# ==============================================================================
# PROJECT: aemdevweb.com - Professional Full Context & Code Analysis
# DESCRIPTION: Compiles architectural structure, critical source code, and business metadata.
# VERSION: 2.6.0 (Updated: 2026-01-29)
# IDENTITY: Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
# ==============================================================================

OUTPUT_FILE="aemdevweb-summary-with-code.md"
REPORT_FILE="pre-deploy-report.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://www.aemdevweb.com"

# --- [CORE METADATA]: พิกัดตัวตนแบรนด์ ---
COMPANY_NAME="AEMDEVWEB"
PROJECT_NAME="AEM Professional Web Infrastructure"
PROJECT_SHORT="AEMDEVWEB"
PROJECT_NAME_TH="ระบบโครงสร้างเว็บไซต์และ Technical SEO ประสิทธิภาพสูง"
TITLE="AEMDEVWEB | บริการวางระบบเว็บไซต์และ Technical SEO โดย นายเอ็มซ่ามากส์"
SLOGAN="เปลี่ยนพิกัดคนดูให้เป็นกำไร ด้วยระบบที่ซิ่งและเนี้ยบที่สุดในระดับวินาที"
EXPERT="Alongkorl Yomkerd (นายเอ็มซ่ามากส์)"
ROLE="Technical SEO Specialist & Web Infrastructure Lead"
DESCRIPTION="ผู้นำด้านการพัฒนาสถาปัตยกรรมเว็บไซต์ด้วย Next.js 16 มุ่งเน้นความเร็วระดับเป็นเลิศ (LCP < 0.8 วินาที) วางโครงสร้างระบบเพื่อรองรับ Search Algorithm 2026"
OG_IMAGE="https://www.aemdevweb.com/og-image-seo-2026.png"
EMAIL="me@aemdevweb.com"

# --- [STRATEGIC KEYWORDS] ---
KEYWORDS_CORE=("เว็บไซต์สำเร็จรูป" "ทำเซลเพจ" "เว็บ SME" "รับทำเว็บไซต์")
KEYWORDS_TECH=("Next.js 16" "Tailwind CSS 4" "Technical SEO" "Web Performance")
KEYWORDS_BRAND=("นายเอ็มซ่ามากส์" "AEMDEVWEB" "เอ็มเดฟเว็บ" "นาย อลงกรณ์ ยมเกิด")

# --- [CONTACT & CONNECTIVITY] ---
LINKS_LINE="https://lin.ee/6lgJox0"
LINKS_LINE_ID="@127cnthn"
LINKS_FACEBOOK="https://facebook.com/aemdevweb"
LINKS_LINKEDIN="https://www.linkedin.com/in/alongkorl-aemdevweb"
LINKS_PERSONAL="https://me.aemdevweb.com"

# --- [CONVERSION & STANDARDS] ---
CTA_MAIN="ปรึกษาพิกัดงานกับนายเอ็ม"
CTA_SECONDARY="ดูแคตตาล็อกระบบหน้าเว็บ"
CTA_PRICING="เริ่มต้นพิกัด 1,990.-"
STANDARDS_PERFORMANCE="100"
STANDARDS_LCP="0.8"
STANDARDS_SECURITY="Enterprise Grade (SSL/HSTS)"
STANDARDS_AI="High (JSON-LD Knowledge Graph Ready)"

# Next.js Enterprise Directories
WHITELIST_DIRS=(
  "app" "actions" "components" "lib" "hooks" "types"
  "scripts" "public" "data" "constants" "providers"
  "content" "styles" "services" "config"
)

# Critical files for Full Context Analysis
SCAN_FILES=(
  "config/ai-context.core.md"
  "config/ai-system-role.md"
  "config/ai-context.dna.md"
  "$REPORT_FILE"
  "app/globals.css"
  "app/layout.tsx"
  "proxy.ts"
  "app/robots.ts"
  "app/sitemap.ts"
  "types/index.ts"
  "types/template.ts"
  "app/(main)/page.tsx"
  "app/(shops)/templates/[slug]/page.tsx"
  "app/(shops)/templates/_registry.tsx"
  "app/(main)/blog/[slug]/page.tsx"
  "constants/site-config.ts"
  "constants/services-data.ts"
  "constants/navigation.ts"
  "tsconfig.json"
  "package.json"
  "next.config.mjs"
  "components.json"
  "lib/blog.ts"
  "lib/case-studies.ts"
  "lib/template.ts"
  ".env"
)

IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env"

# REMOVE OLD FILE
rm -f "$OUTPUT_FILE"
echo "[INFO] Generating Professional Full Context Report for $PROJECT_DOMAIN..."

{
  # --- YAML Metadata (For AI & Automation ingestion) ---
  echo "---"
  echo "domain: $PROJECT_DOMAIN"
  echo "canonical: $PROJECT_URL"
  echo "generatedAt: $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
  echo "status: production-analysis"
  echo "type: full-technical-context"
  echo "identity: Alongkorl Yomkerd"
  echo "project:"
  echo "  name: $PROJECT_NAME"
  echo "  shortName: $PROJECT_SHORT"
  echo "  nameTH: $PROJECT_NAME_TH"
  echo "  companyName: $COMPANY_NAME"
  echo "  title: $TITLE"
  echo "  slogan: $SLOGAN"
  echo "  expert: $EXPERT"
  echo "  role: $ROLE"
  echo "  description: $DESCRIPTION"
  echo "  url: $PROJECT_URL"
  echo "  ogImage: $OG_IMAGE"
  echo "  email: $EMAIL"
  echo "keywords:"
  echo "  core: [\"${KEYWORDS_CORE[*]}\"]"
  echo "  tech: [\"${KEYWORDS_TECH[*]}\"]"
  echo "  brand: [\"${KEYWORDS_BRAND[*]}\"]"
  echo "cta:"
  echo "  main: $CTA_MAIN"
  echo "  secondary: $CTA_SECONDARY"
  echo "  pricing: $CTA_PRICING"
  echo "standards:"
  echo "  performance: $STANDARDS_PERFORMANCE"
  echo "  lcp: $STANDARDS_LCP"
  echo "  security: $STANDARDS_SECURITY"
  echo "  aiReadiness: $STANDARDS_AI"
  echo "links:"
  echo "  line: $LINKS_LINE"
  echo "  lineId: $LINKS_LINE_ID"
  echo "  facebook: $LINKS_FACEBOOK"
  echo "  linkedin: $LINKS_LINKEDIN"
  echo "  personal: $LINKS_PERSONAL"
  echo "---"
  echo ""

  # --- Report Header ---
  echo "# Project Context & Code Analysis: AEMDEVWEB"
  echo ""
  echo "พิกัดวิเคราะห์ระบบงานออกแบบเพื่อ: SME, ธุรกิจบริการ, การท่องเที่ยว, ส่งออก, และโรงงานอุตสาหกรรม"
  echo ""

  # --- 1. Project Summary Table ---
  echo "## 1. Project Summary (พิกัดภาพรวม)"
  echo "| Field | Value |"
  echo "|-------|-------|"
  echo "| Brand | $COMPANY_NAME |"
  echo "| Project | $PROJECT_NAME ($PROJECT_SHORT) |"
  echo "| Expert | $EXPERT |"
  echo "| Role | $ROLE |"
  echo "| Slogan | $SLOGAN |"
  echo "| URL | $PROJECT_URL |"
  echo ""

  # --- 2. Technical Standards Table ---
  echo "## 2. Technical Standards (พิกัดสมรรถนะ)"
  echo "| Metric | Value |"
  echo "|--------|-------|"
  echo "| Performance Score | $STANDARDS_PERFORMANCE/100 |"
  echo "| LCP Goal | ${STANDARDS_LCP}s |"
  echo "| Security Standard | $STANDARDS_SECURITY |"
  echo "| AI Infrastructure | $STANDARDS_AI |"
  echo ""

  # --- 3. Project Health ---
  echo "## 3. Project Health & Deployment Readiness"
  if [ -f "$REPORT_FILE" ]; then
    if grep -qi "READY FOR DEPLOY" "$REPORT_FILE"; then
      echo "Verdict: ✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบพิกัดมาตรฐานโปรดักชัน)"
    else
      echo "Verdict: ⚠️ **FIX REQUIRED** (ตรวจพบจุดที่ต้องจูนสมรรถนะเพิ่มเติม)"
    fi
    echo ""
    if grep -q "###.*Route" "$REPORT_FILE"; then
      echo "### Production Route Map (พิกัดเส้นทางระบบ)"
      echo '```text'
      sed -n '/###.*Route/,/---/p' "$REPORT_FILE" | grep -vE "###|---" | sed '/^$/d'
      echo '```'
    fi
  fi
  echo ""

  # --- 4. File Statistics ---
  echo "## 4. File Statistics (พิกัดจำนวนไฟล์)"
  echo '```text'
  find "${WHITELIST_DIRS[@]}" -type f 2>/dev/null | sed 's/.*\.//' | sort | uniq -c | sort -nr
  echo '```'
  echo ""

  # --- 5. Directory Structure ---
  echo "## 5. Directory Structure (พิกัดสถาปัตยกรรม)"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "### Folder: $dir"
      echo '```text'
      find "$dir" -maxdepth 4 -not -path '*/.*' | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
      echo '```'
      echo ""
    fi
  done

  # --- 6. Critical Code Files ---
  echo "## 6. Critical Code Analysis (พิกัดชุดคำสั่งยุทธศาสตร์)"
  for file in "${SCAN_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "### File: $file"
      ext="${file##*.}"
      lang="text"
      case "$ext" in
        ts|tsx) lang="typescript" ;;
        js|mjs) lang="javascript" ;;
        json) lang="json" ;;
        md) lang="markdown" ;;
        css) lang="css" ;;
      esac
      echo '```'"$lang"
      if [[ "$file" == *".env"* ]]; then
        # ปิดพิกัดความลับในรายงาน
        sed 's/=.*/= "REDACTED_BY_AEM_SPECIALIST"/' "$file"
      elif [ "$file" = "package.json" ] && command -v jq >/dev/null 2>&1; then
        jq '{name, version, scripts, dependencies, devDependencies}' package.json
      else
        cat "$file"
      fi
      echo '```'
      echo "---"
      echo ""
    fi
  done

  # --- 7. Call-to-Action ---
  echo "## 7. Call-to-Action (พิกัดปิดการขาย)"
  echo "- **Main:** $CTA_MAIN"
  echo "- **Secondary:** $CTA_SECONDARY"
  echo "- **Pricing:** $CTA_PRICING"
  echo ""

  # --- 8. Links Section ---
  echo "## 8. Contact & Connectivity"
  echo "- **Line:** [$LINKS_LINE_ID]($LINKS_LINE)"
  echo "- **Facebook:** [AEMDEVWEB]($LINKS_FACEBOOK)"
  echo "- **LinkedIn:** [Alongkorl]($LINKS_LINKEDIN)"
  echo "- **Personal Node:** [me.aemdevweb.com]($LINKS_PERSONAL)"
  echo ""

  echo "---"
  echo "Report generated by $PROJECT_DOMAIN Internal Automation Engine."

} > "$OUTPUT_FILE"

echo "[SUCCESS] พิกัดรายงาน Full Context ถูกบันทึกไว้ที่ -> $OUTPUT_FILE"
