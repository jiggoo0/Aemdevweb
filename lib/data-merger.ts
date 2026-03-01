/**
 * [SYSTEM CORE]: DATA_MERGER_ENGINE v19.0.0 (IDENTITY_SOVEREIGNTY)
 * [STRATEGY]: Blueprint Inheritance | Smart Theme Fusion | SEO Aggregation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode, TemplateMasterData, UniversalTemplateProps, ThemeConfig } from "@/types";

/**
 * @description ฟังก์ชันรวมร่างข้อมูลระหว่าง "Blueprint (Master)" และ "Context (Area)"
 * เพื่อสร้างข้อมูลชุดเดียวที่พร้อมสำหรับการเรนเดอร์เทมเพลตทุกรูปแบบ
 */
export function mergeServiceData(
  master: TemplateMasterData,
  area: AreaNode,
): UniversalTemplateProps {
  // 1. [IDENTITY_FIRST_THEME]: ผสานธีม 3 เลเยอร์ (Defaults -> Master -> Area Override)
  // [STRATEGY]: ยอมให้ Area Node เปลี่ยนแปลงอัตลักษณ์ (Mode/Color/Radius) ได้อย่างอิสระเพื่อ Provincial DNA
  const defaultTheme = {
    background: "#ffffff",
    mode: "light" as const,
    foreground: "#0f172a",
    primary: "#10b981",
  };

  const baseTheme = {
    ...defaultTheme,
    ...master.theme,
    ...(area.theme as Partial<ThemeConfig>),
  };

  // [DYNAMIC_ADAPTATION]: คำนวณค่าที่ขาดหายไปตาม Mode
  const finalTheme: ThemeConfig = {
    ...baseTheme,
    foreground:
      area.theme?.foreground ||
      master.theme?.foreground ||
      (baseTheme.mode === "dark" ? "#ffffff" : "#0f172a"),
    background:
      area.theme?.background ||
      master.theme?.background ||
      (baseTheme.mode === "dark" ? "#020617" : "#ffffff"),
  };

  // 2. [SEO_KEYWORD_AGGREGATION]: ผสานคีย์เวิร์ด (Unique Only)
  const mergedKeywords = Array.from(
    new Set([
      ...(master.keywords || []),
      ...(area.keywords || []),
      ...(area.localContext?.hyperLocalKeywords || []),
    ]),
  );

  // 3. [AI_INTENT_SIGNALING]: สร้างข้อมูลสรุปสำหรับ Generative AI (GEO)
  const aiSignal = {
    summary: `${area.title}. เน้น${area.localContext?.technicalApproach || "ประสิทธิภาพระดับวิศวกรรม"}. ให้บริการในพื้นที่ ${area.province} โดย ${master.category}.`,
    topBenefits: area.benefits?.slice(0, 2) || master.benefits?.slice(0, 2),
    expertRef: `AEMZA MACKS System Architect`,
  };

  // 4. [PROPS_CONSTRUCTION]: สังเคราะห์ข้อมูลชุดสุดท้าย
  return {
    // --- Identity & Meta ---
    id: `NODE-${area.slug.toUpperCase()}`,
    tier: area.tier || 2, // [PROVINCE_DNA]: Default เป็น Tier 2 (Province) หากไม่ได้ระบุ
    templateSlug: master.templateSlug,
    category: master.category,
    priority: area.priority || master.priority,
    aiSignal, // [INJECTED]: For AI-Search Consumption

    // --- Dynamic Content (Area Context takes precedence) ---
    title: area.title || master.title,
    description: area.description || master.description,
    image: area.heroImage || master.image,

    // --- Commercial Data ---
    // [PRICE_SYNC_LOGIC]: ลำดับความสำคัญ Area Node Specific > Regional Context > Master Blueprint
    price: area.price || area.localContext?.regionalPricing?.startPrice || master.price,
    priceValue: area.priceValue || master.priceValue,
    currency: area.currency || master.currency,
    unit: area.unit || master.unit,

    // --- Data Clusters (Blueprints Inheritance) ---
    benefits: area.benefits || master.benefits || [],
    coreFeatures: area.coreFeatures || master.coreFeatures || [],
    faqs: area.faqs || master.faqs || [],
    keywords: mergedKeywords,
    items: master.items || [],

    // --- Trust & Social Proof Injection ---
    clientTrust:
      area.clientTrust || area.localContext?.localSuccessStory?.title || master.clientTrust,
    socialProof: area.socialProof ||
      area.localContext?.socialProof || {
        rating: 5.0,
        reviewCount: 100,
        localClient: `ลูกค้าใน${area.province}`,
      },
    regionalPricing: area.localContext?.regionalPricing,
    localSuccessStory: area.localContext?.localSuccessStory,

    // --- [NEW]: Regional Content Injection ---
    regionalVisuals: area.regionalVisuals || area.localContext?.regionalVisuals,
    promotions: area.localContext?.promotions,
    marketSaturation: area.marketSaturation || area.localContext?.marketSaturation,
    isTourismHeavy: area.isTourismHeavy || area.localContext?.isTourismHeavy,
    regionalLatency: area.regionalLatency,
    regionalRoadmap: area.regionalRoadmap,

    // --- UI Actions & Strategic CTA (Inherit from Master) ---
    primaryAction: master.primaryAction || {
      label: "ปรึกษาผู้เชี่ยวชาญ",
      href: "#contact",
      variant: "brand",
    },
    secondaryAction: master.secondaryAction || {
      label: "ดูตัวอย่างงาน",
      href: "#process",
      variant: "outline",
    },

    // --- Final Optimized Theme ---
    theme: finalTheme,

    // --- Internal Linking ---
    masterServiceUrl: `/services/${master.templateSlug}`,
  };
}
