/** @format */

import { RestaurantCafeData } from "./schema"

/**
 * restaurantCafeData - ข้อมูลพิกัดระบบเว็บร้านอาหารและคาเฟ่ (Taste & Tales Edition)
 * -------------------------------------------------------------------------
 * แนวคิด: เน้นความชัดเจนของเมนู วางพิกัดรูปภาพกระตุ้นความต้องการ และระบบงานที่โหลดไวระดับวินาที
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const restaurantCafeData: RestaurantCafeData = {
  // [1. SEO STRATEGY]: พิกัดการค้นหาเพื่อดึงดูดกลุ่มเป้าหมาย
  seo: {
    title:
      "TASTE & TALES โดย นายเอ็มซ่ามากส์ | คาเฟ่พิกัดลับ อาหารอร่อย วางระบบเว็บโหลดไว | AEMDEVWEB",
    description:
      "สัมผัสรสชาติกาแฟสเปเชียลตี้และเบเกอรี่อบใหม่โดย นายเอ็มซ่ามากส์ ในพิกัดที่ออกแบบมาเพื่อคนรักความเนี้ยบ วางโครงสร้างระบบหน้าเว็บให้โหลดไวระดับวินาทีเพื่อ SME 2026",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "ร้านกาแฟกรุงเทพ",
      "คาเฟ่สุขุมวิท",
      "เมนูอาหารออนไลน์โดยนายเอ็ม",
      "จองโต๊ะร้านอาหารพิกัดแรง",
      "AEMDEVWEB",
    ],
    ogImage: "/images/templates/project-01.webp",
  },

  // [2. NAVIGATION HUB]: ระบบนำทางพิกัดสำคัญ
  navigation: {
    logo: "AEM.TASTE-CAFE",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "พิกัดเมนูแนะนำ", href: "#menu" },
      { label: "พิกัดร้านและติดต่อ", href: "#contact" },
    ],
    cta: "จองพิกัดโต๊ะกับนายเอ็มซ่ามากส์",
  },

  // [3. HERO ENGINE]: ส่วนแสดงผลหลักกระตุ้นความต้องการ
  hero: {
    title: "รสชาติที่คุณหลงรัก",
    highlight: "ในพิกัดที่เนี้ยบที่สุดโดยนายเอ็ม",
    description:
      "ไม่ใช่แค่คาเฟ่ แต่คือพิกัดพักผ่อนที่ นายเอ็มซ่ามากส์ วางระบบความเนี้ยบไว้ในแก้วเดียว เราดูแลทุกรายละเอียดตั้งแต่เมล็ดกาแฟไปจนถึงสถาปัตยกรรมการจัดวางเมนูเพื่อคุณครับ",
    image: "/images/templates/project-01.webp",
  },

  // [4. MENU ARCHITECTURE]: รายการสินค้าที่ผ่านการจูนความน่าสนใจ
  menu: {
    title: "พิกัดเมนูพิเศษคัดสรรโดย นายเอ็มซ่ามากส์",
    categories: [
      {
        name: "Coffee & Drinks Specialist",
        items: [
          {
            name: "Dirty Specialist",
            price: "120.-",
            desc: "กาแฟนมที่ นายเอ็มซ่ามากส์ วางระบบแยกชั้น เย็นจัด หอมละมุนระดับพรีเมียม",
            image: "/images/templates/project-01.webp",
            isRecommended: true,
          },
          {
            name: "AEM Black Brew",
            price: "145.-",
            desc: "กาแฟสกัดเย็น วางพิกัดความสดชื่นที่ลงตัวในแบบฉบับ AEMDEVWEB",
            image: "/images/templates/project-01.webp",
          },
        ],
      },
      {
        name: "Artisan Bakery Protocol",
        items: [
          {
            name: "Emerald Croissant",
            price: "95.-",
            desc: "ครัวซองต์เนยแท้ วางโครงสร้างกรอบนอกนุ่มใน เนี้ยบทุกคำที่สัมผัส",
            image: "/images/templates/project-01.webp",
            isRecommended: true,
          },
        ],
      },
    ],
  },

  // [5. CONTACT NODE]: พิกัดตำแหน่งที่ตั้งและการติดต่อ
  contact: {
    title: "แวะมาเช็คพิกัดความอร่อยได้เลย",
    address:
      "99/1 ถนนสุขุมวิท แขวงคลองเตย กรุงเทพมหานคร (วางระบบโดย นายเอ็มซ่ามากส์)",
    hours: "พิกัดเวลาให้บริการทุกวัน: 08:00 - 18:00 น.",
    phone: "08x-xxx-xxxx",
    mapUrl: "https://maps.google.com",
    socials: {
      line: "@127cnthn",
      facebook: "taste.cafe.official",
      instagram: "taste.cafe.vibes",
    },
  },
}
