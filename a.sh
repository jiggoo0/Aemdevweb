#!/bin/bash

# ==========================================
# 🚀 AEM PROJECT RESTRUCTURE & CLEANUP
# ==========================================

echo "⏳ เริ่มต้นการจัดระเบียบโครงสร้างโปรเจกต์..."

# 1. จัดการ Shared Components (Navbar/Footer)
# ให้เว็บหลักและหน้า Landing ใช้ Shared UI ร่วมกันที่ @/components
echo "🏛️  Centralizing Core UI (Navbar/Footer)..."
# หากมี Navbar ใน landing/shared ให้ย้ายมาที่ components/ หลัก
if [ -f "app/landing/[template-id]/shared/Navbar.tsx" ]; then
    echo "📦 Moving Landing Navbar to @/components/Navbar.tsx"
    mv "app/landing/[template-id]/shared/Navbar.tsx" "components/Navbar.tsx" 2>/dev/null
fi

if [ -f "app/landing/[template-id]/shared/Footer.tsx" ]; then
    echo "📦 Moving Landing Footer to @/components/Footer.tsx"
    mv "app/landing/[template-id]/shared/Footer.tsx" "components/Footer.tsx" 2>/dev/null
fi

# 2. จัดระเบียบ Logic และ Helpers
echo "🚚 Moving helpers and utils to /lib..."
# รวมไฟล์จาก utils (ถ้ามี) เข้าสู่ lib
if [ -d "utils" ]; then
    mv utils/*.ts lib/ 2>/dev/null
    rm -rf utils
    echo "✅ Moved all utils to @/lib"
fi

# 3. จัดการโครงสร้าง Services และ iconMap
# ให้ iconMap อยู่ที่ @/components/iconMap.ts ตามโครงสร้างปัจจุบันของคุณ
if [ -f "components/sections/Services/iconMap.ts" ]; then
    mv components/sections/Services/iconMap.ts components/iconMap.ts
    echo "✅ Centralized iconMap.ts to @/components"
fi

# 4. ลบโฟลเดอร์ซ้ำซ้อนใน Landing Page
echo "🧹 Cleaning up redundant landing components..."
# ลบโฟลเดอร์ components เก่าใน [template-id] เพราะเราใช้ระบบ variants แล้ว
if [ -d "app/landing/[template-id]/components" ]; then
    rm -rf "app/landing/[template-id]/components"
    echo "🗑️  Removed app/landing/[template-id]/components (Using variants instead)"
fi

# 5. จัดการ Types (Single Source of Truth)
echo "🏷️  Organizing Type definitions..."
mkdir -p app/landing/\[template-id\]/types
if [ -f "data/types.ts" ]; then
    mv "data/types.ts" "app/landing/[template-id]/types/index.ts"
    echo "✅ Moved global landing types to @/app/landing/[template-id]/types/index.ts"
fi

echo "------------------------------------------"
echo "✅ จัดระเบียบโครงสร้างเสร็จสมบูรณ์!"
echo "------------------------------------------"
echo "💡 สิ่งที่คุณต้องทำต่อ (Checklist):"
echo "1. อัปเดตการ Import ในไฟล์ Variants (เช่น starter/template.tsx):"
echo "   - เปลี่ยนจาก: import Navbar from '../../shared/Navbar'"
echo "   - เป็น: import Navbar from '@/components/Navbar'"
echo "2. อัปเดต shared/index.ts ของ Landing Page:"
echo "   - ตรวจสอบว่าไม่ได้ Export Navbar/Footer จากที่เดิม"
echo "3. รัน: pnpm type-check"
