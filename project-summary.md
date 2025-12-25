# 📑 Project Summary Report

_Generated on Thu Dec 25 02:24:16 +07 2025_

## ⚙️ Environment Variables

> Loaded from .env (sensitive values masked)

- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `***`
- `POSTGRES_PASSWORD` = `***`
- `POSTGRES_PRISMA_URL` = `***`
- `POSTGRES_URL` = `***`
- `POSTGRES_URL_NON_POOLING` = `***`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `***`
- `SUPABASE_JWT_SECRET` = `***`
- `SUPABASE_SERVICE_ROLE_KEY` = `***`

## 📁 Folder Structure (Depth ≤ 4)

### app

app
├── (main)
│   ├── about
│   │   └── page.tsx
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── catalog
│   │   └── page.tsx
│   ├── contact
│   │   ├── \_components
│   │   │   └── ContactMap.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── services
│   ├── ServicesPageClient.tsx
│   └── page.tsx
├── (marketing)
│   └── [template_id]
│   ├── \_config
│   │   └── registry.ts
│   ├── \_templates
│   │   ├── cafe
│   │   ├── clinic
│   │   ├── construction
│   │   ├── realestate
│   │   └── starter
│   ├── layout.tsx
│   └── page.tsx
├── api
│   └── contact
│   └── route.ts
├── favicon.ico
├── globals.css
├── layout.tsx
├── robots.txt
└── sitemap.ts

20 directories, 20 files

#### Metadata (file | size | sha1)

- app/layout.tsx | 2493b | sha1:45799c6f4315db3159e124e3ccdb6f154c6c161c
- app/(marketing)/[template_id]/\_templates/cafe/CafeTemplate.tsx | 6237b | sha1:2f2b66819044bcd7aadee47ee2405db879d43ee8
- app/(marketing)/[template_id]/\_templates/cafe/CafeStyle.module.css | 2685b | sha1:59c1d7b95a786f96cc9b1ee3b39d56b600a22dce
- app/(marketing)/[template_id]/\_templates/cafe/config.ts | 3888b | sha1:3c27d5c7f3efbdfd2f624a5c013811d5e2ca2e43
- app/(marketing)/[template_id]/\_templates/realestate/RealEstateTemplate.tsx | 6502b | sha1:ea55273770f57e6d0fb91c6c5e141520c765bdb9
- app/(marketing)/[template_id]/\_templates/realestate/RealEstateStyle.module.css | 1648b | sha1:a19e6b481f1e018ab95e4579b8d41ca6aeacac26
- app/(marketing)/[template_id]/\_templates/realestate/config.ts | 3821b | sha1:6746b5cb4645177855f4be704c12fb453579088a
- app/(marketing)/[template_id]/\_templates/construction/ConstructionTemplate.tsx | 5953b | sha1:82886920d7c461e153667a9a2c4f9dbf774c5f3f
- app/(marketing)/[template_id]/\_templates/construction/ConstructionStyle.module.css | 1408b | sha1:7dd705a5b5f8fc7aa29199c560bfb0a303ecb048
- app/(marketing)/[template_id]/\_templates/construction/config.ts | 4717b | sha1:4703dceebd1d43c0edbef14084c58f408eadc07b
- app/(marketing)/[template_id]/\_templates/starter/StarterTemplate.tsx | 5229b | sha1:0bd598357d832cce368dac409052e60fd28e08c5
- app/(marketing)/[template_id]/\_templates/starter/StarterStyle.module.css | 1354b | sha1:6af406ddfb8b4dd4e124a769b9f1649689f351ce
- app/(marketing)/[template_id]/\_templates/starter/config.ts | 3071b | sha1:18f0dcb8327d5ebe5ca57afcf8242e4610fab9db
- app/(marketing)/[template_id]/\_templates/clinic/ClinicTemplate.tsx | 5187b | sha1:75e99225e778900839b5c115d775602359e7133d
- app/(marketing)/[template_id]/\_templates/clinic/ClinicStyle.module.css | 1271b | sha1:afdd35936311d240f32f9396037558602d3c106e
- app/(marketing)/[template_id]/\_templates/clinic/config.ts | 3407b | sha1:ca862af4bc6649d990b5d60c6d1bf795d85cd9b3
- app/(marketing)/[template_id]/page.tsx | 1311b | sha1:357f2f143693c7cd788919151124e1628123b91f
- app/(marketing)/[template_id]/layout.tsx | 2476b | sha1:1dbff05e6ad2ec985b93dac711522f52c564b3ff
- app/(marketing)/[template_id]/\_config/registry.ts | 1067b | sha1:935f377fa03f7ca7fca36f91caf4971301712630
- app/globals.css | 2818b | sha1:814b39f421df1fb728e642754c6923acded44f66
- app/api/contact/route.ts | 2313b | sha1:ad7395a8f89f2a2f55ebb119f618393bf8d024a6
- app/(main)/about/page.tsx | 7934b | sha1:28d86b70f69d17c0fa0ba8bb7bb78e296e5609c0
- app/(main)/blog/[slug]/page.tsx | 2081b | sha1:c1ccb40218f738a637232c8c6337a39b68c59b7b
- app/(main)/blog/page.tsx | 1296b | sha1:0efca4b2f04e87e131cb6862bbc505f4a3e844a0
- app/(main)/blog/loading.tsx | 459b | sha1:edf5c3e19911cb871aac40c32868ec31d20ab31e
- app/(main)/catalog/page.tsx | 4228b | sha1:ca1e7882feb854352f99ca7a66c24f60fb6f34bb
- app/(main)/contact/page.tsx | 9591b | sha1:335d5a1051f95d943bf714b303983ea48732007d
- app/(main)/contact/\_components/ContactMap.tsx | 7467b | sha1:0b28b0ad50ace1787356d28629594a5a3fa3851f
- app/(main)/services/page.tsx | 368b | sha1:e93753e1a9cf208d15bbf12b80cfd994bd53750e
- app/(main)/services/ServicesPageClient.tsx | 677b | sha1:0cc47835d114b62a0bc2ff2d52951e80d3176395
- app/(main)/page.tsx | 4887b | sha1:79b2f3bc23219f1bfe6ac23b77be9e2837c1d209
- app/(main)/layout.tsx | 1632b | sha1:865cd7f1377159df46b15410df81961b94ecbbf6
- app/sitemap.ts | 2504b | sha1:61d3ddb3b3490292061f549c3df18fd2b7ab2cb1
- app/robots.txt | 70b | sha1:98896dad3ec15b2ca1b7fe72e65bae71d23c7475
- app/favicon.ico | 194522b | sha1:6e91e3cfc9327f26b55a992b403b6560ddbd353c

### components

components
├── About.tsx
├── BlogSection.tsx
├── CTA.tsx
├── ContactForm.tsx
├── ContactInfo.tsx
├── FAQSection.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── Services.tsx
├── SocialProof.tsx
├── catalog
│   ├── CatalogProjectCard.tsx
│   └── CatalogProjectsGrid.tsx
├── iconMap.ts
├── shared
│   └── JsonLd.tsx
└── ui
├── accordion.tsx
├── avatar.tsx
├── badge.tsx
├── button.tsx
├── card.tsx
├── dialog.tsx
├── empty.tsx
├── form.tsx
├── input.tsx
├── label.tsx
├── modal.tsx
├── select.tsx
├── tabs.tsx
├── textarea.tsx
├── toast.tsx
└── toaster.tsx

4 directories, 31 files

#### Metadata (file | size | sha1)

- components/Header.tsx | 3133b | sha1:cf9748de5592a748dd683706dd53021d2372c84a
- components/Footer.tsx | 6516b | sha1:9fdc2403f1e81ed48c8f452f2205252ff5cf3f4d
- components/catalog/CatalogProjectCard.tsx | 3610b | sha1:07786eca9e4b54124dba36c1b141a3ba1cc49684
- components/catalog/CatalogProjectsGrid.tsx | 2777b | sha1:97f541955ab72c2e78334b5656559682dc58ceee
- components/Services.tsx | 7786b | sha1:ca10e03dfb9d53c6f684a152ec93b493d57c4966
- components/Hero.tsx | 7737b | sha1:7e3f75e584054c0c4e70cede67dc4f2920e6639d
- components/About.tsx | 9060b | sha1:0a48e77511e385f5785f819e1fdfccb17da24620
- components/shared/JsonLd.tsx | 2530b | sha1:d273f88bc443ae4f3ac87259ca136fe7536ed1a2
- components/ui/button.tsx | 1906b | sha1:f184334b52aa6dce5431d21ed02974120af19625
- components/ui/card.tsx | 1828b | sha1:c90a853903b78e8954330602b9d97f6f156eda85
- components/ui/badge.tsx | 1144b | sha1:4255f9fbc9862219d16be2ac566b2f65af92294e
- components/ui/label.tsx | 724b | sha1:c40f1bfdae352eab497210cedf32d113c0855143
- components/ui/empty.tsx | 2396b | sha1:a0f1e982e1386df6dc720985e7c958fe14fad552
- components/ui/avatar.tsx | 1419b | sha1:50ceaf0561e1d9967175b0c3ae0f2101b0e578fc
- components/ui/accordion.tsx | 2087b | sha1:c166c068cac9c471a9b6539ac3b60df1615edb58
- components/ui/tabs.tsx | 2384b | sha1:25d7ebd5b25354dc6a472dd1bab904f6137a0ffb
- components/ui/input.tsx | 768b | sha1:6fcb78d951139d4923eae26c6ae452c51b07ef7a
- components/ui/modal.tsx | 3989b | sha1:403602299dabd22184c474d81549011512c6880b
- components/ui/toast.tsx | 4832b | sha1:2123060c51054ade60c2bb42175b4473509ad718
- components/ui/dialog.tsx | 4196b | sha1:7b5096e886c5f0fdf2fc44a9406bd802cddd385a
- components/ui/select.tsx | 5745b | sha1:42f83400bb6efda7b2513e837933f72eb97c5da0
- components/ui/textarea.tsx | 649b | sha1:0f6ede6e3460545d0f5cdf7a3d0c5f7d465f28fd
- components/ui/toaster.tsx | 786b | sha1:fdc46a5e17cdbe9102e35848126f606e6ff6bc91
- components/ui/form.tsx | 4191b | sha1:502ddef697454276ea2d9b40eda859c7ed1c5c99
- components/iconMap.ts | 320b | sha1:cf1db53e9073c95efeca033ed6e29dfe50d40673
- components/ContactInfo.tsx | 6820b | sha1:08e590ece5a50d36e44113575b02387cfa2cbff9
- components/ContactForm.tsx | 8746b | sha1:27ba2fd67b390388b508f97fa1be73757e38adec
- components/CTA.tsx | 7203b | sha1:f923a23ff6110ea92f252c5a36ce3e49131791be
- components/SocialProof.tsx | 4408b | sha1:b4e340c3db9e29a78d55c0833d766c0869ee6d4a
- components/FAQSection.tsx | 8611b | sha1:20cd830ceee2bdee37d6ec71a08a53ed39190ba7
- components/BlogSection.tsx | 3169b | sha1:632173732a9d31b310c640ff98213ff033458249

### lib

lib
├── api.ts
├── helpers.ts
├── supabase.ts
└── utils.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- lib/utils.ts | 166b | sha1:03edf7b44c7cf1d3f48be4f72866007dbb63b8c6
- lib/api.ts | 457b | sha1:ba386cfe8e8843a602c0b958d77f5c15d387b141
- lib/helpers.ts | 3381b | sha1:3b509d447b9e785c50b4cb34ba51dfd046cc4309
- lib/supabase.ts | 987b | sha1:714a4067d19c464152a877de911c306450c31ac8

### public

public
├── grid.svg
├── images
│   ├── portfolio
│   │   ├── corporate-1.webp
│   │   ├── default-avatar.webp
│   │   ├── restaurant-1.webp
│   │   └── sme-1.webp
│   └── profile
│   └── default-avatar.webp
└── og-image.png

4 directories, 7 files

#### Metadata (file | size | sha1)

- public/images/profile/default-avatar.webp | 4351b | sha1:f3f3438414e699035d448859a6d6b1ae0b9750ae
- public/images/portfolio/restaurant-1.webp | 22797b | sha1:0c491e38af3e3f47260ae7973e1610e6880bfba0
- public/images/portfolio/sme-1.webp | 27619b | sha1:48b1014ff6b99454b6ac68372ecaf0b04154fdcd
- public/images/portfolio/default-avatar.webp | 5586b | sha1:97038bafeb268c23a6ec0e9695a9eea18a457731
- public/images/portfolio/corporate-1.webp | 44174b | sha1:9b0f4099faf3cb115d393a8b9c8c2f63f81efa06
- public/og-image.png | 132909b | sha1:7102561a00e219c617ff0ddd2fd0c094ffd49782
- public/grid.svg | 185b | sha1:71a836ea40052f09230c3f3cef63c47e4703f0b1

