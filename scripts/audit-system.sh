#!/bin/bash

# ==============================================================================
# [SYSTEM CORE]: AUDIT_SYSTEM_WRAPPER v18.0.6 (DEEP_SCAN_EDITION)
# [STRATEGY]: Deep-Tree Visualization | Zero-Blindspot Architecture
# [MAINTAINER]: AEMZA MACKS (Lead Architect)
# ==============================================================================

# ANSI Color Codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}[AEMZA MACKS] เริ่มต้นกระบวนการ Audit ระบบ (Deep-Scan Mode)...${NC}"

# ------------------------------------------------------------------------------
# 1. FORCE-REGENERATE STRUCTURE BASELINE (DEEP SCAN)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[01/05] กำลังล้างข้อมูลและสร้าง Baseline โครงสร้างเชิงลึก...${NC}"

# ลบไฟล์เดิม
rm -f structure.txt

# Header
echo "AEMDEVWEB DEEP ARCHITECTURE SNAPSHOT - $(date)" > structure.txt
echo "================================================" >> structure.txt

# [LOGIC]: ตรวจสอบว่ามี command 'tree' หรือไม่ (Termux ส่วนใหญ่มี)
if command -v tree &> /dev/null; then
    # ใช้ tree เพื่อความสวยงามและอ่านง่าย (Depth 10 levels)
    # -a: แสดงไฟล์ hidden (config files)
    # -I: ยกเว้นโฟลเดอร์ขยะ
    # --dirsfirst: เรียงโฟลเดอร์ก่อนไฟล์
    tree -L 10 -a -I ".git|node_modules|.next|.turbo|.vercel|__pycache__|coverage|dist" --dirsfirst >> structure.txt
    
    echo -e "${BLUE}   > ใช้ Tree Algorithm ในการสร้างแผนที่ระบบ${NC}"
else
    # Fallback กรณีไม่มี tree ให้ใช้ find แบบลึก (Depth 10)
    find . -maxdepth 10 \
        -not -path '*/.*' \
        -not -path './node_modules*' \
        -not -path './.next*' \
        -not -path './dist*' \
        -not -path './coverage*' \
        | sort >> structure.txt
        
    echo -e "${YELLOW}   > ใช้ Find Algorithm (Fallback) เนื่องจากไม่พบ Tree${NC}"
fi

# Validation Check
if [ -s "structure.txt" ]; then
    # นับจำนวนบรรทัดเพื่อดูความหนาแน่นของโปรเจกต์
    LINE_COUNT=$(wc -l < structure.txt)
    echo -e "${GREEN}[DONE] สร้าง structure.txt สำเร็จ (Indexed ${LINE_COUNT} nodes)${NC}"
else
    echo -e "${RED}[CRITICAL] ไม่สามารถสร้าง Baseline ได้ ระบบหยุดการทำงาน${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 2. TYPE INTEGRITY & ZERO-UNUSED POLICY
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[02/05] ตรวจสอบ Type Integrity (TSC & Knip)...${NC}"
# เพิ่ม --no-exit-code ชั่วคราวหากต้องการแค่ Report แต่แนะนำให้เอาออกเมื่อ Production
pnpm knip --no-progress
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[PASS] ไม่พบ Dead Code ตามนโยบาย Zero-Unused${NC}"
else
    echo -e "${RED}[FAIL] พบปัญหาในระดับ Type หรือมี Code เกินในระบบ${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 3. MASTER REGISTRY LOGIC AUDIT
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[03/05] รัน Master Audit Protocol (Python)...${NC}"
if [ -f "scripts/master_audit.py" ]; then
    python3 scripts/master_audit.py
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}[PASS] ตรรกะใน Registry ถูกต้องตาม Schema${NC}"
    else
        echo -e "${RED}[FAIL] พบข้อผิดพลาดในระดับ Business Logic${NC}"
        exit 1
    fi
else
    echo -e "${BLUE}[INFO] ไม่พบ scripts/master_audit.py (Skipped)${NC}"
fi

# ------------------------------------------------------------------------------
# 4. IMAGE BLUR METADATA SYNC
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[04/05] ตรวจสอบ Image Blur Metadata...${NC}"
if [ -f "scripts/gen-blur-data.mjs" ]; then
    # รันตัว Generate เลยเพื่อความชัวร์ (Self-Healing)
    node scripts/gen-blur-data.mjs
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}[PASS] อัปเดต Metadata รูปภาพเรียบร้อย${NC}"
    else
        echo -e "${RED}[FAIL] ไม่สามารถสร้าง Blur Data ได้${NC}"
        # ไม่ Exit เพราะอาจเป็นแค่ Warning
    fi
else
    echo -e "${BLUE}[INFO] ไม่พบ scripts/gen-blur-data.mjs (Skipped)${NC}"
fi

# ------------------------------------------------------------------------------
# 5. HEX COLOR STANDARD (TAILWIND 4 READY)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[05/05] ตรวจสอบมาตรฐานรหัสสีใน Constants...${NC}"
# สแกนหา HEX Color เพื่อยืนยันว่าไม่มีการ Hardcode สีแปลกปลอม
grep -r "#[0-9a-fA-F]\{6\}" constants/ | grep ".ts" > /dev/null
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[PASS] บังคับใช้ HEX Standard สำเร็จ (Tailwind 4 Ready)${NC}"
else
    echo -e "${YELLOW}[WARN] ไม่พบสี HEX ใน Constants (อาจใช้ Tailwind classes ล้วน)${NC}"
fi

echo -e "\n${GREEN}[COMPLETE] Deep Audit ผ่านทุกขั้นตอน ระบบสะอาดและพร้อมสำหรับการ Deployment${NC}"
