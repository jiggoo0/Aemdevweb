#!/bin/bash

# === CONFIG ===
# เพิ่ม "config" เข้าไปใน WHITELIST_DIRS เพื่อให้ระบบสแกนโฟลเดอร์นี้ด้วย
OUTPUT_FILE="project-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"
WHITELIST_DIRS=("config" "app" "components" "lib" "hooks" "constants" "content" "types" "content"  "public" "providers")

# ✅ 1. ลบไฟล์เก่าทิ้งก่อนเริ่มงาน
rm -f "$OUTPUT_FILE"

# === EXECUTE ===
echo "🚀 กำลังสแกนโครงสร้างโฟลเดอร์รวมถึงชุดคำสั่ง Config และวิเคราะห์โปรเจกต์..."

{
  echo "# 📁 รายงานโครงสร้างโปรเจกต์ (Extended Scan)"
  echo "_สร้างเมื่อ: $(date)_"
  echo ""

  # --- 2. โครงสร้างโฟลเดอร์ ---
  echo "## 🌳 Folder Structure"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo "📂 $dir"
      # ปรับปรุงการหาไฟล์ให้ข้ามโฟลเดอร์ที่ไม่จำเป็นและจัดการลำดับชั้นให้สวยงาม
      find "$dir" -maxdepth 10 -mindepth 1 \
        -path "*/node_modules" -prune -o \
        -path "*/.*" -prune -o \
        -print | sort | while read -r path; do
          # คำนวณความลึกของโฟลเดอร์เพื่อสร้าง Indent
          depth=$(echo "$path" | tr -cd '/' | wc -c)
          # ปรับ Indent ให้เหมาะสมกับจุดเริ่มต้น
          indent_count=$(( (depth) * 2 ))
          indent=$(printf '%*s' $indent_count "")
          name=$(basename "$path")
          
          if [ -d "$path" ]; then
            echo "${indent}📂 $name"
          else
            echo "${indent}📄 $name"
          fi
        done
    else
      echo "⚠️ ไม่พบโฟลเดอร์: $dir (Skipped)"
    fi
  done

  echo ""
  echo "## 📦 ตรวจหา package.json"
  echo '```json'
  if [ -f "package.json" ]; then
    echo "พบ package.json ที่ root ของโปรเจกต์"
    echo ""
    if command -v jq >/dev/null 2>&1; then
      # แสดงเฉพาะส่วนที่สำคัญต่อการ Deploy และโครงสร้างโปรเจกต์
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "ไม่พบ package.json"
  fi
  echo '```'
  echo ""

  # --- 3. ส่วนวิเคราะห์ปัญหา (ดึงมาจาก Pre-deploy Report) ---
  echo "## 📝 ผลการวิเคราะห์และปัญหาที่พบ"
  echo "________"
  
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    echo "🔍 ตรวจพบรายงานการตรวจสอบล่าสุด:"
    echo ""
    
    # 3.1 ตรวจสอบสถานะภาพรวม
    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "✅ สถานะปัจจุบัน: **READY FOR DEPLOY**"
    else
      echo "❌ สถานะปัจจุบัน: **FIX REQUIRED**"
    fi
    echo ""

    # 3.2 ดึงรายละเอียด Route Statistics
    if grep -q "### 📊 Route Statistics" "$PRE_DEPLOY_REPORT"; then
      echo "### 📍 Production Route Map"
      echo "\`\`\`text"
      # ใช้ sed ดึงเนื้อหาเฉพาะส่วนตาราง Route
      sed -n '/### 📊 Route Statistics/,/---/p' "$PRE_DEPLOY_REPORT" | \
      grep -v "###" | \
      grep -v -- "---" | \
      sed '/^$/d'
      echo "\`\`\`"
    fi

    # 3.3 ดึง Error/Warning
    echo "### ⚠️ Issues Highlight"
    ERRORS=$(grep -E -- "❌|⚠️|error|warning|failed" "$PRE_DEPLOY_REPORT")
    if [ -z "$ERRORS" ]; then
      echo "✅ ไม่พบปัญหาสำคัญในรายงานล่าสุด"
    else
      echo "$ERRORS"
    fi
  else
    echo "⚠️ ไม่พบไฟล์ $PRE_DEPLOY_REPORT กรุณารัน pre-deploy-check.sh เพื่อสร้างข้อมูลล่าสุด"
  fi

  echo ""
  echo "---"
  echo "Status: Scanning process completed successfully."

} > "$OUTPUT_FILE"

echo "✅ เพิ่มการตรวจสอบโฟลเดอร์ config และสแกนเสร็จสิ้น → $OUTPUT_FILE"
