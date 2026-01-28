/** @format */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "@/types"

const postsDirectory = path.join(process.cwd(), "content/blog")

/**
 * นิยามพิกัดข้อมูลส่วนหัวของบทความ (Frontmatter)
 * วางระบบเพื่อล้าง Warning เรื่องการใช้ any
 */
interface BlogFrontmatter {
  title: string
  date: string | Date
  description: string
  thumbnail: string
  category: string
  author: string
  readingTime: string
  [key: string]: unknown // รองรับพิกัดข้อมูลเสริมอื่นๆ แบบ Type-safe
}

/**
 * พิกัดดึงข้อมูลบทความทั้งหมด
 * วางโครงสร้างเพื่อนำไปใช้ในหน้า Blog Main และระบบค้นหา
 */
export async function getBlogPostsMetadata(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // แกะพิกัดข้อมูลดิบจากไฟล์ MDX
      const { data, content } = matter(fileContents)
      const frontmatter = data as BlogFrontmatter

      return {
        id: slug,
        slug,
        title: frontmatter.title,
        date: String(frontmatter.date),
        description: frontmatter.description,
        thumbnail: frontmatter.thumbnail,
        category: frontmatter.category,
        author: frontmatter.author,
        readingTime: frontmatter.readingTime,
        frontmatter: frontmatter, // วางพิกัดข้อมูลดิบที่ผ่านการระบุ Type แล้ว
        content,
      } as BlogPost
    })

  // เรียงพิกัดบทความตามวันที่ (ใหม่ไปเก่า)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * พิกัดดึงบทความรายชิ้นตาม Slug
 * ใช้สำหรับหน้า [slug]/page.tsx เจาะลึกเนื้อหา
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    const frontmatter = data as BlogFrontmatter

    return {
      id: slug,
      slug,
      title: frontmatter.title,
      date: String(frontmatter.date),
      description: frontmatter.description,
      thumbnail: frontmatter.thumbnail,
      category: frontmatter.category,
      author: frontmatter.author,
      readingTime: frontmatter.readingTime,
      frontmatter: frontmatter,
      content,
    } as BlogPost
  } catch (error) {
    // กรณีพิกัดไฟล์มีปัญหา ให้ส่งค่าว่างกลับไปป้องกันระบบล่ม
    console.error("Error reading blog post:", error)
    return null
  }
}

/**
 * พิกัดรวมสำหรับระบบ sitemap.ts และการทำ Static Params
 */
export const getAllPosts = getBlogPostsMetadata
