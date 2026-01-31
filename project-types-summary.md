# 📑 Project Types & Interfaces Summary (V3)

_สร้างเมื่อ: Sat Jan 31 03:49:04 +07 2026_

> **Note:** สแกนครอบคลุมทั้งแบบ Internal และ Exported (ยกเว้น node_modules) เพื่อความครบถ้วนครับพี่เอ็ม

## 📊 สถิติเบื้องต้น

- **Total Interfaces:** 93 รายการ
- **Total Type Aliases:** 39 รายการ

## 🏗️ All Interfaces (Internal & Exported)

```typescript
app/(main)/blog/[slug]/page.tsx -> PageProps {
app/(main)/services/[slug]/page.tsx -> Props {
app/(case-studies)/case-studies/[slug]/page.tsx -> Props {
app/(case-studies)/case-studies/_components/CaseStudiesGrid.tsx -> CaseStudiesGridProps {
app/(shops)/templates/[slug]/page.tsx -> PageProps {
app/(shops)/templates/_components/cleaningpro/schema.ts -> CleaningServiceData extends SEOContract {
app/(shops)/templates/_components/facebookadsexpert/schema.ts -> FacebookAdsData extends SEOContract {
app/(shops)/templates/_components/hotelresort/_parts/HotelFooter.tsx -> HotelFooterProps {
app/(shops)/templates/_components/hotelresort/_parts/HotelHero.tsx -> HotelHeroProps {
app/(shops)/templates/_components/hotelresort/_parts/HotelNavbar.tsx -> HotelNavbarProps {
app/(shops)/templates/_components/hotelresort/_parts/HotelRooms.tsx -> RoomItem {
app/(shops)/templates/_components/hotelresort/_parts/HotelRooms.tsx -> HotelRoomsProps {
app/(shops)/templates/_components/hotelresort/_parts/HotelStats.tsx -> HotelStatsProps {
app/(shops)/templates/_components/hotelresort/schema.ts -> HotelData extends SEOContract {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopFooter.tsx -> ShopFooterProps {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopHero.tsx -> ShopHeroProps {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopNavbar.tsx -> NavLink {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopNavbar.tsx -> ShopNavbarProps {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopProducts.tsx -> ProductItem {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopProducts.tsx -> ShopProductsProps {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopStats.tsx -> ShopStatItem {
app/(shops)/templates/_components/shopmasterpro/_parts/ShopStats.tsx -> ShopStatsProps {
app/(shops)/templates/_components/shopmasterpro/schema.ts -> ShopMasterData extends SEOContract {
app/(shops)/templates/_components/webrental/_parts/RentalFeatures.tsx -> FeatureItem {
app/(shops)/templates/_components/webrental/_parts/RentalFeatures.tsx -> RentalFeaturesProps {
app/(shops)/templates/_components/webrental/_parts/RentalFooter.tsx -> RentalFooterProps {
app/(shops)/templates/_components/webrental/_parts/RentalHero.tsx -> RentalHeroProps {
app/(shops)/templates/_components/webrental/_parts/RentalNavbar.tsx -> RentalNavbarProps {
app/(shops)/templates/_components/webrental/_parts/RentalPricing.tsx -> PricingTier {
app/(shops)/templates/_components/webrental/_parts/RentalPricing.tsx -> RentalPricingProps {
app/(shops)/templates/_components/webrental/_parts/RentalShowcase.tsx -> ShowcaseTemplate {
app/(shops)/templates/_components/webrental/_parts/RentalShowcase.tsx -> RentalShowcaseProps {
app/(shops)/templates/_components/webrental/index.tsx -> PricingTier {
app/(shops)/templates/_components/webrental/schema.ts -> WebRentalData extends SEOContract {
app/(shops)/templates/_components/salepage_single/schema.ts -> SalePageData extends SEOContract {
app/(shops)/templates/_components/corporate_lite/schema.ts -> CorporateLiteData extends SEOContract {
app/(shops)/templates/_components/starter_landing/schema.ts -> StarterLandingData extends SEOContract {
app/(shops)/templates/_components/corporate_pro/schema.ts -> CorporateProData extends SEOContract {
app/(shops)/templates/_components/local_service/schema.ts -> LocalServiceData extends SEOContract {
app/(shops)/templates/_components/restaurant_cafe/schema.ts -> RestaurantCafeData extends SEOContract {
app/(shops)/templates/_components/event_magic/schema.ts -> EventMagicData extends SEOContract {
app/(shops)/templates/_components/personal_bio/schema.ts -> PersonalBioData extends SEOContract {
app/(shops)/templates/_components/seo_agency/schema.ts -> SeoAgencyData extends SEOContract {
app/(shops)/templates/_components/maintenance_page/schema.ts -> MaintenanceData extends SEOContract {
app/(shops)/templates/_contracts/seo.ts -> SEOContract {
app/(shops)/templates/_registry.tsx -> RegistryEntry {
app/(shops)/_components/ShopCard.tsx -> ShopCardProps {
app/(seo)/seo/[slug]/page.tsx -> PageProps {
app/(seo)/seo/_components/technical-structure-audit/index.tsx -> Props {
app/(seo)/seo/_components/core-web-vitals-speed/index.tsx -> Props {
app/(seo)/seo/_components/entity-local-authority/index.tsx -> Props {
app/(seo)/seo/_components/advanced-schema-markup/index.tsx -> Props {
app/(seo)/seo/_components/ecommerce-conversion-seo/index.tsx -> Props {
app/(seo)/seo/_registry.tsx -> SeoComponentProps {
app/(seo)/_components/SeoCard.tsx -> SeoCardProps {
components/marketplace/template/TemplateCard.tsx -> TemplateCardProps {
components/marketplace/template/TemplateFilter.tsx -> TemplateFilterProps {
components/marketplace/template/TemplateGrid.tsx -> TemplateGridProps {
components/sales-engine/ImpactStats.tsx -> StatItem {
components/sales-engine/LineLeadForm.tsx -> LineLeadFormProps {
components/sales-engine/WorkProcess.tsx -> ProcessStep {
components/sales-engine/PerformanceAuthority.tsx -> PerformanceProps {
components/seo/JsonLd.tsx -> JsonLdProps {
components/seo/AuditReport.tsx -> AuditMetric {
components/shared/BlogCard.tsx -> BlogCardProps {
components/shared/CaseStudyCard.tsx -> CaseStudyCardProps {
components/shared/ServiceCard.tsx -> ServiceCardProps {
components/shared/TermsOfService.tsx -> TermSection {
components/shared/SectionSkeleton.tsx -> SectionSkeletonProps {
components/shared/IconRenderer.tsx -> IconRendererProps extends LucideProps {
components/ui/badge.tsx -> BadgeProps
components/ui/button.tsx -> ButtonProps
constants/navigation.ts -> NavItem {
constants/navigation.ts -> NavigationConfig {
constants/services-data.ts -> CategoryInfo {
lib/blog.ts -> BlogFrontmatter {
types/index.ts -> JsonLdData extends Record<string, unknown> {
types/index.ts -> SiteConfig {
types/index.ts -> ServiceItem {
types/index.ts -> BlogFrontmatter {
types/index.ts -> BlogPost {
types/index.ts -> CaseStudyResult {
types/index.ts -> CaseStudyItem {
types/template.ts -> SEOContract {
types/template.ts -> TemplateMetadata {
types/template.ts -> TemplateContent {
types/template.ts -> TemplateMasterData {
types/seo.ts -> SeoBenefit {
types/seo.ts -> SeoFaq {
types/seo.ts -> SeoPackagePrice {
types/seo.ts -> SeoAddOn {
types/seo.ts -> SeoServiceItem {
types/seo.ts -> SeoServiceCardProps {
```

