/** @format */

/**
 * 📂 Project Interface
 * ใช้สำหรับหน้า Catalog, Portfolio และ Sitemap
 * อัปเดตให้รองรับฟิลด์ที่คอมโพเนนต์ CatalogProjectCard เรียกใช้
 */
export interface Project {
  id: string
  title: string
  description: string // ✅ เพิ่มเพื่อให้แสดงคำบรรยายใต้ภาพได้
  tags: string[]
  image: string
  category: string
  templateId: string // ✅ ใช้สำหรับสร้าง Link ไปยังหน้า Landing (/landing/[template-id])
  serviceSlug?: string // Optional: เก็บไว้เพื่อ Backward Compatibility
  link?: string // ลิงก์ภายนอก (ถ้ามี)

  // ✅ เพิ่มเพื่อรองรับการโชว์ตัวเลขสถิติในหน้า Card
  stats?: {
    label: string
    value: string
  }
}
