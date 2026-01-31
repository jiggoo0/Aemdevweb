/** @format */

import { SEOContract } from "../../_contracts/seo";

/**
 * RestaurantCafeData - โครงสร้างข้อมูลสำหรับแบบเว็บไซต์ร้านอาหารและคาเฟ่
 * แนวคิด: เน้นภาพลักษณ์ที่น่าทาน เข้าถึงเมนูง่าย และโหลดไวระดับเสี้ยววินาที
 * มาตรฐาน: Next.js 16 & High-Conversion Structure
 */
export interface RestaurantCafeData extends SEOContract {
  /** ส่วนแถบเมนู: ออกแบบให้ลูกค้ากดจองหรือดูเมนูได้ทันที */
  navigation: {
    /** ชื่อร้านหรือโลโก้แบรนด์ */
    logo: string;
    /** รายการลิงก์ในหน้าเว็บ เช่น เมนู, บรรยากาศร้าน, ติดต่อเรา */
    links: { label: string; href: string }[];
    /** ปุ่มดำเนินการหลัก เช่น 'จองโต๊ะล่วงหน้า' หรือ 'สั่งอาหารออนไลน์' */
    cta: string;
  };

  /** ส่วนหัวเว็บไซต์ (Hero): พื้นที่โชว์เมนูเด็ดหรือบรรยากาศร้านที่หยุดสายตาลูกค้า */
  hero: {
    title: string;
    /** คำสั้นๆ ที่ต้องการเน้นให้โดดเด่น */
    highlight: string;
    description: string;
    /** รูปภาพพื้นหลังที่ต้องสวยและโหลดไว (แนะนำไฟล์ .webp) */
    image: string;
  };

  /** รายการเมนู: แยกตามหมวดหมู่เพื่อความสะดวกในการเลือกชม */
  menu: {
    title: string;
    /** รายการหมวดหมู่ เช่น เครื่องดื่ม, อาหารจานหลัก, ของหวาน */
    categories: {
      name: string;
      items: {
        name: string;
        price: string;
        desc: string;
        /** รูปภาพอาหารที่ช่วยกระตุ้นความหิว */
        image: string;
        /** เครื่องหมายแนะนำเมนูเด็ด (Signature) */
        isRecommended?: boolean;
      }[];
    }[];
  };

  /** ส่วนข้อมูลการติดต่อ: หัวใจสำคัญเพื่อให้ลูกค้ามาหาถูกจุด */
  contact: {
    title: string;
    /** ที่อยู่ร้านที่ชัดเจน */
    address: string;
    /** ช่วงเวลาเปิด-ปิด ของร้าน */
    hours: string;
    phone: string;
    /** ลิงก์แผนที่ Google Maps เพื่อให้นำทางได้ทันที */
    mapUrl: string;
    /** ช่องทางโซเชียลสำหรับการติดตามข่าวสาร (Line / Facebook / Instagram) */
    socials?: {
      line?: string;
      facebook?: string;
      instagram?: string;
    };
  };
}
