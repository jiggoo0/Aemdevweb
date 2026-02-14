 Aemdevweb git:(main) ✗ clean
--- [ LAUNCHING DEEP CLEANING PROCOTOL ] ---
[1/5] Cleaning Project Artifacts...
   > Removing .next build cache...
[2/5] Pruning Package Managers...
Removed all cached metadata files
Removed 0 files
Removed 0 packages
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
/dev/block/dm-77 105G  31G   73G  31% /data/user/0
➜  Aemdevweb git:(main) ✗ pch
! Corepack is about to download https://registry.npmjs.org/pnpm/-/pnpm-10.29.3.tgz
? Do you want to continue? [Y/n] y


> aemdevweb.com@17.9.10 fix /data/data/com.termux/files/home/Aemdevweb
> pnpm format && pnpm lint --fix


> aemdevweb.com@17.9.10 format /data/data/com.termux/files/home/Aemdevweb
> prettier --write .

.prettierrc 230ms (unchanged)
app/(business)/areas/[slug]/page.tsx 754ms (unchanged)
app/(business)/areas/page.tsx 202ms (unchanged)
app/(business)/blog/[slug]/page.tsx 111ms (unchanged)
app/(business)/blog/page.tsx 98ms (unchanged)
app/(business)/case-studies/[slug]/page.tsx 108ms (unchanged)
app/(business)/case-studies/page.tsx 79ms (unchanged)
app/(business)/layout.tsx 73ms (unchanged)
app/(main)/about/page.tsx 152ms (unchanged)
app/(main)/layout.tsx 69ms (unchanged)
app/(main)/page.tsx 187ms (unchanged)
app/(main)/privacy/page.tsx 113ms (unchanged)
app/(main)/status/page.tsx 210ms (unchanged)
app/(main)/terms/page.tsx 108ms (unchanged)
app/(sales)/layout.tsx 50ms (unchanged)
app/(sales)/services/[slug]/page.tsx 147ms (unchanged)
app/(sales)/services/page.tsx 130ms (unchanged)
app/globals.css 213ms (unchanged)
app/layout.tsx 78ms (unchanged)
app/loading.tsx 58ms (unchanged)
app/manifest.ts 65ms (unchanged)
app/not-found.tsx 80ms (unchanged)
app/robots.ts 31ms (unchanged)
app/sitemap.ts 72ms (unchanged)
app/template.tsx 28ms (unchanged)
components.json 10ms (unchanged)
components/features/areas/AreaCard.tsx 111ms (unchanged)
components/features/blog/BlogCard.tsx 97ms (unchanged)
components/features/case-studies/CaseStudyCard.tsx 94ms (unchanged)
components/features/landing/Hero.tsx 93ms (unchanged)
components/features/landing/PricingSection.tsx 125ms (unchanged)
components/features/landing/WorkProcess.tsx 153ms (unchanged)
components/features/services/ServiceCard.tsx 123ms (unchanged)
components/features/services/ServiceListingHub.tsx 81ms (unchanged)
components/layout/Footer.tsx 74ms (unchanged)
components/layout/Navbar.tsx 113ms (unchanged)
components/layout/PageTransition.tsx 36ms (unchanged)
components/layout/TopLoader.tsx 42ms (unchanged)
components/providers/ThemeProvider.tsx 34ms (unchanged)
components/seo/JsonLd.tsx 45ms (unchanged)
components/shared/ConversionCTA.tsx 74ms (unchanged)
components/shared/FloatingContainer.tsx 58ms (unchanged)
components/shared/ImpactStats.tsx 90ms (unchanged)
components/shared/LineStickyButton.tsx 63ms (unchanged)
components/shared/TrustBadge.tsx 67ms (unchanged)
components/templates/bio/Index.tsx 132ms (unchanged)
components/templates/catalog/Index.tsx 122ms (unchanged)
components/templates/corporate/Index.tsx 108ms (unchanged)
components/templates/hotelresort/Index.tsx 106ms (unchanged)
components/templates/local-authority/Index.tsx 76ms (unchanged)
components/templates/salepage/_components/DirectOrderForm.tsx 163ms (unchanged)
components/templates/salepage/_components/FeatureComparison.tsx 82ms (unchanged)
components/templates/salepage/_components/FlashSaleTimer.tsx 92ms (unchanged)
components/templates/salepage/_components/SaleFooter.tsx 65ms (unchanged)
components/templates/salepage/_components/SaleHero.tsx 81ms (unchanged)
components/templates/salepage/_components/SaleNavbar.tsx 63ms (unchanged)
components/templates/salepage/_components/StickyBuyButton.tsx 80ms (unchanged)
components/templates/salepage/_components/ThaiTrustBadge.tsx 102ms (unchanged)
components/templates/salepage/Index.tsx 113ms (unchanged)
components/templates/sections/DynamicFAQ.tsx 97ms (unchanged)
components/templates/sections/FeatureGrid.tsx 110ms (unchanged)
components/templates/sections/HeroEngine.tsx 86ms (unchanged)
components/templates/sections/LayoutEngine.tsx 84ms (unchanged)
components/templates/seo-agency/Index.tsx 89ms (unchanged)
components/templates/TemplateRenderer.tsx 53ms (unchanged)
components/ui/Accordion.tsx 75ms (unchanged)
components/ui/AmbientBackground.tsx 38ms (unchanged)
components/ui/Button.tsx 42ms
components/ui/Callout.tsx 44ms (unchanged)
components/ui/IconRenderer.tsx 69ms (unchanged)
components/ui/Skeleton.tsx 40ms (unchanged)
components/ui/SkeletonCard.tsx 50ms (unchanged)
components/ui/SkeletonGrid.tsx 44ms (unchanged)
components/ui/Sonner.tsx 45ms (unchanged)
components/ui/ThemeToggle.tsx 54ms (unchanged)
config/00-SYSTEM-MANDATE.md 242ms (unchanged)
config/01-SYSTEM-PROMPT-EXTENSION.md 69ms (unchanged)
constants/area-nodes/bangkok.ts 56ms (unchanged)
constants/area-nodes/chiang-mai.ts 47ms (unchanged)
constants/area-nodes/chon-buri.ts 38ms (unchanged)
constants/area-nodes/index.ts 33ms (unchanged)
constants/area-nodes/kamphaeng-phet.ts 41ms (unchanged)
constants/area-nodes/khon-kaen.ts 52ms (unchanged)
constants/area-nodes/korat.ts 35ms (unchanged)
constants/area-nodes/nakhon-sawan.ts 47ms (unchanged)
constants/area-nodes/phichit.ts 38ms (unchanged)
constants/area-nodes/phitsanulok.ts 46ms (unchanged)
constants/area-nodes/phuket.ts 45ms (unchanged)
constants/area-nodes/sukhothai.ts 44ms (unchanged)
constants/area-nodes/tak.ts 33ms (unchanged)
constants/area-nodes/uttaradit.ts 44ms (unchanged)
constants/image-blur-data.ts 52ms (unchanged)
constants/master-registry.ts 60ms (unchanged)
constants/navigation.ts 34ms (unchanged)
constants/services/bio.ts 48ms (unchanged)
constants/services/catalog.ts 44ms (unchanged)
constants/services/corporate.ts 41ms (unchanged)
constants/services/hotel-resort.ts 41ms (unchanged)
constants/services/local-authority.ts 54ms (unchanged)
constants/services/salepage.ts 46ms (unchanged)
constants/services/seo-agency.ts 42ms (unchanged)
constants/site-config.ts 30ms (unchanged)
content/blog/5-points-killing-sales.mdx 143ms (unchanged)
content/blog/advanced-schema-markup.mdx 83ms (unchanged)
content/blog/case-study-unlink-th.mdx 64ms (unchanged)
content/blog/copywriting-secrets.mdx 87ms (unchanged)
content/blog/core-web-vitals-speed.mdx 71ms (unchanged)
content/blog/ecommerce-conversion-seo.mdx 40ms (unchanged)
content/blog/facebook-ads-vs-website.mdx 79ms (unchanged)
content/blog/lower-north-digital-transformation.mdx 65ms (unchanged)
content/blog/seo-2026-strategy.mdx 56ms (unchanged)
content/blog/technical-audit-protocol.mdx 66ms (unchanged)
content/case-studies/case-study-industrial-catalog.mdx 52ms (unchanged)
content/case-studies/unlink-reputation-management-success.mdx 39ms (unchanged)
docs/Dev.md 265ms (unchanged)
docs/MASTER_AUDIT_REPORT.md 27ms (unchanged)
eslint.config.mjs 69ms (unchanged)
knip.json 8ms (unchanged)
lib/cms.ts 97ms (unchanged)
lib/schema-validator.ts 94ms (unchanged)
lib/schema.ts 98ms (unchanged)
lib/seo-utils.ts 39ms (unchanged)
lib/utils.ts 47ms (unchanged)
MASTER_AUDIT_REPORT.md 361ms (unchanged)
mdx-components.tsx 43ms (unchanged)
next.config.ts 26ms (unchanged)
package.json 17ms (unchanged)
pnpm-lock.yaml 2408ms (unchanged)
pnpm-workspace.yaml 7ms (unchanged)
postcss.config.mjs 26ms (unchanged)
README.md 411ms (unchanged)
scripts/gen-blur-data.mjs 93ms (unchanged)
scripts/test-schema.ts 49ms (unchanged)
tsconfig.json 9ms (unchanged)
types/index.d.ts 74ms (unchanged)
types/mdx.d.ts 39ms (unchanged)
types/template-props.ts 35ms (unchanged)
vercel.json 15ms (unchanged)

> aemdevweb.com@17.9.10 lint /data/data/com.termux/files/home/Aemdevweb
> eslint . --fix


> aemdevweb.com@17.9.10 type-check /data/data/com.termux/files/home/Aemdevweb
> tsc --noEmit
git:(main) ✗ pnpm knip

> aemdevweb.com@17.9.10 knip /data/data/com.termux/files/home/Aemdevweb
> knip --cache --no-exit-code

✂️  Excellent, Knip found no issues.
➜  Aemdevweb git:(main) ✗