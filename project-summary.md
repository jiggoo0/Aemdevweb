# 📑 Project Summary Report

_Generated on Sun Dec 28 01:57:50 +07 2025_

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
│   └── page.tsx
├── (marketing)
│   └── [template_id]
│   ├── \_config
│   │   └── registry.ts
│   ├── \_templates
│   │   ├── WoodBusiness
│   │   ├── cafe
│   │   ├── clinic
│   │   ├── construction
│   │   ├── realestate
│   │   └── starter
│   ├── contact
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── services
│   └── page.tsx
├── api
│   └── contact
│   └── route.ts
├── apple-touch-icon.png
├── favicon.ico
├── globals.css
├── layout.tsx
├── loading.tsx
├── robots.txt
└── sitemap.ts

23 directories, 23 files

#### Metadata (file | size | sha1)

- app/layout.tsx | 3506b | sha1:4a1b544bddf688cf43d2244be982da94dbbb4e38
- app/(marketing)/[template_id]/\_templates/cafe/CafeTemplate.tsx | 2371b | sha1:41a6f70c291d14093663b49cf54803cce6116572
- app/(marketing)/[template_id]/\_templates/cafe/CafeStyle.module.css | 3011b | sha1:c9ec81ba23f7fec8ae048a0e8e8ff5aa652b0f87
- app/(marketing)/[template_id]/\_templates/cafe/config.ts | 4424b | sha1:2662174f919d114b111758f859d4b25c5f8c8a1b
- app/(marketing)/[template_id]/\_templates/WoodBusiness/WoodBusinessTemplate.tsx | 3957b | sha1:f86c218e354f14fb8666a4926db1bd2a56fb5301
- app/(marketing)/[template_id]/\_templates/WoodBusiness/WoodStyle.module.css | 3172b | sha1:50c17bea63c3835bb1b52299ecc704002a3dd769
- app/(marketing)/[template_id]/\_templates/WoodBusiness/config.ts | 6584b | sha1:94c69a96136cde0a9001442d855bea2e7b8af23c
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/Header.tsx | 6490b | sha1:b9517c88f9e4702354c21f8fa14dbbf06fe43642
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/FeaturesSection.tsx | 4335b | sha1:dfb2e5bb65be0999aaa016ce95edba8cfd3cdb25
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/PerformanceSection.tsx | 4066b | sha1:450998dddaef08f1ab547cb4761c6a014d137d4a
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/HeroSection.tsx | 6146b | sha1:5d0a914cb8b3db57721b7a0a5a73817c2a8f5a28
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/CartSection.tsx | 6341b | sha1:b0196e363073614023ca633c14be5e635ee61db2
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/FAQSection.tsx | 6721b | sha1:c7448f4e3c1e5d9bd7020f441c69be3896b6ddb3
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/Footer.tsx | 7224b | sha1:ae05cfebb36457eb53d9c1392f21b4a3d1391c71
- app/(marketing)/[template_id]/\_templates/WoodBusiness/components/SuccessSection.tsx | 4869b | sha1:4c7ad014fbfdfeddaf4ef1f53cb5e4d3c1beed3d
- app/(marketing)/[template_id]/\_templates/realestate/RealEstateTemplate.tsx | 6502b | sha1:ea55273770f57e6d0fb91c6c5e141520c765bdb9
- app/(marketing)/[template_id]/\_templates/realestate/RealEstateStyle.module.css | 1648b | sha1:a19e6b481f1e018ab95e4579b8d41ca6aeacac26
- app/(marketing)/[template_id]/\_templates/realestate/config.ts | 6606b | sha1:3c5bf22d529f5272ecf6f38e5f3d4cac82757d7a
- app/(marketing)/[template_id]/\_templates/construction/ConstructionTemplate.tsx | 5953b | sha1:82886920d7c461e153667a9a2c4f9dbf774c5f3f
- app/(marketing)/[template_id]/\_templates/construction/ConstructionStyle.module.css | 1408b | sha1:7dd705a5b5f8fc7aa29199c560bfb0a303ecb048
- app/(marketing)/[template_id]/\_templates/construction/config.ts | 7209b | sha1:823799d5494bea40fa50551d2484e6b06f36920e
- app/(marketing)/[template_id]/\_templates/starter/StarterTemplate.tsx | 3373b | sha1:d67314c1fda2b48703d2d118659a9b96f4ed1fe7
- app/(marketing)/[template_id]/\_templates/starter/StarterStyle.module.css | 5158b | sha1:c5ccff1ba315f024fdb4cb09939eab9a9348f128
- app/(marketing)/[template_id]/\_templates/starter/config.ts | 5577b | sha1:c5f06f9f76fe359af983b91789f3c1fc78653561
- app/(marketing)/[template_id]/\_templates/starter/components/Header.tsx | 6395b | sha1:25d0b3165dda0900232355cda124a78596685cea
- app/(marketing)/[template_id]/\_templates/starter/components/HeroSection.tsx | 5589b | sha1:c63d17c92554fbee2eab9e8e7ca04bd9f5fe0ab9
- app/(marketing)/[template_id]/\_templates/starter/components/FeaturesSection.tsx | 2642b | sha1:b0828885dcf1328d73a26564b770daf5ce1c8ab8
- app/(marketing)/[template_id]/\_templates/starter/components/GuaranteeSection.tsx | 3474b | sha1:dc55fa693c20b8dab3d4aa78dbf4529f4fc06e56
- app/(marketing)/[template_id]/\_templates/starter/components/PerformanceSection.tsx | 3879b | sha1:2b4d6615c4bc08a08df6745e62a68dac7d1b10db
- app/(marketing)/[template_id]/\_templates/starter/components/Footer.tsx | 7764b | sha1:44b9d9436fbf6cb9041a6a70228810cb7ee19a71
- app/(marketing)/[template_id]/\_templates/starter/components/CartSection.tsx | 5103b | sha1:64b67bbfe87314d88b49e47924b219f54a928482
- app/(marketing)/[template_id]/\_templates/starter/components/FAQSection.tsx | 4995b | sha1:30c35f9dfe64815eef898959be4eb3221e99de87
- app/(marketing)/[template_id]/\_templates/starter/components/SuccessSection.tsx | 4457b | sha1:3be7139a32b678bcb1e7911d6f2ca191720699df
- app/(marketing)/[template_id]/\_templates/clinic/ClinicTemplate.tsx | 5187b | sha1:75e99225e778900839b5c115d775602359e7133d
- app/(marketing)/[template_id]/\_templates/clinic/ClinicStyle.module.css | 1410b | sha1:850c1a594d25e951977e0495cb3437eebe49c8d9
- app/(marketing)/[template_id]/\_templates/clinic/config.ts | 4380b | sha1:00d97054be911a912cf906e110af74335c647e37
- app/(marketing)/[template_id]/page.tsx | 3034b | sha1:566334971cec9e5c4c9816a02eaf19ad648c1cc4
- app/(marketing)/[template_id]/layout.tsx | 668b | sha1:1776d8607f2cd485ea86dbf3a7c6d21a42a1c64b
- app/(marketing)/[template_id]/\_config/registry.ts | 2556b | sha1:9132cce96174332474ac0486645d108d930b40d4
- app/(marketing)/[template_id]/services/page.tsx | 4468b | sha1:fbc3747c6580ff3378949bcf7b2cca8076995738
- app/(marketing)/[template_id]/contact/page.tsx | 7073b | sha1:43f467c3a56d024b82128111fa029b5243ddd870
- app/loading.tsx | 4161b | sha1:30e18187622b23da3ae37d5debb335058fb47dc5
- app/apple-touch-icon.png | 194522b | sha1:6e91e3cfc9327f26b55a992b403b6560ddbd353c
- app/globals.css | 2601b | sha1:b5e0d537d90ab16683decd0fa1d54bf4e532943b
- app/api/contact/route.ts | 2313b | sha1:ad7395a8f89f2a2f55ebb119f618393bf8d024a6
- app/(main)/about/page.tsx | 8866b | sha1:4c059128edbf1dcce64ad3d4f3525cf2e4f003f8
- app/(main)/blog/[slug]/page.tsx | 8193b | sha1:dff734861744fae9e02df43977e9f0b4a29579f8
- app/(main)/blog/page.tsx | 7018b | sha1:cfc0c642a8244b7f2c83825c5981776f2fdf1e25
- app/(main)/blog/loading.tsx | 4161b | sha1:30e18187622b23da3ae37d5debb335058fb47dc5
- app/(main)/catalog/page.tsx | 6166b | sha1:09cac5d593c921303295819a419949364f52ae9b
- app/(main)/contact/page.tsx | 11942b | sha1:dd02a659f6721ec6cf4b2f3d9a727a7d246af08a
- app/(main)/contact/\_components/ContactMap.tsx | 7467b | sha1:df7df844fbac3d7baf4bbe34a636d12be5ece81e
- app/(main)/services/page.tsx | 9500b | sha1:3044df1f4947363baaf90a23a9d21588f0b242a5
- app/(main)/page.tsx | 9340b | sha1:48ab222760cc004714b7d752e2f9f4ace6ea1773
- app/(main)/layout.tsx | 3305b | sha1:6135a4012e275625fa7c0a2ceecbf97ad861f554
- app/sitemap.ts | 1970b | sha1:0116a7b04a8882dc3c1036a4965535d615fec136
- app/robots.txt | 70b | sha1:98896dad3ec15b2ca1b7fe72e65bae71d23c7475
- app/favicon.ico | 194522b | sha1:6e91e3cfc9327f26b55a992b403b6560ddbd353c

### components

components
├── BlogSection.tsx
├── CTA.tsx
├── ContactForm.tsx
├── ContactInfo.tsx
├── FAQSection.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── PricingSection.tsx
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

- components/Header.tsx | 6146b | sha1:c2c8977f9214f733773afa84717704c9d9226515
- components/Footer.tsx | 8920b | sha1:7fb4abb221df0a4518709119f04e7c1b05d53a8b
- components/catalog/CatalogProjectCard.tsx | 5155b | sha1:dc7e5a32a73b58d57b50c6c3404e1046697e35c5
- components/catalog/CatalogProjectsGrid.tsx | 4503b | sha1:cf669d1b212e90cfb5d6ce09298561d4a17c0ea0
- components/Services.tsx | 8405b | sha1:500dd5651f7b71a36d2da25134fb6e8fd91154d3
- components/Hero.tsx | 8026b | sha1:b5fb49db7d39f2f1e2854ffd043f9a6c8ac0bb01
- components/shared/JsonLd.tsx | 767b | sha1:3452647409918e00538559e10276662001c441f6
- components/ui/button.tsx | 2702b | sha1:85a9b20001d58465f4027ebcbb389a60644f70a8
- components/ui/card.tsx | 1828b | sha1:e684fece98288a2c3c177fd5df9a92748a38c3ca
- components/ui/badge.tsx | 1144b | sha1:4255f9fbc9862219d16be2ac566b2f65af92294e
- components/ui/label.tsx | 724b | sha1:c40f1bfdae352eab497210cedf32d113c0855143
- components/ui/empty.tsx | 2396b | sha1:21edbf649d861f24cb259552918cd2f1c22e48fb
- components/ui/avatar.tsx | 1419b | sha1:12b874ba34f8cb795f7ee75b4bf79c47a57a7a63
- components/ui/accordion.tsx | 2087b | sha1:2442d2db0343ff2a16fd8843de59c5afdae230cb
- components/ui/tabs.tsx | 2384b | sha1:df5fc8c82e2c100a79f4b90f7509fdcbd25fe56b
- components/ui/input.tsx | 768b | sha1:445b6918b9fecce250f61b404c9871fe15d81a6a
- components/ui/modal.tsx | 3989b | sha1:981f21648df23793b3655c24769020baf04161eb
- components/ui/toast.tsx | 4832b | sha1:78583eb0ce3b321f0895298ba30978e83edeec98
- components/ui/dialog.tsx | 4196b | sha1:471fc1850d8d97d43ed8ecea8b81874fc13dfaae
- components/ui/select.tsx | 5745b | sha1:6deb3bf13be67e85fc6f04e9edf8ad9a1de9d3d2
- components/ui/textarea.tsx | 649b | sha1:955ab0ff3e147bcb3632c224dd22b64c8e7ac4f2
- components/ui/toaster.tsx | 786b | sha1:fdc46a5e17cdbe9102e35848126f606e6ff6bc91
- components/ui/form.tsx | 4191b | sha1:eb8cacdf9f93a7921d1b6f4631245ff54ee158fd
- components/iconMap.ts | 320b | sha1:cf1db53e9073c95efeca033ed6e29dfe50d40673
- components/ContactInfo.tsx | 7635b | sha1:f727b079845708f8d4990292003af5d4d4a7849e
- components/ContactForm.tsx | 9819b | sha1:1478bbfd43bd05975b1b5a1c87b408fb2d63576d
- components/CTA.tsx | 7740b | sha1:d056c663500715f4232531404837c9f58496702b
- components/PricingSection.tsx | 7609b | sha1:cedde27799a70fbb8d8562c7a6c46b0f06589a1c
- components/SocialProof.tsx | 6452b | sha1:18585eb78c78aeedfb61b40bb6643503a36deff2
- components/FAQSection.tsx | 8376b | sha1:31443293211dd5727084acd0760c4c4952616f06
- components/BlogSection.tsx | 4382b | sha1:4d770163bfe5181e58e3e2aefbd4e2a8d52c09f0

### lib

lib
├── api.ts
├── helpers.ts
├── supabase.ts
└── utils.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- lib/utils.ts | 281b | sha1:641fa21978a85219059d527f9bc2280b7a0ca531
- lib/api.ts | 457b | sha1:ba386cfe8e8843a602c0b958d77f5c15d387b141
- lib/helpers.ts | 3381b | sha1:3b509d447b9e785c50b4cb34ba51dfd046cc4309
- lib/supabase.ts | 987b | sha1:714a4067d19c464152a877de911c306450c31ac8

### public

public
├── apple-touch-icon.png
├── grid.svg
├── images
│   ├── badge.svg
│   ├── feature.svg
│   ├── hero.svg
│   ├── line-qr.png
│   ├── performance.svg
│   ├── portfolio
│   │   ├── corporate-1.webp
│   │   ├── default-avatar.webp
│   │   ├── restaurant-1.webp
│   │   └── sme-1.webp
│   ├── profile
│   │   └── default-avatar.webp
│   └── svg
│   ├── guarantee-badge.svg
│   ├── mobile.svg
│   ├── performance.svg
│   └── speed.svg
└── og-image.png

5 directories, 17 files

#### Metadata (file | size | sha1)

- public/images/badge.svg | 268b | sha1:a9e5622c6b62a32f167a217ee1f83562fcb19b30
- public/images/feature.svg | 262b | sha1:d70720661f9d8fdf8dc4d98caa66c9134b5261de
- public/images/svg/guarantee-badge.svg | 296b | sha1:65e9dce2b6adea290cebbaa54984c220818e7654
- public/images/svg/speed.svg | 340b | sha1:12e081a97a5203b9911896b3f950d7ee5899d10f
- public/images/svg/mobile.svg | 280b | sha1:74982c85c6b91fc7a81a0b5a5adb988f45deedae
- public/images/svg/performance.svg | 592b | sha1:33f4faf55a6f1cee5cd1253f8e9c58b6a5143aea
- public/images/profile/default-avatar.webp | 4351b | sha1:f3f3438414e699035d448859a6d6b1ae0b9750ae
- public/images/portfolio/restaurant-1.webp | 22797b | sha1:0c491e38af3e3f47260ae7973e1610e6880bfba0
- public/images/portfolio/sme-1.webp | 27619b | sha1:48b1014ff6b99454b6ac68372ecaf0b04154fdcd
- public/images/portfolio/default-avatar.webp | 5586b | sha1:97038bafeb268c23a6ec0e9695a9eea18a457731
- public/images/portfolio/corporate-1.webp | 44174b | sha1:9b0f4099faf3cb115d393a8b9c8c2f63f81efa06
- public/images/hero.svg | 380b | sha1:b8272591dbda15ef657c67a221609610190a6854
- public/images/performance.svg | 360b | sha1:a59e672a3d175a70b48c96345bc6c8bd3455fd04
- public/images/line-qr.png | 30399b | sha1:0401f40265b1bbfbd7e97679c518691d768bd224
- public/og-image.png | 132909b | sha1:7102561a00e219c617ff0ddd2fd0c094ffd49782
- public/grid.svg | 185b | sha1:71a836ea40052f09230c3f3cef63c47e4703f0b1
- public/apple-touch-icon.png | 194522b | sha1:6e91e3cfc9327f26b55a992b403b6560ddbd353c

### scripts

scripts
└── dev
├── project-summary.sh
└── tree-projects.sh

2 directories, 2 files

#### Metadata (file | size | sha1)

- scripts/dev/project-summary.sh | 7551b | sha1:56b30ca598ca62a3983fda302a6e2ffed9864927
- scripts/dev/tree-projects.sh | 862b | sha1:6de4d4cefa660072eaf34961340437a16836bbca

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

- data/servicesData.ts | 7401b | sha1:742fe767bb35b0aa0aae4f1f7d648a832f823756
- data/types.ts | 2191b | sha1:022669eecbec9d7d3130188713007d53a0990e9c
- data/reviews.ts | 4093b | sha1:ac2064dcad2796c1ea3eb43b14e846bf2ea5ff76
- data/blog/post1.ts | 2745b | sha1:7901975e147719156fa9a06caa39f230a3e2ce8a
- data/blog/post2.ts | 3937b | sha1:115e9eed10aeef30d9413e0d670f67a2d0015e54
- data/blog/post3.ts | 4171b | sha1:cc93810075646594519d3ee96e2ccfae953ad9a9
- data/blog/post4.ts | 4539b | sha1:9a9f2c5cd0d40ae9fb612603a4a876c3c5b0efd4
- data/blog/allposts.ts | 700b | sha1:d570729c0b799c8c30b589da625fb12e445769f8
- data/catalog.projects.ts | 7122b | sha1:38f8580a7dcf7b0120b12a265446fce164e230fb

### hooks

hooks
└── use-toast.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- hooks/use-toast.ts | 4403b | sha1:698e618d13b107e52b459aaaf0690108ef2aceeb

### config

config
└── siteConfig.ts

1 directory, 1 file

#### Metadata (file | size | sha1)

- config/siteConfig.ts | 6363b | sha1:c8c7967a46658cde2768a292fe01d702e194c9ae

### types

types
├── blog.ts
├── index.ts
├── review.ts
└── services.ts

