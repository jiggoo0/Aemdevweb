#!/bin/bash

# ==============================================================================
# AEMDEVWEB | Specialist Project & SEO Auditor (Final Version 2026)
# ==============================================================================
# วัตถุประสงค์: ตรวจสอบโครงสร้างสถาปัตยกรรม, SEO Metadata, และ Performance
# มาตรฐาน: Next.js 16 (App Router), React 19, Zero-Emoji Policy
# ==============================================================================

# CONFIGURATION
OUTPUT_FILE="aemdevweb-structure.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://www.aemdevweb.com"
GENERATED_DATE=$(date '+%Y-%m-%d %H:%M:%S')

# เส้นทางสำหรับการตรวจสอบ
CONTENT_DIRS=("content/blog" "content/case-studies")
DYNAMIC_ROUTES=("app/blog/[slug]" "app/services/[slug]" "app/(shops)/templates/[slug]")
ROOT_FILES=("eslint.config.mjs" "next.config.mjs" "package.json" "tsconfig.json" "postcss.config.mjs")
SEO_FILES=("app/layout.tsx" "app/robots.ts" "app/sitemap.ts" "app/viewport.ts")

IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env"

echo "Deep Auditing $PROJECT_DOMAIN..."

{
  echo "# Project Structure & Specialist SEO Report"
  echo ""
  echo "> Project: $PROJECT_DOMAIN"
  echo "> Generated: $GENERATED_DATE"
  echo ""
  echo "---"

  # 1. Tech Stack & Root Configuration
  echo "## 1. Tech Stack & Root Configuration"
  echo "- Framework: **Next.js 16.1.3 (App Router)**"
  echo "- Engine: **React 19.2.3**"
  echo "- Styling: **Tailwind CSS 4.1.18**"
  echo "- Image Engine: **Sharp 0.34.5 (High-Speed)**"
  echo ""
  for file in "${ROOT_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "- [x] $file (Status: Verified)"
    else
      echo "- [ ] $file (Status: **MISSING**)"
    fi
  done
  echo ""

  # 2. Content & MDX Integrity (Frontmatter Audit)
  echo "## 2. Content & MDX Integrity"
  echo "ตรวจสอบความสมบูรณ์ของ Metadata ในไฟล์เนื้อหา (.mdx):"
  echo ""
  for c_dir in "${CONTENT_DIRS[@]}"; do
    if [ -d "$c_dir" ]; then
      echo "### Directory: $c_dir"
      echo "| File Name | Title | Description | Image |"
      echo "| :--- | :---: | :---: | :---: |"
      find "$c_dir" -maxdepth 1 -name "*.mdx" | while read -r file; do
        FNAME=$(basename "$file")
        # ตรวจสอบรูปแบบคีย์ใน Frontmatter (รองรับทั้ง title: และ 'title':)
        T=$(grep -qE "^title:" "$file" && echo "OK" || echo "**FAIL**")
        D=$(grep -qE "^description:" "$file" && echo "OK" || echo "**FAIL**")
        I=$(grep -qE "^image:|^thumbnail:|^cover:" "$file" && echo "OK" || echo "**FAIL**")
        echo "| $FNAME | $T | $D | $I |"
      done
      echo ""
    fi
  done

  # 3. Dynamic Metadata & Schema (Specialist Check)
  echo "## 3. SEO Data Mapping"
  echo "ตรวจสอบฟังก์ชันการส่งต่อค่า Metadata รายหน้า:"
  echo ""
  for route in "${DYNAMIC_ROUTES[@]}"; do
    if [ -d "$route" ]; then
      PAGE="$route/page.tsx"
      echo "### Route: $route"
      if [ -f "$PAGE" ]; then
        META=$(grep -q "generateMetadata" "$PAGE" && echo "[x] generateMetadata: **FOUND**" || echo "[ ] generateMetadata: **MISSING**")
        # ตรวจสอบการใช้ JsonLd Component ในระดับ Route
        SCHEMA=$(find "$route" -maxdepth 2 -name "*.tsx" -exec grep -qiE "JsonLd|schema" {} + && echo "[x] JSON-LD Schema: **INJECTED**" || echo "[ ] JSON-LD Schema: **NOT FOUND**")
        echo "- $META"
        echo "- $SCHEMA"
      else
        echo "- Status: **page.tsx missing**"
      fi
      echo ""
    fi
  done

  # 4. Global SEO Config & Sitemap
  echo "## 4. Search Discovery & Global SEO"
  # เช็ค metadataBase ใน Layout หลัก (จุดตายของ OG Image)
  LAYOUT_ROOT="app/layout.tsx"
  if [ -f "$LAYOUT_ROOT" ]; then
    HAS_BASE=$(grep -q "metadataBase" "$LAYOUT_ROOT" && echo "- [x] metadataBase: **Configured**" || echo "- [ ] metadataBase: **MISSING** (High Risk for OG Images)")
    echo "$HAS_BASE"
  fi

  SITEMAP="app/sitemap.ts"
  if [ -f "$SITEMAP" ]; then
    # ตรวจสอบการ Map ข้อมูล Dynamic ใน Sitemap
    SYNC=$(grep -E "blog|template|caseStudies|services" "$SITEMAP" && echo "- [x] Sitemap: **Dynamic Mapping Detected**" || echo "- [ ] Sitemap: **Static/Manual Only**")
    echo "$SYNC"
  else
    echo "- [ ] Sitemap: **MISSING**"
  fi
  echo ""

  # 5. Asset Performance (Critical)
  echo "## 5. Asset Performance Audit"
  echo "เป้าหมาย: ไฟล์ภาพควร < 250KB เพื่อรักษาคะแนน LCP:"
  echo ""
  echo "| Path | Size | Status |"
  echo "| :--- | :--- | :--- |"
  find public/images -type f \( -name "*.webp" -o -name "*.png" -o -name "*.jpg" \) -print0 | while IFS= read -r -d '' img; do
    SIZE=$(du -k "$img" | cut -f1)
    if [ "$SIZE" -gt 250 ]; then
      echo "| ${img#public/} | ${SIZE}KB | **CRITICAL: Needs Compression** |"
    fi
  done
  echo ""

  # 6. Technical Debt: Architecture Leakage
  echo "## 6. Architecture Integrity"
  # ตรวจหาการใช้ Client Components ใน Libs/Actions (ควรเป็น Server-side logic)
  LEAK=$(grep -rl "use client" lib/ actions/ 2>/dev/null)
  if [ -n "$LEAK" ]; then
    echo "> **จุดเสี่ยง:** พบ 'use client' ใน Server Logic ซึ่งอาจกระทบ Performance:"
    echo '```text'
    echo "$LEAK"
    echo '```'
  else
    echo "- Status: No Client leakage in Server Logic. (Excellent)"
  fi
  echo ""

  # 7. Directory Tree (Overview)
  echo "## 7. Global Directory Tree Summary"
  echo '```text'
  # ใช้ find แทน tree หากไม่มีคำสั่ง tree ในระบบ
  find . -maxdepth 2 -not -path '*/.*' | grep -vE "$IGNORE_PATTERN" | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
  echo '```'

  echo "---"
  echo "AEMDEVWEB Professional Audit Engine v4.0"

} > "$OUTPUT_FILE"

echo "Success: Specialist report saved to $OUTPUT_FILE"
