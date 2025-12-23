/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

interface Review {
  name: string
  role?: string
  content: string
  rating?: number
  avatar?: string
}

interface TestimonialsProps {
  reviews: Review[]
  primaryColor?: string
}

export default function Testimonials({
  reviews,
  primaryColor = "#000",
}: TestimonialsProps) {
  if (!reviews || reviews.length === 0) return null

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="relative border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1"
        >
          {/* Rating Stars */}
          <div className="mb-4 flex gap-1">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={primaryColor}
                stroke={primaryColor}
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <p className="mb-6 font-medium italic text-slate-700">
            "{review.content}"
          </p>

          {/* Reviewer Profile */}
          <div className="flex items-center gap-4">
            {review.avatar && (
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-black uppercase leading-none tracking-tighter text-slate-900">
                {review.name}
              </h4>
              {review.role && (
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {review.role}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
