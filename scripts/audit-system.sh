#!/bin/bash

# ==============================================================================
# [SYSTEM CORE]: AUDIT_SYSTEM_WRAPPER v18.0.7 (PRODUCTION_ENFORCED)
# [STRATEGY]: Deep-Tree Visualization | Zero-Blindspot Architecture
# [MAINTAINER]: AEMZA MACKS (Lead Architect)
# [MANDATE]: Strictly Enforce Type Safety and Metadata Integrity
# ==============================================================================

# ANSI Color Codes for Terminal Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[AEMZA MACKS] Starting System Audit (Deep-Scan Mode)...${NC}"

# Set script to exit on any command failure
set -e

# ------------------------------------------------------------------------------
# 1. STRUCTURE BASELINE GENERATION
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 01/05] Synchronizing Architecture Baseline...${NC}"

STRUCTURE_FILE="structure.txt"
rm -f "$STRUCTURE_FILE"

{
    echo "AEMDEVWEB ARCHITECTURE SNAPSHOT - $(date)"
    echo "================================================"
} > "$STRUCTURE_FILE"

# [STRATEGY]: Using Tree for visual hierarchy or Find for recursion
if command -v tree &> /dev/null; then
    tree -L 10 -a -I ".git|node_modules|.next|.turbo|.vercel|__pycache__|coverage|dist" --dirsfirst >> "$STRUCTURE_FILE"
    echo -e "${BLUE}   > Tree Algorithm deployed.${NC}"
else
    find . -maxdepth 10 \
        -not -path '*/.*' \
        -not -path './node_modules*' \
        -not -path './.next*' \
        -not -path './dist*' \
        -not -path './coverage*' \
        | sort >> "$STRUCTURE_FILE"
    echo -e "${YELLOW}   > Find Algorithm deployed (Fallback).${NC}"
fi

if [ -s "$STRUCTURE_FILE" ]; then
    NODE_COUNT=$(wc -l < "$STRUCTURE_FILE")
    echo -e "${GREEN}[OK] structure.txt generated (Nodes: $NODE_COUNT)${NC}"
else
    echo -e "${RED}[CRITICAL] Baseline generation failed. Terminating.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 2. DEAD CODE & TYPE INTEGRITY (KNIP)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 02/05] Enforcing Zero-Unused Policy (Knip)...${NC}"
# [POLICY]: Components not in use are removed
if pnpm knip; then
    echo -e "${GREEN}[OK] No dead code detected in infrastructure.${NC}"
else
    echo -e "${RED}[FAIL] Code hygiene violation detected.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 3. ARCHITECTURAL MASTER AUDIT (PYTHON)
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 03/05] Executing Master Audit Protocol...${NC}"
# [STRATEGY]: Structural Integrity & WCAG AA Compliance
if [ -f "scripts/master_audit.py" ]; then
    python3 scripts/master_audit.py
    echo -e "${GREEN}[OK] Registry logic and visual contrast verified.${NC}"
else
    echo -e "${BLUE}[SKIP] scripts/master_audit.py not found.${NC}"
fi

# ------------------------------------------------------------------------------
# 4. IMAGE SEO & BLUR METADATA SYNC
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 04/05] Synchronizing Image Blur Registry...${NC}"
# [MANDATE]: All images must have an entry in image-blur-data.ts
if [ -f "scripts/gen-blur-data.mjs" ]; then
    node scripts/gen-blur-data.mjs
    echo -e "${GREEN}[OK] Image metadata synchronized for Zero-CLS.${NC}"
else
    echo -e "${BLUE}[SKIP] scripts/gen-blur-data.mjs not found.${NC}"
fi

# ------------------------------------------------------------------------------
# 5. THEME & COLOR STANDARD VALIDATION
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 05/05] Validating HEX Color Standard...${NC}"
# [STRATEGY]: Enforce HEX codes for OKLCH engine compatibility
INVALID_COLORS=$(grep -r "rgba\|rgb\|hsl" constants/ --include="*.ts" | wc -l || true)

if [ "$INVALID_COLORS" -eq 0 ]; then
    echo -e "${GREEN}[OK] HEX Standard strictly enforced (Tailwind 4 Ready).${NC}"
else
    echo -e "${RED}[FAIL] Non-HEX color format detected in constants.${NC}"
    exit 1
fi

echo -e "\n${GREEN}[SUCCESS] System Audit Complete. Infrastructure is stable for Deployment.${NC}"
