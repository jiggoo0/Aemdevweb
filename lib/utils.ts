/** @format */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 🛠️ ฟังก์ชันสำหรับจัดการ ClassName ของ Tailwind (Standard Shadcn)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 📅 ฟังก์ชันแปลงวันที่เป็นรูปแบบไทย (เช่น 16 มกราคม 2569)
 * @param date วันที่ที่ต้องการแปลง (string | Date)
 */
export function formatThaiDate(date: string | Date) {
  const targetDate = new Date(date)

  // ตรวจสอบว่า Date valid หรือไม่
  if (isNaN(targetDate.getTime())) return ""

  return targetDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