1 directory, 4 files

#### Metadata (file | size | sha1)

- types/blog.ts | 1715b | sha1:11b848e846b07cfc350e48826d300f184992d2da
- types/services.ts | 1726b | sha1:2bba7371df6009fecbe9a5b3978b0c933d175386
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

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Color Tokens: นิยามสีหลักสไตล์ AEM Architecture
      colors: {
        brand: {
          navy: "#0F172A", // Deep Navy (Base)
          blue: "#1E3A8A", // Brand Blue (Signature)
          orange: "#F97316", // Vibrant Orange (Call to Action)
          slate: "#64748B", // Technical Slate
          gold: "#D4AF37", // Premium Accent
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        background: "#FFFFFF",
        surface: "#F9FAFB",
        border: "#E5E7EB",
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
        accent: "#F97316",
      },

      // 🔤 Typography Tokens: กำหนดฟอนต์ที่ใช้ในโปรเจกต์
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
        heading: ["var(--font-kanit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["3rem", { lineHeight: "1" }],
        "display-lg": ["2.25rem", { lineHeight: "1.1" }],
        "display-md": ["1.75rem", { lineHeight: "1.2" }],
        h1: ["2rem", { lineHeight: "1.3" }],
        h2: ["1.5rem", { lineHeight: "1.4" }],
        h3: ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.4" }],
        tiny: ["0.75rem", { lineHeight: "1.3" }],
      },

      // 📐 Spacing Tokens: ระยะห่างมาตรฐานระบบ Grid
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },

      // 🟦 Radius Tokens: ความมนของขอบ (Card & Button เป็น 0 ตามสไตล์ Brutalist)
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        full: "9999px",
        card: "0",
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
      "@/content/*": ["content/*"],
      "@/*": ["*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "config/**/*.ts",
    "content/**/*.ts"
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
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
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
      {
        protocol: "https",
        hostname: "picsum.photos", // ✅ เพิ่มบรรทัดนี้
        pathname: "/**",
      },
    ],
  },

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
import type { Metadata, Viewport } from "next"
import { Kanit, Prompt, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

// 🔤 1. Font Configurations
// Kanit: ใช้สำหรับ Headings (สไตล์ Brutalist ที่เน้นความหนาและทรงพลัง)
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
})

// Prompt: ใช้สำหรับ Body Text (เน้นการอ่านง่าย สบายตา)
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
})

// JetBrains Mono: ใช้สำหรับตัวเลขหรือโค้ด (เน้นความรู้สึก Technical/Engineering)
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

// 📱 2. Viewport Settings
export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ User Zoom ได้เพื่อ Accessibility
}

// 🔍 3. SEO Metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "รับทำเว็บไซต์",
    "SME",
    "Landing Page",
    "Next.js",
    "React",
    "AEMDEVWEB",
    "ทำเว็บติดหน้าแรก",
    "สถาปัตยกรรมดิจิทัล",
  ],
  authors: [{ name: "AEMDEVWEB Team", url: siteConfig.url }],
  creator: "AEMDEVWEB",
  publisher: "AEMDEVWEB",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
```

### `app/(marketing)/[template_id]/_templates/cafe/CafeTemplate.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Image from "next/image"
import styles from "./CafeStyle.module.css"

