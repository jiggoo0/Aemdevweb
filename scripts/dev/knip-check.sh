#!/bin/bash

# [DNA MANDATE]: Knip Analysis for ARM/Termux
# -------------------------------------------------------------------------

echo "🔍 [KNIP] Starting project analysis..."

# 1. จัดการ Memory Limit สำหรับ Node.js เพื่อป้องกัน OOM ใน Termux
export NODE_OPTIONS="--max-old-space-size=1024"

# 2. รัน Knip พร้อมเปิดใช้งาน Cache เพื่อความเร็วในการรันครั้งถัดไป
# --no-exit-code: เพื่อให้ script รันต่อจนจบแม้จะเจอ unused files
# --reporter-options '{"compact": true}': แสดงผลแบบสรุป ประหยัดหน้าจอ
pnpm knip \
  --cache \
  --no-exit-code \
  --reporter-options '{"compact": true}'

echo "------------------------------------------------"
echo "✅ [KNIP] Analysis complete."
