# 📑 Project Types & Interfaces Summary (V3)

_สร้างเมื่อ: Tue Jan 27 09:32:28 +07 2026_

> **Note:** สแกนครอบคลุมทั้งแบบ Internal และ Exported (ยกเว้น node_modules) เพื่อความครบถ้วนครับพี่เอ็ม

## 📊 สถิติเบื้องต้น

- **Total Interfaces:** 61 รายการ
- **Total Type Aliases:** 25 รายการ

## 🏗️ All Interfaces (Internal & Exported)

```typescript
app/(main)/blog/[slug]/page.tsx -> PageProps {
app/(main)/services/[slug]/page.tsx -> ServicePageProps {
app/(marketing)/layout.tsx -> MarketingLayoutProps {
app/(marketing)/templates/[slug]/page.tsx -> PageProps {
app/(marketing)/templates/_components/cleaningpro/schema.ts -> CleaningServiceData extends SEOContract {
app/(marketing)/templates/_components/facebookadsexpert/index.tsx -> FacebookAdsTemplateProps {
app/(marketing)/templates/_components/facebookadsexpert/schema.ts -> FacebookAdsData extends SEOContract {
app/(marketing)/templates/_components/hotelresort/_parts/HotelFooter.tsx -> HotelFooterProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelHero.tsx -> HotelHeroProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelNavbar.tsx -> HotelNavbarProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelRooms.tsx -> RoomItem {
app/(marketing)/templates/_components/hotelresort/_parts/HotelRooms.tsx -> HotelRoomsProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelStats.tsx -> HotelStatsProps {
app/(marketing)/templates/_components/hotelresort/schema.ts -> HotelData extends SEOContract {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopFooter.tsx -> ShopFooterProps {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopHero.tsx -> ShopHeroProps {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopNavbar.tsx -> NavLink {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopNavbar.tsx -> ShopNavbarProps {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopProducts.tsx -> ProductItem {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopProducts.tsx -> ShopProductsProps {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopStats.tsx -> ShopStatItem {
app/(marketing)/templates/_components/shopmasterpro/_parts/ShopStats.tsx -> ShopStatsProps {
app/(marketing)/templates/_components/shopmasterpro/schema.ts -> ShopMasterData extends SEOContract {
app/(marketing)/templates/_components/webrental/_parts/RentalFeatures.tsx -> FeatureItem {
app/(marketing)/templates/_components/webrental/_parts/RentalFeatures.tsx -> RentalFeaturesProps {
app/(marketing)/templates/_components/webrental/_parts/RentalFooter.tsx -> RentalFooterProps {
app/(marketing)/templates/_components/webrental/_parts/RentalHero.tsx -> RentalHeroProps {
app/(marketing)/templates/_components/webrental/_parts/RentalNavbar.tsx -> NavLink {
app/(marketing)/templates/_components/webrental/_parts/RentalNavbar.tsx -> RentalNavbarProps {
app/(marketing)/templates/_components/webrental/_parts/RentalPricing.tsx -> PricingTier {
app/(marketing)/templates/_components/webrental/_parts/RentalPricing.tsx -> RentalPricingProps {
app/(marketing)/templates/_components/webrental/_parts/RentalShowcase.tsx -> ShowcaseTemplate {
app/(marketing)/templates/_components/webrental/_parts/RentalShowcase.tsx -> RentalShowcaseProps {
app/(marketing)/templates/_components/webrental/schema.ts -> WebRentalData extends SEOContract {
app/(marketing)/templates/_contracts/seo.ts -> SEOContract {
app/(marketing)/templates/_registry.tsx -> TemplateRegistryEntry {
app/(case-studies)/case-studies/[slug]/page.tsx -> Props {
components/marketplace/shared/TemplateNavbar.tsx -> TemplateFilterProps {
components/marketplace/template/TemplateCard.tsx -> TemplateCardProps {
components/marketplace/template/TemplateFilter.tsx -> TemplateFilterProps {
components/marketplace/template/TemplateGrid.tsx -> TemplateGridProps {
components/seo/JsonLd.tsx -> JsonLdProps {
components/shared/ServiceCard.tsx -> ServiceCardProps {
components/ui/button.tsx -> ButtonProps
constants/services-data.ts -> ServiceItem {
constants/services-data.ts -> CategoryInfo {
types/index.ts -> NavItem {
types/index.ts -> FooterNavigation {
types/index.ts -> NavigationConfig {
types/index.ts -> SiteConfig {
types/index.ts -> BlogFrontmatter {
types/index.ts -> BlogPost {
types/index.ts -> ServiceItem {
types/index.ts -> ShowcaseStats {
types/index.ts -> CaseStudyFrontmatter {
types/index.ts -> CaseStudyItem {
types/index.ts -> TemplateItem {
types/index.ts -> LeadFormSubmission {
types/index.ts -> TestimonialItem {
types/template.ts -> TemplateMetadata {
types/template.ts -> TemplateContent {
```

## 🏷️ All Type Aliases (Internal & Exported)

```typescript
app/(main)/about/page.tsx:import type { Metadata } from "next"
app/(main)/blog/page.tsx:import type { Metadata } from "next"
app/(main)/privacy/page.tsx:import type { Metadata } from "next"
app/(main)/services/[slug]/page.tsx:import type { Metadata } from "next"
app/(main)/services/page.tsx:import type { Metadata } from "next"
app/(main)/terms/page.tsx:import type { Metadata } from "next"
app/(marketing)/layout.tsx:import type { ReactNode } from "react"
app/viewport.ts:import type { Viewport } from "next"
components/ui/badge.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/button.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/form.tsx -> ControllerProps,
components/ui/form.tsx -> FieldPath,
components/ui/form.tsx -> FieldValues,
components/ui/form.tsx -> FormFieldContextValue<
components/ui/form.tsx -> FormItemContextValue = {
components/ui/label.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/sonner.tsx:import { Toaster as Sonner, type ToasterProps } from "sonner"
constants/services-data.ts -> ServiceCategory =
constants/services-data.ts -> ThemeColor =
lib/utils.ts:import { clsx, type ClassValue } from "clsx"
mdx-components.tsx:import type { MDXComponents } from "mdx/types"
mdx-components.tsx:        (typeof children.type === "string" ||
types/index.ts -> ServiceIconName =
types/template.ts -> TemplateCategory =
middleware.ts:import type { NextRequest } from "next/server"
```
