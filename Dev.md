Welcome to Termux!

Docs:       https://termux.dev/docs
Donate:     https://termux.dev/donate
Community:  https://termux.dev/community

Working with packages:

 - Search:  pkg search <query>
 - Install: pkg install <package>
 - Upgrade: pkg upgrade

Subscribing to additional repositories:

 - Root:    pkg install root-repo
 - X11:     pkg install x11-repo

For fixing any repository issues,
try 'termux-change-repo' command.

Report issues at https://termux.dev/issues
➜  ~ z aem
➜  Aemdevweb git:(main) ✗ clean
--- [ LAUNCHING DEEP CLEANING PROCOTOL ] ---
[1/5] Cleaning Project Artifacts...
   > Removing .next build cache...
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
Filesystem       Size Used Avail Use% Mounted on
/dev/block/dm-77 105G  29G   75G  29% /data/user/0
➜  Aemdevweb git:(main) ✗ pnpm clean
! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-10.29.3.tgz
? Do you want to continue? [Y/n] y


> aemdevweb.com@7.2.99 clean /data/data/com.termux/files/home/Aemdevweb
> rm -rf .next node_modules pnpm-lock.yaml && GYP_DEFINES="android_ndk_path=''" pnpm install

Progress: resolved 1, reused 0, downloaded 0, addeProgress: resolved 3, reused 0, downloaded 0, addeProgress: resolved 5, reused 0, downloaded 0, addeProgress: resolved 6, reused 0, downloaded 0, addeProgress: resolved 8, reused 0, downloaded 0, addeProgress: resolved 12, reused 0, downloaded 1, addProgress: resolved 13, reused 0, downloaded 7, addProgress: resolved 15, reused 0, downloaded 9, addProgress: resolved 18, reused 0, downloaded 10, adProgress: resolved 19, reused 0, downloaded 11, adProgress: resolved 21, reused 0, downloaded 15, adProgress: resolved 23, reused 0, downloaded 17, adProgress: resolved 27, reused 0, downloaded 18, adProgress: resolved 28, reused 0, downloaded 23, adProgress: resolved 31, reused 0, downloaded 26, adProgress: resolved 33, reused 0, downloaded 26, adProgress: resolved 34, reused 0, downloaded 30, adProgress: resolved 35, reused 0, downloaded 31, adProgress: resolved 36, reused 0, downloaded 32, adProgress: resolved 38, reused 0, downloaded 34, adProgress: resolved 38, reused 0, downloaded 35, adProgress: resolved 39, reused 0, downloaded 37, adProgress: resolved 40, reused 0, downloaded 37, adProgress: resolved 41, reused 0, downloaded 38, adProgress: resolved 42, reused 0, downloaded 39, adProgress: resolved 43, reused 0, downloaded 39, adProgress: resolved 44, reused 0, downloaded 40, adProgress: resolved 45, reused 0, downloaded 42, adProgress: resolved 46, reused 0, downloaded 43, adProgress: resolved 46, reused 0, downloaded 44, adProgress: resolved 47, reused 0, downloaded 46, adProgress: resolved 51, reused 0, downloaded 46, ad WARN  Tarball download average speed 15 KiB/s (size 19 KiB) is below 50 KiB/s: https://registry.npmjs.org/smol-toml/-/smol-toml-1.6.0.tgz (GET)
Progress: resolved 96, reused 0, downloaded 85, adDownloading next@16.1.6: 30.88 MB/30.88 MB, done  Progress: resolved 160, reused 0, downloaded 147, Progress: resolved 163, reused 0, downloaded 153, Progress: resolved 164, reused 0, downloaded 154, Progress: resolved 165, reused 0, downloaded 156, Progress: resolved 167, reused 0, downloaded 157, Progress: resolved 172, reused 0, downloaded 159, Progress: resolved 173, reused 0, downloaded 163, Progress: resolved 177, reused 0, downloaded 165, Progress: resolved 180, reused 0, downloaded 168, Progress: resolved 180, reused 0, downloaded 170, Progress: resolved 181, reused 0, downloaded 173, Progress: resolved 182, reused 0, downloaded 174, Progress: resolved 186, reused 0, downloaded 174, Progress: resolved 187, reused 0, downloaded 174, Progress: resolved 191, reused 0, downloaded 174, Progress: resolved 198, reused 0, downloaded 174, Progress: resolved 207, reused 0, downloaded 174, Progress: resolved 213, reused 0, downloaded 179, Progress: resolved 219, reused 0, downloaded 183, Progress: resolved 226, reused 0, downloaded 189, Progress: resolved 227, reused 0, downloaded 189, Progress: resolved 228, reused 0, downloaded 194, Progress: resolved 238, reused 0, downloaded 198, Progress: resolved 244, reused 0, downloaded 205, Progress: resolved 248, reused 0, downloaded 205,  WARN  Request took 11249ms: https://registry.npmjs.org/@typescript-eslint%2Ftypescript-estree
Progress: resolved 248, reused 0, downloaded 205, Progress: resolved 252, reused 0, downloaded 211, Progress: resolved 257, reused 0, downloaded 216, Progress: resolved 265, reused 0, downloaded 221, Progress: resolved 270, reused 0, downloaded 227, Progress: resolved 277, reused 0, downloaded 233, Progress: resolved 279, reused 0, downloaded 233, Progress: resolved 287, reused 0, downloaded 239, Progress: resolved 291, reused 0, downloaded 242, Progress: resolved 297, reused 0, downloaded 245,  WARN  Request took 14829ms: https://registry.npmjs.org/@typescript-eslint%2Feslint-plugin
Progress: resolved 297, reused 0, downloaded 245, Progress: resolved 300, reused 0, downloaded 247, Progress: resolved 311, reused 0, downloaded 247, Progress: resolved 313, reused 0, downloaded 249,  WARN  Request took 12089ms: https://registry.npmjs.org/@next%2Fswc-darwin-arm64
Progress: resolved 313, reused 0, downloaded 249, Progress: resolved 314, reused 0, downloaded 251, Progress: resolved 320, reused 0, downloaded 256, Progress: resolved 323, reused 0, downloaded 261, Progress: resolved 324, reused 0, downloaded 262, Progress: resolved 333, reused 0, downloaded 264, Progress: resolved 338, reused 0, downloaded 269, Progress: resolved 339, reused 0, downloaded 272, Progress: resolved 347, reused 0, downloaded 276, Progress: resolved 350, reused 0, downloaded 280, Progress: resolved 361, reused 0, downloaded 286, Progress: resolved 368, reused 0, downloaded 297, Progress: resolved 371, reused 0, downloaded 299, Progress: resolved 377, reused 0, downloaded 302, Progress: resolved 382, reused 0, downloaded 307, Progress: resolved 383, reused 0, downloaded 309, Progress: resolved 388, reused 0, downloaded 311, Progress: resolved 393, reused 0, downloaded 311, Progress: resolved 403, reused 0, downloaded 312, Progress: resolved 417, reused 0, downloaded 312, Progress: resolved 424, reused 0, downloaded 316, Progress: resolved 426, reused 0, downloaded 319, Progress: resolved 433, reused 0, downloaded 327, Progress: resolved 444, reused 0, downloaded 331, Progress: resolved 451, reused 0, downloaded 339, Progress: resolved 459, reused 0, downloaded 351, Progress: resolved 469, reused 0, downloaded 359, Progress: resolved 477, reused 0, downloaded 368, Progress: resolved 479, reused 0, downloaded 374, Progress: resolved 480, reused 0, downloaded 374, Progress: resolved 488, reused 0, downloaded 379, Progress: resolved 496, reused 0, downloaded 387, Progress: resolved 505, reused 0, downloaded 395, Progress: resolved 512, reused 0, downloaded 401, Progress: resolved 514, reused 0, downloaded 402, Progress: resolved 515, reused 0, downloaded 406, Progress: resolved 524, reused 0, downloaded 412, Progress: resolved 525, reused 0, downloaded 419, Progress: resolved 532, reused 0, downloaded 422, Progress: resolved 541, reused 0, downloaded 428, Progress: resolved 548, reused 0, downloaded 430, Progress: resolved 561, reused 0, downloaded 432, Progress: resolved 565, reused 0, downloaded 440, Progress: resolved 565, reused 0, downloaded 441, Progress: resolved 573, reused 0, downloaded 449, Progress: resolved 580, reused 0, downloaded 455, Progress: resolved 589, reused 0, downloaded 461, Progress: resolved 593, reused 0, downloaded 464, Progress: resolved 596, reused 0, downloaded 475, Progress: resolved 606, reused 0, downloaded 479, Progress: resolved 613, reused 0, downloaded 482, Progress: resolved 619, reused 0, downloaded 489, Progress: resolved 625, reused 0, downloaded 500, Progress: resolved 638, reused 0, downloaded 508, Progress: resolved 649, reused 0, downloaded 521, Progress: resolved 656, reused 0, downloaded 531, Progress: resolved 668, reused 0, downloaded 535, Progress: resolved 675, reused 0, downloaded 537, Progress: resolved 681, reused 0, downloaded 538, Progress: resolved 691, reused 0, downloaded 542, added 0
Downloading @rolldown/binding-android-arm64@1.0.0-Progress: resolved 696, reused 0, downloaded 546, Progress: resolved 706, reused 0, downloaded 551, Downloading @rolldown/binding-android-arm64@1.0.0-rc.1: 7.83 MB/7.83 MB, done
Progress: resolved 718, reused 0, downloaded 558, Progress: resolved 730, reused 0, downloaded 567, Progress: resolved 733, reused 0, downloaded 570, Progress: resolved 743, reused 0, downloaded 581, Progress: resolved 756, reused 0, downloaded 588, Progress: resolved 764, reused 0, downloaded 601, Progress: resolved 774, reused 0, downloaded 609, Progress: resolved 787, reused 0, downloaded 623, Progress: resolved 799, reused 0, downloaded 632, Progress: resolved 807, reused 0, downloaded 639, Progress: resolved 816, reused 0, downloaded 651, Progress: resolved 823, reused 0, downloaded 660, Progress: resolved 827, reused 0, downloaded 684, Progress: resolved 828, reused 0, downloaded 693, Progress: resolved 828, reused 0, downloaded 700, Packages: +696
++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, Progress: resolved 828, reused 0, downloaded 700, added 696, done
node_modules/.pnpm/esbuild@0.27.0/node_modules/esbnode_modules/.pnpm/esbuild@0.27.0/node_modules/esbuild: Running postinstall script, done in 1.8s

