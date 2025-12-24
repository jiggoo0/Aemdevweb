/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { reviews } from "@/data/reviews"
import Image from "next/image"

const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden border-y-[6px] border-slate-900 bg-white py-24 md:py-32"
      id="social-proof"
    >
      {/* ─── BACKGROUND ARCHITECTURE ─── */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-center">
          {/* ─── INFINITE MARQUEE REVIEWS ─── */}
          <div className="relative w-screen overflow-hidden py-10">
            <motion.div
              className="flex w-max gap-8 px-4 will-change-transform"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {/* แนะนำให้ทำ Double ลิสต์เพื่อให้ Marquee ลื่นไหล (Smooth Loop) */}
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  key={`${review.id}-${index}`}
                  className="relative w-[380px] border-4 border-slate-900 bg-white p-10 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
                >
                  <Quote
                    className="absolute right-8 top-8 h-12 w-12 text-slate-50"
                    aria-hidden="true"
                  />

                  <div className="mb-6 flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="mb-10 min-h-[100px] text-base font-bold italic leading-relaxed text-slate-700">
                    "{review.comment}"
                  </blockquote>

                  <div className="flex items-center gap-4 border-t-2 border-slate-100 pt-6">
                    {/* Avatar Container */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100">
                      <Image
                        src={review.avatar}
                        alt={`รีวิวจาก ${review.name}`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <cite className="text-[11px] font-black uppercase not-italic tracking-widest text-slate-900">
                        {review.name}
                      </cite>
                      <span className="mt-1 self-start border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight text-blue-600">
                        {review.businessType}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

            {/* Cinematic Gradient Overlays */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-white via-white/80 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Footer Detail */}
          <footer className="mt-20 flex flex-col items-center gap-4 opacity-40">
            <div className="h-10 w-[2px] bg-slate-900" aria-hidden="true" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">
              AEMDEVWEB / ECOSYSTEM_TRUST_PROTOCOL
            </span>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
