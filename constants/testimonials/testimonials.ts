/** @format */

export interface TestimonialItem {
  id: number
  content: string
  author: string
  role: string
  rating: number
  image?: string
  company?: string
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    content:
      "ตั้งแต่ทำเว็บกับคุณเอ็ม ยอดทักไลน์เพิ่มขึ้นแบบเห็นได้ชัด ลูกค้าชมว่าเว็บสวยและโหลดเร็วมากครับ",
    author: "คุณนนท์",
    role: "เจ้าของร้านอาหารญี่ปุ่น",
    rating: 5,
    company: "Sushi Master",
  },
  {
    id: 2,
    content:
      "ชอบระบบหลังบ้านที่จัดการง่าย ไม่ซับซ้อน ทีมงานซัพพอร์ตดีมาก ตอบไว แก้ปัญหาให้ทันที",
    author: "คุณส้ม",
    role: "SME เจ้าของแบรนด์เสื้อผ้า",
    rating: 5,
  },
  {
    id: 3,
    content:
      "คุ้มค่าราคามากครับ งานเนี้ยบระดับ Corporate แต่ราคา SME แนะนำเลยครับสำหรับคนที่หาคนทำเว็บมืออาชีพ",
    author: "คุณวิทวัส",
    role: "Business Consultant",
    rating: 5,
    company: "TechStart CEO",
  },
  // ... เพิ่มให้ครบ 12 รายการตามต้องการ
]
