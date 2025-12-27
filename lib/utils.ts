import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ✅ ฟังก์ชัน cn ใช้รวม class หลายตัวเข้าด้วยกัน
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
