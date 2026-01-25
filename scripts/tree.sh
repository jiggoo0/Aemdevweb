#!/bin/bash

# ==============================================================================
# PROJECT: www.aemdevweb.com
# DESCRIPTION: Professional Project Structure & Business Report Generator
# VERSION: 2.4.0 (2026-01-25)
# ==============================================================================

OUTPUT_FILE="tree-projects.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://www.aemdevweb.com"

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

# Next.js 15 Enterprise Directory Whitelist
WHITELIST_DIRS=(
  "app"
  "actions"
  "components"
  "lib"
  "hooks"
  "types"
  "public"
  "data"
  "constants"
  "providers"
  "content"
  "styles"
  "services"
  "config"
  "viewport"
)

# Root-level configuration files (Validated)
ROOT_FILES=(
  "eslint.config.mjs"
  "mdx-components.tsx"
  "next.config.mjs"
  "package.json"
  "components.json"
  "tsconfig.json"
  "postcss.config.mjs"
  "proxy.ts"
)

IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env"

# REMOVE OLD FILE
rm -f "$OUTPUT_FILE"
echo "[INFO] Generating professional report for $PROJECT_DOMAIN..."

{
  # --- YAML Metadata ---
  echo "---"
  echo "domain: $PROJECT_DOMAIN"
  echo "canonical: $PROJECT_URL"
  echo "generated: $(date '+%Y-%m-%d %H:%M:%S')"
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
  echo "# Project Structure & Business Report"
  echo ""
  echo "Designed for SMEs and various business sectors including service businesses, tourism, export, corporates, partnerships, and industrial factories."
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

  # --- 3. Root Configuration Files ---
  echo "## 3. Root Configuration Files"
  echo "The following system files are detected at the project root."
  echo ""
  for file in "${ROOT_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "- [x] $file"
    else
      echo "- [ ] $file (Not found)"
    fi
  done
  echo ""

  # --- 4. Directory Structure ---
  echo "## 4. Directory Structure"
  echo "Hierarchical view of core business logic and UI components."
  echo ""
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "### Folder: $dir"
      echo '```text'
      find "$dir" -maxdepth 5 -not -path '*/.*' | grep -vE "$IGNORE_PATTERN" | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
      echo '```'
      echo ""
    fi
  done

  # --- 5. Call-to-Action Section ---
  echo "## 5. Call-to-Action"
  echo "- **Main:** $CTA_MAIN"
  echo "- **Secondary:** $CTA_SECONDARY"
  echo "- **Pricing:** $CTA_PRICING"
  echo ""

  # --- 6. Links Section ---
  echo "## 6. Contact & Links"
  echo "- Line: [$LINKS_LINE_ID]($LINKS_LINE)"
  echo "- Facebook: [$LINKS_FACEBOOK]($LINKS_FACEBOOK)"
  echo "- LinkedIn: [$LINKS_LINKEDIN]($LINKS_LINKEDIN)"
  echo "- Personal: [$LINKS_PERSONAL]($LINKS_PERSONAL)"
  echo ""

  echo "---"
  echo "Report generated by $PROJECT_DOMAIN Internal Automation."
} > "$OUTPUT_FILE"

echo "[SUCCESS] Professional report saved to -> $OUTPUT_FILE"