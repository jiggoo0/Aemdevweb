/** @format */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button: Speed Edition
 * ส่วนประกอบ: ออกแบบมาเพื่อสร้างการตอบสนองที่ลื่นไหลและดูแพง
 * จุดเด่น: ใช้ระบบแสง Aurora เพื่อดึงดูดสายตาไปยังจุดที่ต้องการให้ลูกค้ากด
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 select-none italic",
  {
    variants: {
      variant: {
        // Default: สีเขียว Emerald Za-Maks สื่อถึงความเร็วและผลลัพธ์ที่จับต้องได้
        default:
          "bg-emerald-500 text-slate-950 shadow-aurora hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",

        // Aurora: สไตล์เน้นความซิ่งเป็นพิเศษ สำหรับจุดสำคัญของหน้าเว็บ
        aurora:
          "bg-emerald-400 text-slate-950 shadow-aurora hover:bg-white hover:shadow-[0_0_30px_rgba(130,255,180,0.6)]",

        // Premium: ไล่เฉดสีเพื่อเพิ่มความน่าเชื่อถือให้กับบริการระดับสูง
        premium:
          "bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-400 bg-[length:200%_auto] text-white shadow-lg hover:bg-right transition-[background-position,all]",

        // Outline: แบบเส้นขอบที่ดูสะอาดตา สำหรับข้อมูลประกอบทั่วไป
        outline:
          "border-2 border-slate-200 bg-transparent text-slate-600 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-50",

        ghost: "text-slate-500 hover:text-emerald-600 hover:bg-emerald-50/50",

        destructive:
          "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/20",

        link: "text-emerald-600 underline-offset-8 hover:underline p-0 h-auto lowercase tracking-normal font-medium",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 rounded-xl px-5 text-[10px]",
        lg: "h-20 rounded-[2.5rem] px-12 text-lg font-black tracking-[0.2em]",
        icon: "size-14",
        "icon-sm": "size-10",
        "icon-lg": "size-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
