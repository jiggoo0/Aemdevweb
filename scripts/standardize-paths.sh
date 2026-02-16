#!/bin/bash
# AEMZA MACKS - GLOBAL PATH STANDARDIZATION v1.1

echo "🛠️  Starting Global Path Standardization..."

# 1. Rename Folders (Physical Layer)
# เปลี่ยนจาก service -> services
if [ -d "./public/images/service" ]; then
    mv ./public/images/service ./public/images/services
    echo "✅ Renamed: public/images/service -> services"
fi

# เปลี่ยนจาก case-study -> case-studies
if [ -d "./public/images/case-study" ]; then
    mv ./public/images/case-study ./public/images/case-studies
    echo "✅ Renamed: public/images/case-study -> case-studies"
fi

echo "--------------------------------"
echo "📝 Updating Code References (Logic Layer)..."

# 2. Update String References in Code
# ใช้ความระมัดระวังในการ Replace เฉพาะ Path ที่มั่นใจ
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.mdx" \) -not -path "*/node_modules/*" -not -path "*/.next/*" | xargs sed -i 's/\/images\/service\//\/images\/services\//g'
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.mdx" \) -not -path "*/node_modules/*" -not -path "*/.next/*" | xargs sed -i 's/\/images\/case-study\//\/images\/case-studies\//g'

echo "✅ All code references updated to Plural."
echo "--------------------------------"
echo "🚀 Standardizing complete. Run audit-system.sh to verify."
