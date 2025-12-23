/** @format */

/**
 * 👤 ข้อมูลผู้เขียนบทความ (Global)
 */
export interface Author {
  name: string
  avatar: string
  role: string
}

/**
 * 📝 ข้อมูลบทความ (Global)
 */
export interface BlogPost {
  id: string
  title: string
  description: string
  category: string
  date: string
  image: string
  slug: string
  author: Author | string // รองรับทั้งแบบ Object และชื่อ String
  readTime: string
  content: string
  excerpt?: string
}
