#!/bin/bash

# ==============================================================================
# [SYSTEM]: AEMDEVWEB INFRA-CLEANER v4.2
# [STRATEGY]: Deep Pruning | Storage Recovery | Termux Optimized
# [MAINTAINER]: AEMDEVWEB Specialist Team
# ==============================================================================

# สีสำหรับ Output
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}--- [ LAUNCHING DEEP CLEANING PROCOTOL ] ---${NC}"

# 1. [LOCAL]: Next.js & Node.js Artifacts
echo -e "${YELLOW}[1/5] Cleaning Project Artifacts...${NC}"
if [ -d ".next" ]; then
    echo "   > Removing .next build cache..."
    rm -rf .next
fi

# เคลียร์ไฟล์ Log ที่เกิดจาก npm/pnpm พัง
find . -name "npm-debug.log*" -delete
find . -name "pnpm-debug.log*" -delete
find . -name ".turbo" -type d -exec rm -rf {} + 2>/dev/null

# 2. [PACKAGE]: pnpm & npm Store
echo -e "${YELLOW}[2/5] Pruning Package Managers...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm store prune
fi
# npm cache clean มักใช้เวลานานและไม่จำเป็นถ้าใช้ pnpm เป็นหลัก 
# จะรันเฉพาะเมื่อจำเป็น หรือใช้ --force
npm cache clean --force

# 3. [SYSTEM]: Termux Package Management
echo -e "${YELLOW}[3/5] Cleaning Termux System...${NC}"
pkg clean
apt autoremove -y

# 4. [CACHE]: Global & Temp Files
echo -e "${YELLOW}[4/5] Clearing Global Caches...${NC}"
# เคลียร์ ~/.cache (ระวัง: บางแอปอาจเก็บ LSP logs หรือ Ctags ที่นี่)
rm -rf ~/.cache/*
# เคลียร์ Temporary files ในระบบ
rm -rf $TMPDIR/*

# 5. [DOCKER]: (Optional) ถ้าคุณมี Docker ใน Termux
if command -v docker &> /dev/null; then
    echo -e "${YELLOW}[Bonus] Pruning Docker System...${NC}"
    docker system prune -f --volumes
fi

echo -e "${GREEN}--- [ CLEAN COMPLETED SUCCESSFULLY ] ---${NC}"

# สรุปผลพื้นที่
echo -e "${CYAN}Current storage status:${NC}"
df -h . | awk 'NR==1 || NR==2'
