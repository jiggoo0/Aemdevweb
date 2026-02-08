#!/bin/bash

# สีสำหรับ Output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}--- [ AEMDEVWEB SYSTEM CHECK ] ---${NC}"

# 1. เช็ค Node & pnpm
echo -n "Node.js: " && node -v || echo -e "${RED}Not Found${NC}"
echo -n "pnpm: " && pnpm -v || echo -e "${RED}Not Found${NC}"

# 2. เช็ค Dependencies
if [ -d "node_modules" ]; then
    echo -e "Dependencies: ${GREEN}Installed${NC}"
else
    echo -e "Dependencies: ${RED}Missing (Please run pnpm install)${NC}"
fi

# 3. เช็ค Port 3000 (Next.js Default)
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "Port 3000: ${YELLOW}In Use (Already Running)${NC}"
else
    echo -e "Port 3000: ${GREEN}Available${NC}"
fi

# 4. เช็คพื้นที่ Disk (Termux ชอบเต็ม)
STORAGE=$(df -h . | awk 'NR==2 {print $4}')
echo -e "Free Space: ${GREEN}$STORAGE${NC}"

# 5. Git Status แบบไวๆ
if [ -d ".git" ]; then
    echo -n "Git Branch: " && git branch --show-current
    git status -s | grep -q "." && echo -e "Git Status: ${YELLOW}Uncommitted Changes${NC}" || echo -e "Git Status: ${GREEN}Clean${NC}"
fi

echo -e "${GREEN}----------------------------------${NC}"