dependencies:
+ @img/sharp-wasm32 0.34.5
+ @mdx-js/loader 3.1.1
+ @mdx-js/react 3.1.1
+ @next/mdx 16.1.6
+ @radix-ui/react-accordion 1.2.12
+ @radix-ui/react-slot 1.2.4
+ @vercel/speed-insights 1.3.1
+ class-variance-authority 0.7.1
+ clsx 2.1.1
+ framer-motion 12.34.0
+ gray-matter 4.0.3
+ lucide-react 0.474.0 (0.563.0 is available)
+ next 16.1.6
+ next-mdx-remote 5.0.0 (6.0.0 is available)
+ next-themes 0.4.6
+ nextjs-toploader 3.9.17
+ react 19.0.0 (19.2.4 is available)
+ react-dom 19.0.0 (19.2.4 is available)
+ remark-frontmatter 5.0.0
+ remark-gfm 4.0.1
+ sharp 0.34.5
+ sonner 1.7.4 (2.0.7 is available)
+ tailwind-merge 3.4.0
+ tailwindcss-animate 1.0.7

devDependencies:
+ @eslint/js 9.39.2 (10.0.1 is available)
+ @next/bundle-analyzer 16.1.6
+ @next/eslint-plugin-next 16.1.6
+ @swc/helpers 0.5.18
+ @tailwindcss/postcss 4.1.18
+ @types/mdx 2.0.13
+ @types/node 22.13.1 (25.2.3 is available)
+ @types/react 19.0.8 (19.2.14 is available)
+ @types/react-dom 19.0.3 (19.2.3 is available)
+ autoprefixer 10.4.24
+ eslint 9.19.0 (10.0.0 is available)
+ eslint-plugin-tailwindcss 3.18.2
+ eslint-plugin-unused-imports 4.4.1
+ knip 5.83.1
+ madge 8.0.0
+ postcss 8.5.6
+ postcss-load-config 6.0.1
+ prettier 3.8.1
+ prettier-plugin-tailwindcss 0.7.2
+ tailwindcss 4.1.18
+ typescript 5.9.3
+ typescript-eslint 8.55.0
+ vercel 50.15.1

