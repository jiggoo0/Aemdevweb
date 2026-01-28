/** @format */
import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Textarea: Glass Edition
 * ดีไซน์: ยกระดับกล่องพิมพ์ข้อความด้วยพื้นผิวกระจกพรีเมียมและแสงเงาที่นุ่มนวล
 * เป้าหมาย: ออกแบบมาให้อ่านง่าย สบายตา และใช้งานสะดวกในทุกอุปกรณ์
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        // รูปแบบพื้นฐาน: กระจกโปร่งแสง (Glassmorphism)
        "flex min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base transition-all duration-500",
        "font-body resize-none text-white placeholder:font-medium placeholder:text-slate-500",

        // สถานะตอนใช้งาน (Focus): แสงสีเขียว Emerald นุ่มนวล
        "focus-visible:shadow-aurora focus-visible:border-emerald-500/50 focus-visible:bg-white/10 focus-visible:ring-0 focus-visible:outline-none",

        // สถานะปิดการใช้งาน และขนาดหน้าจอต่าง ๆ
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lg:text-base",

        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
