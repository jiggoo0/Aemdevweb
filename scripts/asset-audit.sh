#!/bin/bash
# AEMDEVWEB Asset Auditor v1.0
# ตรวจสอบความถูกต้องของ Path รูปภาพในโค้ดเทียบกับไฟล์จริงใน public/

echo "🔍 Starting Deep Asset Audit..."
ERRORS=0

# ค้นหาข้อความที่ขึ้นต้นด้วย /images/ ในไฟล์ ts, tsx, mdx
grep -rPo "/images/[a-zA-Z0-9./_-]+" {constants,components,content,app} --include="*.{ts,tsx,mdx}" | while read -r line; do
    FILE_REF=$(echo $line | cut -d: -f1)
    IMAGE_PATH=$(echo $line | cut -d: -f2)
    
    # ตรวจสอบว่าไฟล์มีอยู่ใน public หรือไม่
    FULL_PATH="./public$IMAGE_PATH"
    
    if [ ! -f "$FULL_PATH" ]; then
        echo "❌ Mismatch Found!"
        echo "   Reference: $FILE_REF"
        echo "   Path in Code: $IMAGE_PATH"
        echo "   Status: File not found in ./public/"
        echo "--------------------------------"
        ERRORS=$((ERRORS + 1))
    fi
done

if [ $ERRORS -eq 0 ]; then
    echo "✅ All internal image paths are valid."
else
    echo "🚨 Found $ERRORS path errors. Fix them before deploy."
fi
