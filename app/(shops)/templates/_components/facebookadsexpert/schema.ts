/** @format */

import { SEOContract } from "../../_contracts/seo";

/**
 * FacebookAdsData - พิมพ์เขียวพิกัดข้อมูล (The Architecture Blueprint)
 * -------------------------------------------------------------------------
 * ออกแบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 * วัตถุประสงค์: ควบคุมพิกัดข้อมูลให้แม่นยำ 100% ป้องกันระบบ Error (Type Safety)
 */
export interface FacebookAdsData extends SEOContract {
  /** 1. พิกัดนำทาง (Navigation) */
  navigation: {
    logo: string;
    cta: string;
  };

  /** 2. พิกัดหัวใจสำคัญ (Hero Node) - จุดหยุดนิ้วลูกค้า */
  hero: {
    badge: string;
    title: string;
    highlight: string; // [KEY]: พิกัดคำเน้นสี emerald
    description: string;
    cta: string; // [KEY]: พิกัดข้อความบนปุ่มหลัก
  };

  /** 3. พิกัดดัชนีชี้วัด (Stats) - ขยี้ตัวเลขพิสูจน์ผลลัพธ์ */
  stats: {
    label: string; // เช่น "Average ROAS"
    value: string; // เช่น "8.5x"
    subValue: string; // เช่น "วิเคราะห์จากพอร์ตจริง"
  }[];

  /** 4. พิกัดรายการจุดเด่น (Highlights) - ขยี้จุดแข็งระบบ */
  highlights: {
    items: {
      icon: string; // ชื่อ Icon จาก Lucide-react (ส่งเป็น String ไป Map)
      title: string;
      desc: string;
    }[];
  };

  /** 5. พิกัดโปรโตคอลการทำงาน (Strategy) - ลำดับขั้นตอนขั้นสูง */
  strategy: {
    step: string; // เช่น "01", "02"
    title: string;
    desc: string;
  }[];

  /** 6. พิกัดข้อมูลการติดต่อ (Strategic Footer) */
  footer?: {
    companyName: string;
    contactLine: string; // พิกัด ID Line หรือ Link ติดต่อ
    phone?: string;
    copy: string;
    link: string; // URL สำหรับกดแล้วเด้งไปที่ปิดการขาย
  };
}
