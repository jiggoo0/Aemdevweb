/**
 * [SERVICE_NODE]: SUKHOTHAI_HERITAGE_STORYTELLER v18.0.1 (STRICT_SYNC)
 * [STRATEGY]: Premium Branding | Aesthetic Storytelling | Dynamic Inheritance
 * [MARKET]: Sukhothai, Sri Satchanalai, Sawankhalok (Heritage & Craft)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "@/constants/services/local-authority";

export const sukhothaiNode: AreaNode = {
  // --- Basic Identity ---
  slug: "sukhothai",
  province: "สุโขทัย",
  templateSlug: "local-authority", // ยึดตาม Template หลักที่เน้นความน่าเชื่อถือและความยั่งยืน

  title: "รับทำเว็บไซต์ สุโขทัย | ออกแบบเว็บไซต์ให้งานฝีมือดูพรีเมียม ติดหน้าแรก Google",
  description:
    "เปลี่ยนงานหัตถศิลป์และธุรกิจท่องเที่ยวสุโขทัย ให้ดูสวยแพงและน่าเชื่อถือ ด้วยเว็บไซต์ที่บอกเล่าเรื่องราวแบรนด์อย่างมีรสนิยม โดย นายเอ็มซ่ามากส์",

  longDescription:
    "สุโขทัยคือเมืองแห่งมนต์เสน่ห์และงานฝีมือระดับครูครับ หัวใจสำคัญของการทำธุรกิจที่นี่คือการทำให้ลูกค้า 'เห็นคุณค่า' ก่อนเห็นราคา " +
    "ผมพร้อมช่วยเปลี่ยนธุรกิจของคุณให้มีตัวตนที่สง่างามบนโลกออนไลน์ เน้นการเล่าเรื่อง (Storytelling) ที่ทรงพลัง เพื่อเพิ่มมูลค่าให้เครื่องเงินศรีสัชนาลัย เครื่องสังคโลก หรือที่พักบูทีคโฮเต็ล " +
    "ให้เข้าถึงกลุ่มลูกค้าที่มีกำลังซื้อสูงและโหยหาคุณค่าทางวัฒนธรรมอย่างแท้จริงครับ",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ สุโขทัย ออกแบบเว็บเครื่องเงิน สังคโลก ที่พักพรีเมียม - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์สุโขทัย ครบวงจร เน้นดีไซน์สวยงามเพิ่มมูลค่าสินค้า OTOP พรีเมียม และธุรกิจท่องเที่ยวในเขตมรดกโลก ติดหน้าแรก Google",

  // --- [DYNAMIC_INHERITANCE]: Theme & Pricing ---
  // บังคับใช้ค่าจาก localAuthorityService เพื่อมาตรฐานเดียวกันทั้งระบบ (Emerald/Civil Theme)
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,

  // --- Visual (Local Specific) ---
  heroImage: "/images/areas/sukhothai-node.webp",

  // --- Trust Signals ---
  clientTrust:
    "Aesthetic Authority: เบื้องหลังการสร้างตัวตนดิจิทัลให้แบรนด์เครื่องเงินโบราณและที่พักระดับพรีเมียมในสุโขทัย",

  // --- Localized Benefits ---
  benefits: [
    "Aesthetic Storytelling: เปลี่ยนข้อมูลสินค้าที่แห้งแล้งให้เป็นเรื่องราวที่น่าหลงใหล เพื่อดึงดูดอารมณ์ร่วมของลูกค้า",
    "Luxury Positioning: ปรับตำแหน่งแบรนด์ (Positioning) ให้เข้าถึงกลุ่มลูกค้าที่มีกำลังซื้อสูงผ่านดีไซน์ที่ดูแพงและมีระดับ",
    "Heritage SEO: วางโครงสร้างการค้นหาเจาะจงคีย์เวิร์ดทรงคุณค่า เช่น 'เครื่องเงินโบราณ', 'สังคโลกสุโขทัย', 'ที่พักเมืองเก่า'",
  ],

  // --- Core Features (Heritage Specific) ---
  coreFeatures: [
    {
      title: "Visual Gallery Showcase",
      description:
        "ระบบแสดงภาพความละเอียดสูงที่เน้นรายละเอียดงานฝีมือ (Craftsmanship) ให้โดดเด่นและชัดเจนที่สุด",
      icon: "Image",
    },
    {
      title: "Premium Typography",
      description:
        "การจัดวางตัวอักษรในสไตล์ Editorial ที่มอบความรู้สึกเหมือนอ่านนิตยสารระดับพรีเมียม",
      icon: "FileText",
    },
    {
      title: "Direct Conversion Link",
      description:
        "ระบบเชื่อมต่อการติดต่อและการจองที่รวดเร็ว เชื่อมตรงสู่ LINE หรือระบบจองของที่พักโดยตรง",
      icon: "Zap",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ทำไมสินค้า OTOP สุโขทัยถึงต้องมีเว็บไซต์เฉพาะทาง?",
      answer:
        "เพื่อสร้าง 'โลกของแบรนด์' ขึ้นมาครับ ทำให้ลูกค้าเข้าใจคุณค่าและยอมรับในราคาที่สูงกว่าท้องตลาดได้ง่ายขึ้นผ่านการเล่าเรื่องที่สวยงามครับ",
    },
    {
      question: "นัดเจอเพื่อคุยรายละเอียดในสุโขทัยได้ไหม?",
      answer:
        "ยินดีมากครับ ผมสามารถนัดพูดคุยงานในเขตเมืองเก่า หรือพื้นที่ศรีสัชนาลัยได้ตามความสะดวกของคุณลูกค้าครับ",
    },
    {
      question: "ถ้าเป็นที่พักขนาดเล็ก ทำเว็บจะคุ้มไหม?",
      answer:
        "คุ้มมากครับ เพราะจะช่วยให้คุณรับจองโดยตรง (Direct Booking) ไม่ต้องเสียค่าคอมมิชชั่นให้แอปอื่น และสร้างฐานลูกค้าประจำของคุณเองครับ",
    },
    // [MERGE]: ดึงคำถามมาตรฐานจาก Template หลัก
    ...localAuthorityService.faqs.filter(
      (f) => f.question.includes("Google Maps") || f.question.includes("ดูแลหลังการขาย"),
    ),
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ลูกค้ากลุ่มพรีเมียมที่ซื้องานฝีมือหรือท่องเที่ยวสุโขทัย ตัดสินใจด้วย 'Story' และ 'Aesthetic' เว็บไซต์ที่ดูสวยงามจะช่วยปิดการขายได้ง่ายขึ้น",
    technicalApproach:
      "เน้น Image Optimization ขั้นสูงเพื่อโชว์รายละเอียดสินค้าให้คมชัดที่สุด และการจัดวาง Typography ที่สื่อถึงความภูมิฐาน",
    localStrength:
      "เราเข้าใจคุณค่าของงานหัตถศิลป์เมืองมรดกโลก พร้อมช่วยเรียบเรียงเนื้อหาให้ดูร่วมสมัยและเป็นสากล",
    nicheIndustries: [
      "เครื่องเงินศรีสัชนาลัยและทองโบราณ",
      "เครื่องสังคโลกและเซรามิกคราฟต์",
      "บูทีคโฮเต็ลและโฮมสเตย์ระดับพรีเมียม",
      "ธุรกิจท่องเที่ยวเชิงวัฒนธรรม (Cultural Tourism)",
    ],
    painPoints: [
      "สินค้าเป็นงานฝีมือชั้นสูงแต่ภาพลักษณ์บนเว็บดูธรรมดาเกินไป",
      "ขาดความน่าเชื่อถือในการส่งออกหรือขยายตลาดสู่ต่างจังหวัด",
      "ต้องการเพิ่มราคาขายแต่ไม่มีช่องทางเล่าเรื่องราว (Story) ให้ลูกค้าเข้าใจ",
    ],
    competitorLevel: "low",
    socialProof: {
      rating: 4.9,
      reviewCount: 45,
      localClient: "แบรนด์เครื่องเงินโบราณชื่อดังในศรีสัชนาลัย",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`, // Dynamic Reference
      timeline: "10-14 วัน",
    },
    localSuccessStory: {
      title: "Case Study: แบรนด์สังคโลกเมืองเก่า",
      result:
        "สร้างเว็บไซต์แบบ Digital Storytelling ช่วยให้มียอดสั่งซื้อคอลเลกชันพิเศษเพิ่มขึ้น 200% ในช่วงฤดูกาลท่องเที่ยว",
    },
    hyperLocalKeywords: [
      "รับทำเว็บ ศรีสัชนาลัย",
      "ออกแบบเว็บเครื่องเงิน สุโขทัย",
      "จ้างทำเว็บที่พักเมืองเก่า",
      "ทำ SEO สินค้า OTOP สุโขทัย",
    ],
  },

  // --- System Metadata ---
  priority: 84,
  districts: [
    "เมืองสุโขทัย",
    "ศรีสัชนาลัย",
    "กงไกรลาศ",
    "สวรรคโลก",
    "ศรีสำโรง",
    "คีรีมาศ",
    "บ้านด่านลานหอย",
  ],
  keywords: [
    "รับทำเว็บไซต์ สุโขทัย",
    "จ้างทำเว็บไซต์",
    "ออกแบบเว็บพรีเมียม",
    "รับทำ SEO สุโขทัย",
    "ทำเว็บขายเครื่องเงิน",
  ],
  coordinates: { lat: 17.0078, lng: 99.8235 },
};
