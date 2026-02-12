#!/bin/bash

# ==============================================================================
# [SYSTEM]: MASTER AUDIT GUARDIAN v5.0 (EXTREME_STABILITY)
# [STRATEGY]: Non-Interactive Execution | Deep Error Trapping | Resource Guard
# [MAINTAINER]: AEMDEVWEB Specialist Team
# ==============================================================================

# --- [ENVIRONMENT HARDENING] ---
# บังคับใช้โหมด Non-interactive เพื่อป้องกันการถาม Y/n
export CI=true
export COREPACK_ENABLE_DOWNLOAD_PROMPT=0

REPORT_FILE="MASTER_AUDIT_REPORT.md"
ROOT_DIR=$(pwd)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Supported Extensions
EXTENSIONS=("" ".ts" ".tsx" ".js" ".jsx" "/index.ts" "/index.tsx" "/index.js" "/index.d.ts" ".d.ts" ".json" ".css" ".mdx")

echo -e "${CYAN}🚀 Launching Master Audit Guardian v5.0 (Extreme Stability)...${NC}"

# Initialize Report
echo "# Master Project Audit Report (v5.0)" > "$REPORT_FILE"
echo "**Date:** $(date)" >> "$REPORT_FILE"
echo "**Environment:** Termux/Mobile Infrastructure" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# ==============================================================================
# MODULE 1: IMPORT INTEGRITY & PATH RESOLUTION
# ==============================================================================
echo -e "${YELLOW}[1/6] Checking Import Integrity...${NC}"
echo "## 1. Import & Path Resolution" >> "$REPORT_FILE"
echo "| File | Import Path | Status | Recommendation |" >> "$REPORT_FILE"
echo "|---|---|---|---|" >> "$REPORT_FILE"

