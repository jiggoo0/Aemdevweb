#!/bin/bash

# ----------------------------------------------------
# 🧹 JP-STYLE CLEANUP SCRIPT
# Role: ลบโครงสร้างเก่าที่ไม่ได้ใช้งานแล้ว
# ----------------------------------------------------

echo "🧹 Cleaning up old project structures..."

# 1. ลบโฟลเดอร์ landing เดิมทั้งหมด
rm -rf app/landing

# 2. ลบไฟล์สำรอง layout เก่า
rm app/layout.tsx.bak

# 3. ลบไฟล์ที่อยู่นอกกลุ่ม (main) ที่เราย้ายเข้าไปแล้ว
rm app/about/page.tsx 2>/dev/null
rm app/blog/page.tsx 2>/dev/null
rm app/blog/\[slug\]/page.tsx 2>/dev/null
rm app/catalog/page.tsx 2>/dev/null
rm app/contact/page.tsx 2>/dev/null
rm app/services/page.tsx 2>/dev/null
rm app/page.tsx 2>/dev/null

# 4. ลบโฟลเดอร์เปล่าที่อาจเหลืออยู่
find app -type d -empty -delete

echo "✨ Project is now clean and optimized!"