╭ Warning ───────────────────────────────────────╮
│                                                │
│   Ignored build scripts: sharp@0.34.5.         │
│   Run "pnpm approve-builds" to pick which      │
│   dependencies should be allowed to run        │
│   scripts.                                     │
│                                                │
╰────────────────────────────────────────────────╯
Done in 1m 19.7s using pnpm v10.29.3
Aemdevweb git:(main) ✗ ./master_audit.sh
🚀 Launching Master Audit Guardian v5.0 (Extreme Stability)...
[1/6] Checking Import Integrity...
[2/6] Validating Architectural Integrity...
[3/6] Analyzing App Router Performance...
[4/6] Enforcing Strict Server Patterns...
[5/6] Executing Deep Analysis (Knip & Madge)...
[6/6] Analyzing Resource Infrastructure...
✅ Audit Complete! Full Report: MASTER_AUDIT_REPORT.md
➜  Aemdevweb git:(main) ✗ pch

> aemdevweb.com@7.2.99 fix /data/data/com.termux/files/home/Aemdevweb
> pnpm format && pnpm lint --fix


> aemdevweb.com@7.2.99 format /data/data/com.termux/files/home/Aemdevweb
> prettier --write .

.prettierrc 231ms (unchanged)
app/(routes)/areas/[slug]/page.tsx 807ms (unchanged)
app/(routes)/areas/page.tsx 237ms (unchanged)
app/(routes)/blog/[slug]/page.tsx 176ms (unchanged)
app/(routes)/blog/page.tsx 146ms (unchanged)
app/(routes)/case-studies/[slug]/page.tsx 227ms (unchanged)
app/(routes)/case-studies/page.tsx 90ms (unchanged)
app/(routes)/services/[slug]/page.tsx 150ms (unchanged)
app/(routes)/services/page.tsx 154ms (unchanged)
app/about/page.tsx 195ms (unchanged)
app/globals.css 326ms (unchanged)
app/layout.tsx 104ms (unchanged)
app/loading.tsx 124ms (unchanged)
app/manifest.ts 47ms (unchanged)
app/not-found.tsx 69ms (unchanged)
app/page.tsx 106ms (unchanged)
app/privacy/page.tsx 110ms (unchanged)
app/robots.ts 35ms (unchanged)
app/sitemap.ts 71ms (unchanged)
app/status/page.tsx 171ms (unchanged)
app/template.tsx 31ms (unchanged)
app/terms/page.tsx 88ms (unchanged)
components.json 14ms (unchanged)
components/features/areas/AreaCard.tsx 108ms (unchanged)
components/features/blog/BlogCard.tsx 114ms (unchanged)
components/features/case-studies/CaseStudyCard.tsx 94ms (unchanged)
components/features/landing/Hero.tsx 146ms (unchanged)
components/features/landing/PricingSection.tsx 173ms (unchanged)
components/features/landing/WorkProcess.tsx 153ms (unchanged)
components/features/services/ServiceCard.tsx 85ms (unchanged)
components/features/services/ServiceListingHub.tsx 82ms (unchanged)
components/layout/Footer.tsx 188ms (unchanged)
components/layout/Navbar.tsx 211ms (unchanged)
components/layout/PageTransition.tsx 37ms (unchanged)
components/layout/TopLoader.tsx 72ms (unchanged)
components/providers/ThemeProvider.tsx 46ms (unchanged)
components/seo/JsonLd.tsx 57ms (unchanged)
components/shared/ConversionCTA.tsx 85ms (unchanged)
components/shared/FloatingContainer.tsx 71ms (unchanged)
components/shared/ImpactStats.tsx 102ms (unchanged)
components/shared/LineStickyButton.tsx 57ms (unchanged)
components/shared/TrustBadge.tsx 87ms (unchanged)
components/templates/bio/Index.tsx 128ms (unchanged)
components/templates/bio/Schema.ts 129ms (unchanged)
components/templates/catalog/Index.tsx 94ms (unchanged)
components/templates/catalog/Schema.ts 75ms (unchanged)
components/templates/corporate/Index.tsx 119ms (unchanged)
components/templates/corporate/Schema.ts 71ms (unchanged)
components/templates/hotelresort/Index.tsx 83ms (unchanged)
components/templates/hotelresort/Schema.ts 69ms (unchanged)
components/templates/local-authority/Index.tsx 127ms (unchanged)
components/templates/local-authority/Schema.ts 49ms (unchanged)
components/templates/salepage/_components/DirectOrderForm.tsx 113ms (unchanged)
components/templates/salepage/_components/FeatureComparison.tsx 105ms (unchanged)
components/templates/salepage/_components/FlashSaleTimer.tsx 114ms (unchanged)
components/templates/salepage/_components/SaleHero.tsx 111ms (unchanged)
components/templates/salepage/_components/StickyBuyButton.tsx 87ms (unchanged)
components/templates/salepage/_components/ThaiTrustBadge.tsx 128ms (unchanged)
components/templates/salepage/Index.tsx 75ms (unchanged)
components/templates/salepage/Schema.ts 82ms (unchanged)
components/templates/sections/DynamicFAQ.tsx 91ms (unchanged)
components/templates/sections/FeatureGrid.tsx 93ms (unchanged)
components/templates/sections/HeroEngine.tsx 108ms (unchanged)
components/templates/sections/LayoutEngine.tsx 87ms (unchanged)
components/templates/seo-agency/index.tsx 106ms (unchanged)
components/templates/seo-agency/Schema.ts 103ms (unchanged)
components/templates/TemplateRenderer.tsx 63ms (unchanged)
components/ui/Accordion.tsx 73ms (unchanged)
components/ui/AmbientBackground.tsx 48ms (unchanged)
components/ui/Button.tsx 49ms (unchanged)
components/ui/Callout.tsx 45ms (unchanged)
components/ui/IconRenderer.tsx 76ms (unchanged)
components/ui/Skeleton.tsx 48ms (unchanged)
components/ui/SkeletonCard.tsx 66ms (unchanged)
components/ui/SkeletonGrid.tsx 54ms (unchanged)
components/ui/Sonner.tsx 48ms (unchanged)
components/ui/ThemeToggle.tsx 60ms (unchanged)
config/00-SYSTEM-MANDATE.md 378ms (unchanged)
config/01-SYSTEM-PROMPT-EXTENSION.md 274ms (unchanged)
constants/area-nodes.ts 128ms (unchanged)
constants/image-blur-data.ts 61ms (unchanged)
constants/master-registry.ts 80ms (unchanged)
constants/navigation.ts 32ms (unchanged)
constants/site-config.ts 35ms (unchanged)
content/blog/5-points-killing-sales.mdx 192ms (unchanged)
content/blog/advanced-schema-markup.mdx 116ms (unchanged)
content/blog/case-study-unlink-th.mdx 94ms (unchanged)
content/blog/copywriting-secrets.mdx 95ms (unchanged)
content/blog/core-web-vitals-speed.mdx 235ms (unchanged)
content/blog/ecommerce-conversion-seo.mdx 145ms (unchanged)
content/blog/facebook-ads-vs-website.mdx 96ms (unchanged)
content/blog/lower-north-digital-transformation.mdx 162ms (unchanged)
content/blog/seo-2026-strategy.mdx 339ms (unchanged)
content/blog/technical-audit-protocol.mdx 66ms (unchanged)
content/case-studies/case-study-industrial-catalog.mdx 58ms (unchanged)
content/case-studies/unlink-reputation-management-success.mdx 56ms (unchanged)
Dev.md 186ms
eslint.config.mjs 70ms (unchanged)
knip.json 7ms (unchanged)
lib/cms.ts 98ms (unchanged)
lib/schema.ts 83ms (unchanged)
lib/seo-utils.ts 64ms (unchanged)
lib/utils.ts 52ms (unchanged)
MASTER_AUDIT_REPORT.md 60ms
mdx-components.tsx 58ms
next.config.ts 28ms (unchanged)
package.json 15ms (unchanged)
pnpm-lock.yaml 2748ms
pnpm-workspace.yaml 11ms (unchanged)
postcss.config.mjs 20ms (unchanged)
README.md 780ms
scripts/gen-blur-data.mjs 121ms (unchanged)
tsconfig.json 14ms (unchanged)
types/index.d.ts 96ms (unchanged)
types/mdx.d.ts 39ms (unchanged)
types/template-props.ts 37ms (unchanged)
vercel.json 23ms (unchanged)

