#!/bin/bash

echo "🚀 Starting System Consolidation..."

# 1. จัดระเบียบ Components & Modules
echo "📦 Merging Modules into Components..."
mkdir -p components/templates
mkdir -p components/sections

# ย้าย Blueprint และ Layout Engine ไปไว้ที่ sections
mv modules/_core/* components/sections/
# ย้าย Template Items ไปไว้ที่ templates
mv modules/items/* components/templates/

# 2. จัดระเบียบ App Router (Flattening)
echo "📂 Flattening App Structure..."
# ย้ายไฟล์จาก Group ออกมาที่ Root ของ app/
cp -r app/\(main\)/* app/
cp -r app/\(areas\)/areas app/
cp -r app/\(shops\)/templates app/shops

# ลบ Route Groups เดิม
rm -rf app/\(main\)
rm -rf app/\(areas\)
rm -rf app/\(shops\)

# 3. จัดการโครงสร้าง Types & Lib
echo "🧬 Refactoring Types and Libs..."
# รวม Types (ใช้ไฟล์ index.d.ts ที่ผมส่งให้ก่อนหน้า)
# หมายเหตุ: คุณต้องเอาเนื้อหาที่ผม gen ให้ก่อนหน้านี้ใส่ใน types/index.ts

# สร้างไฟล์รวมศูนย์สำหรับข้อมูล (CMS Logic)
touch lib/cms.ts

# 4. ลบไฟล์ที่ไม่ได้ใช้งาน (Cleaning)
echo "🧹 Cleaning up legacy files..."
rm -rf modules
rm -f tsconfig.tsbuildinfo
rm -f AEMDEVWEB-STRUCTURE.txt
rm -f config/AEMDEVWEB-STRUCTURE.txt

# 5. ย้าย Registry ไปไว้ที่ Constants เพื่อความง่ายในการ Config
if [ -f "components/templates/registry.tsx" ]; then
    mv components/templates/registry.tsx constants/template-registry.tsx
fi

echo "✅ Consolidation Complete!"
echo "Next Step: Update imports in page.tsx files to reflect new paths."
