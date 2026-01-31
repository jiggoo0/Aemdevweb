/** @format */

import { PersonalBioData } from "./schema";

/**
 * personalBioData - ข้อมูลพิกัดหน้าประวัติส่วนตัวดิจิทัล (Personal Bio Edition)
 * -------------------------------------------------------------------------
 * แนวคิด: เรียบง่าย ทรงพลัง และสะท้อนพิกัดตัวตนได้ชัดเจนที่สุดในหน้าเดียว
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const personalBioData: PersonalBioData = {
  // [1. SEO STRATEGY]: พิกัดตัวตนบนระนาบการค้นหา
  seo: {
    title:
      "โปรไฟล์ส่วนตัวพิกัดแรง โดย นายเอ็มซ่ามากส์ | วางระบบหน้าเว็บระดับ Specialist | AEMDEVWEB",
    description:
      "รวมพิกัดช่องทางติดต่อและรายการระบบงานโดย นายเอ็มซ่ามากส์ ไว้ในลิงก์เดียว โหลดไวและวางโครงสร้างมาอย่างเนี้ยบบน Next.js 16",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Personal Bio Specialist",
      "รับทำเว็บไซต์พิกัดแรง",
      "Next.js Specialist",
      "เอ็มเดฟเว็บ",
    ],
    ogImage: "/images/templates/project-01.webp",
  },

  // [2. PROFILE ENGINE]: อัตลักษณ์และความเชี่ยวชาญ
  profile: {
    name: "ALONGKORL YOMKERD",
    role: "Full-Stack Specialist & Web Developer",
    avatar: "/images/hero/aemdevweb-hero.webp",
    bio: "นายเอ็มซ่ามากส์เน้นการสร้างหน้าพิกัดออนไลน์ที่โหลดไวระดับวินาที และวางโครงสร้างระบบงานให้ Google จัดลำดับได้ง่าย เพื่อให้พิกัดธุรกิจของคุณเติบโตได้จริงในปี 2026 ครับ",
  },

  // [3. CONNECTIVITY NODES]: ช่องทางการเชื่อมโยงพิกัด
  socials: [
    {
      platform: "Line",
      label: "คุยพิกัดงานกับนายเอ็มซ่ามากส์",
      href: "https://line.me/ti/p/@127cnthn",
      icon: "MessageCircle",
    },
    {
      platform: "Facebook",
      label: "ติดตามพิกัดงานทางเพจ AEMDEVWEB",
      href: "https://facebook.com/aemdevweb",
      icon: "Facebook",
    },
    {
      platform: "GitHub",
      label: "ตรวจสอบพิกัดโค้ดโดยนายเอ็มซ่ามากส์",
      href: "https://github.com/aemdevweb",
      icon: "Github",
    },
  ],

  // [4. PERFORMANCE STATS]: ดัชนีชี้วัดสมรรถนะส่วนบุคคล
  stats: [
    { label: "พิกัดประสบการณ์", value: "8+ ปี" },
    { label: "ปิดพิกัดระบบงาน", value: "150+" },
    { label: "ความเร็วโหลดระบบ", value: "0.5s" },
  ],

  // [5. CALL TO ACTION]: จุดเริ่มพิกัดความสำเร็จ
  cta: {
    text: "จองพิกัดจ้างงานโปรเจกต์ใหม่กับนายเอ็ม",
    href: "https://line.me/ti/p/@127cnthn",
  },
};
