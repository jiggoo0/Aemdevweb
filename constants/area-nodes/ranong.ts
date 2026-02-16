/**
 * [SERVICE_NODE]: RANONG_WELLNESS_HUB v18.1.3 (FINAL_STRICT_COMPLIANT)
 * [STRATEGY]: Andaman Gateway | Thermal-Hydro Therapy
 */

import type { AreaNode } from "@/types";

export const ranongNode: AreaNode = {
  slug: "ranong",
  province: "ระนอง",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ระนอง - สร้าง Digital Infrastructure สู่เมือง Smart Wellness",
  description:
    "ยกระดับแพลตฟอร์มดิจิทัลจังหวัดระนอง รองรับยุทธศาสตร์ 'Wellness City' เชื่อมโยงระบบบริการประชาชน (E-Service) และฐานข้อมูลการค้าชายแดนไทย-เมียนมา ด้วยมาตรฐานความปลอดภัยสูงสุด",

  // [FIXED]: Added Missing Required SEO Properties
  seoTitle: "รับทำเว็บไซต์ระนอง อบต. เทศบาล - Wellness City & Border Trade Hub",
  seoDescription:
    "บริการทำเว็บไซต์หน่วยงานราชการระนอง รองรับ 3 ภาษา (ไทย/อังกฤษ/เมียนมา) เชื่อมโยงการท่องเที่ยวเชิงสุขภาพและการค้าชายแดน มาตรฐาน ITA",

  heroImage: "/images/areas/ranong-hotspring.webp",
  theme: {
    mode: "light",
    primary: "#006064",
    secondary: "#BF360C",
    background: "#F8FAFC",
    foreground: "#1E293B",
    accent: "#00838F",
    gradient: "bg-gradient-to-br from-[#006064]/05 to-[#BF360C]/05",
  },

  benefits: [
    "Cross-Border Multi-language: ระบบจัดการเนื้อหารองรับ Font ตระกูลเมียนมา (Zawgyi/Unicode) เพื่อรองรับแรงงานและเศรษฐกิจชายแดนโดยเฉพาะ",
    "Offline-First Hydration: สถาปัตยกรรมที่ช่วยให้เว็บเปิดได้ทันทีแม้ในจุดอับสัญญาณระหว่างหุบเขา หรือช่วงฝนตกหนัก (Rainy-Day Optimization)",
    "ITA-Compliant Architecture: โครงสร้างข้อมูลที่ถูกออกแบบมาเพื่อการประเมินคุณธรรมและความโปร่งใสในระดับ 'AA' โดยเฉพาะ",
  ],

  coreFeatures: [
    {
      title: "Mineral Water Hub",
      description: "Dashboard ข้อมูลแหล่งน้ำแร่และการจองคิวบริการสุขภาพแบบดิจิทัล",
      icon: "ThermometerIcon",
    },
    {
      title: "Andaman Logistics Link",
      description: "ระบบข่าวสารจุดผ่านแดนและการเดินเรือสินค้าข้ามเกาะแบบ Real-time",
      icon: "ShipIcon",
    },
    {
      title: "SEC One-Stop",
      description: "ระบบขอรับบริการออนไลน์ตามนโยบายระเบียงเศรษฐกิจภาคใต้ (SEC)",
      icon: "ShieldCheckIcon",
    },
  ],

  localContext: {
    marketInsight:
      "ระนองมีประชากรแฝงและนักท่องเที่ยวคุณภาพสูง (Health Enthusiasts) เว็บไซต์ท้องถิ่นต้องทำหน้าที่เป็น 'Digital Concierge' มากกว่าแค่บอร์ดประชาสัมพันธ์",

    technicalApproach:
      "ใช้ระบบ Next.js Static Site Generation (SSG) เพื่อลดภาระการประมวลผลของ Server ในช่วงพายุเข้า ช่วยให้ประชาชนเข้าถึงข้อมูลฉุกเฉินได้เสถียรที่สุด",

    localStrength:
      "ความเป็น 'เมืองแร่นอง' และ 'น้ำแร่ร้อน' คือสัญลักษณ์ความมั่งคั่งใหม่ (Wellness Wealth) ที่ต้องสื่อสารผ่าน Typography ที่ดูพรีเมียม",

    nicheIndustries: [
      "สมาคมธุรกิจการท่องเที่ยวจังหวัดระนอง",
      "ด่านศุลกากรระนอง (Border Trade Connectivity)",
      "กลุ่มวิสาหกิจชุมชนน้ำแร่ร้อนพรรั้ง/รักษะวาริน",
      "อุตสาหกรรมแปรรูปอาหารทะเลแช่แข็ง",
    ],

    painPoints: [
      "ข้อมูลท่องเที่ยวหน้าฝนไม่ชัดเจน (Rainy Season Uncertainty)",
      "เว็บราชการเดิมไม่รองรับภาษาเพื่อนบ้าน (Cross-border barrier)",
      "ระบบจองคิวบ่อน้ำแร่ยังเป็นระบบ Manual",
    ],

    competitorLevel: "low", // Correct literal type

    socialProof: {
      rating: 4.9,
      reviewCount: 41,
      localClient: "โครงการขับเคลื่อนเศรษฐกิจชายแดนระนอง",
    },

    hyperLocalKeywords: [
      "ทำเว็บไซต์ อบต.บางหริ้น",
      "ออกแบบเว็บเทศบาลเมืองระนอง",
      "เว็บราชการอำเภอกระบุรี",
      "ระบบจองบ่อน้ำแร่ร้อนระนอง",
    ],
  },

  priority: 92,
  price: "16,500",
  priceValue: 16500,
  currency: "THB",
  unit: "Starting",
  districts: ["เมืองระนอง", "ละอุ่น", "กะเปอร์", "กระบุรี", "สุขสำราญ"],

  // [FIXED]: Added Missing Required Property
  keywords: [
    "รับทำเว็บไซต์ระนอง",
    "Web Design Ranong",
    "Wellness Tourism Platform",
    "เว็บราชการภาษาพม่า",
    "ระบบจองคิวน้ำแร่",
  ],

  coordinates: { lat: 9.9528, lng: 98.6084 },
};
