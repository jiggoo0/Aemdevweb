/** @format */

export interface ReviewData {
  id: string
  name: string
  role: string
  comment: string
  businessType: string
  rating: number
  avatar: string
}

export const reviews: ReviewData[] = [
  {
    id: "rev-01",
    name: "คุณธนกฤต",
    role: "เจ้าของธุรกิจ WoodCraft Industrial",
    comment:
      "ดีไซน์ Brutalist ของ AEM ช่วยให้แบรนด์วัสดุก่อสร้างของผมดูหนักแน่นและต่างจากคู่แข่งชัดเจนมากครับ ลูกค้าทักขอใบเสนอราคาเพิ่มขึ้นจริง",
    businessType: "หจก./บริษัท",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: "rev-02",
    name: "คุณเมษา",
    role: "Founder of Neighbor Café",
    comment:
      "ชอบความไวของเว็บมากค่ะ Next.js 15 ทำงานได้ลื่นไหล ลูกค้าเปิดดูเมนูอาหารผ่านมือถือได้ทันใจ ไม่เสียโอกาสการขายเลย",
    businessType: "ร้านอาหาร",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: "rev-03",
    name: "ดร. สมเกียรติ",
    role: "ผู้อำนวยการคลินิก Wellness Center",
    comment:
      "ระบบนัดหมายที่ออกแบบมาเน้นความเป็นมนุษย์ (Human-Centric) ทำให้คนไข้ใช้งานง่าย ลดภาระหน้าเคาน์เตอร์ไปได้เยอะครับ",
    businessType: "หจก./บริษัท",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
  {
    id: "rev-04",
    name: "คุณกิตติศักดิ์",
    role: "เจ้าของธุรกิจ Startup",
    comment:
      "แพ็กเกจ Starter คุ้มค่ามากครับ ได้เว็บคุณภาพระดับบริษัทใหญ่ในราคาที่เริ่มต้นได้จริง ช่วยให้ธุรกิจผมออนไลน์ได้ในไม่กี่วัน",
    businessType: "SME",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  },
]

export const getReviewsByBizType = (type: string): ReviewData[] => {
  return reviews.filter((r) => r.businessType === type)
}

export const getRandomReviews = (count: number): ReviewData[] => {
  return [...reviews].sort(() => 0.5 - Math.random()).slice(0, count)
}
