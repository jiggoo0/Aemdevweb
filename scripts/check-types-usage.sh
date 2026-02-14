#!/bin/bash

REPORT="types_usage_report.md"

echo "# 📊 รายงานการใช้งาน Types ในโปรเจกต์" > $REPORT
echo "วันที่ตรวจสอบ: $(date)" >> $REPORT
echo "-----------------------------------" >> $REPORT

# ค้นหาไฟล์ที่มีการ import จาก @/types หรือ ../../types
echo "## 🔍 สรุปการ Import แยกตามไฟล์" >> $REPORT

find app components constants -name "*.tsx" -o -name "*.ts" | while read -r file; do
    # ดึงบรรทัดที่มีการ import types
    imports=$(grep -E "import.*from.*\"@/types\"|import.*from.*\"../.*types\"" "$file")
    
    if [ ! -z "$imports" ]; then
        echo "### 📄 ไฟล์: \`$file\`" >> $REPORT
        echo '```typescript' >> $REPORT
        echo "$imports" >> $REPORT
        echo '```' >> $REPORT
        echo "" >> $REPORT
    fi
done

echo "## 🎯 ค้นหาจุดเสี่ยง (Specific Type Search)" >> $REPORT

# เช็คว่ามีใครใช้ SiteConfig บ้าง (เพราะ v17.9.60 ตัดออก)
echo "### ⚠️ ไฟล์ที่ใช้ SiteConfig (เสี่ยงพังสูง):" >> $REPORT
grep -r "SiteConfig" app components --include="*.tsx" --include="*.ts" >> $REPORT || echo "ไม่พบการใช้งาน" >> $REPORT

# เช็คการใช้งาน AreaNode
echo "### 📍 ไฟล์ที่ใช้ AreaNode:" >> $REPORT
grep -r "AreaNode" app components constants --include="*.tsx" --include="*.ts" >> $REPORT || echo "ไม่พบการใช้งาน" >> $REPORT

echo "✅ ตรวจสอบเสร็จสิ้น! ดูผลลัพธ์ในไฟล์: $REPORT"
