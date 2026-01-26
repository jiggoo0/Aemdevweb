#!/bin/bash

# ==============================================================================
# PROJECT: www.aemdevweb.com (Business Domain)
# DESCRIPTION: Project Structure & Service-Oriented Technical Report
# VERSION: 2.5.0 (2026-01-26)
# ==============================================================================

OUTPUT_FILE="www-aemdevweb-structure.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://www.aemdevweb.com"

# Company & Brand
COMPANY_NAME="AEMDEVWEB Co., Ltd."
PROJECT_NAME="AEMDEVWEB"
PROJECT_SHORT="AEM"
PROJECT_NAME_TH="เออีเอ็ม เดฟ เว็บ"

# Page Title (Commercial, Soft-sell)
TITLE="บริการออกแบบและวางโครงสร้างเว็บไซต์สำหรับธุรกิจ SME | AEMDEVWEB"
SLOGAN="โครงสร้างชัด โหลดไว พร้อมรองรับการเติบโตของธุรกิจ"

# Brand Authority (Person = Supporting Role)
FOUNDER="Alongkorl Yomkerd"
EXPERT="นายเอ็มซ่ามากส์"
ROLE="Web Structure & Technical SEO"

# Description (Service + Process + Outcome)
DESCRIPTION="AEMDEVWEB ให้บริการออกแบบและวางโครงสร้างเว็บไซต์สำหรับธุรกิจ SME โดยเน้นความเร็ว ความเสถียร และการจัดวางข้อมูลที่เหมาะสมกับการค้นหา เพื่อให้เว็บไซต์พร้อมใช้งานและรองรับการเติบโตของธุรกิจในระยะยาว"

# Open Graph & Contact
OG_IMAGE="https://www.aemdevweb.com/og-image.png"
EMAIL="me@aemdevweb.com"

# Keywords (แยก intent ชัด)
KEYWORDS_CORE=(
  "บริการทำเว็บไซต์สำหรับธุรกิจ"
  "Landing Page SME"
  "Technical SEO"
  "โครงสร้างเว็บไซต์"
  "Organic Search"
)

KEYWORDS_TECH=(
  "Next.js"
  "React"
  "Tailwind CSS"
  "TypeScript"
  "Web Structure"
  "Performance Optimization"
)

KEYWORDS_BRAND=(
  "AEMDEVWEB"
  "นายเอ็มซ่ามากส์"
  "Alongkorl Yomkerd"
  "Unlink-th"
)

# Links
LINKS_LINE="https://lin.ee/6lgJox0"
LINKS_LINE_ID="@127cnthn"
LINKS_FACEBOOK="https://facebook.com/aemdevweb"
LINKS_LINKEDIN="https://www.linkedin.com/in/alongkorl-aemdevweb"
LINKS_PERSONAL="https://me.aemdevweb.com"

# CTA (SME-friendly)
CTA_MAIN="ปรึกษาแนวทางโปรเจกต์"
CTA_SECONDARY="ดูแนวทางการทำงาน"
CTA_PRICING="ดูแพ็กเกจบริการ"

# Technical Standards (Avoid hard guarantees)
STANDARDS_PERFORMANCE="Optimized for Core Web Vitals"
STANDARDS_LCP="Target under 1s (Depending on scope)"
STANDARDS_SECURITY="HTTPS & Security Headers"
STANDARDS_AI="Structured Data & JSON-LD Ready"

# Directory Scope (Business Project)
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
)

# Root-level configuration files
ROOT_FILES=(
  "eslint.config.mjs"
  "mdx-components.tsx"
  "next.config.mjs"
  "package.json"
  "components.json"
  "tsconfig.json"
  "postcss.config.mjs"
)

IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env"

# INIT
rm -f "$OUTPUT_FILE"
echo "[INFO] Generating business report for $PROJECT_DOMAIN..."

{
  # --- YAML METADATA ---
  echo "---"
  echo "domain: $PROJECT_DOMAIN"
  echo "canonical: $PROJECT_URL"
  echo "generated: $(date '+%Y-%m-%d %H:%M:%S')"
  echo "company:"
  echo "  name: $COMPANY_NAME"
  echo "project:"
  echo "  name: $PROJECT_NAME"
  echo "  shortName: $PROJECT_SHORT"
  echo "  nameTH: $PROJECT_NAME_TH"
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

  # --- HEADER ---
  echo "# Project Structure & Service Report"
  echo ""
  echo "This document outlines the structure, standards, and service-oriented setup of www.aemdevweb.com."
  echo ""

  # --- 1. Project Summary ---
  echo "## 1. Project Overview"
  echo "| Field | Value |"
  echo "|------|-------|"
  echo "| Company | $COMPANY_NAME |"
  echo "| Project | $PROJECT_NAME ($PROJECT_SHORT) |"
  echo "| Expert | $EXPERT |"
  echo "| Role | $ROLE |"
  echo "| Website | $PROJECT_URL |"
  echo "| Contact | $EMAIL |"
  echo ""

  # --- 2. Technical Standards ---
  echo "## 2. Technical Standards"
  echo "| Area | Description |"
  echo "|------|-------------|"
  echo "| Performance | $STANDARDS_PERFORMANCE |"
  echo "| LCP | $STANDARDS_LCP |"
  echo "| Security | $STANDARDS_SECURITY |"
  echo "| Structured Data | $STANDARDS_AI |"
  echo ""

  # --- 3. Root Files ---
  echo "## 3. Root Configuration Files"
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
  echo ""
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "### Folder: $dir"
      echo '```text'
      find "$dir" -maxdepth 5 -not -path '*/.*' \
        | grep -vE "$IGNORE_PATTERN" \
        | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
      echo '```'
      echo ""
    fi
  done

  # --- 5. CTA ---
  echo "## 5. Call to Action"
  echo "- $CTA_MAIN"
  echo "- $CTA_SECONDARY"
  echo "- $CTA_PRICING"
  echo ""

  echo "---"
  echo ". Format code in ให้ถูกต้อง
การเขียนโค้ดมาตรฐานมีประสิทธิภาพ NexTjs React Report generated by $PROJECT_DOMAIN internal tooling."
} > "$OUTPUT_FILE"

echo "[SUCCESS] Business report saved -> $OUTPUT_FILE"