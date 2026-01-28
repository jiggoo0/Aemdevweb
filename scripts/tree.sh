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

  echo "DNA ของโปรเจกต์ AEMDEVWEB โดย นายเอ็มซ่ามากส์ ไม่ใช่แค่การรับจ้างทำเว็บไซต์ทั่วไป แต่คือการสร้าง ระบบนิเวศการขายที่สมบูรณ์แบบและรวดเร็ว ภายใต้กลยุทธ์ที่เฉียบคมดังนี้ครับ:
ปรัชญาหลัก (Core Philosophy): เก่งมีมาตราฐาน เข้าใจง่าย ไม่ใช่ฟรีแลน์ทั่วไป แต่ไม้ใช่ทีมงานหรือบริษัทเอเจนซี่
Speed as a Priority: เว็บต้องโหลดไวระดับปีศาจด้วยเทคโนโลยี
Next.js 16 โดยมีค่า LCP < 0.8 วินาที เพื่อหยุดลูกค้าไม่ให้กดออกจากหน้าเว็บ
SEO-First DNA: โครงสร้างเว็บไซต์ถูกออกแบบมาเพื่อ AI และระบบการค้นหาตั้งแต่บรรทัดแรก ไม่ใช่แค่เว็บสวยแต่ต้อง ถูกค้นหาเจอ
Instant Deployment: ยึดบริบทความเร็วสูง พร้อมออนไลน์ระบบภายใน 24 ชั่วโมง เพื่อตอบโจทย์ธุรกิจยุค 2026
อัตลักษณ์และตัวตน (Brand Identity): The Accessible Expert
นายเอ็มซ่ามากส์: คือผู้เชี่ยวชาญที่ข้าถึง่าย ใช้ภาษาที่ลูกค้าเข้าใจ (ไม่ใช้ศัพท์เทคนิคจนปวดหัว) 
กฏข้อห้าม ห้ามใส่ภาษาหุ่นยนต์  นวัตรกรรม วิศวกรรม ระนาบ ระเนียบ  โลซูชั่น อุสาหกรรม นวัตรกรรม วัตรนาการ ปฏิดิษย์ คลัง     คำลิเกทุกหมวดที่เกี่ยวข้อง  ห้ามตีความ นามบุคคลหริอชื่อ มาปะปนดีไซน์   แยก รายละเอียด บุคคล ดีไซนฺ์ ไม่เกี่ยงข้อง  เน้นการเขัยนภาษาในเว็ปไซต์ สมัยใหม่ ธุรกิจบริการ ห้ามใส่ข้อความซิ่ง หรือซ่าลงรายละเอียดบริการ
ใช่คำเว็ปไซต์บริการสมับใหม่ เข้าใจง่าย ไม่ตลาดล่าง
แต่รักษามาตรฐานงานระดับสูง (Specialist)
ความเป็นระบบ (Systematic): ทำงานเป็นขั้นเป็นตอน มีพิกัดราคาและขอบเขตงานที่ชัดเจน (Standard Professional Price) เพื่อสร้างความมั่นใจให้ลูกค้า
ยุทธศาสตร์ด้านราคา (Pricing Strategy): ความคุ้มค่าระดับโปร
Standard Professional Price: ตั้งราคาเริ่มต้นที่ 1,990.- เพื่อคัดกรองลูกค้าคุณภาพ (High-intent leads) และสร้างภาพลักษณ์แบรนด์มืออาชีพ
Rental Model (Recurring Revenue): เน้นการเก็บค่าบริการรายปี (Maintenance/Domain/Hosting) เพื่อสร้างรายได้ที่มั่นคงและยั่งยืนในระยะยาว
High-Value Niche: เจาะกลุ่มธุรกิจเฉพาะทาง (Niche) เช่น ร้านอาหารสายมู หรือธุรกิจท้องถิ่น ที่ต้องการฟีเจอร์เฉพาะแต่ไม่อยากจ่ายราคาเอเจนซี่ใหญ่
 สรุปบริบทการนำเสนอ (The DNA Summary)
เราคือสถาปนิกเว็บซิ่งที่ไม่ได้ขายแค่ Code แต่เราขาย'โอกาสทางธุรกิจ' ผ่านเว็บไซต์ที่โหลดไวที่สุดและมีโครงสร้าง SEO ที่ดีที่สุด ในราคาที่ SME จ่ายแล้วรู้สึกว่า โคตรคุ้ม 
types/template.ts types/index.ts /components/shared/IconRenderer.tsx
"
  echo " 
  
  
  
  
  .ตรวจสอบ .Code   ทั้งหมดแก้ไขให้ถูกต้อง  Update code  & format code  ให้ถูกต้อง ส่งกับมาในรูปแบ Full code
"    
} > "$OUTPUT_FILE"

echo "Success: Report saved to $OUTPUT_FILE"