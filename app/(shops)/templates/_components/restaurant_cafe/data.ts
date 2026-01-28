/** @format */

import { RestaurantCafeData } from "./schema"

/**
 * restaurantCafeData - ข้อมูลพิกัดระบบเว็บร้านอาหารและคาเฟ่ (Taste & Tales Edition)
 * แนวคิด: เน้นความชัดเจนของเมนู วางพิกัดรูปภาพกระตุ้นความต้องการ และระบบงานที่โหลดไวระดับปีศาจ
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const restaurantCafeData: RestaurantCafeData = {
  seo: {
    title:
      "TASTE & TALES | คาเฟ่พิกัดลับ อาหารอร่อย วางระบบเว็บโหลดไว | AEMDEVWEB",
    description:
      "สัมผัสรสชาติกาแฟคัดพิเศษและเบเกอรี่อบใหม่ทุกวัน ในพิกัดที่ออกแบบมาเพื่อคนรักความเนี้ยบ วางโครงสร้างระบบหน้าเว็บให้โหลดไวระดับวินาที",
    keywords: [
      "ร้านกาแฟกรุงเทพ",
      "คาเฟ่สุขุมวิท",
      "เมนูอาหารออนไลน์",
      "จองโต๊ะร้านอาหาร",
      "นายเอ็มซ่ามากส์",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "TASTE.CAFE",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "พิกัดเมนูแนะนำ", href: "#menu" },
      { label: "พิกัดร้าน", href: "#contact" },
    ],
    cta: "จองพิกัดโต๊ะด่วน",
  },
  hero: {
    title: "รสชาติที่คุณหลงรัก",
    highlight: "ในพิกัดที่เนี้ยบที่สุด",
    description:
      "ไม่ใช่แค่คาเฟ่ แต่คือพิกัดพักผ่อนที่รวมความเนี้ยบไว้ในแก้วเดียว เราวางระบบการดูแลทุกรายละเอียดตั้งแต่เมล็ดกาแฟไปจนถึงการจัดวางเมนูเพื่อคุณครับ",
    image: "/images/templates/project-01.webp",
  },
  menu: {
    title: "พิกัดเมนูพิเศษของเรา",
    categories: [
      {
        name: "Coffee & Drinks",
        items: [
          {
            name: "Dirty Specialist",
            price: "120.-",
            desc: "กาแฟนมวางระบบแยกชั้น เย็นจัด หอมละมุน",
            image: "/images/templates/project-01.webp",
            isRecommended: true,
          },
          {
            name: "AEM Black Brew",
            price: "145.-",
            desc: "กาแฟสกัดเย็น วางพิกัดความสดชื่นที่ลงตัว",
            image: "/images/templates/project-01.webp",
          },
        ],
      },
      {
        name: "Artisan Bakery",
        items: [
          {
            name: "Emerald Croissant",
            price: "95.-",
            desc: "ครัวซองต์เนยแท้ วางโครงสร้างกรอบนอกนุ่มใน",
            image: "/images/templates/project-01.webp",
            isRecommended: true,
          },
        ],
      },
    ],
  },
  contact: {
    title: "แวะมาหาเราได้เลย",
    address: "99/1 ถนนสุขุมวิท แขวงคลองเตย กรุงเทพมหานคร",
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
