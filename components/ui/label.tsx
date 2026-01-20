/** @format */
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * 🏷️ Label: Luminous Typography Edition
 * ปรับปรุง: ใช้ฟอนต์ Prompt เพื่อความชัดเจนและสไตล์ที่ทันสมัยแบบ Tech Agency
 */
const labelVariants = cva(
  "font-prompt text-[10px] md:text-xs font-black uppercase tracking-[0.25em] leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 transition-colors duration-300"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      // เพิ่ม Interaction เมื่อ Input ที่คู่กันถูก Focus
      "peer-focus-visible:text-aurora-cyan peer-focus-visible:drop-shadow-[0_0_8px_rgba(122,243,255,0.4)]",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
