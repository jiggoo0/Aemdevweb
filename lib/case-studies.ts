/** @format */
import "server-only" // ยันต์กันผี: ล็อกพิกัดให้รันเฉพาะฝั่ง Server เพื่อความปลอดภัยสูงสุด
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"
import { CaseStudyItem } from "@/types"

/**
 * AEMDEVWEB | Case Study Retrieval System 2026
 * -------------------------------------------------------------------------
 * ระบบประมวลผลพิกัดความสำเร็จและกรณีศึกษาเชิงยุทธศาสตร์
 * วางโครงสร้างและจูนสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")

/**
 * [OPTIMIZED]: พิกัดดึงข้อมูลความสำเร็จทั้งหมด
 * ใช้ cache เพื่อทำ Request Memoization ตามมาตรฐาน Specialist ปี 2026
 * ดึงข้อมูล Node ความสำเร็จจากโครงสร้าง Infrastructure หลังบ้าน
 */
export const getAllCaseStudies = cache(async (): Promise<CaseStudyItem[]> => {
  // ตรวจสอบพิกัดไดเรกทอรีเพื่อป้องกันระบบสะดุด
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []

  const files = fs.readdirSync(CASE_STUDIES_DIR)

  return files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(CASE_STUDIES_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx?$/, "")

      return {
        id: slug,
        slug,
        frontmatter: {
          title: data.title || "Untitled Strategic Project",
          client: data.client || "Secret Client",
          industry: data.industry || data.category || "General Strategic Industry",
          category: data.category || "Specialist Solution",
          excerpt: data.excerpt || data.description || "ข้อมูลพิกัดความสำเร็จอยู่ระหว่างการสรุปผล...",
          thumbnail: data.thumbnail || "/images/showcase/placeholder.webp",
          date: data.date || "2026-01-01",
          results: Array.isArray(data.results) ? data.results : [],
          keyFeatures: data.keyFeatures || [],
          service: data.service || "Technical SEO & Web Infrastructure",
          isFeatured: data.isFeatured || false,
        },
        content,
      } as CaseStudyItem
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
})

/**
 * getCaseStudyBySlug - เจาะพิกัดข้อมูล Node ความสำเร็จรายชิ้น
 * วางระบบโดย นายเอ็มซ่ามากส์ เพื่อการเข้าถึงข้อมูลที่แม่นยำและรวดเร็ว
 */
export const getCaseStudyBySlug = cache(
  async (slug: string): Promise<CaseStudyItem | null> => {
    try {
      const mdxPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
      const mdPath = path.join(CASE_STUDIES_DIR, `${slug}.md`)
      
      // ตรวจสอบพิกัดไฟล์จริง (MDX/MD Support)
      const actualPath = fs.existsSync(mdxPath)
        ? mdxPath
        : fs.existsSync(mdPath)
          ? mdPath
          : null

      if (!actualPath) return null

      const fileContent = fs.readFileSync(actualPath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        id: slug,
        slug,
        frontmatter: {
          ...data,
          results: Array.isArray(data.results) ? data.results : [],
        },
        content,
      } as unknown as CaseStudyItem
    } catch (_error) {
      // พิกัดจัดการข้อผิดพลาดโดย นายเอ็มซ่ามากส์: คืนค่า null เพื่อให้ UI จัดการผ่าน notFound() อย่างมืออาชีพ
      console.error(`[AEM-SYSTEM]: พิกัดกรณีศึกษา ${slug} เกิดข้อผิดพลาดเชิงโครงสร้าง`)
      return null
    }
  }
)
