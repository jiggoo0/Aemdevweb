#!/bin/bash

# ==============================================================================
# AEMDEVWEB | Full Project Auditor v8.0 (Strategic Architect Edition)
# หน้าที่: ตรวจสอบความเรียบร้อย ความปลอดภัย และความสมบูรณ์ของระบบรหัสระดับลึก
# มาตรฐาน: Next.js 16, React 19, Strict TypeScript, Zero-Emoji Policy
# ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
# ==============================================================================

# [1. INITIAL CONFIGURATION]
OUTPUT_FILE="aemdevweb-audit-report.md"
PROJECT_DOMAIN="www.aemdevweb.com"
GENERATED_DATE=$(date '+%Y-%m-%d %H:%M:%S')

# พิกัดการตรวจจับข้อมูล
IGNORE_PATTERN="node_modules|\.git|\.next|\.DS_Store|__pycache__|\.env|\.vscode|coverage|build|dist|.turbo"
EXCLUDE_FLAGS="--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=dist --exclude-dir=.git --exclude-dir=public"
CONTENT_DIRS=("content/blog" "content/case-studies")

# พิกัด Type System (The Trinity)
CORE_TYPES=("types/index.ts" "types/seo.ts" "types/template.ts")
DNA_CONTEXT="config/AI-CONTEXT.DNA.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

# ตัวแปรสถานะระบบ
WARN_COUNT=0
CRIT_COUNT=0

echo "🚀 Launching Audit Engine v8.0... Strategic Scan in Progress..."

