/** @format */
import { ConstructionTemplateProps } from "../types"

export const constructionMock: Record<string, ConstructionTemplateProps> = {
  "construction-industrial-01": {
    id: "construction-industrial-01",
    variant: "construction",
    name: { th: "เอ็ม เซอร์วิส คอนสตรัคชั่น", en: "M Service Construction" },
    primaryColor: "#ca8a04",
    phone: "088-777-6666",
    lineId: "@mconstruction",
    address: "789 Industrial Estate, Rayong, Thailand",
    defaultLanguage: "th",

    // 🟢 AEM DEV LAYER: มอบความมั่นใจด้านระบบดิจิทัล (Real Service)
    aemService: {
      supportLevel: "Direct Developer Support",
      infrastructure: {
        framework: "Next.js 15 (App Router)",
        hosting: "Cloud-Native Vercel/Edge",
      },
      standardFeatures: [], // ดึงมาตรฐานความปลอดภัยและการโหลดไวจาก ServiceInclusionSection
    },

    // 🔵 CONSTRUCTION CONTENT LAYER: ข้อมูลธุรกิจจำลอง (Mock Business)
    hero: {
      title: {
        th: "งานโครงสร้างเหล็กและอุตสาหกรรม",
        en: "Industrial Steel Works",
      },
      subtitle: {
        th: "มาตรฐานวิศวกรรมสากล รับประกันผลงานด้วยทีมงานมืออาชีพ",
        en: "Global Engineering Standards Guaranteed by Experts",
      },
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80",
    },
    projects: [
      {
        title: { th: "คลังสินค้าแหลมฉบัง", en: "Leam Chabang Warehouse" },
        category: { th: "งานโครงสร้างเหล็ก", en: "Steel Structure" },
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80",
      },
    ],
    steps: [
      {
        title: { th: "ออกแบบทางวิศวกรรม", en: "Engineering Design" },
        description: {
          th: "คำนวณโครงสร้างด้วยซอฟต์แวร์มาตรฐานสากล เพื่อความปลอดภัยสูงสุด",
          en: "Structural calculation by global standard software for maximum safety.",
        },
      },
      {
        title: { th: "วางแผนการผลิต", en: "Production Planning" },
        description: {
          th: "จัดทำ Timeline และงบประมาณที่ชัดเจน ไม่บานปลาย",
          en: "Detailed timeline and budget management without hidden costs.",
        },
      },
    ],
  },
}
