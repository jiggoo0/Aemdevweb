#!/bin/bash

# สีสำหรับ Output
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}--- [ CLEANING AEMDEVWEB JUNK ] ---${NC}"

# 1. เคลียร์ Next.js Build Cache (ตัวกินที่ใน DEVSTORE)
if [ -d ".next" ]; then
    echo "Cleaning Next.js cache..."
    rm -rf .next
fi

# 2. เคลียร์ pnpm store (ลบแพ็กเกจที่ไม่ได้ถูกอ้างอิงถึงในโปรเจกต์ปัจจุบัน)
echo "Pruning pnpm store..."
pnpm store prune

# 3. เคลียร์ npm cache (บางครั้งมีขยะตกค้าง)
echo "Cleaning npm cache..."
npm cache clean --force

# 4. เคลียร์ Termux System Cache (ขยะจากการติดตั้ง pkg/apt)
echo "Cleaning Termux APT cache..."
pkg clean
apt autoremove -y

# 5. เคลียร์ General Cache ใน Home
echo "Cleaning ~/.cache..."
rm -rf ~/.cache/*

echo -e "${GREEN}--- [ CLEAN COMPLETED ] ---${NC}"

# แสดงขนาดพื้นที่หลังเคลียร์
echo "Current storage status:"
df -h . | awk 'NR==2 {print "Available: " $4}'