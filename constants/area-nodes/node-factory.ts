/**
 * [SYSTEM CORE]: NODE_FACTORY_ENGINE v18.2.0 (COMPREHENSIVE)
 * [STRATEGY]: Blueprint Inheritance | Deep Merging | SEO Keyword Orchestration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode, TemplateMasterData, ServiceFaq, ServiceFeature } from "@/types";

/**
 * [TYPE_HELPER]: กำหนด Contract การสืบทอดข้อมูล
 * - Omit: ฟิลด์ที่บังคับดึงจาก Master 100% (เพื่อรักษา Business Standard)
 * - Partial: ฟิลด์ที่ยอมให้ Local เสียบทับได้ (Override) แต่อยู่ในสถานะ Optional (ถ้าไม่ส่งมาจะใช้ Master)
 */
type LocalNodeConfig = Omit<
  AreaNode,
  | "templateSlug"
  | "currency"
  | "unit"
  | "theme"
  | "price"
  | "priceValue"
  | "priority"
  | "clientTrust"
  | "socialProof"
  | "heroImage"
  | "faqs"
  | "coreFeatures"
  | "benefits"
  | "keywords"
  | "seoTitle"
  | "seoDescription"
> &
  Partial<
    Pick<
      AreaNode,
      | "theme"
      | "price"
      | "priceValue"
      | "priority"
      | "clientTrust"
      | "socialProof"
      | "heroImage"
      | "faqs"
      | "coreFeatures"
      | "benefits"
      | "keywords"
      | "seoTitle"
      | "seoDescription"
    >
  >;

/**
 * [FACTORY]: เครื่องยนต์หลักในการประกอบร่าง Area Node (Master + Local)
 */
export function defineAreaNode(
  masterService: TemplateMasterData,
  localConfig: LocalNodeConfig,
): AreaNode {
  // ==========================================
  // 1. [SMART MERGE]: FAQs (รวมคำถาม Local และ Master โดยไม่ให้ซ้ำกัน)
  // ==========================================
  const mergedFaqs: ServiceFaq[] = [
    ...(localConfig.faqs || []),
    ...masterService.faqs.filter(
      (masterFaq) =>
        !localConfig.faqs?.some((localFaq) => localFaq.question === masterFaq.question),
    ),
  ];

  // ==========================================
  // 2. [SMART MERGE]: Keywords (รวมคีย์เวิร์ดทำเงินและตัดคำซ้ำ เพื่อ P-SEO)
  // ==========================================
  const mergedKeywords = Array.from(
    new Set([...(localConfig.keywords || []), ...(masterService.keywords || [])]),
  );

  // ==========================================
  // 3. [FALLBACK STRATEGY]: Content & Features
  // ==========================================
  const mergedFeatures: readonly ServiceFeature[] =
    localConfig.coreFeatures && localConfig.coreFeatures.length > 0
      ? localConfig.coreFeatures
      : masterService.coreFeatures;

  const mergedBenefits: readonly string[] =
    localConfig.benefits && localConfig.benefits.length > 0
      ? localConfig.benefits
      : masterService.benefits;

  // ==========================================
  // 4. [CONSTRUCT NODE]: ประกอบร่างขั้นสุดท้าย
  // ==========================================
  const node: AreaNode = {
    // --- [MANDATORY MASTER DATA] ---
    templateSlug: masterService.templateSlug,
    currency: masterService.currency,
    unit: masterService.unit,

    // --- [FALLBACK & OVERRIDE DATA] ---
    theme: localConfig.theme ?? masterService.theme,
    price: localConfig.price ?? masterService.price,
    priceValue: localConfig.priceValue ?? masterService.priceValue,
    priority: localConfig.priority ?? masterService.priority,
    clientTrust: localConfig.clientTrust ?? masterService.clientTrust,
    socialProof: localConfig.socialProof ?? masterService.socialProof,
    heroImage: localConfig.heroImage ?? masterService.image ?? "/images/shared/placeholder.webp",

    // --- [LOCAL UNIQUE DATA] ---
    ...localConfig,

    // --- [INJECTED MERGED ARRAYS] ---
    faqs: mergedFaqs,
    coreFeatures: mergedFeatures,
    benefits: mergedBenefits,
    keywords: mergedKeywords,

    // --- [AUTOMATIC SEO INJECTION] ---
    // ตรวจจับและสร้าง SEO Metadata อัตโนมัติหากไม่ได้เขียนระบุไว้
    seoTitle:
      localConfig.seoTitle ??
      `${localConfig.title} | ${masterService.title.split("|")[0].trim()} จังหวัด${localConfig.province}`,
    seoDescription:
      localConfig.seoDescription ??
      `${localConfig.description} ให้บริการในพื้นที่ ${localConfig.districts?.slice(0, 3).join(", ")} และใกล้เคียง`,
  } as AreaNode;

  return node;
}
