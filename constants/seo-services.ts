/** @format */
// พิกัดข้อมูล: constants/seo-services.ts
// หน้าที่: พิกัดข้อมูลหลัก (Master Data) สำหรับบริการ Technical SEO
// มาตรฐาน: Ultra-Deep Level 7 | Specialist Optimization 2026
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { SeoServiceItem } from "@/types/seo";

/**
 * [SEO SERVICES 2026]
 * ชุดข้อมูล Immutable Array สำหรับระบบบริการด้านการปรับแต่งโครงสร้างการค้นหา
 */
export const seoServicesData: readonly SeoServiceItem[] = [
  {
    id: "seo-tech-001",
    slug: "technical-structure-audit",
    title: "Technical Structure Audit",
    subtitle: "พิกัดตรวจสอบจุดบอดโครงสร้างและพิกัดระบบเชิงลึก",
    description:
      "วิเคราะห์เจาะลึกรหัสที่ฉุดรั้งอันดับ พร้อมรายงานการแก้ไขเชิงเทคนิคเพื่อเพิ่มประสิทธิภาพการเก็บข้อมูล (Crawl Budget) ของ Google Bot โดย นายเอ็มซ่ามากส์",
    iconName: "ShieldCheck",
    painPoints: [
      "หน้าเว็บสำคัญไม่ถูกดัชนี (Index) บนระบบการค้นหาสากล",
      "บอทไม่เข้ามาเก็บข้อมูลในพิกัดหลักของเว็บไซต์",
      "โครงสร้างลิงก์ภายในซับซ้อนจนระบบ AI สับสน",
      "พบพิกัด Error และ Redirect ที่ส่งผลเสียต่อคะแนนความเชื่อมั่น",
    ],
    features: [
      "Technical Crawlability Audit: ตรวจสอบการเข้าถึงของบอท 100%",
      "Sitemap & Robots.txt Optimization: วางพิกัดแผนผังเว็บระดับ Specialist",
      "Canonical & Redirect Management: แก้ไขปัญหาเนื้อหาซ้ำซ้อน",
      "Index Velocity Tuning: เร่งความเร็วการนำเนื้อหาขึ้นระบบ Google",
    ],
    benefits: [
      {
        title: "Crawl Budget Efficiency",
        desc: "ช่วยให้บอทเก็บข้อมูลหน้าสำคัญได้ครบถ้วนในโควตาที่จำกัด",
      },
      {
        title: "Search Visibility",
        desc: "เปิดพิกัดหน้าเว็บที่เคยถูกซ่อนให้ปรากฏบนหน้าการค้นหา",
      },
    ],
    pricing: {
      price: 15900,
      label: "15,900",
      currency: "THB",
      suffix: "/ ครั้ง",
    },
    faq: [
      {
        question: "ต้องปรับแก้หน้าตาเว็บไซต์หรือไม่?",
        answer:
          "ไม่ต้องครับ เราเน้นจูนรหัสโครงสร้างเป็นหลัก ดีไซน์เดิมยังคงอยู่ครบถ้วนและทำงานได้เสถียรขึ้น",
      },
    ],
  },
  {
    id: "seo-speed-002",
    slug: "core-web-vitals-speed",
    title: "Core Web Vitals Speed",
    subtitle: "จูนสปีดสายโหด การันตีคะแนน Performance สีเขียวมาตรฐาน 2026",
    description:
      "บริการจูนความเร็วระดับ LCP ต่ำกว่า 0.8 วินาที เพื่อผ่านเกณฑ์มาตรฐานสูงสุดของ Google การันตีผลลัพธ์ด้วยคะแนนสีเขียวทั้ง Mobile และ Desktop โดย นายเอ็มซ่ามากส์",
    iconName: "Zap",
    pricing: {
      price: 25000,
      label: "25,000",
      currency: "THB",
      isPopular: true,
    },
    painPoints: [
      "สูญเสียโอกาสทางการค้าเพราะเว็บโหลดช้า (High Bounce Rate)",
      "คะแนน PageSpeed Insights ไม่ผ่านเกณฑ์มาตรฐานสีเขียว",
      "การแสดงผลบนอุปกรณ์เคลื่อนที่ล่าช้าจนเสียอันดับการค้นหา",
      "ถูกลดอันดับ SEO เพราะค่า Core Web Vitals ต่ำกว่าพิกัดที่กำหนด",
    ],
    features: [
      "LCP Optimization: จูนการแสดงผลพิกัดหลักให้ไวทะลุไมล์",
      "CLS Zero Shift: จัดการโครงสร้างไม่ให้หน้าเว็บขยับขณะโหลด",
      "Next-Gen Image Format: แปลงไฟล์ภาพเป็น WebP/Avif อัตโนมัติ",
      "Critical CSS & JS Minify: กำจัดรหัสส่วนเกินที่ถ่วงสมรรถนะระบบ",
    ],
    benefits: [
      {
        title: "User Experience Excellence",
        desc: "สร้างความประทับใจแรกด้วยความเร็วที่เหนือกว่าคู่แข่งในตลาด",
      },
      {
        title: "Ranking Signal Boost",
        desc: "ได้รับคะแนนพิเศษจากการผ่านเกณฑ์ Google Performance",
      },
    ],
    faq: [
      {
        question: "หากมีการอัปเดตข้อมูลความเร็วจะลดลงหรือไม่?",
        answer:
          "เราวางระบบให้รองรับการขยายตัว หากอัปเดตตามมาตรฐานที่ นายเอ็มซ่ามากส์ วางไว้ ความเร็วจะคงที่ในระดับสูงเสมอ",
      },
    ],
  },
  {
    id: "seo-entity-003",
    slug: "entity-local-authority",
    title: "Entity & Local Authority",
    subtitle: "พิกัด Local SEO ปักหมุดแม่นยำ ดันตัวตนธุรกิจให้เป็นที่หนึ่งในพื้นที่",
    description:
      "สร้างความน่าเชื่อถือ (Trust) ให้ธุรกิจบน Google Maps และระบบการค้นหา ยืนยันพิกัดตัวตนให้บอทรับรู้ว่าเป็นผู้เชี่ยวชาญตัวจริงในพื้นที่โดย นายเอ็มซ่ามากส์",
    iconName: "MapPin",
    pricing: {
      price: 8900,
      label: "8,900",
      currency: "THB",
    },
    painPoints: [
      "ลูกค้าค้นหาบนแผนที่ (Google Maps) ไม่พบพิกัดธุรกิจของคุณ",
      "ชื่อธุรกิจซ้ำจนระบบ AI สับสนและไม่ส่งทราฟฟิกให้",
      "ขาดความเชื่อมั่น (Authority) ในระดับพิกัดพื้นที่",
      "ข้อมูลโซเชียลมีเดียไม่เชื่อมโยงกับพิกัดเว็บไซต์หลัก",
    ],
    features: [
      "Advanced GMB Optimization: จูน Google Business Profile ขั้นสูง",
      "SameAs Schema Integration: เชื่อมพิกัดตัวตนทุกแพลตฟอร์มเข้าด้วยกัน",
      "E-E-A-T Content Audit: ปรับหน้าข้อมูลผู้เชี่ยวชาญให้ผ่านเกณฑ์สากล",
      "Local Citation Building: สร้างการอ้างอิงพิกัดจากแหล่งข้อมูลที่น่าเชื่อถือ",
    ],
    benefits: [
      {
        title: "Local Traffic Surge",
        desc: "เพิ่มจำนวนลูกค้าในพื้นที่ให้เข้าถึงหน้าร้านได้ง่ายและแม่นยำ",
      },
      {
        title: "Brand Authority Domination",
        desc: "ทำให้ระบบการค้นหามองว่าคุณคือตัวจริงในพิกัดธุรกิจนั้นๆ",
      },
    ],
    faq: [
      {
        question: "จะเริ่มเห็นความเปลี่ยนแปลงเมื่อใด?",
        answer:
          "เริ่มเห็นการปรับปรุงในระบบการค้นหาและพิกัดแผนที่ภายในระยะเวลา 2-4 สัปดาห์",
      },
    ],
  },
  {
    id: "seo-schema-004",
    slug: "advanced-schema-markup",
    title: "Advanced Schema Markup",
    subtitle: "ฝังรหัส JSON-LD ขั้นสูง เพื่อการแสดงผลแบบ Rich Results",
    description:
      "สื่อสารกับระบบ AI ของ Google ผ่านรหัสโครงสร้างข้อมูลเพื่อให้เว็บแสดงผลลัพธ์แบบพิเศษ (Rich Snippets) บนหน้าการค้นหาโดยตรง",
    iconName: "Code2",
    pricing: {
      price: 9900,
      label: "9,900",
      currency: "THB",
    },
    painPoints: [
      "ผลการค้นหาไม่โดดเด่นและไม่มีความแตกต่างจากคู่แข่ง",
      "ข้อมูลรีวิวและราคาสินค้าไม่ปรากฏบนหน้าผลการค้นหา",
      "บอทสับสนในประเภทเนื้อหา (Service vs Article)",
      "สูญเสียพื้นที่แสดงผลบนหน้าแรก Google ไปอย่างน่าเสียดาย",
    ],
    features: [
      "Organization & Local Business Schema: ฝังรหัสยืนยันพิกัดบริษัท",
      "Review & Aggregate Rating Schema: ดึงคะแนนความพึงพอใจขึ้นโชว์",
      "FAQ & How-to Schema: ยึดพื้นที่แสดงผลและตอบโจทย์ลูกค้าทันที",
      "Semantic Data Check: ตรวจสอบความถูกต้องของรหัส 100% โดย Specialist",
    ],
    benefits: [
      {
        title: "Higher CTR",
        desc: "เพิ่มอัตราการคลิกเข้าสู่เว็บไซต์ด้วยการแสดงผลที่ดึงดูดสายตา",
      },
      {
        title: "Rich Result Domination",
        desc: "ยึดพื้นที่หน้าแรก Google ได้กว้างและมีระดับกว่าปกติ",
      },
    ],
    faq: [
      {
        question: "จำเป็นต้องดำเนินการทุกหน้าหรือไม่?",
        answer:
          "เราจะเลือกวางระบบในพิกัดหน้าหลักและหน้าบริการที่มีความสำคัญสูงเพื่อผลลัพธ์ที่ดีที่สุด",
      },
    ],
  },
  {
    id: "seo-ecom-005",
    slug: "ecommerce-conversion-seo",
    title: "E-commerce Conversion SEO",
    subtitle: "จูนระบบร้านค้าออนไลน์ ดันสินค้าขึ้นพิกัดหน้าแรก",
    description:
      "วางโครงสร้างพิกัดหมวดหมู่ (Taxonomy) และหน้ารายละเอียดสินค้าให้ระบบ Google เชื่อมั่นและเพิ่มอัตราการปิดการขายโดย นายเอ็มซ่ามากส์",
    iconName: "BarChart3",
    pricing: {
      price: 35000,
      label: "35,000",
      currency: "THB",
      suffix: "/ โปรเจกต์",
    },
    painPoints: [
      "สินค้าจำนวนมากไม่ติดอันดับและไม่มีทราฟฟิกเข้าชม",
      "โครงสร้างหมวดหมู่สินค้าสับสนจนบอทไม่สามารถเก็บข้อมูลได้ครบ",
      "ข้อมูลสินค้าไม่ปรากฏบนพิกัด Google Shopping Tab",
      "อัตราการปิดการขายต่ำเนื่องจากโครงสร้างข้อมูลไม่ตอบโจทย์ผู้ซื้อ",
    ],
    features: [
      "Product Taxonomy Design: จัดผังหมวดหมู่สินค้าให้ Google เข้าใจง่าย",
      "Advanced Product Schema: ฝังรหัสราคา สต็อก และแบรนด์อย่างละเอียด",
      "Category Page Optimization: ผลักดันอันดับหน้าหมวดหมู่สินค้าหลัก",
      "Conversion Rate Tuning: ปรับแต่งหน้าสินค้าเพื่อกระตุ้นการตัดสินใจซื้อ",
    ],
    benefits: [
      {
        title: "Organic Sales Growth",
        desc: "เพิ่มยอดขายจากลูกค้าที่ค้นหาผ่านระบบ Organic โดยตรง",
      },
      {
        title: "Merchant Trust Establishment",
        desc: "สร้างความน่าเชื่อถือในพิกัด Google Merchant Center ระดับสากล",
      },
    ],
    faq: [
      {
        question: "สามารถรองรับสินค้าจำนวนหลักหมื่นชิ้นได้หรือไม่?",
        answer:
          "ได้ครับ ระบบถูกออกแบบมาให้เป็น Scalable Architecture รองรับพิกัดข้อมูลขนาดใหญ่ได้อย่างเสถียร",
      },
    ],
  },
];
