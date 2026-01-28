/** @format */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * badgeVariants - กำหนดรูปแบบการแสดงผลของป้ายกำกับ
 * ออกแบบมาเพื่อให้ดูทันสมัย อ่านง่าย และไม่ดูเชย
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-50 uppercase italic tracking-wider whitespace-nowrap",
  {
    variants: {
      variant: {
        // รูปแบบมาตรฐาน: สีเขียว Emerald Za-Maks สื่อถึงความเร็วและคุณภาพ
        default:
          "border-transparent bg-emerald-500 text-white shadow-sm hover:bg-emerald-600",
        // รูปแบบรอง: เน้นความเรียบหรู ดูเข้าถึงง่าย
        secondary:
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
        // รูปแบบแจ้งเตือน: ใช้เมื่อต้องการเน้นจุดที่ต้องระวัง
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        // รูปแบบเส้นขอบ: สำหรับงานดีไซน์ที่เน้นความโปร่งและสะอาดตา
        outline:
          "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900",
        // รูปแบบพรีเมียม: ใช้สำหรับเน้นบริการพิเศษหรือตัวเลือกที่คุ้มค่าที่สุด
        premium:
          "border-transparent bg-slate-950 text-emerald-400 shadow-aurora hover:bg-slate-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

/**
 * Badge Component - ป้ายกำกับอเนกประสงค์
 * สื่อสารข้อมูลสั้นๆ ให้ดูโดดเด่นและเป็นระเบียบในสไตล์ Specialist
 */
function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
