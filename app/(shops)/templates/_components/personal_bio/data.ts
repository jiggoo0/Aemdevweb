/** @format */

import { PersonalBioData } from "./schema"

/**
 * personalBioData - ข้อมูลพิกัดหน้าประวัติส่วนตัวดิจิทัล (Personal Bio Edition)
 * แนวคิด: เรียบง่าย ทรงพลัง และสะท้อนพิกัดตัวตนได้ชัดเจนในหน้าเดียว
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const personalBioData: PersonalBioData = {
  seo: {
    title:
      "โปรไฟล์ส่วนตัวพิกัดแรง | วางระบบหน้าบ้านออนไลน์ระดับ Specialist | AEMDEVWEB",
    description:
      "รวมพิกัดช่องทางติดต่อและรายการระบบงานที่ผ่านมาไว้ในลิงก์เดียว โหลดไวและวางโครงสร้างมาอย่างดีบน Next.js 16",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Personal Bio",
      "รับทำเว็บไซต์",
      "Next.js Specialist",
      "วางระบบหน้าเว็บ",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  profile: {
    name: "ALONGKORL YOMKERD",
    role: "Full-Stack Specialist & Web Developer",
    avatar: "/images/hero/aemdevweb-hero.webp",
    bio: "ผมเน้นการสร้างหน้าพิกัดออนไลน์ที่โหลดไวระดับวินาที และวางโครงสร้างระบบงานให้ Google จัดลำดับได้ง่าย เพื่อให้พิกัดธุรกิจของคุณเติบโตได้จริงในปี 2026 ครับ",
  },
  socials: [
    {
      platform: "Line",
      label: "คุยพิกัดงานกับผมทางไลน์",
      href: "https://line.me/ti/p/@127cnthn",
      icon: "MessageCircle",
    },
    {
      platform: "Facebook",
      label: "ติดตามพิกัดงานทางเพจ",
      href: "https://facebook.com/aemdevweb",
      icon: "Facebook",
    },
    {
      platform: "GitHub",
      label: "ตรวจสอบพิกัดโค้ดที่ผมเขียน",
      href: "https://github.com/aemdevweb",
      icon: "Github",
    },
  ],
  stats: [
    { label: "พิกัดประสบการณ์", value: "8+ ปี" },
    { label: "ปิดพิกัดระบบงาน", value: "150+" },
    { label: "ความเร็วโหลดระบบ", value: "0.5s" },
  ],
  cta: {
    text: "จองพิกัดจ้างงานโปรเจกต์ใหม่",
    href: "https://line.me/ti/p/@127cnthn",
  },
}
