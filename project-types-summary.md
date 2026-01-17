# 📑 Project Types & Interfaces Summary (V3)
_สร้างเมื่อ: Sun Jan 18 00:53:32 +07 2026_

> **Note:** สแกนครอบคลุมทั้งแบบ Internal และ Exported (ยกเว้น node_modules) เพื่อความครบถ้วนครับพี่เอ็ม

## 📊 สถิติเบื้องต้น
- **Total Interfaces:** 50 รายการ
- **Total Type Aliases:** 44 รายการ

## 🏗️ All Interfaces (Internal & Exported)
```typescript
constants/navigation.ts -> NavItem {
constants/navigation.ts -> FooterNavigation {
constants/navigation.ts -> NavigationConfig {
constants/services-data.ts -> ServiceItem {
constants/case-studies/case-studies-data.ts -> CaseStudyItem {
constants/testimonials/testimonials.ts -> TestimonialItem {
app/(main)/layout.tsx -> MainLayoutProps {
app/(main)/services/[slug]/page.tsx -> PageProps {
app/(main)/case-studies/[slug]/page.tsx -> PageProps {
app/(marketing)/[template]/page.tsx -> CategoryPageProps {
app/(marketing)/[template]/[slug]/page.tsx -> DetailPageProps {
app/(marketing)/layout.tsx -> MarketingLayoutProps {
components/sales-engine/LineLeadForm.tsx -> LineLeadFormProps {
components/template/marketplace/TemplateGrid.tsx -> TemplateGridProps {
components/template/marketplace/TemplateFilter.tsx -> TemplateFilterProps {
components/template/marketplace/TemplateSearch.tsx -> TemplateSearchProps {
components/template/marketplace/TemplateHero.tsx -> TemplateHeroProps {
components/template/shared/DevicePreview.tsx -> DevicePreviewProps {
components/template/shared/SalesHook.tsx -> SalesHookProps {
components/template/shared/TemplateFeatures.tsx -> TemplateFeaturesProps {
components/template/shared/TemplatePricingCard.tsx -> TemplatePricingCardProps {
components/shared/LineStickyButton.tsx -> LineStickyButtonProps {
components/shared/TrustBadge.tsx -> Brand {
components/shared/AemBrandBadge.tsx -> AemBrandBadgeProps {
components/shared/ServiceCard.tsx -> ServiceCardProps {
components/shared/Footer.tsx -> FooterProps {
components/shared/Header.tsx -> HeaderProps {
components/shared/Navbar.tsx -> NavbarProps {
components/shared/CaseStudyCard.tsx -> CaseStudyCardProps {
components/seo/JsonLd.tsx -> FAQItem {
components/seo/JsonLd.tsx -> BreadcrumbItem {
components/seo/JsonLd.tsx -> JsonLdData {
components/seo/JsonLd.tsx -> JsonLdProps {
components/ui/button.tsx -> ButtonProps
components/ui/badge.tsx -> BadgeProps
hooks/use-toast.ts -> State {
lib/mdx.ts -> BlogPost {
types/index.ts -> NavItem {
types/index.ts -> NavSection {
types/index.ts -> SiteConfig {
types/index.ts -> BlogPostProps {
types/index.ts -> BlogMetadata {
types/index.ts -> BlogPost extends BlogMetadata {
types/index.ts -> ServiceItem {
types/index.ts -> ShowcaseStats {
types/index.ts -> CaseStudyItem {
types/index.ts -> CategoryInfo {
types/index.ts -> TemplateItem {
types/index.ts -> LeadFormSubmission {
types/index.ts -> TestimonialItem {
```

## 🏷️ All Type Aliases (Internal & Exported)
```typescript
constants/services-data.ts -> ServiceIconName =
constants/site-config.ts -> SiteConfig = typeof siteConfig
constants/case-studies/case-studies-data.ts -> ProjectCategory =
app/(main)/blog/[slug]/page.tsx -> Props = {
app/layout.tsx:import type { Metadata, Viewport } from "next"
components/template/marketplace/TemplateHero.tsx:// 🔑 เปลี่ยนเป็น Named Export เพื่อป้องกัน Error: Element type is invalid
components/template/shared/DevicePreview.tsx:// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Error: Element type is invalid
components/template/shared/TemplateFeatures.tsx:// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Error: Element type is invalid
components/template/shared/TemplatePricingCard.tsx:// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Error: Element type is invalid
components/template/shared/TemplateNavbar.tsx:// 🔑 เปลี่ยนเป็น Named Export เพื่อป้องกัน Error: Element type is invalid
components/seo/JsonLd.tsx:export const JsonLd = ({ type = "Website", data }: JsonLdProps) => {
components/seo/JsonLd.tsx:    "@type" -> === "Website" ? "WebSite" : "ProfessionalService",
components/seo/JsonLd.tsx -> === "Article" && data
components/seo/JsonLd.tsx -> === "FAQ" && data?.faqs
components/seo/JsonLd.tsx -> === "Breadcrumb" && data?.items
components/ui/button.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/badge.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/sonner.tsx:import { Toaster as Sonner, type ToasterProps } from "sonner"
components/ui/empty.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/form.tsx -> ControllerProps,
components/ui/form.tsx -> FieldPath,
components/ui/form.tsx -> FieldValues,
components/ui/form.tsx -> FormFieldContextValue<
components/ui/form.tsx -> FormItemContextValue = {
components/ui/label.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/toast.tsx:import { cva, type VariantProps } from "class-variance-authority"
components/ui/toast.tsx -> ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
components/ui/toast.tsx -> ToastActionElement = React.ReactElement<typeof ToastAction>
components/ui/toast.tsx -> ToastProps,
components/ui/toast.tsx -> ToastActionElement,
hooks/use-toast.ts:import type { ToastActionElement, ToastProps } from "@/components/ui/toast"
hooks/use-toast.ts -> ToasterToast = ToastProps & {
hooks/use-toast.ts -> ActionType = typeof actionTypes
hooks/use-toast.ts -> Action =
hooks/use-toast.ts -> Toast = Omit<ToasterToast, "id">
lib/utils.ts:import { clsx, type ClassValue } from "clsx"
next.config.ts:import type { NextConfig } from "next"
types/index.ts -> ServiceIconName =
types/index.ts -> TemplateCategory =
types/index.ts:  // ✅ แก้ Error: Property 'mockups' does not exist on type 'TemplateItem'
types/index.ts:  // ✅ แก้ Error: 'salesData' does not exist in type 'TemplateItem'
mdx-components.tsx:import type { MDXComponents } from "mdx/types"
providers/AppProvider.tsx:import { type ThemeProviderProps } from "next-themes"
tailwind.config.ts:import type { Config } from "tailwindcss"
```