> aemdevweb.com@7.2.99 lint /data/data/com.termux/files/home/Aemdevweb
> eslint . --fix


> aemdevweb.com@7.2.99 type-check /data/data/com.termux/files/home/Aemdevweb
> tsc --noEmit

➜  Aemdevweb git:(main) ✗
# Master Project Audit Report (v5.0)
**Date:** Thu Feb 12 17:16:14 +07 2026
**Environment:** Termux/Mobile Infrastructure

## 1. Import & Path Resolution
| File | Import Path | Status | Recommendation |
|---|---|---|---|
## 2. Structural & Performance Analysis
| File | Category | Issue | Severity |
|---|---|---|---|
## 3. Deep Dependencies Analysis
### Dead Code Scan (Knip)
```text

> aemdevweb.com@7.2.99 knip /data/data/com.termux/files/home/Aemdevweb
> knip --cache --no-exit-code --no-exit-code --cache

[93m[4mUnused exported types[24m[39m (1)
MetadataParams  interface  lib/seo-utils.ts:16:18
```
### Circular Dependencies (Madge)
```text
npm warn Unknown project config "arch". This will stop working in the next major version of npm.
npm warn Unknown project config "GYP_DEFINES". This will stop working in the next major version of npm.
- Finding files
Processed 75 files (7.4s) (45 warnings)

✔ No circular dependency found!

```
## 4. Resource & Infrastructure
### Large Assets (>500KB)
| Asset | Size |
|---|---|

