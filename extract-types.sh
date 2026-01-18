#!/bin/bash

# 🚀 Script Name: extract-types.sh (V3 - Comprehensive Scan)
# 📝 Description: สแกน Type/Interface ทั้งหมด (ทั้ง Internal และ Exported)

OUTPUT_FILE="project-types-summary.md"
EXCLUDE_DIRS="--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=dist --exclude-dir=.git"

echo "# 📑 Project Types & Interfaces Summary (V3)" > $OUTPUT_FILE
echo "_สร้างเมื่อ: $(date)_" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "> **Note:** สแกนครอบคลุมทั้งแบบ Internal และ Exported (ยกเว้น node_modules) เพื่อความครบถ้วนครับพี่เอ็ม" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# ส่วนที่ 1: สถิติรวม
echo "## 📊 สถิติเบื้องต้น" >> $OUTPUT_FILE
# ใช้ Regex เพื่อหาทั้ง "interface Name" และ "export interface Name"
TOTAL_INT=$(grep -rE "(export )?interface " . $EXCLUDE_DIRS --include="*.ts" --include="*.tsx" | wc -l)
TOTAL_TYPE=$(grep -rE "(export )?type " . $EXCLUDE_DIRS --include="*.ts" --include="*.tsx" | wc -l)

echo "- **Total Interfaces:** $TOTAL_INT รายการ" >> $OUTPUT_FILE
echo "- **Total Type Aliases:** $TOTAL_TYPE รายการ" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# ส่วนที่ 2: รายการ Interfaces ทั้งหมด
echo "## 🏗️ All Interfaces (Internal & Exported)" >> $OUTPUT_FILE
echo '```typescript' >> $OUTPUT_FILE
# ใช้ sed เพื่อลบ path ส่วนเกินและจัด format ให้สวยงาม
grep -rE "(export )?interface " . $EXCLUDE_DIRS --include="*.ts" --include="*.tsx" | \
sed -E 's/^\.\///; s/:\s*(export )?interface/ ->/' >> $OUTPUT_FILE
echo '```' >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# ส่วนที่ 3: รายการ Type Aliases ทั้งหมด
echo "## 🏷️ All Type Aliases (Internal & Exported)" >> $OUTPUT_FILE
echo '```typescript' >> $OUTPUT_FILE
grep -rE "(export )?type " . $EXCLUDE_DIRS --include="*.ts" --include="*.tsx" | \
sed -E 's/^\.\///; s/:\s*(export )?type/ ->/' >> $OUTPUT_FILE
echo '```' >> $OUTPUT_FILE

echo "✅ สแกนเสร็จแล้ว! พี่เปิดดูที่ไฟล์: $OUTPUT_FILE ได้เลยครับ"
