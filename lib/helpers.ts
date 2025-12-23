/**
 * lib/helpers.ts
 * รวมฟังก์ชันอรรถประโยชน์ (Utility Functions) สำหรับโปรเจกต์ aemdevweb
 */

/**
 * 1. ฟังก์ชันสำหรับรวม Tailwind Classes (คล้ายกับ clsx หรือ tailwind-merge)
 * ช่วยให้การจัดการเงื่อนไขของ Class ทำได้สะอาดขึ้น
 */
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(" ")
}

/**
 * 2. ฟังก์ชันสำหรับจัดการแสดงผลวันที่ให้เป็นรูปแบบไทย
 * เพิ่มการตรวจสอบความถูกต้องของ Date เพื่อป้องกัน Runtime Error
 */
export const formatDate = (dateString: string | Date): string => {
  if (!dateString) return "-"

  try {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString

    // ตรวจสอบว่าเป็น Invalid Date หรือไม่
    if (isNaN(date.getTime())) return String(dateString)

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    return date.toLocaleDateString("th-TH", options)
  } catch (error) {
    console.error("Format Date Error:", error)
    return String(dateString)
  }
}

/**
 * 3. ฟังก์ชันสำหรับตัดข้อความ (Truncate)
 * ปรับปรุงให้รองรับกรณีค่าที่ส่งมาไม่ใช่ String
 */
export const truncateText = (
  text: string | undefined | null,
  length: number
): string => {
  if (!text) return ""
  if (text.length <= length) return text
  return text.substring(0, length).trim() + "..."
}

/**
 * 4. ฟังก์ชันสำหรับการทำ Smooth Scroll
 * เพิ่ม Offset เพื่อไม่ให้หัวข้อโดน Header ทับ (กรณีมี Sticky Header)
 */
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * 5. ฟังก์ชันสำหรับสร้าง ID แบบสุ่ม
 * ใช้ค่าเวลาผสมเพื่อลดโอกาสซ้ำ (Collision)
 */
export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 6. ฟังก์ชันสำหรับจัดหมวดหมู่ Portfolio (Helper เฉพาะทาง)
 */
export const getCategoryLabel = (category: string): string => {
  const mapping: Record<string, string> = {
    SME: "ธุรกิจขนาดเล็ก",
    Restaurant: "ร้านอาหารและเครื่องดื่ม",
    Corporate: "ห้างหุ้นส่วน/บริษัท",
  }
  return mapping[category] || category
}
