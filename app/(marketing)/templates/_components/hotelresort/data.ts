/** @format */
import { HotelData } from "./schema"

export const hotelResortData: HotelData = {
  // --- 1. ข้อมูล SEO เชิงเทคนิค (เน้นชื่อแบรนด์และคีย์เวิร์ดตลาดโรงแรม) ---
  seo: {
    title:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน Hotel & Resort | โครงสร้างเว็บโรงแรมโหลดไว โดย AEMDEVWEB",
    description:
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน สำหรับธุรกิจที่พักที่ต้องการผลลัพธ์ Technical SEO สูงสุด ออกแบบโครงสร้างโดย นายเอ็มซ่ามากส์ เพื่อให้เว็บของคุณโหลดไวและติดอันดับการค้นหาได้จริง",
    keywords: [
      "เทมเพลตสำเร็จรูป พร้อมใช้งาน",
      "รับทำเว็บโรงแรม",
      "AEMDEVWEB",
      "นายเอ็มซ่ามากส์",
      "เว็บรีสอร์ทโหลดไว",
      "Hotel Website Structure",
    ],
    ogImage: "/images/templates/hotel-og.webp",
  },

  // --- 2. ส่วนนำทางและระบบจอง ---
  navigation: {
    logo: "GRAND.RESORT",
    links: [
      { label: "ห้องพักและราคา", href: "#rooms" },
      { label: "สิ่งอำนวยความสะดวก", href: "#amenities" },
      { label: "ติดต่อและแผนที่", href: "#location" },
    ],
    bookingCta: "ตรวจสอบห้องว่างและจอง",
  },

  // --- 3. ส่วนหัว (Hero) - เน้นความพรีเมียมและความเร็ว ---
  hero: {
    title: "สัมผัสประสบการณ์การพักผ่อนที่เหนือระดับ",
    description:
      "นี่คือเทมเพลตสำเร็จรูป พร้อมใช้งาน ที่ไม่ได้มีดีแค่ความสวยงาม แต่ผ่านการรีดประสิทธิภาพความเร็วในระดับสูงสุด เพื่อให้ลูกค้าของคุณเข้าถึงข้อมูลที่พักได้ทันทีโดยไม่ต้องรอ",
    bgImage: "/images/templates/hotel-hero.webp",
  },

  // --- 4. ข้อมูลสถิติเพื่อสร้างความเชื่อมั่น (Trust Indicators) ---
  stats: [
    { label: "คะแนนรีวิวความพึงพอใจ", value: "4.9/5.0" },
    { label: "ระยะทางจากสนามบิน", value: "15 นาที" },
    { label: "การบริการระดับพรีเมียม", value: "24 ชั่วโมง" },
  ],

  // --- 5. รายการห้องพัก (Rooms & Suites) ---
  rooms: [
    {
      id: "1",
      name: "Deluxe Ocean Front",
      price: "3,500.-",
      image: "/images/showcase/placeholder.webp",
      features: [
        "ฟรีอาหารเช้านานาชาติ",
        "ระเบียงชมวิวทะเลส่วนตัว",
        "อ่างอาบน้ำขนาดใหญ่",
      ],
    },
    {
      id: "2",
      name: "Private Pool Villa Suite",
      price: "7,900.-",
      image: "/images/showcase/placeholder.webp",
      features: [
        "สระว่ายน้ำส่วนตัวระบบเกลือ",
        "มินิบาร์พรีเมียม",
        "บริการ Butler ส่วนตัว 24 ชม.",
      ],
    },
  ],

  // --- 6. สิ่งอำนวยความสะดวก (Amenities) ---
  amenities: {
    title: "สิ่งอำนวยความสะดวกระดับ 5 ดาว",
    items: [
      { iconName: "Waves", label: "สระว่ายน้ำกลางแจ้ง" },
      { iconName: "Coffee", label: "เลานจ์และคาเฟ่" },
      { iconName: "Utensils", label: "ห้องอาหารพรีเมียม" },
      { iconName: "Wifi", label: "High-speed Wi-Fi" },
    ],
  },

  // --- 7. ข้อมูลติดต่อและตำแหน่งที่ตั้ง (Footer) ---
  footer: {
    address:
      "เลขที่ 888 ถนนเลียบชายหาด ตำบลหนองปรือ อำเภอบางละมุง จังหวัดชลบุรี 20150",
    contact: {
      phone: "038-XXX-XXXX",
      line: "@GRANDRESORT",
      email: "reservation@grandresort.com",
    },
    mapsUrl: "https://maps.google.com", // แนะนำให้ใช้ลิงก์แชร์จาก Google Maps จริง
  },
}
