/** @format */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 🛠️ cn (Class Name Merger)
 * ฟังก์ชันสำหรับจัดการ ClassName ของ Tailwind (Standard Shadcn/ui)
 * ช่วยแก้ปัญหาเรื่อง Class ที่ซ้อนทับกันด้วย twMerge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 📅 formatThaiDate
 * ฟังก์ชันแปลงวันที่เป็นรูปแบบไทย (เช่น 18 มกราคม 2569)
 * @param date วันที่ที่ต้องการแปลง (string | Date)
 */
export function formatThaiDate(date: string | Date): string {
  const targetDate = new Date(date)

  // ตรวจสอบความถูกต้องของ Date (Sanity Check)
  if (isNaN(targetDate.getTime())) return ""

  return targetDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