### Environment Integrity
| Variable | Status |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | ✅ Defined |
| `LINE_ID` | ✅ Defined |
| `CONTACT_EMAIL` | ✅ Defined |

---
**Audit Guardian v5.0 Completed.** Analysis Secured.
Aemdevweb git:(main) ✗ pb

> aemdevweb.com@7.2.99 build /data/data/com.termux/files/home/Aemdevweb
> next build --webpack

  Downloading swc package @next/swc-wasm-nodejs... to /data/data/com.termux/files/home/.cache/next-swc
npm warn Unknown env config "arch". This will stop working in the next major version of npm.
npm warn Unknown env config "gyp-defines". This will stop working in the next major version of npm.
npm warn Unknown env config "verify-deps-before-run". This will stop working in the next major version of npm.
npm warn Unknown env config "npm-globalconfig". This will stop working in the next major version of npm.
npm warn Unknown env config "_jsr-registry". This will stop working in the next major version of npm.
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
✓ Compiled successfully in 88s
✓ Finished TypeScript in 30.6s
✓ Collecting page data using 1 worker in 5.1s
✓ Generating static pages using 1 worker (46/46) in 10.8s
  Finalizing page optimization  .  Collecting buil✓ Collecting build traces in 49s
✓ Finalizing page optimization in 49s

