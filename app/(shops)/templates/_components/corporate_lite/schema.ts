/** @format */

import { SEOContract } from "../../_contracts/seo";

/**
 * CorporateLiteData - โครงสร้างข้อมูลสำหรับแบบเว็บไซต์ธุรกิจรุ่นเริ่มต้น
 * แนวทาง: เน้นความเรียบง่าย แต่ดูแพงและน่าเชื่อถือ
 * มาตรฐาน: Next.js 16 & SEO-First Content
 */
export interface CorporateLiteData extends SEOContract {
  /** ส่วนแถบเมนูและการนำทาง */
  navigation: {
    logo: string;
    links: { label: string; href: string }[];
    /** ปุ่มสำคัญเพื่อให้ลูกค้าติดต่อได้ทันที */
    cta?: string;
  };

  /** ส่วนหัวเว็บไซต์ (Hero) ที่ใช้ดึงดูดความสนใจ */
  hero: {
    title: string;
    /** ข้อความเน้นย้ำสั้นๆ */
    highlight: string;
    description: string;
    image: string;
  };

  /** รายการบริการของธุรกิจ */
  services: {
    title: string;
    /** รายละเอียดของงานแต่ละด้าน */
    items: {
      title: string;
      desc: string;
      /** ชื่อไอคอนจาก lucide-react */
      icon: string;
    }[];
  };

  /** ส่วนข้อมูลการติดต่อ */
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
    /** ลิงก์โซเชียลพื้นฐาน */
    socials?: {
      line?: string;
      facebook?: string;
    };
  };
}
