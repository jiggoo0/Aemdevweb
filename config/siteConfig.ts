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
  // [Hook] เน้นความเป็นมืออาชีพและผลลัพธ์ธุรกิจ
  title: "AEM DEV | รับทำเว็บไซต์ SME และ Landing Page มาตรฐานวิศวกรรม",
  description:
    "ยกระดับธุรกิจ SME ด้วยเว็บไซต์ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ โหลดไว ติดหน้าแรก Google คุยง่าย งานเนี้ยบ ดูแลจบครบในที่เดียว",
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  contact: {
    email: "contact@aemdevweb.com",
    tel: "08x-xxx-xxxx", // อย่าลืมใส่เบอร์จริงนะครับ
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
      name: "Starter (Landing Page)",
      price: "5,900",
      description:
        "เหมาะสำหรับเริ่มต้นสร้างตัวตนออนไลน์ ให้ลูกค้าค้นหาเจอง่ายขึ้น",
      features: [
        "1 หน้า Landing Page (แสดงผลเป๊ะทุกหน้าจอ)",
        "โครงสร้างรองรับการค้นหาบน Google",
        "ปุ่มติดต่อด่วน (LINE / โทรออก)",
        "จัดวางข้อมูลบริการครบถ้วน 5 รายการ",
        "ฟรี! บริการดูแลระบบหลังเปิดตัว 1 เดือน",
      ],
      isRecommended: false,
      buttonText: "เริ่มต้นสร้างตัวตน",
    },
    {
      id: "professional",
      name: "SME Pro (Growth)",
      price: "12,900",
      description:
        "สำหรับธุรกิจที่ต้องการความน่าเชื่อถือระดับสูง และเน้นยอดขาย",
      features: [
        "Premium Landing Page (ดีไซน์เฉพาะธุรกิจ)",
        "ปักหมุด Google Maps ให้ลูกค้าหาเจอ",
        "ติดตั้งระบบวัดผลการโฆษณา (FB Pixel/GA4)",
        "จัดวางเนื้อหาเชิงลึก 15 รายการ",
        "ฟรี! ที่ปรึกษาและดูแลระบบ 3 เดือน",
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
        "ไม่ต้องปวดหัวกับศัพท์ไอทีที่เข้าใจยาก เราแปลทุกอย่างให้เป็นภาษาธุรกิจที่คุณเห็นภาพชัด",
      icon: "MessageSquare",
    },
    {
      title: "งานเนี้ยบ งบไม่บานปลาย",
      description:
        "มาตรฐานการทำงานระดับวิศวกรรม ราคาโปร่งใส สบายใจ SME เริ่มต้นได้ทันที",
      icon: "Banknote",
    },
    {
      title: "ดูแลจริง ไม่ทิ้งงาน",
      description:
        "เรายืนระยะเคียงข้างธุรกิจคุณ พร้อมดูแลหลังการขายให้เว็บไซต์ของคุณเป็นเครื่องมือทำเงินตลอดเวลา",
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
