/** @format */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

/**
 * 💡 AppProvider (Global Architecture)
 * ศูนย์กลางการควบคุมสถานะ (State) ของแอปพลิเคชัน
 * ปรับปรุง: รองรับระบบ Luminous Midnight ที่ต้องการความเสถียรของธีมสี
 */

export function AppProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      // ใช้ class ในการสลับธีมเพื่อให้สอดคล้องกับ Tailwind v4
      attribute="class"
      // 🌙 บังคับโหมด Dark เป็นหลักเพื่อขับเน้นแสง Aurora Glow ให้สว่างและพรีเมียมที่สุด
      defaultTheme="dark"
      // 🔑 ปิดการดึงค่าจาก System เพื่อรักษาเอกลักษณ์ "Luminous Midnight" ของแบรนด์
      enableSystem={false}
      // ⚡ ป้องกันการกระตุกของสี (Flicker) ระหว่างเปลี่ยนหน้า
      disableTransitionOnChange
      {...props}
    >
      {/* Relative wrapper: เพื่อรองรับ Global Background Elements 
         เช่น แสงฟุ้ง หรือ Noise Overlay ที่ประกาศในระดับ Layout 
      */}
      <div className="relative flex min-h-screen flex-col">{children}</div>
    </NextThemesProvider>
  )
}
