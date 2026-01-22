#!/bin/bash

# ==============================================================================
# Project: www.aemdevweb.com
# Purpose: Project Structure + Config + MDX + Next.js + Pre-deploy Context Report
# Version: 2.1.0 (2026-01-22)
# ==============================================================================

# CONFIGURATION
OUTPUT_FILE="aemdevweb-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

# Potential Config Filenames (Next.js 15)
NEXT_CONFIG_FILES=("next.config.ts" "next.config.mjs" "next.config.js")
MDX_COMPONENTS_FILES=("mdx-components.tsx" "mdx-components.js")

SITE_NAME="AEMDevWeb"
SITE_URL="https://www.aemdevweb.com"
AUTHOR="AEMDevWeb Automation"
ENVIRONMENT="pre-deploy"
PROJECT_TYPE="Web Application"
BUILD_ID=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
GENERATED_AT=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

WHITELIST_DIRS=(
  "config"
  "app"
  "components"
  "lib"
  "hooks"
  "constants"
  "content"
  "types"
  "public"
  "providers"
)

# INITIALIZATION
rm -f "$OUTPUT_FILE"
echo "[INFO] Scanning project structure for $SITE_NAME..."

{
  # FRONT MATTER METADATA
  cat <<EOF
---
title: "Project Structure Report"
site: "$SITE_NAME"
url: "$SITE_URL"
author: "$AUTHOR"
projectType: "$PROJECT_TYPE"
environment: "$ENVIRONMENT"
buildId: "$BUILD_ID"
generatedAt: "$GENERATED_AT"
contentType: "technical-documentation"
tags:
  - project-structure
  - mdx
  - nextjs
  - pre-deploy
---

# Project Structure Report
Generated: $GENERATED_AT

> Site: $SITE_URL
> Environment: $ENVIRONMENT
> Build ID: $BUILD_ID

EOF

  # 1. FOLDER STRUCTURE
  echo "## 1. Directory Architecture"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "dir: $dir/"
      find "$dir" -maxdepth 5 -not -path '*/.*' | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
    else
      echo ""
      echo "[WARN] Skipped: $dir (not found)"
    fi
  done

  # 2. PACKAGE OVERVIEW
  echo ""
  echo "## 2. Dependencies and Scripts (package.json)"
  echo '```json'
  if [ -f "package.json" ]; then
    if command -v jq >/dev/null 2>&1; then
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "{\"error\": \"package.json not found\"}"
  fi
  echo '```'

  # 3. MDX CONFIGURATION
  echo ""
  echo "## 3. MDX Rendering Components"
  FOUND_MDX=false
  for f in "${MDX_COMPONENTS_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "Status: File found ($f)"
      echo '```typescript'
      cat "$f"
      echo '```'
      FOUND_MDX=true
      break
    fi
  done
  [ "$FOUND_MDX" = false ] && echo "Status: mdx-components file not found"

  # 4. NEXT.JS CONFIGURATION
  echo ""
  echo "## 4. Next.js Runtime Configuration"
  FOUND_CONFIG=false
  for f in "${NEXT_CONFIG_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "Status: Config detected ($f)"
      echo '```typescript'
      cat "$f"
      echo '```'
      FOUND_CONFIG=true
      break
    fi
  done
  [ "$FOUND_CONFIG" = false ] && echo "Status: next.config file not found"

  # 5. PRE-DEPLOY ANALYSIS
  echo ""
  echo "## 5. Deployment Readiness Analysis"
  echo "---"
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "Final Status: READY FOR DEPLOY"
    else
      echo "Final Status: FIX REQUIRED"
    fi

    if grep -q "### Route Statistics" "$PRE_DEPLOY_REPORT"; then
      echo "### Route Map"
      echo '```text'
      sed -n '/### Route Statistics/,/---/p' "$PRE_DEPLOY_REPORT" | grep -v "###" | grep -v -- "---" | sed '/^$/d'
      echo '```'
    fi

    echo "### Critical Issues Highlight"
    ISSUES=$(grep -E -- "ERR|FAIL|WARN|error|warning|failed" "$PRE_DEPLOY_REPORT")
    if [ -z "$ISSUES" ]; then
      echo "No critical issues detected in the latest report."
    else
      echo "$ISSUES"
    fi
  else
    echo "Warning: pre-deploy-report.md not found. Architecture scan only."
  fi

  echo ""
  echo "---"
  echo "Report compilation finished. Environment: $ENVIRONMENT"

} > "$OUTPUT_FILE"

echo "[SUCCESS] Scan completed -> $OUTPUT_FILE"