## 🏷️ All Type Aliases (Internal & Exported)

```typescript
app/(main)/about/page.tsx:import type { Metadata } from "next"
app/(main)/blog/[slug]/page.tsx:import type { Metadata } from "next"
app/(main)/blog/page.tsx:import type { Metadata } from "next"
app/(main)/services/[slug]/page.tsx:import type { Metadata } from "next"
app/(main)/services/ServicesClient.tsx:                      {/* [FIXED]: Assert type as React.ReactElement<{ size?: number }> to prevent ESLint 'no-explicit-any' warning */}
app/(case-studies)/case-studies/[slug]/page.tsx:import type { Metadata } from "next"
app/(case-studies)/case-studies/page.tsx:import type { Metadata } from "next"
app/viewport.ts:import type { Viewport } from "next"
app/(shops)/templates/_components/facebookadsexpert/index.tsx -> LucideIcon,
app/(shops)/templates/_components/salepage_single/index.tsx -> LucideIcon, // [FIX]: นำเข้าประเภทข้อมูลเพื่อล้างพิกัด any
app/(shops)/templates/_components/corporate_lite/index.tsx -> LucideIcon, // [FIX]: นำเข้าพิกัดประเภทข้อมูลเพื่อล้าง any
app/(shops)/templates/_components/starter_landing/index.tsx -> LucideIcon,
app/(shops)/templates/_components/corporate_pro/index.tsx -> LucideIcon, // [FIX]: นำเข้าพิกัดประเภทข้อมูลเพื่อล้าง any
app/(shops)/templates/_components/local_service/index.tsx -> LucideIcon, // [FIX]: นำเข้า Type เพื่อล้างพิกัด any
app/(shops)/templates/_components/restaurant_cafe/index.tsx -> LucideIcon,
app/(shops)/templates/_components/event_magic/index.tsx -> LucideIcon, // [FIX]: นำเข้า Type เพื่อล้างพิกัด any
app/(shops)/templates/_components/personal_bio/index.tsx -> LucideIcon, // [FIX]: นำเข้าประเภทข้อมูลเพื่อล้างพิกัด any
app/(shops)/templates/_components/seo_agency/index.tsx -> LucideIcon,
app/(shops)/templates/_registry.tsx -> AllTemplateData =
components/seo/JsonLd.tsx -> === "Graph"
components/shared/IconRenderer.tsx -> LucideProps,
components/shared/IconRenderer.tsx -> LucideIcon,
components/ui/badge.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/button.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/form.tsx -> ControllerProps,
components/ui/form.tsx -> FieldPath,
components/ui/form.tsx -> FieldValues,
components/ui/form.tsx -> FormFieldContextValue<
components/ui/form.tsx -> FormItemContextValue = {
components/ui/label.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/sonner.tsx:import { Toaster as Sonner, type ToasterProps } from "sonner"
lib/utils.ts:import { clsx, type ClassValue } from "clsx"
mdx-components.tsx:import type { MDXComponents } from "mdx/types"
mdx-components.tsx:        if (typeof children.type === "string" || childProps.src) {
types/index.ts -> ServiceCategory = "ReadyMade" | "Business" | "Digital";
types/index.ts -> ThemeColor =
types/index.ts -> ServiceIconName =
types/template.ts -> TemplateCategory =
proxy.ts:import type { NextRequest } from "next/server"
```
