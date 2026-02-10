#!/bin/bash

# ==========================================
# Project Overview Generator v2.3
# Specialist Version for AEMDEVWEB
# ==========================================

OUTPUT_FILE="README.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# 1. Initialize Metadata
cat <<EOF > $OUTPUT_FILE
---
domain: aemdevweb.com
status: strictly-enforced
last_audit: $TIMESTAMP
---

# SYSTEM ARCHITECTURE & DATA SCHEMAS

EOF

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

echo "AUDIT COMPLETED: $OUTPUT_FILE GENERATED."
