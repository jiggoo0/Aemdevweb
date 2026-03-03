#!/bin/bash

# =====================================================================
# AI MASTER CONTROL SETUP (~/.gemini/)
# =====================================================================

MASTER_DIR="$HOME/.gemini"

echo "👑 [1/4] สร้างอาณาจักร Master Control ที่ $MASTER_DIR..."
mkdir -p "$MASTER_DIR/commands"
mkdir -p "$MASTER_DIR/config"
mkdir -p "$MASTER_DIR/directives"
mkdir -p "$MASTER_DIR/skills/next-best-practices"
mkdir -p "$MASTER_DIR/skills/react-best-practices"
mkdir -p "$MASTER_DIR/skills/composition-patterns"
mkdir -p "$MASTER_DIR/skills/tailwind-v4-guidelines"

echo "📜 [2/4] สร้างไฟล์ Directive เบื้องต้น..."
cat << 'EOF' > "$MASTER_DIR/directives/GLOBAL_MANIFESTO.md"
# 🌍 GLOBAL MANIFESTO (กฎหมายสูงสุดของ AI)
1. **Performance is King:** LCP < 2.5s, CLS < 0.1 เสมอ
2. **Type Safety:** Zero `any` policy ใช้ TypeScript และ Zod อย่างเคร่งครัด
3. **Simplicity:** เขียนโค้ดให้อ่านง่าย มนุษย์เข้าใจได้ ไม่ซับซ้อนเกินจำเป็น
EOF

echo "⚙️ [3/4] สร้าง Global Config..."
cat << 'EOF' > "$MASTER_DIR/config/ai-global-ignore.txt"
.git
node_modules
.next
dist
build
*.log
.env*
EOF

echo "🧠 [4/4] สร้างไฟล์ Skills Template เบื้องต้น..."
for skill in "next-best-practices" "react-best-practices" "composition-patterns" "tailwind-v4-guidelines"; do
    cat << EOF > "$MASTER_DIR/skills/$skill/SKILL.md"
# 🧠 SKILL: $skill
> อ้างอิงมาตรฐานการพัฒนาล่าสุดสำหรับ $skill
(เพิ่มเนื้อหาเชิงเทคนิคที่นี่)
EOF
done

echo "✅ [DONE] Master Control (~/.gemini/) ถูกสร้างและพร้อมใช้งาน!"
echo "🔗 อย่าลืมทำ Symlink ในโปรเจกต์ของคุณด้วยคำสั่ง: ln -s ~/.gemini/skills ./skills"