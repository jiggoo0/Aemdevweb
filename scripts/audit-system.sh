#!/bin/bash

# [CONFIG]: ชื่อไฟล์รายงานผลลัพธ์
REPORT="system_audit_result.md"

echo "# 🔍 AEMDEVWEB MASTER AUDIT REPORT" > $REPORT
echo "Generated: $(date)" >> $REPORT
echo "Environment: Next.js v15+ (App Router)" >> $REPORT
echo "------------------------------------------------" >> $REPORT

echo "## 🎨 1. THEME & COLOR ARCHITECTURE" >> $REPORT
echo "### 1.1 Tailwind Config (Theme Mapping)" >> $REPORT
echo '```ts' >> $REPORT
cat tailwind.config.ts >> $REPORT 2>/dev/null || echo "❌ tailwind.config.ts not found" >> $REPORT
echo '```' >> $REPORT

echo "### 1.2 CSS Variables (Root Definition)" >> $REPORT
echo '```css' >> $REPORT
cat app/globals.css >> $REPORT 2>/dev/null || echo "❌ globals.css not found" >> $REPORT
echo '```' >> $REPORT

echo "### 1.3 LayoutEngine (Injection Logic)" >> $REPORT
echo '```tsx' >> $REPORT
cat components/templates/sections/LayoutEngine.tsx >> $REPORT 2>/dev/null || echo "❌ LayoutEngine.tsx not found" >> $REPORT
echo '```' >> $REPORT

echo "" >> $REPORT
echo "## 🏛️ 2. SERVICE NODES (Template & Theme Config)" >> $REPORT
SERVICES=("seo-agency" "corporate" "catalog" "salepage" "hotel-resort")
for service in "${SERVICES[@]}"; do
    echo "### NODE: $service" >> $REPORT
    echo '```ts' >> $REPORT
    cat "constants/services/$service.ts" >> $REPORT 2>/dev/null || echo "❌ $service.ts not found" >> $REPORT
    echo '```' >> $REPORT
done

echo "" >> $REPORT
echo "## 📍 3. AREA & PROVINCIAL MAPPING (Dynamic Routes)" >> $REPORT
echo "### 3.1 Slug Page Logic ([slug]/page.tsx)" >> $REPORT
echo '```tsx' >> $REPORT
cat "app/(business)/areas/[slug]/page.tsx" >> $REPORT 2>/dev/null || echo "❌ Area page.tsx not found" >> $REPORT
echo '```' >> $REPORT

echo "### 3.2 Template Renderer (The Decision Maker)" >> $REPORT
echo '```tsx' >> $REPORT
cat "components/templates/TemplateRenderer.tsx" >> $REPORT 2>/dev/null || echo "❌ TemplateRenderer.tsx not found" >> $REPORT
echo '```' >> $REPORT

echo "### 3.3 Area Registry Index" >> $REPORT
echo '```ts' >> $REPORT
cat "constants/area-nodes/index.ts" >> $REPORT 2>/dev/null || echo "❌ Area index.ts not found" >> $REPORT
echo '```' >> $REPORT

echo "### 3.4 Provincial Data Example (Tak Node)" >> $REPORT
echo '```ts' >> $REPORT
cat "constants/area-nodes/tak.ts" >> $REPORT 2>/dev/null || echo "❌ tak.ts not found" >> $REPORT
echo '```' >> $REPORT

echo "" >> $REPORT
echo "## 🛠️ 4. SYSTEM VARIABLES & DEPENDENCIES" >> $REPORT
echo '```json' >> $REPORT
grep -E "\"next\":|\"tailwindcss\":|\"framer-motion\":" package.json >> $REPORT
echo '```' >> $REPORT

echo "------------------------------------------------" >> $REPORT
echo "✅ Audit Complete! Please send '$REPORT' to AI Specialist."
