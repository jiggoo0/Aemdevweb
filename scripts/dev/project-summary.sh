#!/bin/bash

# ==============================================================================
# AEMDEVWEB ULTRA-DEEP AUDIT & SUMMARY EXPORTER v2026
# หน้าที่: สรุปพิกัดระบบ, ตรวจสุขภาพไฟล์ภาพ, ตรวจสอบพิกัดลิงก์ และแผนผังโหนด
# มาตรฐาน: Ultra-Deep Level 7 | Professional Formatting (No Emoji)
# ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
# ==============================================================================

# [1. CONFIGURATION]
OUTPUT_FILE="PROJECT-SUMMARY.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
IMAGE_LIMIT="250k" 

# [2. DATA COLLECTION: TECHNICAL METRICS]
ANY_COUNT=$(grep -r "any" app components lib types --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l)
SEO_FILES=$(find app -name "page.tsx" -o -name "layout.tsx" 2>/dev/null | wc -l)
METADATA_COUNT=$(grep -r "export const metadata" app 2>/dev/null | wc -l)

# [3. DATA COLLECTION: IMAGE AUDIT]
LARGE_IMAGES=$(find public/images -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.png" \) -size +$IMAGE_LIMIT 2>/dev/null)
LARGE_IMAGES_COUNT=$(echo "$LARGE_IMAGES" | grep -v '^$' | wc -l)

# [4. DATA COLLECTION: LINK INTEGRITY]
LOCALHOST_LINKS=$(grep -r "localhost:" app content components 2>/dev/null | wc -l)
TODO_LINKS=$(grep -r "href=\"#\"" app components 2>/dev/null | wc -l)

# [5. CONTENT INVENTORY]
BLOG_POSTS=$(find content/blog -name "*.mdx" 2>/dev/null | wc -l)
CASE_STUDIES=$(find content/case-studies -name "*.mdx" 2>/dev/null | wc -l)
TEMPLATES=$(find app/\(shops\)/templates/_components -maxdepth 1 -type d 2>/dev/null | wc -l)
TEMPLATE_COUNT=$((TEMPLATES > 0 ? TEMPLATES - 1 : 0))

# [6. GIT STATUS]
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
LAST_COMMIT=$(git log -1 --format=%cr 2>/dev/null || echo "N/A")

# [7. MARKDOWN GENERATION]
echo "กำลังวิเคราะห์พิกัดระบบและสร้างรายงาน (Text Mode) ลงสู่ $OUTPUT_FILE..."

cat << EOF > $OUTPUT_FILE
# Project Health & Audit Report (Ultra-Deep Scan)

> **Project Domain:** [www.aemdevweb.com](https://www.aemdevweb.com)
> **Audit Timestamp:** $TIMESTAMP
> **Depth Level:** Level 7 (Specialist Verified)

---

## 1. Technical Health Summary
| Checkpoint | Metrics | Status |
| :--- | :---: | :--- |
| **Type 'any' Leftovers** | $ANY_COUNT | $( [ "$ANY_COUNT" -eq 0 ] && echo "PASSED" || echo "WARNING" ) |
| **SEO Metadata Coverage** | $METADATA_COUNT/$SEO_FILES | $( [ "$METADATA_COUNT" -eq "$SEO_FILES" ] && echo "COMPLETE" || echo "PENDING" ) |
| **Large Images (>$IMAGE_LIMIT)** | $LARGE_IMAGES_COUNT | $( [ "$LARGE_IMAGES_COUNT" -eq 0 ] && echo "OPTIMIZED" || echo "OPTIMIZE REQUIRED" ) |
| **Localhost/Placeholder Links** | $((LOCALHOST_LINKS + TODO_LINKS)) | $( [ $((LOCALHOST_LINKS + TODO_LINKS)) -eq 0 ] && echo "CLEAN" || echo "FIX REQUIRED" ) |

---

## 2. Deep Image Audit Report
*Goal: LCP < 0.8s | Max File Size: $IMAGE_LIMIT*

$( if [ "$LARGE_IMAGES_COUNT" -gt 0 ]; then
    echo "### WARNING: Images requiring compression:"
    echo "\`\`\`text"
    echo "$LARGE_IMAGES"
    echo "\`\`\`"
else
    echo "STATUS: ALL IMAGES OPTIMIZED. No files exceed the $IMAGE_LIMIT threshold."
fi )

---

## 3. Link Integrity Analysis
- **Localhost Connections:** $LOCALHOST_LINKS (Should be updated to Production URL)
- **Placeholder Hrefs (#):** $TODO_LINKS (Nodes awaiting actual links)

---

## 4. Strategic Content Inventory
| Data Type | Nodes | Storage Path |
| :--- | :---: | :--- |
| **Blog Insight Nodes** | $BLOG_POSTS | \`content/blog/\` |
| **Case Study Protocols** | $CASE_STUDIES | \`content/case-studies/\` |
| **Marketplace Templates** | $TEMPLATE_COUNT | \`app/(shops)/templates/_components/\` |

---

## 5. Ultra-Deep Tree Structure
\`\`\`text
$(tree -L 4 -I 'node_modules|.next|cache|pnpm-lock.yaml' --noreport app components lib constants content 2>/dev/null || echo "Tree command not found")
\`\`\`

---

## 6. Deployment Status
- **Current Branch:** \`$BRANCH\`
- **Last Sync:** $LAST_COMMIT
- **Engine Version:** Next.js v16.1.3 (Turbo Mode)
- **Environment:** Termux (Android Subsystem)

---
**AEMDEVWEB by นายเอ็มซ่ามากส์**
*High-Performance Web Architecture: Speed, Precision, Growth*
EOF

echo -e "\033[0;32mSUCCESS: รายงาน (No-Emoji Mode) ถูกบันทึกที่ $OUTPUT_FILE เรียบร้อยแล้ว\033[0m"
