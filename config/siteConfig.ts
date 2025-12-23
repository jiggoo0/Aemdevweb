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
  title: "aemdevweb | รับทำเว็บไซต์ SME และธุรกิจไทยคุณภาพ",
  description:
    "บริการทำเว็บไซต์ที่เข้าใจธุรกิจไทย ตั้งแต่ร้านอาหาร ร้านค้า ยัน หจก. และ บจก. เน้นงานคุณภาพ คุยง่าย เป็นกันเองแบบมืออาชีพ",
  url: "https://www.aemdevweb.com",
  ogImage: "https://www.aemdevweb.com/og-image.png",

  contact: {
    email: "contact@aemdevweb.com",
    tel: "08x-xxx-xxxx",
    lineId: "@127cnhtm",
    lineUrl: "https://lin.ee/XwdZGsn",
    address: "Bangkok, Thailand",
  },

  navLinks: [
    { title: "หน้าแรก", href: "/" },
    { title: "บริการ", href: "/services" },
    { title: "ผลงาน", href: "/catalog" }, // เปลี่ยนจาก /portfolio → /catalog
    { title: "บทความ", href: "/blog" },
    { title: "เกี่ยวกับเรา", href: "/about" },
    { title: "ติดต่อ", href: "/contact" },
  ] as const,

  pricingPlans: [
    {
      id: "starter",
      name: "Starter (Landing Page)",
      price: "5,900",
      description:
        "เหมาะสำหรับร้านค้าเริ่มต้น ที่ต้องการมีหน้าร้านบนโลกออนไลน์",
      features: [
        "1 หน้า Landing Page (Responsive)",
        "รองรับ SEO เบื้องต้น",
        "เชื่อมต่อปุ่ม Line / โทรออก",
        "ลงข้อมูลสินค้า/บริการ 5 รายการ",
        "ดูแลระบบฟรี 1 เดือน",
      ],
      isRecommended: false,
      buttonText: "เลือกแพ็กเกจเริ่มต้น",
    },
    {
      id: "professional",
      name: "SME Pro",
      price: "12,900",
      description: "สำหรับธุรกิจที่ต้องการความน่าเชื่อถือ และระบบวัดผล",
      features: [
        "Landing Page แบบ Premium",
        "ติดตั้ง Google Map / Business",
        "ติดตั้ง Tracking (FB Pixel/GA4)",
        "ลงข้อมูลสินค้า/บริการ 15 รายการ",
        "ดูแลระบบฟรี 3 เดือน",
      ],
      isRecommended: true,
      buttonText: "เลือกแพ็กเกจยอดนิยม",
    },
    {
      id: "maintenance",
      name: "รายเดือน (Partner)",
      price: "990",
      unit: "/เดือน",
      description: "ดูแลเว็บไซต์ต่อเนื่อง ไม่ต้องกังวลเรื่องเทคนิค",
      features: [
        "อัปเดตข้อมูลเดือนละ 2 ครั้ง",
        "ดูแลความปลอดภัย & สำรองข้อมูล",
        "สรุปสถิติผู้เข้าชมทุกเดือน",
        "ปรึกษาการตลาดออนไลน์ฟรี",
      ],
      isRecommended: false,
      buttonText: "สมัครรายเดือน",
    },
  ] as PricingPlan[],

  features: [
    {
      title: "คุยง่าย ภาษาบ้านๆ",
      description:
        "ไม่ต้องปวดหัวกับศัพท์เทคนิค เราอธิบายให้เข้าใจง่ายเหมือนคุยกับเพื่อน",
      icon: "MessageSquare",
    },
    {
      title: "ราคาที่ SME เอื้อมถึง",
      description: "งบประมาณชัดเจน ไม่มีงบบานปลาย เริ่มต้นธุรกิจได้ทันที",
      icon: "Banknote",
    },
    {
      title: "ดูแลเหมือนเป็นพาร์ทเนอร์",
      description:
        "เราไม่ทิ้งงาน พร้อมดูแลหลังการขาย ให้เว็บของคุณใช้งานได้จริงตลอดเวลา",
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
