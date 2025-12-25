/** @format */

// ==============================
// Author
// ==============================
export interface BlogAuthor {
  name: string
  avatar: string
  role?: string
}

// ==============================
// Blog Post
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
  date: string

  /** ภาพปกบทความ */
  image: string

  /** เวลาอ่าน */
  readTime: string

  /** ผู้เขียน (รองรับทั้ง object และ string สำหรับ backward compatibility) */
  author: BlogAuthor | string

  /** HTML / MDX content */
  content: string
}
