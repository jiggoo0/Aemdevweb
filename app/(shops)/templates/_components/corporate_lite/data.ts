/** @format */

import { CorporateLiteData } from "./schema"

/**
 * corporateLiteData - ข้อมูลระบบเว็บธุรกิจรุ่นเริ่มต้น (Starter Pro Edition)
 * แนวคิด: เน้นความน่าเชื่อถือที่มาพร้อมความแรง โหลดไวระดับปีศาจเพื่อ SME ยุค 2026
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const corporateLiteData: CorporateLiteData = {
  seo: {
    title:
      "ชุดเว็บธุรกิจรุ่นเริ่มต้น วางโครงสร้างแรง โหลดไวติดหน้าแรก | AEMDEVWEB",
    description:
      "เปลี่ยนหน้าเว็บให้เป็นระบบช่วยหาลูกค้า ด้วยชุดเว็บรุ่นเริ่มต้นที่จูนความแรงมาเพื่อ SME โดยเฉพาะ โหลดไว สวยเนี้ยบ และวางพิกัดให้หาเจอง่ายบน Google",
    keywords: [
      "ทำเว็บธุรกิจ",
      "SME Website",
      "Next.js 16",
      "เว็บโหลดไว",
      "รับทำเว็บไซต์",
      "นายเอ็มซ่ามากส์",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "BIZ.LITE",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "รายการบริการ", href: "#services" },
      { label: "เริ่มพิกัดงาน", href: "#contact" },
    ],
    cta: "คุยงานกับนายเอ็ม",
  },
  hero: {
    title: "เปลี่ยนเว็บทั่วไป ให้เป็นระบบสร้างโอกาสให้ธุรกิจ",
    highlight: "ซิ่ง แรง แซงทุกพิกัดคู่แข่ง",
    description:
      "เราไม่ได้แค่ทำเว็บสวย แต่เราวางระบบที่ทำงานแทนคุณตลอด 24 ชม. ด้วยเทคโนโลยี Next.js 16 ที่โหลดไวระดับปีศาจ เพื่อให้ลูกค้ามั่นใจในแบรนด์ของคุณตั้งแต่วินาทีแรกที่เข้าชม",
    image: "/images/templates/project-01.webp",
  },
  services: {
    title: "ดูแลพิกัดธุรกิจคุณครบวงจร",
    items: [
      {
        title: "วางพิกัดงานขาย",
        desc: "เจาะโจทย์ธุรกิจให้ตรงจุด เปลี่ยนคนดูให้เป็นลูกค้าที่พึ่งพาได้จริง",
        icon: "Users",
      },
      {
        title: "ระบบจัดการหลังบ้าน",
        desc: "จัดการข้อมูลระบบงานง่าย ทำงานต่อเนื่องไม่มีสะดุด",
        icon: "Settings",
      },
      {
        title: "วางโครงสร้างอันดับ Google",
        desc: "โครงสร้างแบบ SEO-First ให้พิกัดธุรกิจคุณถูกหาเจอได้ง่ายที่สุด",
        icon: "TrendingUp",
      },
    ],
  },
  contact: {
    title: "พร้อมเริ่มสร้างความสำเร็จหรือยัง?",
    email: "me@aemdevweb.com",
    phone: "0xx-xxx-xxxx",
    address: "กรุงเทพมหานคร, ประเทศไทย (วางระบบออนไลน์ 24 ชม.)",
    socials: {
      line: "https://line.me/ti/p/@127cnthn",
      facebook: "https://facebook.com/aemdevweb",
    },
  },
}
