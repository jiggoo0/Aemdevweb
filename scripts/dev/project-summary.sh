#!/bin/bash

# ==============================================================================
# PROJECT: aemdevweb.com - Professional Full Context & Code Analysis
# DESCRIPTION: Compiles architectural structure, critical source code, and business metadata.
# VERSION: 2.5.0 (2026-01-25)
# IDENTITY: Alongkorl (นายเอ็มซ่ามากส์)
# ==============================================================================

OUTPUT_FILE="aemdevweb-summary-with-code.md"
REPORT_FILE="pre-deploy-report.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://aemdevweb.com"

# Company & Project Metadata
COMPANY_NAME="AEMDEVWEB Co., Ltd."
PROJECT_NAME="AEMDEVWEB"
PROJECT_SHORT="AEM"
PROJECT_NAME_TH="เอ็ม-เดฟ-เว็บ"
TITLE="รับทำเว็บไซต์ Landing Page เน้นปิดการขาย - AEMDEVWEB (นายเอ็มซ่ามากส์)"
SLOGAN="เว็บโหลดไว อันดับพุ่ง ยอดขายมาจริง"
EXPERT="นายเอ็มซ่ามากส์"
ROLE="Technical SEO Consultant & Next.js Structure Specialist"
DESCRIPTION="บริการวางโครงสร้างระบบ Landing Page สำหรับ SME ที่เน้นประสิทธิภาพความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่เลเยอร์แรกโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขาย การันตี LCP 0.6s พร้อมการดูแลชุดระบบระยะยาว"
OG_IMAGE="https://www.aemdevweb.com/og-image.png"
EMAIL="me@aemdevweb.com"

KEYWORDS_CORE=("Technical SEO Optimization" "Organic Search Strategy" "Conversion Rate Optimization")
KEYWORDS_TECH=("Next.js" "React" "Tailwind CSS" "TypeScript" "System Structure")
KEYWORDS_BRAND=("AEMDEVWEB" "นายเอ็มซ่ามากส์" "Alongkorl Yomkerd" "Unlink-th Provider")

LINKS_LINE="https://lin.ee/6lgJox0"
LINKS_LINE_ID="@127cnthn"
LINKS_FACEBOOK="https://facebook.com/aemdevweb"
LINKS_LINKEDIN="https://www.linkedin.com/in/alongkorl-aemdevweb"
LINKS_PERSONAL="https://me.aemdevweb.com"

CTA_MAIN="Consult Project"
CTA_SECONDARY="View All Services"
CTA_PRICING="Check Pricing Plans"

STANDARDS_PERFORMANCE=100
STANDARDS_LCP=0.6
STANDARDS_SECURITY="Enterprise-Grade SSL (HSTS Enabled)"
STANDARDS_AI="Advanced Schema Markup & JSON-LD Injection"

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
  "app/instrumentation.ts"
  "proxy.ts"
  "app/(main)/page.tsx"
  "components/landing/HomeClientSections.tsx"
  "app/(marketing)/[template]/[category]/[slug]/page.tsx"
  "app/(main)/blog/[slug]/page.tsx"
  "constants/site-config.ts"
  "constants/services-data.ts"
  "constants/navigation.ts"
  "tsconfig.json"
  "package.json"
  "types/index.ts"
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
  # --- YAML Metadata ---
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
  echo "# Project Context & Code Analysis"
  echo ""
  echo "Designed for SMEs, service businesses, tourism, export, corporates, partnerships, and industrial factories."
  echo ""

  # --- 1. Project Summary Table ---
  echo "## 1. Project Summary"
  echo "| Field | Value |"
  echo "|-------|-------|"
  echo "| Company Name | $COMPANY_NAME |"
  echo "| Project Name | $PROJECT_NAME ($PROJECT_SHORT) |"
  echo "| Thai Name | $PROJECT_NAME_TH |"
  echo "| Expert | $EXPERT |"
  echo "| Role | $ROLE |"
  echo "| Slogan | $SLOGAN |"
  echo "| URL | $PROJECT_URL |"
  echo "| Email | $EMAIL |"
  echo ""

  # --- 2. Technical Standards Table ---
  echo "## 2. Technical Standards"
  echo "| Metric | Value |"
  echo "|--------|-------|"
  echo "| Performance | $STANDARDS_PERFORMANCE% |"
  echo "| LCP | ${STANDARDS_LCP}s |"
  echo "| Security | $STANDARDS_SECURITY |"
  echo "| AI Readiness | $STANDARDS_AI |"
  echo ""

  # --- 3. Project Health ---
  echo "## 3. Project Health and Deployment Readiness"
  if [ -f "$REPORT_FILE" ]; then
    if grep -qi "READY FOR DEPLOY" "$REPORT_FILE"; then
      echo "Verdict: ✅ READY FOR DEPLOY (Project meets production standards)"
    else
      echo "Verdict: ⚠️ FIX REQUIRED (Check issue highlights)"
    fi
    echo ""
    if grep -q "###.*Route" "$REPORT_FILE"; then
      echo "### Production Route Map"
      echo '```text'
      sed -n '/###.*Route/,/---/p' "$REPORT_FILE" | grep -vE "###|---" | sed '/^$/d'
      echo '```'
    fi
  else
    echo "⚠️ Warning: $REPORT_FILE not found. Run pre-deploy-check.sh for metrics."
  fi
  echo ""

  # --- 4. File Type Distribution ---
  echo "## 4. File Statistics by Extension"
  echo '```text'
  find "${WHITELIST_DIRS[@]}" -type f 2>/dev/null | sed 's/.*\.//' | sort | uniq -c | sort -nr
  echo '```'
  echo ""

  # --- 5. Directory Structure ---
  echo "## 5. Directory Structure (Architecture Tree)"
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
  echo "## 6. Critical Code Analysis"
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
        sed 's/=.*/= "REDACTED"/' "$file"
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

  # --- 7. CTA Section ---
  echo "## 7. Call-to-Action"
  echo "- **Main:** $CTA_MAIN"
  echo "- **Secondary:** $CTA_SECONDARY"
  echo "- **Pricing:** $CTA_PRICING"
  echo ""

  # --- 8. Links Section ---
  echo "## 8. Contact & Links"
  echo "- Line: [$LINKS_LINE_ID]($LINKS_LINE)"
  echo "- Facebook: [$LINKS_FACEBOOK]($LINKS_FACEBOOK)"
  echo "- LinkedIn: [$LINKS_LINKEDIN]($LINKS_LINKEDIN)"
  echo "- Personal: [$LINKS_PERSONAL]($LINKS_PERSONAL)"
  echo ""

  echo "---"
  echo "Report generated by $PROJECT_DOMAIN Internal Automation."

} > "$OUTPUT_FILE"

echo "[SUCCESS] Professional Full Context Report saved to -> $OUTPUT_FILE"