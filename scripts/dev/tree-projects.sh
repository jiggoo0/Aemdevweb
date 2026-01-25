#!/bin/bash

# ==============================================================================
# PROJECT: www.aemdevweb.com
# PURPOSE: Architecture, Config, MDX, and Pre-deploy Context Compilation
# VERSION: 2.6.0 (2026-01-25)
# IDENTITY: Alongkorl (นายเอ็มซ่ามากส์)
# ==============================================================================

OUTPUT_FILE="aemdevweb-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

# Site & Project Metadata
SITE_NAME="AEMDevWeb"
SITE_URL="https://www.aemdevweb.com"
AUTHOR="Alongkorl Yomkerd"
ENVIRONMENT="pre-deploy"
PROJECT_TYPE="Next.js 16 Web Application"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
GENERATED_AT=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

COMPANY_NAME="AEMDEVWEB Co., Ltd."
PROJECT_SHORT="AEM"
PROJECT_NAME_TH="เอ็ม-เดฟ-เว็บ"
TITLE="รับทำเว็บไซต์ Landing Page เน้นปิดการขาย - AEMDEVWEB (นายเอ็มซ่ามากส์)"
SLOGAN="เว็บโหลดไว อันดับพุ่ง ยอดขายมาจริง"
EXPERT="นายเอ็มซ่ามากส์"
ROLE="Technical SEO Consultant & Next.js Structure Specialist"
DESCRIPTION="บริการวางโครงสร้างระบบ Landing Page สำหรับ SME ที่เน้นประสิทธิภาพความเร็วสูงสุด วางพิกัดงานเทคนิค SEO ตั้งแต่เลเยอร์แรกโดย นายเอ็มซ่ามากส์ เพื่อเพิ่มโอกาสการเข้าถึงและอัตราการปิดยอดขาย การันตี LCP 0.6s พร้อมการดูแลชุดระบบระยะยาว"

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

# Directory & Critical Files
WHITELIST_DIRS=("config" "app" "components" "lib" "hooks" "constants" "content" "types" "public" "providers")
NEXT_CONFIG_FILES=("next.config.mjs")
MDX_COMPONENTS_FILES=("mdx-components.tsx")
EDGE_RUNTIME_FILES=("proxy.ts")

# INIT
rm -f "$OUTPUT_FILE"
echo "[INFO] Generating Professional Architecture & Pre-deploy Report for $SITE_NAME..."

