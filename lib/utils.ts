/** @format */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/*
 * cn (Class Name Merger)
 * ฟังก์ชันสำหรับจัดการชื่อคลาสของ Tailwind
 * ช่วยแก้ปัญหาเรื่องคลาสที่ซ้อนทับกันหรือขัดกันเอง
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*
 * formatThaiDate
 * ฟังก์ชันแปลงวันที่เป็นรูปแบบไทย (เช่น 18 มกราคม 2569)
 * @param date วันที่ที่ต้องการแปลง (string | Date)
 */
export function formatThaiDate(date: string | Date): string {
  const targetDate = new Date(date)

  // ตรวจสอบความถูกต้องของข้อมูลวันที่ก่อนประมวลผล
  if (isNaN(targetDate.getTime())) return ""

  return targetDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
