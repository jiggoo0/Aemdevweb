/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "@/types"

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog")

/**
 * [HELPER]: ดึงรายชื่อไฟล์ทั้งหมดจากคลังบทความ
 */
function getBlogFiles() {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    console.warn("ไม่พบพิกัดโฟลเดอร์บทความที่:", BLOG_DIRECTORY)
    return []
  }
  return fs.readdirSync(BLOG_DIRECTORY).filter((file) => file.endsWith(".mdx"))
}

/**
 * [STRATEGY] getAllPosts:
 * ดึงข้อมูลบทความทั้งหมดพร้อมเนื้อหา (Content)
 * เพื่อใช้ในระบบ Sitemap และการทำ Index ข้อมูลเชิงลึก
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const mdxFiles = getBlogFiles()

  const posts = mdxFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "")
    const fullPath = path.join(BLOG_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: {
        title: data.title || "Untitled Post",
        description:
          data.description || "อ่านรายละเอียดเนื้อหาเพิ่มเติมได้ที่นี่",
        date: data.date || "2026-01-01",
        category: data.category || "General",
        thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
        author: data.author || "AEMDEVWEB",
      },
      content,
    } as BlogPost
  })

  // จัดพิกัดวันที่: เรียงจากบทความใหม่ล่าสุดขึ้นก่อน
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}

/**
 * getBlogPostsMetadata:
 * ดึงเฉพาะก้อนข้อมูล Metadata มาประกอบร่างเป็นรายการบทความ (Blog List)
 * เน้น Performance เพราะไม่ต้องดึงเนื้อหา Content ทั้งหมดมาประมวลผล
 */
export function getBlogPostsMetadata() {
  const mdxFiles = getBlogFiles()

  const posts = mdxFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "")
    const fullPath = path.join(BLOG_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled Post",
      description:
        data.description || "อ่านรายละเอียดเนื้อหาเพิ่มเติมได้ที่นี่",
      date: data.date || "2026-01-01",
      category: data.category || "General",
      thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
      author: data.author || "AEMDEVWEB",
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * getBlogPostBySlug:
 * ดึงข้อมูลดิบและ Metadata ของบทความรายตัวตามพิกัด Slug
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: {
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date || "2026-01-01",
      category: data.category || "General",
      thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
      author: data.author || "AEMDEVWEB",
    },
    content,
  } as BlogPost
}