{
  # --- YAML Front Matter ---
  cat <<EOF
---
title: "Project Structure & Pre-deploy Report"
site: "$SITE_NAME"
url: "$SITE_URL"
author: "$AUTHOR"
projectType: "$PROJECT_TYPE"
environment: "$ENVIRONMENT"
buildId: "$BUILD_ID"
generatedAt: "$GENERATED_AT"
identity: "$EXPERT"
contentType: "technical-documentation"
status: "verified"
project:
  name: "$SITE_NAME"
  shortName: "$PROJECT_SHORT"
  nameTH: "$PROJECT_NAME_TH"
  companyName: "$COMPANY_NAME"
  title: "$TITLE"
  slogan: "$SLOGAN"
  expert: "$EXPERT"
  role: "$ROLE"
  description: "$DESCRIPTION"
keywords:
  core: ["${KEYWORDS_CORE[*]}"]
  tech: ["${KEYWORDS_TECH[*]}"]
  brand: ["${KEYWORDS_BRAND[*]}"]
cta:
  main: "$CTA_MAIN"
  secondary: "$CTA_SECONDARY"
  pricing: "$CTA_PRICING"
standards:
  performance: $STANDARDS_PERFORMANCE
  lcp: $STANDARDS_LCP
  security: "$STANDARDS_SECURITY"
  aiReadiness: "$STANDARDS_AI"
links:
  line: "$LINKS_LINE"
  lineId: "$LINKS_LINE_ID"
  facebook: "$LINKS_FACEBOOK"
  linkedin: "$LINKS_LINKEDIN"
  personal: "$LINKS_PERSONAL"
---

# Project Structure & Pre-deploy Report

Generated: $GENERATED_AT  
Site: $SITE_URL | Environment: $ENVIRONMENT | Build ID: $BUILD_ID  
Identity: $EXPERT (Senior Developer)

EOF

  # --- 1. Project Summary Table ---
  echo "## 1. Project Summary"
  echo "| Field | Value |"
  echo "|-------|-------|"
  echo "| Company Name | $COMPANY_NAME |"
  echo "| Project Name | $SITE_NAME ($PROJECT_SHORT) |"
  echo "| Thai Name | $PROJECT_NAME_TH |"
  echo "| Expert | $EXPERT |"
  echo "| Role | $ROLE |"
  echo "| Slogan | $SLOGAN |"
  echo "| URL | $SITE_URL |"
  echo "| Environment | $ENVIRONMENT |"
  echo "| Build ID | $BUILD_ID |"
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

  # --- 3. Directory Architecture ---
  echo "## 3. Directory Architecture"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "### Folder: $dir"
      echo '```text'
      find "$dir" -maxdepth 5 -not -path '*/.*' | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
      echo '```'
    else
      echo ""
      echo "[WARN] Directory not found: $dir"
    fi
  done

  # --- 4. Package Overview ---
  echo ""
  echo "## 4. Dependencies and Pipeline (package.json)"
  echo '```json'
  if [ -f "package.json" ]; then
    if command -v jq >/dev/null 2>&1; then
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "{\"error\": \"package.json not found\"}"
  fi
  echo '```'

  # --- 5. MDX & Edge Configuration ---
  echo ""
  echo "## 5. MDX & Edge Runtime Configuration"
  for f in "${MDX_COMPONENTS_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "### MDX Provider: $f"
      echo '```typescript'
      cat "$f"
      echo '```'
      break
    fi
  done

  for f in "${EDGE_RUNTIME_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "### Edge Runtime File: $f"
      echo '```typescript'
      cat "$f"
      echo '```'
    fi
  done

  # --- 6. Next.js Runtime Configuration ---
  echo ""
  echo "## 6. Next.js Runtime Configuration"
  for f in "${NEXT_CONFIG_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "### Config File: $f"

      # Detect file extension and set language for syntax highlight
      ext="${f##*.}"
      lang="text"
      case "$ext" in
        ts|tsx) lang="typescript" ;;
        js|mjs|kjs) lang="javascript" ;;  # รองรับ .mjs
        json) lang="json" ;;
        md) lang="markdown" ;;
        css) lang="css" ;;
      esac

      echo '```'"$lang"
      cat "$f"
      echo '```'
      break
    fi
  done

  # --- 7. Deployment Readiness ---
  echo ""
  echo "## 7. Deployment Readiness Analysis"
  echo "---"
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "Verdict: ✅ READY FOR DEPLOY"
    else
      echo "Verdict: ⚠️ FIX REQUIRED"
    fi

    if grep -q "### Route" "$PRE_DEPLOY_REPORT"; then
      echo "### Production Route Map"
      echo '```text'
      sed -n '/###.*Route/,/---/p' "$PRE_DEPLOY_REPORT" | grep -vE "###|---" | sed '/^$/d'
      echo '```'
    fi

    ISSUES=$(grep -E "ERR|FAIL|WARN|error|warning|failed" "$PRE_DEPLOY_REPORT" | grep -v "dir:")
    echo "### Critical Issues Highlight"
    if [ -z "$ISSUES" ]; then
      echo "Status: No critical impediments detected."
    else
      echo "$ISSUES"
    fi
  else
    echo "[WARN] $PRE_DEPLOY_REPORT not found. Skipping health analysis."
  fi

  # --- 8. CTA Section ---
  echo ""
  echo "## 8. Call-to-Action"
  echo "- **Main:** $CTA_MAIN"
  echo "- **Secondary:** $CTA_SECONDARY"
  echo "- **Pricing:** $CTA_PRICING"

  # --- 9. Links Section ---
  echo ""
  echo "## 9. Contact & Links"
  echo "- Line: [$LINKS_LINE_ID]($LINKS_LINE)"
  echo "- Facebook: [$LINKS_FACEBOOK]($LINKS_FACEBOOK)"
  echo "- LinkedIn: [$LINKS_LINKEDIN]($LINKS_LINKEDIN)"
  echo "- Personal: [$LINKS_PERSONAL]($LINKS_PERSONAL)"

  echo ""
  echo "---"
  echo "Report generated by $SITE_NAME Internal Automation."
} > "$OUTPUT_FILE"

echo "[SUCCESS] Professional Architecture & Pre-deploy Report saved to -> $OUTPUT_FILE"