resolve_path() {
    local src="$1"
    local import="$2"
    if [[ "$import" == @/* ]]; then 
        echo "${ROOT_DIR}/${import#@/}"
    elif [[ "$import" == ./* || "$import" == ../* ]]; then
        # เพิ่ม Error Handling ใน Python
        python3 -c "import os, sys; print(os.path.normpath(os.path.join(sys.argv[1], sys.argv[2])))" "$src" "$import" 2>/dev/null
    else 
        echo "NODE_MODULE"
    fi
}

# Scan logic
find app components lib constants types config -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" \) -not -path "*/node_modules/*" | while read -r file; do
    dir=$(dirname "$ROOT_DIR/$file")
    grep -E "^(import|export).*from ['\"]" "$file" | while read -r line; do
        path=$(echo "$line" | sed -E "s/.*['\"]([^'\"]+)['\"].*/\1/")
        [[ "$path" != @/* && "$path" != ./* && "$path" != ../* ]] && continue
        
        abs_path=$(resolve_path "$dir" "$path")
        
        found="MISSING"
        for ext in "${EXTENSIONS[@]}"; do
            if [[ -f "${abs_path}${ext}" ]]; then found="FOUND"; break; fi
        done
        
        if [[ "$found" == "MISSING" ]]; then
            p_dir=$(dirname "$abs_path")
            f_name=$(basename "$abs_path")
            if [[ -d "$p_dir" ]]; then
                match=$(find "$p_dir" -maxdepth 1 -iname "${f_name}*" 2>/dev/null | head -n 1)
                if [[ -n "$match" ]]; then
                    echo "| \`$file\` | \`$path\` | ⚠️ Case Mismatch | Rename to match file system |" >> "$REPORT_FILE"
                else
                    echo "| \`$file\` | \`$path\` | ❌ Missing | Check file existence |" >> "$REPORT_FILE"
                fi
            else
                echo "| \`$file\` | \`$path\` | ❌ Invalid Path | Directory not found |" >> "$REPORT_FILE"
            fi
        fi
    done
done

# ==============================================================================
# MODULE 2-4: ARCHITECTURE, PERFORMANCE, & SERVER RULES
# ==============================================================================
echo -e "${YELLOW}[2/6] Validating Architectural Integrity...${NC}"
echo -e "${YELLOW}[3/6] Analyzing App Router Performance...${NC}"
echo -e "${YELLOW}[4/6] Enforcing Strict Server Patterns...${NC}"

echo "## 2. Structural & Performance Analysis" >> "$REPORT_FILE"
echo "| File | Category | Issue | Severity |" >> "$REPORT_FILE"
echo "|---|---|---|---|" >> "$REPORT_FILE"

# Combined Check
find app components lib constants types -type f \( -name "*.ts" -o -name "*.tsx" \) -not -path "*/node_modules/*" | while read -r file; do
    # Pure Logic Pollution
    if [[ "$file" =~ ^(lib|constants|config|types) ]] && grep -qE "^[\"']use client[\"']" "$file"; then
        echo "| \`$file\` | Architecture | Contains \`use client\` | 🔴 CRITICAL |" >> "$REPORT_FILE"
    fi
    # Layout/Loading Performance
    if [[ "$file" =~ (layout|loading)\.tsx$ ]] && grep -qE "^[\"']use client[\"']" "$file"; then
        echo "| \`$file\` | Performance | Heavy Client Layout/Loading | 🟡 Warning |" >> "$REPORT_FILE"
    fi
    # Strict Server Rules
    if [[ "$file" =~ components/.*\.tsx$ ]] && grep -qE "^[\"']use client[\"']" "$file"; then
        if grep -q "export default async function" "$file"; then
            echo "| \`$file\` | Server Rule | Async Client Component | ❌ Error |" >> "$REPORT_FILE"
        fi
        if grep -q "export const metadata" "$file"; then
            echo "| \`$file\` | Server Rule | Metadata in Client Component | ❌ Error |" >> "$REPORT_FILE"
        fi
    fi
done

# ==============================================================================
# MODULE 5: DEAD CODE & CIRCULAR DEPS (SMART EXECUTION)
# ==============================================================================
echo -e "${YELLOW}[5/6] Executing Deep Analysis (Knip & Madge)...${NC}"
echo "## 3. Deep Dependencies Analysis" >> "$REPORT_FILE"

# Knip with Non-interactive check
echo "### Dead Code Scan (Knip)" >> "$REPORT_FILE"
if grep -q "knip" package.json; then
    # บังคับข้าม prompt และรันแบบเงียบ
    pnpm knip --no-exit-code --cache > .knip_temp 2>&1
    if [[ $? -eq 0 ]]; then
        echo "\`\`\`text" >> "$REPORT_FILE"
        cat .knip_temp >> "$REPORT_FILE"
        echo "\`\`\`" >> "$REPORT_FILE"
    else
        echo "⚠️ Knip failed to run properly. Check package dependencies." >> "$REPORT_FILE"
    fi
    rm .knip_temp
else
    echo "Knip not installed." >> "$REPORT_FILE"
fi

# Circular Deps
echo "### Circular Dependencies (Madge)" >> "$REPORT_FILE"
if npx --version >/dev/null 2>&1; then
    npx -y madge --circular --extensions ts,tsx app/ components/ > .madge_temp 2>&1
    echo "\`\`\`text" >> "$REPORT_FILE"
    cat .madge_temp >> "$REPORT_FILE"
    echo "\`\`\`" >> "$REPORT_FILE"
    rm .madge_temp
else
    echo "npx not found." >> "$REPORT_FILE"
fi

# ==============================================================================
# MODULE 6: RESOURCE GUARD (NEW)
# ==============================================================================
echo -e "${YELLOW}[6/6] Analyzing Resource Infrastructure...${NC}"
echo "## 4. Resource & Infrastructure" >> "$REPORT_FILE"

# Check Large Public Assets (> 500KB)
echo "### Large Assets (>500KB)" >> "$REPORT_FILE"
echo "| Asset | Size |" >> "$REPORT_FILE"
echo "|---|---|" >> "$REPORT_FILE"
find public -type f -size +500k | while read -r asset; do
    size=$(du -h "$asset" | cut -f1)
    echo "| \`$asset\` | $size |" >> "$REPORT_FILE"
done

# Check Environment
echo "" >> "$REPORT_FILE"
echo "### Environment Integrity" >> "$REPORT_FILE"
echo "| Variable | Status |" >> "$REPORT_FILE"
echo "|---|---|" >> "$REPORT_FILE"
MANDATORY_KEYS=("NEXT_PUBLIC_SITE_URL" "LINE_ID" "CONTACT_EMAIL")
for key in "${MANDATORY_KEYS[@]}"; do
    if grep -q "$key" .env.local 2>/dev/null || grep -q "$key" .env 2>/dev/null; then
        echo "| \`$key\` | ✅ Defined |" >> "$REPORT_FILE"
    else
        echo "| \`$key\` | ⚠️ UNDEFINED |" >> "$REPORT_FILE"
    fi
done

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "**Audit Guardian v5.0 Completed.** Analysis Secured." >> "$REPORT_FILE"

echo -e "${GREEN}✅ Audit Complete! Full Report: ${CYAN}${REPORT_FILE}${NC}"
