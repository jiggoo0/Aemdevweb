/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 🧬 Blog Interfaces
 * สถาปัตยกรรมข้อมูลสำหรับบทความสไตล์ Specialist
 */
export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  thumbnail: string
  tags: string[]
  content: string
}

// 📂 กำหนดเส้นทางไปยังโฟลเดอร์เก็บ MDX ของ Blog
const BLOG_DIR = path.join(process.cwd(), "content/blog")

/**
 * 🛠️ getAllPosts
 * กวาดข้อมูลบทความทั้งหมดจาก content/blog เพื่อส่งให้หน้า Archive Page
 */
export async function getAllPosts(): Promise<Post[]> {
  // 🛡️ Guard Clause: ตรวจสอบความมีอยู่ของโฟลเดอร์
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR)

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Post",
        date: data.date || "",
        excerpt: data.excerpt || "",
        thumbnail: data.thumbnail || "/images/og-image.png",
        tags: data.tags || [],
        content: content,
      } as Post
    })
    // 📅 จัดเรียงตามวันที่ (ล่าสุดขึ้นก่อน) เพื่อ Conversion ที่ดีกว่า
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

/**
 * 🔍 getPostBySlug
 * ดึงข้อมูลบทความรายตัวสำหรับหน้า [slug]/page.tsx
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    thumbnail: data.thumbnail,
    tags: data.tags,
    content,
  } as Post
}
