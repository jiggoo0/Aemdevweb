/**
 * [SERVICE_NODE]: SURIN_PREMIUM_IDENTITY v18.0.1
 * [STRATEGY]: Silk Craft | Event Tourism | Dynamic Inheritance
 */

import type { AreaNode } from "@/types";
import { localAuthorityService } from "@/constants/services/local-authority";

export const surinNode: AreaNode = {
  slug: "surin",
  province: "สุรินทร์",
  region: "Northeast",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ สุรินทร์ | ยกระดับแบรนด์ผ้าไหมยกทองและธุรกิจเมืองช้างสู่ระดับสากล",
  description:
    "เปลี่ยนงานหัตถศิลป์ชั้นสูงของสุรินทร์ให้เป็นยอดขายดิจิทัล ด้วยเว็บไซต์ที่เน้นความภูมิฐานและระบบจองสินค้าพรีเมียม",
  seoTitle: "รับทำเว็บไซต์ สุรินทร์ ออกแบบเว็บผ้าไหมยกทอง ที่พัก - เอ็มซ่ามากส์",
  seoDescription:
    "จ้างทำเว็บไซต์สุรินทร์ สำหรับโรงงานผ้าไหม SME พรีเมียม และที่พักในช่วงเทศกาลงานช้าง ดีไซน์หรูหรา โหลดไว รองรับ SEO",

  longDescription:
    "สุรินทร์ เมืองแห่งช้างและต้นกำเนิดผ้าไหมยกทองที่วิจิตรที่สุดในแผ่นดินอีสานใต้ " +
    "นายเอ็มซ่ามากส์ พร้อมเปลี่ยนงานหัตถศิลป์ระดับตำนานของสุรินทร์ให้เป็นตัวตนดิจิทัลที่ทรงคุณค่า " +
    "เราออกแบบเว็บไซต์ที่เน้นความภูมิฐาน (Prestige Design) และระบบแคตตาล็อกออนไลน์ที่ประณีต " +
    "เพื่อช่วยให้แบรนด์ผ้าไหมพรีเมียมและเครื่องเงินโบราณของคุณ ครองใจลูกค้ากลุ่มกำลังซื้อสูงทั้งในไทยและต่างประเทศ",

  // --- Localized Benefits ---
  benefits: [
    "Yok-Thong Digital Elegance: งานดีไซน์ที่สะท้อนถึงความหรูหราและความประณีตของงานหัตถศิลป์ชั้นครูในสุรินทร์",
    "High-Res Catalog Mastery: ระบบจัดการสินค้าที่เน้นรายละเอียดลายผ้าและงานฝีมือที่คมชัด เพื่อเพิ่มมูลค่าแบรนด์พรีเมียม",
    "Isan South SEO Authority: วางรากฐานการค้นหาเพื่อสนับสนุนธุรกิจเครื่องเงินและแหล่งท่องเที่ยวในช่วงเทศกาลงานช้างประจำจังหวัด",
  ],

  priority: 85,
  theme: localAuthorityService.theme,
  price: localAuthorityService.price,
  priceValue: localAuthorityService.priceValue,
  currency: localAuthorityService.currency,
  unit: localAuthorityService.unit,
  heroImage: "/images/areas/surin-node.webp",
  coordinates: { lat: 14.8818, lng: 103.4936 },
  isTourismHeavy: true,
  marketSaturation: 40,
  regionalLatency: 24,
  regionalRoadmap: [
    {
      step: "01",
      title: "Royal Silk Audit",
      description:
        "วิเคราะห์คุณค่าผ้าไหมยกทองเมืองสุรินทร์เพื่อสร้างแบรนด์ดิจิทัลที่สะท้อนความหรูหราและประณีต",
    },
    {
      step: "02",
      title: "Premium Order Sync",
      description:
        "ติดตั้งระบบสั่งจองสินค้าพรีเมียมและระบบแกลเลอรี่ที่โชว์รายละเอียดลายผ้าที่คมชัดที่สุด",
    },
    {
      step: "03",
      title: "Event-City SEO Sync",
      description:
        "ทำ Local SEO เน้นคีย์เวิร์ด 'ผ้าไหมสุรินทร์แท้', 'ที่พักงานช้าง' เพื่อดักจับ Traffic คุณภาพ",
    },
  ],
  localContext: {
    marketInsight:
      "สุรินทร์มีกลุ่มลูกค้ากำลังซื้อสูงที่มองหา 'งานฝีมือชั้นครู' เว็บไซต์ที่ดูแพงและมีสตอรี่จะได้รับความเชื่อถือสูง",
    technicalApproach:
      "เน้น Image Optimization ขั้นสูงสำหรับลายผ้าไหมและการจัดวาง Typography ที่สื่อถึงความภูมิฐาน",
    localStrength:
      "ชื่อเสียงด้าน 'ผ้าไหมยกทอง' และ 'เมืองช้าง' คือจุดขายระดับสากลที่ต้องนำเสนอบนหน้าเว็บ",
    nicheIndustries: [
      "โรงงานและแบรนด์ผ้าไหมพรีเมียม",
      "เครื่องเงินโบราณและอัญมณีสุรินทร์",
      "ที่พักและโฮมสเตย์ในช่วงเทศกาล",
    ],
    painPoints: [
      "ภาพลักษณ์เว็บไม่สมราคาลายผ้าหลักหมื่น",
      "ขาดช่องทางดิจิทัลในการปิดดีลกับคู่ค้าต่างประเทศ",
    ],
    competitorLevel: "low",
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ เมืองช้าง",
      "ออกแบบเว็บผ้าไหมพรีเมียม สุรินทร์",
      "จ้างทำ SEO สุรินทร์",
      "ทำเว็บสินค้าพรีเมียม สุรินทร์",
    ],
  },
  districts: ["เมืองสุรินทร์", "ปราสาท", "สังขะ", "รัตนบุรี", "เขวาสินรินทร์"],
  keywords: [
    "รับทำเว็บไซต์ สุรินทร์",
    "ทำเว็บผ้าไหม สุรินทร์",
    "จ้างทำเว็บสุรินทร์",
    "รับทำ SEO สุรินทร์",
  ],
};