{
  echo "# Project Health & Audit Report (Architect Edition)"
  echo ""
  echo "> Project Domain: $PROJECT_DOMAIN"
  echo "> Audit Timestamp: $GENERATED_DATE"
  echo "> Depth Level: Level 7 (Ultra-Deep Scan)"
  echo ""
  echo "---"

  # [SECTION 1]: EXECUTIVE SUMMARY
  # ---------------------------------------------------------
  echo "## 1. Executive Summary"
  
  # ตรวจสอบ Secret Leak (High Precision)
  SECRET_LEAK=$(grep -rE "(key|secret|password|auth|token)[[:space:]]*=[[:space:]]*['\"][a-zA-Z0-0]{10,}" . $EXCLUDE_FLAGS --exclude="*.env*" --exclude="*.config*" | grep -vE "^[[:space:]]*//")
  SECRET_COUNT=$(echo -n "$SECRET_LEAK" | grep -c '^' || true)

  # ตรวจสอบ Type 'any' (Strict Regex) - กรองบรรทัดที่เป็น comment ออก
  ANY_MATCHES=$(grep -rnE ":\s*any\b|as\s+any\b|<\s*any\s*>" app components lib types $EXCLUDE_FLAGS --include="*.ts" --include="*.tsx" | grep -vE "^\s*//|^\s*\*" | grep -vE "\{\s*/\*")
  ANY_COUNT=$(echo -n "$ANY_MATCHES" | grep -c '^' || true)

  # ตรวจสอบ Dev Leftovers (Console.log)
  CONSOLE_MATCHES=$(grep -rnE "console\.log|debugger" app components lib $EXCLUDE_FLAGS --include="*.ts" --include="*.tsx" | grep -vE "^\s*//")
  CONSOLE_COUNT=$(echo -n "$CONSOLE_MATCHES" | grep -c '^' || true)

  # ตรวจสอบพิกัดไฟล์ภาพขนาดใหญ่
  LARGE_ASSETS_COUNT=$(find public -type f \( -name "*.webp" -o -name "*.png" -o -name "*.jpg" \) -size +250k 2>/dev/null | wc -l | tr -d ' ')

  echo "| Checkpoint | Metrics | Status |"
  echo "| :--- | :---: | :--- |"
  
  # Security Check
  if [ "$SECRET_COUNT" -gt 0 ]; then
    echo "| Security (Secrets) | $SECRET_COUNT Leaks | CRITICAL |"
    ((CRIT_COUNT+=1))
  else
    echo "| Security (Secrets) | 0 | PASSED |"
  fi

  # Type Integrity
  if [ "$ANY_COUNT" -gt 0 ]; then
    echo "| Type Safety (any) | $ANY_COUNT Leaks | WARNING |"
    ((WARN_COUNT+=1))
  else
    echo "| Type Safety (any) | 0 | PASSED |"
  fi

  # Cleanup Check
  if [ "$CONSOLE_COUNT" -gt 0 ]; then
    echo "| Dev Leftovers | $CONSOLE_COUNT Points | WARNING |"
    ((WARN_COUNT+=1))
  else
    echo "| Dev Leftovers | 0 | PASSED |"
  fi

  # Assets Performance
  if [ "$LARGE_ASSETS_COUNT" -gt 0 ]; then
    echo "| Asset Size (>250KB) | $LARGE_ASSETS_COUNT Files | CRITICAL |"
    ((CRIT_COUNT+=1))
  else
    echo "| Asset Size (>250KB) | 0 | PASSED |"
  fi
  echo ""

  # [SECTION 2]: TYPE SYSTEM TOPOLOGY (THE TRINITY)
  # ---------------------------------------------------------
  echo "## 2. Type System Topology & Barrel Sync"
  
  # ตรวจสอบการเรียกใช้ Barrel Export ใน types/index.ts (สำคัญมากสำหรับโครงสร้าง Level 7)
  HUB_FILE="types/index.ts"
  echo "### Hub Analysis: $HUB_FILE"
  if [ -f "$HUB_FILE" ]; then
    echo "| Target Node | Export Sync Status |"
    echo "| :--- | :--- |"
    
    for sub_type in "seo" "template"; do
      if grep -q "export \* from \"./$sub_type\"" "$HUB_FILE"; then
        echo "| types/$sub_type.ts | SYNCED (Barrel Active) |"
      else
        echo "| types/$sub_type.ts | MISSING (Barrel Link Failed) |"
        ((CRIT_COUNT+=1))
      fi
    done
  else
    echo "STATUS: **CRITICAL: Hub file (types/index.ts) missing**"
    ((CRIT_COUNT+=1))
  fi
  echo ""

  echo "### Interface Mapping"
  for t_file in "${CORE_TYPES[@]}"; do
    if [ -f "$t_file" ]; then
      echo "#### Node: $t_file"
      echo "| Kind | Interface/Type Name |"
      echo "| :--- | :--- |"
      grep -E "^(export )?(interface|type) " "$t_file" | sed -E 's/^(export )?(interface|type) ([a-zA-Z0-9_]+).*/| \2 | \3 |/'
      echo ""
    else
      echo "STATUS: **$t_file: NOT FOUND**"
      ((CRIT_COUNT+=1))
    fi
  done

  # [SECTION 3]: DNA & PRE-DEPLOY CONTEXT
  # ---------------------------------------------------------
  echo "## 3. DNA & Deployment Context"
  if [ -f "$DNA_CONTEXT" ]; then
    echo "DNA Path: \`$DNA_CONTEXT\` (Verified)"
  else
    echo "DNA Path: **NOT FOUND**"
    ((CRIT_COUNT+=1))
  fi

  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    echo "Pre-deploy Report: \`$PRE_DEPLOY_REPORT\` (Active)"
  else
    echo "Pre-deploy Report: **NOT FOUND**"
  fi
  echo ""

  # [SECTION 4]: TECHNICAL SEO & READINESS
  # ---------------------------------------------------------
  echo "## 4. Technical SEO & Readiness"
  
  LAYOUT_FILE="app/layout.tsx"
  if [ -f "$LAYOUT_FILE" ] && grep -q "metadataBase" "$LAYOUT_FILE"; then
    echo "- [x] MetadataBase: CONFIGURED"
  else
    echo "- [ ] MetadataBase: **MISSING**"
    ((CRIT_COUNT+=1))
  fi

  # MDX Metadata Validation
  MDX_ISSUE_FOUND=false
  for c_dir in "${CONTENT_DIRS[@]}"; do
    if [ -d "$c_dir" ]; then
      find "$c_dir" -maxdepth 4 -name "*.mdx" 2>/dev/null | while read -r file; do
        if ! grep -qE "^\s*title:" "$file" || ! grep -qE "^\s*description:" "$file"; then
          echo "- [ ] MDX Failure: $file (Metadata Incomplete)"
          MDX_ISSUE_FOUND=true
        fi
      done
    fi
  done
  if [ "$MDX_ISSUE_FOUND" = false ]; then
    echo "- [x] MDX Content: ALL NODES VALIDATED"
  fi
  echo ""

  # [SECTION 5]: ULTRA-DEEP DIRECTORY TREE (LEVEL 7)
  # ---------------------------------------------------------
  echo "## 5. Directory Topology (Ultra-Deep Level 7)"
  echo '```text'
  if command -v tree >/dev/null 2>&1; then
    tree -L 7 -I "$IGNORE_PATTERN" --dirsfirst -F
  else
    find app components lib constants content -maxdepth 7 -not -path '*/.*' | \
    grep -vE "$IGNORE_PATTERN" | \
    sed -e "s/[^-][^\/]*\// |  /g" -e "s/|  \([^|]\)/|-- \1/"
  fi
  echo '```'
  echo ""

  # [SECTION 6]: FINAL VERDICT
  # ---------------------------------------------------------
  echo "## 6. Final Verdict"
  echo "Critical Issues: $CRIT_COUNT"
  echo "Warning Points: $WARN_COUNT"
  echo ""

  if [ "$CRIT_COUNT" -eq 0 ] && [ "$WARN_COUNT" -eq 0 ]; then
    echo "### STATUS: READY TO DEPLOY"
    echo "ระบบมีความสมบูรณ์ 100% ตามมาตรฐานยุทธศาสตร์ Level 7"
  else
    echo "### STATUS: ACTIONS REQUIRED"
    echo "กรุณาแก้ไขจุดวิกฤต (Critical) ก่อนดำเนินการ Deployment"
  fi

  echo ""
  echo "---"
  echo "Report Generated by AEMDEVWEB Automated Auditor"
} > "$OUTPUT_FILE"

# Clean UI Output for Terminal
echo "------------------------------------------------------------"
echo "AUDIT COMPLETE: $OUTPUT_FILE"
echo "Critical: $CRIT_COUNT | Warning: $WARN_COUNT"
echo "------------------------------------------------------------"
