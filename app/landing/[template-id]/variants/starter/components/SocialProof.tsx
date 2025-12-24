/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { MultiLangText } from "@/app/landing/[template-id]/types"

export interface Review {
  id: string | number
  name: string
  role?: string
  avatar?: string
  comment: string | MultiLangText
  rating?: number
}

export interface SocialProofProps {
  testimonials: Review[]
  t: (content: string | MultiLangText | undefined) => string
}

export default function SocialProof({
  testimonials = [],
  t,
}: SocialProofProps) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <div className="w-full">
      {/* 🏗️ Testimonials Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((review, idx) => (
          <div
            key={review.id || idx}
            className="group relative flex flex-col border-4 border-slate-900 bg-white p-8 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* 🏗️ Floating Quote Icon Decor */}
            <div className="absolute -right-5 -top-5 z-10 border-4 border-slate-900 bg-white p-3 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
              <Quote size={24} fill="currentColor" />
            </div>

            {/* 🏗️ Star Rating Layer */}
            <div className="mb-6 flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  strokeWidth={2.5}
                  className={
                    i < (review.rating || 5)
                      ? "fill-yellow-400 text-slate-900" // เส้นขอบดาวสีดำตัดกับสีเหลือง
                      : "text-slate-200"
                  }
                />
              ))}
            </div>

            {/* 🏗️ Comment Content */}
            <blockquote className="mb-8 flex-grow">
              <p className="text-lg font-bold italic leading-relaxed tracking-tight text-slate-800 md:text-xl">
                "{t(review.comment)}"
              </p>
            </blockquote>

            {/* 🏗️ Author Info Layer */}
            <div className="flex items-center gap-4 border-t-4 border-slate-900 pt-6">
              {/* Avatar with Neobrutalist Frame */}
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-200">
                <Image
                  src={
                    review.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&bold=true`
                  }
                  alt={review.name}
                  fill
                  sizes="56px"
                  className="object-cover grayscale transition-all group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-col">
                <h4 className="text-base font-black uppercase italic tracking-tighter text-slate-900">
                  {review.name}
                </h4>
                {review.role && (
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    {review.role}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
