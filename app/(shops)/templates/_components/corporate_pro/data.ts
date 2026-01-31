/** @format */

import { CorporateProData } from "./schema";

/**
 * corporateProData - ข้อมูลโครงสร้างระบบธุรกิจรุ่นพรีเมียม (Corporate Pro Strategic Edition)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างภาพลักษณ์ที่น่าเชื่อถือผ่านสถาปัตยกรรมดิจิทัลสมรรถนะสูง
 * ออกแบบและวางโครงสร้างระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const corporateProData: CorporateProData = {
  seo: {
    title:
      "Enterprise Strategic Website โดย นายเอ็มซ่ามากส์ | มาตรฐานระบบงานขั้นสูง | AEMDEVWEB",
    description:
      "ยกระดับอัตลักษณ์องค์กรโดย นายเอ็มซ่ามากส์ ด้วยสถาปัตยกรรมเว็บไซต์ที่ประณีตและเปี่ยมสมรรถนะ วางโครงสร้างระบบแบบ SEO-First เพื่อการเข้าถึงกลุ่มเป้าหมายที่แม่นยำที่สุดในปี 2026",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Enterprise Website Architecture",
      "Corporate Digital Solution",
      "Next.js 16 Specialist",
      "Strategic SEO Framework",
      "รับออกแบบระบบธุรกิจโดยนายเอ็ม",
      "AEM Strategic Design",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "AEM.STRATEGIC",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "โซลูชันระบบงาน", href: "#services" },
      { label: "กรณีศึกษาความสำเร็จ", href: "#showcase" },
      { label: "ปรึกษาโครงการ", href: "#contact" },
    ],
    cta: "คุยพิกัดงานกับนายเอ็มซ่ามากส์",
  },
  hero: {
    badge: "Enterprise Business Edition 2026 by AEM",
    title: "ปฏิรูปอัตลักษณ์ธุรกิจใหม่",
    highlight: "สู่ความเหนือระดับที่ยั่งยืน",
    description:
      "นายเอ็มซ่ามากส์มุ่งเน้นการสร้างสถาปัตยกรรมดิจิทัลที่เป็นมากกว่าแค่ความสวยงาม แต่คือระบบการสร้างโอกาสทางธุรกิจที่ทรงพลัง เพิ่มประสิทธิภาพการเข้าถึงข้อมูลด้วย LCP Optimization เพื่อประสบการณ์ที่ไร้รอยต่อ",
    primaryCTA: "ตรวจสอบโซลูชันระบบงาน",
    secondaryCTA: "รับคำปรึกษาจากนายเอ็ม",
  },
  stats: [
    { label: "LCP Performance", value: "0.4", suffix: "s" },
    { label: "SEO Integrity Score", value: "100", suffix: "%" },
    { label: "Infrastructure Uptime", value: "99.9", suffix: "%" },
  ],
  services: {
    title: "ยกระดับขีดความสามารถทางการแข่งขันด้วยระบบที่เหนือกว่า",
    subtitle:
      "นายเอ็มซ่ามากส์ไม่ได้แค่สร้างเว็บไซต์ แต่เราวางรากฐานทางดิจิทัลที่แข็งแกร่งเพื่อการเติบโตอย่างมั่นคงขององค์กรคุณ",
    items: [
      {
        title: "Strategic Consulting",
        desc: "วางแผนแม่บทโดยนายเอ็ม เพื่อการเข้าถึงกลุ่มเป้าหมายเชิงกลยุทธ์ และประสิทธิภาพการลงทุนสูงสุด",
        icon: "Target",
      },
      {
        title: "Performance Excellence",
        desc: "ระบบงานรองรับปริมาณการเข้าถึงพร้อมกัน (High Concurrency) ได้อย่างมีเสถียรภาพสไตล์ นายเอ็มซ่ามากส์",
        icon: "Zap",
      },
      {
        title: "Search Visibility Engine",
        desc: "วางโครงสร้างข้อมูลเชิงลึกเพื่อให้แบรนด์ของคุณโดดเด่นบนระบบการค้นหาสากลและ AI Search",
        icon: "Search",
      },
      {
        title: "Enterprise Security",
        desc: "การปกป้องข้อมูลและระบบงานด้วยมาตรฐานความปลอดภัยระดับสากลที่ นายเอ็มซ่ามากส์ วางระบบไว้",
        icon: "Lock",
      },
    ],
  },
  showcase: {
    title: "บันทึกความสำเร็จและกรณีศึกษา",
    description:
      "ส่วนหนึ่งขององค์กรชั้นนำที่ไว้วางใจให้ นายเอ็มซ่ามากส์ ดูแลโครงสร้างพื้นฐานทางดิจิทัล",
    items: [
      {
        title: "Industrial Leader",
        category: "Manufacturing Strategy",
        image: "/images/templates/project-01.webp",
      },
      {
        title: "Global Logistics",
        category: "Service Solution",
        image: "/images/templates/project-01.webp",
      },
    ],
  },
};
