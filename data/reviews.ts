/** @format */

export interface Review {
  id: string
  name: string
  businessType: string
  avatar: string
  rating: number
  comment: string
  projectYear: string
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "คุณมานพ สมใจ",
    businessType: "หจก. เอสเอ็มเจ ก่อสร้าง",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manop",
    rating: 5,
    comment:
      "ประทับใจมากครับ งานเว็บดูเป็นมืออาชีพขึ้นเยอะเลย ระบบหลังบ้านใช้งานง่ายช่วยให้ทีมงานผมอัปเดตงานก่อสร้างให้ลูกค้าดูได้สะดวกขึ้นมาก",
    projectYear: "2024",
  },
  {
    id: "2",
    name: "คุณธนพร บุญสวน",
    businessType: "BaanSuan Private Resort",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thanaporn",
    rating: 5,
    comment:
      "ตั้งแต่เปลี่ยนมาใช้เว็บใหม่ ยอดจองห้องพักตรงผ่านหน้าเว็บเพิ่มขึ้นอย่างเห็นได้ชัด ระบบจองเสถียรและดูน่าเชื่อถือ ขอบคุณที่ใส่ใจทุกรายละเอียดค่ะ",
    projectYear: "2024",
  },
  {
    id: "3",
    name: "คุณวิทวัส แสงทอง",
    businessType: "SME - พรทิพย์ สโตร์",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wittawat",
    rating: 5,
    comment:
      "ที่ปรึกษาดีมากครับ ไม่ใช่แค่ทำเว็บให้จบไป แต่ช่วยแนะนำเรื่องการตลาดออนไลน์และ SEO ให้ด้วย ตอนนี้ชื่อร้านติดหน้าแรก Google แล้วครับ",
    projectYear: "2023",
  },
  {
    id: "4",
    name: "คุณเกรียงไกร มั่นคง",
    businessType: "หจก. กู้ดบิลด์ ดีไซน์",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kriang",
    rating: 4,
    comment:
      "งานเนี้ยบและตรงตามสถาปัตยกรรมที่คุยกันไว้ครับ ระบบมีความเสถียรสูง คุ้มค่ากับงบประมาณที่บริษัทตั้งไว้มากครับ",
    projectYear: "2024",
  },
  {
    id: "5",
    name: "คุณอลิสา ใจดี",
    businessType: "CEO - Alisa Catering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alisa",
    rating: 5,
    comment:
      "เว็บสวยทันสมัยมากค่ะ ลูกค้าส่วนใหญ่ชมว่าเว็บดูแพงและเข้าใช้งานง่ายจากมือถือ ช่วยส่งเสริมภาพลักษณ์แบรนด์พรีเมียมของเราได้ดีมาก",
    projectYear: "2023",
  },
  {
    id: "6",
    name: "คุณประเสริฐ ยั่งยืน",
    businessType: "บจก. ไทยโลจิสติกส์ พลัส",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prasert",
    rating: 5,
    comment:
      "ระบบ Tracking ที่เขียนให้ทำงานได้แม่นยำมากครับ ช่วยลดภาระฝ่ายแอดมินไปได้เยอะมาก เป็นพาร์ทเนอร์ที่ทำงานด้วยแล้วสบายใจที่สุดครับ",
    projectYear: "2024",
  },
]
