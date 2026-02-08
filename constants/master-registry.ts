/**
 * [DATA REGISTRY]: MASTER_SERVICE_REGISTRY v17.0.1 (STABILIZED)
 * [STRATEGY]: Unified Visual Preview | Single Source of Truth | SEO Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { TemplateMasterData } from "@/types";

/**
 * @description คลังข้อมูลบริการหลักที่เชื่อมโยงรูปภาพพรีวิวสำหรับการแสดงผล Technical Modules
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  // --- [01. SALEPAGE: ระบบหน้าเว็บปิดการขาย] ---
  {
    id: "AEM-SVC-SP-01",
    title: "Sale Page หน้าเว็บที่เน้นปิดการขายโดยเฉพาะ",
    description:
      "เปลี่ยนคนดูให้เป็นลูกค้าด้วยหน้าเว็บที่เน้นให้ข้อมูลครบถ้วน จบในหน้าเดียว และช่วยให้ลูกค้าตัดสินใจซื้อง่ายขึ้น",
    image: "/images/service/preview.webp",
    price: "2,900",
    currency: "THB",
    priceValue: 2900,
    unit: "เริ่มต้น",
    category: "landing",
    templateSlug: "salepage",
    benefits: [
      "หน้าเว็บโหลดไวทันใจ ไม่ปล่อยให้ลูกค้าหลุดเพราะรอโหลดนาน",
      "วางระบบเก็บข้อมูล (Pixel & Tracking) สำหรับยิงโฆษณาได้แม่นยำ",
      "จัดวางข้อมูลให้ลื่นไหล กระตุ้นความอยากซื้อได้ดีกว่าเว็บทั่วไป",
    ],
    coreFeatures: [
      {
        title: "Direct Response Design",
        description: "ออกแบบมาเพื่อนำสายตาไปสู่การกดสั่งซื้อ",
        icon: "Target",
      },
      {
        title: "Mobile First",
        description: "เปิดดูผ่านมือถือได้สวยงามและลื่นไหล 100%",
        icon: "Smartphone",
      },
      {
        title: "Fast Checkout",
        description: "ปุ่มทักแชทหรือปุ่มสั่งซื้อโดดเด่น กดง่ายทันที",
        icon: "Zap",
      },
    ],
    faqs: [
      {
        question: "ใช้เวลานานแค่ไหนถึงจะใช้งานได้?",
        answer: "โดยปกติจะใช้เวลาประมาณ 3-5 วันทำการ หน้า Sale Page ก็พร้อมเปิดรับออเดอร์แล้วครับ",
      },
    ],
    priority: 1,
    isPopular: true,
  },

  // --- [02. CORPORATE: ระบบเว็บไซต์องค์กร] ---
  {
    id: "AEM-SVC-CP-03",
    title: "Website Corporate เว็บไซต์บริษัทที่เน้นความน่าเชื่อถือ",
    description: "สร้างความประทับใจแรกเห็นให้ธุรกิจของคุณ ด้วยเว็บไซต์มาตรฐานสากลที่ดูเป็นมืออาชีพ",
    image: "/images/service/preview.webp",
    price: "9,900",
    currency: "THB",
    priceValue: 9900,
    unit: "โปรเจกต์",
    category: "business",
    templateSlug: "corporate",
    clientTrust: "ได้รับความไว้วางใจจากธุรกิจและองค์กรระดับมืออาชีพ",
    benefits: [
      "ทำให้ภาพลักษณ์บริษัทดูน่าเชื่อถือและดูเป็นมืออาชีพในสายตาคู่ค้า",
      "วางรากฐานระบบให้คนหาธุรกิจคุณเจอใน Google ได้ง่ายในระยะยาว",
    ],
    coreFeatures: [
      {
        title: "Brand Identity",
        description: "งานดีไซน์ที่สะท้อนเอกลักษณ์และความน่าเชื่อถือของธุรกิจคุณ",
        icon: "Shield",
      },
      {
        title: "SEO Infrastructure",
        description: "เตรียมระบบหลังบ้านให้พร้อมสำหรับการติดหน้าแรก Google",
        icon: "Search",
      },
    ],
    faqs: [
      {
        question: "หลังจากทำเว็บเสร็จแล้ว มีคนดูแลไหม?",
        answer: "มีครับ เราดูแลเรื่องความเสถียรของระบบและคอยซัพพอร์ตช่วยเหลือคุณตลอดครับ",
      },
    ],
    priority: 3,
    isFeatured: true,
  },

  // --- [03. CATALOG: ระบบจัดการข้อมูลและแค็ตตาล็อก] ---
  {
    id: "AEM-SVC-EC-05",
    title: "Digital Catalog ระบบโชว์สินค้าและแค็ตตาล็อกออนไลน์",
    description: "จัดระเบียบสินค้าให้เป็นหมวดหมู่ ค้นหาง่าย และโชว์สินค้าของคุณให้น่าสนใจกว่าเดิม",
    image: "/images/service/preview.webp",
    price: "15,900",
    currency: "THB",
    priceValue: 15900,
    unit: "เริ่มต้น",
    category: "ecommerce",
    templateSlug: "catalog",
    benefits: [
      "ช่วยให้ลูกค้าเลือกดูสินค้าได้สะดวก แยกหมวดหมู่ชัดเจน ค้นหาอะไรก็เจอ",
      "คุณสามารถเพิ่มรูปภาพและใส่รายละเอียดสินค้าได้เอง ไม่จำกัดจำนวน",
    ],
    coreFeatures: [
      {
        title: "Smart Gallery",
        description: "โชว์ภาพสินค้าได้สวยงาม ชัดเจน และโหลดไว",
        icon: "Image",
      },
      {
        title: "Data Management",
        description: "ระบบจัดการสินค้าที่ใช้งานง่าย คุณก็อัปเดตเองได้",
        icon: "Database",
      },
    ],
    faqs: [
      {
        question: "ถ้ามีสินค้าเยอะมาก ระบบจะรองรับไหวไหม?",
        answer:
          "ไหวแน่นอนครับ ระบบถูกออกแบบมาให้จัดการข้อมูลจำนวนมากได้สบาย ๆ โดยไม่มีค่าบริการรายเดือนเพิ่มครับ",
      },
    ],
    priority: 6,
  },

  // --- [04. LOCAL: ความเชี่ยวชาญเฉพาะพื้นที่] ---
  {
    id: "AEM-SVC-LS-10",
    title: "Local SEO Service ระบบดึงลูกค้าในพื้นที่ (ปักหมุดธุรกิจ)",
    description: "ทำให้ลูกค้าในละแวกใกล้เคียงหาธุรกิจคุณเจอเป็นเจ้าแรกบน Google Maps",
    image: "/images/service/preview.webp",
    price: "6,900",
    currency: "THB",
    priceValue: 6900,
    unit: "พื้นที่",
    category: "business",
    templateSlug: "local",
    benefits: [
      "ดึงดูดลูกค้าที่อยู่ใกล้คุณ ซึ่งพร้อมจะเข้ามาใช้บริการได้ทันที",
      "เพิ่มโอกาสให้คนตัดสินใจเลือกคุณด้วยรีวิวและพิกัดที่ถูกต้อง",
    ],
    coreFeatures: [
      {
        title: "Area Targeting",
        description: "ใช้คำค้นหาที่คนในพื้นที่นิยมใช้จริง ๆ เพื่อให้คุณติดอันดับ",
        icon: "MapPin",
      },
      {
        title: "Google My Business",
        description: "ดูแลและปรับแต่งข้อมูลธุรกิจบนแผนที่ให้โดดเด่น",
        icon: "Map",
      },
    ],
    faqs: [
      {
        question: "ทำแล้วจะช่วยให้ยอดขายเพิ่มขึ้นจริงไหม?",
        answer:
          "ช่วยได้มากครับ เพราะเราทำให้คนที่กำลังต้องการบริการในพื้นที่นั้น ๆ มองเห็นคุณเป็นลำดับแรก",
      },
    ],
    priority: 10,
  },

  // --- [05. BIO: ประวัติและความเชี่ยวชาญส่วนบุคคล] ---
  {
    id: "AEM-SVC-PB-14",
    title: "Personal Portfolio เว็บโปรไฟล์และรวบรวมผลงาน",
    description: "สร้างตัวตนให้น่าเชื่อถือ และรวบรวมผลงานของคุณไว้ในที่เดียวแบบมืออาชีพ",
    image: "/images/service/preview.webp",
    price: "4,900",
    currency: "THB",
    priceValue: 4900,
    unit: "โปรเจกต์",
    category: "personal",
    templateSlug: "bio",
    benefits: [
      "สร้างความประทับใจให้ผู้ว่าจ้างหรือพาร์ทเนอร์ตั้งแต่ครั้งแรกที่เห็น",
      "รวมช่องทางติดต่อและผลงานทุกอย่างไว้ในลิงก์เดียว แชร์ง่ายและดูดี",
    ],
    coreFeatures: [
      {
        title: "Minimalist Design",
        description: "เน้นดีไซน์ที่ดูสะอาดตาแต่ทรงพลัง โชว์ตัวตนของคุณได้ชัดเจน",
        icon: "User",
      },
      {
        title: "Link in Bio",
        description: "ปุ่มรวมลิงก์โซเชียลและช่องทางติดต่อครบจบในที่เดียว",
        icon: "Link",
      },
    ],
    faqs: [
      {
        question: "ถ้ามีผลงานใหม่ อยากเพิ่มเองทำได้ไหม?",
        answer: "ทำได้ง่ายมากครับ เรามีระบบหลังบ้านที่คุณสามารถอัปเดตข้อมูลเองได้ตลอดเวลา",
      },
    ],
    priority: 15,
  },
];

/**
 * @const FEATURED_SERVICES
 * @description รายการบริการยอดนิยม (Featured/Popular)
 */
export const FEATURED_SERVICES: readonly TemplateMasterData[] = [...MASTER_REGISTRY]
  .filter((svc) => svc.isFeatured || svc.isPopular)
  .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
