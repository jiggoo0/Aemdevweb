/** @format */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "@/types"

/**
 * AEMDEVWEB | Strategic Blog Infrastructure 2026
 * -------------------------------------------------------------------------
 * ระบบประมวลผลและจัดการคลังความรู้เชิงยุทธศาสตร์
 * วางโครงสร้างและจูนสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */

const postsDirectory = path.join(process.cwd(), "content/blog")

/**
 * นิยามพิกัดข้อมูลส่วนหัวของบทความ (Frontmatter Protocol)
 * วางระบบเพื่อความแม่นยำของข้อมูลและล้าง Warning ในระนาบ Specialist
 */
interface BlogFrontmatter {
  title: string
  date: string | Date
  description: string
  thumbnail: string
  category: string
  author: string
  readingTime: string
  [key: string]: unknown // รองรับพิกัดข้อมูลเสริมเชิงลึกเพื่อ Technical SEO
}

/**
 * พิกัดดึงข้อมูล Metadata ของบทความทั้งหมด
 * วางโครงสร้างเพื่อนำไปใช้ในหน้า Blog Main และระบบการทำดัชนีของ Search Engine
 * ออกแบบโดย: นายเอ็มซ่ามากส์
 */
export async function getBlogPostsMetadata(): Promise<BlogPost[]> {
  // ตรวจสอบพิกัดไดเรกทอรีเพื่อป้องกันระบบสะดุด
  if (!fs.existsSync(postsDirectory)) return []
  
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // สกัดพิกัดข้อมูลดิบจากไฟล์ MDX ด้วยสมรรถนะสูงสุด
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
        author: frontmatter.author || "นายเอ็มซ่ามากส์",
        readingTime: frontmatter.readingTime,
        frontmatter: frontmatter, // พิกัดข้อมูลดิบที่ผ่านการระบุ Type อย่างเนี้ยบ
        content,
      } as BlogPost
    })

  // เรียงพิกัดบทความตามลำดับเวลา (Strategic Timeline Sorting)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * พิกัดดึงบทความรายชิ้นตาม Slug (Deep Content Retrieval)
 * ใช้สำหรับหน้าพิกัด [slug]/page.tsx เพื่อการแสดงผลที่สมบูรณ์แบบ
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
      author: frontmatter.author || "นายเอ็มซ่ามากส์",
      readingTime: frontmatter.readingTime,
      frontmatter: frontmatter,
      content,
    } as BlogPost
  } catch (error) {
    // พิกัดจัดการข้อผิดพลาดเพื่อรักษาเสถียรภาพระบบงานโดย นายเอ็มซ่ามากส์
    console.error(`[AEM-ERROR]: พิกัดไฟล์ ${slug} มีปัญหา:`, error)
    return null
  }
}

/**
 * พิกัดรวมสำหรับระบบ sitemap.ts และการทำ Static Params
 * มาตรฐานงานระบบโดย นายเอ็มซ่ามากส์
 */
export const getAllPosts = getBlogPostsMetadata
