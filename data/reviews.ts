/** @format */

export interface Review {
  id: string
  name: string
  businessType: string
  avatar: string
  rating: number
  comment: string
  projectYear: string
  highlight?: string // เพิ่มจุดเด่นสั้นๆ ให้ดูสะดุดตา
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "ช่างมานพ",
    businessType: "หจก. เอสเอ็มเจ ก่อสร้าง",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manop",
    rating: 5,
    highlight: "จบปัญหาเว็บล่มเวลาส่งงาน",
    comment:
      "สารภาพว่าตอนแรกกลัวจะใช้ไม่เป็น เพราะผมไม่เก่งคอม แต่ทีมงานออกแบบมาให้ใช้ง่ายมาก แค่กดถ่ายรูปหน้างานจากมือถือก็อัปเดตงานให้ลูกค้าดูได้ทันที ลูกค้าชมว่าเราดูเป็นมืออาชีพกว่าเจ้าอื่นเยอะเลยครับ",
    projectYear: "2024",
  },
  {
    id: "2",
    name: "คุณฝน",
    businessType: "เจ้าของ BaanSuan Resort",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thanaporn",
    rating: 5,
    highlight: "เลิกเสียค่าคอมฯ ให้เอเจนซี่",
    comment:
      "เมื่อก่อนต้องพึ่งแต่แอปจองที่พักอย่างเดียว โดนหักค่าคอมฯ เยอะมาก พอมีเว็บตัวเอง ลูกค้าทักมาจองตรงเยอะขึ้นมากค่ะ ระบบนัดหมายดูง่ายไม่ซ้อนกัน คุ้มค่าที่ลงทุนทำจริงๆ ค่ะ",
    projectYear: "2024",
  },
  {
    id: "3",
    name: "เฮียวิท",
    businessType: "พรทิพย์ สโตร์ (ขายส่งวัสดุ)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wittawat",
    rating: 5,
    highlight: "ติดหน้าแรก Google จริง",
    comment:
      "ผมโดนหลอกทำเว็บมา 2 ที่แล้วครับ ไม่เคยได้เรื่องเลย จนมาเจอที่นี่ เขาไม่ได้แค่ทำเว็บ แต่เขาสอนผมดูหลังบ้านด้วย ตอนนี้คนแถวนี้ค้นหาคำว่า 'วัสดุก่อสร้าง' เจอร้านผมเป็นร้านแรก ยอดโทรเข้าเพิ่มขึ้นทุกวัน",
    projectYear: "2024",
  },
  {
    id: "4",
    name: "คุณเกรียง",
    businessType: "สถาปนิก - กู้ดบิลด์ ดีไซน์",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kriang",
    rating: 5,
    highlight: "เข้าใจภาษาช่าง",
    comment:
      "ที่ประทับใจที่สุดคือคุยกันรู้เรื่องครับ ผมเป็นสถาปนิกจะเน้นเรื่องสัดส่วนและความเนี้ยบ ซึ่งทีมนี้เก็บรายละเอียดได้หมด เหมือนสร้างบ้านจริงๆ ให้กับธุรกิจของผมเลยครับ",
    projectYear: "2024",
  },
  {
    id: "5",
    name: "คุณจอย",
    businessType: "Alisa Catering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alisa",
    rating: 5,
    highlight: "เว็บสวยจนลูกค้าเกรงใจ",
    comment:
      "ลูกค้าส่วนใหญ่บอกว่าเห็นเว็บแล้วรู้สึกว่าร้านเราสะอาดและมีมาตรฐานสูงมาก ทำให้จอยไม่ต้องเหนื่อยต่อราคาบ่อยๆ เพราะเว็บมันสร้างความน่าเชื่อถือไปก่อนที่เขาจะทักมาหาเราเสียอีกค่ะ",
    projectYear: "2023",
  },
  {
    id: "6",
    name: "คุณประเสริฐ",
    businessType: "บจก. ไทยโลจิสติกส์ พลัส",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prasert",
    rating: 5,
    highlight: "ระบบแม่นยำ ไว้ใจได้",
    comment:
      "งานระบบโลจิสติกส์มันซับซ้อน แต่ทีมนี้จัดการได้อยู่หมัด ระบบ Tracking แทบไม่เคยเอ๋อเลยครับ ช่วยลดงานแอดมินที่ต้องคอยตอบแชทไปได้เกินครึ่ง ทำงานด้วยแล้วสบายใจเหมือนมีพาร์ทเนอร์ไอทีเก่งๆ อยู่ข้างตัว",
    projectYear: "2024",
  },
]
