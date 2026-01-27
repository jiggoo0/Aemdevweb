/** @format */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button: Luminous Tech Edition
 * พิกัด: ออกแบบมาเพื่อสร้าง Micro-interaction ที่มีความซ่าและพรีเมียม
 * ยุทธศาสตร์: ใช้ระบบแสง Aurora เพื่อชี้นำพิกัดสายตา (Visual Guidance) ไปยังจุดปิดการขาย
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan/50 font-prompt select-none italic",
  {
    variants: {
      variant: {
        // Default: สไตล์ Luminous Cyan เน้นความทันสมัย
        default:
          "bg-aurora-cyan text-slate-950 shadow-aurora-glow hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",

        // Success: เขียว Aurora Emerald เน้นการตอบสนองเชิงบวก
        aurora:
          "bg-aurora-emerald text-slate-950 shadow-aurora-glow hover:bg-white hover:shadow-[0_0_30px_rgba(130,255,180,0.4)]",

        // Premium: ไล่เฉดสีเพิ่มมูลค่าให้ภาพลักษณ์แบรนด์
        premium:
          "bg-gradient-to-br from-aurora-cyan via-aurora-emerald to-aurora-cyan bg-[length:200%_auto] text-slate-950 shadow-luminous hover:bg-right transition-[background-position,all]",

        // Glass: กระจกโปร่งแสง สำหรับพิกัดที่ต้องการความหรูหราแบบเงียบๆ
        outline:
          "border-2 border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-aurora-cyan hover:text-aurora-cyan hover:bg-aurora-cyan/10",

        ghost: "text-slate-400 hover:text-white hover:bg-white/5",

        destructive:
          "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/20",

        link: "text-aurora-cyan underline-offset-8 hover:underline p-0 h-auto lowercase tracking-normal font-medium",
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
