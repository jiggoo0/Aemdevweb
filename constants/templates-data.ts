/** @format */

// 1. นำเข้า Type กลาง และทำการ Export ออกไปเพื่อให้ไฟล์อื่นที่ Import จากที่นี่ไม่พัง
import { TemplateItem, CategoryInfo } from "@/types"
export type { TemplateItem, CategoryInfo } // ✅ เพิ่มบรรทัดนี้เพื่อส่งต่อ Type

// ⬇️ Import ข้อมูลจากไฟล์ย่อย
import { temp_eco_01 } from "@/constants/template/temp_eco_01"
import { temp_fb_01 } from "@/constants/template/temp_fb_01"
import { temp_svc_01 } from "@/constants/template/temp_svc_01"
import { temp_hb_01 } from "@/constants/template/temp_hb_01"

// --------------------------------------------------------
// 2. Define Categories
// --------------------------------------------------------
export const categoriesData: CategoryInfo[] = [
  {
    slug: "sale-page",
    name: "Sale Page & E-Commerce",
    description: "เทมเพลตสำหรับขายของออนไลน์ เน้นปิดการขายไว รองรับ Pixel/API",
    themeColor: "emerald",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    description:
      "ร้านอาหาร คาเฟ่ และธุรกิจเครื่องดื่ม ฟังก์ชันจองโต๊ะและเมนูออนไลน์",
    themeColor: "amber",
  },
  {
    slug: "corporate",
    name: "Corporate & Services",
    description: "บริษัท องค์กร และงานบริการ สร้างภาพลักษณ์ความน่าเชื่อถือ",
    themeColor: "blue",
  },
  {
    slug: "health-beauty",
    name: "Health & Beauty",
    description: "คลินิก สปา และสินค้าความงาม ดีไซน์สะอาดตา ดูพรีเมียม",
    themeColor: "rose",
  },
]

// --------------------------------------------------------
// 3. Central Registry
// --------------------------------------------------------
export const templatesData: TemplateItem[] = [
  temp_eco_01 as TemplateItem,
  temp_fb_01 as TemplateItem,
  temp_svc_01 as TemplateItem,
  temp_hb_01 as TemplateItem,
]

// --------------------------------------------------------
// 4. Helper Functions
// --------------------------------------------------------
export const getAllCategories = (): CategoryInfo[] => categoriesData

export const getCategoryInfo = (slug: string): CategoryInfo | undefined => {
  return categoriesData.find((c) => c.slug === slug)
}

export const getTemplatesByCategory = (
  categorySlug: string
): TemplateItem[] => {
  if (!categorySlug || categorySlug === "all") return templatesData
  return templatesData.filter((t) => t.category === categorySlug)
}

export const getTemplateBySlug = (slug: string): TemplateItem | undefined => {
  return templatesData.find((t) => t.slug === slug)
}

export const getFeaturedTemplates = (): TemplateItem[] => {
  // ✅ ใช้ Optional Chaining ป้องกันค่าว่าง
  return templatesData.filter((t) => t.isBestSeller || t.isNew || t.isPopular)
}

export const getRelatedTemplates = (
  currentSlug: string,
  category: string,
  limit: number = 3
): TemplateItem[] => {
  return templatesData
    .filter((t) => t.category === category && t.slug !== currentSlug)
    .slice(0, limit)
}
