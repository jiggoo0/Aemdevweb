Welcome to Termux!

Docs: https://termux.dev/docs
Donate: https://termux.dev/donate
Community: https://termux.dev/community

Working with packages:

- Search: pkg search <query>
- Install: pkg install <package>
- Upgrade: pkg upgrade

Subscribing to additional repositories:

- Root: pkg install root-repo
- X11: pkg install x11-repo

For fixing any repository issues,
try 'termux-change-repo' command.

Report issues at https://termux.dev/issues
➜ ~ z aem
➜ Aemdevweb git:(main) ✗ clean
--- [ LAUNCHING DEEP CLEANING PROCOTOL ] ---
[1/5] Cleaning Project Artifacts...
[2/5] Pruning Package Managers...
Removed all cached metadata files
Removed 24795 files
Removed 700 packages
npm warn Unknown project config "arch". This will stop working in the next major version of npm.
npm warn Unknown project config "GYP_DEFINES". This will stop working in the next major version of npm.
npm warn using --force Recommended protections disabled.
[3/5] Cleaning Termux System...
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
[4/5] Clearing Global Caches...
--- [ CLEAN COMPLETED SUCCESSFULLY ] ---
Current storage status:
Filesystem Size Used Avail Use% Mounted on
/dev/block/dm-77 105G 30G 75G 29% /data/user/0
➜ Aemdevweb git:(main) ✗ pnpm clean
! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-10.29.3.tgz
? Do you want to continue? [Y/n] y

