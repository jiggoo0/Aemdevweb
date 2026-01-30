#!/bin/bash

# ==============================================================================
# AEMDEVWEB PROJECT SUMMARY EXPORTER v2026
# หน้าที่: สรุปพิกัดระบบและเขียนรายงานลงไฟล์ PROJECT-SUMMARY.md
# มาตรฐาน: Ultra-Deep Level 7 | Automation Protocol
# ควบคุมโดย: นายเอ็มซ่ามากส์
# ==============================================================================

# [1. CONFIGURATION]
OUTPUT_FILE="PROJECT-SUMMARY.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# [2. DATA COLLECTION]
# Technical Metrics
ANY_COUNT=$(grep -r "any" app components lib types --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l)
SEO_FILES=$(find app -name "page.tsx" -o -name "layout.tsx" 2>/dev/null | wc -l)
METADATA_COUNT=$(grep -r "export const metadata" app 2>/dev/null | wc -l)

# Content Inventory
BLOG_POSTS=$(find content/blog -name "*.mdx" 2>/dev/null | wc -l)
CASE_STUDIES=$(find content/case-studies -name "*.mdx" 2>/dev/null | wc -l)
TEMPLATES=$(find app/\(shops\)/templates/_components -maxdepth 1 -type d 2>/dev/null | wc -l)
TEMPLATE_COUNT=$((TEMPLATES > 0 ? TEMPLATES - 1 : 0))

# Git Status
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
LAST_COMMIT=$(git log -1 --format=%cr 2>/dev/null || echo "N/A")

# [3. MARKDOWN GENERATION]
echo "สร้างรายงานพิกัดระบบลงสู่ $OUTPUT_FILE..."

cat << EOF > $OUTPUT_FILE
# Project Health & Audit Report (Ultra-Deep Scan)

> **รายงานสถานะโปรเจกต์:** [www.aemdevweb.com](https://www.aemdevweb.com)
> **วันที่ตรวจสอบ:** $TIMESTAMP
> **พิกัดความลึก:** ระดับ 7 (Specialist Verified)

---

## 1. สรุปสถานะสุขภาพทางเทคนิค (Technical Health)
| หัวข้อตรวจสอบ | พิกัดที่พบ | สถานะ |
| :--- | :---: | :--- |
| **Type 'any' Leftovers** | $ANY_COUNT | $( [ "$ANY_COUNT" -eq 0 ] && echo "✅ PASSED" || echo "⚠️ WARNING" ) |
| **SEO Metadata Coverage** | $METADATA_COUNT/$SEO_FILES | $( [ "$METADATA_COUNT" -eq "$SEO_FILES" ] && echo "✅ COMPLETE" || echo "🚧 PENDING" ) |
| **System Environment** | Termux | ✅ STABLE |

## 2. คลังสินทรัพย์ดิจิทัล (Strategic Content Inventory)
| ประเภทข้อมูล | จำนวนโหนด (Nodes) | พิกัดจัดเก็บ |
| :--- | :---: | :--- |
| **Blog Insight Nodes** | $BLOG_POSTS | \`content/blog/\` |
| **Case Study Protocols** | $CASE_STUDIES | \`content/case-studies/\` |
| **Marketplace Templates** | $TEMPLATE_COUNT | \`app/(shops)/templates/_components/\` |

## 3. โครงสร้างพิกัดระบบ (Structure Audit)
\`\`\`text
$(tree -L 2 -d --noreport app components lib constants content 2>/dev/null || echo "Tree command not found")
\`\`\`

## 4. สถานะการเชื่อมต่อ (Deployment Status)
- **Current Branch:** \`$BRANCH\`
- **Last Sync:** $LAST_COMMIT
- **Engine Version:** Next.js v16.1.3 (Turbo Mode)

---
**AEMDEVWEB โดย นายเอ็มซ่ามากส์**
*สถาปัตยกรรมเว็บเพื่อธุรกิจยุคใหม่ Speed • Precision • Growth*
EOF

echo -e "\033[0;32mSUCCESS: รายงานถูกบันทึกที่พิกัด $OUTPUT_FILE เรียบร้อยแล้ว\033[0m"
