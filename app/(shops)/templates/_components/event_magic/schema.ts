/** @format */

import { SEOContract } from "../../_contracts/seo";

/**
 * EventMagicData - โครงสร้างข้อมูลสำหรับชุดเว็บงานอีเวนต์และงานแต่ง
 * แนวคิด: สวยสะกดตา โหลดไวระดับปีศาจ เพื่อบันทึกช่วงเวลาที่สำคัญที่สุด
 * มาตรฐานงาน: Next.js 16 & High-Speed Performance
 */
export interface EventMagicData extends SEOContract {
  /** ส่วนเมนูและการนำทาง: ออกแบบให้เรียบง่ายแต่เข้าถึงข้อมูลส่วนสำคัญได้ทันที */
  navigation: {
    /** ชื่อแบรนด์หรือชื่อเจ้าของงานที่แสดงบนมุมเว็บ */
    logo: string;
    /** ปุ่มดำเนินการหลัก เช่น 'จองคิว' หรือ 'ลงทะเบียน' */
    cta: string;
  };

  /** ส่วนหัวเว็บไซต์ (Hero): พื้นที่หยุดสายตาแขกผู้มีเกียรติด้วยข้อมูลที่ชัดเจน */
  hero: {
    title: string;
    /** คำสั้นๆ ที่ต้องการเน้นให้เด่นเป็นพิเศษ */
    highlight: string;
    description: string;
    /** วันที่จัดงาน (แสดงผลแบบเข้าใจง่าย) */
    date: string;
    /** สถานที่จัดงาน */
    location: string;
  };

  /** ส่วนภาพความประทับใจ (Gallery): แสดงผลรูปภาพแบบโหลดไวไม่หนักเครื่อง */
  gallery: {
    title: string;
    /** รายการรูปภาพที่ต้องการโชว์ */
    images: {
      url: string;
      alt: string;
    }[];
  };

  /** ส่วนลำดับเหตุการณ์ (Timeline): อธิบายขั้นตอนหรือกำหนดการให้แขกเข้าใจง่าย */
  details: {
    title: string;
    /** รายการกิจกรรมตามเวลา */
    items: {
      /** เวลาที่เริ่มกิจกรรม */
      time: string;
      /** รายละเอียดกิจกรรม */
      activity: string;
    }[];
  };

  /** ส่วนปิดท้าย (Footer): ข้อมูลขอบคุณหรือการติดต่อเพิ่มเติม */
  footer?: {
    thankYouMessage?: string;
    contactLine?: string;
  };
}
