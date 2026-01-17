#!/bin/bash

echo "🚀 อัปเกรดโครงสร้าง www.aemdevweb.com สู่ Sales Engine Platform..."

# 1. สร้างโฟลเดอร์ Core Logic และ Sales Engine Components
mkdir -p core/engines
mkdir -p core/themes
mkdir -p components/sales-engine

# 2. ปรับโครงสร้างใน (marketing) ให้เป็นแบบ Industry-Based
# หมายเหตุ: เราจะสร้างโฟลเดอร์กลุ่มตัวอย่างไว้ก่อน
mkdir -p app/\(marketing\)/\[industry\]/_skeletons

# 3. สร้างไฟล์ Config และ Boilerplate สำหรับปิดการขาย
touch constants/industry-config.ts
touch components/sales-engine/PriceEstimator.tsx
touch components/sales-engine/WorkProcess.tsx
touch components/sales-engine/LineLeadForm.tsx
touch components/shared/AemBrandBadge.tsx

echo "✅ โครงสร้างถูกอัปเกรดให้รองรับระบบปิดการขายเฉพาะอาชีพแล้ว!"
