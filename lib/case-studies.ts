/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"
import { CaseStudyItem } from "@/types"

/**
 * AEMDEVWEB | ระบบจัดการกรณีศึกษาความสำเร็จ 2026
 * -------------------------------------------------------------------------
 * วางโครงสร้างระบบและจูนสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * มาตรฐาน: Technical SEO & Entity Authority
 */

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")

/**
 * [OPTIMIZED]: พิกัดดึงข้อมูลความสำเร็จทั้งหมด
 * ใช้ระบบ cache เพื่อทำ Request Memoization ให้การโหลดพิกัดข้อมูลวาร์ปที่สุด
 */
export const getAllCaseStudies = cache(async (): Promise<CaseStudyItem[]> => {
  // ตรวจสอบพิกัดไดเรกทอรีเพื่อป้องกันระบบสะดุด
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    console.warn("[AEM-WARN]: ไม่พบพิกัดโฟลเดอร์ content/case-studies")
    return []
  }

  try {
    const files = fs.readdirSync(CASE_STUDIES_DIR)

    const allData = files
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
            industry: data.industry || data.category || "General Industry",
            category: data.category || "Specialist System",
            excerpt:
              data.excerpt || data.description || "อยู่ระหว่างการสรุปผล...",
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

    // เรียงพิกัดตามลำดับเวลา (Strategic Timeline Sorting)
    return allData.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
  } catch (error) {
    console.error(
      "[AEM-ERROR]: พิกัดการดึงข้อมูลความสำเร็จเกิดข้อผิดพลาด:",
      error
    )
    return []
  }
})

/**
 * getCaseStudyBySlug - เจาะพิกัดข้อมูลความสำเร็จรายชิ้น
 */
export const getCaseStudyBySlug = cache(
  async (slug: string): Promise<CaseStudyItem | null> => {
    try {
      const mdxPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
      const mdPath = path.join(CASE_STUDIES_DIR, `${slug}.md`)

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
    } catch (error) {
      console.error(
        `[AEM-ERROR]: พิกัดกรณีศึกษา ${slug} มีปัญหาเชิงโครงสร้าง:`,
        error
      )
      return null
    }
  }
)
