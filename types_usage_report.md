# 📊 รายงานการใช้งาน Types ในโปรเจกต์

## วันที่ตรวจสอบ: Mon Feb 16 23:58:18 +07 2026

## 🔍 สรุปการ Import แยกตามไฟล์

### 📄 ไฟล์: `app/(business)/areas/[slug]/page.tsx`

```typescript
import type { PageProps, UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `app/(business)/blog/[slug]/page.tsx`

```typescript
import type { PageProps } from "@/types";
```

### 📄 ไฟล์: `app/(business)/blog/page.tsx`

```typescript
import { type BlogPost } from "@/types"; // ดึง Type จาก SSOT
```

### 📄 ไฟล์: `app/(business)/case-studies/[slug]/page.tsx`

```typescript
import type { PageProps } from "@/types";
```

### 📄 ไฟล์: `app/(business)/case-studies/page.tsx`

```typescript
import type { CaseStudy } from "@/types"; // ดึง Type จาก SSOT โดยตรง
```

### 📄 ไฟล์: `app/(main)/page.tsx`

```typescript
import type { BlogPost, CaseStudy } from "@/types";
```

### 📄 ไฟล์: `app/(sales)/services/[slug]/page.tsx`

```typescript
import type { PageProps, UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/features/areas/AreaCard.tsx`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `components/features/blog/BlogCard.tsx`

```typescript
import type { BlogPost } from "@/types";
```

### 📄 ไฟล์: `components/features/case-studies/CaseStudyCard.tsx`

```typescript
import type { CaseStudy } from "@/types";
```

### 📄 ไฟล์: `components/features/services/ServiceCard.tsx`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `components/features/services/ServiceListingHub.tsx`

```typescript
import type { ServiceCategory, TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `components/templates/DynamicThemeWrapper.tsx`

```typescript
import type { ThemeConfig } from "@/types";
```

### 📄 ไฟล์: `components/templates/TemplateRenderer.tsx`

```typescript
import type { UniversalTemplateProps, BaseTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/bio/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/bio/_components/ActionRegistry.tsx`

```typescript
import type { CatalogItem } from "@/types";
```

### 📄 ไฟล์: `components/templates/bio/_components/CapabilityGraph.tsx`

```typescript
import type { ServiceFeature } from "@/types";
```

### 📄 ไฟล์: `components/templates/catalog/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/corporate/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/hotelresort/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/hotelresort/_components/FacilityMatrix.tsx`

```typescript
import type { ServiceFeature } from "@/types";
```

### 📄 ไฟล์: `components/templates/hotelresort/_components/SuiteRegistry.tsx`

```typescript
import type { CatalogItem } from "@/types";
```

### 📄 ไฟล์: `components/templates/local-authority/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/salepage/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/salepage/_components/FeatureComparison.tsx`

```typescript
import type { ServiceFeature } from "@/types";
```

### 📄 ไฟล์: `components/templates/salepage/_components/SaleNavbar.tsx`

```typescript
import type { ThemeConfig } from "@/types"; // [IMPORT]: นำเข้า Type มาตรฐาน
```

### 📄 ไฟล์: `components/templates/salepage/_components/StickyBuyButton.tsx`

```typescript
import type { ThemeConfig } from "@/types"; // เพิ่ม Import Type
```

### 📄 ไฟล์: `components/templates/sections/DynamicFAQ.tsx`

```typescript
import type { ServiceFaq } from "@/types";
```

### 📄 ไฟล์: `components/templates/sections/LayoutEngine.tsx`

```typescript
import type { ThemeConfig } from "@/types";
```

### 📄 ไฟล์: `components/templates/seo-agency/Index.tsx`

```typescript
import type { UniversalTemplateProps } from "@/types";
```

### 📄 ไฟล์: `components/templates/seo-agency/_components/StrategyBlueprint.tsx`

```typescript
import type { ServiceFeature } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/bangkok.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/chiang-mai.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/chiang-rai.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/chon-buri.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/chumphon.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/index.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/kamphaeng-phet.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/khon-kaen.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/korat.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/lampang.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/mae-hong-son.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/nakhon-sawan.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/phang-nga.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/phichit.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/phitsanulok.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/phuket.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/ranong.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/sukhothai.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/surat-thani.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/tak.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/area-nodes/uttaradit.ts`

```typescript
import type { AreaNode } from "@/types";
```

### 📄 ไฟล์: `constants/image-blur-data.ts`

```typescript
import type { ImageBlurRegistry } from "@/types";
```

### 📄 ไฟล์: `constants/master-registry.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/bio.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/catalog.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/corporate.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/hotel-resort.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/local-authority.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/salepage.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/services/seo-agency.ts`

```typescript
import type { TemplateMasterData } from "@/types";
```

### 📄 ไฟล์: `constants/site-config.ts`

```typescript
import type { SiteConfig } from "@/types";
```

## 🎯 ค้นหาจุดเสี่ยง (Specific Type Search)

### ⚠️ ไฟล์ที่ใช้ SiteConfig (เสี่ยงพังสูง):

ไม่พบการใช้งาน

### 📍 ไฟล์ที่ใช้ AreaNode:

components/features/areas/AreaCard.tsx:import type { AreaNode } from "@/types";
components/features/areas/AreaCard.tsx: readonly data: AreaNode;
constants/area-nodes/bangkok.ts:import type { AreaNode } from "@/types";
constants/area-nodes/bangkok.ts:export const bangkokNode: AreaNode = {
constants/area-nodes/chiang-mai.ts:import type { AreaNode } from "@/types";
constants/area-nodes/chiang-mai.ts:export const chiangMaiNode: AreaNode = {
constants/area-nodes/chiang-rai.ts:import type { AreaNode } from "@/types";
constants/area-nodes/chiang-rai.ts:export const chiangRaiNode: AreaNode = {
constants/area-nodes/chon-buri.ts:import type { AreaNode } from "@/types";
constants/area-nodes/chon-buri.ts:export const chonBuriNode: AreaNode = {
constants/area-nodes/chumphon.ts:import type { AreaNode } from "@/types";
constants/area-nodes/chumphon.ts:export const chumphonNode: AreaNode = {
constants/area-nodes/index.ts:import type { AreaNode } from "@/types";
constants/area-nodes/index.ts:export const AREA_NODES: AreaNode[] = [
constants/area-nodes/kamphaeng-phet.ts:import type { AreaNode } from "@/types";
constants/area-nodes/kamphaeng-phet.ts:export const kamphaengPhetNode: AreaNode = {
constants/area-nodes/khon-kaen.ts:import type { AreaNode } from "@/types";
constants/area-nodes/khon-kaen.ts:export const khonKaenNode: AreaNode = {
constants/area-nodes/korat.ts:import type { AreaNode } from "@/types";
constants/area-nodes/korat.ts:export const koratNode: AreaNode = {
constants/area-nodes/lampang.ts:import type { AreaNode } from "@/types";
constants/area-nodes/lampang.ts:export const lampangNode: AreaNode = {
constants/area-nodes/mae-hong-son.ts:import type { AreaNode } from "@/types";
constants/area-nodes/mae-hong-son.ts:export const maeHongSonNode: AreaNode = {
constants/area-nodes/nakhon-sawan.ts:import type { AreaNode } from "@/types";
constants/area-nodes/nakhon-sawan.ts:export const nakhonSawanNode: AreaNode = {
constants/area-nodes/phang-nga.ts:import type { AreaNode } from "@/types";
constants/area-nodes/phang-nga.ts:export const phangNgaNode: AreaNode = {
constants/area-nodes/phichit.ts:import type { AreaNode } from "@/types";
constants/area-nodes/phichit.ts:export const phichitNode: AreaNode = {
constants/area-nodes/phitsanulok.ts:import type { AreaNode } from "@/types";
constants/area-nodes/phitsanulok.ts:export const phitsanulokNode: AreaNode = {
constants/area-nodes/phuket.ts:import type { AreaNode } from "@/types";
constants/area-nodes/phuket.ts:export const phuketNode: AreaNode = {
constants/area-nodes/ranong.ts:import type { AreaNode } from "@/types";
constants/area-nodes/ranong.ts:export const ranongNode: AreaNode = {
constants/area-nodes/sukhothai.ts:import type { AreaNode } from "@/types";
constants/area-nodes/sukhothai.ts:export const sukhothaiNode: AreaNode = {
constants/area-nodes/surat-thani.ts:import type { AreaNode } from "@/types";
constants/area-nodes/surat-thani.ts:export const suratThaniNode: AreaNode = {
constants/area-nodes/tak.ts:import type { AreaNode } from "@/types";
constants/area-nodes/tak.ts:export const takNode: AreaNode = {
constants/area-nodes/uttaradit.ts:import type { AreaNode } from "@/types";
constants/area-nodes/uttaradit.ts:export const uttaraditNode: AreaNode = {
