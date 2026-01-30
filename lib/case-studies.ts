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
 */

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")

/**
 * getAllCaseStudies: พิกัดดึงข้อมูลความสำเร็จทั้งหมดแบบ Dynamic
 * -------------------------------------------------------------------------
 * ใช้ระบบ cache เพื่อทำ Request Memoization สำหรับสมรรถนะระดับ 7
 */
export const getAllCaseStudies = cache(async (): Promise<CaseStudyItem[]> => {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    console.warn("[AEM-WARN]: Registry Point Missing -> content/case-studies")
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

        // มาตรฐานพิกัดข้อมูลกรณีศึกษา (Entity Structure)
        return {
          id: slug,
          slug,
          frontmatter: {
            title: data.title || "Untitled Strategic Project",
            client: data.client || "Secret Client",
            industry: data.industry || data.category || "General Industry",
            category: data.category || "Specialist System",
            excerpt:
              data.excerpt ||
              data.description ||
              "อยู่ระหว่างการสรุปผลเชิงเทคนิค...",
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

    // Strategic Timeline Sorting: เรียงตามความสดใหม่ของข้อมูล
    return allData.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
  } catch (error) {
    console.error("[AEM-ERROR]: พิกัดการดึงกรณีศึกษาล้มเหลว:", error)
    return []
  }
})

/**
 * getCaseStudyBySlug: เจาะพิกัดข้อมูลความสำเร็จรายโปรเจกต์
 */
export const getCaseStudyBySlug = cache(
  async (slug: string): Promise<CaseStudyItem | null> => {
    try {
      const paths = [
        path.join(CASE_STUDIES_DIR, `${slug}.mdx`),
        path.join(CASE_STUDIES_DIR, `${slug}.md`),
      ]

      const actualPath = paths.find((p) => fs.existsSync(p))
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
      console.error(`[AEM-ERROR]: โครงสร้างไฟล์ ${slug} ผิดปกติ:`, error)
      return null
    }
  }
)
