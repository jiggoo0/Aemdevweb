# 📑 Project Types & Interfaces Summary (V3)

_สร้างเมื่อ: Tue Jan 27 03:01:44 +07 2026_

> **Note:** สแกนครอบคลุมทั้งแบบ Internal และ Exported (ยกเว้น node_modules) เพื่อความครบถ้วนครับพี่เอ็ม

## 📊 สถิติเบื้องต้น

- **Total Interfaces:** 44 รายการ
- **Total Type Aliases:** 31 รายการ

## 🏗️ All Interfaces (Internal & Exported)

```typescript
app/(main)/blog/[slug]/page.tsx -> Props {
app/(main)/case-studies/[slug]/page.tsx -> CaseStudyPageProps {
app/(main)/case-studies/page.tsx -> CaseStudyFrontmatter {
app/(main)/layout.tsx -> MainLayoutProps {
app/(main)/services/[slug]/page.tsx -> ServicePageProps {
app/(marketing)/layout.tsx -> MarketingLayoutProps {
app/(marketing)/templates/[slug]/page.tsx -> PageProps {
app/(marketing)/templates/_components/hotelresort/schema.ts -> HotelData extends SEOContract {
app/(marketing)/templates/_components/hotelresort/_parts/HotelNavbar.tsx -> HotelNavbarProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelFooter.tsx -> HotelFooterProps {
app/(marketing)/templates/_components/hotelresort/_parts/HotelStats.tsx -> HotelStatsProps {
app/(marketing)/templates/_components/cleaningpro/schema.ts -> CleaningServiceData extends SEOContract {
app/(marketing)/templates/_components/facebookadsexpert/index.tsx -> FacebookAdsTemplateProps {
app/(marketing)/templates/_components/facebookadsexpert/schema.ts -> FacebookAdsData extends SEOContract {
app/(marketing)/templates/_components/shopmasterpro/schema.ts -> ShopMasterData extends SEOContract {
app/(marketing)/templates/_components/webrental/schema.ts -> WebRentalData extends SEOContract {
app/(marketing)/templates/_contracts/seo.ts -> SEOContract {
components/sales-engine/LineLeadForm.tsx -> LineLeadFormProps {
components/seo/JsonLd.tsx -> JsonLdProps {
components/shared/BlogCard.tsx -> BlogCardProps {
components/shared/CaseStudyCard.tsx -> CaseStudyCardProps {
components/shared/ServiceCard.tsx -> ServiceCardProps {
components/shared/TrustBadge.tsx -> TrustBadgeProps {
components/ui/button.tsx -> ButtonProps
components/marketplace/template/TemplateCard.tsx -> TemplateCardProps {
components/marketplace/template/TemplateGrid.tsx -> TemplateGridProps {
components/marketplace/template/TemplateFilter.tsx -> TemplateFilterProps {
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
app/(main)/about/page.tsx:      {/* แก้ไขจุดที่ 1: เปลี่ยน type เป็น WebPage เพื่อให้ผ่าน Type Check
app/(main)/careers/page.tsx:import type { Metadata } from "next"
app/(main)/case-studies/page.tsx:import type { Metadata } from "next"
app/(main)/contact/page.tsx:import type { Metadata } from "next"
app/(main)/contact/page.tsx:      {/* แก้ไขจุดที่ 1: เปลี่ยน type เป็น "WebPage" เพื่อให้ผ่าน Type Check
app/(main)/contact/page.tsx:          แล้วระบุประเภทจริงผ่าน @type ภายใน data แทน */}
app/(main)/page.tsx:import type { Metadata } from "next"
app/(main)/privacy/page.tsx:import type { Metadata } from "next"
app/(main)/services/page.tsx:import type { Metadata } from "next"
app/(main)/terms/page.tsx:import type { Metadata } from "next"
app/(marketing)/layout.tsx:import type { ReactNode } from "react"
app/metadata.ts:import type { Metadata } from "next"
app/viewport.ts:import type { Viewport } from "next"
components/sales-engine/LineLeadForm.tsx -> FormData = z.infer<typeof formSchema>
components/seo/JsonLd.tsx:      // ล็อค Key ด้วย type เพื่อประสิทธิภาพในการทำ Reconciliation ของ React
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
mdx-components.tsx:        (children.type === "img" || (children.props as any)?.src)
types/index.ts -> ServiceIconName =
types/template.ts -> TemplateCategory =
```
