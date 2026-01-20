#!/bin/bash
# 🚀 AEMDEVWEB Final Sanity Check

echo "🔍 Checking for uppercase folders in content/template..."
# ค้นหาโฟลเดอร์ที่มีตัวพิมพ์ใหญ่ใน content/template
uppercase_dirs=$(find content/template -maxdepth 2 -name "*[A-Z]*")

if [ -z "$uppercase_dirs" ]; then
    echo "✅ ทุกโฟลเดอร์เป็นตัวพิมพ์เล็ก (Lower Case) เรียบร้อย สบายใจได้ครับพี่!"
else
    echo "⚠️ พบโฟลเดอร์ที่มีตัวพิมพ์ใหญ่ (อาจทำให้เกิด 404):"
    echo "$uppercase_dirs"
    echo "💡 แนะนำให้เปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมดครับ"
fi

# ตรวจสอบการมีอยู่ของไฟล์สำคัญ
echo "📄 Checking essential files..."
[ -f "content/template/booking/hotel-resort/meta.json" ] && echo "✅ meta.json found" || echo "❌ meta.json missing in booking"