^[[A

> aemdevweb.com@7.2.99 clean /data/data/com.termux/files/home/Aemdevweb
> rm -rf .next node_modules pnpm-lock.yaml && GYP_DEFINES="android_ndk_path=''" pnpm install

Progress: resolved 1, reused 0, downloaded 0, addeProgress: resolved 5, reused 0, downloaded 0, addeProgress: resolved 6, reused 0, downloaded 0, addeProgress: resolved 7, reused 0, downloaded 0, adde WARN  GET https://registry.npmjs.org/@mdx-js%2Floader error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 7, reused 0, downloaded 0, adde WARN  GET https://registry.npmjs.org/@img%2Fsharp-wasm32 error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 7, reused 0, downloaded 0, adde WARN  GET https://registry.npmjs.org/typescript-eslint error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 7, reused 0, downloaded 0, adde WARN  GET https://registry.npmjs.org/vercel error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 7, reused 0, downloaded 0, addeProgress: resolved 10, reused 0, downloaded 1, addProgress: resolved 11, reused 0, downloaded 4, addProgress: resolved 12, reused 0, downloaded 4, addProgress: resolved 12, reused 0, downloaded 6, add WARN  GET https://registry.npmjs.org/@mdx-js/react/-/react-3.1.1.tgz error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 12, reused 0, downloaded 6, add WARN  GET https://registry.npmjs.org/@types%2Fnode error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 12, reused 0, downloaded 6, addProgress: resolved 13, reused 0, downloaded 7, addProgress: resolved 13, reused 0, downloaded 8, addProgress: resolved 14, reused 0, downloaded 8, add WARN  GET https://registry.npmjs.org/@types/react-dom/-/react-dom-19.0.3.tgz error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 14, reused 0, downloaded 8, addProgress: resolved 15, reused 0, downloaded 8, addProgress: resolved 16, reused 0, downloaded 8, addProgress: resolved 16, reused 0, downloaded 9, addProgress: resolved 17, reused 0, downloaded 10, adProgress: resolved 19, reused 0, downloaded 12, adProgress: resolved 20, reused 0, downloaded 14, adProgress: resolved 21, reused 0, downloaded 14, adProgress: resolved 22, reused 0, downloaded 14, adProgress: resolved 23, reused 0, downloaded 14, adProgress: resolved 24, reused 0, downloaded 14, adProgress: resolved 24, reused 0, downloaded 15, adProgress: resolved 24, reused 0, downloaded 16, adProgress: resolved 24, reused 0, downloaded 17, adProgress: resolved 25, reused 0, downloaded 19, adProgress: resolved 26, reused 0, downloaded 20, adProgress: resolved 26, reused 0, downloaded 21, adProgress: resolved 27, reused 0, downloaded 21, ad WARN  Request took 11470ms: https://registry.npmjs.org/postcss
Progress: resolved 27, reused 0, downloaded 21, adProgress: resolved 30, reused 0, downloaded 21, adProgress: resolved 31, reused 0, downloaded 22, adProgress: resolved 32, reused 0, downloaded 26, adProgress: resolved 32, reused 0, downloaded 27, adProgress: resolved 33, reused 0, downloaded 27, adProgress: resolved 35, reused 0, downloaded 28, adProgress: resolved 36, reused 0, downloaded 28, ad WARN  Request took 10316ms: https://registry.npmjs.org/@next%2Fmdx
Progress: resolved 36, reused 0, downloaded 28, adProgress: resolved 38, reused 0, downloaded 30, ad WARN  Request took 14116ms: https://registry.npmjs.org/@mdx-js%2Floader6: 15.78 kB/30.88 MB
Progress: resolved 38, reused 0, downloaded 30, ad WARN  Request took 14940ms: https://registry.npmjs.org/@tailwindcss%2Fpostcss78 kB/30.88 MB
Progress: resolved 39, reused 0, downloaded 30, ad WARN  Request took 15052ms: https://registry.npmjs.org/@next%2Fbundle-analyzer8 kB/30.88 MB
Progress: resolved 39, reused 0, downloaded 30, ad WARN  1 other warnings  WARN  2 other warningsreused 0, downloaded 40, ad WARN  GET https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 78, reused 0, downloaded 65, ad WARN  GET https://registry.npmjs.org/@humanfs%2Fnode error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 78, reused 0, downloaded 65, ad WARN  GET https://registry.npmjs.org/escape-string-regexp error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 81, reused 0, downloaded 69, ad WARN  GET https://registry.npmjs.org/@humanwhocodes%2Fretry error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 81, reused 0, downloaded 69, ad WARN  GET https://registry.npmjs.org/@eslint-comm WARN  6 other warningsECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 81, reused 0, downloaded 69, ad WARN  GET https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
 WARN  7 other warningsreused 0, downloaded 69, ad WARN  GET https://registry.npmjs.org/strip-bom-string error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 166, reused 0, downloaded 151,  WARN  GET https://registry.npmjs.org/section-matter error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 168, reused 0, downloaded 153, Downloading next@16.1.6: 30.88 MB/30.88 MB, done Progress: resolved 305, reused 0, downloaded 223, Progress: resolved 312, reused 0, downloaded 224, Progress: resolved 323, reused 0, downloaded 225, Progress: resolved 333, reused 0, downloaded 229,  WARN  8 other warnings reused 0, downloaded 234, Progress: resolved 345, reused 0, downloaded 238, Progress: resolved 351, reused 0, downloaded 243, Progress: resolved 359, reused 0, downloaded 250, Progress: resolved 363, reused 0, downloaded 254, Progress: resolved 365, reused 0, downloaded 254, Progress: resolved 366, reused 0, downloaded 259, Progress: resolved 367, reused 0, downloaded 260, Progress: resolved 369, reused 0, downloaded 265, Progress: resolved 374, reused 0, downloaded 267, Progress: resolved 376, reused 0, downloaded 272, Progress: resolved 381, reused 0, downloaded 275, Progress: resolved 384, reused 0, downloaded 278, Progress: resolved 392, reused 0, downloaded 282, Progress: resolved 394, reused 0, downloaded 287, Progress: resolved 403, reused 0, downloaded 294, Progress: resolved 414, reused 0, downloaded 303, Progress: resolved 419, reused 0, downloaded 306, Progress: resolved 421, reused 0, downloaded 308, Progress: resolved 427, reused 0, downloaded 317, Progress: resolved 436, reused 0, downloaded 327, Progress: resolved 445, reused 0, downloaded 333, Progress: resolved 449, reused 0, downloaded 339, Progress: resolved 456, reused 0, downloaded 347, Progress: resolved 464, reused 0, downloaded 353, Progress: resolved 468, reused 0, downloaded 360, Progress: resolved 473, reused 0, downloaded 362, Progress: resolved 473, reused 0, downloaded 366, Progress: resolved 477, reused 0, downloaded 369, Progress: resolved 480, reused 0, downloaded 373, Progress: resolved 483, reused 0, downloaded 374, Progress: resolved 484, reused 0, downloaded 376, Progress: resolved 488, reused 0, downloaded 380, Progress: resolved 495, reused 0, downloaded 382, Progress: resolved 496, reused 0, downloaded 382, Progress: resolved 505, reused 0, downloaded 389, Progress: resolved 514, reused 0, downloaded 392, Progress: resolved 517, reused 0, downloaded 397, Progress: resolved 523, reused 0, downloaded 398, Progress: resolved 526, reused 0, downloaded 400, Progress: resolved 532, reused 0, downloaded 405, Progress: resolved 535, reused 0, downloaded 414, Progress: resolved 536, reused 0, downloaded 416, Progress: resolved 537, reused 0, downloaded 416, Progress: resolved 540, reused 0, downloaded 418, Progress: resolved 544, reused 0, downloaded 422, Progress: resolved 553, reused 0, downloaded 429, Progress: resolved 558, reused 0, downloaded 439, Progress: resolved 567, reused 0, downloaded 443, Progress: resolved 571, reused 0, downloaded 446, Progress: resolved 578, reused 0, downloaded 450, Progress: resolved 579, reused 0, downloaded 450, Progress: resolved 589, reused 0, downloaded 459, Progress: resolved 591, reused 0, downloaded 463, Progress: resolved 592, reused 0, downloaded 464, Progress: resolved 595, reused 0, downloaded 468, Progress: resolved 595, reused 0, downloaded 471, Progress: resolved 595, reused 0, downloaded 474, Progress: resolved 604, reused 0, downloaded 477, Progress: resolved 608, reused 0, downloaded 477, Progress: resolved 611, reused 0, downloaded 478,  WARN  9 other warnings reused 0, downloaded 478, Progress: resolved 617, reused 0, downloaded 478, Progress: resolved 621, reused 0, downloaded 481, Progress: resolved 625, reused 0, downloaded 482, Progress: resolved 631, reused 0, downloaded 483, Progress: resolved 634, reused 0, downloaded 484, Progress: resolved 635, reused 0, downloaded 484, Progress: resolved 643, reused 0, downloaded 486, Progress: resolved 645, reused 0, downloaded 491, Progress: resolved 650, reused 0, downloaded 495, Progress: resolved 663, reused 0, downloaded 501, Progress: resolved 670, reused 0, downloaded 512, Progress: resolved 672, reused 0, downloaded 514, Progress: resolved 673, reused 0, downloaded 514, Progress: resolved 679, reused 0, downloaded 518,  WARN  GET https://registry.npmjs.org/markdown-table error (ECONNRESET). Will retry in 10 seconds. 2 retries left.
Progress: resolved 679, reused 0, downloaded 518, Progress: resolved 679, reused 0, downloaded 519, added 0
Downloading @rolldown/binding-android-arm64@1.0.0- WARN  10 other warningsreused 0, downloaded 525, Progress: resolved 700, reused 0, downloaded 535, Progress: resolved 705, reused 0, downloaded 543, Progress: resolved 721, reused 0, downloaded 558, Progress: resolved 735, reused 0, downloaded 570, Progress: resolved 742, reused 0, downloaded 575, Progress: resolved 750, reused 0, downloaded 584, Progress: resolved 760, reused 0, downloaded 594, Progress: resolved 773, reused 0, downloaded 609, Progress: resolved 784, reused 0, downloaded 615,  WARN  11 other warningsreused 0, downloaded 628, Progress: resolved 806, reused 0, downloaded 636, Progress: resolved 815, reused 0, downloaded 650, Progress: resolved 824, reused 0, downloaded 679, Progress: resolved 827, reused 0, downloaded 695, Progress: resolved 827, reused 0, downloaded 696, Downloading @rolldown/binding-android-arm64@1.0.0-Downloading @rolldown/binding-android-arm64@1.0.0-rc.1: 7.83 MB/7.83 MB, done
Progress: resolved 827, reused 0, downloaded 698, Progress: resolved 827, reused 0, downloaded 699, Progress: resolved 828, reused 0, downloaded 699, Progress: resolved 828, reused 0, downloaded 700, Packages: +696
++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, added 696, done
node_modules/.pnpm/esbuild@0.27.0/node_modules/esbnode_modules/.pnpm/esbuild@0.27.0/node_modules/esbuild: Running postinstall script, done in 1.3s

dependencies:

- @img/sharp-wasm32 0.34.5
- @mdx-js/loader 3.1.1
- @mdx-js/react 3.1.1
- @next/mdx 16.1.6
- @radix-ui/react-accordion 1.2.12
- @radix-ui/react-slot 1.2.4
- @vercel/speed-insights 1.3.1
- class-variance-authority 0.7.1
- clsx 2.1.1
- framer-motion 12.34.0
- gray-matter 4.0.3
- lucide-react 0.474.0 (0.563.0 is available)
- next 16.1.6
- next-mdx-remote 5.0.0 (6.0.0 is available)
- next-themes 0.4.6
- nextjs-toploader 3.9.17
- react 19.0.0 (19.2.4 is available)
- react-dom 19.0.0 (19.2.4 is available)
- remark-frontmatter 5.0.0
- remark-gfm 4.0.1
- sharp 0.34.5
- sonner 1.7.4 (2.0.7 is available)
- tailwind-merge 3.4.0
- tailwindcss-animate 1.0.7

devDependencies:

- @eslint/js 9.39.2 (10.0.1 is available)
- @next/bundle-analyzer 16.1.6
- @next/eslint-plugin-next 16.1.6
- @swc/helpers 0.5.18
- @tailwindcss/postcss 4.1.18
- @types/mdx 2.0.13
- @types/node 22.13.1 (25.2.3 is available)
- @types/react 19.0.8 (19.2.14 is available)
- @types/react-dom 19.0.3 (19.2.3 is available)
- autoprefixer 10.4.24
- eslint 9.19.0 (10.0.0 is available)
- eslint-plugin-tailwindcss 3.18.2
- eslint-plugin-unused-imports 4.4.1
- knip 5.83.1
- madge 8.0.0
- postcss 8.5.6
- postcss-load-config 6.0.1
- prettier 3.8.1
- prettier-plugin-tailwindcss 0.7.2
- tailwindcss 4.1.18
- typescript 5.9.3
- typescript-eslint 8.55.0
- vercel 50.15.1

╭ Warning ───────────────────────────────────────╮
│ │
│ Ignored build scripts: sharp@0.34.5. │
│ Run "pnpm approve-builds" to pick which │
│ dependencies should be allowed to run │
│ scripts. │
│ │
╰────────────────────────────────────────────────╯
Done in 1m 42.1s using pnpm v10.29.3
➜ Aemdevweb git:(main) ✗
➜ Aemdevweb git:(main) ✗ pnpm knip

> aemdevweb.com@7.2.99 knip /data/data/com.termux/files/home/Aemdevweb
> knip --cache --no-exit-code

✂️ Excellent, Knip found no issues.
➜ Aemdevweb git:(main) ✗

✂️ Excellent, Knip found no issues.
➜ Aemdevweb git:(main) ✗ pch

> aemdevweb.com@7.2.99 fix /data/data/com.termux/files/home/Aemdevweb
> pnpm format && pnpm lint --fix

> aemdevweb.com@7.2.99 format /data/data/com.termux/files/home/Aemdevweb
> prettier --write .

.prettierrc 170ms (unchanged)
app/(routes)/areas/[slug]/page.tsx 494ms (unchanged)
app/(routes)/areas/page.tsx 155ms (unchanged)
app/(routes)/blog/[slug]/page.tsx 110ms (unchanged)
app/(routes)/blog/page.tsx 99ms (unchanged)
app/(routes)/case-studies/[slug]/page.tsx 132ms (unchanged)
app/(routes)/case-studies/page.tsx 99ms (unchanged)
app/(routes)/services/[slug]/page.tsx 95ms (unchanged)
app/(routes)/services/page.tsx 93ms (unchanged)
app/about/page.tsx 113ms (unchanged)
app/globals.css 178ms (unchanged)
app/layout.tsx 82ms (unchanged)
app/loading.tsx 103ms (unchanged)
app/manifest.ts 31ms (unchanged)
app/not-found.tsx 54ms (unchanged)
app/page.tsx 97ms (unchanged)
app/privacy/page.tsx 88ms (unchanged)
app/robots.ts 25ms (unchanged)
app/sitemap.ts 78ms (unchanged)
app/status/page.tsx 120ms (unchanged)
app/template.tsx 24ms (unchanged)
app/terms/page.tsx 64ms (unchanged)
components.json 9ms (unchanged)
components/features/areas/AreaCard.tsx 87ms (unchanged)
components/features/blog/BlogCard.tsx 105ms (unchanged)
components/features/case-studies/CaseStudyCard.tsx 62ms (unchanged)
components/features/landing/Hero.tsx 78ms (unchanged)
components/features/landing/PricingSection.tsx 96ms (unchanged)
components/features/landing/WorkProcess.tsx 96ms (unchanged)
components/features/services/ServiceCard.tsx 96ms (unchanged)
components/features/services/ServiceListingHub.tsx 59ms (unchanged)
components/layout/Footer.tsx 87ms (unchanged)
components/layout/Navbar.tsx 113ms (unchanged)
components/layout/PageTransition.tsx 57ms (unchanged)
components/layout/TopLoader.tsx 29ms (unchanged)
components/providers/ThemeProvider.tsx 29ms (unchanged)
components/seo/JsonLd.tsx 42ms (unchanged)
components/shared/ConversionCTA.tsx 69ms (unchanged)
components/shared/FloatingContainer.tsx 52ms (unchanged)
components/shared/ImpactStats.tsx 74ms (unchanged)
components/shared/LineStickyButton.tsx 38ms (unchanged)
components/shared/TrustBadge.tsx 63ms (unchanged)
components/templates/bio/Index.tsx 110ms (unchanged)
components/templates/bio/Schema.ts 58ms (unchanged)
components/templates/catalog/Index.tsx 95ms (unchanged)
components/templates/catalog/Schema.ts 59ms (unchanged)
components/templates/corporate/Index.tsx 70ms (unchanged)
components/templates/corporate/Schema.ts 71ms (unchanged)
components/templates/hotelresort/Index.tsx 60ms (unchanged)
components/templates/hotelresort/Schema.ts 39ms (unchanged)
components/templates/local-authority/Index.tsx 72ms (unchanged)
components/templates/local-authority/Schema.ts 40ms (unchanged)
components/templates/salepage/\_components/DirectOrderForm.tsx 71ms (unchanged)
components/templates/salepage/\_components/FeatureComparison.tsx 59ms (unchanged)
components/templates/salepage/\_components/FlashSaleTimer.tsx 62ms (unchanged)
components/templates/salepage/\_components/SaleHero.tsx 54ms (unchanged)
components/templates/salepage/\_components/StickyBuyButton.tsx 46ms (unchanged)
components/templates/salepage/\_components/ThaiTrustBadge.tsx 57ms (unchanged)
components/templates/salepage/Index.tsx 49ms (unchanged)
components/templates/salepage/Schema.ts 35ms (unchanged)
components/templates/sections/DynamicFAQ.tsx 35ms (unchanged)
components/templates/sections/FeatureGrid.tsx 52ms (unchanged)
components/templates/sections/HeroEngine.tsx 50ms (unchanged)
components/templates/sections/LayoutEngine.tsx 48ms (unchanged)
components/templates/seo-agency/index.tsx 78ms (unchanged)
components/templates/seo-agency/Schema.ts 58ms (unchanged)
components/templates/TemplateRenderer.tsx 42ms (unchanged)
components/ui/Accordion.tsx 46ms (unchanged)
components/ui/AmbientBackground.tsx 29ms (unchanged)
components/ui/Button.tsx 32ms (unchanged)
components/ui/Callout.tsx 26ms (unchanged)
components/ui/IconRenderer.tsx 63ms (unchanged)
components/ui/Skeleton.tsx 56ms (unchanged)
components/ui/SkeletonCard.tsx 73ms (unchanged)
components/ui/SkeletonGrid.tsx 65ms (unchanged)
components/ui/Sonner.tsx 39ms (unchanged)
components/ui/ThemeToggle.tsx 84ms (unchanged)
config/00-SYSTEM-MANDATE.md 218ms (unchanged)
config/01-SYSTEM-PROMPT-EXTENSION.md 171ms (unchanged)
constants/area-nodes.ts 74ms (unchanged)
constants/image-blur-data.ts 73ms (unchanged)
constants/master-registry.ts 77ms (unchanged)
constants/navigation.ts 28ms (unchanged)
constants/site-config.ts 25ms (unchanged)
content/blog/5-points-killing-sales.mdx 138ms (unchanged)
content/blog/advanced-schema-markup.mdx 88ms (unchanged)
content/blog/case-study-unlink-th.mdx 58ms (unchanged)
content/blog/copywriting-secrets.mdx 54ms (unchanged)
content/blog/core-web-vitals-speed.mdx 57ms (unchanged)
content/blog/ecommerce-conversion-seo.mdx 43ms (unchanged)
content/blog/facebook-ads-vs-website.mdx 67ms (unchanged)
content/blog/lower-north-digital-transformation.mdx 57ms (unchanged)
content/blog/seo-2026-strategy.mdx 100ms (unchanged)
content/blog/technical-audit-protocol.mdx 67ms (unchanged)
content/case-studies/case-study-industrial-catalog.mdx 60ms (unchanged)
content/case-studies/unlink-reputation-management-success.mdx 58ms (unchanged)
Dev.md 276ms (unchanged)
eslint.config.mjs 46ms (unchanged)
knip.json 5ms (unchanged)
lib/cms.ts 84ms (unchanged)
lib/schema.ts 65ms (unchanged)
lib/seo-utils.ts 27ms (unchanged)
lib/utils.ts 21ms (unchanged)
mdx-components.tsx 27ms (unchanged)
next.config.ts 20ms (unchanged)
package.json 9ms (unchanged)
pnpm-lock.yaml 1895ms
pnpm-workspace.yaml 6ms (unchanged)
postcss.config.mjs 40ms (unchanged)
README.md 332ms (unchanged)
scripts/gen-blur-data.mjs 73ms (unchanged)
tsconfig.json 7ms (unchanged)
types/index.d.ts 55ms (unchanged)
types/mdx.d.ts 17ms (unchanged)
types/template-props.ts 77ms (unchanged)
vercel.json 92ms (unchanged)

> aemdevweb.com@7.2.99 lint /data/data/com.termux/files/home/Aemdevweb
> eslint . --fix

> aemdevweb.com@7.2.99 type-check /data/data/com.termux/files/home/Aemdevweb
> tsc --noEmit

➜ Aemdevweb git:(main) ✗ pb

> aemdevweb.com@7.2.99 build /data/data/com.termux/files/home/Aemdevweb
> next build --webpack

Downloading swc package @next/swc-wasm-nodejs... to /data/data/com.termux/files/home/.cache/next-swc
npm warn Unknown env config "arch". This will stop working in the next major version of npm.
npm warn Unknown env config "gyp-defines". This will stop working in the next major version of npm.
npm warn Unknown env config "verify-deps-before-run". This will stop working in the next major version of npm.
npm warn Unknown env config "npm-globalconfig". This will stop working in the next major version of npm.
npm warn Unknown env config "\_jsr-registry". This will stop working in the next major version of npm.
npm warn Unknown project config "arch". This will stop working in the next major version of npm.
npm warn Unknown project config "GYP_DEFINES". This will stop working in the next major version of npm.
Skipping creating a lockfile at /data/data/com.termux/files/home/Aemdevweb/.next/lock because we're using WASM bindings
▲ Next.js 16.1.6 (webpack)

- Environments: .env.local
- Experiments (use with caution):
  ⨯ mdxRs
  · optimizePackageImports
  ✓ scrollRestoration

  Creating an optimized production build ...
  ✓ Compiled successfully in 78s
  ✓ Finished TypeScript in 29.3s
  ✓ Collecting page data using 1 worker in 3.9s
  ✓ Generating static pages using 1 worker (46/46) in 8.1s
  Finalizing page optimization . Collecting buil✓ Collecting build traces in 37.4s
  ✓ Finalizing page optimization in 37.4s

Route (app)
┌ ○ /
├ ○ /\_not-found
├ ○ /about
├ ○ /areas
├ ● /areas/[slug]
│ ├ /areas/bangkok
│ ├ /areas/chon-buri
│ ├ /areas/chiang-mai
│ └ [+9 more paths]
├ ○ /blog
├ ● /blog/[slug]
│ ├ /blog/seo-2026-strategy
│ ├ /blog/5-points-killing-sales
│ ├ /blog/advanced-schema-markup
│ └ [+7 more paths]
├ ○ /case-studies
├ ● /case-studies/[slug]
│ ├ /case-studies/case-study-industrial-catalog
│ └ /case-studies/unlink-reputation-management-success
├ ○ /manifest.webmanifest
├ ○ /privacy
├ ○ /robots.txt
├ ○ /services
├ ● /services/[slug]
│ ├ /services/seo-agency
│ ├ /services/salepage
│ ├ /services/corporate
│ └ [+4 more paths]
├ ○ /sitemap.xml
├ ○ /status
└ ○ /terms

○ (Static) prerendered as static content
● (SSG) prerendered as static HTML (uses generateStaticParams)

➜ Aemdevweb git:(main) ✗
