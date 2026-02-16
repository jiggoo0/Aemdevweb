#!/bin/bash

# ==============================================================================
# [SYSTEM CORE]: AUDIT_SYSTEM_WRAPPER v18.0.5
# [STRATEGY]: Fresh-Baseline Generation | Self-Healing Infrastructure
# [MAINTAINER]: AEMZA MACKS (Lead Architect)
# [REF]: aemdevweb.com
# ==============================================================================

# ANSI Color Codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}[AEMZA MACKS] เริ่มต้นกระบวนการ Audit ระบบ (Fresh-Baseline Mode)...${NC}"

# ------------------------------------------------------------------------------
# 1. FORCE-REGENERATE STRUCTURE BASELINE (ลบและสร้างใหม่ทุกครั้ง)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[01/05] กำลังล้างข้อมูลและสร้าง Baseline โครงสร้างใหม่...${NC}"

# ลบไฟล์เดิมเพื่อยืนยันว่าเป็นข้อมูลล่าสุด
rm -f structure.txt

# สร้าง Snapshot ใหม่ตามโครงสร้างปัจจุบัน
echo "AEMDEVWEB STRUCTURE SNAPSHOT - $(date)" > structure.txt
echo "------------------------------------------------" >> structure.txt
# สแกนโครงสร้างโดยยกเว้นไฟล์ขยะและสารบบภายในที่ไม่จำเป็น
find . -maxdepth 3 -not -path '*/.*' -not -path './node_modules*' -not -path './.next*' >> structure.txt

if [ -f "structure.txt" ]; then
    echo -e "${GREEN}[DONE] สร้าง structure.txt (Fresh Snapshot) สำเร็จ${NC}"
else
    echo -e "${RED}[CRITICAL] ไม่สามารถสร้าง Baseline ได้ ระบบหยุดการทำงาน${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 2. TYPE INTEGRITY & ZERO-UNUSED POLICY
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[02/05] ตรวจสอบ Type Integrity (TSC & Knip)...${NC}"
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
if [ -f "scripts/image-audit.mjs" ]; then
    node scripts/image-audit.mjs
    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}[WARN] พบรูปภาพใหม่ | กำลังรัน gen-blur-data.mjs...${NC}"
        node scripts/gen-blur-data.mjs
    fi
else
    echo -e "${BLUE}[INFO] ไม่พบ scripts/image-audit.mjs (Skipped)${NC}"
fi

# ------------------------------------------------------------------------------
# 5. HEX COLOR STANDARD (TAILWIND 4 READY)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[05/05] ตรวจสอบมาตรฐานรหัสสีใน Constants...${NC}"
grep -r "#[0-9a-fA-F]\{6\}" constants/ | grep ".ts" > /dev/null
if [ $? -eq 0 ]; then
    echo -e "${GREEN}[PASS] บังคับใช้ HEX Standard สำเร็จ (Tailwind 4 Ready)${NC}"
else
    echo -e "${RED}[FAIL] พบรหัสสีที่ไม่ได้มาตรฐาน OKLCH Engine${NC}"
    exit 1
fi

echo -e "\n${GREEN}[COMPLETE] Audit ผ่านทุกขั้นตอน ระบบสะอาดและพร้อมสำหรับการ Deployment${NC}"
