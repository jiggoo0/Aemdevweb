/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CaseStudyItem } from "@/types"

/* -------------------------------------------------------------------------- */
/* 1. พิกัดเส้นทางระบบ (System Path)                                           */
/* -------------------------------------------------------------------------- */

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")

/* -------------------------------------------------------------------------- */
/* 2. ฟังก์ชันจัดการพิกัดข้อมูลผลงาน (Core Functions)                              */
/* -------------------------------------------------------------------------- */

/**
 * ดึงรายการ Slug ทั้งหมด
 * ใช้สำหรับทำ Static Site Generation (SSG) ให้หน้าเว็บออนไลน์ได้ไวระดับปีศาจ
 */
export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

/**
 * ดึงพิกัดผลงานทั้งหมดพร้อมจัดเรียงลำดับ
 * [FIX]: มั่นใจว่าเลเยอร์ frontmatter ตรงตามพิกัดที่ระบบ Type ต้องการ
 */
export async function getAllCaseStudies(): Promise<CaseStudyItem[]> {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []

  const files = fs.readdirSync(CASE_STUDIES_DIR)

  const allCases = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(CASE_STUDIES_DIR, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx?$/, "")

      // จัดวางพิกัดข้อมูลให้กริบและปลอดภัย (Type-Safe Mapping)
      return {
        id: slug,
        slug: slug,
        frontmatter: {
          title: data.title || "Untitled Project",
          client: data.client || "",
          industry: data.industry || data.category || "General Business",
          category: data.category || "",
          excerpt: data.description || data.excerpt || "",
          thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
          date: data.date || "2026-01-01",
          results: data.results || [],
          keyFeatures: data.keyFeatures || [],
          service: data.service || "",
          isFeatured: data.isFeatured || false,
        },
        content: content,
      } as CaseStudyItem
    })
    // เรียงพิกัดวันที่ล่าสุดขึ้นก่อน (เปรียบเทียบ String โดยตรงเพื่อความแรง)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

  return allCases
}

/**
 * [ALIAS]: ฟังก์ชันชื่อสำรองเพื่อป้องกันพิกัด Error ในหน้าแรก
 */
export const getCaseStudiesMetadata = getAllCaseStudies

/**
 * ดึงพิกัดผลงานล่าสุดตามจำนวนที่ระบุ
 */
export async function getLatestCaseStudies(
  limit: number = 3
): Promise<CaseStudyItem[]> {
  const allCases = await getAllCaseStudies()
  return allCases.slice(0, limit)
}

/**
 * ดึงข้อมูลผลงานรายชิ้นแบบระบุพิกัด Slug
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudyItem | null> {
  if (!slug) return null

  const realSlug = slug.replace(/\.mdx?$/, "")
  const mdxPath = path.join(CASE_STUDIES_DIR, `${realSlug}.mdx`)
  const mdPath = path.join(CASE_STUDIES_DIR, `${realSlug}.md`)

  const actualPath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null

  if (!actualPath) return null

  try {
    const fileContent = fs.readFileSync(actualPath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      id: realSlug,
      slug: realSlug,
      frontmatter: {
        title: data.title || "Untitled Project",
        client: data.client || "",
        industry: data.industry || data.category || "General Business",
        category: data.category || "",
        excerpt: data.description || data.excerpt || "",
        thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
        date: data.date || "2026-01-01",
        results: Array.isArray(data.results) ? data.results : [],
        keyFeatures: data.keyFeatures || [],
        service: data.service || "",
        isFeatured: data.isFeatured || false,
      },
      content: content,
    } as CaseStudyItem
  } catch (error) {
    console.error(`พิกัด Error ในการโหลดไฟล์: ${realSlug}`, error)
    return null
  }
}
