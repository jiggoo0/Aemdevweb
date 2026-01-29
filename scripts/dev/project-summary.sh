#!/bin/bash

# ==============================================================================
# PROJECT: aemdevweb.com - Full Context & Metadata Validation
# DESCRIPTION: ชุดสคริปต์รวบรวมบริบทโค้ด ตรวจสอบ Metadata และความถูกต้องของ Types
# VERSION: 2.9.1 (Ultra-Deep Scan Level 7)
# IDENTITY: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
# CONSTRAINT: No backend | No form submission | LINE-only communication
# ==============================================================================

OUTPUT_FILE="aemdevweb-summary-with-code.md"
PROJECT_DOMAIN="www.aemdevweb.com"
IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env|\.vscode|coverage|build|dist"

# --- [CORE BRAND DNA] ---
COMPANY_NAME="AEMDEVWEB"
PROJECT_NAME_TH="AEMDEVWEB โดย นายเอ็มซ่ามากส์"
TITLE="AEMDEVWEB | สถาปัตยกรรมเว็บเพื่อธุรกิจยุคใหม่ Speed Precision Growth"
EXPERT="นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)"
ROLE="Technical SEO Specialist & Web Infrastructure Lead"

# --- [WHITELIST DIRECTORIES] ---
WHITELIST_DIRS=(
  "app" 
  "components" 
  "lib" 
  "types" 
  "constants" 
  "actions"
)

# --- [CRITICAL SCAN FILES] ---
SCAN_FILES=(
  "config/ai-context.dna.md"
  "constants/site-config.ts"
  "types/index.ts"
  "types/seo.ts"
  "types/template.ts"
  "app/layout.tsx"
  "app/(main)/page.tsx"
  "components/shared/IconRenderer.tsx"
  "app/robots.ts"
  "app/sitemap.ts"
  "next.config.mjs"
  "package.json"
)

# --- [SYSTEM CHECK FUNCTIONS] ---

check_metadata() {
    echo "### Metadata and SEO Validation"
    if grep -q "JsonLd" "app/layout.tsx" 2>/dev/null; then
        echo "- JSON-LD: PASS (Schema Markup detected)"
    else
        echo "- JSON-LD: WARNING (Schema Markup missing in Layout)"
    fi
    
    if [ -f "app/robots.ts" ] && [ -f "app/sitemap.ts" ]; then
        echo "- Search Assets: PASS (Robots and Sitemap exists)"
    else
        echo "- Search Assets: WARNING (SEO core files missing)"
    fi
}

check_types() {
    echo "### Typescript Integrity"
    for t_file in "types/index.ts" "types/seo.ts" "types/template.ts"; do
        if [ -f "$t_file" ]; then
            echo "- $t_file: PASS (Interface control active)"
        else
            echo "- $t_file: FAIL (Type definition missing)"
        fi
    done
}

analyze_package_json() {
    echo "### Package Analysis"
    if [ -f "package.json" ]; then
        echo "- Core Framework: $(grep '"next":' package.json | sed 's/[",]//g' | xargs)"
        echo "- UI Library: $(grep '"lucide-react":' package.json | sed 's/[",]//g' | xargs)"
        echo "- Styling: $(grep '"tailwindcss":' package.json | sed 's/[",]//g' | xargs)"
    else
        echo "- Package.json: NOT FOUND"
    fi
}

# --- [START GENERATION] ---

rm -f "$OUTPUT_FILE"
echo "[INFO] Processing AEMDEVWEB System Context (Ultra-Deep Level 7)..."

{
  echo "---"
  echo "identity: $EXPERT"
  echo "role: $ROLE"
  echo "domain: $PROJECT_DOMAIN"
  echo "engine: Next.js 16"
  echo "status: Active Analysis"
  echo "scan_depth: Level 7"
  echo "technical_constraints: \"No backend, No form submission, LINE-only communication\""
  echo "instructions: \"ยึดโครงสร้างที่ผู้ใช้งานส่งให้เป็นหลัก ห้ามเขียนตัวแปรเองโดยไม่อ้างอิงจาก types/ และ constants/ การแสดงผลไอคอนทั้งหมดต้องผ่าน IconRenderer.tsx เท่านั้น\""
  echo "---"
  echo ""

  echo "# รายงานวิเคราะห์ระบบ: $PROJECT_NAME_TH"
  echo "> $TITLE"
  echo ""

  echo "## 1. System Health and Dependency Check"
  check_metadata
  check_types
  analyze_package_json
  echo ""

  echo "## 2. Directory Structure (Ultra-Deep Level 7)"
  echo '```text'
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "[$dir]"
      # ปรับความลึกเป็น maxdepth 7 ให้เท่ากับตัว Auditor
      find "$dir" -maxdepth 7 -not -path '*/.*' | \
      grep -vE "$IGNORE_PATTERN" | \
      sed -e 's/[^-][^\/]*\// |  /g' -e 's/|  \([^|]\)/|-- \1/'
      echo ""
    fi
  done
  echo '```'
  echo ""

  echo "## 3. Strategic Source Code"
  for file in "${SCAN_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "### File: $file"
      ext="${file##*.}"
      lang="tsx"
      [[ "$ext" == "json" ]] && lang="json"
      [[ "$ext" == "md" ]] && lang="markdown"
      
      echo '```'"$lang"
      if [ "$file" == "package.json" ]; then
          grep -A 50 '"dependencies":' package.json | grep -v '"devDependencies":'
      else
          cat "$file"
      fi
      echo '```'
      echo "---"
      echo ""
    fi
  done

  echo "## 4. Final Constraints for AI Implementation"
  echo "- No Backend Logic: ห้ามเขียนโค้ดเชื่อมต่อ Database หรือ API ภายนอก"
  echo "- No Form Submission: ระบบไม่มีการรับค่าฟอร์มเพื่อเก็บข้อมูลในระบบ"
  echo "- LINE-only: ทุกปุ่ม Call to Action ต้องวิ่งไปที่ LINE Official Account เท่านั้น"
  echo "- Data Integrity: ตรวจสอบ types/ และ constants/ ก่อนเขียนฟังก์ชันทุกครั้ง"

} > "$OUTPUT_FILE"

echo "[SUCCESS] Deep Context Report generated at -> $OUTPUT_FILE"