### scripts

scripts
├── project-summary.sh
└── tree-projects.sh

1 directory, 2 files

#### Metadata (file | size | sha1)

- scripts/project-summary.sh | 7551b | sha1:56b30ca598ca62a3983fda302a6e2ffed9864927
- scripts/tree-projects.sh | 862b | sha1:6de4d4cefa660072eaf34961340437a16836bbca

### data

data
├── blog
│   ├── allposts.ts
│   ├── post1.ts
│   ├── post2.ts
│   ├── post3.ts
│   └── post4.ts
├── catalog.projects.ts
├── reviews.ts
├── servicesData.ts
└── types.ts

2 directories, 9 files

#### Metadata (file | size | sha1)

- data/servicesData.ts | 5567b | sha1:cef0e57d4f1119a77cc0bd4c51c07c9321f6a0ab
- data/types.ts | 2191b | sha1:022669eecbec9d7d3130188713007d53a0990e9c
- data/reviews.ts | 4093b | sha1:ac2064dcad2796c1ea3eb43b14e846bf2ea5ff76
- data/blog/post1.ts | 1085b | sha1:f1adee5e7de54babaf647be6923e89f2210fce8c
- data/blog/post2.ts | 1038b | sha1:702800536c5a549bb11356283395d8783697f54f
- data/blog/post3.ts | 956b | sha1:745f41d4f8307078eb09d84eb43cf13b6fdd7bc9
- data/blog/post4.ts | 1103b | sha1:caa429d27dd75caaf6fb1bf3eb5c82fd3b0aabc7
- data/blog/allposts.ts | 700b | sha1:d570729c0b799c8c30b589da625fb12e445769f8
- data/catalog.projects.ts | 4877b | sha1:2391c71625b22f07c3ab834f11274d34ed5d6804

### hooks

hooks
└── use-toast.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- hooks/use-toast.ts | 3943b | sha1:6eac08b90d28dd8ccf6bc813c4bd6df0c2f34a9f

### config

config
└── siteConfig.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- config/siteConfig.ts | 5711b | sha1:ba95d92240f03b298bb1d93925824018ea59f72c

### types

types
├── blog.ts
├── index.ts
├── review.ts
└── services.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- types/blog.ts | 304b | sha1:710f2c3bad973f8463358f521719f4a0450fcad4
- types/services.ts | 1662b | sha1:27a3a67f67fc94ca53c55aa407249b178b2eedcd
- types/review.ts | 260b | sha1:58d2f8960e8689ba0e268f28a1ef26363885f933
- types/index.ts | 547b | sha1:4a8e38fde7c270d7f6912648361e04deac36baa8

## ⚙️ Root Config Previews

### `.prettierrc`

```text
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### `eslint.config.mjs`

```js
/** @format */
import js from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"
import globals from "globals" // 👈 เพิ่มการนำเข้า globals

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "**/*.d.ts",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      // 🛡️ เพิ่มบรรทัดนี้เพื่อแก้ Error 'window', 'process', 'console' not defined
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: "writable", // แก้ Error 'React' is not defined ในไฟล์เก่า
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...hooksPlugin.configs.recommended.rules,

      // ✅ กฎเหล็ก Industrial Sharp
      "react/jsx-no-comment-textnodes": "error",
      "@next/next/no-img-element": "warn",

      // ✅ ปิดกฎที่น่ารำคาญออกชั่วคราวเพื่อให้ Build ผ่าน
      "@typescript-eslint/no-unused-vars": "warn", // เปลี่ยนจาก error เป็น warn
      "no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
]
```

### `tailwind.config.ts`

```ts
/** @format */
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          navy: "#0F172A",
          green: "#22C55E",
          slate: "#64748B",
          emerald: "#065F46",
          gold: "#C5A059",
          orange: "#F97316",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        prompt: ["var(--font-prompt)", "sans-serif"],
        sans: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
        heading: ["var(--font-prompt)", "var(--font-inter)", "sans-serif"],