Route (app)
┌ ○ /
├ ○ /_not-found
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


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
/**
 * [SYSTEM CORE]: NEXT.JS HYBRID CONFIG v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Resource Resiliency | Next.js 16.1+ Compliance | Node-Termux Hardening
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  compress: true,

  /**
   * [TYPED_ROUTES]: Next.js 16 Compliance
   * [FIXED]: ย้ายออกจาก experimental ตามคำเตือนใน Build Log
   */
  typedRoutes: true,

  // [DEBUGGING]: เปิดการตรวจสอบ Logging ของข้อมูลที่ดึงจาก Server
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    scrollRestoration: true,
    // [TERMUX_HARDENING]: ป้องกันการใช้ CPU/RAM เกินขีดจำกัดบน Android
    workerThreads: false,
    cpus: isVercel ? undefined : 1,

    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
    ],
    // ใช้ Rust-based compiler เฉพาะบน Vercel (Cloud)
    mdxRs: isVercel,
  },

  transpilePackages: ["next-mdx-remote", "lucide-react", "tailwindcss-animate"],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  webpack: (config, { dev }) => {
    // [MEMORY_MANAGEMENT]: ปิด Cache บน Local (Termux) เพื่อประหยัดพื้นที่ Storage
    if (!isVercel) {
      config.cache = false;
    }

    // [DEV_OPTIMIZATION]: เพิ่มประสิทธิภาพการ Watch ไฟล์บน Android Filesystem
    if (dev && !isVercel) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
{
  "name": "aemdevweb.com",
  "version": "7.2.99",
  "private": true,
  "author": "AEMDEVWEB (Technical Infrastructure Specialist)",
  "description": "High-Performance Web Infrastructure & Technical SEO Specialist Hub",
  "engines": {
    "node": ">=22.0.0",
    "pnpm": ">=10.0.0"
  },
  "scripts": {
    "dev": "WATCHPACK_POLLING=true next dev --webpack",
    "type-check": "tsc --noEmit",
    "lint": "eslint .",
    "format": "prettier --write .",
    "fix": "pnpm format && pnpm lint --fix",
    "build": "next build --webpack",
    "start": "next start",
    "knip": "knip --cache --no-exit-code",
    "clean": "rm -rf .next node_modules pnpm-lock.yaml && GYP_DEFINES=\"android_ndk_path=''\" pnpm install"
  },
  "dependencies": {
    "@img/sharp-wasm32": "^0.34.5",
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "16.1.6",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-slot": "^1.2.4",
    "@vercel/speed-insights": "^1.3.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.34.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.474.0",
    "next": "16.1.6",
    "next-mdx-remote": "^5.0.0",
    "next-themes": "^0.4.6",
    "nextjs-toploader": "^3.9.17",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    "sharp": "^0.34.5",
    "sonner": "^1.7.4",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.2",
    "@next/bundle-analyzer": "^16.1.6",
    "@next/eslint-plugin-next": "16.1.6",
    "@swc/helpers": "^0.5.18",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/mdx": "^2.0.13",
    "@types/node": "22.13.1",
    "@types/react": "19.0.8",
    "@types/react-dom": "19.0.3",
    "autoprefixer": "^10.4.24",
    "eslint": "9.19.0",
    "eslint-plugin-tailwindcss": "^3.18.2",
    "eslint-plugin-unused-imports": "^4.4.1",
    "knip": "^5.83.1",
    "madge": "^8.0.0",
    "postcss": "^8.5.6",
    "postcss-load-config": "^6.0.1",
    "prettier": "^3.8.1",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4.1.18",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.55.0",
    "vercel": "^50.14.0"
  },
  "pnpm": {
    "shamefully-hoist": true,
    "overrides": {
      "react": "19.0.0",
      "react-dom": "19.0.0",
      "eslint-plugin-tailwindcss>tailwindcss": "$tailwindcss"
    },
    "onlyBuiltDependencies": [
      "esbuild",
      "unrs-resolver"
    ]
  }
}

____
{
  "version": 2,
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "buildCommand": "pnpm build",
  "cleanUrls": true,
  "trailingSlash": false,
  "images": {
    "sizes": [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048],
    "minimumCacheTTL": 86400,
    "formats": ["image/avif", "image/webp"]
  },
  "redirects": [
    {
      "source": "/services/(corporate-lite|corporate-pro|corporate_lite|corporate_pro)",
      "destination": "/services/corporate",
      "permanent": true
    },
    {
      "source": "/templates/(event-magic|corporate-standard|event_magic|corporate_standard)",
      "destination": "/services/corporate",
      "permanent": true
    },
    {
      "source": "/templates/booking/hotel-resort-node",
      "destination": "/services/hotelresort",
      "permanent": true
    },
    {
      "source": "/templates/(local-service|local_service|new-service-name|new_service_name)",
      "destination": "/services/local-authority",
      "permanent": true
    },
    {
      "source": "/services/new-service-name",
      "destination": "/services/local-authority",
      "permanent": true
    },
    {
      "source": "/(seo|blog)/technical-seo-guide",
      "destination": "/blog/seo-2026-strategy",
      "permanent": true
    },
    {
      "source": "/seo/core-web-vitals-speed",
      "destination": "/blog/core-web-vitals-speed",
      "permanent": true
    },
    {
      "source": "/seo/advanced-schema-markup",
      "destination": "/blog/advanced-schema-markup",
      "permanent": true
    },
    {
      "source": "/seo/(.*)",
      "destination": "/blog/$1",
      "permanent": true
    },
    {
      "source": "/old-service-path",
      "destination": "/services",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400, stale-while-revalidate=604800"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "X-DNS-Prefetch-Control",
          "value": "on"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
