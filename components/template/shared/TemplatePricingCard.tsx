/** @format */

import React from "react"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TemplatePricingCardProps {
  title?: string
  price?: number
  salePrice?: number
  features?: string[]
  themeColor?: "emerald" | "blue" | "rose" | "amber" | "purple"
}

export const TemplatePricingCard = ({
  title = "Standard License",
  price = 0, // กำหนดค่าเริ่มต้นเป็น 0 กัน undefined
  salePrice,
  features = [],
  themeColor = "emerald",
}: TemplatePricingCardProps) => {
  // 🛡️ ป้องกัน Error: ตรวจสอบว่ามีค่าก่อนเรียก toLocaleString
  const currentPrice = salePrice ?? price ?? 0
  const formattedPrice =
    typeof currentPrice === "number" ? currentPrice.toLocaleString() : "0"

  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl">
      <div className="p-8 md:p-10">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
          <div className="mb-2 flex items-end gap-3">
            <h3 className="text-4xl font-bold tracking-tight text-white">
              ฿{formattedPrice}
            </h3>
            {salePrice !== undefined && salePrice !== null && (
              <span className="mb-1 text-lg text-slate-500 line-through decoration-slate-600">
                ฿{price?.toLocaleString() ?? "0"}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-400">
            ชำระครั้งเดียว ใช้งานได้ตลอดชีพ
          </p>
        </div>

        <div className="mb-10 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={cn(
                  "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  themeColor === "rose"
                    ? "bg-rose-500/20 text-rose-500"
                    : "bg-emerald-500/20 text-emerald-500"
                )}
              >
                <Check className="h-3 w-3" />
              </div>
              <span className="text-sm leading-relaxed text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          className={cn(
            "h-14 w-full rounded-2xl text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98]",
            themeColor === "rose"
              ? "bg-rose-600 hover:bg-rose-500"
              : "bg-emerald-600 hover:bg-emerald-500"
          )}
        >
          <Zap className="mr-2 h-5 w-5 fill-current" />
          เริ่มโปรเจกต์กับนายเอ็ม
        </Button>
      </div>
    </div>
  )
}
