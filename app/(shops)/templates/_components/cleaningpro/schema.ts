/** @format */
import { SEOContract } from "../../_contracts/seo";

/**
 * CleaningServiceData - โครงสร้างข้อมูลสำหรับแบบเว็บไซต์งานบริการความสะอาด
 * แนวทาง: เน้นความชัดเจนของข้อมูลเพื่อการอ่านที่ง่ายและรองรับ SEO 100%
 * มาตรฐาน: Next.js 16 & Technical Specialist Edition
 */
export interface CleaningServiceData extends SEOContract {
  /** ส่วนแถบเมนูและการนำทาง */
  navigation: {
    links: { label: string; href: string }[];
    cta: string;
  };

  /** ส่วนหัวเว็บไซต์ที่เน้นการหยุดสายตา */
  hero: {
    title: string;
    description: string;
    cta: string;
    image: string;
  };

  /** ส่วนจุดเด่นหรือเนื้อหาที่ต้องการเน้นเป็นพิเศษ */
  highlights: {
    tag: string;
    title: string;
    description: string;
  };

  /** รายการบริการและรายละเอียดราคา */
  services: {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  }[];

  /** ส่วนข้อมูลที่สร้างความมั่นใจให้ลูกค้า */
  trustPoints: {
    title: string;
    desc: string;
  }[];

  /** ส่วนท้ายเว็บไซต์และข้อมูลการติดต่อ */
  footer: {
    companyName: string;
    about: string;
    contact: {
      phone: string;
      line: string;
      address: string;
    };
  };
}
