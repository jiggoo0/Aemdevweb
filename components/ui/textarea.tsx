/** @format */
import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * 📝 Textarea: Luminous Glass Edition
 * ยกระดับกล่องพิมพ์ข้อความด้วยพื้นผิวกระจกพรีเมียมและแสง Aurora
 * ออกแบบมาให้อ่านง่ายและดูสะอาดตา (Weightless Design)
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        // Base Style: Glassmorphism Surface
        "flex min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base transition-all duration-500",
        "font-anuphan resize-none text-white placeholder:font-medium placeholder:text-slate-500",

        // Focus State: Aurora Electric Glow
        "focus-visible:border-aurora-cyan/50 focus-visible:shadow-aurora-glow focus-visible:bg-white/10 focus-visible:ring-0 focus-visible:outline-none",

        // Disabled & States
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
