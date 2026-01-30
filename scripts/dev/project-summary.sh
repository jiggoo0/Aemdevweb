#!/bin/bash

# ==============================================================================
# AEMDEVWEB ARCHITECT AUDIT SYSTEM v2026.S+ (Precision Edition)
# หน้าที่: ศูนย์บัญชาการตรวจสอบคุณภาพรหัส พร้อมระบบกรอง Inline Comments
# มาตรฐาน: Ultra-Deep Level 7 | Zero False-Positive Protocol
# ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
# ==============================================================================

# [0. INITIALIZATION & SAFETY]
set -o pipefail # ป้องกันการข้าม Error ใน Pipeline

# Safety Guard: ตรวจสอบพิกัดการทำงาน
if [ ! -d "app" ] || [ ! -f "package.json" ]; then
    echo -e "\033[0;31m❌ ERROR: กรุณารันสคริปต์จาก Root Folder ของโปรเจกต์เท่านั้น\033[0m"
    exit 1
fi

# Configuration
OUTPUT_FILE="PROJECT-SUMMARY.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
IMAGE_LIMIT="250k"
SCORE=100 # คะแนนตั้งต้นสำหรับการตัดเกรด

# [PRECISION FILTER]: กรองบรรทัดที่เป็นคอมเมนต์ หรือ Inline Disable ออกจากการนับพิกัด
# รองรับ //, *, {/* */}, และ eslint-disable
COMMENT_FILTER="//|\*|eslint-disable"

echo -e "\033[1;34m🚀 Starting Architect Audit (v2026.S+ Precision)...\033[0m"

# ==============================================================================
# [1. TYPE SAFETY AUDIT]
# ==============================================================================
echo "   - 🔍 Scanning Type Integrity (Ignoring Annotated Nodes)..."
ANY_DETAILS=$(grep -rnE ":\s*any\b|as\s+any\b|<\s*any\s*>" app components lib types \
    --include="*.ts" --include="*.tsx" \
    --exclude-dir={node_modules,.next,.git,out,build,.turbo} 2>/dev/null \
    | grep -vE "$COMMENT_FILTER")

ANY_COUNT=$(echo -n "$ANY_DETAILS" | grep -c '^' || true)

if [ "$ANY_COUNT" -gt 0 ]; then
    SCORE=$((SCORE - 15))
fi

# ==============================================================================
# [2. SEO COVERAGE AUDIT]
# ==============================================================================
echo "   - 🌍 Verifying SEO Matrix..."
ALL_PAGES=$(find app -name "page.tsx" -not -path "*/api/*" 2>/dev/null)
SEO_TOTAL=$(echo "$ALL_PAGES" | wc -l)
SEO_MISSING_LIST=""
SEO_FOUND_COUNT=0

for page in $ALL_PAGES; do
    if grep -qE "export\s+(const|async\s+function)\s+(metadata|generateMetadata)" "$page"; then
        ((SEO_FOUND_COUNT++))
    else
        SEO_MISSING_LIST+="$page\n"
    fi
done

if [ "$SEO_FOUND_COUNT" -lt "$SEO_TOTAL" ]; then
    SCORE=$((SCORE - 10))
fi

