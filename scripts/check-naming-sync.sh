#!/bin/bash
# AEMZA MACKS - NAMING SYNC AUDITOR v1.0

echo "🔍 Scanning for Path Mismatches..."
echo "--------------------------------"

# 1. ตรวจสอบโฟลเดอร์ใน Public
SERVICE_DIR="./public/images/service"
SERVICES_DIR="./public/images/services"

if [ -d "$SERVICE_DIR" ] && [ -d "$SERVICES_DIR" ]; then
    echo "⚠️  WARNING: Found BOTH 'service' and 'services' folders in public/images."
elif [ -d "$SERVICE_DIR" ]; then
    echo "ℹ️  Current Folder: public/images/service (Singular)"
elif [ -d "$SERVICES_DIR" ]; then
    echo "✅ Current Folder: public/images/services (Plural)"
fi

echo "--------------------------------"
echo "🔎 Checking Code References..."

# ค้นหาการใช้ /images/service (เอกพจน์)
echo "[Checking for '/images/service/...']"
grep -r "/images/service/" {constants,components,content,app} --include="*.{ts,tsx,mdx}" | wc -l | xargs echo "Occurrences:"

# ค้นหาการใช้ /images/services (พหูพจน์)
echo "[Checking for '/images/services/...']"
grep -r "/images/services/" {constants,components,content,app} --include="*.{ts,tsx,mdx}" | wc -l | xargs echo "Occurrences:"

echo "--------------------------------"
echo "🚀 RECOMMENDED ACTION: Use PLURAL 'services' to match Route Structure."
