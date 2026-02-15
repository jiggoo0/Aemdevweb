#!/bin/bash

# ==============================================================================
# [SYSTEM]: AEMDEVWEB INFRA-CLEANER v4.9 (ANDROID-SAFE MODE)
# [STRATEGY]: Deep Pruning | Mobile RAM Protection | Fully Automated
# ==============================================================================

# ปิดการถามยืนยันจาก Corepack (pnpm download prompt)
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0

CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}--- [ STARTING AEM-ENGINE DEEP CLEAN v4.9 ] ---${NC}"

# 1. CLEAN BUILD ARTIFACTS
echo -e "${YELLOW}[1/6] Cleaning Build Artifacts & TS Cache...${NC}"
[ -d ".next" ] && rm -rf .next
find . -name ".eslintcache" -delete
find . -name "*.tsbuildinfo" -delete
find . -name "npm-debug.log*" -delete
find . -name "pnpm-debug.log*" -delete

# 2. PNPM STORE (Silent Mode)
echo -e "${YELLOW}[2/6] Pruning pnpm Store...${NC}"
command -v pnpm &> /dev/null && pnpm store prune

# 3. TERMUX CLEAN
echo -e "${YELLOW}[3/6] Cleaning Termux...${NC}"
pkg clean -y
apt autoremove -y > /dev/null
rm -rf "$TMPDIR"/*

# 4. USER CACHE
echo -e "${YELLOW}[4/6] Clearing User Cache...${NC}"
rm -rf ~/.cache/*

# 5. NEXT INTERNAL CACHE
echo -e "${YELLOW}[5/6] Clearing Node Modules Cache...${NC}"
[ -d "node_modules/.cache" ] && rm -rf node_modules/.cache

# 6. DOCKER CLEAN
if command -v docker &> /dev/null; then
    echo -e "${YELLOW}[6/6] Cleaning Docker System...${NC}"
    docker system prune -f --volumes > /dev/null
else
    echo -e "${YELLOW}[6/6] Docker not found, skipping...${NC}"
fi

# 🧠 ANDROID-SAFE HEAP ENGINE
AVAILABLE_MB=$(free -m | awk '/^Mem:/ {print $7}')
TOTAL_MB=$(free -m | awk '/^Mem:/ {print $2}')
SYSTEM_RESERVE=512

USABLE_MB=$(( AVAILABLE_MB - SYSTEM_RESERVE ))
[ "$USABLE_MB" -lt 1024 ] && USABLE_MB=1024
CALCULATED_HEAP=$(( USABLE_MB * 70 / 100 ))

[ "$CALCULATED_HEAP" -gt 3072 ] && CALCULATED_HEAP=3072
[ "$CALCULATED_HEAP" -lt 1536 ] && CALCULATED_HEAP=1536

export NODE_OPTIONS="--max-old-space-size=${CALCULATED_HEAP}"

echo -e "${GREEN}   > Android-Safe Heap Set: ${CALCULATED_HEAP}MB${NC}"
echo -e "${GREEN}   > Available RAM: ${AVAILABLE_MB}MB / Total: ${TOTAL_MB}MB${NC}"

# REPORT
echo -e "${GREEN}--- [ CLEAN COMPLETED SUCCESSFULLY ] ---${NC}"
echo -e "${CYAN}📊 PROJECT HEALTH REPORT:${NC}"
echo -e "   > Project Size: $(du -sh . | cut -f1)"
echo -e "   > Available Disk: $(df -h . | awk 'NR==2 {print $4}')"
echo -e "   > Heap Configured: ${CALCULATED_HEAP}MB"
echo "--------------------------------------------------"

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  echo -e "${RED}⚠  To apply NODE_OPTIONS to current shell:${NC}"
  echo -e "${CYAN}   source clean${NC}"
fi
