#!/bin/bash

# ==============================================================================
# [SYSTEM CORE]: SYSTEM_INTEGRITY_GATEKEEPER v18.0.8 (ULTIMATE_ENFORCED)
# [STRATEGY]: Multi-Engine Orchestration | Structural + SEO + Asset Audit
# [MAINTAINER]: AEMZA MACKS (Lead Architect)
# [MANDATE]: Strictly Enforce Quality Standards before Production Build
# ==============================================================================

# ANSI Color Codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
NC='\033[0m'

echo -e "${MAGENTA}${BOLD}[AEMZA MACKS] Starting Ultimate System Audit Protocol...${NC}"

# Exit immediately if any command fails
set -e

# ------------------------------------------------------------------------------
# 1. INFRASTRUCTURE: BASELINE & HYGIENE
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 01] Synchronizing Architecture Baseline...${NC}"
STRUCTURE_FILE="structure.txt"
if command -v tree &> /dev/null; then
    tree -L 10 -a -I ".git|node_modules|.next|dist" --dirsfirst > "$STRUCTURE_FILE"
    echo -e "${GREEN}   > Architecture Snapshot captured.${NC}"
fi

echo -e "\n${YELLOW}[STAGE 02] Enforcing Zero-Unused Policy (Knip)...${NC}"
pnpm knip

# ------------------------------------------------------------------------------
# 2. STRUCTURAL & VISUAL: PYTHON ENFORCER
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 03] Executing Structural & Visual Compliance (Python)...${NC}"
if [ -f "scripts/integrity-enforcer.py" ]; then
    python3 scripts/integrity-enforcer.py
else
    echo -e "${RED}[ERROR] scripts/integrity-enforcer.py not found.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 3. CONTENT & SEO: CONSOLIDATED JS AUDIT
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 04] Inspecting Templates & SEO Logic (JS/TSX)...${NC}"
if [ -f "scripts/seo-structure-audit.mjs" ]; then
    pnpm tsx scripts/seo-structure-audit.mjs
else
    echo -e "${RED}[ERROR] scripts/seo-structure-audit.mjs not found.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 4. ASSETS: QUARANTINE & INTEGRITY
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 05] Asset Integrity & Quarantine Protocol...${NC}"
if [ -f "scripts/asset-integrity-protocol.mjs" ]; then
    node scripts/asset-integrity-protocol.mjs
else
    echo -e "${RED}[ERROR] scripts/asset-integrity-protocol.mjs not found.${NC}"
    exit 1
fi

# ------------------------------------------------------------------------------
# 5. FINAL VALIDATION: COLOR STANDARDS
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[STAGE 06] Final HEX Color Standard Verification...${NC}"
INVALID_COLORS=$(grep -r "rgba\|rgb\|hsl" constants/ --include="*.ts" | wc -l || true)

if [ "$INVALID_COLORS" -eq 0 ]; then
    echo -e "${GREEN}[OK] HEX Standards Verified for Tailwind 4.${NC}"
else
    echo -e "${RED}[FAIL] $INVALID_COLORS non-HEX colors detected in constants.${NC}"
    exit 1
fi

echo -e "\n${GREEN}${BOLD}[SUCCESS] Global Integrity Verified. Infrastructure is READY for Deployment.${NC}"
