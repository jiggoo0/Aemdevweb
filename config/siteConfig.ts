/** @format */

export interface PricingPlan {
  id: string
  name: string
  price: string
  unit?: string
  description: string
  features: string[]
  isRecommended?: boolean
  buttonText: string
}

export const siteConfig = {
  name: "aemdevweb",
  title: "AEM DEV | รับทำเว็บไซต์ SME และ Landing Page มาตรฐานวิศวกรรม",
  description:
    "ยกระดับธุรกิจ SME ด้วยเว็บไซต์ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ โหลดไว ติดหน้าแรก Google คุยง่าย งานเนี้ยบ ดูแลจบครบในที่เดียว",
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  contact: {
    email: "contact@aemdevweb.com",
    tel: "08x-xxx-xxxx", // อย่าลืมใส่เบอร์จริง
    lineId: "@127cnhtm",
    lineUrl: "https://lin.ee/XwdZGsn",
    address: "Bangkok, Thailand",
  },

  navLinks: [
    { title: "หน้าแรก", href: "/" },
    { title: "บริการของเรา", href: "/services" },
    { title: "คลังผลงาน", href: "/catalog" },
    { title: "บทความ", href: "/blog" },
    { title: "รู้จักเรา", href: "/about" },
    { title: "ปรึกษาโปรเจกต์", href: "/contact" },
  ] as const,

  pricingPlans: [
    {
      id: "starter",
      name: "Starter (Flash Sale)",
      price: "3,900", // ปรับราคาให้ตรงกับจุดขายใหม่
      description:
        "โปรโมชันเริ่มต้นสำหรับ SME ที่ต้องการความไวสูงสุดและดีไซน์ที่ปิดการขายได้จริง",
      features: [
        "1 หน้า Landing Page (High-Conversion Design)",
        "รองรับการแสดงผลมือถือ 100% (Responsive)",
        "ปุ่มติดต่อด่วน LINE / Call ที่เห็นชัดเจน",
        "Loading Speed Optimization (คะแนน 90+)",
        "ฟรี! ติดตั้ง SSL Certificate และโดเมนปีแรก",
      ],
      isRecommended: false,
      buttonText: "เริ่มต้นราคาพิเศษ 3,900.-",
    },
    {
      id: "professional",
      name: "SME Pro (Growth)",
      price: "12,900",
      description:
        "สำหรับธุรกิจที่ต้องการความน่าเชื่อถือระดับสูง และเน้นระบบวัดผลยอดขาย",
      features: [
        "Premium Custom Design (อัตลักษณ์แบรนด์ชัดเจน)",
        "ปักหมุด Google Maps + SEO ตั้งต้น",
        "ติดตั้งระบบวัดผล (FB Pixel / GA4 / GTM)",
        "จัดวางเนื้อหาเชิงลึกและ Gallery ผลงาน",
        "ฟรี! ที่ปรึกษาการตลาดออนไลน์ 3 เดือน",
      ],
      isRecommended: true,
      buttonText: "เลือกแพ็กเกจยอดนิยม",
    },
    {
      id: "maintenance",
      name: "Business Partner",
      price: "990",
      unit: "/เดือน",
      description: "ดูแลเว็บไซต์ต่อเนื่อง ให้คุณมีเวลาไปโฟกัสธุรกิจได้เต็มที่",
      features: [
        "อัปเดตข้อมูลและโปรโมชันเดือนละ 2 ครั้ง",
        "ดูแลความปลอดภัยและสำรองข้อมูลสม่ำเสมอ",
        "รายงานสรุปสถิติผู้เข้าชมประจำเดือน",
        "สิทธิ์ปรึกษากลยุทธ์ออนไลน์ฟรี",
      ],
      isRecommended: false,
      buttonText: "ให้เราดูแลคุณ",
    },
  ] as PricingPlan[],

  features: [
    {
      title: "คุยง่าย ภาษาพาร์ทเนอร์",
      description:
        "ไม่ต้องปวดหัวกับศัพท์ไอที เราแปลทุกอย่างให้เป็นภาษาธุรกิจที่คุณเห็นภาพชัด",
      icon: "MessageSquare",
    },
    {
      title: "งานเนี้ยบ มาตรฐานวิศวกรรม",
      description:
        "โครงสร้างโค้ดสะอาด ปลอดภัย และโหลดไว ตามมาตรฐานการพัฒนาซอฟต์แวร์ระดับสากล",
      icon: "Banknote",
    },
    {
      title: "ดูแลจริง ไม่ทิ้งงาน",
      description:
        "เรายืนระยะเคียงข้างธุรกิจคุณ พร้อมดูแลหลังการขายให้เว็บไซต์ของคุณเป็นเครื่องมือทำเงิน",
      icon: "ShieldCheck",
    },
  ] as const,

  links: {
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    line: "https://lin.ee/XwdZGsn",
  } as const,
} as const

export type SiteConfig = typeof siteConfig
