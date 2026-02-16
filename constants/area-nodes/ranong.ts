/**
 * [SERVICE_NODE]: RANONG_WELLNESS_AUTHORITY v18.0.0 (ACCESSIBILITY_PATCHED)
 * [STRATEGY]: Wellness City | Border Trade Gateway | Hex Standard
 * [MARKET]: Local Authorities (PAO/SAO) & Tourism Boards in Ranong
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { AreaNode } from "@/types";

export const ranongNode: AreaNode = {
  // --- Basic Identity ---
  slug: "ranong",
  province: "ระนอง",
  templateSlug: "local-authority",
  title: "รับทำเว็บไซต์ระนอง พัฒนาท้องถิ่นสู่ Smart Wellness City",
  description:
    "ยกระดับงานบริการภาครัฐจังหวัดระนอง ด้วยเว็บไซต์ทันสมัย รองรับการท่องเที่ยวเชิงสุขภาพ เชื่อมโยงข้อมูลการค้าชายแดน และบริการประชาชนแบบ One-Stop Service",

  longDescription:
    "ระนองคือจุดยุทธศาสตร์สำคัญทั้งด้านการท่องเที่ยวเชิงสุขภาพ (Wellness Tourism) และการค้าชายแดน " +
    "นายเอ็มซ่ามากส์ ออกแบบแพลตฟอร์มที่ตอบโจทย์ 'เมืองฝนแปด แดดสี่' ด้วยเทคโนโลยีที่โหลดไวและรองรับภาษาเมียนมาเพื่อการสื่อสารข้ามแดน " +
    "เน้นการสร้างตัวตนดิจิทัลที่แข็งแกร่งให้กับหน่วยงานท้องถิ่น เพื่อกระจายรายได้สู่ชุมชนประมงและวิสาหกิจชุมชนน้ำแร่อย่างยั่งยืน",

  // --- SEO Metadata ---
  seoTitle: "รับทำเว็บไซต์ระนอง อบต. เทศบาล - เอ็มซ่ามากส์ ออกแบบเว็บราชการมาตรฐาน ITA",
  seoDescription:
    "บริการทำเว็บไซต์หน่วยงานราชการระนอง ครอบคลุมระบบ E-Service งานสารบรรณอิเล็กทรอนิกส์ และประชาสัมพันธ์แหล่งท่องเที่ยว Unseen ระนอง รองรับระบบ Multi-language",

  // --- Visual & Theme (Wellness Teal & Mineral Orange) ---
  heroImage: "/images/areas/ranong-hotspring.webp",
  theme: {
    mode: "light",
    /** * [ACCESSIBILITY_PATCH]: ปรับจาก #00838F (4.09:1) เป็น #006064 (6.58:1)
     * เพื่อให้ผ่านเกณฑ์ WCAG AA เมื่อแสดงผลบนพื้นหลัง #F0F4F8
     */
    primary: "#006064",
    secondary: "#d84315", // Deep Orange สำหรับความอบอุ่นของน้ำแร่
    background: "#F0F4F8",
    foreground: "#263238",
    accent: "#0097a7",
    gradient: "from-[#006064]/10 via-transparent to-transparent",
  },

  // --- Pricing Strategy ---
  price: "16,500",
  priceValue: 16500,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",

  // --- Trust Signals ---
  clientTrust:
    "Expertise: เชี่ยวชาญระบบงานราชการและโครงสร้างพื้นฐานดิจิทัลในเขตระเบียงเศรษฐกิจภาคใต้ (SEC)",

  // --- Localized Benefits ---
  benefits: [
    "Cross-Border Communication: ระบบรองรับ 3 ภาษา (ไทย, อังกฤษ, เมียนมา) เพื่อรองรับแรงงานและการค้าชายแดนในพื้นที่อย่างเป็นทางการ",
    "High-Availability in Rain: ใช้สถาปัตยกรรมที่โหลดข้อมูลซ้ำซ้อน (PWA) เพื่อให้เว็บไซต์ยังทำงานได้ดีแม้ในสภาพอากาศฝนตกหนักซึ่งรบกวนสัญญาณอินเทอร์เน็ต",
    "Smart Wellness Hub: ระบบจัดการข้อมูลแหล่งท่องเที่ยวเชิงสุขภาพและสินค้า OTOP แปรรูปอาหารทะเล เพื่อเพิ่มมูลค่าเศรษฐกิจท้องถิ่น",
  ],

  // --- Core Features ---
  coreFeatures: [
    {
      title: "Health & Wellness Data",
      description: "ระบบฐานข้อมูลเชิงลึกสำหรับแหล่งท่องเที่ยวเชิงสุขภาพและข้อมูลบ่อน้ำแร่ธรรมชาติ",
      icon: "Activity",
    },
    {
      title: "Border Trade Support",
      description: "ส่วนประชาสัมพันธ์ระเบียบการค้าและระเบียบการผ่านเข้า-ออกจุดผ่านแดนถาวร",
      icon: "Globe",
    },
    {
      title: "Fishery Community Hub",
      description: "ระบบแจ้งเตือนมรสุมและช่องทางประชาสัมพันธ์กลุ่มประมงพื้นบ้านเพื่อความปลอดภัย",
      icon: "Anchor",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "เว็บไซต์รองรับการใช้งานบนมือถือช่วงสภาพอากาศแปรปรวนได้ดีเพียงใด?",
      answer:
        "เราใช้ Next.js ร่วมกับระบบ Cache ระดับ Edge Computing ช่วยให้โหลดข้อมูลเบื้องต้นได้รวดเร็วแม้แบนด์วิดท์จำกัด เหมาะกับพื้นที่ระนองที่มีฝนตกชุกครับ",
    },
    {
      question: "รองรับการเชื่อมต่อระบบ ITA ของภาครัฐหรือไม่?",
      answer:
        "รองรับ 100% ครับ โครงสร้างข้อมูลถูกจัดวางให้ตรงตามเกณฑ์การประเมินความโปร่งใส (OIT) เพื่อให้หน่วยงานผ่านเกณฑ์การประเมินในระดับสูง",
    },
    {
      question: "สามารถทำระบบจองคิวบ่อน้ำแร่หรือบริการสุขภาพได้ไหม?",
      answer:
        "ทำได้ครับ เราสามารถเพิ่มโมดูล Online Booking เพื่อลดความแออัดของนักท่องเที่ยวและบริหารจัดการทรัพยากรท้องถิ่นได้แม่นยำขึ้น",
    },
    {
      question: "มีการสอนใช้งานระบบจัดการเนื้อหา (CMS) หรือไม่?",
      answer:
        "มีครับ เราจัดอบรมให้เจ้าหน้าที่ดูแลเนื้อหาได้เอง พร้อมคู่มือภาษาไทยและบริการซัพพอร์ตตลอดอายุสัญญาการดูแลระบบครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ระนองเป็นเมืองที่มีศักยภาพสูงด้าน Wellness Tourism แต่ยังขาดแพลตฟอร์มดิจิทัลที่บูรณาการข้อมูลระหว่างอำเภอ เว็บไซต์ท้องถิ่นจึงต้องทำหน้าที่เป็น Gateway หลัก",
    technicalApproach:
      "เน้น UI แบบ Visual-centric โดยใช้ภาพถ่ายความละเอียดสูงสื่อสารถึงความสมบูรณ์ของธรรมชาติ และใช้เทคนิค Image Optimization เพื่อไม่ให้กระทบความเร็วโหลด",
    localStrength:
      "ทรัพยากรบ่อน้ำแร่ร้อนและพื้นที่เกาะที่ยังคงความเป็นธรรมชาติสูง เป็นจุดขายที่ต้องใช้การเล่าเรื่อง (Storytelling) ผ่านเว็บไซต์",
    nicheIndustries: [
      "เทศบาลตำบลและ อบต. ในเขตอำเภอเมือง",
      "กลุ่มวิสาหกิจท่องเที่ยวเชิงนิเวศ",
      "สมาคมผู้ประกอบการประมงระนอง",
      "ธุรกิจสปาและ Wellness Resort",
    ],
    painPoints: [
      "การสื่อสารข้อมูลข่าวสารไปสู่พื้นที่เกาะและชายแดนยังมีความล่าช้า",
      "เว็บไซต์เดิมไม่รองรับการแสดงผลบนสมาร์ทโฟนอย่างสมบูรณ์",
      "ขาดระบบจัดเก็บข้อมูลนักท่องเที่ยวแบบดิจิทัล",
    ],
    competitorLevel: "low",

    socialProof: {
      rating: 4.8,
      reviewCount: 35,
      localClient: "โครงการพัฒนา Smart Wellness City ระนอง",
    },
    regionalPricing: {
      startPrice: "16,500 บาท",
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "Digital Gateway for Border Trade",
      result:
        "เพิ่มประสิทธิภาพการประชาสัมพันธ์ระเบียบการค้าชายแดน ช่วยให้ผู้ประกอบการเข้าถึงข้อมูลได้เร็วขึ้น 50%",
    },
    hyperLocalKeywords: [
      "รับทำเว็บไซต์ระนอง",
      "ออกแบบเว็บ อบต.กระบุรี",
      "จ้างทำเว็บราชการกะเปอร์",
      "ระบบ E-Service เทศบาลระนอง",
    ],
  },

  // --- System Metadata ---
  priority: 80,
  districts: ["เมืองระนอง", "ละอุ่น", "กะเปอร์", "กระบุรี", "สุขสำราญ"],
  keywords: [
    "รับทำเว็บไซต์ระนอง",
    "ออกแบบเว็บไซต์ราชการ",
    "Web Design Ranong",
    "Wellness Tourism Platform",
    "ระบบ ITA อบต",
  ],
  coordinates: { lat: 9.9528, lng: 98.6084 },
};
