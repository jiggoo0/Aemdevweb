/**
 * [SERVICE_NODE]: KAMPHAENG_PHET_GOV_HUB v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Local Authority | Government Trust | Hex Standard
 */
import type { AreaNode } from "@/types";

export const kamphaengPhetNode: AreaNode = {
  slug: "kamphaeng-phet",
  province: "กำแพงเพชร",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ กำแพงเพชร | ออกแบบเว็บ อบต. เทศบาล และธุรกิจท้องถิ่น",
  description:
    "บริการรับทำเว็บไซต์หน่วยงานราชการและธุรกิจในกำแพงเพชร เว็บไซต์ทันสมัย ใช้งานง่าย เข้าถึงประชาชนได้จริง ถูกต้องตามระเบียบภาครัฐ",
  longDescription:
    "ในยุคดิจิทัล หน่วยงานราชการและธุรกิจท้องถิ่นในกำแพงเพชรต้องปรับตัว เว็บไซต์ที่ดีช่วยลดภาระงานของเจ้าหน้าที่และสร้างความพึงพอใจให้ประชาชน",
  seoTitle: "รับทำเว็บไซต์ กำแพงเพชร ออกแบบเว็บ อบต. เทศบาล ขาณุฯ คลองขลุง - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์กำแพงเพชร รับทำเว็บราชการ อบต. เทศบาล และสินค้า OTOP เว็บไซต์ใช้งานง่าย รองรับมือถือ มีระบบ ITA และ e-Service",
  heroImage: "/images/areas/kamphaeng-phet-node.webp",
  theme: {
    mode: "light",
    primary: "#c2410c",
    secondary: "#9a3412",
    background: "#fff7ed",
    foreground: "#431407",
    accent: "#f97316",
    gradient: "from-[#c2410c]/10 via-transparent to-transparent",
  },
  price: "12,000",
  priceValue: 12000,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",
  clientTrust:
    "Government Standard: มาตรฐานเว็บไซต์ที่หน่วยงานราชการและวิสาหกิจชุมชนในกำแพงเพชรไว้วางใจ",
  benefits: [
    "เข้าถึงง่าย (Accessibility): ออกแบบตัวหนังสือใหญ่ เมนูชัดเจน เพื่อให้ผู้สูงอายุใช้งานได้สะดวก",
    "ถูกต้องตามระเบียบ (Compliance): โครงสร้างเว็บรองรับการประเมิน ITA และมีระบบ e-Service",
    "ดูแลง่าย (Easy CMS): ระบบหลังบ้านภาษาไทย 100% เจ้าหน้าที่ธุรการสามารถลงข่าวได้เอง",
  ],
  coreFeatures: [
    {
      title: "ITA & Transparency",
      description: "หน้าเว็บสำหรับเปิดเผยข้อมูลสาธารณะ (OIT) จัดหมวดหมู่ถูกต้องตามเกณฑ์ประเมิน",
      icon: "FileText",
    },
    {
      title: "Complaint System",
      description: "ระบบรับเรื่องร้องเรียนออนไลน์ ส่งตรงถึงเจ้าหน้าที่ผู้รับผิดชอบ",
      icon: "AlertCircle",
    },
    {
      title: "Responsive Design",
      description: "แสดงผลสมบูรณ์แบบบนมือถือทุกรุ่น",
      icon: "Smartphone",
    },
  ],
  faqs: [
    {
      question: "รับงานราชการ ต้องทำ TOR ไหม?",
      answer: "รับครับ ผมสามารถช่วยร่างสเปก (TOR) และเตรียมเอกสารเบิกจ่ายได้ครับ",
    },
    { question: "สอนเจ้าหน้าที่ใช้งานไหม?", answer: "สอนให้ฟรีครับ พร้อมคู่มือการใช้งานภาษาไทย" },
  ],
  localContext: {
    marketInsight:
      "ประชาชนต้องการความสะดวกในการติดต่อราชการ เว็บไซต์ที่ลดขั้นตอนเอกสารจะได้รับคำชม",
    technicalApproach:
      "ใช้ CMS ที่มีความปลอดภัยสูง ป้องกันการถูกแฮก และระบบจัดการไฟล์ PDF สำหรับเอกสารราชการ",
    localStrength: "เข้าใจวัฒนธรรมองค์กรท้องถิ่น ทำงานรวดเร็ว เอกสารครบถ้วน",
    nicheIndustries: ["หน่วยงานราชการ (อบต./เทศบาล)", "วิสาหกิจชุมชนและสินค้า OTOP"],
    painPoints: ["เว็บเดิมลิงก์ตาย ข้อมูลเก่า", "เจ้าหน้าที่คนเดิมย้าย ไม่มีใครดูแลต่อ"],
    competitorLevel: "low",
    socialProof: { rating: 4.8, reviewCount: 42, localClient: "วิสาหกิจชุมชนแปรรูปกล้วยไข่" },
    regionalPricing: { startPrice: "12,000 บาท", timeline: "20-30 วัน" },
    localSuccessStory: {
      title: "Case Study: อบต. ยุคใหม่",
      result: "ความพึงพอใจประชาชนเพิ่มขึ้น 80% ผ่านเกณฑ์ ITA ระดับ A",
    },
    hyperLocalKeywords: ["ทำเว็บ อบต คลองขลุง", "รับทำเว็บไซต์ พรานกระต่าย"],
  },
  priority: 96,
  districts: ["เมืองกำแพงเพชร", "คลองขลุง", "ขาณุวรลักษบุรี", "พรานกระต่าย"],
  keywords: ["รับทำเว็บไซต์ กำแพงเพชร", "ทำเว็บ อบต กำแพงเพชร"],
  coordinates: { lat: 16.4828, lng: 99.5227 },
};
