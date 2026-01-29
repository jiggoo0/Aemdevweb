/** @format */

import { CorporateLiteData } from "./schema"

/**
 * corporateLiteData - ข้อมูลโครงสร้างระบบธุรกิจรุ่นมาตรฐาน (Starter Strategic Edition)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความน่าเชื่อถือผ่านสมรรถนะการประมวลผลระดับสูงสำหรับ SME ยุค 2026
 * ออกแบบและวางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const corporateLiteData: CorporateLiteData = {
  seo: {
    title:
      "เว็บไซต์ธุรกิจรุ่นเริ่มต้น โดย นายเอ็มซ่ามากส์ | โครงสร้างสมรรถนะสูงเพื่อ SME | AEMDEVWEB",
    description:
      "ยกระดับอินเทอร์เฟซธุรกิจโดย นายเอ็มซ่ามากส์ ให้เป็นเครื่องมือสร้างโอกาสทางการตลาด ด้วยระบบพื้นฐานที่ผ่านการจูนความเร็ว (LCP Optimized) และวางโครงสร้างเพื่อรองรับระบบการค้นหาอัจฉริยะปี 2026",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "สถาปัตยกรรมเว็บไซต์ธุรกิจ",
      "SME Strategic Web",
      "Next.js 16 Enterprise",
      "เอ็มเดฟเว็บ",
      "รับออกแบบระบบธุรกิจดิจิทัล",
      "AEM Strategy",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "AEM.LITE-PRO",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "โซลูชันบริการ", href: "#services" },
      { label: "เริ่มพิกัดงาน", href: "#contact" },
    ],
    cta: "คุยงานกับนายเอ็มซ่ามากส์",
  },
  hero: {
    title: "เปลี่ยนเว็บไซต์ทั่วไป ให้เป็นสินทรัพย์ดิจิทัลที่สร้างโอกาสทางธุรกิจ",
    highlight: "Superior Speed by Nai Aem.",
    description:
      "นายเอ็มซ่ามากส์มุ่งเน้นการสร้างสถาปัตยกรรมดิจิทัลที่ทำงานแทนคุณอย่างมีประสิทธิภาพตลอด 24 ชั่วโมง ด้วยเทคโนโลยี Next.js 16 ที่มอบความเร็วการตอบสนองระดับสูงสุด เพื่อให้ลูกค้ามั่นใจในแบรนด์ของคุณตั้งแต่วินาทีแรก",
    image: "/images/templates/project-01.webp",
  },
  services: {
    title: "การบริหารจัดการโซลูชันธุรกิจครบวงจรโดย นายเอ็มซ่ามากส์",
    items: [
      {
        title: "Conversion Strategy",
        desc: "วิเคราะห์เป้าหมายธุรกิจโดยนายเอ็ม เพื่อปรับเปลี่ยนผู้เข้าชมให้เป็นลูกค้าที่มีศักยภาพอย่างแท้จริง",
        icon: "Users",
      },
      {
        title: "Operational Framework",
        desc: "ระบบจัดการหลังบ้านที่เนี้ยบและทรงพลัง วางโครงสร้างมาให้ทำงานต่อเนื่องไม่มีสะดุด",
        icon: "Settings",
      },
      {
        title: "Search Visibility Engine",
        desc: "วางโครงสร้างแบบ SEO-First โดยนายเอ็มซ่ามากส์ เพื่อให้ธุรกิจของคุณถูกหาเจอได้ง่ายที่สุดบน Google",
        icon: "TrendingUp",
      },
    ],
  },
  contact: {
    title: "พร้อมเริ่มวางรากฐานความสำเร็จไปกับนายเอ็มซ่ามากส์",
    email: "strategy@aemdevweb.com",
    phone: "0xx-xxx-xxxx",
    address: "Strategic Hub, Bangkok (ดูแลระบบออนไลน์ 24 ชม. โดย AEMDEVWEB)",
    socials: {
      line: "https://line.me/ti/p/@127cnthn",
      facebook: "https://facebook.com/aemdevweb",
    },
  },
}