export default function CafeTemplate({ data }: { data: any }) {
  // ดึง content ออกมา ถ้าไม่มี data ให้ใช้ object ว่างป้องกันหน้าขาว
  const content = data?.content || {}

  return (
    <div className={styles.wrapper}>
      {/* HERO_SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {content.heroTitle || "CAFE_COLLECTION"}
          </h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <button className={styles.ctaButton}>ORDER_NOW</button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.circleBadge}>EST.2025</div>
        </div>
      </section>

      {/* FEATURE_GRID */}
      <section className={styles.featureGrid}>
        {content.features?.map((item: any) => (
          <div key={item.id} className={styles.featureCard}>
            <span className={styles.featureLabel}>LOG_0{item.id}</span>
            <h3 className={styles.featureTitle}>{item.label}</h3>
            <p className={styles.featureDetail}>{item.detail}</p>
          </div>
        ))}
      </section>

      {/* MENU_SECTION */}
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>MENU_MATRIX</h2>
        <div className={styles.menuGrid}>
          {content.menuItems?.map((item: any) => (
            <div key={item.id} className={styles.menuItem}>
              <div className={styles.imageBox}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  unoptimized
                  className={styles.img}
                />
              </div>
              <div className={styles.menuText}>
                <div className={styles.menuHeader}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </div>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

### `app/(marketing)/[template_id]/_templates/cafe/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🏗️ CAFE CONFIGURATION (NAMED EXPORT)
// Path: app/(marketing)/[template_id]/_templates/cafe/config.ts
// Fix: Added explicit named export to resolve import errors
// ----------------------------------------------------

export const cafeConfig = {
  id: "template-cafe-industrial",
  name: "THE SOURCE ROASTERS",
  themeColor: "#1e3932", // Deep Forest Green
  secondaryColor: "#d4e9e2", // Mint Cream

  metadata: {
    title: "The Source Roasters | Premium Cafe Template by AEMDEVWEB",
    description:
      "ยกระดับร้านกาแฟของคุณด้วยระบบเว็บไซต์ Digital Menu สไตล์ Industrial Modern โหลดไว พร้อมระบบสะสมแต้ม",
    ogImage:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/og-image.jpg",
  },

  content: {
    // --- Hero Section ---
    heroTitle: "CRAFTED_FOR_PERFECTION",
    heroSubtitle:
      "ประสบการณ์กาแฟระดับ Specialty ในบรรยากาศ Industrial Modern ที่ออกแบบมาเพื่อคุณ",

    // --- Value Propositions ---
    features: [
      {
        id: 1,
        label: "DIRECT_TRADE_BEANS",
        detail: "เมล็ดกาแฟคัดพิเศษส่งตรงจากเกษตรกรไทยและแหล่งปลูกระดับโลก",
      },
      {
        id: 2,
        label: "ARTISAN_ROASTERY",
        detail:
          "คั่วสดใหม่ในโรงคั่วของเราเอง ควบคุมโปรไฟล์รสชาติด้วยระบบดิจิทัล",
      },
      {
        id: 3,
        label: "CO-CREATIVE_SPACE",
        detail:
          "พื้นที่กว้างขวาง ปลั๊กไฟครบครัน รองรับทั้งการพักผ่อนและการทำงาน",
      },
    ],

    // --- Digital Menu Mockup ---
    menuItems: [
      {
        id: "1",
        name: "SIGNATURE_ESPRESSO",
        price: "120",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/espresso.webp",
        desc: "กาแฟคั่วเข้ม Body หนักแน่น พร้อม Notes ของ Dark Chocolate และ Caramelized",
      },
      {
        id: "2",
        name: "DIRTY_SOUL",
        price: "155",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/dirty.webp",
        desc: "กาแฟสกัดเข้มข้น On-top บนนมเย็นจัดสูตรลับเฉพาะ ให้สัมผัสแยกชั้นที่กลมกล่อม",
      },
      {
        id: "3",
        name: "VELVET_LATTE",
        price: "145",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/latte.webp",
        desc: "สัมผัสนุ่มละมุนดุจผ้ากำมะหยี่ จากนมคุณภาพเยี่ยมและกาแฟคั่วกลาง (Medium Roast)",
      },
    ],

    // --- Services & CRM (Upsell Features) ---
    memberBenefits: [
      "ระบบสมาชิกดิจิทัล สะสมแต้มง่ายๆ ผ่านเบอร์โทรศัพท์",
      "สิทธิพิเศษวันเกิด รับส่วนลดพิเศษอัตโนมัติ",
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/WoodBusinessTemplate.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS TEMPLATE (SUKHOTHAI EDITION)
// Identity: โรงไม้แปรรูป & วัสดุก่อสร้าง (โครงสร้างระดับโปร)
// Function: จัดการเลย์เอาต์หลักและดึงข้อมูลจาก Config มาแสดงผล
// ----------------------------------------------------

"use client"

import React from "react"
import styles from "./WoodStyle.module.css"

// นำเข้า Components จากโฟลเดอร์ภายใน (Refactored Names)
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

interface WoodBusinessTemplateProps {
  data: any // รับข้อมูลจาก config.ts
}

export default function WoodBusinessTemplate({
  data,
}: WoodBusinessTemplateProps) {
  // Safe Destructuring: ป้องกัน Error หากข้อมูลบางส่วนหายไป
  // โดยดึงข้อมูลจาก config.ts ที่เราตั้งค่าไว้สำหรับ "สุโขทัยค้าไม้"
  const {
    content = {},
    themeColor = "#7B3F00", // Default: สีน้ำตาลไม้
    contact = {},
    pricing = { starter: { price: "สอบถามราคา" } },
    products = [],
  } = data

  return (
    <div className={styles.container}>
      {/* 1. ส่วนหัวเว็บไซต์: เน้นชื่อร้านและเบอร์โทรติดต่อคนสุโขทัย */}
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative">
        {/* 2. ส่วนต้อนรับ (HERO): แสดงพาดหัว "ไม้ดีเมืองเก่า" และรูปโรงไม้ */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={pricing.starter?.price}
          // สามารถเพิ่มรูปภาพจาก products[0].image มาแสดงเป็นพื้นหลังได้
          image={products[0]?.image}
        />

        {/* 3. จุดเด่นของโรงไม้ (FEATURES): ส่งไวทั่วสุโขทัย / คัดไม้เกรด A */}
        <FeaturesSection features={content.features} themeColor={themeColor} />

        {/* 4. สถิติความเชื่อมั่น (PERFORMANCE): ประสบการณ์ 25 ปี / 9 อำเภอ */}
        <PerformanceSection />

        {/* 5. ตารางราคาและบริการ (PRICING): แยกกลุ่มช่างและกลุ่มลูกค้าปลีก */}
        <CartSection pricing={pricing} themeColor={themeColor} />

        {/* 6. คำถามพบบ่อย (FAQ): ตอบเรื่องการส่งสินค้าในพื้นที่ จ.สุโขทัย */}
        <FAQSection />

        {/* 7. ส่วนปิดการขาย (SUCCESS CTA): ปุ่มทัก LINE สีเขียวเด่นชัด */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      {/* 8. ส่วนท้าย (FOOTER): ที่อยู่ร้านในกงไกรลาศ และแผนที่ */}
      <Footer contact={contact} />
    </div>
  )
}
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: SUKHOTHAI TIMBER BUSINESS CONFIGURATION
// Identity: โรงไม้แปรรูปคุณภาพแห่งเมืองเก่าสุโขทัย
// Path: WoodBusiness/config.ts
// ----------------------------------------------------

export const starterConfig = {
  id: "sukhothai-wood-pro-v1",
  name: "สุโขทัยค้าไม้ (Sukhothai Timber)",
  themeColor: "#7B3F00", // สีน้ำตาลไม้แก่น (สร้างความเชื่อมั่นและดูมีพลัง)

  metadata: {
    title: "สุโขทัยค้าไม้ | โรงไม้แปรรูป คัดเกรด ส่งทั่วสุโขทัย",
    description:
      "จำหน่ายไม้โครง ไม้พื้น ไม้ระแนง คุณภาพดี ราคาโรงงาน บริการโดยคนสุโขทัย ส่งด่วนถึงหน้างาน",
  },

  // 1. CONTENT: สำหรับส่วน Hero และจุดเด่น (หน้าแรก)
  content: {
    heroTitle: "ไม้ดีเมืองเก่า\nคัดสวยทุกแผ่น ส่งถึงหน้างาน",
    heroSubtitle:
      "โรงไม้แปรรูปมาตรฐานคนสุโขทัย สำหรับช่างและผู้รับเหมา มีไม้โครง ไม้พื้น ไม้ระแนง สต็อกแน่นพร้อมส่งทันทีทุกอำเภอในจังหวัด",

    features: [
      {
        id: 1,
        title: "LOCAL_PRIDE: ส่งไวทั่วสุโขทัย",
        description:
          "เรามีรถขนส่งเอง บริการส่งด่วนถึงที่ ไม่ว่าจะเป็นกงไกรลาศ สวรรคโลก หรือศรีสำโรง สินค้าถึงไวไม่ต้องรอนาน",
        icon: "Zap",
      },
      {
        id: 2,
        title: "CRAFT_QUALITY: คัดไม้โดยช่างไม้",
        description:
          "ไม้ทุกแผ่นผ่านการคัดเกรด ไสเรียบ ไม่คด ไม่โก่ง พร้อมใช้งานทันที ช่วยช่างลดเวลาการทำงานและลดการสูญเสีย",
        icon: "Smartphone", // สื่อถึงการเลือกได้ง่าย/เช็คสเปคง่าย
      },
      {
        id: 3,
        title: "FAIR_PRICE: ราคามิตรภาพ",
        description:
          "คุยง่าย เป็นกันเองแบบคนพื้นที่ ออกใบเสนอราคาไวภายใน 30 นาที เพื่อให้ท่านบริหารงบประมาณได้แม่นยำ",
        icon: "MessageCircle",
      },
    ],
  },

  // 2. PRICING: ตารางบริการสำหรับลูกค้าแต่ละกลุ่ม
  pricing: {
    starter: {
      price: "ราคาขายปลีก",
      label: "HOME_OWNER",
      details: [
        "จำหน่ายไม้ปลีกสำหรับงานซ่อมแซมบ้าน",
        "มีไม้ระแนง ไม้โครง หลายขนาดให้เลือก",
        "บริการไสและตัดไม้ตามขนาดที่ต้องการ",
        "ยินดีให้คำปรึกษาการเลือกไม้ฟรี",
      ],
    },
    business: {
      price: "ราคาส่งผู้รับเหมา",
      label: "CONTRACTOR_PRO",
      isRecommended: true,
      details: [
        "ราคาขายส่งพิเศษสำหรับงานโครงการ",
        "สต็อกไม้จำนวนมากพร้อมจัดส่งทันที",
        "ออกใบกำกับภาษีได้ถูกต้องครบถ้วน",
        "จัดส่งฟรีในเขตอำเภอเมืองสุโขทัย",
      ],
    },
  },

  // 3. PRODUCTS: รายการไม้ที่นิยม (แคตตาล็อกเบื้องต้น)
  products: [
    {
      id: "p1",
      name: "ไม้โครง/ไม้ระแนง",
      price: "เช็คราคาวันนี้",
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/Header.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🏥 AI CONTEXT: WOOD BUSINESS HEADER (SUKHOTHAI EDITION)
// Identity: Local Professional (เน้นความน่าเชื่อถือและการติดต่อที่รวดเร็ว)
// ----------------------------------------------------

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Phone, ShieldCheck, Menu, X, MessageCircle } from "lucide-react"

interface HeaderProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function Header({
  themeColor = "#7B3F00", // สีน้ำตาลไม้
  contact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const params = useParams()
  const pathname = usePathname()

  // กำหนด ID พื้นฐานเป็น starter หากไม่มี params
  const templateId = (params?.template_id as string) || "WoodBusiness"

  const navLinks = [
    { name: "หน้าแรก", href: `/${templateId}` },
    { name: "รายการไม้", href: `/${templateId}/products` },
    { name: "ติดต่อเรา", href: `/${templateId}/contact` },
  ]

  // ตรวจสอบการเลื่อนหน้าจอเพื่อปรับพื้นหลัง Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/90 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* 1. LOGO: ชื่อร้านพร้อมไอคอนยืนยันคุณภาพ */}
          <Link
            href={`/${templateId}`}
            className="group flex items-center gap-2"
          >
            <div
              className="flex h-10 w-10 items-center justify-center font-black italic text-white transition-transform group-hover:rotate-3"
              style={{ backgroundColor: themeColor }}
            >
              ST
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black uppercase tracking-tighter text-slate-900">
                สุโขทัยค้าไม้
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Sukhothai_Timber
              </span>
            </div>
          </Link>

```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/FeaturesSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FEATURES SECTION (SUKHOTHAI)
// Identity: Service Capabilities (จุดแข็งของโรงไม้)
// Function: แสดงจุดเด่น 3 ด้านที่ทำให้ลูกค้าตัดสินใจเลือกซื้อไม้ที่นี่
// ----------------------------------------------------

"use client"

import React from "react"
import {
  Zap,
  Smartphone,
  MessageCircle,
  Truck,
  ShieldCheck,
  HardHat,
} from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  features: Feature[]
  themeColor: string
}

export default function FeaturesSection({
  features,
  themeColor,
}: FeaturesSectionProps) {
  // 🛠️ ICON_PICKER: เลือกไอคอนที่เหมาะสมกับธุรกิจไม้แปรรูป
  const renderIcon = (iconName: string) => {
    const props = { size: 36, strokeWidth: 1.5, style: { color: themeColor } }
    switch (iconName) {
      case "Zap":
        return <Truck {...props} /> // เปลี่ยน Zap เป็นรถบรรทุก (ส่งไว)
      case "Smartphone":
        return <ShieldCheck {...props} /> // เปลี่ยน Smartphone เป็นโล่ (ไม้คัดเกรด)
      case "MessageCircle":
        return <HardHat {...props} /> // เปลี่ยน Message เป็นหมวกช่าง (ปรึกษาฟรี)
      default:
        return <Zap {...props} />
    }
  }

  return (
    <section id="features" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* 🏗️ HEADER_CELL: หัวข้อหลักของโรงไม้ */}
        <div className="border-b border-slate-200 p-10 md:p-16">
          <span
            className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em]"
            style={{ color: themeColor }}
          >
            Sukhothai_Timber_Service
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
            ทำไมต้องเลือก <br className="md:hidden" />
            <span style={{ color: themeColor }}>สุโขทัยค้าไม้?</span>
          </h2>
        </div>

        {/* 📦 FEATURES_GRID: ตารางจุดเด่น 3 ช่อง */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features &&
            features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`group border-b border-slate-200 p-10 transition-all duration-300 hover:bg-slate-50 md:border-b-0 md:p-14 ${
                  idx !== features.length - 1 ? "md:border-r" : ""
                }`}
              >
                {/* ICON_CONTAINER */}
                <div className="mb-10 transition-transform duration-500 group-hover:scale-110">
                  {renderIcon(feature.icon)}
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/PerformanceSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PERFORMANCE (SUKHOTHAI EDITION)
// Identity: สถิติความเชื่อมั่นและความยิ่งใหญ่ของโรงไม้
// Function: แสดงผลข้อมูลเชิงตัวเลขที่ทำให้ลูกค้ามั่นใจในบริการ
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, ShieldCheck, Award, MapPin } from "lucide-react"

export default function PerformanceSection() {
  const stats = [
    {
      label: "YEARS_EXPERIENCE",
      value: "25",
      unit: "ปี",
      desc: "ความเชี่ยวชาญด้านไม้แปรรูป",
      icon: <Award size={10} />,
    },
    {
      label: "SERVICE_AREAS",
      value: "9",
      unit: "อำเภอ",
      desc: "ส่งด่วนครอบคลุมทั่วสุโขทัย",
      icon: <MapPin size={10} />,
    },
    {
      label: "STOCK_AVAILABILITY",
      value: "100",
      unit: "%",
      desc: "มีสินค้าพร้อมส่ง ไม่ต้องรอนาน",
      icon: <Zap size={10} />,
    },
  ]

  return (
    <section className="overflow-hidden border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl border-x border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. BRAND_HEADER_CELL: ส่วนหัวของเซกชันสถิติ */}
          <div className="border-b border-slate-800 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div className="mb-8 flex h-10 w-10 items-center justify-center bg-[#7B3F00] font-black italic text-white">
              ST
            </div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-none tracking-tighter">
              ตัวเลขยืนยัน <br />
              <span className="text-slate-500">ความเป็นมืออาชีพ</span>
            </h2>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Sukhothai_Timber_System_Verified // 2024
            </p>
          </div>

          {/* 2. STATS_GRID: ส่วนแสดงสถิติ 3 ช่อง */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center border-b border-slate-800 p-10 transition-colors last:border-b-0 last:border-r-0 hover:bg-slate-800/30 sm:border-b-0 sm:border-r md:p-12"
              >
                {/* METRIC_LABEL: ชื่อสถิติ */}
                <span className="mb-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#A0522D]">
                  {item.icon} {item.label}
                </span>

                {/* MAIN_VALUE: ตัวเลขขนาดใหญ่ */}
                <div className="mb-3 flex items-baseline transition-transform duration-500 group-hover:translate-x-1">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {item.value}
                  </span>
                  <span className="ml-1 font-mono text-xl font-bold text-slate-600">
                    {item.unit}
                  </span>
                </div>

                {/* DESCRIPTION: คำอธิบายภาษาไทย */}
                <p className="text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-slate-400">
                  <span className="mr-1 text-[#7B3F00] opacity-50">#</span>{" "}
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/HeroSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS HERO SECTION (SUKHOTHAI)
// Identity: First-Impression Specialist (ความประทับใจแรก)
// Function: นำเสนอจุดเด่น "ไม้ดีเมืองเก่า" พร้อมปุ่มโทรออก/ทักไลน์
// ----------------------------------------------------

"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants, easeOut } from "framer-motion"
import { Phone, MessageSquare, ShieldCheck } from "lucide-react"

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
  price?: string
  themeColor?: string
}

// ------------------------
// Animation Variants: ให้ตัวอักษรค่อยๆ เลื่อนขึ้นดูพรีเมียม
// ------------------------
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export default function HeroSection({
  title = "ไม้ดีเมืองเก่า\nคัดสวยทุกแผ่น ส่งถึงหน้างาน",
  subtitle = "โรงไม้แปรรูปมาตรฐานคนสุโขทัย สำหรับช่างและผู้รับเหมา มีไม้โครง ไม้พื้น ไม้ระแนง สต็อกแน่นพร้อมส่งทันทีทุกอำเภอ",
  image = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/starter/hero-placeholder.jpg",
  price = "เช็คราคาวันนี้",
  themeColor = "#7B3F00",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* 🏗️ GRID_BACKGROUND: ลายตารางสไตล์ช่างวัดไม้ */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${themeColor} 1px, transparent 1px), linear-gradient(90deg, ${themeColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:px-10 md:py-32"
        >
          {/* 🏷️ BADGE: ยืนยันพิกัดร้าน */}
          <motion.div
            variants={itemVars}
            className="mb-8 flex items-center gap-2 border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 shadow-sm"
          >
            <ShieldCheck size={14} style={{ color: themeColor }} />
            โรงไม้มาตรฐาน จ.สุโขทัย
          </motion.div>

          {/* 📢 MAIN_HEADLINE */}
          <motion.h1
            variants={itemVars}
            className="mb-8 whitespace-pre-line text-5xl font-black leading-[1.1] tracking-tighter text-slate-900 md:text-8xl"
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/CartSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PRICING & CART SECTION
// Identity: Sales Closer (ส่วนการเลือกแพ็กเกจและราคา)
// Function: แยกกลุ่มเป้าหมาย ชวนช่างไม้และเจ้าของบ้านให้ติดต่อถูกช่องทาง
// ----------------------------------------------------

"use client"

import React from "react"
import { Check, ArrowRight, Home, HardHat, ShieldCheck } from "lucide-react"

interface PricingPlan {
  price: string
  label: string
  isRecommended?: boolean
  details: string[]
}

interface CartSectionProps {
  pricing: {
    starter: PricingPlan
    business: PricingPlan
  }
  themeColor?: string // ✅ ทำเป็น optional พร้อม default value
}

export default function CartSection({
  pricing,
  themeColor = "#7B3F00",
}: CartSectionProps) {
  const plans = [
    {
      key: "starter",
      data: pricing.starter,
      icon: <Home size={24} className="text-slate-400" />,
      target: "สำหรับเจ้าของบ้าน",
    },
    {
      key: "business",
      data: pricing.business,
      icon: <HardHat size={24} style={{ color: themeColor }} />,
      target: "สำหรับช่าง & ผู้รับเหมา",
    },
  ]

  return (
    <section id="pricing" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl border-x border-slate-200 bg-white">
        {/* 🏗️ SECTION_HEADER */}
        <div className="border-b border-slate-200 p-10 text-center md:p-20">
          <span className="mb-4 inline-block font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Choose_Your_Requirement
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
            ราคาตรงจาก <span style={{ color: themeColor }}>โรงไม้</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-slate-500">
            เลือกรูปแบบการสั่งซื้อที่ตรงกับความต้องการของคุณ{" "}
            <br className="hidden md:block" />
            เพื่อให้ได้รับข้อเสนอและบริการที่คุ้มค่าที่สุด
          </p>
        </div>

        {/* 📦 PRICING_CARDS_GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <div
              key={plan.key}
              className={`relative flex flex-col p-10 md:p-16 ${
                idx === 0 ? "border-b md:border-b-0 md:border-r" : ""
              } border-slate-200`}
            >
              {/* RECOMMENDED_TAG */}
              {plan.data.isRecommended && (
                <div
                  className="absolute right-10 top-10 flex items-center gap-2 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white"
                  style={{ backgroundColor: themeColor }}
                >
                  <ShieldCheck size={12} /> Recommended
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/FAQSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FAQ SECTION (SUKHOTHAI)
// Identity: Expert Consultant (ผู้ช่วยแก้ไขข้อสงสัย)
// Function: ตอบคำถามที่พบบ่อยเพื่อสร้างความมั่นใจก่อนตัดสินใจซื้อ
// ----------------------------------------------------

"use client"

import React, { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // เปิดข้อแรกไว้เป็นตัวอย่าง

  const faqs: FAQItem[] = [
    {
      question: "ทางโรงไม้มีบริการจัดส่งถึงหน้างานในอำเภอไหนบ้าง?",
      answer:
        "เรามีรถขนส่งส่วนตัวให้บริการครอบคลุมทั้ง 9 อำเภอในจังหวัดสุโขทัย (เมือง, กงไกรลาศ, สวรรคโลก, ศรีสำโรง, ศรีสัชนาลัย, คีรีมาศ, ทุ่งเสลี่ยม, บ้านด่านลานหอย, ศรีนคร) และจังหวัดใกล้เคียงอย่างพิษณุโลกหรือตากด้วยครับ",
    },
    {
      question: "ไม้แปรรูปของที่ร้านมีการอบแห้งและกันปลวกหรือไม่?",
      answer:
        "ไม้โครงและไม้แปรรูปเกรด A ของเราผ่านกระบวนการอบแห้ง (Kiln Dried) เพื่อลดการบิดงอ และมีการลงน้ำยากันปลวกมาตรฐานโรงงาน พร้อมสำหรับการนำไปใช้งานก่อสร้างหรือตกแต่งทันทีครับ",
    },
    {
      question: "ถ้าต้องการใช้ไม้จำนวนมากสำหรับงานโครงการ มีราคาส่งไหม?",
      answer:
        "มีครับ! เรามีราคาส่งพิเศษสำหรับผู้รับเหมาและงานโครงการที่สั่งซื้อจำนวนมาก พร้อมบริการออกใบเสนอราคาอย่างรวดเร็วและออกใบกำกับภาษีได้ถูกต้องครับ",
    },
    {
      question: "สามารถเข้าไปดูหน้าไม้จริงที่โรงงานได้วันไหนบ้าง?",
      answer:
        "ลูกค้าสามารถเข้ามาเลือกดูหน้าไม้จริงได้ที่โรงงานใน อ.กงไกรลาศ ได้ทุกวันจันทร์ - เสาร์ เวลา 08:00 - 17:00 น. ครับ แนะนำให้โทรนัดหมายก่อนเพื่อความสะดวกในการจัดเตรียมเจ้าหน้าที่พาชมครับ",
    },
  ]

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. LEFT_SIDE: หัวข้อและคำโปรย */}
          <div className="border-b border-slate-200 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div className="mb-8 flex h-10 w-10 items-center justify-center bg-slate-100 text-[#7B3F00]">
              <HelpCircle size={20} />
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter text-slate-900">
              คำถาม <br />
              <span className="text-slate-400">ที่พบบ่อย</span>
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-500">
              รวบรวมข้อมูลเบื้องต้นที่คุณควรรู้เกี่ยวกับไม้และการบริการของเรา
              หากมีข้อสงสัยเพิ่มเติม สามารถทักแชทสอบถามแอดมินได้ทันที
            </p>
          </div>

          {/* 2. RIGHT_SIDE: รายการคำถามแบบ Accordion */}
          <div className="md:col-span-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-8 text-left transition-colors hover:bg-slate-50 md:p-10"
                >
                  <span className="text-lg font-bold tracking-tight text-slate-900 md:text-xl">
                    {faq.question}
                  </span>
                  <div
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/Footer.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FOOTER (SUKHOTHAI EDITION)
// Identity: Stable Local Enterprise (ความมั่นคงและที่ตั้งที่ชัดเจน)
// Function: แสดงที่อยู่ร้าน แผนที่ และเวลาเปิดทำการ
// ----------------------------------------------------

"use client"

import React from "react"
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Facebook,
} from "lucide-react"

interface FooterProps {
  contact?: {
    lineId: string
    phone: string
    facebook?: string
    email: string
    address?: string
    workingHours?: string
  }
}

export default function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl">
        {/* MAIN_FOOTER_GRID: ระบบตารางที่แข็งแรงสไตล์โรงงาน */}
        <div className="grid grid-cols-1 gap-0 border-x border-slate-800 md:grid-cols-12">
          {/* 1. BRAND & IDENTITY: ยืนยันตัวตนคนสุโขทัย */}
          <div className="border-b border-slate-800 p-10 transition-colors hover:bg-slate-800/20 md:col-span-5 md:border-r md:p-16">
            <div className="mb-8 flex select-none items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-[#7B3F00] font-black italic text-white">
                ST
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                สุโขทัยค้าไม้
              </span>
            </div>
            <p className="mb-10 max-w-sm text-sm font-medium leading-relaxed text-slate-400">
              ตัวแทนจำหน่ายไม้แปรรูปคุณภาพสูง ประสบการณ์กว่า 25
              ปีในจังหวัดสุโขทัย
              เรามุ่งมั่นส่งมอบไม้ที่ดีที่สุดเพื่อบ้านที่แข็งแรงของท่าน
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <ShieldCheck size={14} className="text-[#7B3F00]" />
              Verified_Sukhothai_Business
            </div>
          </div>

          {/* 2. CONTACT_INFO: ข้อมูลติดต่อที่รวดเร็ว */}
          <div className="border-b border-slate-800 p-10 md:col-span-4 md:border-r md:p-16">
            <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A0522D]">
              Contact_Details
            </h4>
            <div className="space-y-6">
              <a
                href={`tel:${contact?.phone}`}
                className="group flex items-center gap-4 transition-colors hover:text-[#A0522D]"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-700 group-hover:border-[#A0522D]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    โทรศัพท์
                  </p>
                  <p className="font-bold">{contact?.phone || "055-xxx-xxx"}</p>
                </div>
              </a>
              <a
```

### `app/(marketing)/[template_id]/_templates/WoodBusiness/components/SuccessSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS SUCCESS SECTION (CTA)
// Identity: Closing Specialist (ส่วนปิดการขาย)
// Function: ดึงลูกค้าเข้าสู่การสนทนาผ่าน LINE และโทรศัพท์
// ----------------------------------------------------

"use client"

import React from "react"
import { MessageSquare, Phone, ArrowRight, Zap } from "lucide-react"

interface SuccessSectionProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function SuccessSection({
  themeColor = "#7B3F00", // สีน้ำตาลไม้
  contact,
}: SuccessSectionProps) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:px-10 md:py-36">
          {/* 🧩 DECORATIVE_ELEMENTS: มุมกรอบแบบงานช่างไม้ */}
          <div className="absolute left-0 top-0 h-16 w-16 border-l-4 border-t-4 border-slate-100" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-slate-100" />

          {/* 🏷️ SECTION_BADGE */}
          <div className="mb-12 flex items-center gap-3 border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            พร้อมประเมินราคาหน้างานฟรี
          </div>

          {/* 📢 MAIN_CALL_TO_ACTION */}
          <h2 className="mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.15] tracking-tighter text-slate-900 md:text-7xl">
            อยากได้ไม้ดี <span style={{ color: themeColor }}>ราคาโรงงาน</span>{" "}
            <br />
            ทักแชทคุยกับเราได้เลย
          </h2>

          <p className="mb-14 max-w-2xl text-lg font-medium leading-relaxed text-slate-500">
            ไม่ว่าจะเป็นงานบ้าน งานโครงการ หรือร้านค้าช่วง{" "}
            <br className="hidden md:block" />
            เรายินดีให้คำปรึกษาเรื่องสเปคไม้และบริการจัดส่งทั่วสุโขทัยและจังหวัดใกล้เคียง
          </p>

          {/* ⚡ ACTION_BUTTONS: เน้น LINE และ โทร */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://line.me/ti/p/${contact?.lineId?.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 bg-green-600 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-green-500/20 transition-all hover:bg-green-700 active:scale-95 sm:w-auto"
            >
              <MessageSquare size={20} /> ทัก LINE เช็คราคาส่ง
            </a>

            <a
              href={`tel:${contact?.phone}`}
              className="flex w-full items-center justify-center gap-3 bg-slate-900 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 active:scale-95 sm:w-auto"
            >
              <Phone size={20} /> โทรคุยกับฝ่ายขาย
            </a>
          </div>

          {/* 📟 SYSTEM_FOOTNOTE: ข้อมูลยืนยันความไว */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              ไม้คัดเกรด_100%
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="flex items-center gap-2">
              ตอบกลับไวภายใน: <span className="text-slate-900">30_นาที</span>
            </div>
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
// Identity: เอเจนซี่อสังหาริมทรัพย์ระดับพรีเมียม (Luxury Property Brokerage)
// Tone: หรูหรา, น่าเชื่อถือ, สุขุม (Exclusive & Sophisticated)
// 🛠️ PRIMARY BRAND: AEMDEVWEB (Developer Credit)
// ----------------------------------------------------

export const realEstateConfig = {
  id: "template-realestate-luxury",
  name: "VAULT & VEST PROPERTY", // แบรนด์สมมติที่สื่อถึงความปลอดภัยและการเติบโตของทรัพย์สิน
  themeColor: "#c2a35d", // Champagne Gold: สีทองหรูหราแบบไม่ตะโกน
  secondaryColor: "#0f172a", // Midnight Navy: สีน้ำเงินเข้มขรึม เสริมความภูมิฐาน

  metadata: {
    // SEO เน้น Keyword ที่ดึงกลุ่ม High Net Worth พร้อมเครดิต AEMDEVWEB
    title:
      "Vault & Vest | คัดสรรอสังหาริมทรัพย์และโอกาสการลงทุนระดับพรีเมียม by AEMDEVWEB",
    description:
      "ที่ปรึกษาด้านอสังหาริมทรัพย์ระดับ Exclusive มอบดีลที่ดีที่สุดบนทำเลศักยภาพและพอร์ตการลงทุนที่คุ้มค่า",
    ogImage: "/images/projects/real-estate.jpg",
  },

  content: {
    // --- ส่วนต้อนรับ (Elite Impression) ---
    heroTitle: "EXCEPTIONAL_LIVING_CURATED",
    heroSubtitle:
      "รวบรวมสุดยอดที่อยู่อาศัยที่ผ่านการคัดสรรอย่างพิถีพิถัน เพื่อสุนทรียภาพแห่งการใช้ชีวิตและการเติบโตของสินทรัพย์ในระยะยาว",

    // --- หมวดหมู่พอร์ตโฟลิโอ (Investment Portfolio) ---
    // 🏷️ เปลี่ยนจากการหาบ้านทั่วไป ให้เป็นการเลือก "สินทรัพย์" (Assets)
    categories: [
      {
        id: "CONDO",
        label: "ELITE_COLLECTION",
        count: "120+ Units",
        detail: "คอนโดมิเนียมระดับ Ultimate Luxury บนทำเล CBD",
      },
      {
        id: "HOUSE",
        label: "PRIVATE_ESTATES",
        count: "45+ Houses",
        detail: "คฤหาสน์หรูในสังคมคุณภาพและบรรยากาศที่เป็นส่วนตัว",
      },
      {
        id: "INVEST",
        label: "STRATEGIC_INVESTMENTS",
        count: "15+ Projects",
        detail: "โครงการอสังหาฯ เพื่อการลงทุนที่มี Yield สูงและมั่นคง",
      },
      {
        id: "LAND",
        label: "LAND_ACQUISITION",
        count: "30+ Locations",
        detail: "ที่ดินศักยภาพสูงสำหรับการพัฒนาโครงการในอนาคต",
      },
    ],

    // --- จุดเด่นของบริการ (High-End Services) ---
    highlights: [
      {
        id: "h-1",
        title: "CURATED_SELECTION",
        detail:
          "ทุกยูนิตผ่านการประเมินศักยภาพและความคุ้มค่าโดยผู้เชี่ยวชาญก่อนนำเสนอแด่คุณ",
        icon: "Gem",
      },
      {
        id: "h-2",
        title: "CONCIERGE_ADVISORY",
        detail:
          "บริการที่ปรึกษาส่วนตัวด้านสินเชื่อ ดอกเบี้ยพิเศษ และสิทธิประโยชน์ทางภาษี",
        icon: "UserCheck",
      },
      {
        id: "h-3",
        title: "END_TO_END_EXCELLENCE",
        detail:
          "ดูแลทุกขั้นตอนอย่างใกล้ชิด ตั้งแต่การเยี่ยมชม การเจรจา จนถึงการบริหารจัดการทรัพย์สิน",
        icon: "Key",
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
// Identity: บริษัทรับเหมาก่อสร้างและวิศวกรรมโยธา (Industrial & Civil Engineering)
// Tone: แข็งแกร่ง, แม่นยำ, มาตรฐานความปลอดภัยสูง (Industrial Professionalism)
// 🛠️ PRIMARY BRAND: AEMDEVWEB (Developer Credit)
// ----------------------------------------------------

export const constructionConfig = {
  id: "template-construction-industrial",
  name: "TITAN STRUCTURES & ENGINEERING", // แบรนด์สมมติที่สื่อถึงความแข็งแกร่งดุจไททัน
  themeColor: "#1e293b", // Slate 800: สีเทาเหล็ก สื่อถึงโครงสร้างและความมั่นคง
  secondaryColor: "#f59e0b", // Amber 500: สีเหลืองความปลอดภัย (Safety Yellow)

  metadata: {
    // SEO เน้น Keyword งานวิศวกรรมและรับเหมา พร้อมเครดิต AEMDEVWEB
    title:
      "Titan Structures | มาตรฐานวิศวกรรมและรับเหมาก่อสร้างระดับสากล by AEMDEVWEB",
    description:
      "บริษัทผู้นำด้านงานก่อสร้างอุตสาหกรรมและโครงสร้างพื้นฐานระดับชาติ ควบคุมงานโดยวิศวกรวิชาชีพ พร้อมมาตรฐาน ISO",
    ogImage: "/images/projects/construction-bg.jpg",
  },

  content: {
    // --- ส่วนต้อนรับ (Hero Content) ---
    heroTitle: "STRENGTH_THROUGH_PRECISION",
    heroSubtitle:
      "ออกแบบและก่อสร้างโครงสร้างพื้นฐานที่ยั่งยืน ด้วยมาตรฐานวิศวกรรมชั้นสูงและนวัตกรรมการบริหารโครงการที่แม่นยำ พร้อมส่งมอบงานตรงเวลา",

    // --- สถิติความสำเร็จ (Track Record) ---
    // 📊 ส่วนนี้สำคัญมากสำหรับธุรกิจรับเหมาเพื่อใช้ประมูลงานหรือยื่น Profile
    trackRecord: [
      {
        id: 1,
        label: "PROJECTS_DELIVERED",
        value: "250+",
        detail: "โครงการที่ส่งมอบสำเร็จ",
      },
      {
        id: 2,
        label: "CERTIFIED_ENGINEERS",
        value: "45",
        detail: "ทีมวิศวกรวิชาชีพประสบการณ์สูง",
      },
      {
        id: 3,
        label: "SAFETY_MILESTONE",
        value: "1M+ Hours",
        detail: "ชั่วโมงการทำงานที่ปลอดภัย (LTI Free)",
      },
    ],

    // --- ความเชี่ยวชาญเฉพาะทาง (Expertise) ---
    expertise: [
      {
        id: "exp-1",
        label: "STRUCTURAL_INTEGRITY",
        detail:
          "วิเคราะห์และคำนวณโครงสร้างเพื่อความคงทนสูงสุดด้วยเทคโนโลยี BIM (Building Information Modeling) ลดข้อผิดพลาดในการก่อสร้าง",
        icon: "Ruler",
      },
      {
        id: "exp-2",
        label: "EPC_MANAGEMENT",
        detail:
          "การบริหารโครงการแบบครบวงจรตั้งแต่ ออกแบบ จัดซื้อ และก่อสร้าง ควบคุมงบประมาณไม่ให้บานปลาย 100%",
        icon: "ClipboardCheck",
      },
      {
        id: "exp-3",
        label: "SUSTAINABLE_CIVIL",
        detail:
          "นวัตกรรมการก่อสร้างสีเขียวที่เน้นการใช้ทรัพยากรอย่างคุ้มค่าตามมาตรฐาน LEED เพื่อสิ่งแวดล้อมที่ยั่งยืน",
        icon: "Leaf",
      },
    ],

    // --- บริการหลัก (Core Services) ---
    services: [
      {
```

### `app/(marketing)/[template_id]/_templates/starter/StarterTemplate.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PROFESSIONAL MASTER LAYOUT (REFACTORED)
// Identity: Dynamic Data Injection, Stable Grid Architecture
// Function: รับ Data Props จาก Registry เพื่อแสดงผลตาม Template ID
// ----------------------------------------------------

"use client"

import React from "react"
import styles from "./StarterStyle.module.css"

// นำเข้า Components ที่ได้รับการ Refactor แล้ว (ย้ายจาก Folder ภายในมาใช้งาน)
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PerformanceSection from "./components/PerformanceSection"
import CartSection from "./components/CartSection"
import FAQSection from "./components/FAQSection"
import SuccessSection from "./components/SuccessSection"
import Footer from "./components/Footer"

interface StarterTemplateProps {
  data: any // รับข้อมูล config ทั้งหมดมาจาก MarketingPage (page.tsx)
}

export default function StarterTemplate({ data }: StarterTemplateProps) {
  // Safe Destructuring: ดึงข้อมูลจาก Data Props
  // หากไม่มีข้อมูล ให้ใช้ค่าจากโครงสร้างที่เตรียมไว้ป้องกัน Error
  const {
    content = {},
    themeColor = "#1e40af",
    contact = {},
    pricing = { starter: { price: "0" } },
  } = data

  return (
    <div className={styles.container}>
      {/* 1. HEADER: ล็อกตำแหน่งบนสุด และรองรับ Theme Color จาก Config */}
      <Header themeColor={themeColor} contact={contact} />

      <main className="relative">
        {/* 2. HERO: ส่งผ่านข้อมูลพาดหัวและราคาเริ่มต้น */}
        <HeroSection
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          themeColor={themeColor}
          price={pricing.starter?.price}
        />

        {/* 3. FEATURES: ระบบตารางที่เปลี่ยน Content ตามธุรกิจ */}
        <FeaturesSection features={content.features} themeColor={themeColor} />

        {/* 4. PERFORMANCE: แสดงสถิติความเร็ว (Static หรือ Dynamic ก็ได้) */}
        <PerformanceSection />

        {/* 5. PRICING: ตารางราคาที่เชื่อมต่อกับระบบการตัดสินใจซื้อ */}
        <CartSection pricing={pricing} themeColor={themeColor} />

        {/* 6. FAQ: ช่วยลดภาระฝ่ายแอดมินด้วยคำถามที่พบบ่อย */}
        <FAQSection />

        {/* 7. SUCCESS CTA: ส่วนปิดการขายที่ดึง Contact ไปใช้งานจริง */}
        <SuccessSection themeColor={themeColor} contact={contact} />
      </main>

      {/* 8. FOOTER: แสดงข้อมูลบริษัทและช่องทางโซเชียล */}
      <Footer contact={contact} />
    </div>
  )
}
```

### `app/(marketing)/[template_id]/_templates/starter/config.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS CONFIGURATION (STARTER TEMPLATE)
// Identity: Production-Ready Data Structure for Multi-Page System
// Path: app/(marketing)/[template_id]/_templates/starter/config.ts
// ----------------------------------------------------

export const starterConfig = {
  id: "production-master-v1",
  name: "PRODUCTION_MASTER",
  themeColor: "#1e40af", // Deep Navy (สีกรมท่าเข้ม มั่นคง)

  metadata: {
    title: "AEMDEVWEB | เว็บไซต์มาตรฐานสากลเพื่อธุรกิจไทย",
    description: "ระบบเว็บไซต์โหลดไว แม่นยำ และใช้งานง่าย จบงานไวใน 3 วัน",
  },

  // 1. CONTENT: สำหรับ Hero และ Features (หน้าแรก)
  content: {
    heroTitle: "จบทุกปัญหาเรื่องทำเว็บ\nสร้างความน่าเชื่อถือทันที",
    heroSubtitle:
      "เราส่งมอบเว็บไซต์ที่เปิดไว อ่านง่าย และช่วยให้ลูกค้าตัดสินใจซื้อได้เร็วขึ้น ไม่ใช้ศัพท์เทคนิคให้ปวดหัว จบงานตามกำหนด 100%",

    features: [
      {
        id: 1,
        title: "CORE_SPEED: เปิดไวทันใจ",
        description:
          "ระบบแสดงผลทันทีที่กด ไม่ต้องรอหมุนให้เสียอารมณ์ ลูกค้าไม่เปลี่ยนใจหนี",
        icon: "Zap",
      },
      {
        id: 2,
        title: "RESPONSIVE: อ่านง่ายทุกหน้าจอ",
        description:
          "ตัวหนังสือขนาดพอดี ปุ่มกดชัดเจน ไม่ว่าลูกค้าใช้มือถือรุ่นไหนก็ใช้งานถนัด",
        icon: "Smartphone",
      },
      {
        id: 3,
        title: "DIRECT_CHAT: ทักง่าย ได้ยอดเร็ว",
        description:
          "เชื่อมปุ่ม LINE และเบอร์โทรศัพท์ให้พร้อมใช้งาน ลูกค้าทักหาคุณได้ในคลิกเดียว",
        icon: "MessageCircle",
      },
    ],
  },

  // 2. PRICING: ข้อมูลราคาหลัก (สำหรับหน้าแรก)
  pricing: {
    starter: {
      price: "3,900",
      label: "CORE_PACKAGE",
      details: [
        "หน้าเว็บสวยงาม ข้อมูลครบในหน้าเดียว",
        "รองรับมือถือ แท็บเล็ต และคอมพิวเตอร์",
        "ติดตั้งปุ่มติดต่อ LINE & โทรศัพท์",
        "ดูแลระบบพื้นฐานให้ฟรีตลอดการใช้งาน",
      ],
    },
    business: {
      price: "5,900",
      label: "PRO_GROWTH",
      isRecommended: true,
      details: [
        "ฟรี! ชื่อเว็บไซต์ (.com) และพื้นที่ 1 ปี",
        "ระบบหลายหน้า (Multi-page) ลงข้อมูลได้ลึก",
        "ระบบแจ้งเตือนลูกค้าทักแชทเข้า LINE",
        "วิดีโอสอนวิธีเปลี่ยนข้อมูลเองแบบง่ายๆ",
      ],
    },
  },

  // 3. PRODUCTS: ข้อมูลสินค้า/บริการ สำหรับวางขาย (หน้า Services/Catalog)
  products: [
    {
      id: "p1",
      name: "Standard Web Package",
      price: "3,900",
      description: "เริ่มต้นธุรกิจออนไลน์ด้วยเว็บไซต์หน้าเดียวที่ทรงพลัง",
```

### `app/(marketing)/[template_id]/_templates/starter/components/Header.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🏥 AI CONTEXT: PRODUCTION PROFESSIONAL HEADER (FIXED)
// ----------------------------------------------------

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Phone, ShieldCheck, Menu, X } from "lucide-react"

interface HeaderProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function Header({
  themeColor = "#0f766e", // Default เป็นสี Teal ตาม Medical Template
  contact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const params = useParams()
  const pathname = usePathname()

  const templateId = (params?.template_id as string) || "starter"

  const navLinks = [
    { name: "Home", href: `/${templateId}` },
    { name: "Services", href: `/${templateId}/services` },
    { name: "Contact", href: `/${templateId}/contact` },
  ]

  // ตรวจสอบการเลื่อนหน้าจอ
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ FIX: แก้ไข Error "Calling setState synchronously within an effect"
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-slate-100 bg-white/95 py-3 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* 1. BRAND_IDENTITY */}
        <Link
          href={`/${templateId}`}
          className="group flex select-none items-center gap-3"
        >
          <div
            className="flex h-10 w-10 items-center justify-center font-black text-white transition-transform group-hover:scale-105"
            style={{ backgroundColor: themeColor }}
          >
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase leading-none tracking-tighter text-slate-900">
              AEMDEVWEB<span style={{ color: themeColor }}>.</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
```

### `app/(marketing)/[template_id]/_templates/starter/components/HeroSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION HERO SECTION (MASTER)
// Identity: First-Impression Specialist, Stable Framer Motion
// Fix: Image Optimization for All Environments (Unoptimized)
// ----------------------------------------------------

"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants, easeOut } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"
import styles from "../StarterStyle.module.css"

interface HeroProps {
  title?: string
  subtitle?: string
  image?: string
  price?: string
  themeColor?: string
}

// ------------------------
// Animation Variants
// ------------------------
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

// ------------------------
// HeroSection Component
// ------------------------
export default function HeroSection({
  title = "จบทุกปัญหาเรื่องทำเว็บ\nสร้างความน่าเชื่อถือทันที",
  subtitle = "เราส่งมอบเว็บไซต์ที่เปิดไว อ่านง่าย และช่วยให้ลูกค้าตัดสินใจซื้อได้เร็วขึ้น ไม่ใช้ศัพท์เทคนิคให้ปวดหัว จบงานตามกำหนด 100%",
  image = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/starter/hero-placeholder.jpg",
  price = "3,900",
  themeColor = "#1e40af",
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-col items-center px-6">
          {/* 🛰️ SYSTEM_STATUS_LABEL */}
          <motion.div variants={itemVars} className={styles.label}>
            <ShieldCheck size={14} className="text-blue-600" />
            System_Ready_2025 // Production_Active
          </motion.div>

          {/* 📢 MAIN_HEADLINE */}
          <motion.h1 variants={itemVars} className={styles.mainTitle}>
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* 📝 SUBTITLE */}
          <motion.p
```

### `app/(marketing)/[template_id]/_templates/starter/components/FeaturesSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Seamless Grid Cell)
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Smartphone, MessageCircle } from "lucide-react"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  features: Feature[]
  themeColor: string
}

export default function FeaturesSection({
  features,
  themeColor,
}: FeaturesSectionProps) {
  // ฟังก์ชันเลือก Icon ให้ตรงกับข้อมูล
  const renderIcon = (iconName: string) => {
    const props = { size: 32, strokeWidth: 1.5, style: { color: themeColor } }
    switch (iconName) {
      case "Zap":
        return <Zap {...props} />
      case "Smartphone":
        return <Smartphone {...props} />
      case "MessageCircle":
        return <MessageCircle {...props} />
      default:
        return <Zap {...props} />
    }
  }

  return (
    <section id="features" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* HEADER_CELL: หัวข้อในกรอบตาราง */}
        <div className="border-b border-slate-200 p-10 md:p-16">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
            Service_Capabilities
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            คุณสมบัติที่ธุรกิจคุณจะได้รับ
          </h2>
        </div>

        {/* FEATURES_GRID: ตาราง 3 ช่องแบบไร้รอยต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`border-b border-slate-200 p-10 transition-colors hover:bg-slate-50 md:border-b-0 md:p-14 ${
                idx !== features.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="mb-8">{renderIcon(feature.icon)}</div>

              <h3 className="mb-4 text-xl font-black uppercase tracking-tight">
                {feature.title}
              </h3>

              <p className="font-medium leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### `app/(marketing)/[template_id]/_templates/starter/components/GuaranteeSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION GUARANTEE SECTION
// Identity: Trust & Stability (ความเชื่อมั่นและบริการ)
// Design: Sharp Grid Architecture (สไตล์เหลี่ยมคม)
// ----------------------------------------------------

"use client"

import React from "react"
import { Heart, ShieldCheck, Headphones } from "lucide-react"

export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: <ShieldCheck size={32} />,
      title: "มั่นใจ ไม่ทิ้งงาน",
      desc: "จดทะเบียนชัดเจน มีตัวตนจริง ติดต่อได้ตลอดเวลา พร้อมสัญญาจ้างมาตรฐาน",
      label: "IDENTITY_VERIFIED",
    },
    {
      icon: <Headphones size={32} />,
      title: "สอนใช้งานฟรี",
      desc: "มีคู่มือและคลิปสอนแก้ข้อมูลเองได้ ไม่ต้องรอช่างให้เสียเวลา จัดการเองได้ 100%",
      label: "HANDOVER_READY",
    },
    {
      icon: <Heart size={32} />,
      title: "ดูแลหลังการขาย",
      desc: "ระบบมีปัญหาเราแก้ให้ฟรี ตลอดอายุการใช้งาน มั่นใจได้ว่าธุรกิจจะไม่สะดุด",
      label: "LIFETIME_SUPPORT",
    },
  ]

  return (
    <section className="overflow-hidden border-b border-blue-700 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl border-x border-blue-500/30">
        {/* GRID_LAYOUT: แบ่ง 3 ส่วนด้วยเส้นขอบบางๆ สไตล์ Industrial */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col gap-6 p-10 transition-all duration-300 hover:bg-blue-700/50 md:p-14 ${
                idx !== guarantees.length - 1
                  ? "border-b border-blue-500/30 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {/* ICON_HOLDER: ปรับให้ดูเป็นระบบเครื่องจักร */}
              <div className="text-blue-200 transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                {item.icon}
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300/60">
                  {item.label}
                </span>
                <h4 className="text-2xl font-black uppercase leading-none tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-sm font-medium uppercase leading-relaxed tracking-tight text-blue-100/80">
                  {item.desc}
                </p>
              </div>

              {/* DECORATIVE_BAR: เส้นขอบล่างเพิ่มมิติ */}
              <div className="h-1 w-12 bg-white/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### `app/(marketing)/[template_id]/_templates/starter/components/PerformanceSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS PERFORMANCE (FIXED)
// Identity: Production Professional (Data Visualization)
// Design: Industrial Grid, High-Contrast Data Display
// ----------------------------------------------------

"use client"

import React from "react"
import { Zap, Activity, ShieldCheck, BarChart3 } from "lucide-react"

export default function PerformanceSection() {
  const stats = [
    {
      label: "PAGESPEED_SCORE",
      value: "99",
      unit: "/100",
      desc: "คะแนนการโหลดหน้าเว็บ",
      icon: <Zap size={10} />,
    },
    {
      label: "UPTIME_RATIO",
      value: "99.9",
      unit: "%",
      desc: "ความเสถียรของเซิร์ฟเวอร์",
      icon: <Activity size={10} />,
    },
    {
      label: "SECURITY_LEVEL",
      value: "A+",
      unit: "V",
      desc: "มาตรฐานความปลอดภัย",
      icon: <ShieldCheck size={10} />,
    },
  ]

  return (
    <section className="overflow-hidden border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl border-x border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. BRAND_HEADER_CELL */}
          <div className="border-b border-slate-800 bg-slate-900/50 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-10 bg-blue-500" />
              <BarChart3 size={16} className="text-slate-500" />
            </div>
            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.1] tracking-tighter md:text-4xl">
              HIGH_SPEED <br /> PRODUCTION
            </h2>
            <p className="text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-400">
              เราไม่ได้ออกแบบแค่ความสวยงาม แต่เราเน้นที่ประสิทธิภาพสูงสุด
              เพื่อให้แน่ใจว่าลูกค้าของคุณจะไม่เสียเวลารอแม้แต่วินาทีเดียว
            </p>
          </div>

          {/* 2. DATA_CELLS_GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center border-b border-slate-800 p-10 transition-colors last:border-b-0 last:border-r-0 hover:bg-slate-800/30 sm:border-b-0 sm:border-r md:p-12"
              >
                {/* METRIC_LABEL */}
                <span className="mb-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500">
                  {item.icon} {item.label}
                </span>

                {/* MAIN_VALUE */}
                <div className="mb-3 flex items-baseline transition-transform duration-500 group-hover:translate-x-1">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {item.value}
                  </span>
                  <span className="ml-1 font-mono text-xl font-bold text-slate-600">
                    {item.unit}
                  </span>
                </div>

                {/* DESCRIPTION: Fixed Comment Text Node Error */}
                <p className="text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-slate-500">
```

### `app/(marketing)/[template_id]/_templates/starter/components/Footer.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PROFESSIONAL FOOTER
// Identity: Stable Grid Architecture, Industrial Design
// Accessibility: Direct Thai Communication
// ----------------------------------------------------

"use client"

import React from "react"
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react"

interface FooterProps {
  contact?: {
    lineId: string
    phone: string
    facebook?: string
    email: string
  }
}

export default function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl">
        {/* MAIN_FOOTER_GRID: ระบบตารางที่แข็งแรง */}
        <div className="grid grid-cols-1 gap-0 border-x border-slate-800 md:grid-cols-12">
          {/* 1. BRAND & VISION: ความน่าเชื่อถือในแวบแรก */}
          <div className="border-b border-slate-800 p-10 transition-colors hover:bg-slate-800/20 md:col-span-5 md:border-r md:p-16">
            <div className="mb-8 flex select-none items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-blue-600 font-black italic text-white">
                A
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                AEMDEVWEB<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="mb-8 max-w-sm text-lg font-medium leading-relaxed text-slate-400">
              เราเปลี่ยนเทคโนโลยีที่ซับซ้อน ให้กลายเป็นเครื่องมือที่ใช้งานง่าย
              เพื่อขับเคลื่อนธุรกิจของคุณสู่มาตรฐานสากลด้วยระบบที่แม่นยำที่สุด
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 border border-slate-700 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                <ShieldCheck size={12} /> System_v1.0
              </div>
              <div className="flex items-center gap-2 border border-slate-700 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Verified_Production
              </div>
            </div>
          </div>

          {/* 2. CONTACT_CHANNELS: ช่องทางที่เข้าถึงง่ายที่สุด */}
          <div className="border-b border-slate-800 bg-slate-900/50 p-10 md:col-span-4 md:border-r md:p-16">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
              Direct_Communication
            </span>
            <ul className="space-y-6">
              <li>
                <a
                  href={`tel:${contact?.phone}`}
                  className="group flex items-center justify-between transition-all duration-300 hover:text-blue-400"
                >
                  <div className="flex items-center gap-4">
                    <Phone
                      size={18}
                      className="text-slate-600 group-hover:text-blue-400"
                    />
                    <span className="font-bold tracking-tight">
                      {contact?.phone || "08x-xxx-xxxx"}
                    </span>
                  </div>
                  <ArrowUpRight
```

### `app/(marketing)/[template_id]/_templates/starter/components/CartSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS PRICING (REFACTORED)
// Identity: Production Professional (Stable Grid Architecture)
// Fix: Thai Typography Leading & Responsive Grid Overflow
// ----------------------------------------------------

"use client"

import React from "react"
import { Check, ArrowRight } from "lucide-react"

interface PricingPlan {
  price: string
  label: string
  isRecommended?: boolean
  details: string[]
}

interface CartSectionProps {
  pricing?: {
    starter: PricingPlan
    business: PricingPlan
  }
  themeColor?: string
}

export default function CartSection({
  pricing,
  themeColor = "#1e40af",
}: CartSectionProps) {
  // Safe Access: ป้องกัน Error หากข้อมูล Pricing หายไปหรือไม่ครบ
  if (!pricing || !pricing.starter || !pricing.business) return null

  const plans = [
    { key: "starter", data: pricing.starter },
    { key: "business", data: pricing.business },
  ]

  return (
    <section
      id="pricing"
      className="overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* PRICING_HEADER: ปรับ Leading สำหรับฟอนต์ไทย */}
        <div className="border-b border-slate-200 bg-slate-50/50 p-10 md:p-16">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Investment_Structure
          </span>
          <h2 className="text-4xl font-black uppercase leading-[1.15] tracking-tighter md:text-6xl">
            ราคาโปร่งใส <br />
            ไม่มีค่าใช้จ่ายแฝง
          </h2>
        </div>

        {/* PRICING_GRID: แบ่ง 2 ฝั่งชัดเจน ล็อกความกว้างป้องกันการยืด */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`flex flex-col p-10 transition-all duration-300 md:p-16 ${
                plan.data.isRecommended
                  ? "bg-slate-900 text-white"
                  : "border-b border-slate-200 bg-white text-slate-900 last:border-b-0 md:border-b-0 md:border-r"
              }`}
            >
              <div className="mb-12">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                    plan.data.isRecommended ? "text-blue-400" : "text-slate-400"
                  }`}
                >
                  {plan.data.label}
                </span>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {plan.data.price}
                  </span>
                  <span className="font-mono text-lg font-bold tracking-tighter opacity-50">
```

### `app/(marketing)/[template_id]/_templates/starter/components/FAQSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Sharp Accordion System)
// Fix: Layout Stability & Thai Typography Optimized
// ----------------------------------------------------

"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  // เริ่มต้นด้วยการเปิดคำถามแรกไว้เพื่อเป็น Guide ให้ผู้ใช้งาน
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "ต้องเตรียมข้อมูลอะไรบ้างในการเริ่มงาน?",
      a: "เตรียมเพียงข้อมูลพื้นฐานธุรกิจ รูปภาพสินค้า/บริการ และเบอร์โทรติดต่อครับ ทีมงานจะช่วยเรียบเรียงเนื้อหาให้เข้ากับโครงสร้างเว็บไซต์ที่โหลดไวที่สุดให้เอง",
    },
    {
      q: "เว็บไซต์รองรับการแสดงผลในมือถือหรือไม่?",
      a: "รองรับ 100% ครับ เราใช้ระบบ Responsive มาตรฐานสากล เว็บจะปรับขนาดให้สวยงามอัตโนมัติทั้งบน iPhone, Android และแท็บเล็ตทุกรุ่น",
    },
    {
      q: "มีค่าใช้จ่ายรายปีเพิ่มเติมไหม?",
      a: "ในปีแรกราคาแพ็กเกจรวมค่าจดชื่อเว็บและพื้นที่จัดเก็บแล้วครับ ปีถัดไปจะมีเพียงค่าต่ออายุชื่อโดเมนและเซิร์ฟเวอร์ตามจริง ซึ่งเราจะแจ้งเตือนล่วงหน้า 30 วัน",
    },
  ]

  return (
    <section id="faq" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl border-x border-slate-200 bg-white">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          {/* 1. SECTION_SIDEBAR: หัวข้อหลัก */}
          <div className="border-b border-slate-200 bg-white p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
              Common_Inquiries
            </span>
            <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tighter">
              คำถาม <br />
              ที่พบบ่อย
            </h2>
          </div>

          {/* 2. ACCORDION_LIST: รายการคำถามแบบโต้ตอบ */}
          <div className="flex flex-col bg-white md:col-span-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`cursor-pointer border-b border-slate-200 transition-all duration-300 last:border-b-0 ${
                  openIndex === idx ? "bg-slate-50/80" : "hover:bg-slate-50"
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {/* QUESTION_ROW */}
                <div className="flex items-center justify-between gap-4 p-8">
                  <h3
                    className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                      openIndex === idx ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  >
                    {openIndex === idx ? (
                      <Minus size={20} className="text-blue-600" />
                    ) : (
                      <Plus size={20} className="text-slate-400" />
                    )}
                  </div>
                </div>

                {/* ANSWER_ROW: แอนิเมชันเปิด-ปิดที่นุ่มนวล */}
                {openIndex === idx && (
                  <div className="px-8 pb-8 font-medium leading-relaxed text-slate-500 duration-300 animate-in fade-in slide-in-from-top-2">
                    <p className="max-w-2xl text-base">{faq.a}</p>
```

### `app/(marketing)/[template_id]/_templates/starter/components/SuccessSection.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Final Call to Action)
// Design: High-Contrast Minimalist, Grid-Stable
// ----------------------------------------------------

"use client"

import React from "react"
import { MessageSquare, ArrowRight, Zap } from "lucide-react"

interface SuccessSectionProps {
  themeColor?: string
  contact?: {
    lineId: string
  }
}

export default function SuccessSection({
  themeColor = "#1e40af",
  contact,
}: SuccessSectionProps) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:px-10 md:py-36">
          {/* 🧩 DECORATIVE_BACKGROUND_ELEMENTS */}
          <div className="absolute left-0 top-0 h-20 w-20 border-l border-t border-slate-100" />
          <div className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-slate-100" />

          {/* 🏷️ SECTION_BADGE */}
          <div className="mb-12 flex items-center gap-3 border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            <Zap size={12} className="text-yellow-500" /> Next_Step_Execution
          </div>

          {/* 📢 HEADLINE: Direct Thai UX Focus */}
          <h2 className="mb-10 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-8xl">
            เริ่มสร้างความต่าง <br />
            <span style={{ color: themeColor }} className="italic">
              ให้ธุรกิจวันนี้
            </span>
          </h2>

          {/* 📝 SUB-COPY */}
          <p className="mb-14 max-w-2xl text-lg font-bold uppercase leading-relaxed tracking-tight text-slate-500 md:text-xl">
            ไม่ต้องเสียเวลากับระบบที่ซับซ้อน ให้เราดูแลเรื่องเทคนิคทั้งหมดแทนคุณ
            เพื่อให้คุณโฟกัสกับการขยายธุรกิจได้อย่างเต็มที่
          </p>

          {/* ⚡ ACTION_GROUP: ปุ่มกดที่ออกแบบมาเพื่อ Conversion */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={`https://line.me/ti/p/${contact?.lineId || "@aemdev"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#00b900] px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-green-500/10 transition-all hover:brightness-105 active:scale-95"
            >
              <MessageSquare size={20} /> ทักแชทสอบถามทันที
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center gap-3 bg-slate-900 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 active:scale-95"
            >
              ดูผลงานที่ผ่านมา <ArrowRight size={20} />
            </button>
          </div>

          {/* 📟 SYSTEM_FOOTNOTE: เพิ่มความน่าเชื่อถือทางเทคนิค */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Project_Inquiry_Open
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="flex items-center gap-2">
              Response_Time: <span className="text-slate-900">&lt; 30_Min</span>
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
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
// 🏥 CLINIC WELLNESS CONFIGURATION (NAMED EXPORT)
// Path: app/(marketing)/[template_id]/_templates/clinic/config.ts
// Identity: Aura Wellness Center (Premium Medical)
// ----------------------------------------------------

export const clinicConfig = {
  id: "template-medical-wellness",
  name: "AURA WELLNESS CENTER",
  themeColor: "#0f766e", // Deep Teal (Professional & Trust)
  secondaryColor: "#f0fdfa", // Mint Water (Clean & Sterile)

  metadata: {
    title:
      "Aura Wellness Center | นวัตกรรมการดูแลสุขภาพระดับพรีเมียม by AEMDEVWEB",
    description:
      "คลินิกเวชกรรมเฉพาะทางที่ผสานเทคโนโลยีสมัยใหม่เข้ากับการดูแลอย่างเหนือระดับ พร้อมระบบนัดหมายออนไลน์",
    ogImage:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/clinic/og-medical.jpg",
  },

  content: {
    // --- Hero Section ---
    heroTitle: "PRECISION_CARE_FOR_YOU",
    heroSubtitle:
      "นิยามใหม่ของการดูแลสุขภาพเชิงป้องกัน โดยทีมแพทย์ผู้เชี่ยวชาญและเทคโนโลยีที่แม่นยำที่สุด",

    // --- Statistics (Trust Indicators) ---
    stats: [
      {
        id: 1,
        label: "BOARD_CERTIFIED",
        value: "15+",
        detail: "ทีมแพทย์วุฒิบัตรผู้เชี่ยวชาญเฉพาะทาง",
      },
      {
        id: 2,
        label: "HAPPY_PATIENTS",
        value: "12,000+",
        detail: "ความไว้วางใจจากคนไข้ทั่วประเทศ",
      },
      {
        id: 3,
        label: "PRECISION_TECH",
        value: "99.9%",
        detail: "ความแม่นยำของนวัตกรรมการคัดกรอง",
      },
    ],

    // --- Core Medical Services ---
    services: [
      {
        id: "svc-1",
        title: "EXECUTIVE_CHECKUP",
        detail:
          "โปรแกรมตรวจสุขภาพระดับผู้บริหารที่เจาะลึกถึงระดับ DNA เพื่อวิเคราะห์ความเสี่ยงเฉพาะบุคคล",
        icon: "Stethoscope",
      },
      {
        id: "svc-2",
        title: "ANTI_AGING_MEDICINE",
        detail:
          "ศาสตร์แห่งการชะลอวัยและฟื้นฟูเซลล์จากภายในสู่ภายนอก ด้วยนวัตกรรมทางการแพทย์ล่าสุด",
        icon: "ShieldPlus",
      },
      {
        id: "svc-3",
        title: "PERSONALIZED_WELLNESS",
        detail:
          "โปรแกรมฟื้นฟูสุขภาพเฉพาะบุคคล ออกแบบโดยแพทย์เพื่อตอบโจทย์ไลฟ์สไตล์ของคุณ",
        icon: "Activity",
      },
    ],

    // --- Social Proof & Conversion ---
    trustBadges: [
      "JCI International Standard Accredited",
      "Medical Innovation Award 2024",
      "Certified Specialist Doctors Team",
```

### `app/(marketing)/[template_id]/page.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: DYNAMIC TEMPLATE ROUTER (STABLE)
// Path: app/(marketing)/[template_id]/page.tsx
// Identity: Central Entry Point for Dynamic Routing
// ----------------------------------------------------

import { notFound } from "next/navigation"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

/**
 * 🛰️ DYNAMIC_SEO_GENERATOR
 * ดึงค่า Metadata จาก config.ts ของแต่ละเทมเพลตมาสร้าง SEO โดยอัตโนมัติ
 */
export async function generateMetadata({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // ป้องกันกรณีไม่พบข้อมูล Metadata
  if (!entry || !entry.config?.metadata) {
    return {
      title: "Marketing Template | AEMDEVWEB",
    }
  }

  const { metadata } = entry.config

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
    },
  }
}

/**
 * ⚡ STATIC_GENERATION (SSG)
 * สร้าง Path ของเทมเพลตทั้งหมดไว้ล่วงหน้าตอน Build Time เพื่อความเร็วสูงสุด
 */
export async function generateStaticParams() {
  return Object.keys(TEMPLATE_REGISTRY).map((id) => ({
    template_id: id,
  }))
}

/**
 * 🎨 MARKETING_PAGE_RENDERER
 * หน้าแสดงผลหลักที่สลับเทมเพลตตาม [template_id]
 */
export default async function MarketingPage({ params }: Props) {
  // จัดการ Async Params ตามมาตรฐาน Next.js 15
  const { template_id } = await params

  // ดึงข้อมูลจาก Registry (Case-insensitive)
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // หากไม่มีเทมเพลตใน Registry ให้ส่งไปหน้า 404
  if (!entry) return notFound()

  // ดึง Component ออกมา (เช่น StarterTemplate, CafeTemplate, ClinicTemplate)
  const SelectedTemplate = entry.component

  return (
    <main className="selection:bg-slate-900 selection:text-white">
      {/* 🚀 PASS_DATA: ส่งก้อน config ทั้งหมดเข้าไปในชื่อ 'data'
        เพื่อให้ทุก Template ดึงไปใช้งานผ่าน props.data ได้เหมือนกันทั้งหมด
```

### `app/(marketing)/[template_id]/layout.tsx`

```ts
// app/(marketing)/[template_id]/layout.tsx
import React from "react"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: Promise<{ template_id: string }>
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  // ❌ ลบ Header และ Footer ออกจากไฟล์นี้ทั้งหมด
  // เพื่อให้แต่ละ Template (Starter, Cafe, Clinic) แสดง Header ของตัวเองได้อิสระ

  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 Main Content Area */}
      <main role="main">{children}</main>
    </div>
  )
}
```

### `app/(marketing)/[template_id]/_config/registry.ts`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: TEMPLATE REGISTRY MASTER SYSTEM
// Path: app/(marketing)/[template_id]/_config/registry.ts
// Identity: Central Router for Multi-Industry Templates
// ----------------------------------------------------

import React from "react"

// 1. IMPORT CONFIGS
import { clinicConfig } from "../_templates/clinic/config"
import { cafeConfig } from "../_templates/cafe/config"
import { realEstateConfig } from "../_templates/realestate/config"
import { constructionConfig } from "../_templates/construction/config"
import { starterConfig } from "../_templates/starter/config"
// เพิ่ม Config ของสุโขทัยค้าไม้
import { starterConfig as woodBusinessConfig } from "../_templates/WoodBusiness/config"

// 2. IMPORT TEMPLATES
import ClinicTemplate from "../_templates/clinic/ClinicTemplate"
import CafeTemplate from "../_templates/cafe/CafeTemplate"
import RealEstateTemplate from "../_templates/realestate/RealEstateTemplate"
import ConstructionTemplate from "../_templates/construction/ConstructionTemplate"
import StarterTemplate from "../_templates/starter/StarterTemplate"
// เพิ่ม Template ของสุโขทัยค้าไม้
import WoodBusinessTemplate from "../_templates/WoodBusiness/WoodBusinessTemplate"

// 3. DEFINE TYPES
export interface TemplateEntry {
  config: {
    themeColor?: string
    metadata: {
      title: string
      description: string
      ogImage?: string
    }
    contact?: any
    products?: any[]
    [key: string]: any
  }
  component: React.ComponentType<any>
}

// 4. MASTER REGISTRY
export const TEMPLATE_REGISTRY: Record<string, TemplateEntry> = {
  clinic: {
    config: clinicConfig,
    component: ClinicTemplate,
  },
  cafe: {
    config: cafeConfig,
    component: CafeTemplate,
  },
  realestate: {
    config: realEstateConfig,
    component: RealEstateTemplate,
  },
  construction: {
    config: constructionConfig,
    component: ConstructionTemplate,
  },
  starter: {
    config: starterConfig,
    component: StarterTemplate,
  },
  // ลงทะเบียน "สุโขทัยค้าไม้" สำหรับ URL: /[your-site]/wood-business
  "wood-business": {
    config: woodBusinessConfig,
    component: WoodBusinessTemplate,
  },
}

/**
 * Helper function สำหรับดึงข้อมูล Template ตาม ID
 */
export const getTemplateData = (id: string): TemplateEntry | undefined => {
  return TEMPLATE_REGISTRY[id]
}
```

### `app/(marketing)/[template_id]/services/page.tsx`

```ts
/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PRODUCT CATALOG (REFACTORED)
// Identity: Grid-based Inventory, Thai UX Optimized
// ----------------------------------------------------

import React from "react"
import { notFound } from "next/navigation"
import { Check, ArrowRight } from "lucide-react" // ✅ Removed unused ShoppingCart
import { TEMPLATE_REGISTRY } from "../_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

export default async function ServicesPage({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return notFound()

  const { themeColor, products } = entry.config

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pb-20 pt-40">
      {/* 1. SECTION_HEADER: Industrial Sharp Design */}
      <div className="mb-16 border-l-8 border-slate-900 pl-6">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
          Available_Inventory
        </span>
        <h1 className="text-6xl font-black uppercase leading-none tracking-tighter text-slate-900">
          บริการและแพ็กเกจ
        </h1>
      </div>

      {/* 2. PRODUCT_GRID: High-Contrast Display */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {products?.map((item: any) => (
          <div
            key={item.id}
            className="group flex flex-col border border-slate-200 bg-white transition-all duration-500 hover:border-slate-900"
          >
            {/* PRODUCT_IMAGE_PLACEHOLDER */}
            <div className="aspect-video relative flex items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 transition-transform duration-700 group-hover:scale-110">
                Product_Image_Visual
              </div>
              {/* Animated Accent Line */}
              <div
                className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: themeColor }}
              />
            </div>

            <div className="flex flex-grow flex-col p-8 md:p-10">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="text-3xl font-black uppercase leading-tight tracking-tighter text-slate-900">
                  {item.name}
                </h3>
                <div className="text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Starting_At
                  </span>
                  <span className="text-3xl font-black italic text-slate-900">
                    ฿{item.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="mb-8 text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-500">
                {item.description}
              </p>

              {/* SPECS_LIST */}
              <ul className="mb-10 flex-grow space-y-4">
                {item.specs?.map((spec: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-slate-700"
                  >
```

### `app/(marketing)/[template_id]/contact/page.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { Send, Loader2, CheckCircle } from "lucide-react" // ✅ Removed unused MapPin
import { TEMPLATE_REGISTRY } from "../_config/registry"

export default function ContactPage() {
  const { template_id } = useParams()
  const entry = TEMPLATE_REGISTRY[(template_id as string).toLowerCase()]

  // Form State
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    budget: "",
  })

  if (!entry) return null
  const { themeColor, contact } = entry.config
  const methods = contact?.methods || []

  // Handle Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          templateId: template_id,
          source_url: typeof window !== "undefined" ? window.location.href : "",
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", phone: "", businessType: "", budget: "" })
      }
    } catch (error) {
      console.error("Submission failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pb-20 pt-40">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* 1. LEFT_SIDE: INFO - Industrial Style */}
        <div>
          <div className="mb-12 border-l-8 border-slate-900 pl-6">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
              Connect_With_Us
            </span>
            <h1 className="text-6xl font-black uppercase leading-none tracking-tighter text-slate-900">
              คุยกับเรา <br />
              เพื่อเริ่มงาน
            </h1>
          </div>
          <div className="space-y-8">
            {methods.map((method: any) => (
              <a
                href={method.link}
                key={method.label}
                className="group block border-b border-slate-100 pb-6 transition-colors"
              >
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  {method.label}
                </span>
                <span className="text-2xl font-bold text-slate-800 transition-colors group-hover:opacity-70">
                  {method.value}
                </span>
```

### `app/loading.tsx`

```ts
/** @format */
import React from "react"
import { Cpu, Terminal } from "lucide-react"

export default function Loading() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans antialiased">
      {/* 🛠️ BACKGROUND GRID DECOR (สไตล์กระดาษไขเขียนแบบ) */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        {/* ─── 01. HEADER SKELETON (หัวข้อหน้า) ─── */}
        <div className="mb-20 space-y-8">
          {/* Badge Skeleton */}
          <div className="h-10 w-48 animate-pulse border-2 border-slate-300 bg-slate-200 shadow-[4px_4px_0px_0px_#e2e8f0]" />

          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-20 w-full max-w-2xl animate-pulse bg-slate-900/10 md:h-32" />
            {/* Subtitle Skeleton */}
            <div className="h-6 w-full max-w-lg animate-pulse bg-slate-200" />
          </div>
        </div>

        {/* ─── 02. GRID SKELETON (โครงร่างการ์ด 6 ใบ) ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-14">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group relative flex flex-col border-[6px] border-slate-200 bg-white p-6 shadow-[10px_10px_0px_0px_#f1f5f9]"
            >
              {/* Image Skeleton with Shimmer Effect */}
              <div className="relative mb-8 aspect-[16/10] overflow-hidden border-b-4 border-slate-200 bg-slate-100">
                {/* Shimmer Overlay: วิ่งจากซ้ายไปขวา */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>

              {/* Meta Skeleton (Category & Ref) */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
                <div className="h-4 w-20 animate-pulse bg-slate-200" />
                <div className="h-4 w-12 animate-pulse bg-slate-100" />
              </div>

              {/* Content Skeleton (Title & Description) */}
              <div className="space-y-4">
                <div className="h-8 w-3/4 animate-pulse bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse bg-slate-100" />
                  <div className="h-4 w-5/6 animate-pulse bg-slate-100" />
                </div>
              </div>

              {/* Footer Skeleton (Stats & Button) */}
              <div className="mt-10 flex items-center justify-between border-t-2 border-slate-100 pt-6">
                <div className="h-10 w-24 animate-pulse bg-slate-100" />
                <div className="h-12 w-12 animate-pulse bg-slate-200" />
              </div>
            </div>
          ))}
        </div>

        {/* ─── 03. SYSTEM STATUS INDICATOR (มุมขวาล่าง) ─── */}
        <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4 border-4 border-slate-900 bg-white px-6 py-3 shadow-[8px_8px_0px_0px_#0F172A]">
          <div className="relative">
            {/* ใช้ animate-spin-slow ที่ตั้งค่าไว้ใน tailwind.config.ts */}
            <Cpu className="h-6 w-6 animate-spin-slow text-brand-orange" />
            <div className="absolute inset-0 animate-ping rounded-full bg-brand-orange/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              System_Loading
            </span>
            <span className="font-mono text-xs font-bold uppercase text-slate-900">
              Fetching_Registry...
            </span>
          </div>
        </div>
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
        "เลือกใช้เครื่องมือที่เหมาะสมที่สุดกับธุรกิจคุณ เพื่อให้เว็บไซต์โหลดไว ปลอดภัย และพร้อมขยายตัวได้ในระยะยาว",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "สื่อสารตรงไปตรงมา",
      description:
        "ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ไม่ใช้ศัพท์เทคนิคฟุ่มเฟือย เน้นช่วยแก้ปัญหาให้ธุรกิจจริง",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์จริง",
      description:
        "เว็บไซต์ต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือและเปลี่ยนผู้เข้าชมเป็นลูกค้า",
    },
  ]

  return (
    <div className="space-y-24 py-12 md:space-y-40">
      {/* ─── 1. STORY SECTION ─── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Area - ปรับสี Border เป็น Deep Blue และ Accent Orange */}
        <div className="relative aspect-[4/5] overflow-hidden border-l-8 border-t-8 border-[#1E3A8A] shadow-2xl md:border-l-[16px] md:border-t-[16px] lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-[#1E3A8A] px-6 py-4 text-white md:px-8 md:py-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 md:space-y-12 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-2 border-[#F97316] pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1E3A8A] md:text-xs">
              <Sparkles size={14} className="text-[#F97316]" />
              <span>ปรัชญาการทำงาน</span>
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tighter text-[#1E3A8A]">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-500">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base font-medium leading-relaxed text-slate-600 md:text-xl">
            <p>
              ผมเริ่มต้น{" "}
              <span className="font-bold text-[#1E3A8A] underline decoration-[#F97316]/40 underline-offset-4">
                aemdevweb
              </span>{" "}
              ด้วยแนวคิดที่ต้องการให้ SME ไทย มีเว็บไซต์มาตรฐานสากล
```

### `app/(main)/blog/[slug]/page.tsx`

```ts
/** @format */
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog" // ✅ นำเข้า Interface ที่เราแก้ไขแล้ว
import { ArrowLeft, Calendar, Share2, Tag } from "lucide-react"
import JsonLd from "@/components/shared/JsonLd"
import { siteConfig } from "@/config/siteConfig"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ Generate Static Params สำหรับทำ SSG
 */
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * 🛡️ Dynamic Metadata เพื่อผลทาง SEO
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) return {}

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: "article",
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  // ✅ บังคับ Type Casting เป็น BlogPost[] เพื่อกำจัด Error 'tags' does not exist
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) notFound()

  // จัดการข้อมูล Author ให้เป็นมาตรฐาน
  const authorName =
    typeof post.author === "string" ? post.author : post.author.name
  const authorAvatar =
    typeof post.author !== "string" ? post.author.avatar : null

  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO: ARTICLE SCHEMA */}
      <JsonLd
        type="BlogPosting"
        data={{
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: authorName },
          description: post.description,
        }}
      />

      {/* ─── 01. HEADER SECTION ─── */}
      <header className="relative border-b-[6px] border-[#0F172A] bg-white py-20 lg:py-32">
        <div
          className="bg-grid-pattern absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
```

### `app/(main)/blog/page.tsx`

```ts
/** @format */
import React from "react"
import { Metadata } from "next"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog" // ✅ นำเข้า Type เพื่อความแม่นยำ
import BlogSection from "@/components/BlogSection"
import { BookOpen, Terminal, Activity, Hash } from "lucide-react"
import JsonLd from "@/components/shared/JsonLd"
import { siteConfig } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: `Insights & Knowledge | ${siteConfig.name}`,
  description:
    "รวบรวมเทคนิคการสร้างเว็บไซต์และการวางโครงสร้าง Digital Architecture ฉบับเจาะลึก เน้นการนำไปใช้จริงเพื่อเพิ่ม Conversion ให้ธุรกิจ SME ไทย",
  openGraph: {
    title: `Insights - ${siteConfig.name}`,
    description: "Technical insights for modern business owners",
    images: [`${siteConfig.url}${siteConfig.ogImage}`], // ✅ ใช้จาก siteConfig โดยตรง
    type: "website",
  },
}

export default function BlogPage() {
  // คำนวณ Metadata สำหรับ System Status Display
  const totalArticles = blogData.length.toString().padStart(2, "0")

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: `${siteConfig.name} Knowledge Hub`,
          description: "Technical insights and digital strategy for Thai SME",
          url: `${siteConfig.url}/blog`,
        }}
      />

      {/* ─── 🛠️ TECHNICAL BACKGROUND DECOR ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        {/* ─── 01. INDUSTRIAL HEADER ─── */}
        <header className="mb-20 border-b-[10px] border-[#0F172A] pb-16">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl space-y-8">
              {/* Technical Badge */}
              <div className="inline-flex items-center gap-3 border-2 border-[#0F172A] bg-[#0F172A] px-5 py-2 shadow-[4px_4px_0px_0px_#F97316]">
                <Terminal size={16} className="text-[#F97316]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  KNOWLEDGE_DATABASE / LOG_V{siteConfig.version}
                </span>
              </div>

              <h1 className="font-heading text-7xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-9xl">
                Technical <br />
                <span className="text-[#1E3A8A] underline decoration-[#F97316] decoration-[12px] underline-offset-[12px]">
                  Insights.
                </span>
              </h1>

              <p className="max-w-xl text-lg font-bold leading-relaxed text-slate-500 md:text-xl">
                เจาะลึกเบื้องหลังการออกแบบโครงสร้างเว็บที่
                &quot;ขายได้จริง&quot; เปลี่ยน Technical Debt
                ให้เป็นกลยุทธ์ที่สร้างแต้มต่อให้ธุรกิจ
              </p>
            </div>

            {/* System Status Display (Desktop) */}
            <div className="hidden flex-col items-end gap-4 text-right md:flex">
              <div className="flex gap-2">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-white shadow-[6px_6px_0px_0px_#0F172A]">
                  <BookOpen size={24} className="text-[#0F172A]" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-[#1E3A8A] text-white shadow-[6px_6px_0px_0px_#0F172A]">
                  <Activity size={24} />
                </div>
```

### `app/(main)/blog/loading.tsx`

```ts
/** @format */
import React from "react"
import { Cpu, Terminal } from "lucide-react"

export default function Loading() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans antialiased">
      {/* 🛠️ BACKGROUND GRID DECOR (สไตล์กระดาษไขเขียนแบบ) */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        {/* ─── 01. HEADER SKELETON (หัวข้อหน้า) ─── */}
        <div className="mb-20 space-y-8">
          {/* Badge Skeleton */}
          <div className="h-10 w-48 animate-pulse border-2 border-slate-300 bg-slate-200 shadow-[4px_4px_0px_0px_#e2e8f0]" />

          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-20 w-full max-w-2xl animate-pulse bg-slate-900/10 md:h-32" />
            {/* Subtitle Skeleton */}
            <div className="h-6 w-full max-w-lg animate-pulse bg-slate-200" />
          </div>
        </div>

        {/* ─── 02. GRID SKELETON (โครงร่างการ์ด 6 ใบ) ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-14">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group relative flex flex-col border-[6px] border-slate-200 bg-white p-6 shadow-[10px_10px_0px_0px_#f1f5f9]"
            >
              {/* Image Skeleton with Shimmer Effect */}
              <div className="relative mb-8 aspect-[16/10] overflow-hidden border-b-4 border-slate-200 bg-slate-100">
                {/* Shimmer Overlay: วิ่งจากซ้ายไปขวา */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>

              {/* Meta Skeleton (Category & Ref) */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
                <div className="h-4 w-20 animate-pulse bg-slate-200" />
                <div className="h-4 w-12 animate-pulse bg-slate-100" />
              </div>

              {/* Content Skeleton (Title & Description) */}
              <div className="space-y-4">
                <div className="h-8 w-3/4 animate-pulse bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse bg-slate-100" />
                  <div className="h-4 w-5/6 animate-pulse bg-slate-100" />
                </div>
              </div>

              {/* Footer Skeleton (Stats & Button) */}
              <div className="mt-10 flex items-center justify-between border-t-2 border-slate-100 pt-6">
                <div className="h-10 w-24 animate-pulse bg-slate-100" />
                <div className="h-12 w-12 animate-pulse bg-slate-200" />
              </div>
            </div>
          ))}
        </div>

        {/* ─── 03. SYSTEM STATUS INDICATOR (มุมขวาล่าง) ─── */}
        <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4 border-4 border-slate-900 bg-white px-6 py-3 shadow-[8px_8px_0px_0px_#0F172A]">
          <div className="relative">
            {/* ใช้ animate-spin-slow ที่ตั้งค่าไว้ใน tailwind.config.ts */}
            <Cpu className="h-6 w-6 animate-spin-slow text-brand-orange" />
            <div className="absolute inset-0 animate-ping rounded-full bg-brand-orange/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              System_Loading
            </span>
            <span className="font-mono text-xs font-bold uppercase text-slate-900">
              Fetching_Registry...
            </span>
          </div>
        </div>
```

### `app/(main)/catalog/page.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { Layers, Zap, Target, Search } from "lucide-react" // ✅ แก้ layers -> Layers และลบ LayoutDashboard
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"

// ─── 🏗️ TYPE DEFINITIONS ───
interface SectionHeaderProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  light?: boolean
}

export default function CatalogPage() {
  // กรองโปรเจกต์แยกตามกลุ่มหลักเพื่อจัด Section
  const industrialProjects = catalogProjects.filter(
    (p) =>
      ["construction", "wood-business"].includes(p.category) ||
      p.templateId === "wood-business"
  )
  const lifestyleProjects = catalogProjects.filter((p) =>
    ["cafe", "starter"].includes(p.category)
  )
  const professionalProjects = catalogProjects.filter((p) =>
    ["clinic", "real-estate"].includes(p.category)
  )

  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* ─── 01. CATALOG HERO ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-[#0F172A] bg-white py-24 md:py-32">
        <div className="bg-grid-pattern absolute inset-0 opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 border-4 border-[#0F172A] bg-[#F97316] px-6 py-2 shadow-[6px_6px_0px_0px_#0F172A]">
              <Zap size={16} fill="white" className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Project Registry v2.5.0
              </span>
            </div>

            <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-8xl lg:text-9xl">
              Solutions <br />
              <span className="text-[#1E3A8A] underline decoration-[#0F172A] decoration-[10px] underline-offset-[12px]">
                Catalog.
              </span>
            </h1>

            <p className="max-w-2xl border-l-[12px] border-[#1E3A8A] pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              สำรวจสถาปัตยกรรมเว็บไซต์ที่เราออกแบบมาเพื่อแก้ปัญหาธุรกิจโดยเฉพาะ
              เลือกโครงสร้างที่ใช่สำหรับอุตสาหกรรมของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* ─── 02. SECTION: INDUSTRIAL & B2B ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industrial & Infrastructure"
            subtitle="ระบบสำหรับงานก่อสร้าง, โรงงาน และธุรกิจค้าส่งที่เน้นความเชื่อมั่นสูง"
            icon={<Target className="text-[#F97316]" />}
          />
          <CatalogProjectsGrid projects={industrialProjects} columns={3} />
        </div>
      </section>

      {/* ─── 03. SECTION: LIFESTYLE & E-COMMERCE ─── */}
      <section className="bg-[#0F172A] py-24 text-white md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Lifestyle & Modern Retail"
            subtitle="โซลูชันสำหรับคาเฟ่และร้านค้าปลีก ที่เน้นประสบการณ์ลูกค้าและยอดขาย"
            icon={<Layers className="text-[#1E3A8A]" />} // ✅ เปลี่ยนจาก Zap เป็น Layers เพื่อความสวยงามและใช้ Icon ที่ถูกต้อง
            light
          />
```

### `app/(main)/contact/page.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import {
  Sparkles,
  MessageCircle,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  MapPin,
  Activity,
} from "lucide-react"

// Import Components
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import JsonLd from "@/components/shared/JsonLd"
import { siteConfig } from "@/config/siteConfig"

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background font-sans antialiased selection:bg-brand-blue selection:text-white">
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

      {/* ─── 01. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-brand-navy bg-slate-50 py-24 md:py-40">
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-5xl space-y-12">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 border-4 border-brand-navy bg-white px-6 py-3 shadow-[6px_6px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy md:text-xs">
                Protocol: Open for Project v{new Date().getFullYear()}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-brand-navy md:text-8xl lg:text-9xl">
              Turn Vision into <br />
              <span className="text-brand-blue underline decoration-brand-navy decoration-[12px] underline-offset-[16px]">
                Reality.
              </span>
            </h1>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-2xl border-l-[12px] border-brand-orange pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ปรึกษาฟรีสำหรับ SME ไทยที่ต้องการโครงสร้างเว็บที่แข็งแกร่ง
                คุยง่าย ตรงจุด เหมือนมี{" "}
                <span className="text-brand-navy">Technology Partner</span>{" "}
                ดูแลโปรเจกต์ด้วยตัวเอง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. MAIN CONTENT GRID (FORM & INFO) ─── */}
      <section className="relative z-10 -mt-16 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
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
      <div className="bg-industrial-grid absolute inset-0 -z-10 opacity-30" />

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
"use client"

import React from "react"
import { servicesData } from "@/data/servicesData"
import Services from "@/components/Services"
import PricingSection from "@/components/PricingSection" // เพิ่ม PricingSection เข้ามา
import { siteConfig } from "@/config/siteConfig"
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  BarChart3,
  ChevronRight,
} from "lucide-react"

export default function ServicesPage() {
  // ข้อมูลบริการจะถูกเรียงตามที่จัดไว้ใน servicesData.ts (Starter > Wood > Clinic ...)
  const allServices = servicesData.filter((s) => s.status === "READY")

  const benefits = [
    {
      icon: <Zap className="text-[#F97316]" />,
      title: "Ultra Fast Loading",
      desc: "เว็บไซต์โหลดไว คะแนน Google PageSpeed 90+ เพิ่มโอกาสปิดการขายและดีต่อ SEO",
    },
    {
      icon: <ShieldCheck className="text-[#F97316]" />,
      title: "Security First",
      desc: "โครงสร้างปลอดภัยด้วยมาตรฐานวิศวกรรมซอฟต์แวร์ พร้อมระบบ SSL ป้องกันข้อมูลทุกโปรเจกต์",
    },
    {
      icon: <BarChart3 className="text-[#F97316]" />,
      title: "Conversion Focus",
      desc: "ออกแบบ UI/UX ให้ใช้งานง่าย นำทางลูกค้าไปสู่เป้าหมาย (การติดต่อ/การสั่งซื้อ) ได้อย่างลื่นไหล",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* ─── 1. Page Header: Architectural Blueprint Style ─── */}
      <section className="relative overflow-hidden bg-[#1E3A8A] py-28 text-white lg:py-36">
        {/* ลายตาราง Blueprint จางๆ */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-[#F97316] px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
              Engineering Solutions
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
              Professional <br />
              <span className="text-white/40">Web Modules</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-blue-100/80 md:text-xl">
              เราไม่ได้ขายแค่เว็บไซต์ แต่เราสร้าง "เครื่องมือทำเงิน"
              ที่มีโครงสร้างแข็งแรง ปรับแต่งให้เข้ากับธุรกิจเฉพาะทาง
              เพื่อผลลัพธ์ที่เป็นรูปธรรม
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Services Grid: แสดงตามลำดับที่เน้นขาย (Hook > Trust > Specialist) ─── */}
      <div className="relative z-10 -mt-10">
        <Services services={allServices} />
      </div>

      {/* ─── 3. Pricing Section: ดึงความสนใจด้วยราคาที่จับต้องได้ ─── */}
      <div className="border-y border-slate-200 bg-slate-50">
        <PricingSection />
      </div>

```

### `app/(main)/page.tsx`

```ts
/** @format */
"use client"

import React, { useMemo, useCallback } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Zap, ChevronRight, Layout, Database, ShieldCheck } from "lucide-react"

// ✅ Data Sources
import { servicesData } from "@/data/servicesData"
import { blogData } from "@/data/blog/allposts"

// ✅ Critical Components (โหลดทันทีเพื่อ LCP)
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports (โหลดเมื่อจำเป็น) ---
const ServicesSection = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-[600px] animate-pulse bg-slate-50" />,
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
   * ✅ Blog Data Normalization: ปรับ Format ข้อมูลให้พร้อมใช้งาน
   */
  const normalizePost = useCallback((post: any) => {
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
              role: "Technical Partner",
            }
          : post.author,
      readTime: post.readTime || "5 MIN READ",
    }
  }, [])

  const featuredPosts = useMemo(
    () => (blogData || []).slice(0, 4).map(normalizePost),
    [normalizePost]
  )

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-background font-sans antialiased">
      {/* ─── 1. HERO AREA: First Contentful Paint ─── */}
      <Hero
        badgeText="Industrial Web Architecture for Business"
        headline={
          <>
            BUILD{" "}
            <span className="text-brand-orange underline decoration-brand-navy/10 decoration-8 underline-offset-8">
              SMART
            </span>
            , <br />
            RELIABLE <span className="text-brand-blue">SOLUTIONS.</span>
          </>
        }
        description="เปลี่ยนหน้าเว็บธรรมดาให้เป็นวิศวกรรมการขายที่ทำงาน 24 ชั่วโมง เสถียร แม่นยำ และรองรับการขยายตัวของธุรกิจไทยโดยเฉพาะ"
      />

      {/* ─── 2. TRUST PROTOCOL (Social Proof) ─── */}
      <section className="relative z-20 -mt-10 overflow-hidden border-y-4 border-slate-900 bg-white shadow-enterprise-lg">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Engineering Status Label */}
```

### `app/(main)/layout.tsx`

```ts
/** @format */
"use client"

import React, { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // Reset scroll position เมื่อเปลี่ยนหน้า (สำคัญสำหรับ Single Page Application)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-white selection:bg-brand-blue selection:text-white">
      {/* ─── 1. Navigation (Fixed with High Z-Index) ─── */}
      <Header />

      {/* ─── 2. Main Content Area ─── */}
      {/* pt-[80px] เพื่อป้องกันคอนเทนต์จมใต้ Header ที่เป็น Fixed */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // Custom Cubic Bezier เพื่อความหรูหรา
          }}
          className="flex-grow focus:outline-none"
          id="main-content"
          role="main"
        >
          {/* จัดการขอบเขตเนื้อหาให้ยืดหยุ่นทุกหน้าจอ */}
          <div className="relative min-h-[calc(100vh-80px)] pt-20 md:pt-24">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>

      {/* ─── 3. Global CTA Layer (Conditional Rendering) ─── */}
      {/* แสดงเฉพาะหน้าที่ไม่ใช่ Contact และเน้นให้เป็นระนาบเดียวกับดีไซน์ใหม่ */}
      {pathname !== "/contact" && (
        <aside className="border-t-4 border-slate-900 bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 md:text-4xl">
              พร้อมให้เราวางโครงสร้าง <br className="md:hidden" />
              <span className="text-brand-blue">ความสำเร็จให้คุณหรือยัง?</span>
            </h3>
            <div className="mt-8">
              <button className="bg-slate-900 px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                เริ่มปรึกษาโปรเจกต์
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ─── 4. Footer ─── */}
      <Footer />

      {/* ─── 5. Mobile Mobile Bottom Gap (สำหรับ iOS Safari Toolbar) ─── */}
      <div className="h-[env(safe-area-inset-bottom)] w-full bg-slate-900" />
    </div>
  )
}
```

### `app/sitemap.ts`

```ts
/** @format */
import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/siteConfig"
import { catalogProjects } from "@/data/catalog.projects"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog" // ✅ แก้ไข: ดึง Type จาก source ที่ถูกต้อง

/**
 * 🛠️ Helper: จัดการวันที่ให้ปลอดภัยสำหรับ Sitemap
 */
function parseSafeDate(dateStr: string): Date {
  const date = new Date(dateStr)
  return isNaN(date.getTime()) ? new Date() : date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig?.url || "https://www.aemdevweb.com"

  // 1. 🏠 Static Pages: หน้าหลักของเว็บไซต์
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
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. 📂 Dynamic Catalog Pages: หน้าโครงการ/เทมเพลต
  const templateRoutes: MetadataRoute.Sitemap = (catalogProjects || []).map(
    (project) => ({
      url: `${baseUrl}/catalog/${project.templateId}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })
  )

  // 3. 📝 Dynamic Blog Pages: หน้าบทความ
  const blogRoutes: MetadataRoute.Sitemap = (
    (blogData as BlogPost[]) || []
  ).map((post) => ({
    url: `${baseUrl}/blog/${post.slug || post.id}`,
    lastModified: parseSafeDate(post.date), // ✅ ใช้ Helper ที่สร้างใหม่แทน getSafeDate ที่หายไป
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...templateRoutes, ...blogRoutes]
}
```

### `components/Header.tsx`

```ts
/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Code2, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // ✅ 1. Optimized Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ 2. Body Scroll Lock
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset"
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen])

  // ✅ 3. Navigation Logic (Event-based instead of Effect-based)
  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // ปิดเมนูก่อนเสมอเพื่อป้องกันปัญหา UI ค้าง
      setIsOpen(false)

      if (href.startsWith("/#")) {
        e.preventDefault()
        const targetId = href.replace("/#", "")

        if (pathname === "/") {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth" })
        } else {
          router.push("/")
          setTimeout(() => {
            document
              .getElementById(targetId)
              ?.scrollIntoView({ behavior: "smooth" })
          }, 150)
        }
      }
    },
    [pathname, router]
  )

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300",
        scrolled
          ? "border-b-4 border-slate-900 bg-white/95 py-4 shadow-[0_4px_0_0_rgba(15,23,42,0.1)] backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container relative z-[101] mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)} // ปิดเมนูเมื่อกด Logo
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
  Globe,
  Instagram,
  Zap,
} from "lucide-react"

import { siteConfig } from "@/config/siteConfig"

// ✅ แก้ไข: ประกาศ Interface ภายในเพื่อลด Dependency Error หากไฟล์ types/services มีปัญหา
interface MultiLangText {
  th?: string
  en?: string
}

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

  const displayName = React.useMemo(() => {
    if (!data?.name) return siteConfig.name
    if (typeof data.name === "string") return data.name
    // ✅ Type Guard ที่ปลอดภัยขึ้น
    const nameObj = data.name as MultiLangText
    return nameObj.th || nameObj.en || siteConfig.name
  }, [data?.name])

  return (
    <footer className="relative mt-20 border-t-[12px] border-[#0F172A] bg-white pb-10 pt-24">
      {/* 🛠️ TECHNICAL ACCENT */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] opacity-30 [background-size:32px_32px]" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* ─── 01. BRAND IDENTITY ─── */}
          <div className="space-y-10 lg:col-span-5">
            <Link
              href="/"
              className="inline-block border-[6px] border-[#0F172A] bg-[#1E3A8A] px-8 py-4 shadow-[10px_10px_0px_0px_#F97316] transition-transform hover:-rotate-2"
            >
              <span className="text-4xl font-black uppercase italic tracking-tighter text-white">
                {displayName}
              </span>
            </Link>

            <div className="space-y-4">
              <p className="max-w-md text-2xl font-black leading-[1.1] tracking-tighter text-[#0F172A] md:text-3xl">
                DIGITAL ARCHITECTURE <br />
                <span className="text-[#F97316]">FOR MODERN BUSINESS.</span>
              </p>
              <p className="max-w-sm text-lg font-bold leading-relaxed text-slate-500">
                เราไม่ได้แค่ทำเว็บ แต่เราวางโครงสร้าง{" "}
                <span className="text-[#0F172A] underline decoration-[#F97316] decoration-4">
                  สถาปัตยกรรมดิจิทัล
                </span>{" "}
                เพื่อการเติบโตของ SME
              </p>
            </div>

```

### `components/catalog/CatalogProjectCard.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Box, Terminal } from "lucide-react"
import { Project } from "@/data/types"
import { cn } from "@/lib/utils"

interface CatalogProjectCardProps {
  project: Project
  showCTA?: boolean
  className?: string
}

export const CatalogProjectCard = memo(function CatalogProjectCard({
  project,
  showCTA = true,
  className,
}: CatalogProjectCardProps) {
  // สร้างตัวย่อ ID สำหรับใช้แสดงผลแบบ Ref Code
  const refCode = project.id.split("-").pop()?.toUpperCase() || "ID-ERR"

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border-[6px] border-slate-900 bg-white transition-all duration-300",
        "hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_#1E3A8A]",
        "shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]",
        className
      )}
    >
      {/* ─── 🖼️ IMAGE SECTION: INDUSTRIAL VIEWPORT ─── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b-[6px] border-slate-900 bg-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
          priority={false}
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:opacity-100">
          <Link
            href={`/${project.templateId}`}
            className="group/btn flex items-center gap-3 bg-brand-orange px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#000] transition-transform hover:scale-105 active:scale-95"
          >
            Explore System <ExternalLink size={16} strokeWidth={3} />
          </Link>
        </div>

        {/* Category Floating Badge */}
        <div className="absolute left-6 top-6 z-20 hidden border-4 border-slate-900 bg-white px-3 py-1 shadow-[4px_4px_0px_0px_#000] md:block">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
            {project.category}
          </span>
        </div>
      </div>

      {/* ─── 📝 CONTENT SECTION ─── */}
      <div className="flex flex-1 flex-col p-8">
        {/* Technical Metadata Header */}
        <div className="mb-6 flex items-center justify-between border-b-4 border-slate-100 pb-5">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-brand-blue" />
            <span className="font-mono text-[10px] font-black uppercase tracking-tighter text-slate-400">
              REF_SPEC: {refCode}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[9px] font-black uppercase text-emerald-600">
              Active_Link
            </span>
          </div>
        </div>

```

### `components/catalog/CatalogProjectsGrid.tsx`

```ts
/** @format */
"use client"

import React, { useMemo } from "react"
import { Project } from "@/data/types"
import { CatalogProjectCard } from "./CatalogProjectCard"
import { LayoutDashboard, Database, SearchX } from "lucide-react"
import { cn } from "@/lib/utils"

interface CatalogProjectsGridProps {
  projects: Project[]
  columns?: 2 | 3 | 4
  showCTA?: boolean
  className?: string
}

export function CatalogProjectsGrid({
  projects,
  columns = 3,
  showCTA = true,
  className,
}: CatalogProjectsGridProps) {
  // ─── 1. COLUMN LOGIC (Performance Optimized) ───
  const gridConfig = useMemo(() => {
    const configs = {
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4 xl:grid-cols-4",
    }
    return configs[columns] || configs[3]
  }, [columns])

  // ─── 2. EMPTY STATE: REGISTRY NOT FOUND ───
  if (!projects || projects.length === 0) {
    return (
      <div className="group relative flex min-h-[400px] flex-col items-center justify-center border-[6px] border-dashed border-slate-200 bg-slate-50/30 p-12 text-center transition-all hover:border-brand-blue/30">
        {/* Blueprint Decorative Elements */}
        <div className="absolute left-6 top-6 h-12 w-12 border-l-4 border-t-4 border-slate-200 group-hover:border-brand-blue/30" />
        <div className="absolute bottom-6 right-6 h-12 w-12 border-b-4 border-r-4 border-slate-200 group-hover:border-brand-blue/30" />

        <div className="relative mb-8">
          <div className="flex h-20 w-20 items-center justify-center border-4 border-slate-200 bg-white shadow-[8px_8px_0px_0px_#e2e8f0] transition-all group-hover:shadow-[8px_8px_0px_0px_#1E3A8A]">
            <SearchX className="h-10 w-10 text-slate-300 group-hover:text-brand-blue" />
          </div>
          <Database className="absolute -bottom-2 -right-2 h-6 w-6 text-slate-400 opacity-50" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-xl font-black uppercase tracking-widest text-slate-900">
            Registry_Empty
          </h3>
          <p className="max-w-[280px] text-[10px] font-bold uppercase leading-relaxed tracking-[0.3em] text-slate-400">
            No active project specifications found matching your current filter
            criteria
          </p>
        </div>
      </div>
    )
  }

  // ─── 3. MAIN GRID RENDER ───
  return (
    <section className={cn("relative py-8", className)}>
      {/* 🛠️ TECHNICAL BACKGROUND GRID */}
      {/* เลเยอร์กระดาษไข (Blueprint Overlay) */}
      <div
        className="absolute inset-x-0 -bottom-20 -top-20 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div
        className={cn(
          "grid grid-cols-1 gap-10 md:grid-cols-2 xl:gap-14",
          gridConfig
        )}
      >
        {projects.map((project, index) => (
          <div
            key={project.id || `project-${index}`}
            className={cn(
```

### `components/Services.tsx`

```ts
/** @format */
"use client"

import React, { memo, useMemo } from "react"
import Link from "next/link"
import { LayoutGrid, ArrowRight, Sparkles, Zap } from "lucide-react"
import { ServiceItem } from "@/types/services"
import { iconMap, type IconKey } from "@/components/iconMap" // ✅ นำเข้า Type ที่ถูกต้อง
import { cn } from "@/lib/utils"

interface ServicesProps {
  services: ServiceItem[]
}

const Services = ({ services }: ServicesProps) => {
  // ✅ 1. ใช้ useMemo เพื่อป้องกันการ Filter ใหม่ทุกครั้งที่ Render
  const activeServices = useMemo(
    () => services.filter((s) => s.status === "READY"),
    [services]
  )

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="services"
    >
      {/* ─── 1. Background Decor (Blueprint Style) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── 2. Section Header ─── */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-l-[12px] border-[#1E3A8A] pl-8 lg:flex-row lg:items-end lg:pb-4">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={12} className="animate-pulse text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Service Modules
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-6xl">
              โซลูชัน <br />
              <span className="text-[#1E3A8A]">ที่ออกแบบเพื่อธุรกิจคุณ</span>
            </h2>
          </div>

          <Link
            href="/catalog"
            className="group flex items-center gap-3 border-2 border-[#1E3A8A] bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1E3A8A] transition-all hover:bg-[#1E3A8A] hover:text-white active:scale-95"
          >
            <LayoutGrid className="h-5 w-5" />
            ดูผลงานทั้งหมด
          </Link>
        </div>

        {/* ─── 3. Service Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            // ✅ 2. Type-Safe Icon Selection
            const iconKey = service.iconName as IconKey
            const Icon = iconMap[iconKey] || iconMap.STARTER
            const hasPromo = !!service.promoPrice
            const isPopular = service.isPopular

            return (
              <article
                key={service.id}
                className={cn(
                  "group relative flex flex-col border-2 transition-all duration-500 hover:-translate-y-2",
                  hasPromo
                    ? "border-[#F97316] bg-white shadow-[12px_12px_0px_0px_#F97316]"
                    : isPopular
                      ? "border-[#1E3A8A] bg-white shadow-[12px_12px_0px_0px_#1E3A8A]"
                      : "border-slate-200 bg-slate-50 hover:border-[#1E3A8A] hover:bg-white hover:shadow-[12px_12px_0px_0px_rgba(30,58,138,0.1)]"
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
import { cn } from "@/lib/utils"

interface FloatingElement {
  title: string
  desc?: string
}

interface HeroProps {
  badgeText?: string
  headline?: React.ReactNode
  description?: string
  primaryActionText?: string
  primaryActionHref?: string
  secondaryActionText?: string
  secondaryActionHref?: string
  imageSrc?: string
  imageAlt?: string
  trustBadges?: string[]
  floatingElement1?: FloatingElement
  floatingElement2?: FloatingElement
}

const Hero = ({
  badgeText = "Industrial Web Architecture สำหรับธุรกิจไทย",
  headline = (
    <>
      Build Smart, <br />
      <span className="text-brand-blue">Reliable Web</span> <br />
      Solutions
    </>
  ),
  description = "ยกระดับธุรกิจด้วยสถาปัตยกรรมเว็บระดับ Enterprise ที่ออกแบบมาเพื่อความเสถียร ความเร็ว และการเติบโตที่ไร้ขีดจำกัด พร้อมรองรับระบบ Automation เต็มรูปแบบ",
  primaryActionText = "เริ่มสร้างโปรเจกต์",
  primaryActionHref = "/contact",
  secondaryActionText = "บริการของเรา",
  secondaryActionHref = "#services",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "AEMDEVWEB Digital Architecture Workspace",
  trustBadges = [
    "Enterprise Performance",
    "Mobile First Design",
    "Workflow Automation",
  ],
  floatingElement1 = { title: "Mobile Optimized" },
  floatingElement2 = { title: "Secure Architecture" },
}: HeroProps) => {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-background pb-20 pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* ─── 1. Background Architecture ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ─── 2. Content Column ─── */}
          <div className="space-y-10 lg:col-span-7">
            {/* 🏷️ Badge: Brutalist Style */}
```

### `components/shared/JsonLd.tsx`

```ts
/** @format */
import React from "react"

interface JsonLdProps {
  type: string
  data: Record<string, any>
}

/**
 * ✅ JsonLd Component (App Router Optimized)
 * ใช้สำหรับฉีด Structured Data (JSON-LD) เพื่อให้ Google เข้าใจเนื้อหาเว็บได้ดีขึ้น
 * * วิธีใช้ในหน้า Page:
 * <JsonLd type="LocalBusiness" data={{ name: "Aemdevweb", ... }} />
 */
const JsonLd = ({ type, data }: JsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default JsonLd
```

### `components/ui/button.tsx`

```ts
/** @format */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // 🧱 สไตล์หลัก: พื้นหลังเข้ม เงาสีส้ม (Brutalist Signature)
        default:
          "border-4 border-brand-navy bg-brand-navy text-white shadow-[4px_4px_0px_0px_#F97316] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์อันตราย: สีแดงขอบหนา
        destructive:
          "border-4 border-brand-navy bg-error text-white shadow-[4px_4px_0px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์เส้นขอบ: พื้นหลังขาว เงาสีน้ำเงิน
        outline:
          "border-4 border-brand-navy bg-white text-brand-navy shadow-[4px_4px_0px_0px_#1E3A8A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์รอง: สีส้มโดดเด่น
        secondary:
          "border-4 border-brand-navy bg-brand-orange text-white shadow-[4px_4px_0px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        ghost: "text-brand-navy hover:bg-brand-blue/10",

        link: "text-brand-blue underline-offset-8 decoration-2 hover:underline font-bold",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 px-4 text-[10px]",
        lg: "h-16 px-10 text-sm",
        icon: "h-12 w-12",
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
      "bg-card text-card-foreground rounded-xl border shadow",
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
    className={cn("text-muted-foreground text-sm", className)}
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
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
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
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
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
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-slate-600 transition-all"
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
      "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-lg p-1",
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
      "focus-visible:ring-ring data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm",
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
      "focus-visible:ring-ring mt-2 ring-offset-background duration-300 animate-in fade-in-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
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
          "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
      <DialogPrimitive.Close className="focus:ring-ring data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-xl opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent">
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
      "hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50",
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
      "text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
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
      <DialogPrimitive.Close className="focus:ring-ring data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent">
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
      "border-input focus:ring-ring data-[placeholder]:text-muted-foreground flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
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
        "bg-popover text-popover-foreground relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
        "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
import { cn } from "@/lib/utils"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Direct Line",
      value: siteConfig.contact.tel,
      href: `tel:${siteConfig.contact.tel.replace(/-/g, "")}`,
      status: "Available Now",
      accent: "border-brand-blue",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Line Official",
      value: siteConfig.contact.lineId,
      href: siteConfig.contact.lineUrl,
      status: "Fast Response",
      accent: "border-emerald-500",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Enterprise Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      status: "Official Inquiries",
      accent: "border-brand-orange",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operation Hours",
      value: "Mon - Sat (09:00 - 18:00)",
      href: null,
      status: "Office Time",
      accent: "border-slate-500",
    },
  ]

  return (
    <div className="space-y-12">
      {/* ─── 01. HEADER SECTION: INDUSTRIAL COMMAND ─── */}
      <header className="space-y-6">
        <div className="inline-block border-b-[6px] border-brand-blue pb-3">
          <h2 className="font-heading text-5xl font-black uppercase italic tracking-tighter text-white lg:text-6xl">
            Connection <span className="text-brand-blue">Hub.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg font-bold leading-relaxed text-slate-400">
          ยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ ทักมาคุยรายละเอียดก่อนได้เลยครับ
          <span className="block text-white">
            ผมพร้อมช่วยวางแผนระบบที่คุ้มค่าที่สุด
          </span>
        </p>
      </header>

      {/* ─── 02. CONTACT CARDS: DATA LOG STYLE ─── */}
      <div className="grid grid-cols-1 gap-4">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group relative border-2 border-white/5 bg-brand-navy p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] transition-all hover:border-brand-blue hover:bg-white/5 hover:shadow-[4px_4px_0px_0px_#1E3A8A]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* ICON BOX */}
```

### `components/ContactForm.tsx`

```ts
/** @format */
"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2 } from "lucide-react" // ✅ ลบ AlertCircle ออก
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
// ✅ ลบ ControllerRenderProps และ cn ออกเนื่องจากไม่ได้ใช้

const formSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุล"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "กรุณากรอกเฉพาะตัวเลข")
    .min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
  subject: z.string().min(5, "กรุณาระบุหัวข้อที่ต้องการปรึกษา"),
  message: z.string().min(10, "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร"),
})

type FormValues = z.infer<typeof formSchema>

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
      const payload = { ...values, source: templateId || "direct_contact" }
      console.log("Transmitting Data:", payload)

      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast({
        title: "DATA TRANSMITTED",
        description: "ผมได้รับข้อมูลแล้ว จะติดต่อกลับหาคุณโดยเร็วที่สุดครับ",
      })
      form.reset()
    } catch (err) {
      console.error("Submit Error:", err)
      toast({
        variant: "destructive",
        title: "SYSTEM ERROR",
        description: "ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
      })
    } finally {
      setIsPending(false)
    }
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
  config?: any
}

export default function CTA({
  // ✅ อัปเดตข้อความ Title และ Subtitle ตามที่คุณต้องการ
  title = "พร้อมให้เราวางโครงสร้าง ความสำเร็จให้คุณหรือยัง?",
  subtitle = "เริ่มปรึกษาโปรเจกต์กับเราวันนี้ เพื่อเปลี่ยนไอเดียของคุณให้เป็นสถาปัตยกรรมดิจิทัลที่แข็งแกร่งและยั่งยืน",
  config,
}: CTAProps) {
  const customNotice = config?.customDesignNotice

  return (
    <section
      className="bg-white px-6 py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden border-[6px] border-slate-900 bg-brand-navy px-8 py-20 shadow-[16px_16px_0px_0px_#1E3A8A] md:px-20 md:py-28">
        {/* ─── 🧩 BACKGROUND LAYER ─── */}
        <div
          className="bg-grid-pattern absolute inset-0 z-0 opacity-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center space-y-14 text-center">
          {/* ─── 🛠️ CUSTOM DESIGN NOTICE ─── */}
          {customNotice && (
            <div className="group relative w-full max-w-3xl border-4 border-dashed border-white/20 bg-white/5 p-8 transition-colors hover:border-brand-blue">
              <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 border-2 border-white/20 bg-brand-navy px-6 py-1">
                <PenTool size={14} className="text-brand-orange" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Bespoke Solution
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-blue">
                  {customNotice.title_th}
                </h3>
                <p className="text-base font-bold leading-relaxed text-slate-300">
                  {customNotice.description_th}
                </p>
                <div className="pt-2 opacity-40">
                  <p className="text-[9px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                    {customNotice.title_en}: {customNotice.description_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 🏷️ BADGE */}
          <div className="inline-flex items-center gap-3 border-2 border-brand-blue bg-brand-blue/10 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(30,58,138,0.5)]">
            <Sparkles className="h-4 w-4 animate-pulse text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">
              Direct Consultation v2.5
            </span>
          </div>

```

### `components/PricingSection.tsx`

```ts
/** @format */
"use client"

import React, { memo } from "react"
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const PricingSection = () => {
  // จัดลำดับแผนการลงทุน: เอา Starter ขึ้นก่อน ตามด้วย Professional และ Maintenance
  const sortedPlans = [...siteConfig.pricingPlans].sort((a, b) => {
    const order = { starter: 1, professional: 2, maintenance: 3 }
    return (
      (order[a.id as keyof typeof order] || 99) -
      (order[b.id as keyof typeof order] || 99)
    )
  })

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="pricing"
    >
      {/* ─── Background Decor: Blueprint Grid ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── Header ─── */}
        <div className="mb-20 flex flex-col justify-between gap-6 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={14} className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Investment Plans
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
              เลือกระดับ <br className="hidden md:block" />
              <span className="text-[#1E3A8A]">การลงทุนที่คุ้มค่า</span>
            </h2>
          </div>
          <div className="hidden pb-2 lg:block">
            <p className="text-right text-sm font-bold uppercase leading-relaxed tracking-widest text-slate-400">
              Transparent Pricing <br />
              <span className="text-[#F97316]">No Hidden Fees</span>
            </p>
          </div>
        </div>

        {/* ─── Pricing Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sortedPlans.map((plan) => {
            const isStarter = plan.id === "starter"
            const isPro = plan.isRecommended // ตัว 12,900.-

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col border-2 p-8 transition-all duration-500",
                  isStarter || isPro
                    ? "z-10 scale-[1.02] border-[#1E3A8A] bg-white shadow-[12px_12px_0px_0px_#1E3A8A]"
                    : "border-slate-200 bg-slate-50 shadow-sm hover:border-[#1E3A8A]/50"
                )}
              >
                {/* Badge สำหรับแพ็กเกจยอดนิยม หรือ Flash Sale */}
                {isStarter && (
                  <div className="absolute -top-5 left-6 flex items-center gap-2 bg-[#F97316] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                    <Zap size={12} fill="currentColor" /> Flash Sale
                  </div>
                )}
                {isPro && (
```

### `components/SocialProof.tsx`

```ts
/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle2 } from "lucide-react"
import { reviews } from "@/data/reviews"
import Image from "next/image"

const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden border-y-[8px] border-slate-900 bg-white py-24 lg:py-32"
      id="social-proof"
    >
      {/* ─── BACKGROUND ARCHITECTURE ─── */}
      <div
        className="bg-[size:40px:40px] absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-30"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* ─── 1. TRUST STATS HEADER ─── */}
        <div className="mb-16 px-6 text-center lg:mb-24">
          <div className="mb-6 inline-flex items-center gap-3 border-4 border-slate-900 bg-yellow-400 px-6 py-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <CheckCircle2 size={16} className="text-slate-900" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-900">
              Trust_Protocol_Active
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-7xl">
            ผลลัพธ์ที่พิสูจน์ได้ <br />
            <span className="text-[#1E3A8A]">โดยทีมวิศวกรและพาร์ทเนอร์</span>
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-12 border-y-2 border-dashed border-slate-200 py-10">
            {[
              { label: "Happy Clients", value: "50+", suffix: "" },
              { label: "Projects Delivered", value: "120+", suffix: "" },
              { label: "Customer Satisfaction", value: "99", suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 2. INFINITE MARQUEE REVIEWS ─── */}
        <div className="relative w-full overflow-hidden py-12">
          {/* Marquee Container */}
          <motion.div
            className="flex w-max gap-8 px-4"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60, // ปรับความเร็วให้ดูพรีเมียม (ไม่เร็วเกินไป)
                ease: "linear",
              },
            }}
          >
            {/* Double the list for seamless looping */}
            {[...reviews, ...reviews].map((review, index) => (
              <article
                key={`${review.id}-${index}`}
                className="group relative w-[420px] border-4 border-slate-900 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(30,58,138,1)]"
              >
                <Quote
                  className="absolute right-8 top-8 h-12 w-12 text-slate-50 transition-colors group-hover:text-blue-50/50"
                  aria-hidden="true"
                />
```

### `components/FAQSection.tsx`

```ts
/** @format */
"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react"

// ✅ Data Structure: คำถามที่พบบ่อย
const DEFAULT_FAQS = [
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
      "ผมวางโครงสร้างเว็บตามมาตรฐาน SEO 100% ครับ ทั้งความเร็วและการจัดวาง Tag ต่างๆ ซึ่งจะช่วยให้ Google เข้ามาเก็บข้อมูลได้ง่ายขึ้น ส่งผลดีต่ออันดับในระยะยาวครับ",
  },
  {
    question: "ถ้าต้องการแก้ไขข้อมูลเองในอนาคต ทำได้ไหม?",
    answer:
      "ทำได้แน่นอนครับ! ผมมีคลิปวิดีโอสอนใช้งานเบื้องต้นส่งให้ด้วยครับ หากติดขัดตรงไหนสามารถทักมาสอบถามได้ตลอด เป็นบริการหลังการขายครับ",
  },
]

interface FAQProps {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQProps[]
  primaryColor?: string
}

const FAQSection = ({
  faqs = DEFAULT_FAQS,
  primaryColor = "#1E3A8A",
}: FAQSectionProps) => {
  // 💡 ตัดการใช้ useEffect/setHasMounted ออกเพื่อลด Cascading Renders และ Hydration Warning
  // Accordion ของ Radix UI รองรับ SSR ได้ดีอยู่แล้ว

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
      aria-labelledby="faq-title"
    >
      {/* ─── 🧩 BACKGROUND DECOR ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-[0.05]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          {/* ─── 🏛️ LEFT: STRATEGIC HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#F97316]">
                <HelpCircle size={16} className="text-[#F97316]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                  Knowledge Database
                </span>
              </div>
```

### `components/BlogSection.tsx`

```ts
/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Terminal } from "lucide-react"
import { BlogPost } from "@/types/blog"
import { cn } from "@/lib/utils"

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug || post.id}`}
          className="group relative flex flex-col border-[6px] border-slate-900 bg-white p-6 transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#1E3A8A]"
        >
          {/* 🖼️ IMAGE CONTAINER: INDUSTRIAL FRAME */}
          <div className="relative mb-8 aspect-[16/9] overflow-hidden border-4 border-slate-900 bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
            />
            {/* OVERLAY BADGE */}
            <div className="absolute left-4 top-4 border-2 border-slate-900 bg-white px-3 py-1 shadow-[4px_4px_0px_0px_#0F172A]">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">
                {post.category}
              </span>
            </div>
          </div>

          {/* 🏷️ META INFORMATION */}
          <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                LOG_ID: {post.id.slice(0, 8)}
              </span>
            </div>
            <span className="font-mono text-[10px] font-black text-slate-900">
              [{post.date}]
            </span>
          </div>

          {/* 📝 TITLE & DESCRIPTION */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 group-hover:text-brand-blue">
              {post.title}
            </h3>

            <p className="line-clamp-2 text-base font-bold leading-relaxed text-slate-500">
              {post.description}
            </p>
          </div>

          {/* 👤 FOOTER: AUTHOR & ACTION */}
          <div className="mt-10 flex items-center justify-between border-t-4 border-slate-900 pt-8">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_#000]">
                {typeof post.author !== "string" ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900 text-[10px] text-white">
                    {post.author.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
```

### `lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ✅ ฟังก์ชัน cn ใช้รวม class หลายตัวเข้าด้วยกัน
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

- Total code files: **83**
- Previewed: **83**
- Auth/Role logic: **12**
- Absolute imports: **44**

## 🗄️ JSON Validation

> JSON validity: **100%**

## 📄 CSV Preview

> CSV readable: **100%**

## 🎯 Project Intent Detection
