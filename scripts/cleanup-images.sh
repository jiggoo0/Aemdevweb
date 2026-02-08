#!/bin/bash

# [SHELL INFRASTRUCTURE]: UNUSED_ASSETS_CLEANUP v1.2
# [STRATEGY]: Grep-based Discovery | Safe Migration
# [MAINTAINER]: AEMDEVWEB Specialist Team

SOURCE_DIRS="app components constants content lib"
PUBLIC_DIR="public"
BACKUP_DIR="unused_assets_backup"
EXTENSIONS="webp|png|jpg|jpeg|svg|ico"

echo "🚀 เริ่มต้นการตรวจสอบ Assets ที่ไม่ได้ใช้งาน..."

# 1. สร้างโฟลเดอร์สำรอง
mkdir -p "$BACKUP_DIR"

# 2. ค้นหารูปภาพทั้งหมดใน public
# ใช้ find เพื่อลิสต์ไฟล์ตามนามสกุลที่ระบุ
find "$PUBLIC_DIR" -type f -regextype posix-extended -regex ".*\.($EXTENSIONS)" | while read -r img_path; do
    
    # ดึงเฉพาะชื่อไฟล์ออกมา (เช่น logo.webp)
    filename=$(basename "$img_path")
    
    # 3. ตรวจสอบว่าชื่อไฟล์นี้ปรากฏอยู่ใน Source Code หรือไม่
    # -r: recursive, -q: quiet (เจอแล้วหยุด), -E: regex
    if grep -rq "$filename" $SOURCE_DIRS; then
        # เจอไฟล์ใน Code (ใช้งานอยู่)
        continue
    else
        # ไม่เจอไฟล์ใน Code (ไม่ได้ใช้งาน)
        echo "🚫 พบไฟล์ไม่ได้ใช้: $img_path"
        
        # รักษาสถาปัตยกรรมโฟลเดอร์เดิมไว้ใน backup
        rel_dir=$(dirname "${img_path#$PUBLIC_DIR/}")
        mkdir -p "$BACKUP_DIR/$rel_dir"
        
        # ย้ายไฟล์
        mv "$img_path" "$BACKUP_DIR/$rel_dir/"
    fi
done

echo "---------------------------------------"
echo "✅ ตรวจสอบเสร็จสิ้น!"
echo "📂 ไฟล์ที่ไม่ได้ใช้ถูกย้ายไปที่: ./$BACKUP_DIR"
