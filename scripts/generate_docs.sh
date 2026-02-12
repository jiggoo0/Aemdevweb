#!/bin/bash

# ==========================================
# Project Overview Generator v2.5
# ==========================================

OUTPUT_FILE="README.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# ตรวจสอบ Argument: ถ้าใส่ --no-config จะไม่ดึงข้อมูลใน config/
SKIP_CONFIG=false
if [[ "$1" == "--no-config" ]]; then
    SKIP_CONFIG=true
fi

# 1. Initialize Metadata
cat <<EOF > $OUTPUT_FILE
---
domain: aemdevweb.com
status: strictly-enforced
last_audit: $TIMESTAMP
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

EOF

if [ "$SKIP_CONFIG" = false ]; then
    # 2. System Mandate Injection
    if [ -f "config/00-SYSTEM-MANDATE.md" ]; then
        echo "## SYSTEM MANDATE" >> $OUTPUT_FILE
        cat "config/00-SYSTEM-MANDATE.md" >> $OUTPUT_FILE
    else
        echo "> [ERROR] MISSION CRITICAL: 00-SYSTEM-MANDATE.md MISSING" >> $OUTPUT_FILE
    fi
    echo -e "\n---\n" >> $OUTPUT_FILE

    # 3. AI Prompt Extension Injection 
    if [ -f "config/01-SYSTEM-PROMPT-EXTENSION.md" ]; then
        echo "## SYSTEM PROMPT EXTENSION" >> $OUTPUT_FILE
        cat "config/01-SYSTEM-PROMPT-EXTENSION.md" >> $OUTPUT_FILE
    else
        echo "> [WARNING] SYSTEM PROMPT EXTENSION MISSING" >> $OUTPUT_FILE
    fi
    echo -e "\n---\n" >> $OUTPUT_FILE
else
    echo "> [INFO] Config injection skipped by user." >> $OUTPUT_FILE
    echo -e "\n---\n" >> $OUTPUT_FILE
fi

# 4. Core Types Definition
echo "## TECHNICAL DATA SCHEMAS (TYPES)" >> $OUTPUT_FILE
if [ -d "types" ]; then
    for file in types/*.ts; do
        if [ -f "$file" ]; then
            echo "### MODULE: $(basename "$file")" >> $OUTPUT_FILE
            echo '```typescript' >> $OUTPUT_FILE
            cat "$file" >> $OUTPUT_FILE
            echo -e '\n```' >> $OUTPUT_FILE
        fi
    done
fi
echo -e "\n---\n" >> $OUTPUT_FILE

# 5. Constants & Configuration Registry
echo "## CONSTANTS REGISTRY" >> $OUTPUT_FILE
if [ -d "constants" ]; then
    for file in constants/*.ts; do
        if [ -f "$file" ] && [[ "$file" != *"index.ts"* ]]; then
            echo "### CONFIG: $(basename "$file")" >> $OUTPUT_FILE
            echo '```typescript' >> $OUTPUT_FILE
            cat "$file" >> $OUTPUT_FILE
            echo -e '\n```' >> $OUTPUT_FILE
        fi
    done
fi
echo -e "\n---\n" >> $OUTPUT_FILE

# 6. Infrastructure Tree
echo "## DIRECTORY INFRASTRUCTURE" >> $OUTPUT_FILE
echo '```text' >> $OUTPUT_FILE
tree -L 10 -h -D --timefmt "%Y-%m-%d %H:%M" \
    -I "node_modules|.git|.next|*.webp|*.png|*.jpg|*.jpeg|*.svg|*.ico|*.gif" \
    >> $OUTPUT_FILE
echo '```' >> $OUTPUT_FILE
echo -e "\n---\n" >> $OUTPUT_FILE

# 7. Build Artifact Analysis (Static Files)
echo "## BUILD ARTIFACT ANALYSIS (.next/static)" >> $OUTPUT_FILE
if [ -d ".next/static" ]; then
    echo '```text' >> $OUTPUT_FILE
    du -sh .next/static >> $OUTPUT_FILE
    find .next/static -type f -exec du -h {} + | sort -rh | head -n 10 >> $OUTPUT_FILE
    echo '```' >> $OUTPUT_FILE
else
    echo "> [INFO] .next/static directory not found. Skipping analysis." >> $OUTPUT_FILE
fi

echo "AUDIT COMPLETED: $OUTPUT_FILE GENERATED."
