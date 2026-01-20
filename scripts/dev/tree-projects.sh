#!/bin/bash

# ==============================================================================
# Project: www.aemdevweb.com
# Purpose: Project Structure + Config + MDX + Next.js + Pre-deploy Context Report
# Output : project-structure.md
# ==============================================================================

# ===============================
# CONFIG / METADATA
# ===============================
OUTPUT_FILE="project-structure.md"
PRE_DEPLOY_REPORT="pre-deploy-report.md"

MDX_COMPONENTS_FILE="mdx-components.tsx"
NEXT_CONFIG_FILE="next.config.ts"

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

# ===============================
# CLEAN OLD OUTPUT
# ===============================
rm -f "$OUTPUT_FILE"

echo "🚀 Scanning project structure for $SITE_NAME..."

{
  # ===============================
  # FRONT MATTER METADATA
  # ===============================
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
  - aemdevweb
---

# 📁 Project Structure Report
_Generated: **$GENERATED_AT**_

> **Site:** $SITE_URL  
> **Environment:** $ENVIRONMENT  
> **Build ID:** $BUILD_ID

EOF

  # ===============================
  # FOLDER STRUCTURE
  # ===============================
  echo "## 🌳 Folder Structure"

  for dir in "${WHITELIST_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      echo ""
      echo "📂 $dir"

      find "$dir" -maxdepth 10 -mindepth 1 \
        -path "*/node_modules" -prune -o \
        -path "*/.*" -prune -o \
        -print | sort | while read -r path; do

          depth=$(echo "$path" | tr -cd '/' | wc -c)
          indent=$(printf '%*s' $((depth * 2)) "")
          name=$(basename "$path")

          if [ -d "$path" ]; then
            echo "${indent}📂 $name"
          else
            echo "${indent}📄 $name"
          fi
        done
    else
      echo ""
      echo "⚠️ Skipped: $dir (not found)"
    fi
  done

  # ===============================
  # PACKAGE.JSON OVERVIEW
  # ===============================
  echo ""
  echo "## 📦 package.json Overview"
  echo '```json'

  if [ -f "package.json" ]; then
    if command -v jq >/dev/null 2>&1; then
      jq '{name, version, scripts, dependencies, devDependencies}' package.json
    else
      cat package.json
    fi
  else
    echo "package.json not found"
  fi

  echo '```'

  # ===============================
  # MDX COMPONENTS CHECK
  # ===============================
  echo ""
  echo "## 🧩 MDX Components Check"

  if [ -f "$MDX_COMPONENTS_FILE" ]; then
    echo "✅ File found: \`$MDX_COMPONENTS_FILE\`"
    echo ""
    echo "**Purpose**"
    echo "- Central mapping for MDX rendering"
    echo "- Controls how headings, links, images, and code appear"
    echo "- Direct impact on SEO, accessibility, and content consistency"
    echo ""
    echo "**Review checklist**"
    echo "- [ ] Heading hierarchy is semantic (h1–h6)"
    echo "- [ ] External links handle target / rel correctly"
    echo "- [ ] No inline script or unsafe HTML"
    echo "- [ ] Compatible with App Router + MDX pipeline"
    echo ""
    echo "**Source snapshot**"
    echo '```typescript'
    cat "$MDX_COMPONENTS_FILE"
    echo '```'
  else
    echo "⚠️ mdx-components.tsx not found"
    echo "MDX rendering may rely on defaults or be incomplete"
  fi

  # ===============================
  # NEXT.JS CONFIG CHECK
  # ===============================
  echo ""
  echo "## ⚙️ Next.js Configuration Check"

  if [ -f "$NEXT_CONFIG_FILE" ]; then
    echo "✅ File found: \`$NEXT_CONFIG_FILE\`"
    echo ""
    echo "**Focus areas**"
    echo "- App Router / experimental flags"
    echo "- Image domains & remote patterns"
    echo "- MDX / compiler / transpilation rules"
    echo "- Output mode (standalone / server)"
    echo ""
    echo "**Source snapshot**"
    echo '```typescript'
    cat "$NEXT_CONFIG_FILE"
    echo '```'
  else
    echo "⚠️ next.config.ts not found"
    echo "Using default Next.js behavior"
  fi

  # ===============================
  # PRE-DEPLOY ANALYSIS
  # ===============================
  echo ""
  echo "## 📝 Pre-deploy Analysis"
  echo "________"

  if [ -f "$PRE_DEPLOY_REPORT" ]; then
    echo "🔍 Latest pre-deploy report detected"
    echo ""

    if grep -qi "READY FOR DEPLOY" "$PRE_DEPLOY_REPORT"; then
      echo "✅ Status: **READY FOR DEPLOY**"
    else
      echo "❌ Status: **FIX REQUIRED**"
    fi

    echo ""

    if grep -q "### 📊 Route Statistics" "$PRE_DEPLOY_REPORT"; then
      echo "### 📍 Production Route Map"
      echo '```text'
      sed -n '/### 📊 Route Statistics/,/---/p' "$PRE_DEPLOY_REPORT" \
        | grep -v "###" \
        | grep -v -- "---" \
        | sed '/^$/d'
      echo '```'
    fi

    echo ""
    echo "### ⚠️ Issues Highlight"

    ISSUES=$(grep -E -- "❌|⚠️|error|warning|failed" "$PRE_DEPLOY_REPORT")
    if [ -z "$ISSUES" ]; then
      echo "✅ No critical issues detected"
    else
      echo "$ISSUES"
    fi
  else
    echo "⚠️ pre-deploy-report.md not found"
    echo "Run pre-deploy-check.sh to generate it"
  fi

  # ===============================
  # FINAL STATUS
  # ===============================
  echo ""
  echo "---"
  echo "Status: Scan completed successfully."
  echo "Scope: Architecture • MDX • Next.js • Pre-deploy"
  echo "Target: Production readiness & AI context"

} > "$OUTPUT_FILE"

echo "✅ Scan completed → $OUTPUT_FILE"
echo "🌐 Context ready for → $SITE_URL"