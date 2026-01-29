#!/bin/bash

# ==============================================================================
# AEMDEVWEB | Full Project Auditor v7.9 (Ultra-Deep Tree & DNA Integrated)
# ==============================================================================
# วัตถุประสงค์: ตรวจสอบความเรียบร้อยและความปลอดภัยแบบขุดรากถอนโคน (Depth Level 7)
# มาตรฐาน: Next.js 16 (App Router), React 19, Zero-Emoji Policy
# ==============================================================================

OUTPUT_FILE="aemdevweb-audit-report.md"
PROJECT_DOMAIN="www.aemdevweb.com"
GENERATED_DATE=$(date '+%Y-%m-%d %H:%M:%S')

# การตั้งค่าพิกัดข้อมูล
IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env|\.vscode|coverage|build|dist"
EXCLUDE_FLAGS="--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=dist --exclude-dir=.git --exclude-dir=public"
CONTENT_DIRS=("content/blog" "content/case-studies")
CORE_TYPES=("types/index.ts" "types/template.ts")
DNA_CONTEXT="config/AI-CONTEXT.DNA.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

echo "เริ่มตรวจสอบระบบ $PROJECT_DOMAIN (Version 7.9 Ultra-Deep)..."

# ตัวแปรคำนวณคะแนนความเสี่ยง
WARN_COUNT=0
CRIT_COUNT=0

