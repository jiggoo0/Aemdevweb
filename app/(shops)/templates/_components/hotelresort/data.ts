/** @format */
import { HotelData } from "./schema"

/**
 * hotelResortData - โครงสร้างสถาปัตยกรรมดิจิทัลสำหรับธุรกิจโรงแรมและที่พักระดับพรีเมียม
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างประสบการณ์การเข้าพักเริ่มต้นที่หน้าเว็บด้วยสมรรถนะระดับสูงสุด
 * ออกแบบและวางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const hotelResortData: HotelData = {
  // 1. กลยุทธ์การจัดการข้อมูล SEO (Technical SEO Strategy)
  seo: {
    title:
      "Strategic Hotel & Resort Interface โดย นายเอ็มซ่ามากส์ | สถาปัตยกรรมระดับพรีเมียม | AEMDEVWEB",
    description:
      "โซลูชันเว็บไซต์โรงแรมโดย นายเอ็มซ่ามากส์ สำหรับธุรกิจที่ต้องการดัชนีชี้วัด Technical SEO ระดับสูงสุด เพื่อเพิ่มประสิทธิภาพความเร็วการเข้าถึงและลำดับการค้นหาอย่างยั่งยืนในปี 2026",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Hospitality Digital Solution",
      "Enterprise Hotel Website",
      "Next.js 16 Specialist",
      "เอ็มเดฟเว็บ",
      "Direct Booking Architecture",
    ],
    ogImage: "/images/templates/hotel-og.webp",
  },

  // 2. ระบบการนำทางและจุดปฏิสัมพันธ์เชิงกลยุทธ์ (Navigation & Interaction)
  navigation: {
    logo: "AEM.GRAND-RESORT",
    links: [
      { label: "ห้องพักและข้อเสนอ", href: "#rooms" },
      { label: "มาตรฐานการบริการ", href: "#amenities" },
      { label: "พิกัดที่ตั้งและติดต่อ", href: "#location" },
    ],
    bookingCta: "เช็คห้องว่างกับนายเอ็มซ่ามากส์",
  },

  // 3. ส่วนนำเสนอคุณค่าหลัก (Strategic Hero Node)
  hero: {
    title: "ยกระดับสุนทรียภาพแห่งการพักผ่อนสู่ระนาบดิจิทัล",
    description:
      "นี่คือโซลูชันที่ นายเอ็มซ่ามากส์ ออกแบบเพื่อสะท้อนอัตลักษณ์ความเหนือระดับ ผ่านสถาปัตยกรรมที่จูนความเร็วการตอบสนองสูงสุด (LCP Optimized) เพื่อให้ลูกค้าของคุณใช้งานได้ไร้รอยต่อ",
    bgImage: "/images/templates/hotelresort/hotel-hero.webp",
  },

  // 4. รายงานดัชนีความเชื่อมั่น (Performance & Trust Protocols)
  stats: [
    { label: "Satisfaction Index", value: "4.9/5.0" },
    { label: "Airport Connectivity", value: "15 นาที" },
    { label: "Support โดยนายเอ็ม", value: "24 ชั่วโมง" },
  ],

  // 5. รายการห้องพักและโซลูชันการพักผ่อน (Rooms & Suites)
  rooms: [
    {
      id: "1",
      name: "Deluxe Ocean Front",
      price: "3,500.-",
      image: "/images/templates/hotelresort/placeholder.webp",
      features: [
        "ฟรีอาหารเช้านานาชาติพรีเมียม",
        "ทัศนียภาพมหาสมุทรพิกัดพาโนรามา",
        "สิ่งอำนวยความสะดวกเนี้ยบระดับมาตรฐานสากล",
      ],
    },
    {
      id: "2",
      name: "Private Pool Villa Suite",
      price: "7,900.-",
      image: "/images/templates/hotelresort/placeholder.webp",
      features: [
        "สระว่ายน้ำส่วนตัวพิกัดวิวหลักล้าน",
        "มินิบาร์พรีเมียมที่นายเอ็มคัดสรร",
        "Personal Butler Service พร้อมดูแลตลอด 24 ชม.",
      ],
    },
  ],

  // 6. มาตรฐานสิ่งอำนวยความสะดวก (Operational Excellence)
  amenities: {
    title: "สิ่งอำนวยความสะดวกระดับ 5 ดาว วางระบบโดย นายเอ็มซ่ามากส์",
    items: [
      { iconName: "Waves", label: "Pool & Wellness Center" },
      { iconName: "Coffee", label: "Executive Lounge" },
      { iconName: "Utensils", label: "Fine Dining Experience" },
      { iconName: "Wifi", label: "High-Speed Connectivity" },
    ],
  },

  // 7. ส่วนยืนยันมาตรฐานการดำเนินงาน (Strategic Footer)
  footer: {
    address:
      "เลขที่ 888 ถนนเลียบชายหาด ตำบลหนองปรือ อำเภอบางละมุง จังหวัดชลบุรี 20150",
    contact: {
      phone: "038-XXX-XXXX",
      line: "@GRANDRESORT",
      email: "reservation@grandresort.com",
    },
    mapsUrl: "https://maps.google.com", 
  },
}
