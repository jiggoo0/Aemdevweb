/** @format */

import { TemplateMetadata } from "@/types/template"

/**
 * ดึงรายการข้อมูลพื้นฐานของเทมเพลตทั้งหมด
 * ใช้สำหรับการแสดงผลบนหน้า Marketplace (Grid Card)
 * จัดเตรียมข้อมูลให้พร้อมใช้เพื่อให้ค่า LCP ต่ำกว่า 1 วินาที
 */
export async function getAllTemplates(): Promise<TemplateMetadata[]> {
  // ข้อมูลส่วนนี้ออกแบบมาให้ย้ายไปเก็บที่ Database หรือระบบจัดการเนื้อหาได้ทันทีในอนาคต
  const templates: TemplateMetadata[] = [
    {
      id: "hotelresort",
      name: "Luxury Hotel & Resort",
      category: "hotel",
      thumbnail: "/images/templates/hotelresort.webp",
      description:
        "โครงสร้างพรีเมียมสำหรับธุรกิจที่พักที่เน้นภาพลักษณ์และความน่าเชื่อถือ",
    },
    {
      id: "cleaningpro",
      name: "Cleaning Service Pro",
      category: "service",
      thumbnail: "/images/templates/cleaningpro.webp",
      description: "ระบบจองบริการทำความสะอาดที่เน้นความกระชับและใช้งานง่าย",
    },
    {
      id: "facebookadsexpert",
      name: "Facebook Ads Expert",
      category: "marketing",
      thumbnail: "/images/templates/facebookadsexpert.webp",
      description:
        "หน้า Landing Page สำหรับผู้เชี่ยวชาญด้านการยิงโฆษณาที่เน้นการปิดการขาย",
    },
    {
      id: "shopmasterpro",
      name: "Shop Master Pro",
      category: "ecommerce",
      thumbnail: "/images/templates/shopmasterpro.webp",
      description:
        "โครงสร้างร้านค้าออนไลน์ที่เน้นการจัดวางหมวดหมู่สินค้าอย่างเป็นระบบ",
    },
  ]

  return templates
}

/**
 * ดึงข้อมูลเนื้อหาภายใน (Dynamic Data) ของแต่ละเทมเพลตตามไอดี (Slug)
 * ใช้การดึงข้อมูลเฉพาะส่วนที่จำเป็นเพื่อให้ไฟล์หลักมีขนาดเล็กที่สุด
 */
export async function getTemplateData(slug: string) {
  if (!slug) return null

  try {
    /** * แก้ไขจุดเสี่ยง: เปลี่ยนชื่อตัวแปรจาก 'module' เป็น 'tplModule'
     * เพื่อป้องกันการสับสนกับคำสงวน (Reserved Word) ของระบบจัดการไฟล์ในบาง Browser
     */
    const tplModule = await import(
      `@/app/(marketing)/templates/_components/${slug}/data`
    )

    // คืนค่าก้อนข้อมูลที่ Export ออกมาจากไฟล์ data.ts ของแต่ละเทมเพลต
    return tplModule.data || null
  } catch (error) {
    // แจ้งเตือนผ่านหน้าจอดำ (Console) หากระบุชื่อเทมเพลตผิดหรือไม่พบพิกัดไฟล์
    console.error(
      `[Template Error]: ไม่สามารถดึงข้อมูลของ ${slug} ได้ ตรวจสอบการสะกดชื่อโฟลเดอร์ให้ตรงกับ ID`,
      error
    )
    return null
  }
}
