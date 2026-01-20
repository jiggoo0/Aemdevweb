/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 🧬 Case Study Interfaces
 * กำหนดโครงสร้างข้อมูลให้ชัดเจนตามมาตรฐาน Brand Guardian Specialist
 */
export interface CaseStudyFrontmatter {
  title: string // หัวข้อผลงาน
  description: string // คำอธิบายสั้นๆ สำหรับการ์ด
  excerpt: string // บทคัดย่อสำหรับ SEO Meta
  date: string // วันที่เผยแพร่ (YYYY-MM-DD)
  author: string // ผู้เขียน/ผู้รับผิดชอบ
  thumbnail: string // รูปหน้าปก (แนะนำ .webp)
  service: string // ชื่อบริการที่เกี่ยวข้อง (e.g., SME Website)
  category?: string // หมวดหมู่ธุรกิจ (e.g., Industrial, SME)
  result?: string // ผลลัพธ์ที่จับต้องได้ (e.g., Speed 100/100)
}

export interface CaseStudy {
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}

/**
 * 🛠️ Configuration
 * ปรับ Path ให้ตรงตาม Content Directory ในโปรเจกต์ (content/case-studies)
 */
const CASE_STUDIES_PATH = path.join(process.cwd(), "content/case-studies")

/**
 * 📂 ดึงรายชื่อ Slug ทั้งหมด (Get All Slugs)
 * @returns string[] รายชื่อไฟล์โดยตัดนามสกุลออก
 */
export function getCaseStudySlugs(): string[] {
  // 🛡️ Safety Check: ตรวจสอบความมีอยู่ของโฟลเดอร์
  if (!fs.existsSync(CASE_STUDIES_PATH)) {
    console.warn("⚠️ [Case Studies] Directory not found:", CASE_STUDIES_PATH)
    return []
  }

  try {
    return fs
      .readdirSync(CASE_STUDIES_PATH)
      .filter((file) => /\.mdx?$/.test(file)) // รองรับทั้ง .md และ .mdx
      .map((file) => file.replace(/\.mdx?$/, ""))
  } catch (error) {
    console.error("❌ [Case Studies] Error reading directory:", error)
    return []
  }
}

/**
 * 📄 ดึงข้อมูลผลงานรายชิ้น (Single Case Study)
 * @param slug - ชื่อไฟล์ที่เป็น ID ของผลงาน
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  // 🛡️ [FIXED] Guard Clause: ป้องกัน slug เป็น undefined หรือไม่ใช่ string
  // ป้องกัน Error: Cannot read properties of undefined (reading 'replace')
  if (!slug || typeof slug !== "string") {
    console.warn("⚠️ [Case Studies] Invalid or undefined slug provided")
    return null
  }

  try {
    const realSlug = slug.replace(/\.mdx?$/, "")
    const filePath = path.join(CASE_STUDIES_PATH, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) {
      console.error(`❌ [Case Studies] File not found: ${filePath}`)
      return null
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
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
 * 🗂️ ดึงข้อมูล Case Studies ทั้งหมดและจัดเรียง (Archive List)
 * คัดเฉพาะ Metadata มาใช้เพื่อประสิทธิภาพความเร็วสูงสุด (Next.js Optimization)
 */
export async function getAllCaseStudies(): Promise<
  Omit<CaseStudy, "content">[]
> {
  const slugs = getCaseStudySlugs()

  const caseStudies = slugs
    .map((slug) => {
      try {
        const filePath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath, "utf8")
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
    // เรียงลำดับจากวันที่ล่าสุด (Fresh First) เพื่อความซ่าและทันสมัย
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )

  return caseStudies
}