# ==============================================================================
# [3. PERFORMANCE & ASSETS AUDIT]
# ==============================================================================
echo "   - ⚡ Auditing Core Web Vitals Factors..."
LARGE_IMAGES=$(find public/images -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.png" \) -size +$IMAGE_LIMIT 2>/dev/null)
LARGE_IMAGES_COUNT=$(echo -n "$LARGE_IMAGES" | grep -c '^' || true)

if [ "$LARGE_IMAGES_COUNT" -gt 0 ]; then
    SCORE=$((SCORE - 5))
fi

# ==============================================================================
# [4. INTEGRITY & LINKS AUDIT]
# ==============================================================================
echo "   - 🔗 Checking Link Topology (Ignoring Annotated Links)..."
# กรองบรรทัด localhost
LOCALHOST_DETAILS=$(grep -rn "localhost:" app components lib --include="*.tsx" --include="*.ts" 2>/dev/null \
    | grep -vE "$COMMENT_FILTER")
LOCALHOST_COUNT=$(echo -n "$LOCALHOST_DETAILS" | grep -c '^' || true)

# กรองบรรทัด Placeholder Hrefs
TODO_DETAILS=$(grep -rn 'href="#"' app components --include="*.tsx" 2>/dev/null \
    | grep -vE "$COMMENT_FILTER")
TODO_COUNT=$(echo -n "$TODO_DETAILS" | grep -c '^' || true)

TOTAL_LINK_ISSUES=$((LOCALHOST_COUNT + TODO_COUNT))

if [ "$TOTAL_LINK_ISSUES" -gt 0 ]; then
    SCORE=$((SCORE - 5))
fi

# ==============================================================================
# [5. STRATEGIC METRICS]
# ==============================================================================
BLOG_POSTS=$(find content/blog -name "*.mdx" 2>/dev/null | wc -l)
CASE_STUDIES=$(find content/case-studies -name "*.mdx" 2>/dev/null | wc -l)
TEMPLATES=$(find app/\(shops\)/templates/_components -maxdepth 1 -type d 2>/dev/null | wc -l)
TEMPLATE_COUNT=$((TEMPLATES > 0 ? TEMPLATES - 1 : 0))

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
LAST_COMMIT=$(git log -1 --format="%cd (%cr)" --date=short 2>/dev/null || echo "N/A")

# ==============================================================================
# [6. REPORT GENERATION]
# ==============================================================================
echo "📝 Generating Architect Report..."

# เกรดดิ้งยุทธศาสตร์
GRADE="F"
if [ "$SCORE" -eq 100 ]; then GRADE="S (Perfect)";
elif [ "$SCORE" -ge 90 ]; then GRADE="A (Excellent)";
elif [ "$SCORE" -ge 80 ]; then GRADE="B (Good)";
elif [ "$SCORE" -ge 70 ]; then GRADE="C (Fair)";
else GRADE="D (Needs Improvement)";
fi

cat << EOF > $OUTPUT_FILE
# Project Health & Action Report (Architect Edition)

> **Domain:** [www.aemdevweb.com](https://www.aemdevweb.com)
> **Timestamp:** $TIMESTAMP
> **System Grade:** **$GRADE** ($SCORE/100)

---

## 1. Executive Summary
| Checkpoint | Metrics | Status | Impact |
| :--- | :---: | :---: | :---: |
| **Type Safety** | $ANY_COUNT Leaks | $( [ "$ANY_COUNT" -eq 0 ] && echo "✅ PASSED" || echo "⚠️ CRITICAL" ) | High |
| **SEO Coverage** | $SEO_FOUND_COUNT/$SEO_TOTAL | $( [ "$SEO_FOUND_COUNT" -eq "$SEO_TOTAL" ] && echo "✅ PASSED" || echo "🚧 PENDING" ) | High |
| **Performance (Img)** | $LARGE_IMAGES_COUNT Files | $( [ "$LARGE_IMAGES_COUNT" -eq 0 ] && echo "✅ PASSED" || echo "⚠️ WARNING" ) | Medium |
| **Link Integrity** | $TOTAL_LINK_ISSUES Issues | $( [ "$TOTAL_LINK_ISSUES" -eq 0 ] && echo "✅ PASSED" || echo "🚧 FIX REQ" ) | Medium |

---

## 2. 🛠️ Action Items: Priority Fix List

$(if [ "$ANY_COUNT" -gt 0 ]; then
    echo "### 🔴 A. Type Safety Violations (Must Fix)"
    echo "\`\`\`typescript"
    echo "$ANY_DETAILS"
    echo "\`\`\`"
fi)

$(if [ -n "$SEO_MISSING_LIST" ]; then
    echo "### 🟠 B. Missing SEO Metadata"
    echo "\`\`\`text"
    echo -e "$SEO_MISSING_LIST"
    echo "\`\`\`"
fi)

$(if [ "$LARGE_IMAGES_COUNT" -gt 0 ]; then
    echo "### 🟡 C. Heavy Images (Over $IMAGE_LIMIT)"
    echo "\`\`\`text"
    echo "$LARGE_IMAGES"
    echo "\`\`\`"
fi)

$(if [ "$TOTAL_LINK_ISSUES" -gt 0 ]; then
    echo "### 🔵 D. Link Integrity Issues"
    echo "\`\`\`text"
    echo "$LOCALHOST_DETAILS"
    echo "$TODO_DETAILS"
    echo "\`\`\`"
fi)

$(if [ "$SCORE" -eq 100 ]; then
    echo "### 🏆 All Systems Nominal"
    echo "Architecture is stable, strict, and performant. Ready for production release."
fi)

---

## 3. System Architecture & Assets
- **Knowledge Base:** $BLOG_POSTS Nodes
- **Case Studies:** $CASE_STUDIES Protocols
- **Marketplace:** $TEMPLATE_COUNT Templates
- **Version Control:** \`$BRANCH\` | Last Update: $LAST_COMMIT

### Directory Tree (Depth 3)
\`\`\`text
$(if command -v tree > /dev/null; then
    tree -L 3 -I 'node_modules|.next|cache|pnpm-lock.yaml|.git|.turbo' --noreport app components lib constants content
else
    find app components lib constants content -maxdepth 3 -not -path '*/.*' | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"
fi)
\`\`\`

---
**AEMDEVWEB Automated Architect**
*Quality Gate: Level 7 Verified*
EOF

echo -e "\033[0;32mSUCCESS: Report generated at $OUTPUT_FILE (Score: $SCORE/100)\033[0m"
