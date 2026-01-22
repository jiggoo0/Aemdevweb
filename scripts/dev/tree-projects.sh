#!/bin/bash

# ==============================================================================
# PROJECT: www.aemdevweb.com
# PURPOSE: Architecture, Config, MDX, and Pre-deploy Context Compilation
# VERSION: 2.2.0 (2026-01-23)
# IDENTITY: Alongkorl (นายเอ็มซ่ามากส์)
# ==============================================================================

# CONFIGURATION
OUTPUT_FILE="aemdevweb-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

# System File Conventions (Next.js 16 Standard)
NEXT_CONFIG_FILES=("next.config.ts" "next.config.mjs" "next.config.js")
MDX_COMPONENTS_FILES=("mdx-components.tsx" "mdx-components.js")
EDGE_RUNTIME_FILES=("proxy.ts" "middleware.ts" "instrumentation.ts")

SITE_NAME="AEMDevWeb"
SITE_URL="https://www.aemdevweb.com"
AUTHOR="Alongkorl Yomkerd"
ENVIRONMENT="pre-deploy"
PROJECT_TYPE="Next.js 16 Web Application"
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
echo "[INFO] Initiating Architecture Scan for $SITE_NAME..."

{
  # FRONT MATTER METADATA (YAML Standards)
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
status: "verified"
---

# Project Structure Report
Generated: $GENERATED_AT

> Site: $SITE_URL
> Environment: $ENVIRONMENT
> Build ID: $BUILD_ID
> Identity: นายเอ็มซ่ามากส์ (Senior Developer)

EOF

  # 1. DIRECTORY ARCHITECTURE
  echo "## 1. Directory Architecture"
  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "dir: $dir/"
      find "$dir" -maxdepth 5 -not -path '*/.*' | sed -e 's/[^-][^\/]*\//  |/g' -e 's/|  /   /g'
    else
      echo ""
      echo "[WARN] Directory not found: $dir"
    fi
  done

  # 2. PACKAGE OVERVIEW
  echo ""
  echo "## 2. Dependencies and Pipeline (package.json)"
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

  # 3. MDX AND EDGE CONFIGURATION
  echo ""
  echo "## 3. Rendering and Edge Configuration"
  
  # Scan MDX
  for f in "${MDX_COMPONENTS_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "File: $f (MDX Provider)"
      echo '```typescript'
      cat "$f"
      echo '```'
      break
    fi
  done

  # Scan Edge/Proxy/Middleware
  for f in "${EDGE_RUNTIME_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "File: $f (Edge Runtime Logic)"
      echo '```typescript'
      cat "$f"
      echo '```'
    fi
  done

  # 4. NEXT.JS RUNTIME CONFIGURATION
  echo ""
  echo "## 4. Next.js Runtime Environment"
  for f in "${NEXT_CONFIG_FILES[@]}"; do
    if [ -f "$f" ]; then
      echo "File: $f (Core Configuration)"
      echo '```typescript'
      cat "$f"
      echo '```'
      break
    fi
  done

  # 5. DEPLOYMENT READINESS ANALYSIS
  echo ""
  echo "## 5. Deployment Readiness Analysis"
  echo "---"
  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "Verdict: READY FOR DEPLOY"
    else
      echo "Verdict: FIX REQUIRED"
    fi

    if grep -q "### Route Analysis" "$PRE_DEPLOY_REPORT" || grep -q "### Route Statistics" "$PRE_DEPLOY_REPORT"; then
      echo "### Production Route Map"
      echo '```text'
      # Adjusted to match Next.js 16 pre-deploy report format
      sed -n '/###.*Route/,/---/p' "$PRE_DEPLOY_REPORT" | grep -vE "###|---" | sed '/^$/d'
      echo '```'
    fi

    echo "### Critical Issues Highlight"
    ISSUES=$(grep -E "ERR|FAIL|WARN|error|warning|failed" "$PRE_DEPLOY_REPORT" | grep -v "dir:")
    if [ -z "$ISSUES" ]; then
      echo "Status: No critical impediments detected."
    else
      echo "$ISSUES"
    fi
  else
    echo "[WARN] $PRE_DEPLOY_REPORT not found. Skipping health analysis."
  fi

  echo ""
  echo "---"
  echo "Report compilation finished. System Authority: นายเอ็มซ่ามากส์"

} > "$OUTPUT_FILE"

echo "[SUCCESS] Scan completed -> $OUTPUT_FILE"