{
  echo "# Project Health & Audit Report (Ultra-Deep Scan)"
  echo ""
  echo "> รายงานสถานะโปรเจกต์: $PROJECT_DOMAIN"
  echo "> วันที่ตรวจสอบ: $GENERATED_DATE"
  echo "> พิกัดความลึกที่ตรวจสอบ: ระดับ 7"
  echo ""
  echo "---"

  # 1. สรุปผลการตรวจสอบ (Executive Summary)
  # ---------------------------------------------------------
  echo "## 1. สรุปผลการตรวจสอบ"
  
  SECRET_LEAK=$(grep -rE "(key|secret|password|auth|token)[[:space:]]*=[[:space:]]*['\"][a-zA-Z0-0]{10,}" . $EXCLUDE_FLAGS --exclude="*.env*" --exclude="*.config*" | grep -vE "^[[:space:]]*//")
  SECRET_COUNT=$(if [ -z "$SECRET_LEAK" ]; then echo 0; else echo "$SECRET_LEAK" | wc -l | tr -d ' '; fi)

  ANY_MATCHES=$(grep -rE "(: any|as any|<any>|any\[\])" . $EXCLUDE_FLAGS --include="*.ts" --include="*.tsx" | grep -vE "^[[:space:]]*//|/\*")
  ANY_COUNT=$(if [ -z "$ANY_MATCHES" ]; then echo 0; else echo "$ANY_MATCHES" | wc -l | tr -d ' '; fi)

  CONSOLE_MATCHES=$(grep -rE "console\.log|debugger" . $EXCLUDE_FLAGS --include="*.ts" --include="*.tsx" | grep -vE "^[[:space:]]*//")
  CONSOLE_COUNT=$(if [ -z "$CONSOLE_MATCHES" ]; then echo 0; else echo "$CONSOLE_MATCHES" | wc -l | tr -d ' '; fi)

  LARGE_ASSETS_COUNT=$(find public -type f \( -name "*.webp" -o -name "*.png" -o -name "*.jpg" \) -size +250k 2>/dev/null | wc -l | tr -d ' ')

  echo "| หัวข้อที่ตรวจสอบ | จำนวนที่พบ | สถานะ |"
  echo "| :--- | :---: | :--- |"
  
  if [ "$SECRET_COUNT" -gt 0 ]; then
    echo "| ความปลอดภัย (Secrets) | $SECRET_COUNT | **CRITICAL** |"
    ((CRIT_COUNT+=1))
  else
    echo "| ความปลอดภัย (Secrets) | 0 | PASSED |"
  fi

  if [ "$ANY_COUNT" -gt 0 ]; then
    echo "| การใช้ Type 'any' | $ANY_COUNT | WARNING |"
    ((WARN_COUNT+=1))
  else
    echo "| การใช้ Type 'any' | 0 | PASSED |"
  fi

  if [ "$CONSOLE_COUNT" -gt 0 ]; then
    echo "| คำสั่ง Dev Leftovers | $CONSOLE_COUNT | WARNING |"
    ((WARN_COUNT+=1))
  else
    echo "| คำสั่ง Dev Leftovers | 0 | PASSED |"
  fi

  if [ "$LARGE_ASSETS_COUNT" -gt 0 ]; then
    echo "| ไฟล์ภาพขนาดใหญ่ (>250KB) | $LARGE_ASSETS_COUNT | CRITICAL |"
    ((CRIT_COUNT+=1))
  else
    echo "| ไฟล์ภาพขนาดใหญ่ (>250KB) | 0 | PASSED |"
  fi
  echo ""

  # 2. ข้อมูลพิกัด DNA (AI Context)
  # ---------------------------------------------------------
  echo "## 2. พิกัด DNA ของระบบงาน"
  if [ -f "$DNA_CONTEXT" ]; then
    echo "พิกัดไฟล์: \`$DNA_CONTEXT\`"
    echo ""
    echo "---"
    cat "$DNA_CONTEXT"
    echo ""
    echo "---"
  else
    echo "สถานะ: **ไม่พบไฟล์พิกัด DNA**"
    ((CRIT_COUNT+=1))
  fi
  echo ""

  # 3. รายงานก่อนขึ้นระบบ (Pre-deploy Report)
  # ---------------------------------------------------------
  echo "## 3. รายงานสรุปก่อนขึ้นระบบ (Pre-deploy)"
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    echo "พิกัดไฟล์: \`$PRE_DEPLOY_REPORT\`"
    echo ""
    echo "---"
    cat "$PRE_DEPLOY_REPORT"
    echo ""
    echo "---"
  else
    echo "สถานะ: ไม่พบไฟล์รายงานก่อนขึ้นระบบ"
  fi
  echo ""

  # 4. แผนผังพิกัดระบบ Type (Type Mapping)
  # ---------------------------------------------------------
  echo "## 4. แผนผังพิกัดระบบ Type หลัก"
  for t_file in "${CORE_TYPES[@]}"; do
    if [ -f "$t_file" ]; then
      echo "### พิกัด: $t_file"
      echo "| ประเภท | ชื่อพิกัดข้อมูล (Name) |"
      echo "| :--- | :--- |"
      grep -E "^(export )?(interface|type) " "$t_file" | sed -E 's/^(export )?(interface|type) ([a-zA-Z0-9_]+).*/| \2 | \3 |/'
      echo ""
    else
      echo "- [ ] **$t_file**: **ไม่พบไฟล์พิกัดข้อมูล**"
      ((CRIT_COUNT+=1))
    fi
  done
  echo ""

  # 5. ตรวจสอบพิกัดเทคนิค (Technical Readiness)
  # ---------------------------------------------------------
  echo "## 5. ตรวจสอบพิกัดเทคนิคและ SEO"
  
  LAYOUT_FILE="app/layout.tsx"
  if [ -f "$LAYOUT_FILE" ] && grep -q "metadataBase" "$LAYOUT_FILE"; then
    echo "- [x] MetadataBase: **กำหนดพิกัดแล้ว**"
  else
    echo "- [ ] MetadataBase: **ยังไม่ได้กำหนด**"
    ((CRIT_COUNT+=1))
  fi

  MDX_ISSUE_FOUND=false
  for c_dir in "${CONTENT_DIRS[@]}"; do
    if [ -d "$c_dir" ]; then
      # ตรวจสอบ MDX ลึกขึ้นเป็นระดับ 4 กรณีมีโครงสร้าง Category ซับซ้อน
      find "$c_dir" -maxdepth 4 -name "*.mdx" 2>/dev/null | while read -r file; do
        if ! grep -qE "^\s*title:" "$file" || ! grep -qE "^\s*description:" "$file"; then
          echo "- [ ] Metadata MDX: **$file** (ข้อมูลไม่ครบ)"
          MDX_ISSUE_FOUND=true
        fi
      done
    fi
  done
  if [ "$MDX_ISSUE_FOUND" = false ]; then
    echo "- [x] Metadata MDX: **สมบูรณ์ทุกไฟล์**"
  fi
  echo ""

  # 6. แผนผังโครงสร้างระบบงานแบบขุดรากถอนโคน (Ultra-Deep Tree Level 7)
  # ---------------------------------------------------------
  echo "## 6. โครงสร้างระบบงาน (Ultra-Deep Level 7)"
  echo '```text'
  
  if command -v tree >/dev/null 2>&1; then
    # -L 7: ลึกถึงชั้นไฟล์ย่อยสุดใน Component/Route
    # -a: แสดงไฟล์ทั้งหมด
    # --dirsfirst: เรียง Folder ไว้บนสุดเพื่อความง่ายในการอ่าน
    tree -L 7 -I "$IGNORE_PATTERN" --dirsfirst -F
  else
    # กรณีใช้ find: ปรับปรุงการวาดเส้นให้เห็นความลึกชัดเจน
    find . -maxdepth 7 -not -path '*/.*' | \
    grep -vE "$IGNORE_PATTERN" | \
    sed -e 's/[^-][^\/]*\// |  /g' -e 's/|  \([^|]\)/|-- \1/'
  fi
  
  echo '```'
  echo ""

  # 7. สรุปสถานะความพร้อม (Final Verdict)
  # ---------------------------------------------------------
  echo "## 7. สรุปสถานะความพร้อม"
  echo "- จุดวิกฤตที่ต้องแก้ (Critical): $CRIT_COUNT"
  echo "- ข้อควรระวัง (Warning): $WARN_COUNT"
  echo ""

  if [ "$CRIT_COUNT" -eq 0 ] && [ "$WARN_COUNT" -eq 0 ]; then
    echo "### สถานะ: พร้อมสำหรับการใช้งานจริง (Ready to Deploy)"
  else
    echo "### สถานะ: ต้องปรับปรุงตามรายการที่ระบุข้างต้น (Actions Required)"
  fi

  echo ""
  echo "---"
  echo ".format code in & Update code & ส่งกลับในรูปแบบ Code พร้อมใช้งาน"
} > "$OUTPUT_FILE"

echo "ตรวจสอบเสร็จสิ้น: รายงานพิกัดงานฉบับ Ultra-Deep ถูกบันทึกที่ $OUTPUT_FILE"
