/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { CaseStudyItem } from "@/types"

/* -------------------------------------------------------------------------- */
/* การกำหนดพิกัดและเส้นทางระบบ (System Path Configuration)                           */
/* -------------------------------------------------------------------------- */

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies")

/* -------------------------------------------------------------------------- */
/* ชุดคำสั่งจัดการข้อมูลหลัก (Core Management Functions)                           */
/* -------------------------------------------------------------------------- */

/**
 * ดึงรายการ Slug ทั้งหมดจากระบบไฟล์
 * วัตถุประสงค์: ใช้สำหรับฟังก์ชัน generateStaticParams ในหน้ารายละเอียดเพื่อทำ Static Site
 */
export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""))
}

/**
 * ดึงข้อมูลผลงานทั้งหมดพร้อมจัดเรียงลำดับ
 * [FIX]: เปลี่ยนชื่อให้เป็นมาตรฐานเดียวกับที่หน้า Page และ Home เรียกใช้
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

      // จัดกลุ่มข้อมูลเข้า frontmatter ให้ตรงตามนิยามโครงสร้างระบบ (Type Definition)
      return {
        id: slug,
        slug: slug,
        frontmatter: {
          title: data.title || "Untitled Project",
          client: data.client || "",
          industry: data.industry || data.category || "General",
          category: data.category || "",
          excerpt: data.description || data.excerpt || "",
          thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
          date: data.date || "",
          results: data.results || [],
          keyFeatures: data.keyFeatures || [],
          service: data.service || "",
          isFeatured: data.isFeatured || false,
        },
        content: content,
      } as CaseStudyItem
    })
    // จัดลำดับข้อมูลโดยใช้วันที่ล่าสุดขึ้นก่อนเสมอ
    .sort((a, b) => {
      const dateA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0
      const dateB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0
      return dateB - dateA
    })

  return allCases
}

/**
 * [ALIAS]: สร้างฟังก์ชันสำรองเพื่อรองรับการเรียกใช้แบบเดิมในหน้าแรก (Home)
 * ป้องกัน Error: getCaseStudiesMetadata is not a function
 */
export const getCaseStudiesMetadata = getAllCaseStudies

/**
 * ดึงข้อมูลผลงานล่าสุดตามจำนวนที่ต้องการ
 */
export async function getLatestCaseStudies(
  limit: number = 3
): Promise<CaseStudyItem[]> {
  const allCases = await getAllCaseStudies()
  return allCases.slice(0, limit)
}

/**
 * ดึงข้อมูลผลงานรายชิ้นแบบเจาะจงด้วยชื่อ Slug
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
        industry: data.industry || data.category || "General",
        category: data.category || "",
        excerpt: data.description || data.excerpt || "",
        thumbnail: data.thumbnail || "/images/blog/placeholder.webp",
        date: data.date || "",
        results: data.results || [],
        keyFeatures: data.keyFeatures || [],
        service: data.service || "",
        isFeatured: data.isFeatured || false,
      },
      content: content,
    } as CaseStudyItem
  } catch (error) {
    console.error(`Error loading case study data for: ${realSlug}`, error)
    return null
  }
}
