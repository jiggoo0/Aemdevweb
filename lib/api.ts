/** @format */
import { blogData } from "@/data/blog/allposts" // ✅ แก้ Path ให้ตรง
import { BlogPost } from "@/types/blog"

export function getAllPosts(): BlogPost[] {
  return blogData
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  // ✅ ระบุ Type (p: BlogPost) เพื่อแก้ปัญหา Parameter implicitly has an 'any' type
  return blogData.find((p: BlogPost) => p.slug === slug)
}
