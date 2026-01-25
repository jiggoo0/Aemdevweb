/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "@/types"

/* -------------------------------------------------------------------------- */
/* การกำหนดค่าพิกัดระบบไฟล์ (System Path Configuration)                            */
/* -------------------------------------------------------------------------- */

const BLOG_DIR = path.join(process.cwd(), "content/blog")

/* -------------------------------------------------------------------------- */
/* ชุดคำสั่งจัดการข้อมูลบทความหลัก (Core Management Functions)                     */
/* -------------------------------------------------------------------------- */

/**
 * ดึงข้อมูลบทความทั้งหมดพร้อมจัดกลุ่มข้อมูลส่วนหัว
 * ออกแบบมาเพื่อให้สอดคล้องกับโครงสร้างระบบข้อมูลระดับสากล
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR)

  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx?$/, "")

      // จัดวางพิกัดรูปภาพสำรองเพื่อความปลอดภัยของระบบงาน
      const rawImage = data.thumbnail || data.coverImage || ""
      const safeImage = rawImage.trim() !== "" ? rawImage : "/images/og-image.png"

      // ส่งกลับข้อมูลในรูปแบบโครงสร้างระบบที่ซ้อนกัน (Nested Structure)
      return {
        id: slug,
        slug: slug,
        frontmatter: {
          title: data.title || "Untitled Post",
          description: data.description || data.excerpt || "",
          date: data.date || "",
          category: data.category || "General",
          thumbnail: safeImage,
          author: data.author || "นายเอ็มซ่ามากส์",
          excerpt: data.excerpt || data.description || "",
          tags: data.tags || [],
        },
        content: content,
      } as BlogPost
    })
    // จัดลำดับบทความโดยใช้วันที่ล่าสุดเป็นตัวตั้ง
    .sort((a, b) => {
      const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0
      const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0
      return dateB - dateA
    })

  return posts
}

/**
 * ดึงข้อมูลบทความล่าสุดตามพิกัดจำนวนที่กำหนด
 */
export async function getLatestBlogs(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, limit)
}

/**
 * ดึงข้อมูลบทความรายชิ้นผ่านชื่อ Slug
 * รองรับการตรวจสอบพิกัดไฟล์ทั้งนามสกุล .mdx และ .md
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) return null

  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)

  const actualPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null

  if (!actualPath) return null

  try {
    const fileContent = fs.readFileSync(actualPath, "utf8")
    const { data, content } = matter(fileContent)

    const rawImage = data.thumbnail || data.coverImage || ""
    const safeImage = rawImage.trim() !== "" ? rawImage : "/images/og-image.png"

    return {
      id: slug,
      slug: slug,
      frontmatter: {
        title: data.title || "Untitled Post",
        description: data.description || data.excerpt || "",
        date: data.date || "",
        category: data.category || "General",
        thumbnail: safeImage,
        author: data.author || "นายเอ็มซ่ามากส์",
        excerpt: data.excerpt || data.description || "",
        tags: data.tags || [],
      },
      content: content,
    } as BlogPost
  } catch (error) {
    console.error(`Error processing blog content: ${slug}`, error)
    return null
  }
}
