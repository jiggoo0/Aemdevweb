#!/bin/bash

# ==============================================================================
# [SYSTEM]: AEM DOCS GENERATOR v3.0 (ULTIMATE)
# [STRATEGY]: Single I/O Block | Recursive Scanning | Full Coverage
# ==============================================================================

OUTPUT_FILE="README.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# ตรวจสอบ Argument: --no-config
SKIP_CONFIG=false
if [[ "$1" == "--no-config" ]]; then
    SKIP_CONFIG=true
fi

echo "> 🚀 Starting Documentation Generation..."

# เริ่มเขียนเนื้อหาทั้งหมดลงไฟล์ในคำสั่งเดียว (Performance Optimization)
{
    # ---------------------------------------------------------
    # 1. HEADER & METADATA
    # ---------------------------------------------------------
    echo "---"
    echo "domain: aemdevweb.com"
    echo "status: strictly-enforced"
    echo "last_audit: $TIMESTAMP"
    echo "generated_by: generate_docs.sh v3.0"
    echo "---"
    echo ""
    echo "# SYSTEM ARCHITECTURE & DATA SCHEMAS"
    echo ""

    # ---------------------------------------------------------
    # 2. SYSTEM CONFIGURATION (Optional)
    # ---------------------------------------------------------
    if [ "$SKIP_CONFIG" = false ]; then
        if [ -f "config/00-SYSTEM-MANDATE.md" ]; then
            echo "## SYSTEM MANDATE"
            cat "config/00-SYSTEM-MANDATE.md"
            echo -e "\n---\n"
        fi

        if [ -f "config/01-SYSTEM-PROMPT-EXTENSION.md" ]; then
            echo "## SYSTEM PROMPT EXTENSION"
            cat "config/01-SYSTEM-PROMPT-EXTENSION.md"
            echo -e "\n---\n"
        fi
    else
        echo "> [INFO] Configuration sections skipped by user flag."
        echo -e "\n---\n"
    fi

    # ---------------------------------------------------------
    # 3. TYPE DEFINITIONS (Recursive Scan)
    # ---------------------------------------------------------
    echo "## TECHNICAL DATA SCHEMAS (TYPES)"
    if [ -d "types" ]; then
        # ใช้ find เพื่อหาไฟล์ทั้งหมดรวมถึงใน sub-folder
        find types -type f -name "*.ts" | sort | while read -r file; do
            echo "### MODULE: $(basename "$file")"
            echo "\`Path: $file\`"
            echo '```typescript'
            cat "$file"
            echo -e '\n```'
        done
    else
        echo "> [WARN] 'types' directory not found."
    fi
    echo -e "\n---\n"

    # ---------------------------------------------------------
    # 4. CONSTANTS REGISTRY (Recursive Scan)
    # ---------------------------------------------------------
    echo "## CONSTANTS REGISTRY"
    if [ -d "constants" ]; then
        # ค้นหาไฟล์ .ts ทั้งหมด ยกเว้น index.ts และไฟล์ใน node_modules (ถ้ามีหลุดมา)
        find constants -type f -name "*.ts" -not -name "index.ts" | sort | while read -r file; do
            echo "### CONFIG: $(basename "$file")"
            echo "\`Path: $file\`"
            echo '```typescript'
            cat "$file"
            echo -e '\n```'
        done
    else
        echo "> [WARN] 'constants' directory not found."
    fi
    echo -e "\n---\n"

    # ---------------------------------------------------------
    # 5. INFRASTRUCTURE TREE
    # ---------------------------------------------------------
    echo "## DIRECTORY INFRASTRUCTURE"
    echo '```text'
    if command -v tree &> /dev/null; then
        tree -L 10 -h -D --timefmt "%Y-%m-%d %H:%M" \
            -I "node_modules|.git|.next|*.webp|*.png|*.jpg|*.jpeg|*.svg|*.ico|*.gif|*.DS_Store"
    else
        echo "> [ERROR] 'tree' command not found. Please install it (pkg install tree)."
        # Fallback: ใช้ find แบบง่ายๆ
        find . -maxdepth 3 -not -path '*/.*'
    fi
    echo '```'
    echo -e "\n---\n"

    # ---------------------------------------------------------
    # 6. BUILD ARTIFACTS ANALYSIS
    # ---------------------------------------------------------
    echo "## BUILD ARTIFACT ANALYSIS (.next/static)"
    if [ -d ".next/static" ]; then
        echo '```text'
        echo "Total Size:"
        du -sh .next/static 2>/dev/null
        echo ""
        echo "Top 10 Largest Assets:"
        find .next/static -type f -exec du -h {} + 2>/dev/null | sort -rh | head -n 10
        echo '```'
    else
        echo "> [INFO] Build artifacts not found. Run 'pnpm build' to generate stats."
    fi

} > "$OUTPUT_FILE"

echo "✅ AUDIT COMPLETED: $OUTPUT_FILE has been generated."
