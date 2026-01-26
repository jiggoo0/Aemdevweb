/** @format */

// 1. กำหนดโครงสร้างข้อมูล (Interface) เพื่อความแม่นยำในการเรียกใช้งาน
export interface CleaningProData {
  navbar: {
    logo: string
    phone: string
    links: { label: string; href: string }[]
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    image: string
  }
  services: {
    title: string
    items: {
      title: string
      desc: string
      price: string
      icon: "home" | "building" | "sparkles" | "clock"
    }[]
  }
  stats: { label: string; value: string }[]
  footer: {
    about: string
    contact: { address: string; line: string; email: string }
  }
}

// 2. ข้อมูลจริงที่ใช้แสดงผล (Mock Data)
export const data: CleaningProData = {
  navbar: {
    logo: "CLEANPRO",
    phone: "081-234-5678",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "บริการของเรา", href: "#services" },
      { label: "ทำไมต้องเรา", href: "#why-us" },
      { label: "ติดต่อสอบถาม", href: "#contact" },
    ],
  },
  hero: {
    title: "บ้านสะอาดใส เหมือนใหม่ในพริบตา",
    subtitle:
      "บริการทำความสะอาดครบวงจร โดยทีมงานมืออาชีพที่ผ่านการตรวจสอบประวัติทุกคน",
    cta: "จองบริการวันนี้",
    image: "/images/templates/cleaningpro.webp",
  },
  services: {
    title: "บริการที่เราเชี่ยวชาญ",
    items: [
      {
        icon: "home",
        title: "ทำความสะอาดบ้าน",
        desc: "กวาด ถู ปัดฝุ่น และจัดระเบียบทุกซอกมุมให้เรียบร้อย",
        price: "เริ่มต้น 500.-",
      },
      {
        icon: "building",
        title: "ทำความสะอาดออฟฟิศ",
        desc: "ดูแลความสะอาดสำนักงานทั้งแบบรายวันและรายเดือน",
        price: "เริ่มต้น 1,500.-",
      },
      {
        icon: "sparkles",
        title: "Big Clean",
        desc: "ทำความสะอาดหลังก่อสร้างหรือย้ายเข้าที่พักใหม่",
        price: "ประเมินตามพื้นที่",
      },
      {
        icon: "clock",
        title: "บริการรายชั่วโมง",
        desc: "เลือกเวลาได้ตามต้องการ ยืดหยุ่นสูงสุดสำหรับคุณ",
        price: "250.- / ชม.",
      },
    ],
  },
  stats: [
    { label: "ลูกค้าที่ไว้วางใจ", value: "2,500+" },
    { label: "ทีมงานมืออาชีพ", value: "150+" },
    { label: "คะแนนความพึงพอใจ", value: "4.9/5" },
  ],
  footer: {
    about:
      "ผู้นำด้านบริการทำความสะอาดที่เน้นความซื่อสัตย์และความสะอาดเป็นอันดับหนึ่ง เพื่อคุณภาพชีวิตที่ดีขึ้น",
    contact: {
      address: "45/1 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110",
      line: "@cleanpro_service",
      email: "contact@cleanpro.com",
    },
  },
}