```

### `tsconfig.json`

```json
/** @format */
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/config/*": ["config/*"],
      "@/components/*": ["components/*"],
      "@/data/*": ["data/*"],
      "@/app/*": ["app/*"],
      "@/types/*": ["types/*"],
      "@/lib/*": ["lib/*"],
      "@/*": ["*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "config/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### `next.config.ts`

```ts
/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // ✅ ตั้งค่าความปลอดภัยสำหรับไฟล์ SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ กำหนด Format ที่ทันสมัยเพื่อลดขนาดไฟล์ภาพ
    formats: ["image/avif", "image/webp"],

    // ✅ ลงทะเบียน Remote Hostnames
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com", // 🔴 แก้ไข Error จากการโหลดรูป Avatar
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
    ],
  },

  // ✅ Performance Tuning
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
```

## 👀 Code Preview & Coverage

### `app/layout.tsx`

```ts
/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

// 🔹 ใช้ฟอนต์ Kanit พร้อมตั้งค่า display: 'swap' เพื่อลดปัญหา Layout Shift (CLS)
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-kanit",
  display: "swap", // 👈 ช่วยให้แสดงตัวอักษรทันทีด้วยฟอนต์สำรองก่อน Kanit จะโหลดเสร็จ
})

/**
 * 🛠️ การตั้งค่า Metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.aemdevweb.com"
      : "http://localhost:3000"
  ),
  title: {
    default: "AEMDEVWEB | Industrial Web Architecture",
    template: "%s | AEMDEVWEB",
  },
  description:
    "บริการพัฒนาเว็บไซต์ระดับ Enterprise และวางโครงสร้าง Digital Architecture ที่แข็งแกร่ง",
  keywords: ["Web Development", "Next.js", "Industrial Design", "AEMDEVWEB"],
  authors: [{ name: "AEMDEVWEB" }],
  openGraph: {
    title: "AEMDEVWEB | Industrial Web Architecture",
    description:
      "Enterprise-level web development and digital architecture solutions.",
    url: "https://www.aemdevweb.com",
    siteName: "AEMDEVWEB",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEMDEVWEB",
    description: "Industrial Web Architecture & Development",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // 👈 แนะนำให้เพิ่มสำหรับ iOS
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // 👈 ปรับเป็น 5 เพื่อ Accessibility (ให้คนสายตาไม่ดีซูมดูได้)
  themeColor: "#0f172a",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" suppressHydrationWarning className={kanit.variable}>
      <body
        className={`min-h-screen font-sans antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
```

### `app/(marketing)/[template_id]/_templates/cafe/CafeTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Image from "next/image"
import styles from "./CafeStyle.module.css"
import { cn } from "@/lib/utils"

interface CafeProps {
  data: any
}

export default function CafeTemplate({ data }: CafeProps) {
  // 🛡️ ป้องกันกรณีข้อมูลไม่ถูกส่งมา
  const { content } = data || {}

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🟢 Hero Section: Starbucks Vibe */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className="max-w-md text-xl font-bold italic opacity-80">
            {content.heroSubtitle}
          </p>
          <button className="mt-8 bg-white px-10 py-4 text-xl font-black uppercase italic text-[#1e3932] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            {"Order_Now"}
          </button>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.circleBadge}></div>
        </div>

        {/* Decor: Background Typography */}
        <div className="pointer-events-none absolute right-0 top-0 select-none text-[20vw] font-black opacity-10">
          {"COFFEE"}
        </div>
      </section>

      {/* 📦 Feature Grid: Modern Industrial Layout */}
      <section className={styles.featureGrid}>
        {content.features?.map((item: any) => (
          <div key={item.id} className={styles.featureCard}>
            <span className={styles.featureLabel}>LOG_{item.id}</span>
            <h3 className={styles.featureTitle}>{item.label}</h3>
            <p className="font-bold italic text-slate-500">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* 🥤 Signature Section */}
      <section className="flex flex-col items-center gap-16 bg-white px-8 py-24 md:flex-row">
        <div className="bg-[#d4e9e2] p-4 shadow-[12px_12px_0px_0px_rgba(30,57,50,1)] md:w-1/2">
          <Image
            src="/images/cafe/signature-brew.webp"
            alt="Coffee"
            width={800}
            height={600}
            className="h-auto w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            priority // เพิ่ม priority สำหรับภาพที่อยู่ส่วนบนของหน้า
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="mb-6 text-4xl font-black uppercase italic underline decoration-[#1e3932] decoration-8">
            {"Crafted_By_Hand"}
          </h2>
          <p className="mb-8 text-lg font-bold italic leading-relaxed">
            {
              "เราพิถีพิถันในทุกกระบวนการ ตั้งแต่การคัดเมล็ด การคั่ว จนถึงการสกัดน้ำกาแฟ เพื่อให้มั่นใจว่าทุกแก้วที่ส่งถึงมือคุณคือความสมบูรณ์แบบ"
            }
          </p>
          <div className="border-l-8 border-[#1e3932] bg-slate-50 p-4 font-mono text-sm italic">
            {'"Better Code, Better Coffee." - Aemdevweb'}
          </div>
        </div>
      </section>

```

### `app/(marketing)/[template_id]/_templates/cafe/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🛠️ AI CONTEXT GUIDELINE:
// 1. IDENTITY: นี่คือ "แบรนด์จำลอง" สำหรับธุรกิจประเภท Cafe
// 2. PRIMARY BRAND: AEMDEVWEB (Developer) - ห้ามนำชื่อนี้ไปใส่ในเมนูหรือบริการลูกค้า
// 3. MOCK DATA: ต้องสมจริง (Realistic) เพื่อให้ลูกค้าเห็นภาพธุรกิจของตนเอง
// ----------------------------------------------------

export const cafeConfig = {
  id: "template-cafe-industrial", // ระบุว่าเป็น Template
  name: "THE SOURCE ROASTERS", // 👈 เปลี่ยนเป็นชื่อแบรนด์สมมติที่ดูแพงและสมจริง
  themeColor: "#1e3932",
  secondaryColor: "#d4e9e2",
  metadata: {
    // 🛡️ แยกชื่อแบรนด์เว็บเรา (AEMDEVWEB) ไว้เฉพาะในส่วน SEO Title เพื่อระบุผู้สร้าง
    title: "The Source Roasters | Premium Cafe Template by AEMDEVWEB",
    description:
      "ยกระดับร้านกาแฟของคุณด้วยระบบ Digital Menu สไตล์ Industrial Modern",
    ogImage: "/images/projects/smj-cafe.jpg",
  },
  content: {
    // ☕ เปลี่ยนเนื้อหาให้โฟกัสที่ "ธุรกิจกาแฟ" 100% (เพื่อความสมจริงในการปิดการขาย)
    heroTitle: "CRAFTED_FOR_PERFECTION",
    heroSubtitle: "ประสบการณ์กาแฟระดับ Specialty ในบรรยากาศ Industrial Modern",
    features: [
      {
        id: 1,
        label: "DIRECT_TRADE",
        detail: "สนับสนุนเกษตรกรด้วยเมล็ดกาแฟ Direct Trade คัดพิเศษ",
      },
      {
        id: 2,
        label: "ROASTERY_LAB",
        detail: "คั่วสดใหม่ทุกวันด้วยเทคโนโลยีการคุมอุณหภูมิขั้นสูง",
      },
      {
        id: 3,
        label: "WORKSPACE_READY",
        detail: "พื้นที่ทำงานที่ออกแบบมาเพื่อสมาธิและความสร้างสรรค์",
      },
    ],
    menuItems: [
      {
        id: "1",
        name: "SIGNATURE_ESPRESSO", // 👈 เปลี่ยนจาก ESPRESSO_CORE เพื่อความสมจริง
        price: "120.00 THB",
        img: "/images/cafe/espresso.webp",
        desc: "กาแฟคั่วเข้ม Body หนักแน่น พร้อม Notes ของ Dark Chocolate",
      },
      {
        id: "2",
        name: "VELVET_LATTE",
        price: "145.00 THB",
        img: "/images/cafe/latte.webp",
        desc: "สัมผัสนุ่มละมุนจากนมคุณภาพเยี่ยมและกาแฟคั่วกลาง",
      },
      // ... ตัวอย่างเมนูอื่นๆ
    ],
    // 🛡️ ส่วนนี้คือจุดแข็ง (Selling Point) ที่ลูกค้าจะซื้อเว็บคุณ
    memberBenefits: [
      "ระบบสะสมแต้มผ่านเบอร์โทรศัพท์",
      "รับสิทธิ์ซื้อ 1 แถม 1 ในวันเกิด",
      "จองโต๊ะผ่านระบบออนไลน์ล่วงหน้า",
      "รับข่าวสารเมนูใหม่ผ่าน Line OA อัตโนมัติ",
    ],
  },
}
```

### `app/(marketing)/[template_id]/_templates/realestate/RealEstateTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Image from "next/image" // 🛡️ นำเข้า Image เพื่อแก้ Warning เรื่อง LCP/Performance
import styles from "./RealEstateStyle.module.css"
import { cn } from "@/lib/utils"

interface Props {
  data: any
}

export default function RealEstateTemplate({ data }: Props) {
  // 🛡️ Defensive Programming: ป้องกันกรณี data หรือ content ว่าง
  const { content } = data || {}

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏙️ Hero Section: High-End Agency Vibe */}
      <section className={styles.hero}>
        <div className="z-10 max-w-5xl">
          <div className="mx-auto mb-8 h-1 w-20 bg-[#c2a35d]"></div>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
            <button className="bg-[#c2a35d] px-10 py-4 font-black uppercase italic text-white shadow-[4px_4px_0px_0px_#fff] transition-all hover:shadow-none">
              Search_Properties
            </button>
            <button className="border-2 border-[#c2a35d] bg-white/5 px-10 py-4 font-black uppercase italic text-[#c2a35d] backdrop-blur-sm">
              List_Your_Asset
            </button>
          </div>
        </div>
      </section>

      {/* 🧭 Category Navigation: ย้าย 'group' ออกจาก CSS มาใส่ตรงนี้ */}
      <section className={styles.categoryGrid}>
        {content.categories?.map((cat: any) => (
          <div key={cat.id} className={cn(styles.catItem, "group")}>
            <span className={styles.catLabel}>{cat.label}</span>
            <span className={styles.catCount}>{cat.count} AVAILABLE</span>
          </div>
        ))}
      </section>

      {/* 💎 Featured Highlight: Showcase Section */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          <div className="sticky top-32 md:w-1/3">
            <h2 className={styles.sectionTitle}>CURATED_UNITS</h2>
            <p className="mb-8 font-bold italic text-slate-500">
              {
                "เราคัดสรรยูนิตพิเศษที่คุ้มค่าที่สุด ทั้งด้านราคาและทำเลเพื่อคุณโดยเฉพาะ"
              }
            </p>
            <div className="space-y-4">
              {content.highlights?.map((h: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-2 border-slate-100 bg-white p-4 font-bold italic"
                >
                  <div className="h-2 w-2 rotate-45 bg-[#c2a35d]"></div>
                  {h.detail}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:w-2/3 md:grid-cols-2">
            {/* 🛡️ Property Card 1: เปลี่ยนเป็น Next.js Image เพื่อลด Warning */}
            <div className={cn(styles.propertyCard, "group")}>
              <Image
                src="/images/projects/real-estate.jpg"
                alt="Condo"
                width={600}
                height={800}
                className="h-full w-full scale-110 object-cover grayscale transition-all duration-700 group-hover:scale-100 group-hover:grayscale-0"
              />
```

### `app/(marketing)/[template_id]/_templates/realestate/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 💎 AI CONTEXT: LUXURY REAL ESTATE & INVESTMENT
// Identity: เอเจนซี่อสังหาริมทรัพย์ระดับพรีเมียม (ไม่ใช่แบรนด์ไอที)
// Tone: หรูหรา, น่าเชื่อถือ, สุขุม (Exclusive & Sophisticated)
// ----------------------------------------------------

export const realEstateConfig = {
  id: "template-realestate-luxury",
  name: "VAULT & VEST PROPERTY", // 👈 เปลี่ยนชื่อแบรนด์ให้สื่อถึงความมั่นคง (Vault) และการลงทุน (Vest)
  themeColor: "#c2a35d", // Champagne Gold (สื่อถึงความมั่งคั่ง)
  secondaryColor: "#0f172a", // Midnight Navy (สื่อถึงความภูมิฐาน)
  metadata: {
    // 🛡️ ระบุชื่อผู้สร้างเทคโนโลยีไว้ใน Metadata เช่นเคย
    title:
      "Vault & Vest | คัดสรรอสังหาริมทรัพย์และโอกาสการลงทุนระดับพรีเมียม by AEMDEVWEB",
    description:
      "ที่ปรึกษาด้านอสังหาริมทรัพย์ระดับ Exclusive มอบดีลที่ดีที่สุดบนทำเลศักยภาพทั่วประเทศ",
    ogImage: "/images/projects/real-estate.jpg",
  },
  content: {
    // 🏰 เน้นภาษาที่ดึงดูดกลุ่มลูกค้าระดับบน (High Net Worth)
    heroTitle: "EXCEPTIONAL_LIVING_CURATED",
    heroSubtitle:
      "รวบรวมสุดยอดที่อยู่อาศัยที่ผ่านการคัดสรรอย่างพิถีพิถัน เพื่อสุนทรียภาพแห่งการใช้ชีวิตและการเติบโตของสินทรัพย์",

    // 🏷️ ปรับหมวดหมู่ให้ดูมีความเป็นพอร์ตโฟลิโอการลงทุน
    categories: [
      { id: "CONDO", label: "ELITE_COLLECTION", count: "120+ Units" },
      { id: "HOUSE", label: "PRIVATE_ESTATES", count: "45+ Houses" },
      { id: "INVEST", label: "STRATEGIC_INVESTMENTS", count: "15+ Projects" },
      { id: "LAND", label: "LAND_ACQUISITION", count: "30+ Locations" },
    ],

    // ✨ ไฮไลท์ที่เน้นความ Exclusive และบริการแบบมืออาชีพ
    highlights: [
      {
        title: "CURATED_SELECTION",
        detail: "ทุกยูนิตผ่านการประเมินศักยภาพและความคุ้มค่าโดยผู้เชี่ยวชาญ",
      },
      {
        title: "CONCIERGE_ADVISORY",
        detail: "บริการที่ปรึกษาส่วนตัวด้านสินเชื่อและสิทธิประโยชน์ทางภาษี",
      },
      {
        title: "END_TO_END_EXCELLENCE",
        detail:
          "ดูแลทุกขั้นตอนอย่างใกล้ชิด ตั้งแต่การเยี่ยมชมจนถึงการบริหารทรัพย์สิน",
      },
    ],

    // 🏆 ส่วนเสริมเพื่อสร้างความมั่นใจ (Authority Building)
    expertService: [
      "Market Analysis & Insight",
      "Portfolio Management",
      "International Property Access",
    ],
  },
}
```

### `app/(marketing)/[template_id]/_templates/construction/ConstructionTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Image from "next/image" // 🛡️ นำเข้า Next.js Image เพื่อลด Warning LCP
import styles from "./ConstructionStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface Props {
  data: any
}

export default function ConstructionTemplate({ data }: Props) {
  // 🛡️ Safe Access: ป้องกัน Error กรณีโครงสร้างข้อมูลผิดพลาด
  const { content } = data || {}
  const ArrowIcon = iconMap.ARROW_RIGHT

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏗️ Hero Section: Infrastructure Vibe */}
      <section className={styles.hero}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="mb-4 block font-mono font-black uppercase tracking-[0.5em] text-yellow-500">
            {"Established 2000 // ISO 9001 Certified"}
          </span>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-yellow-500 px-12 py-5 font-black uppercase italic text-slate-900 shadow-[6px_6px_0px_0px_#fff] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Request_Proposal
            </button>
            <button className="border-2 border-white px-12 py-5 font-black uppercase italic text-white transition-all hover:bg-white hover:text-slate-900">
              Our_Credentials
            </button>
          </div>
        </div>
      </section>

      {/* 📊 Track Record: The Numbers of Trust */}
      <div className="px-4">
        <section className={styles.trackRecordBar}>
          {content.trackRecord?.map((item: any, idx: number) => (
            <div key={idx} className={styles.trackItem}>
              <div className={styles.trackValue}>{item.value}</div>
              <div className={styles.trackLabel}>{item.label}</div>
            </div>
          ))}
        </section>
      </div>

      {/* 🛡️ Expertise Grid: Business Professional Services */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="border-l-8 border-slate-900 pl-6">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">
              CORE_EXPERTISE
            </h2>
            <p className="mt-2 font-bold text-slate-400">
              ศักยภาพในการดำเนินโครงการหลากหลายรูปแบบ
            </p>
          </div>
          <div className="hidden font-mono text-sm font-bold text-slate-400 md:block">
            /INDUSTRIAL_CAPABILITIES
          </div>
        </div>

        <div className={styles.expertiseGrid}>
          {content.expertise?.map((item: any) => (
            <div key={item.id} className={styles.expertiseCard}>
              <h3 className="mb-4 text-2xl font-black uppercase italic text-slate-900">
                {item.label}
              </h3>
              <p className="mb-8 font-bold leading-relaxed text-slate-600">
                {item.detail}
              </p>
              <div className="group flex cursor-pointer items-center gap-2 font-black uppercase italic text-yellow-600">
                {"Project_Details "}
```

### `app/(marketing)/[template_id]/_templates/construction/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🏗️ AI CONTEXT: ENGINEERING & INFRASTRUCTURE TEMPLATE
// Identity: บริษัทรับเหมาก่อสร้างและวิศวกรรมโยธา (ไม่ใช่บริษัทไอที)
// Tone: แข็งแกร่ง, แม่นยำ, มาตรฐานความปลอดภัยสูง (Industrial Professionalism)
// ----------------------------------------------------

export const constructionConfig = {
  id: "template-construction-industrial",
  name: "TITAN STRUCTURES & ENGINEERING", // 👈 เปลี่ยนชื่อแบรนด์ให้ดูแกร่งและเป็นมืออาชีพ
  themeColor: "#1e293b", // Slate 800 (สื่อถึงเหล็กและโครงสร้าง)
  secondaryColor: "#f59e0b", // Amber 500 (สีสัญลักษณ์ความปลอดภัย/เครื่องจักร)
  metadata: {
    title:
      "Titan Structures | มาตรฐานวิศวกรรมและรับเหมาก่อสร้างระดับสากล by AEMDEVWEB",
    description:
      "บริษัทผู้นำด้านงานก่อสร้างอุตสาหกรรมและโครงสร้างพื้นฐานระดับชาติ",
    ogImage: "/images/projects/construction-bg.jpg",
  },
  content: {
    // 🚧 เน้นคำศัพท์ที่สร้างความเชื่อมั่นในงานโครงสร้าง
    heroTitle: "STRENGTH_THROUGH_PRECISION",
    heroSubtitle:
      "ออกแบบและก่อสร้างโครงสร้างพื้นฐานที่ยั่งยืน ด้วยมาตรฐานวิศวกรรมชั้นสูงและนวัตกรรมการบริหารโครงการที่แม่นยำ",

    // 📊 สถิติที่เน้นความเก๋าของบริษัทรับเหมา
    trackRecord: [
      { label: "PROJECTS_DELIVERED", value: "250+" },
      { label: "CERTIFIED_ENGINEERS", value: "45" },
      { label: "SAFETY_MILESTONE", value: "1M+ Hours" }, // ชั่วโมงการทำงานที่ปลอดภัย
    ],

    // 🛡️ ข้อมูลความเชี่ยวชาญ (Expertise)
    expertise: [
      {
        id: "exp-1",
        label: "STRUCTURAL_INTEGRITY",
        detail:
          "วิเคราะห์และคำนวณโครงสร้างเพื่อความคงทนสูงสุดด้วยเทคโนโลยี BIM (Building Information Modeling)",
      },
      {
        id: "exp-2",
        label: "EPC_MANAGEMENT",
        detail:
          "การบริหารโครงการแบบครบวงจร (Engineering, Procurement, Construction) ควบคุมงบประมาณและเวลาได้ 100%",
      },
      {
        id: "exp-3",
        label: "SUSTAINABLE_CIVIL",
        detail:
          "นวัตกรรมการก่อสร้างสีเขียวที่เน้นการใช้ทรัพยากรอย่างคุ้มค่าตามมาตรฐาน LEED",
      },
    ],

    // 🏗️ บริการหลักในเชิงธุรกิจ
    services: [
      {
        id: 1,
        title: "INDUSTRIAL_FACILITIES",
        desc: "เชี่ยวชาญการก่อสร้างคลังสินค้าและโรงงานอุตสาหกรรมหนักตามมาตรฐานสากล",
      },
      {
        id: 2,
        title: "PUBLIC_INFRASTRUCTURE",
        desc: "พัฒนาระบบสาธารณูปโภค ถนน สะพาน และโครงสร้างพื้นฐานขนาดใหญ่เพื่อชุมชน",
      },
      {
        id: 3,
        title: "STRATEGIC_CONSULTANCY",
        desc: "บริการที่ปรึกษาเชิงวิศวกรรมและการตรวจสอบความปลอดภัยโครงสร้างอาคาร",
      },
    ],

    // 🎖️ ส่วนเสริมความน่าเชื่อถือ (ปิดการขาย)
    certifications: [
      "ISO 9001:2015 Certified",
      "Council of Engineers Standard",
      "OHSAS 18001 Safety Excellence",
    ],
  },
```

### `app/(marketing)/[template_id]/_templates/starter/StarterTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import styles from "./StarterStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface Props {
  data: any
}

export default function StarterTemplate({ data }: Props) {
  // 🛡️ Defensive Programming: ป้องกันกรณี data หรือ content ว่าง
  const { content } = data || {}
  const Check = iconMap.CHECK
  const Rocket = iconMap.STARTER

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🚀 Header: Flash Sale Vibe */}
      <section className={styles.hero}>
        <div className={styles.badge}>LIMITED_OFFER: FIRST_10_CUSTOMERS</div>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className="max-w-xl text-xl font-bold italic text-slate-500">
          {content.heroSubtitle}
        </p>

        {/* Background Decor */}
        <div
          className="absolute left-10 top-10 hidden rotate-[-15deg] opacity-10 md:block"
          aria-hidden="true"
        >
          {Rocket && <Rocket size={150} />}
        </div>
      </section>

      {/* 🛒 The Promotion Cart: จุดขายสำคัญ */}
      <div className="relative z-50 px-4">
        <section className={styles.cartWidget}>
          <div className="mb-6 flex items-start justify-between">
            <div className="font-mono text-[10px] font-black uppercase text-slate-400">
              Item_Order: {content.cartItem?.name}
            </div>
            <span className="animate-pulse text-[10px] font-bold text-green-600">
              ● {content.cartItem?.status}
            </span>
          </div>

          <div className={styles.priceTag}>
            <span className={styles.currentPrice}>฿{content.promoPrice}</span>
            <span className={styles.oldPrice}>฿{content.originalPrice}</span>
            <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-black text-green-600">
              SAVE {content.savePercent}
            </span>
          </div>

          <div className="space-y-2 border-t-2 border-dashed border-slate-200 pt-4">
            <p className="text-[10px] font-bold uppercase text-slate-400">
              Inclusions:
            </p>
            <div className="text-xs font-bold italic">
              + SSL Certificate Free
            </div>
            <div className="text-xs font-bold italic">
              + Mobile-First Engine
            </div>
          </div>

          <button className={styles.checkoutBtn} type="button">
            CLAIM_OFFER_NOW
          </button>

          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-widest text-slate-400">
            * No Hidden Fees // One-time Payment
          </p>
        </section>
      </div>

```

### `app/(marketing)/[template_id]/_templates/starter/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// ⚡ AI CONTEXT: SME STARTER & FAST-TRACK LAUNCH
// Identity: บริการเว็บสำเร็จรูปเกรดพรีเมียม (Speed & Conversion Focused)
// Tone: กระฉับกระเฉง, เร้าใจ, เน้นความคุ้มค่า (Action-Oriented & High Value)
// ----------------------------------------------------

export const starterConfig = {
  id: "template-starter-launchpad",
  name: "FASTTRACK DIGITAL", // 👈 ชื่อแบรนด์ที่สื่อถึงความเร็วและการเติบโต
  themeColor: "#ff3e3e", // Electric Red (สีกระตุ้นการตัดสินใจ)
  secondaryColor: "#000000",
  metadata: {
    // 🛡️ เน้นความคุ้มค่าใน SEO Title
    title:
      "FastTrack Digital | เว็บไซต์ SME เริ่มต้นเพียง 3,900.- ครบ จบ ในที่เดียว",
    description:
      "ยกระดับธุรกิจสู่โลกออนไลน์ด้วยเว็บไซต์ประสิทธิภาพสูง โหลดไว ติดหน้าแรก Google ได้ง่ายกว่า",
    ogImage: "/images/projects/starter.jpg",
  },
  content: {
    // 💰 ข้อมูลราคา (Price Strategy)
    promoPrice: "3,900",
    originalPrice: "7,500",
    savePercent: "48%",

    // 🚀 เน้นผลลัพธ์ที่รวดเร็ว (Time-to-Market)
    heroTitle: "GO_DIGITAL_IN_24HRS",
    heroSubtitle:
      "สร้างตัวตนบนโลกออนไลน์ด้วยเว็บไซต์มาตรฐานสากล ที่ออกแบบมาเพื่อเปลี่ยนผู้เข้าชมให้เป็นยอดขาย",

    // 🛠️ Feature ที่ SME แคร์ที่สุด
    features: [
      { id: 1, text: "ULTRA_RESPONSIVE (แสดงผลสมบูรณ์บนทุกหน้าจอ)" },
      { id: 2, text: "LIGHTNING_SPEED (โหลดไวภายใน 1 วินาที)" },
      { id: 3, text: "READY_FOR_ADS (รองรับการทำ Facebook/Google Ads)" },
      {
        id: 4,
        text: "FREE_ALL_IN_ONE (ฟรี! โดเมน โฮสติ้ง และระบบรักษาความปลอดภัย)",
      },
    ],

    // 🛒 สินค้าในแพ็คเกจ (Product Psychology)
    cartItem: {
      name: "SME_GROWTH_PACKAGE",
      status: "LIMITED_SLOTS_AVAILABLE", // 👈 เปลี่ยนเพื่อให้เกิดความรู้สึกเร่งด่วน (Urgency)
    },

    // 🛡️ ส่วนการันตี (Trust Builders)
    guarantee: [
      "100% Satisfaction Guarantee",
      "No Hidden Fees",
      "Lifetime Security Updates",
    ],
  },
}
```

### `app/(marketing)/[template_id]/_templates/clinic/ClinicTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import styles from "./ClinicStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface ClinicProps {
  data: any
}

export default function ClinicTemplate({ data }: ClinicProps) {
  // 🛡️ Safe Data Access: ป้องกันกรณีข้อมูลไม่มา หน้าเว็บจะไม่พัง
  const { content } = data || {}
  const CheckIcon = iconMap.CHECK

  // Guard Clause
  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏥 Hero Section: Premium Clean Look */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>Trusted Medical Center</span>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 px-10 py-4 font-black uppercase italic text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            Book Appointment
          </button>
          <button className="border-4 border-slate-900 bg-white px-10 py-4 font-black uppercase italic text-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
            Services
          </button>
        </div>

        {/* Decor: Medical Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </section>

      {/* 📊 Stats Section: Trust Building */}
      <div className="px-8">
        <section className={styles.statsGrid}>
          {content.stats?.map((stat: any) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>
      </div>

      {/* 🩺 Services: Clean Industrial Design */}
      <section className={styles.serviceSection}>
        <div className="mb-16 border-l-8 border-blue-600 pl-6">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            OUR SPECIALTIES
          </h2>
          <p className="mt-2 font-bold italic text-slate-400">
            บริการทางการแพทย์ที่เราเชี่ยวชาญ
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {content.services?.map((service: any, idx: number) => (
            <div key={idx} className={styles.serviceCard}>
              <div className="mb-4 text-blue-600">
                {CheckIcon && <CheckIcon size={32} />}
              </div>
              <h3 className="mb-4 text-xl font-black uppercase italic text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {service.detail}
```

### `app/(marketing)/[template_id]/_templates/clinic/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🏥 AI CONTEXT: MEDICAL & WELLNESS TEMPLATE
// Identity: คลินิกเวชกรรม/ศูนย์สุขภาพพรีเมียม (ไม่ใช่แบรนด์ไอที)
// Tone: สะอาด, น่าเชื่อถือ, อบอุ่น (Medical Professionalism)
// ----------------------------------------------------

export const clinicConfig = {
  id: "template-medical-wellness",
  name: "AURA WELLNESS CENTER", // 👈 เปลี่ยนชื่อแบรนด์สมมติให้ดูน่าเชื่อถือในสายการแพทย์
  themeColor: "#0f766e", // 👈 ปรับเป็นสี Teal/Dark Green (ให้ความรู้สึกเยียวยาและพรีเมียมกว่า Blue ทั่วไป)
  secondaryColor: "#f0fdfa",
  metadata: {
    // 🛡️ SEO ยังคงให้เครดิต AEMDEVWEB ในฐานะ Developer
    title:
      "Aura Wellness Center | นวัตกรรมการดูแลสุขภาพระดับพรีเมียม by AEMDEVWEB",
    description:
      "คลินิกเวชกรรมเฉพาะทางที่ผสานเทคโนโลยีสมัยใหม่เข้ากับการดูแลอย่างเหนือระดับ",
    ogImage: "/images/projects/clinic.jpg",
  },
  content: {
    // 🩺 เปลี่ยนจากคำศัพท์เชิงระบบ (Redefined) เป็นคำศัพท์ที่ลูกค้าต้องการได้ยิน
    heroTitle: "PRECISION_CARE_FOR_YOU",
    heroSubtitle:
      "นิยามใหม่ของการดูแลสุขภาพเชิงป้องกัน โดยทีมแพทย์ผู้เชี่ยวชาญและเทคโนโลยีที่แม่นยำที่สุด",
    stats: [
      { id: 1, label: "BOARD_CERTIFIED", value: "15+" }, // เน้นวุฒิบัตรแพทย์
      { id: 2, label: "HAPPY_PATIENTS", value: "12,000+" }, // เน้นผลลัพธ์คนไข้
      { id: 3, label: "PRECISION_TECH", value: "99.9%" }, // เน้นความแม่นยำเครื่องมือ
    ],
    services: [
      {
        title: "EXECUTIVE_CHECKUP",
        detail: "โปรแกรมตรวจสุขภาพระดับผู้บริหารที่เจาะลึกถึงระดับยีน",
      },
      {
        title: "ANTI_AGING_MEDICINE",
        detail: "ศาสตร์แห่งการชะลอวัยและฟื้นฟูเซลล์จากภายในสู่ภายนอก",
      },
      {
        title: "PERSONALIZED_WELLNESS",
        detail: "โปรแกรมฟื้นฟูสุขภาพเฉพาะบุคคล ออกแบบโดยแพทย์ผู้เชี่ยวชาญ",
      },
    ],
    // 🚀 ส่วนเสริมเพื่อปิดการขาย (Conversion Drivers)
    trustBadges: [
      "JCI International Standard",
      "Medical Innovation Award 2024",
      "Certified Specialist Doctors",
    ],
  },
}
```

### `app/(marketing)/[template_id]/page.tsx`

```ts
import { notFound } from "next/navigation"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

// 🛰️ Dynamic SEO: ดึงค่าจาก config.ts ของแต่ละโฟลเดอร์มาใช้
export async function generateMetadata({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return {}

  return {
    title: entry.config.metadata.title,
    description: entry.config.metadata.description,
    openGraph: {
      images: [entry.config.metadata.ogImage],
    },
  }
}

// ⚡ Static Generation
export async function generateStaticParams() {
  return Object.keys(TEMPLATE_REGISTRY).map((id) => ({ template_id: id }))
}

export default async function MarketingPage({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return notFound()

  const SelectedTemplate = entry.component

  return (
    <div className="selection:bg-slate-900 selection:text-white">
      {/* ส่งข้อมูล config เข้าไปใน Template เป็น Props ได้เลย */}
      <SelectedTemplate data={entry.config} />
    </div>
  )
}
```

### `app/(marketing)/[template_id]/layout.tsx`

```ts
// app/(marketing)/[template_id]/layout.tsx
import React from "react"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: Promise<{ template_id: string }>
}

export default async function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // ดึงค่าสีหลักจาก Config (ถ้าไม่มีให้ใช้ Slate-900 เป็นค่าพื้นฐาน)
  const brandColor = entry?.config?.themeColor || "#0f172a"
  const brandName = entry?.config?.name || "MARKETING_UNIT"

  return (
    <div className="min-h-screen bg-white">
      {/* 🛠️ Dynamic Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="text-xl font-black uppercase tracking-tighter text-slate-900">
            {brandName}
            <span style={{ color: brandColor }}>.</span>
          </div>

          <button
            style={{ backgroundColor: brandColor }}
            className="rounded-none px-6 py-2 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:opacity-90 active:scale-95"
          >
            CONNECT_NOW
          </button>
        </div>
      </nav>

      {/* 🚀 Main Content Area */}
      <main
        role="main"
        className="duration-700 animate-in fade-in slide-in-from-bottom-2"
      >
        {children}
      </main>

      {/* 🏁 Industrial Footer */}
      <footer className="border-t bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              © 2025 JP-ENGINE // SYSTEM_READY
            </p>
            <div className="flex gap-4">
              <div
                className="h-2 w-2 animate-pulse rounded-full"
                style={{ backgroundColor: brandColor }}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                Status: Optimized
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

### `app/(marketing)/[template_id]/_config/registry.ts`

```ts
import { clinicConfig } from "../_templates/clinic/config"
import { cafeConfig } from "../_templates/cafe/config"
import { realEstateConfig } from "../_templates/realestate/config"
import { constructionConfig } from "../_templates/construction/config"
import { starterConfig } from "../_templates/starter/config"

import ClinicTemplate from "../_templates/clinic/ClinicTemplate"
import CafeTemplate from "../_templates/cafe/CafeTemplate"
import RealEstateTemplate from "../_templates/realestate/RealEstateTemplate"
import ConstructionTemplate from "../_templates/construction/ConstructionTemplate"
import StarterTemplate from "../_templates/starter/StarterTemplate"

export const TEMPLATE_REGISTRY: Record<string, any> = {
  clinic: { config: clinicConfig, component: ClinicTemplate },
  cafe: { config: cafeConfig, component: CafeTemplate },
  realestate: { config: realEstateConfig, component: RealEstateTemplate },
  construction: { config: constructionConfig, component: ConstructionTemplate },
  starter: { config: starterConfig, component: StarterTemplate },
}
```

### `app/api/contact/route.ts`

```ts
/** @format */
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const getSupabaseConfig = () => ({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
})

export async function POST(request: Request) {
  try {
    const { url, serviceKey } = getSupabaseConfig()

    // 1. ตรวจสอบ Config
    if (!url || !serviceKey) {
      console.error("❌ [Config Error]: Missing Supabase Credentials")
      return NextResponse.json(
        { error: "Internal Server Configuration Error" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const {
      name,
      phone,
      businessType,
      budget,
      templateId,
      source_url,
      metadata,
    } = body

    // 2. Validation ขั้นต่ำตาม Schema (NOT NULL)
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const supabase = createClient(url, serviceKey)

    // 3. Mapping ข้อมูลให้ตรงกับ Schema ใน Supabase (leads table)
    const leadData = {
      name: name,
      phone: phone || null,
      category: businessType || "not_specified",
      template_id: templateId || "main",
      source_url: source_url || "",
      // นำ budget ไปรวมไว้ใน message ตามโครงสร้างตารางที่ไม่มีฟิลด์ budget
      message: budget ? `Budget Plan: ${budget}` : "No message provided",
      metadata: metadata || {},
      status: "new",
    }

    // 4. บันทึกข้อมูล
    const { data, error } = await supabase
      .from("leads")
      .insert([leadData])
      .select()
      .single()

    if (error) {
      console.error("❌ [Supabase Error]:", error.message)
      return NextResponse.json(
        { error: "Database rejection", details: error.message },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, leadId: data.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ [Runtime Error]:", error.message)
    return NextResponse.json(
      { error: "Critical Server Error", message: error.message },
      { status: 500 }
    )
  }
}
```

### `app/(main)/about/page.tsx`

```ts
/** @format */
import React, { memo } from "react"
import AboutContent from "@/components/About"
import CTA from "@/components/CTA"
import { siteConfig } from "@/config/siteConfig"
import { Metadata } from "next"
import { Users, Code2, Heart, ArrowDownRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `รู้จักเรา | ${siteConfig.name}`,
  description:
    "ทำความรู้จักกับ aemdevweb พาร์ทเนอร์ผู้ช่วยสร้างตัวตนบนโลกออนไลน์ให้กับธุรกิจ SME ด้วยมาตรฐานวิศวกรรมและความจริงใจ",
}

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO SECTION: INDUSTRIAL BLUEPRINT ─── */}
      <section className="relative overflow-hidden bg-slate-900 py-32 md:py-56">
        {/* Blueprint Grid Background: สลับสีเส้นให้ดูมีความลึก */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1.5px,transparent_1.5px),linear-gradient(to_bottom,#1e293b_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] opacity-40" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />

        {/* Cinematic Glows */}
        <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[600px] w-[600px] bg-blue-600/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            <div className="group inline-flex items-center gap-3 border-l-4 border-blue-600 bg-white/5 px-6 py-3 backdrop-blur-md transition-all hover:bg-white/10">
              <Sparkles size={14} className="animate-pulse text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 md:text-xs">
                Engineering Digital Trust
              </span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-white md:text-8xl lg:text-[110px]">
                  เราสร้างเว็บเพื่อให้ <br />
                  <span className="text-blue-600 underline decoration-white/10 underline-offset-8">
                    ธุรกิจคุณไปได้ไกล
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="border-l-4 border-blue-600/30 pl-8 text-xl font-bold leading-relaxed text-slate-400 md:text-2xl">
                  พาร์ทเนอร์ที่พร้อมเติบโตไปกับ{" "}
                  <span className="text-white underline decoration-blue-600 decoration-4">
                    SME และ หจก.
                  </span>{" "}
                  ทั่วไทยด้วยความแม่นยำครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CORE VALUES: BENTO SHARP STRUCTURE ─── */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px border-4 border-slate-900 bg-slate-900 shadow-[20px_20px_0px_0px_rgba(30,41,59,0.2)] md:grid-cols-3">
          {[
            {
              icon: <Code2 size={24} />,
              color: "text-blue-600",
              t: "Precision Craft",
              d: "วิศวกรรมเว็บที่โหลดไว และรองรับโครงสร้าง SEO",
            },
            {
              icon: <Heart size={24} />,
              color: "text-rose-500",
              t: "Genuine Care",
              d: "ดูแลธุรกิจคุณ เหมือนเป็นธุรกิจของเราเอง",
            },
            {
              icon: <Users size={24} />,
              color: "text-emerald-500",
              t: "Real Partnership",
              d: "คุยตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนงาน",
```

### `app/(main)/blog/[slug]/page.tsx`

```ts
/** @format */
import React from "react"
import { notFound } from "next/navigation"
import { blogData } from "@/data/blog/allposts"
import Image from "next/image"

// 🛠️ สร้างหน้า Static ล่วงหน้าตาม Slug ที่มี
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug || post.id, // รองรับทั้ง slug และ id
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => (p.slug || p.id) === params.slug)

  if (!post) notFound()

  return (
    <article className="min-h-screen bg-white pb-32 pt-40">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Post Meta */}
        <div className="mb-8 flex items-center gap-4">
          <span className="bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
            {post.category}
          </span>
          <time className="font-mono text-sm font-bold text-slate-400">
            {post.date}
          </time>
        </div>

        <h1 className="mb-12 text-4xl font-black uppercase italic leading-[1.1] tracking-tighter text-slate-900 md:text-7xl">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="relative mb-16 aspect-video overflow-hidden border-4 border-slate-900 shadow-[12px_12px_0px_0px_#2563eb]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Render */}
        <div
          className="prose prose-slate prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-strong:text-slate-900 prose-blockquote:border-l-8 prose-blockquote:border-blue-600 prose-img:border-4 prose-img:border-slate-900 max-w-none shadow-blue-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
```

### `app/(main)/blog/page.tsx`

```ts
/** @format */
import React from "react"
import { Metadata } from "next"
import { blogData } from "@/data/blog/allposts"
import BlogSection from "@/components/BlogSection"

export const metadata: Metadata = {
  title: "Insights & Knowledge | AEMDEVWEB",
  description:
    "รวบรวมเทคนิคการทำเว็บไซต์และการตลาดออนไลน์ฉบับพาร์ทเนอร์ เน้นนำไปใช้จริงกับธุรกิจของคุณ",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-20 border-b-8 border-slate-900 pb-12">
          <div className="mb-4 inline-block bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-white">
            KNOWLEDGE_HUB v2.0
          </div>
          <h1 className="text-6xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-9xl">
            Latest <br />
            <span className="text-blue-600">Insights.</span>
          </h1>
        </div>

        {/* CONTENT */}
        <BlogSection posts={blogData} />
      </div>
    </main>
  )
}
```

### `app/(main)/blog/loading.tsx`

```ts
/** @format */
export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="h-20 w-3/4 animate-pulse bg-slate-100" />
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-96 w-full animate-pulse border-4 border-slate-100 bg-slate-50"
          />
        ))}
      </div>
    </div>
  )
}
```

### `app/(main)/catalog/page.tsx`

```ts
/** @format */
import { Metadata } from "next"
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"
import { Sparkles, LayoutPanelLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Project Catalog | AEM Dev",
  description:
    "รวมผลงานเว็บไซต์และ Landing Page สำหรับธุรกิจจริง ที่ออกแบบเพื่อ Conversion, Performance และ Trust",
}

export default function CatalogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 🛠️ BACKGROUND ARCHITECTURE ─── */}
      {/* ใช้ลายเส้นตารางแบบ Blueprint จางๆ */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] opacity-60 [background-size:40px_40px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 right-0 top-0 -z-10 h-96 bg-gradient-to-b from-slate-50 to-transparent"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-40">
        {/* ─── 1. INDUSTRIAL HEADER ─── */}
        <header className="relative mb-24 max-w-4xl">
          {/* Badge Style Label */}
          <div className="mb-8 inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-5 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            <LayoutPanelLeft size={16} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
              Registry / Project_Catalog_V1
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
            ตัวอย่างผลงาน <br />
            <span className="text-blue-600 underline decoration-slate-900 decoration-[12px] underline-offset-[12px]">
              ที่ใช้งานจริง
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ทุกโปรเจกต์ถูกออกแบบจากโจทย์ธุรกิจจริง เน้นผลลัพธ์ด้านยอดขาย
                ความน่าเชื่อถือ และประสิทธิภาพระดับ{" "}
                <span className="text-slate-900 underline decoration-blue-600/30">
                  Enterprise
                </span>
              </p>
            </div>
            <div className="hidden items-center justify-end md:col-span-4 md:flex">
              {/* Spinning Badge Decor */}
              <div className="h-24 w-24 animate-[spin_10s_linear_infinite] rounded-full border-4 border-dashed border-slate-200 p-2">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-tighter text-slate-300">
                  AEM.DEV
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ─── 2. CATALOG GRID ─── */}
        <div className="relative pb-20">
          <CatalogProjectsGrid
            projects={catalogProjects}
            columns={3}
            showCTA={true}
          />
        </div>

        {/* ─── 3. BOTTOM DECOR ─── */}
        <footer className="mt-20 flex items-center gap-4 border-t-2 border-slate-100 pt-10">
          <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-white">
            <Sparkles size={18} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
```

### `app/(main)/contact/page.tsx`

```ts
/** @format */
import React, { memo } from "react"
import { Metadata } from "next"
import {
  Sparkles,
  MessageCircle,
  ArrowDownRight,
  ShieldCheck,
  Zap,
} from "lucide-react"

// Import Components
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import ContactMap from "./_components/ContactMap"

// ✅ ใช้ shared JsonLd
import JsonLd from "@/components/shared/JsonLd"

import { siteConfig } from "@/config/siteConfig"

/**
 * 🛠️ SEO Optimization: ดึงดูด SME ด้วย Keyword ที่ตรงจุด
 */
export const metadata: Metadata = {
  title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
  description:
    "เริ่มต้นเว็บไซต์ธุรกิจของคุณด้วยระบบวิศวกรรมที่แม่นยำ ปรึกษาฟรีสำหรับ SME และ หจก. คุยง่าย ตรงไปตรงมา งบไม่บานปลาย",
  openGraph: {
    title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
    description:
      "ยินดีให้คำปรึกษาฟรีเหมือนพาร์ทเนอร์สายเทคส่วนตัว เพื่อเว็บไซต์ที่ปิดการขายได้จริง",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "th_TH",
    type: "website",
  },
}

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="LocalBusiness"
        data={{
          name: siteConfig.name,
          description: siteConfig.description,
          phone: siteConfig.contact.tel,
          address: siteConfig.contact.address,
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50 py-24 md:py-40">
        {/* Blueprint Grid Background */}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60"
          aria-hidden="true"
        />
        {/* Cinematic Glow */}
        <div
          className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                Available for New Projects v2025
              </span>
            </div>
            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              เปลี่ยนไอเดียให้เป็น <br />
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
                ผลลัพธ์ที่จับต้องได้
              </span>
```

### `app/(main)/contact/_components/ContactMap.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  MapPin,
  Navigation,
  Map as MapIcon,
  Coffee,
  ArrowUpRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export default function ContactMap() {
  /**
   * 🛠️ แนะนำ: ให้ใช้ Embed URL จาก Google Maps โดยตรง (Share > Embed a map)
   * ตัวอย่างด้านล่างเป็น URL จำลองสำหรับแสดงสไตล์
   */
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.503123456789!2d100.50123456789!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDMwJzA0LjQiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"

  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      id="location"
    >
      {/* ─── INDUSTRIAL BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-30" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-px overflow-hidden border-2 border-brand-navy bg-brand-navy shadow-enterprise-lg lg:grid-cols-12">
            {/* 1. ส่วนข้อมูลที่ตั้ง: BUSINESS INTELLIGENCE (Col-span 5) */}
            <div className="relative flex flex-col justify-between bg-white p-8 md:p-14 lg:col-span-5">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3 border-l-4 border-brand-blue bg-slate-50 px-5 py-2">
                  <MapIcon size={14} className="text-brand-blue" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    Our Workstation
                  </span>
                </div>

                <div className="space-y-8">
                  <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-brand-navy md:text-6xl">
                    แวะมาคุย <br />
                    <span className="text-brand-blue">จิบกาแฟกันครับ</span>
                  </h2>

                  <div className="space-y-4 border-l-2 border-slate-100 pl-6">
                    <p className="text-lg font-bold leading-relaxed text-slate-600">
                      ออฟฟิศของผมตั้งอยู่ที่ <br />
                      <span className="text-brand-navy underline decoration-brand-blue decoration-2 underline-offset-8">
                        {siteConfig.contact.address}
                      </span>
                    </p>
                    <p className="text-[11px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                      * เพื่อการต้อนรับที่ดีที่สุด รบกวนนัดหมายล่วงหน้าครับ
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Block: Sharp & Tactile */}
              <div className="mt-16 space-y-6 border-t-2 border-slate-50 pt-10">
                <div className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brand-navy bg-white text-brand-blue shadow-enterprise-sm transition-transform group-hover:-translate-y-1">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      HQ Coordinates
                    </h4>
                    <p className="text-sm font-black uppercase leading-tight text-brand-navy">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
```

### `app/(main)/services/page.tsx`

```ts
/** @format */
import ServicesPageClient from "./ServicesPageClient"
import { servicesData } from "@/data/servicesData"

export default function ServicesPage() {
  return (
    <>
      {/* ✅ ส่งข้อมูลเข้า Client Component ตามที่ระบุ Type ไว้ */}
      <ServicesPageClient services={servicesData} />
    </>
  )
}
```

### `app/(main)/services/ServicesPageClient.tsx`

```ts
/** @format */
"use client"

import React from "react"
// ✅ Import จาก Path จริง: components/Services.tsx
import { Services } from "@/components/Services"
import { ServiceItem } from "@/types/service"

interface ServicesPageClientProps {
  services: ServiceItem[]
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* ✅ ส่งต่อข้อมูลไปยัง Component ที่มึงตั้งชื่อไว้ */}
        <Services services={services} />
      </div>
    </main>
  )
}
```

### `app/(main)/page.tsx`

```ts
/** @format */
"use client"

import React, { useMemo } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"

// ✅ แก้ไข Path จากเดิมที่ Error (@/data/blogData) เป็น Path ใหม่ที่รวมไฟล์แล้ว
import { blogData } from "@/data/blog/allposts"

import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports ---
const ServicesSection = dynamic(() => import("@/components/Services"), {
  ssr: true,
})
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: true,
})
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: true,
})
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true })

export default function HomePage() {
  /**
   * ✅ Normalization Logic สำหรับ Blog
   * ดึงข้อมูลจาก allposts มากรองเฉพาะบทความล่าสุด
   */
  const featuredPosts = useMemo(() => {
    if (!blogData) return []

    return blogData.slice(0, 4).map((post: any) => {
      const getString = (val: any) => val?.th || val?.en || val || ""
      return {
        ...post,
        title: getString(post.title),
        excerpt: getString(post.excerpt || post.description),
        author:
          typeof post.author === "string"
            ? {
                name: post.author,
                avatar: "/images/profile/default-avatar.webp",
                role: "Team Member",
              }
            : post.author,
        readTime: post.readTime || "5 min read",
      }
    })
  }, [])

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO AREA ─── */}
      <Hero
        badgeText="Digital Architecture for Business"
        headline={
          <div className="leading-[0.85] tracking-tighter">
            BUILD{" "}
            <span className="italic text-blue-600 underline decoration-blue-600/20 underline-offset-8">
              FASTER
            </span>
            ,<br />
            <span className="text-slate-900">SELL BETTER.</span>
          </div>
        }
      />

      {/* ─── 2. SOCIAL PROOF ─── */}
      <div className="relative z-20 -mt-12 border-y-4 border-slate-900 bg-white shadow-[0px_10px_0px_0px_rgba(15,23,42,1)]">
        <div className="container mx-auto px-6 py-10">
          <SocialProof />
        </div>
      </div>

      {/* ─── 3. OUR SERVICES ─── */}
      {/* เรียกก้อนเดียวจบ ไม่ซ้ำซ้อน */}
      <ServicesSection />
```

### `app/(main)/layout.tsx`

```ts
/** @format */
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    // min-h-screen และ flex-col ช่วยให้ Footer ติดล่างเสมอแม้เนื้อหาน้อย
    <div className="relative flex min-h-screen flex-col bg-white font-sans antialiased">
      {/* ─── HEADER ───
          แนะนำให้ใส่ z-index สูงๆ ไว้ใน Header component
          เพื่อไม่ให้โดน Shadow ของตัว Card ในหน้า Services ทับ
      */}
      <Header />

      {/* ─── MAIN CONTENT ───
          1. flex-1: ดัน Footer ลงล่าง
          2. overflow-x-hidden: สำคัญมากสำหรับสไตล์ Neo-Brutalism
             เพราะเงา [8px_8px_0px_0px] มักจะทำให้เกิด Scrollbar แนวนอนโดยไม่ตั้งใจ
      */}
      <main className="relative flex-1 overflow-x-hidden">
        {/* คุณสามารถใส่สีกรอบ หรือ Grid พื้นหลังแบบ Global ได้ที่นี่ */}
        <div
          className="absolute inset-0 z-[-1] opacity-[0.01]"
          style={{ backgroundImage: 'url("/grid.svg")' }}
        />

        {children}
      </main>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  )
}
```

### `app/sitemap.ts`

```ts
/** @format */
import { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
// ✅ แก้ไขจาก @/data/blogData เป็น Path ใหม่ที่รวมไฟล์แล้ว
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"

/**
 * 🛠️ Helper: ตรวจสอบวันที่ให้ปลอดภัยก่อนส่งให้ Sitemap
 */
function getSafeDate(dateStr: string | undefined | null): Date {
  if (!dateStr) return new Date()
  const parsedDate = new Date(dateStr)
  return isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 📂 หน้าหลัก (Static Routes)
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/catalog",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 🚀 หน้า Landing Templates (Dynamic Routes)
  // 📝 แก้ไข: ปรับ Path ให้ตรงกับที่เราคุยกัน (ถ้าคุณใช้ /[template_id] โดยไม่มีคำว่า landing)
  // แต่ถ้าคุณยืนยันจะใช้ /landing/ ก็นำหน้าได้ครับ
  const templateRoutes: MetadataRoute.Sitemap = catalogProjects.map(
    (project) => ({
      url: `${baseUrl}/${project.templateId}`, // หรือ `/landing/${project.templateId}` ตามโครงสร้างโฟลเดอร์จริง
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  )

  // 3. 📝 หน้าบทความ Blog
  // ✅ ระบุ Type ให้ (post: BlogPost) เพื่อแก้ปัญหา Parameter implicitly has an 'any' type
  const blogRoutes: MetadataRoute.Sitemap = (blogData || []).map(
    (post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug || post.id}`,
      lastModified: getSafeDate(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  )

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
```

### `components/Header.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2 } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Catalog", href: "/catalog" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-slate-900 bg-white shadow-[0_4px_0_0_rgba(15,23,42,1)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 transition-transform group-hover:-rotate-6">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
            {siteConfig.name}
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-blue-600 ${
                pathname === item.href ? "text-blue-600" : "text-slate-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-2 border-slate-900 bg-slate-900 px-5 py-2 text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_#2563eb] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="block border-2 border-slate-900 bg-white p-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE NAV: ใช้ key={pathname} เพื่อให้ Component reset ตัวเองเมื่อเปลี่ยนหน้า */}
      {isOpen && (
        <div
          key={pathname}
          className="fixed inset-0 top-[84px] z-40 h-screen w-full bg-white md:hidden"
        >
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // ปิดเมื่อคลิก
                className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
```

### `components/Footer.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import {
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react"

import { siteConfig } from "@/config/siteConfig"
// ✅ แก้ไข: เปลี่ยนจาก Path ที่ Error เป็นการใช้ Type จากศูนย์กลางของข้อมูล
import type { MultiLangText } from "@/data/types"

interface FooterProps {
  data?: {
    name?: string | MultiLangText
    phone?: string
    lineId?: string
    address?: string
    socials?: {
      facebook?: string
      instagram?: string
    }
  }
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // Defensive Logic: ป้องกัน Error หากข้อมูลมาไม่ครบ
  const displayName =
    typeof data?.name === "string"
      ? data.name
      : (data?.name as MultiLangText)?.th ||
        (data?.name as MultiLangText)?.en ||
        siteConfig.name ||
        "AEMDEVWEB"

  return (
    <footer className="border-t-8 border-slate-900 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ─── BRAND IDENTITY ─── */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-block border-4 border-slate-900 bg-blue-600 px-4 py-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
              <span className="text-2xl font-black uppercase italic tracking-tighter text-white">
                {displayName}
              </span>
            </div>
            <p className="max-w-md text-lg font-bold italic leading-relaxed text-slate-500">
              รับออกแบบสถาปัตยกรรมดิจิทัลและพัฒนาเว็บไซต์ที่เน้นผลลัพธ์
              เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วย{" "}
              <span className="font-black text-slate-900 underline decoration-blue-600/30">
                เทคโนโลยีมาตรฐานสากล
              </span>
            </p>

            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: <Facebook size={20} />,
                  href: data?.socials?.facebook || siteConfig.links.facebook,
                },
                {
                  icon: <MessageCircle size={20} />,
                  href: data?.lineId
                    ? `https://line.me/ti/p/~${data.lineId}`
                    : siteConfig.contact.lineUrl,
                },
                {
                  icon: <Mail size={20} />,
                  href: `mailto:${siteConfig.contact.email}`,
                },
              ].map((social, i) => (
                <a
```

### `components/catalog/CatalogProjectCard.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Project } from "@/data/types"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean // ✅ เก็บไว้ใช้ในอนาคตได้ แต่ต้องจัดการในโค้ดให้ถูกต้อง
}

export function CatalogProjectCard({
  project,
  showCTA = true, // ✅ กำหนด Default value
}: CatalogProjectCardProps) {
  return (
    <div className="group relative flex flex-col border-4 border-slate-900 bg-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[15px_15px_0px_0px_#2563eb]">
      {/* 🖼️ IMAGE SECTION */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-slate-900 bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-300 group-hover:bg-slate-900/40 group-hover:opacity-100">
          <Link
            href={`/${project.templateId}`}
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-slate-900"
          >
            Live Preview <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* 📝 CONTENT SECTION */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
          <span className="bg-slate-900 px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white">
            {project.category}
          </span>
          <span className="font-mono text-[10px] font-bold text-slate-400">
            REF: {project.id.split("-").pop()?.toUpperCase()}
          </span>
        </div>

        <h3 className="mb-3 text-2xl font-black uppercase italic leading-tight tracking-tighter text-slate-900">
          {project.title}
        </h3>

        <p className="mb-6 line-clamp-2 text-sm font-bold leading-relaxed text-slate-500">
          {project.description}
        </p>

        {/* STATS / TAGS */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-col">
            {/* ✅ FIX: ใช้ Optional Chaining ป้องกันค่า stats เป็น undefined */}
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              {project.stats?.label || "Type"}
            </span>
            <span className="text-sm font-black text-blue-600">
              {project.stats?.value || "Standard"}
            </span>
          </div>

          {/* ✅ ใช้งาน showCTA เพื่อแก้ปัญหา Unused Variable */}
          {showCTA && (
            <Link
              href={`/${project.templateId}`}
              className="flex h-10 w-10 items-center justify-center border-2 border-slate-900 bg-white transition-colors hover:bg-slate-900 hover:text-white"
            >
              <ArrowUpRight size={20} strokeWidth={3} />
            </Link>
          )}
```

### `components/catalog/CatalogProjectsGrid.tsx`

```ts
/** @format */
"use client"

import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"
import { LayoutDashboard } from "lucide-react"

interface CatalogProjectsGridProps {
  projects: Project[]
  columns?: 2 | 3 | 4
  showCTA?: boolean
}

export function CatalogProjectsGrid({
  projects,
  columns = 3,
  showCTA = true,
}: CatalogProjectsGridProps) {
  // ─── 1. Empty State (Industrial Style) ───
  if (!projects || projects.length === 0) {
    return (
      <div className="group relative flex h-80 flex-col items-center justify-center border-4 border-dashed border-slate-200 bg-slate-50/50 p-12 transition-colors hover:border-blue-600/30">
        {/* Blueprint Corner Decor */}
        <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-slate-200 group-hover:border-blue-600/30" />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-slate-200 group-hover:border-blue-600/30" />

        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(226,232,240,1)]">
          <LayoutDashboard className="h-8 w-8 text-slate-300" />
        </div>

        <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
          No active projects found in registry
        </p>
      </div>
    )
  }

  // ─── 2. Column Logic ───
  // ปรับให้ Tablet (md) เริ่มต้นที่ 2 คอลัมน์เสมอเพื่อความสมดุล
  const gridColsClass = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns]

  return (
    <section className="relative">
      {/* 🛠️ Background Grid: สื่อถึงกระดาษไขเขียนแบบ */}
      <div className="absolute inset-x-0 -bottom-12 -top-12 -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] opacity-60 [background-size:32px_32px]" />

      {/* Grid Container */}
      <div
        className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridColsClass} xl:gap-12`}
      >
        {projects.map((project, index) => (
          <div
            key={project.id || index}
            // เพิ่มจังหวะการเลื่อนขึ้นเล็กน้อย (ถ้าคุณใช้ Framer Motion สามารถเปลี่ยนเป็น motion.div ได้)
            className="duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CatalogProjectCard project={project} showCTA={showCTA} />
          </div>
        ))}
      </div>
    </section>
  )
}
```

### `components/Services.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { LayoutGrid, ArrowUpRight, ArrowRight } from "lucide-react"
import { servicesData } from "@/data/servicesData"
import { iconMap } from "@/components/iconMap"

export default function Services() {
  // กรองเฉพาะบริการที่มีสถานะ READY
  const activeServices = servicesData.filter((s) => s.status === "READY")

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="services"
    >
      {/* ─── BACKGROUND DECOR ─── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{ backgroundImage: 'url("/grid.svg")' }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* ─── SECTION HEADER ─── */}
        <div className="mb-20 flex flex-col items-end justify-between gap-8 border-b-8 border-slate-900 pb-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl text-left">
            <div className="mb-4 inline-flex items-center gap-3 bg-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-white">
              <span className="h-2 w-2 animate-pulse bg-blue-500" />
              AEMDEVWEB / ECOSYSTEM_TRUST_PROTOCOL
            </div>
            <h2 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-7xl">
              Precision <br />
              <span className="text-blue-600">Templates.</span>
            </h2>
            <p className="mt-6 text-lg font-bold italic leading-relaxed text-slate-500">
              โซลูชันเว็บไซต์ที่ถูกปรับจูนมาเพื่ออุตสาหกรรมเฉพาะทาง
              เน้นโครงสร้างที่แข็งแกร่งและประสิทธิภาพที่วัดผลได้จริง
            </p>
          </div>

          <Link
            href="/catalog"
            className="flex h-16 items-center border-4 border-slate-900 px-8 text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-900 hover:text-white"
          >
            <LayoutGrid className="mr-3 h-5 w-5" />
            Explore All Works
          </Link>
        </div>

        {/* ─── SERVICES GRID (Inline Card Logic) ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            const Icon = (iconMap as any)[service.category] || iconMap.STARTER
            const hasPromo = !!service.promoPrice

            return (
              <div
                key={service.id}
                className="group relative flex flex-col border-[3px] border-slate-900 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#2563eb]"
              >
                {/* Technical Bar */}
                <div className="flex items-center justify-between border-b-[3px] border-slate-900 bg-slate-50 px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-slate-300" />
                    <div className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-400">
                    ARCH_TYPE // {service.slug}
                  </span>
                </div>

                <div className="flex flex-grow flex-col p-8">
                  {hasPromo && (
                    <div className="mb-4 self-start bg-[#ff3e3e] px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-white">
                      Limited Offer // Active
                    </div>
                  )}

```

### `components/Hero.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Smartphone,
  Monitor,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

const Hero = ({
  badgeText = "Website Solution สำหรับธุรกิจไทยโดยเฉพาะ",
  headline = (
    <>
      สร้างเว็บไซต์ที่เป็น <br />
      <span className="italic text-blue-600">พนักงานขายเบอร์ 1</span>
    </>
  ),
  description = "เปลี่ยนหน้าเว็บธรรมดาให้เป็นเครื่องมือผลิตยอดขายที่ทำงาน 24 ชั่วโมง ด้วยสถาปัตยกรรมระดับสากลที่โหลดไว มั่นคง และออกแบบมาเพื่อปิดการขายสำหรับ SME โดยเฉพาะ",
  primaryActionText = "เริ่มสร้างโปรเจกต์ของคุณ",
  primaryActionHref = "/services",
  secondaryActionText = "ดูราคาและแพ็กเกจ",
  secondaryActionHref = "/services#pricing",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "aemdevweb digital architecture workspace",
  trustBadges = [
    "High-Performance Speed",
    "สวยเป๊ะทุกหน้าจอมือถือ",
    "โครงสร้างรองรับ Google (SEO)",
  ],
  floatingElement1 = { title: "Mobile Optimized", desc: "สวยงามทุกหน้าจอ" },
  floatingElement2 = { title: "Secure & Stable", desc: "ระบบมั่นคง ปลอดภัย" },
}) => {
  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40">
      {/* ─── 1. ADVANCED BLUEPRINT GRID ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:200px_200px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ─── 2. CONTENT AREA ─── */}
          <div className="space-y-10 lg:col-span-7">
            {/* Brand Badge: Neobrutalism Style */}
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Sparkles size={14} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>

            {/* Headline: Fluid & Powerful */}
            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900">
              {headline}
            </h1>

            {/* Description: High Contrast */}
            <p className="max-w-xl border-l-4 border-blue-600 pl-6 text-base font-bold leading-relaxed text-slate-500 md:text-xl">
              {description}
            </p>

            {/* CTA Buttons: Industrial Interactions */}
            <div className="flex flex-col gap-5 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative h-16 overflow-hidden rounded-none bg-blue-600 px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#0f172a] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
                asChild
              >
                <Link href={primaryActionHref} className="flex items-center">
                  {primaryActionText}
                  <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
```

### `components/About.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import {
  Check,
  Code2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const AboutContent = () => {
  const values = [
    {
      icon: <Code2 className="h-6 w-6 stroke-[1.5]" />,
      title: "เทคโนโลยีระดับสากล",
      description:
        "เลือกใช้เครื่องมือที่เหมาะสมที่สุดกับธุรกิจคุณ (Optimal Tech Stack) เพื่อให้เว็บไซต์โหลดไว ปลอดภัย และพร้อมขยายตัวได้ในระยะยาว",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "คุยง่ายแบบพาร์ทเนอร์",
      description:
        "ผมเชื่อในการสื่อสารที่ตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ไม่ใช้ศัพท์เทคนิคฟุ่มเฟือย เน้นช่วยแก้ปัญหาให้ธุรกิจจริง",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์ที่ใช้งานจริง",
      description:
        "เว็บไซต์ต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือและเปลี่ยนผู้เข้าชมเป็นลูกค้าให้ธุรกิจตลอด 24 ชม.",
    },
  ]

  return (
    <div className="space-y-24 md:space-y-40">
      {/* ─── 1. STORY SECTION ─── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Area: Responsive Border */}
        <div className="relative aspect-[4/5] overflow-hidden border-l-8 border-t-8 border-blue-600 shadow-2xl md:border-l-[16px] md:border-t-[16px] lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-slate-900 px-6 py-4 text-white md:px-8 md:py-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 md:space-y-12 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-2 border-blue-600 pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 md:text-xs">
              <Sparkles size={14} />
              <span>Our Core Philosophy</span>
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.85] tracking-tighter text-slate-900">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-400">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base font-bold leading-relaxed text-slate-500 md:text-xl">
            <p>
              ผมเริ่มต้น{" "}
              <span className="text-slate-900 underline decoration-blue-600/30">
                aemdevweb
              </span>{" "}
              ด้วยแนวคิดที่ต้องการให้ SME ไทย มีเว็บไซต์มาตรฐานสากล
```

### `components/shared/JsonLd.tsx`

```ts
/** @format */
import React from "react"

interface JsonLdProps {
  // รองรับประเภทธุรกิจตามเทมเพลตของ aemdevweb
  type?:
    | "LocalBusiness" // ทั่วไป
    | "MedicalBusiness" // คลินิก
    | "Restaurant" // คาเฟ่/ร้านอาหาร
    | "RealEstateAgent" // อสังหาริมทรัพย์
    | "ProfessionalService" // รับเหมาก่อสร้าง / บริการวิชาชีพ
  data: {
    name: string
    description: string
    url: string
    phone?: string
    address?: string
    image?: string
    priceRange?: string
    socialLinks?: string[] // เพิ่มเพื่อสร้างความน่าเชื่อถือ (SameAs)
  }
}

/**
 * 🛠️ JsonLd Component (Industrial Sharp SEO)
 * ส่วนประกอบสำคัญในการทำให้ Google เข้าใจประเภทธุรกิจของลูกค้า SME
 * ช่วยให้แสดงผลบน Google Maps และ Search Results ได้โดดเด่นขึ้น
 */
const JsonLd: React.FC<JsonLdProps> = ({ type = "LocalBusiness", data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.phone || "",
    image: data.image || "https://www.aemdevweb.com/og-image.png",
    priceRange: data.priceRange || "฿฿", // เปลี่ยนเป็นสัญลักษณ์เงินบาทให้เข้ากับบริบทไทย
    address: data.address
      ? {
          "@type": "PostalAddress",
          streetAddress: data.address,
          addressLocality: "Bangkok", // สามารถปรับ Dynamic ได้ในอนาคต
          addressCountry: "TH",
        }
      : undefined,
    // ช่วยให้ Google เชื่อมโยงเว็บไซต์กับ Social Media ของแบรนด์
    sameAs: data.socialLinks || [
      "https://www.facebook.com/aemdevweb",
      "https://lin.ee/XwdZGsn",
    ],
  }

  return (
    <script
      type="application/ld+json"
      // ป้องกันการ Render ผิดพลาดด้วยการเช็คโครงสร้าง Schema
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default JsonLd
```

### `components/ui/button.tsx`

```ts
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### `components/ui/card.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### `components/ui/badge.tsx`

```ts
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

### `components/ui/label.tsx`

```ts
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

### `components/ui/empty.tsx`

```ts
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
```

### `components/ui/avatar.tsx`

```ts
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

### `components/ui/accordion.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-slate-100", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 text-left text-base font-semibold transition-all hover:text-blue-600 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-slate-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0 leading-relaxed", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

### `components/ui/tabs.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// 1. นำเข้าคอมโพเนนต์พื้นฐานจาก Radix UI
const Tabs = TabsPrimitive.Root

// 2. TabsList: ส่วนแถบเมนูสำหรับเลือก Tab
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// 3. TabsTrigger: ปุ่มสำหรับคลิกเพื่อสลับเนื้อหา
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// 4. TabsContent: ส่วนแสดงเนื้อหาตามที่เลือก
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background duration-300 animate-in fade-in-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// 5. ส่งออกแบบ Named Exports
export { Tabs, TabsList, TabsTrigger, TabsContent }
```

### `components/ui/input.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

### `components/ui/modal.tsx`

```ts
/** @format */

"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Modal = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalPortal = DialogPrimitive.Portal
const ModalClose = DialogPrimitive.Close

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
ModalOverlay.displayName = "ModalOverlay"

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        // ✅ ใช้รูปแบบที่ Tailwind แนะนำเพื่อเลี่ยง Ambiguous Utility Warning
        "data-[state=closed]:slide-out-to-top-&lsqb;48%&rsqb; data-[state=open]:slide-in-from-top-&lsqb;48%&rsqb;",
        "sm:rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-xl opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </ModalPortal>
))
ModalContent.displayName = "ModalContent"

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
ModalHeader.displayName = "ModalHeader"

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
```

### `components/ui/toast.tsx`

```ts
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
```

### `components/ui/dialog.tsx`

```ts
/** @format */
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        // ✅ แก้ไขปัญหา Ambiguous Utility โดยการใช้ค่ามาตรฐาน 50% (1/2) แทน 48%
        // หรือถ้าต้องการ 48% จริงๆ ให้ใช้รูปแบบ &lsqb; และ &rsqb;
        "data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-top-[50%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
```

### `components/ui/select.tsx`

```ts
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
```

### `components/ui/textarea.tsx`

```ts
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
```

### `components/ui/toaster.tsx`

```ts
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

### `components/ui/form.tsx`

```ts
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

```

### `components/iconMap.ts`

```ts
// components/iconMap.ts
import {
  Stethoscope,
  Coffee,
  Home,
  HardHat,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const iconMap = {
  MEDICAL: Stethoscope,
  CAFE: Coffee,
  PROPERTY: Home,
  CONSTRUCTION: HardHat,
  STARTER: Rocket,
  ARROW_RIGHT: ArrowRight,
  CHECK: CheckCircle2,
}
```

### `components/ContactInfo.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Direct Line",
      value: siteConfig.contact.tel,
      href: `tel:${siteConfig.contact.tel.replace(/-/g, "")}`,
      status: "Available Now",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Line Official",
      value: siteConfig.contact.lineId,
      href: siteConfig.contact.lineUrl,
      status: "Fast Response",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Enterprise Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      status: "Official Inquiries",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operation Hours",
      value: "Mon - Sat (09:00 - 18:00)",
      href: null,
      status: "Office Time",
    },
  ]

  return (
    <div className="space-y-12">
      {/* 1. Header Section: Industrial Command */}
      <header className="space-y-6">
        <div className="inline-block border-b-4 border-brand-blue pb-2">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Connection <span className="text-brand-blue">Hub</span>
          </h2>
        </div>
        <p className="text-lg font-bold leading-relaxed text-slate-400">
          ยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ ทักมาคุยรายละเอียดก่อนได้เลยครับ
          ผมพร้อมช่วยวางแผนระบบที่คุ้มค่าที่สุดให้ธุรกิจคุณ
        </p>
      </header>

      {/* 2. Contact Cards Grid: Data Log Style */}
      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-between bg-brand-navy p-6 transition-all hover:bg-white/5"
          >
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-slate-700 bg-slate-800 text-brand-blue transition-transform group-hover:scale-110 group-hover:border-brand-blue group-hover:text-white">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="border border-brand-blue/30 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-brand-blue/60">
```

### `components/ContactForm.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุล"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  phone: z.string().min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
  subject: z.string().min(5, "กรุณาระบุหัวข้อที่ต้องการปรึกษา"),
  message: z.string().min(10, "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร"),
})

type FormValues = z.infer<typeof formSchema>

// ✅ เพิ่ม Interface สำหรับ Props เพื่อรับ templateId
interface ContactFormProps {
  templateId?: string
}

export default function ContactForm({ templateId }: ContactFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsPending(true)
    try {
      // ✅ นำ templateId ไปใช้ร่วมกับข้อมูล (เช่น ส่งไปกับ Metadata ของ Email)
      console.log("Form Values:", { ...values, source: templateId })

      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast({
        title: "ส่งข้อมูลสำเร็จ!",
        description: "ผมได้รับข้อมูลแล้ว จะติดต่อกลับหาคุณโดยเร็วที่สุดครับ",
      })
      form.reset()
    } catch (err) {
      console.error("Submit Error:", err)
      toast({
        variant: "destructive",
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้งครับ",
      })
    } finally {
      setIsPending(false)
    }
  }

  if (isSuccess) {
    return (
```

### `components/CTA.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/siteConfig"
import {
  PhoneCall,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  PenTool,
} from "lucide-react"

interface CTAProps {
  title?: string
  subtitle?: string
  config?: any // รับข้อมูล TemplateData เพื่อแสดง Custom Notice
}

export default function CTA({
  title = "พร้อมยกระดับธุรกิจของคุณ สู่มาตรฐานใหม่หรือยังครับ?",
  subtitle = "ไม่ว่าจะเป็นร้านอาหาร หรือบริษัท หจก. ผมยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ พร้อมช่วยวางแผนให้คุ้มค่ากับงบประมาณที่สุด",
  config,
}: CTAProps) {
  // ดึงข้อมูล Custom Design Notice ถ้ามี
  const customNotice = config?.customDesignNotice

  return (
    <div className="bg-white px-6 py-24 md:py-32">
      <section className="relative mx-auto max-w-7xl overflow-hidden border-4 border-brand-navy bg-brand-navy px-8 py-20 shadow-enterprise-lg md:px-20 md:py-28">
        <div
          className="absolute inset-0 z-0 bg-industrial-grid opacity-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center space-y-14 text-center">
          {/* ✅ CUSTOM DESIGN NOTICE BLOCK */}
          {customNotice && (
            <div className="group relative w-full max-w-3xl border-2 border-dashed border-white/20 bg-white/5 p-8 transition-colors hover:border-brand-blue/50">
              <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 bg-brand-navy px-4">
                <PenTool size={14} className="text-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Bespoke Solution
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-blue">
                  {customNotice.title_th}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-300">
                  {customNotice.description_th}
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase italic tracking-widest text-slate-500 opacity-60">
                    {customNotice.title_en}: {customNotice.description_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-3 border-2 border-brand-blue bg-brand-blue/10 px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(59,130,246,0.3)]">
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">
              Direct Consultation v2.0
            </span>
          </div>

          <header className="max-w-4xl space-y-8">
            <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-white md:text-7xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl border-l-2 border-brand-blue/30 px-6 text-lg font-bold leading-relaxed text-slate-400 md:text-xl">
```

### `components/SocialProof.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { reviews } from "@/data/reviews"
import Image from "next/image"

const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden border-y-[6px] border-slate-900 bg-white py-24 md:py-32"
      id="social-proof"
    >
      {/* ─── BACKGROUND ARCHITECTURE ─── */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-center">
          {/* ─── INFINITE MARQUEE REVIEWS ─── */}
          <div className="relative w-screen overflow-hidden py-10">
            <motion.div
              className="flex w-max gap-8 px-4 will-change-transform"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {/* แนะนำให้ทำ Double ลิสต์เพื่อให้ Marquee ลื่นไหล (Smooth Loop) */}
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  key={`${review.id}-${index}`}
                  className="relative w-[380px] border-4 border-slate-900 bg-white p-10 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
                >
                  <Quote
                    className="absolute right-8 top-8 h-12 w-12 text-slate-50"
                    aria-hidden="true"
                  />

                  <div className="mb-6 flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="mb-10 min-h-[100px] text-base font-bold italic leading-relaxed text-slate-700">
                    "{review.comment}"
                  </blockquote>

                  <div className="flex items-center gap-4 border-t-2 border-slate-100 pt-6">
                    {/* Avatar Container */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100">
                      <Image
                        src={review.avatar}
                        alt={`รีวิวจาก ${review.name}`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <cite className="text-[11px] font-black uppercase not-italic tracking-widest text-slate-900">
                        {review.name}
                      </cite>
                      <span className="mt-1 self-start border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight text-blue-600">
                        {review.businessType}
                      </span>
                    </div>
                  </div>
                </article>
```

### `components/FAQSection.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react"

// ✅ 1. นิยามตัวแปร Default เพื่อป้องกัน Error no-undef
const defaultFaqs = [
  {
    question: "ใช้เวลาทำนานไหม กว่าจะได้เว็บไซต์?",
    answer:
      "สำหรับ Landing Page หน้าเดียว ใช้เวลาประมาณ 3-7 วันทำการครับ ส่วนเว็บไซต์บริษัท (3-5 หน้า) จะใช้เวลาประมาณ 10-14 วัน ขึ้นอยู่กับการเตรียมข้อมูลของคุณเป็นหลักครับ ผมเน้นงานไวแต่ต้องเป๊ะครับ",
  },
  {
    question: "มีค่าบริการรายปีเพิ่มเติมไหม?",
    answer:
      "ปีแรกผมดูแลค่า Hosting และ SSL ให้ฟรีครับ ปีถัดไปจะมีค่าต่ออายุโดเมนและพื้นที่เว็บ เริ่มต้นประมาณ 1,500 - 2,500 บาทต่อปี ตามขนาดเว็บครับ ไม่มีค่าบริการแอบแฝงแน่นอน",
  },
  {
    question: "ทำแล้วจะติดหน้าแรก Google (SEO) หรือเปล่า?",
    answer:
      "ผมวางโครงสร้างเว็บตามมาตรฐาน SEO 100% ครับ ทั้งความเร็วและการจัดวาง Tag ต่างๆ ซึ่งจะช่วยให้ Google เข้ามาเก็บข้อมูลได้ง่ายขึ้น",
  },
  {
    question: "ถ้าต้องการแก้ไขข้อมูลเองในอนาคต ทำได้ไหม?",
    answer:
      "ทำได้แน่นอนครับ! ผมมีคลิปวิดีโอสอนใช้งานเบื้องต้นส่งให้ด้วยครับ ไม่ต้องกลัวงง",
  },
]

// ✅ 2. นิยาม Interface สำหรับ Props
interface FAQSectionProps {
  config?: any
}

const FAQSection = ({ config }: FAQSectionProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  // ✅ 3. ใช้ requestAnimationFrame เพื่อเลี่ยง Cascading Render (React 19 Safe)
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setHasMounted(true)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  const displayFaqs = config?.faqs
    ? config.faqs.map((f: any) => ({ question: f.q_th, answer: f.a_th }))
    : defaultFaqs

  const primaryColor = config?.primaryColor || "#2563eb"

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
    >
      {/* ─── BACKGROUND DECOR ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div
        className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          {/* ─── LEFT: STRATEGIC HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 border-l-4 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
```

### `components/BlogSection.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BlogPost } from "@/types/blog"

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug || post.id}`}
          className="group relative flex flex-col border-4 border-slate-900 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#2563eb]"
        >
          {/* 🖼️ IMAGE CONTAINER */}
          <div className="relative mb-6 aspect-video overflow-hidden border-2 border-slate-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          {/* 🏷️ META INFORMATION */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              {post.category}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              {post.date}
            </span>
          </div>

          {/* 📝 TITLE & DESCRIPTION */}
          <h3 className="mb-4 text-2xl font-black uppercase italic leading-tight tracking-tighter text-slate-900 group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="mb-8 line-clamp-2 text-sm font-bold text-slate-500">
            {post.description}
          </p>

          {/* 👤 FOOTER: AUTHOR & ACTION */}
          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-slate-900 bg-slate-100">
                {/* ✅ FIX: Type Guarding สำหรับ Author Object */}
                {typeof post.author !== "string" ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-[8px]">
                    N/A
                  </div>
                )}
              </div>
              <span className="text-[10px] font-black uppercase">
                {typeof post.author === "string"
                  ? post.author
                  : post.author.name}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase italic text-slate-900 group-hover:text-blue-600">
              READ_MORE <ArrowRight size={14} strokeWidth={3} />
            </div>
          </div>
        </Link>
      ))}
    </div>
```

### `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `lib/api.ts`

```ts
/** @format */
import { blogData } from "@/data/blog/allposts" // ✅ แก้ Path ให้ตรง
import { BlogPost } from "@/types/blog"

export function getAllPosts(): BlogPost[] {
  return blogData
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  // ✅ ระบุ Type (p: BlogPost) เพื่อแก้ปัญหา Parameter implicitly has an 'any' type
  return blogData.find((p: BlogPost) => p.slug === slug)
}
```

### `lib/helpers.ts`

```ts
/**
 * lib/helpers.ts
 * รวมฟังก์ชันอรรถประโยชน์ (Utility Functions) สำหรับโปรเจกต์ aemdevweb
 */

/**
 * 1. ฟังก์ชันสำหรับรวม Tailwind Classes (คล้ายกับ clsx หรือ tailwind-merge)
 * ช่วยให้การจัดการเงื่อนไขของ Class ทำได้สะอาดขึ้น
 */
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(" ")
}

/**
 * 2. ฟังก์ชันสำหรับจัดการแสดงผลวันที่ให้เป็นรูปแบบไทย
 * เพิ่มการตรวจสอบความถูกต้องของ Date เพื่อป้องกัน Runtime Error
 */
export const formatDate = (dateString: string | Date): string => {
  if (!dateString) return "-"

  try {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString

    // ตรวจสอบว่าเป็น Invalid Date หรือไม่
    if (isNaN(date.getTime())) return String(dateString)

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    return date.toLocaleDateString("th-TH", options)
  } catch (error) {
    console.error("Format Date Error:", error)
    return String(dateString)
  }
}

/**
 * 3. ฟังก์ชันสำหรับตัดข้อความ (Truncate)
 * ปรับปรุงให้รองรับกรณีค่าที่ส่งมาไม่ใช่ String
 */
export const truncateText = (
  text: string | undefined | null,
  length: number
): string => {
  if (!text) return ""
  if (text.length <= length) return text
  return text.substring(0, length).trim() + "..."
}

/**
 * 4. ฟังก์ชันสำหรับการทำ Smooth Scroll
 * เพิ่ม Offset เพื่อไม่ให้หัวข้อโดน Header ทับ (กรณีมี Sticky Header)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * 5. ฟังก์ชันสำหรับสร้าง ID แบบสุ่ม
 * ใช้ค่าเวลาผสมเพื่อลดโอกาสซ้ำ (Collision)
 */
export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 6. ฟังก์ชันสำหรับจัดหมวดหมู่ Portfolio (Helper เฉพาะทาง)
```

### `lib/supabase.ts`

```ts
/** @format */
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * 🛠️ การสร้าง Supabase Client แบบ Singleton
 * ตรวจสอบค่า ENV เพื่อไม่ให้ Build ล่มเมื่อค่าเหล่านี้หายไปในช่วง Compile
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any) // หรือคืนค่า mock object เพื่อให้ TypeScript ไม่ฟ้อง

// สำหรับกรณีใช้ใน Server Action หรือ API Route (Service Role)
export const getSupabaseAdmin = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceKey) {
    return null
  }
  return createClient(supabaseUrl, serviceKey)
}
```

- Total code files: **62**
- Previewed: **62**
- Auth/Role logic: **9**
- Absolute imports: **46**

## 🗄️ JSON Validation

> JSON validity: **100%**

## 📄 CSV Preview

> CSV readable: **100%**

## 🎯 Project Intent Detection
