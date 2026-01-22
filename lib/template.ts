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
 * กวาดหาเทมเพลตทั้งหมดพร้อมระบบตรวจสอบความถูกต้องของข้อมูล (Validation)
 */
export async function getAllTemplates(): Promise<TemplateMeta[]> {
  if (!fs.existsSync(TEMPLATE_CONTENT_PATH)) {
    console.warn("⚠️ [Specialist Warning]: Template content path not found.")
    return []
  }

  const allTemplates: TemplateMeta[] = []

  try {
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

            // ✅ [FIXED]: ป้องกัน Build Error โดยตรวจสอบว่ามี category และ slug ก่อนเรียก toLowerCase()
            const safeCategory = (
              metaData.category ||
              category ||
              "uncategorized"
            ).toLowerCase()
            const safeSlug = (metaData.slug || slug || "untitled").toLowerCase()

            allTemplates.push({
              ...metaData,
              id: metaData.id || `temp-${safeSlug}`, // Fallback ID
              slug: safeSlug,
              category: safeCategory,
              name: metaData.name || "Untitled Template",
              image: metaData.image || "/images/og-image.png",
              description: metaData.description || "",
              price: metaData.price || 0,
            })
          } catch (error) {
            console.error(`❌ Error parsing meta.json for ${slug}:`, error)
          }
        }
      }
    }
  } catch (globalError) {
    console.error("❌ Global File System Error:", globalError)
  }

  // จัดเรียงตามความนิยม
  return allTemplates.sort((a, b) => (b.isPopular ? 1 : -1))
}

/**
 * 🔍 2. getTemplateBySlug
 * ดึงข้อมูลเชิงลึกพร้อม Safe Path Resolve
 */
export async function getTemplateBySlug(
  slug: string
): Promise<TemplateData | null> {
  if (!slug) return null

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
    return { ...meta, content: content || "" }
  } catch (error) {
    console.error(`❌ Error reading MDX for ${slug}:`, error)
    return { ...meta, content: "" }
  }
}

/**
 * 🏷️ 3. getAllCategories
 * รวมรายชื่อหมวดหมู่แบบ Unique พร้อม Safe Mapping
 */
export async function getAllCategories(): Promise<string[]> {
  const templates = await getAllTemplates()
  // ✅ กรองเฉพาะตัวที่มีค่าจริงก่อนประมวลผล
  return Array.from(
    new Set(
      templates
        .map((t) => (t.category ? t.category.toLowerCase() : ""))
        .filter((cat) => cat !== "")
    )
  )
}

/**
 * 🔗 4. getTemplatesByServiceCategory
 */
export async function getTemplatesByServiceCategory(
  serviceCategory: string
): Promise<TemplateMeta[]> {
  if (!serviceCategory) return []

  const allTemplates = await getAllTemplates()
  const searchCat = serviceCategory.toLowerCase()

  return allTemplates.filter((template) => {
    // ✅ Safe Access สำหรับหมวดหมู่และแท็ก
    const templateCat = (template.category || "").toLowerCase()
    const hasMatchingTag = template.tags?.some(
      (tag) => tag && tag.toLowerCase() === searchCat
    )

    return templateCat === searchCat || hasMatchingTag
  })
}
