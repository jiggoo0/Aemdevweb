/** @format */
import { BlogPost } from "@/types/blog"
import { post1 } from "./post1"
import { post2 } from "./post2"
import { post3 } from "./post3"
import { post4 } from "./post4"

// รวบรวมและเรียงลำดับตาม ID (หรือวันที่) เพื่อแสดงผลบทความล่าสุดก่อน
export const blogData: BlogPost[] = [post4, post3, post2, post1]

// ฟังก์ชันเสริมสำหรับค้นหาบทความตาม Slug (สำหรับหน้า Single Blog Page)
export const getPostBySlug = (slug: string) => {
  return blogData.find((post) => post.slug === slug)
}
