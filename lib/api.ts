import { blogData } from "@/data/blogData" // ตรวจสอบชื่อไฟล์ให้ตรงกับ data/blogData.ts
import { BlogPost } from "@/types/blog"

/**
 * API Logic สำหรับดึงข้อมูลในโปรเจกต์
 * แก้ไขปัญหา: Attempted import error โดยการใส่ export const api
 */
export const api = {
  // ดึงบทความทั้งหมด
  getPosts: async (): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(blogData), 300)
    })
  },

  // ดึงบทความตาม Slug
  getPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    return new Promise((resolve) => {
      const post = blogData.find((p) => p.slug === slug)
      setTimeout(() => resolve(post), 100)
    })
  },

  // ดึงบทความล่าสุด (Featured)
  getFeaturedPosts: async (limit: number = 3): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      // เรียงจากใหม่ไปเก่า (ถ้ามีฟิลด์ date ที่เป็น Date object จะดีมาก)
      // ในที่นี้ดึงตามจำนวน limit ที่กำหนด
      const featured = [...blogData].slice(0, limit)
      setTimeout(() => resolve(featured), 200)
    })
  },

  // ส่งข้อมูลฟอร์มติดต่อ
  submitContact: async (
    data: any
  ): Promise<{ success: boolean; message: string }> => {
    console.log("Submitting contact data:", data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "เราได้รับข้อมูลของคุณแล้วครับ!" })
      }, 1000)
    })
  },
}
