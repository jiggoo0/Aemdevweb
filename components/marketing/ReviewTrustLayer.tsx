/** @format */

import React from "react"
import Image from "next/image"
import { Star } from "lucide-react" // นำ Quote ออกเพื่อลด Warning (Unused variable)

// ✅ ปรับโครงสร้างข้อมูล Review ให้เป็นมาตรฐานยืดหยุ่นสูง
interface ReviewData {
  id: string | number
  name: string
  businessType: string
  comment: string
  rating: number
  highlight?: string // ใช้ optional เพื่อรองรับข้อมูลที่หลากหลาย
  avatar: string
}

interface ReviewTrustLayerProps {
  reviews?: ReviewData[] // ใช้ optional เพื่อป้องกัน Error TS2741 ใน StarterTemplate
  themeColor?: string
  accentColor?: string
  title?: React.ReactNode
  className?: string
  variant?: "industrial" | "minimal" // ระบบสลับสไตล์เพื่อความแตกต่าง
}

export const ReviewTrustLayer = ({
  reviews = [],
  themeColor = "#0f172a",
  accentColor = "#f97316",
  title,
  className = "",
  variant = "minimal",
}: ReviewTrustLayerProps) => {
  const isIndustrial = variant === "industrial"

  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-6">
        {/* 🏗️ Header Logic: ฉีกดีไซน์ผ่านสไตล์ตัวอักษร */}
        <div className="mb-20">
          {title || (
            <h2
              className={`text-4xl font-black uppercase tracking-tighter md:text-6xl ${
                isIndustrial ? "italic" : "normal-case tracking-tight"
              }`}
              style={{ color: themeColor }}
            >
              Trusted by <br />
              <span
                className="underline decoration-from-font underline-offset-[12px]"
                style={{ textDecorationColor: accentColor }}
              >
                Real Humans.
              </span>
            </h2>
          )}
        </div>

        {/* 📦 Grid System: แยกความ "ดุดัน" ออกจากความ "ประณีต" */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className={`group relative bg-white p-10 transition-all duration-500 ${
                isIndustrial
                  ? "border-[4px] border-slate-900 shadow-blue-600 hover:shadow-[14px_14px_0px_0px]"
                  : "rounded-2xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50"
              }`}
            >
              {/* Badge: ป้ายกำกับไฮไลท์รีวิว */}
              {review.highlight && (
                <div
                  className={`absolute -top-3 left-8 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white ${
                    isIndustrial ? "italic" : "rounded-full"
                  }`}
                  style={{
                    backgroundColor: isIndustrial ? "#0f172a" : accentColor,
                  }}
                >
                  {review.highlight}
                </div>
              )}

              {/* Rating Stars */}
              <div className="mb-8 flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating ? "fill-current" : "text-slate-200"
                    }
                    style={{
                      color: i < review.rating ? accentColor : undefined,
                    }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-10 text-lg font-medium leading-relaxed text-slate-600">
                "{review.comment}"
              </p>

              {/* Author Info: การแสดงตัวตนลูกค้า */}
              <div className="flex items-center gap-5 border-t border-slate-50 pt-8">
                <div
                  className={`relative h-14 w-14 overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0 ${
                    isIndustrial ? "border-2 border-slate-900" : "rounded-full"
                  }`}
                >
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-base font-bold tracking-tight text-slate-900">
                    {review.name}
                  </h5>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {review.businessType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
