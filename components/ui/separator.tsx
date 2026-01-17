/** @format */
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * ⚡ Separator: Luminous Glow Edition
 * ปรับปรุง: ใช้ Gradient และแสง Aurora เพื่อสร้างการแบ่งสัดส่วนที่ดู "ไบร์ท" และพรีเมียม
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 transition-opacity duration-500",
        // 🌌 Luminous Gradient Base
        orientation === "horizontal"
          ? "h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          : "h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent",

        // ✨ Aurora Accent (Subtle Glow)
        "after:bg-aurora-cyan/20 relative transition-all after:absolute after:inset-0 after:opacity-0 after:blur-[1px] hover:after:opacity-100",

        className
      )}
      {...props}
    />
  )
}

export { Separator }
