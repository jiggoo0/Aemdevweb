#!/bin/bash
# ใช้ cwebp ในการแปลงรูปภาพเพื่อลดขนาดไฟล์ 70-80%
find public/images -name "*.jpg" -o -name "*.png" | while read img; do
  cwebp -q 80 "$img" -o "${img%.*}.webp"
  rm "$img" # ลบต้นฉบับทิ้งเพื่อประหยัดพื้นที่ 73G ของคุณ
done
echo "--- ASSETS OPTIMIZED ---"
