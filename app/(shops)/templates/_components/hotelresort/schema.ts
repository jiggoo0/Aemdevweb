/** @format */
import { SEOContract } from "../../_contracts/seo";

/**
 * HotelData Interface
 * กำหนดโครงสร้างข้อมูลทั้งหมดสำหรับเทมเพลตธุรกิจโรงแรมและที่พัก
 * ออกแบบมาเพื่อรองรับการดึงข้อมูลแบบเฉพาะทางและ Technical SEO
 */
export interface HotelData extends SEOContract {
  // 1. ระบบนำทางและส่วนหัวของเว็บ
  navigation: {
    logo: string;
    links: {
      label: string;
      href: string;
    }[];
    bookingCta: string; // ปุ่มปิดการขายหลักบน Navbar
  };

  // 2. ส่วนนำเสนอภาพลักษณ์ที่พัก (Hero)
  hero: {
    title: string;
    description: string;
    bgImage: string;
  };

  // 3. ส่วนข้อมูลเชิงตัวเลขเพื่อสร้างความเชื่อมั่น (Stats)
  stats: {
    label: string;
    value: string;
  }[];

  // 4. ส่วนข้อมูลห้องพักและราคา
  rooms: {
    id: string;
    name: string;
    price: string;
    image: string;
    features: string[]; // รายละเอียดสั้นๆ เช่น ฟรีอาหารเช้า, Wifi
  }[];

  // 5. ส่วนสิ่งอำนวยความสะดวกในโครงการ
  amenities: {
    title: string;
    items: {
      iconName: string; // ชื่อไอคอนจาก Lucide เช่น 'Waves', 'Coffee'
      label: string;
    }[];
  };

  // 6. ส่วนข้อมูลติดต่อและตำแหน่งที่ตั้ง (Footer)
  footer: {
    address: string;
    contact: {
      phone: string;
      line: string;
      email: string;
    };
    mapsUrl: string; // ลิงก์แผนที่จริงจาก Google Maps
  };
}
