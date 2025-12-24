/** @format */

/**
 * 🌍 Multi-language Support
 * ใช้สำหรับจัดการเนื้อหาที่รองรับทั้งภาษาไทยและอังกฤษ
 */
export interface MultiLangText {
  th: string
  en: string
}

/**
 * 🩺 Service Definition
 * ใช้ในหน้า Services และ ServiceCard
 */
export interface ServiceItem {
  id: string | number
  title: string
  description: string
  category: string
  price: string
  promoPrice?: string
  features?: string[] // ✅ เพิ่มเติมเพื่อรองรับการลิสต์ฟีเจอร์ในอนาคต
}

/**
 * 📂 Project Interface
 * ใช้สำหรับหน้า Catalog, Portfolio และการทำ SEO (Sitemap)
 * ออกแบบมาเพื่อรองรับสไตล์ Neobrutalism (Hard Shadow & Sharp Borders)
 */
export interface Project {
  id: string
  title: string
  description: string // ✅ คำบรรยายสำหรับโชว์ใน Card
  tags: string[] // ✅ เช่น ["Next.js", "Medical", "Real Estate"]
  image: string // ✅ Path รูปภาพหลัก
  category: string // ✅ หมวดหมู่โปรเจกต์
  templateId: string // ✅ ใช้สำหรับ Dynamic Route: /landing/[template_id]
  serviceSlug?: string
  link?: string // ✅ ลิงก์ภายนอก หรือลิงก์ดู Demo จริง

  // ✅ สถิติที่น่าสนใจเพื่อดึงดูดลูกค้า (เช่น "Speed: 99", "SEO: 100")
  stats?: {
    label: string
    value: string
  }
}

/**
 * 📄 Site Configuration Type
 * เพื่อความแน่นอนในการเรียกใช้ siteConfig ทั่วทั้งโปรเจกต์
 */
export interface SiteConfig {
  name: string
  description: string
  navLinks: { title: string; href: string }[]
  contact: {
    email: string
    tel: string
    lineUrl: string
    address: string
  }
  links: {
    facebook: string
    instagram: string
    github?: string
  }
}
