#!/bin/bash

# ==============================================================================
# [SYSTEM]: AEMDEVWEB INFRA-CLEANER v4.9 (ANDROID-SAFE MODE)
# [STRATEGY]: Deep Pruning | Mobile RAM Protection | Fully Automated
# ==============================================================================

# ปิดการถามยืนยันจาก Corepack
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# สีสำหรับ Terminal
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}--- [ STARTING AEM-ENGINE DEEP CLEAN v4.9 ] ---${NC}"

# 1. CLEAN BUILD ARTIFACTS
echo -e "${YELLOW}[1/6] Cleaning Build Artifacts & TS Cache...${NC}"
rm -rf .next
find . -type f -name ".eslintcache" -delete
find . -type f -name "*.tsbuildinfo" -delete
find . -type f -name "npm-debug.log*" -delete
find . -type f -name "pnpm-debug.log*" -delete

# 2. PNPM STORE
echo -e "${YELLOW}[2/6] Pruning pnpm Store...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm store prune
else
    echo "pnpm not found, skipping."
fi

# 3. TERMUX CLEAN (Check if running in Termux)
if [ -n "$TERMUX_VERSION" ]; then
    echo -e "${YELLOW}[3/6] Cleaning Termux...${NC}"
    pkg clean -y > /dev/null 2>&1
    apt autoremove -y > /dev/null 2>&1
    # ลบ TMP อย่างระมัดระวัง
    rm -rf "$TMPDIR"/* 2>/dev/null
else
    echo -e "${YELLOW}[3/6] Not Termux, skipping pkg clean...${NC}"
fi

# 4. USER CACHE
echo -e "${YELLOW}[4/6] Clearing User Cache...${NC}"
rm -rf ~/.cache/yarn
rm -rf ~/.cache/pnpm

# 5. NEXT INTERNAL CACHE
echo -e "${YELLOW}[5/6] Clearing Node Modules Cache...${NC}"
rm -rf node_modules/.cache

# 6. DOCKER CLEAN
if command -v docker &> /dev/null; then
    echo -e "${YELLOW}[6/6] Cleaning Docker System...${NC}"
    docker system prune -f --volumes > /dev/null 2>&1
else
    echo -e "${YELLOW}[6/6] Docker not found, skipping...${NC}"
fi

# 🧠 ANDROID-SAFE HEAP ENGINE
# ใช้คำสั่ง free ที่รองรับ Termux/Linux ทั่วไป
if command -v free &> /dev/null; then
    AVAILABLE_MB=$(free -m | awk '/^Mem:/ {print $7}')
    # Fallback ถ้าหา available ไม่เจอ ให้ใช้ free ช่อง $4
    if [ -z "$AVAILABLE_MB" ]; then
        AVAILABLE_MB=$(free -m | awk '/^Mem:/ {print $4}')
    fi
else
    AVAILABLE_MB=2048 # Default fallback
fi

SYSTEM_RESERVE=512
USABLE_MB=$(( AVAILABLE_MB - SYSTEM_RESERVE ))

# Safety check: อย่าให้ต่ำกว่า 1GB
if [ "$USABLE_MB" -lt 1024 ]; then 
    USABLE_MB=1024 
fi

# ใช้ 70% ของ RAM ที่เหลือ
CALCULATED_HEAP=$(( USABLE_MB * 70 / 100 ))

# Clamp ค่า (Min 1.5GB / Max 4GB)
if [ "$CALCULATED_HEAP" -gt 4096 ]; then
    CALCULATED_HEAP=4096
elif [ "$CALCULATED_HEAP" -lt 1536 ]; then
    CALCULATED_HEAP=1536
fi

export NODE_OPTIONS="--max-old-space-size=${CALCULATED_HEAP}"

echo -e "${GREEN}   > Android-Safe Heap Set: ${CALCULATED_HEAP}MB${NC}"

# REPORT
echo -e "${GREEN}--- [ CLEAN COMPLETED SUCCESSFULLY ] ---${NC}"
echo -e "${CYAN}📊 PROJECT HEALTH REPORT:${NC}"
echo -e "   > Project Size: $(du -sh . 2>/dev/null | cut -f1)"
echo -e "   > Heap Configured: ${CALCULATED_HEAP}MB"
echo "--------------------------------------------------"

# เช็คว่ารันด้วย source หรือไม่
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  echo -e "${RED}⚠  WARNING: You ran this as './clean.sh'${NC}"
  echo -e "${CYAN}   To apply RAM config to this session, run:${NC}"
  echo -e "${GREEN}   source clean.sh${NC}"
fi
