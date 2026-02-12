FILES=(
  "components/features/landing/Hero.tsx"
  "components/features/landing/PricingSection.tsx"
  "components/layout/Footer.tsx"
  "components/layout/Navbar.tsx"
  "components/shared/ConversionCTA.tsx"
  "components/templates/sections/HeroEngine.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    # ลบบรรทัด import type { Route } ที่อยู่ผิดที่ออกก่อน
    sed -i '/import type { Route } from "next";/d' "$file"
    # แทรกเข้าไปใหม่หลังบรรทัด "use client"; หรือบรรทัดแรกถ้าไม่มี
    if grep -q '"use client";' "$file"; then
      sed -i '/"use client";/a import type { Route } from "next";' "$file"
    else
      sed -i '1i import type { Route } from "next";' "$file"
    fi
    echo "Fixed Docblock for: $file"
  fi
done
