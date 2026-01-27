#!/bin/bash

# ==============================================================================
# www.aemdevweb.com: Project Structure Reporter
# ==============================================================================
# Description: Generates a markdown report of project directory structure
#              and verifies required root-level configuration files.
# Domain: https://www.aemdevweb.com
# ==============================================================================

# CONFIGURATION
OUTPUT_FILE="aemdevweb-structure.md"
PROJECT_DOMAIN="www.aemdevweb.com"
PROJECT_URL="https://www.aemdevweb.com"

# Directories allowed for scanning (Aligned with Next.js 15 App Router)
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

# Required root-level configuration files
ROOT_FILES=(
  "eslint.config.mjs"
  "mdx-components.tsx"
  "next.config.mjs"
  "package.json"
  "components.json"
  "tsconfig.json"
  "postcss.config.mjs"
)

# Ignore non-essential or sensitive files
IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env"

# START EXECUTION
rm -f "$OUTPUT_FILE"

echo "Scanning project architecture: $PROJECT_DOMAIN"

{
  echo "# Project Structure Report"
  echo ""
  echo "<!--"
  echo "  Domain: $PROJECT_DOMAIN"
  echo "  Canonical: $PROJECT_URL"
  echo "  Generated: $(date '+%Y-%m-%d %H:%M:%S')"
  echo "  Type: Architecture / Documentation"
  echo "-->"
  echo ""
  echo "> Project: $PROJECT_DOMAIN  "
  echo "> URL: $PROJECT_URL  "
  echo "> Generated on: $(date '+%Y-%m-%d %H:%M:%S')"
  echo ""

  # ROOT CONFIGURATION FILES
  echo "## Root Configuration Files"
  echo "Validated files at the project root:"
  echo ""

  for file in "${ROOT_FILES[@]}"; do
    if [ -f "$file" ]; then
      echo "- $file"
    else
      echo "- $file (missing)"
    fi
  done

  echo ""

  # DIRECTORY STRUCTURE
  echo "## Directory Tree"
  echo "Core business logic and UI structure:"
  echo ""

  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "### $dir"

      find "$dir" -maxdepth 10 -not -path '*/.*' \
        | grep -vE "$IGNORE_PATTERN" \
        | while read -r path; do

          depth=$(temp="${path//[^\/]/}"; echo "${#temp}")
          indent=$(printf '%*s' $((depth * 2)) "")
          name=$(basename "$path")

          if [ -d "$path" ]; then
            [[ "$path" != "$dir" ]] && echo "${indent}- $name/"
          else
            echo "${indent}- $name"
          fi
        done

      echo ""
    fi
  done

  echo ".format Code in & update  Nexjs React."
  echo "CONTEXT DNA ภาษาที่เข้าใจง่าย มีความมาตรฐาน แต่ไม่ตลาดล่าง ใช้ศัพท์ที่เข้าถึงได้ทุก ฐานธุรกิจ ห้ามใช้คำ นวัตกรรม วิวัตกรรม โซลูชั่น  มั่นคง สูงสุด หรือคำในหมวด ลิเก หรือ หุ่นยนต์ ห้ามใส่อีโมจิลงCode
แยกดีไซน์เว็ปไซต์กับโทนนำเสนออกจากกัน ดีไซน์เว็ปไซด์เน้น Professional freelance marketing  เป็นมิตรต่อผู้ใช้งาน เข้าใจง่ายน่าใช้บริการ ไม่ต้องการความดุดัน แต่ไม่แฟนซีการตูนออกแบบ ดีไซน์อิงเวปไซต์ชั้นนำKEYWORDS_BRAND=(
  AEMDEVWEB
  นายเอ็มซ่ามากส์
  Alongkorl Yomkerd
  Unlink-th
  KEYWORDS_CORE=(
  บริการทำเว็บไซต์สำหรับธุกิจ
  Landing Page SME
  technical SEO
  โครรงสร้างเว็บไซต์
  Organic Search
บริการออกแบบและวางโครงสร้างเว็บไซต์สำหรับธุรกิจ
SME AEMDEVWEB โครงสร้างชัด โหลดไว พร้อมรองรับการเติบโตของคุณ

ยึดโครงสร้างและคำสั่งนี้เป็นหลัก
. Update code & format ส่งกลับในรูปแบบ Code พร้อมใช้งาน
"    
} > "$OUTPUT_FILE"

echo "Success: Report saved to $OUTPUT_FILE"