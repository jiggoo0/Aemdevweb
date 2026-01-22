/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 🧬 Case Study Interfaces
 * กำหนดโครงสร้างข้อมูลให้ชัดเจนตามมาตรฐาน Brand Guardian Specialist
 */
export interface CaseStudyFrontmatter {
  title: string // หัวข้อผลงาน (ควรมี Keyword)
  description: string // คำอธิบายสำหรับการ์ด
  excerpt: string // บทคัดย่อสำหรับ SEO Meta
  date: string // วันที่ (YYYY-MM-DD)
  author: string // ผู้รับผิดชอบ
  thumbnail: string // รูปหน้าปก .webp
  service: string // ชื่อบริการ (e.g., Industrial E-Catalog)
  category?: string // หมวดหมู่ธุรกิจ (e.g., Manufacturing)
  result?: string // ผลลัพธ์ (e.g., PageSpeed 100)
}

export interface CaseStudy {
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}

/**
 * 🛠️ Configuration: Path ไปยังคลังข้อมูลผลงาน
 */
const CASE_STUDIES_PATH = path.join(process.cwd(), "content/case-studies")

/**
 * 📂 ดึงรายชื่อ Slug ทั้งหมด (Get All Slugs)
 * รองรับการเปลี่ยนชื่อไฟล์จากรูปแบบเดิม (case-studies-1) เป็นรูปแบบ SEO (sme-performance)
 */
export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_PATH)) {
    console.warn("⚠️ [Case Studies] Directory not found:", CASE_STUDIES_PATH)
    return []
  }

  try {
    return fs
      .readdirSync(CASE_STUDIES_PATH)
      .filter((file) => /\.mdx?$/.test(file)) // รองรับ .md และ .mdx
      .map((file) => file.replace(/\.mdx?$/, ""))
  } catch (error) {
    console.error("❌ [Case Studies] Error reading directory:", error)
    return []
  }
}

/**
 * 📄 ดึงข้อมูลผลงานรายชิ้น (Single Case Study)
 * [FIXED]: เพิ่มระบบตรวจสอบเพื่อรองรับ Dynamic Routes ใน Next.js 16
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  // 🛡️ Guard Clause: ป้องกัน slug เป็นค่าว่างหรือรูปแบบไม่ถูกต้อง
  if (!slug || typeof slug !== "string") {
    return null
  }

  try {
    const realSlug = slug.replace(/\.mdx?$/, "")
    const filePath = path.join(CASE_STUDIES_PATH, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) {
      // 🕵️ หากไม่พบไฟล์ ให้ลองหาไฟล์นามสกุล .md สำรอง
      const mdFilePath = path.join(CASE_STUDIES_PATH, `${realSlug}.md`)
      if (!fs.existsSync(mdFilePath)) return null
    }

    const targetPath = fs.existsSync(filePath)
      ? filePath
      : path.join(CASE_STUDIES_PATH, `${realSlug}.md`)
    const fileContent = fs.readFileSync(targetPath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      slug: realSlug,
      frontmatter: data as CaseStudyFrontmatter,
      content: content,
    }
  } catch (error) {
    console.error(`❌ [Case Studies] Error processing slug "${slug}":`, error)
    return null
  }
}

/**
 * 🗂️ ดึงข้อมูล Case Studies ทั้งหมด (Archive List)
 * ปรับจูนเพื่อประสิทธิภาพความเร็วสูงสุดในหน้า Listing
 */
export async function getAllCaseStudies(): Promise<
  Omit<CaseStudy, "content">[]
> {
  const slugs = getCaseStudySlugs()

  const caseStudies = slugs
    .map((slug) => {
      try {
        const filePath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`)
        // เช็คกรณีเป็นไฟล์ .md
        const actualPath = fs.existsSync(filePath)
          ? filePath
          : path.join(CASE_STUDIES_PATH, `${slug}.md`)

        if (!fs.existsSync(actualPath)) return null

        const fileContent = fs.readFileSync(actualPath, "utf8")
        const { data } = matter(fileContent)

        return {
          slug,
          frontmatter: data as CaseStudyFrontmatter,
        }
      } catch (error) {
        console.error(`❌ [Case Studies] Error loading ${slug}:`, error)
        return null
      }
    })
    .filter((item): item is Omit<CaseStudy, "content"> => item !== null)
    // 📅 Sort: Fresh First (เรียงตามวันที่ล่าสุดเสมอ)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )

  return caseStudies
}
