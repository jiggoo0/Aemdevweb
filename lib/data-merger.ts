/**
 * [SYSTEM CORE]: DATA_MERGER_ENGINE v17.9.106 (ULTIMATE_HARDENED)
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
  // 1. [SMART_THEME_FUSION]: รวมธีมพร้อมระบบป้องกันปัญหา Contrast
  const mergedTheme: ThemeConfig = {
    // รับมรดกจาก Master Service ทั้งหมด
    ...master.theme,
    // ทับด้วยข้อมูลเฉพาะจังหวัด (ถ้ามี)
    ...(area.theme || {}),

    // [FAIL-SAFE]: รับประกันค่าพื้นฐานสำคัญต้องไม่เป็นค่าว่าง
    primary: area.theme?.primary || master.theme?.primary || "#2563eb",
    background: area.theme?.background || master.theme?.background || "#ffffff",

    // [READABILITY_LOGIC]: คำนวณสีตัวอักษรให้อัตโนมัติหากไม่ได้ระบุ
    // เพื่อป้องกันปัญหาตัวหนังสือจม (เช่น พื้นขาว ตัวหนังสือขาว)
    mode: area.theme?.mode || master.theme?.mode || "light",
    foreground:
      area.theme?.foreground ||
      master.theme?.foreground ||
      ((area.theme?.mode || master.theme?.mode) === "dark" ? "#ffffff" : "#0f172a"),
  };

  // 2. [SEO_KEYWORD_AGGREGATION]: ผสานพลังคีย์เวิร์ด (Unique Only)
  const mergedKeywords = Array.from(
    new Set([
      ...(master.keywords || []),
      ...(area.keywords || []),
      ...(area.localContext?.hyperLocalKeywords || []),
    ]),
  );

  // 3. [PROPS_CONSTRUCTION]: สังเคราะห์ข้อมูลชุดสุดท้าย
  return {
    // --- Identity ---
    id: `NODE-${area.slug.toUpperCase()}`,
    templateSlug: master.templateSlug,
    category: master.category,
    priority: area.priority || master.priority,

    // --- Content (Area Nodes take precedence) ---
    title: area.title || master.title,
    description: area.description || master.description,
    image: area.heroImage || master.image,

    // --- Commercial Data ---
    // ใช้ราคาประเมินพื้นที่ (Regional) หากไม่มีให้ใช้ราคามาตรฐานของแบรนด์
    price: area.localContext?.regionalPricing?.startPrice || master.price,
    priceValue: master.priceValue,
    currency: master.currency,
    unit: master.unit,

    // --- Data Clusters (Blueprints Inheritance) ---
    benefits: master.benefits || [],
    coreFeatures: master.coreFeatures || [],
    faqs: master.faqs || [],
    keywords: mergedKeywords,
    items: master.items || [],

    // --- Trust & Social Proof Injection ---
    clientTrust: area.localContext?.localSuccessStory?.title || master.clientTrust,
    socialProof: area.localContext?.socialProof || {
      rating: 5.0,
      reviewCount: 100,
      localClient: "ลูกค้าในพื้นที่",
    },
    regionalPricing: area.localContext?.regionalPricing,
    localSuccessStory: area.localContext?.localSuccessStory,

    // --- UI Actions & Strategic CTA ---
    primaryAction: {
      label: "ปรึกษาแผนงานฟรี",
      href: "#contact",
      variant: "brand",
    },
    secondaryAction: {
      label: "วิเคราะห์ข้อมูลธุรกิจ",
      href: "#analysis",
      variant: "outline",
    },

    // --- Final Optimized Theme ---
    theme: mergedTheme,
  };
}
