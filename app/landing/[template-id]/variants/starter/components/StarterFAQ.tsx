/** @format */
import React from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { MultiLangText } from "../../../types"

/**
 * 🟢 แก้ไข Interface: เพิ่มฟังก์ชัน t และระบุโครงสร้าง Review ให้ชัดเจน
 */
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
  if (!testimonials.length) return null

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
            Trusted by Professionals
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 bg-slate-900" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, idx) => (
            <div
              key={review.id || idx}
              className="relative flex flex-col border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1"
            >
              {/* Quote Icon Decor */}
              <div className="absolute -right-4 -top-4 z-10 bg-slate-900 p-3 text-white">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < (review.rating || 5)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="mb-8 flex-grow text-lg font-medium italic leading-relaxed text-slate-700">
                "{t(review.comment)}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                {/* ✅ เปลี่ยนเป็น Next.js Image Component */}
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-200">
                  <Image
                    src={
                      review.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}`
                    }
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black uppercase leading-none tracking-tight text-slate-900">
                    {review.name}
                  </h4>
                  {review.role && (
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {review.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
