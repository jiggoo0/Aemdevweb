/** @format */
import { BlogPost } from "@/types/blog"
import { post1 } from "./post1"
import { post2 } from "./post2"
import { post3 } from "./post3"
import { post4 } from "./post4"
import { post5 } from "./post5"

// ✅ Helper Function สำหรับล้างข้อมูล Object ให้เป็น String
const normalize = (post: any): BlogPost => {
  const getString = (val: any) => {
    if (typeof val === "string") return val
    return val?.th || val?.en || "" // ดึงภาษาไทยเป็นหลัก
  }

  return {
    ...post,
    title: getString(post.title),
    excerpt: getString(post.excerpt || post.description),
  }
}

// ✅ จัดการ normalize ข้อมูลทั้งหมดก่อน export
// วิธีนี้จะทำให้ Error "Objects are not valid..." หายไปจากทุกหน้าแน่นอน
export const blogData: BlogPost[] = [
  normalize(post5),
  normalize(post4),
  normalize(post3),
  normalize(post2),
  normalize(post1),
]

export const getPostBySlug = (slug: string) => {
  return blogData.find((post) => post.slug === slug)
}
