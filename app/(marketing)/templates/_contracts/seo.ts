/** @format */

// ข้อกำหนดพื้นฐานที่ทุกเทมเพลตต้องมี
export interface SEOContract {
  seo: {
    title: string // หัวข้อที่จะไปแสดงบน Google
    description: string // คำอธิบายที่จะแสดงใต้ลิงก์
    keywords: string[] // คำค้นหาที่เกี่ยวข้อง
    ogImage?: string // รูปภาพเวลาแชร์ลงโซเชียล
    structuredData?: object // ข้อมูล JSON-LD สำหรับให้ AI และ Google เข้าใจเนื้อหา
  }
}
