/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * 📝 Template Interfaces
 */
export interface TemplateMeta {
  id: string
  name: string
  slug: string
  category: string
  price: number
  salePrice?: number
  isPopular?: boolean
  image: string
  description: string
  themeColor?: "emerald" | "blue" | "rose" | "amber" | "purple"
  features?: string[]
  tags?: string[]
}

export interface TemplateData extends TemplateMeta {
  content: string // MDX Content
}

// 📂 กำหนดเส้นทางไปยังแหล่งเก็บข้อมูล (Content Source)
const TEMPLATE_CONTENT_PATH = path.join(process.cwd(), "content/template")

/**
 * 🛠️ 1. getAllTemplates
 * กวาดหาเทมเพลตทั้งหมดจากโฟลเดอร์ content/template
 */
export async function getAllTemplates(): Promise<TemplateMeta[]> {
  if (!fs.existsSync(TEMPLATE_CONTENT_PATH)) {
    console.warn("⚠️ Template content path not found.")
    return []
  }

  const allTemplates: TemplateMeta[] = []

  const categories = fs
    .readdirSync(TEMPLATE_CONTENT_PATH)
    .filter((f) =>
      fs.statSync(path.join(TEMPLATE_CONTENT_PATH, f)).isDirectory()
    )

  for (const category of categories) {
    const categoryPath = path.join(TEMPLATE_CONTENT_PATH, category)
    const slugs = fs
      .readdirSync(categoryPath)
      .filter((f) => fs.statSync(path.join(categoryPath, f)).isDirectory())

    for (const slug of slugs) {
      const metaPath = path.join(categoryPath, slug, "meta.json")

      if (fs.existsSync(metaPath)) {
        try {
          const fileContent = fs.readFileSync(metaPath, "utf8")
          const metaData = JSON.parse(fileContent)

          allTemplates.push({
            ...metaData,
            slug: slug.toLowerCase(),
            category: category.toLowerCase(),
          })
        } catch (error) {
          console.error(`❌ Error parsing meta.json for ${slug}:`, error)
        }
      }
    }
  }

  return allTemplates.sort((a, b) => (b.isPopular ? 1 : -1))
}

/**
 * 🔍 2. getTemplateBySlug
 * ดึงข้อมูลเชิงลึกรายเทมเพลตพร้อมเนื้อหา MDX
 */
export async function getTemplateBySlug(
  slug: string
): Promise<TemplateData | null> {
  const templates = await getAllTemplates()
  const meta = templates.find((t) => t.slug === slug.toLowerCase())

  if (!meta) return null

  const mdxPath = path.join(
    TEMPLATE_CONTENT_PATH,
    meta.category,
    meta.slug,
    "index.mdx"
  )

  if (!fs.existsSync(mdxPath)) {
    return { ...meta, content: "" }
  }

  try {
    const fileContent = fs.readFileSync(mdxPath, "utf8")
    const { content } = matter(fileContent)
    return { ...meta, content }
  } catch (error) {
    console.error(`❌ Error reading MDX for ${slug}:`, error)
    return { ...meta, content: "" }
  }
}

/**
 * 🏷️ 3. getAllCategories
 * สรุปรายชื่อหมวดหมู่ทั้งหมดที่มีอยู่จริงในระบบไฟล์
 */
export async function getAllCategories(): Promise<string[]> {
  const templates = await getAllTemplates()
  return Array.from(new Set(templates.map((t) => t.category.toLowerCase())))
}

/**
 * 🔗 4. getTemplatesByServiceCategory (SPECIALIST ADDITION)
 * ดึงเทมเพลตที่สอดคล้องกับหมวดหมู่ของบริการ เพื่อระบบแนะนำที่แม่นยำ
 */
export async function getTemplatesByServiceCategory(
  serviceCategory: string
): Promise<TemplateMeta[]> {
  const allTemplates = await getAllTemplates()

  const searchCat = serviceCategory.toLowerCase()

  // 🎯 กรองเทมเพลตที่หมวดหมู่ตรงกัน หรือมี Tag ที่เกี่ยวข้องกับหมวดหมู่บริการนั้นๆ
  return allTemplates.filter((template) => {
    const templateCat = template.category.toLowerCase()
    const hasMatchingTag = template.tags?.some(
      (tag) => tag.toLowerCase() === searchCat
    )

    return templateCat === searchCat || hasMatchingTag
  })
}
