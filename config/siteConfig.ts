/** @format */

// ─── TYPES DEFINITIONS ───

export interface PricingPlan {
  readonly id: string
  readonly name: string
  readonly price: string
  readonly unit?: string
  readonly description: string
  readonly features: readonly string[]
  readonly isRecommended?: boolean
  readonly buttonText: string
}

export interface NavLink {
  readonly title: string
  readonly href: string
  readonly isExternal?: boolean
}

export interface Feature {
  readonly title: string
  readonly description: string
  readonly icon: "MessageSquare" | "Zap" | "ShieldCheck" | "Target" | "Search"
}

// ─── CONFIGURATION ───

export const siteConfig = {
  // 🏢 Brand Identity & SEO (Updated: Focus on Business Results)
  name: "AEMDEVWEB",
  // ปรับ Title ใหม่ให้สั้น กระชับ และตรงกลุ่มเป้าหมาย SME
  title: "AEM DEV | รับทำเว็บไซต์ SME & Landing Page เน้นปิดการขาย",
  description:
    "บริการรับทำเว็บไซต์ธุรกิจ และ Landing Page คุณภาพสูง โหลดไว ใช้งานง่าย ช่วยเพิ่มยอดขายด้วยโครงสร้างเว็บที่มั่นคงและมาตรฐานวิศวกรรมระดับมืออาชีพ",
  url: "https://www.aemdevweb.com",
  ogImage: "/og-image.png",
  version: "1.5.1", // Bump version for SEO fix

  // 📞 Contact Information (Technical Support & Sales)
  contact: {
    email: "contact@aemdevweb.com",
    tel: "08x-xxx-xxxx", // แนะนำให้ใส่เบอร์จริงเพื่อเพิ่ม Trust ใน Local SEO
    lineId: "@127cnhtm",
    lineUrl: "https://lin.ee/XwdZGsn",
    address: "Bangkok, Thailand",
    workHours: "Mon - Fri, 09:00 - 18:00",
  },

  // 🧭 Navigation System
  navLinks: [
    { title: "หน้าแรก", href: "/" },
    { title: "คลังผลงาน", href: "/catalog" },
    { title: "บทความ", href: "/blog" },
    { title: "เกี่ยวกับเรา", href: "/about" },
    { title: "ปรึกษาโปรเจกต์", href: "/contact" },
  ] as NavLink[],

  // 💰 Pricing & Service Architecture
  pricingPlans: [
    {
      id: "starter",
      name: "Starter (Flash Sale)",
      price: "3,900",
      description:
        "แพ็กเกจเริ่มต้นสำหรับ SME ที่ต้องการเว็บไซต์เร็วและดีไซน์เน้นปิดการขาย",
      features: [
        "1 หน้า Landing Page พรีเมียม",
        "รองรับ Mobile Responsive 100%",
        "ปุ่มติดต่อด่วน LINE / Call",
        "Performance คะแนน 90+ (PageSpeed)",
        "ฟรี SSL และโดเมนปีแรก",
      ],
      isRecommended: false,
      buttonText: "จองสิทธิ์ราคาพิเศษ",
    },
    {
      id: "professional",
      name: "SME Pro (Growth)",
      price: "12,900",
      description:
        "เหมาะสำหรับธุรกิจที่ต้องการระบบวัดผลยอดขายและอันดับ SEO ที่ดีกว่า",
      features: [
        "ดีไซน์พรีเมียมเอกลักษณ์เฉพาะแบรนด์",
        "Technical SEO ตั้งต้นทั้งระบบ",
        "ติดตั้ง Tracking (FB Pixel / GA4 / GTM)",
        "โครงสร้างหลายหน้า (Multi-pages)",
        "ฟรีที่ปรึกษาการตลาดออนไลน์ 3 เดือน",
      ],
      isRecommended: true,
      buttonText: "เริ่มสร้างธุรกิจที่เติบโต",
    },
    {
      id: "maintenance",
      name: "Business Partner",
      price: "990",
      unit: "/เดือน",
      description:
        "บริการดูแลเว็บไซต์ต่อเนื่อง ประสิทธิภาพไม่ตกโฟกัสธุรกิจได้เต็มที่",
      features: [
        "อัปเดตข้อมูล/เนื้อหา เดือนละ 2 ครั้ง",
        "Security Update & Daily Backup",
        "Monthly Traffic Report (รายงานผล)",
        "สิทธิ์ปรึกษากลยุทธ์ Digital ฟรี",
      ],
      isRecommended: false,
      buttonText: "สมัครรับการดูแล",
    },
  ] as PricingPlan[],

  // 🛠️ Brand Pillars
  features: [
    {
      title: "คุยง่าย ภาษาธุรกิจ",
      description:
        "เราคุยด้วยภาษาธุรกิจที่คุณเข้าใจ ตัดศัพท์ไอทีที่ยุ่งยากออกไป เพื่อผลลัพธ์ที่ตรงจุด",
      icon: "MessageSquare",
    },
    {
      title: "มาตรฐานวิศวกรรม",
      description:
        "โครงสร้างโค้ดสะอาด ปลอดภัย โหลดไวสูงสุด ตามมาตรฐาน Google Core Web Vitals",
      icon: "Zap",
    },
    {
      title: "ดูแลจริง ไม่ทิ้งงาน",
      description:
        "พร้อมดูแลและ Support หลังการขาย ให้เว็บไซต์เป็นเครื่องมือทำเงินระยะยาว",
      icon: "ShieldCheck",
    },
  ] as Feature[],

  // 🔗 Social Assets & Integrations
  links: {
    facebook: "https://facebook.com/aemdevweb",
    github: "https://github.com/aemdevweb",
    line: "https://lin.ee/XwdZGsn",
    instagram: "https://instagram.com/aemdevweb",
  } as const,

  // 📑 Footer Categories
  footerLinks: [
    {
      title: "Solutions",
      links: [
        { name: "Landing Page", href: "/catalog" },
        { name: "Corporate Website", href: "/catalog" },
        { name: "Service SEO", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog & Insights", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
