/** @format */

// ==============================
// 👤 Author Specification
// ==============================
export interface BlogAuthor {
  name: string
  avatar: string
  role?: string
  bio?: string // เพิ่มข้อมูลผู้เขียนสั้นๆ
}

// ==============================
// 📝 Blog Post Core Structure
// ==============================
export interface BlogPost {
  id: string
  slug: string
  title: string

  /** สรุปสั้น ใช้ใน blog list / card / SEO */
  excerpt: string

  /** คำอธิบายเชิงบทความ (ใช้กับ metadata / hero) */
  description: string

  category: string
  date: string // วันที่สำหรับแสดงผล (e.g., "24 Dec 2024")

  /** * ✅ Tags สำหรับ SEO และการกรองข้อมูล
   * แก้ปัญหา: TS2339: Property 'tags' does not exist on type 'BlogPost'
   */
  tags?: string[]

  /** ภาพปกบทความ */
  image: string

  /** เวลาอ่าน (e.g., "5 min read") */
  readTime: string

  /** ผู้เขียน (รองรับทั้ง object และ string สำหรับ backward compatibility) */
  author: BlogAuthor | string

  /** HTML / MDX content */
  content: string

  /** 🚀 SEO & Analytics Optimization */
  featured?: boolean // สำหรับแสดงในหน้า Home หรือแนะนำ
  viewCount?: number
}

/**
 * 🔍 Helper Type สำหรับการทำ Blog List (ลดขนาดข้อมูลที่ไม่จำเป็น)
 */
export type BlogPostSummary = Omit<BlogPost, "content">
