/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Calendar, ArrowRight, BookOpen, Clock, Zap } from "lucide-react"
import { BlogPost } from "@/types"

interface BlogCardProps {
  posts: BlogPost[]
}

/**
 * BlogCard - ระบบคลังข้อมูลเชิงกลยุทธ์ (Strategic Insight Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การส่งต่อคุณค่าและข้อมูลเชิงลึกเพื่อการเติบโตของธุรกิจ
 */
export default function BlogCard({ posts }: BlogCardProps) {
  // การตั้งค่าการเคลื่อนไหวเพื่อความลื่นไหลของระบบ
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  // กรณีไม่มีข้อมูลบทความ
  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-[450px] w-full flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/40 p-12 text-center transition-all hover:border-emerald-200 hover:bg-white">
        <div className="relative mb-10">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-white text-slate-200 shadow-xl ring-1 ring-slate-100">
            <BookOpen size={48} strokeWidth={1} />
            <Zap
              className="absolute -top-2 -right-2 animate-pulse text-emerald-500"
              size={24}
              fill="currentColor"
            />
          </div>
        </div>
        <h3 className="font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic">
          Coming <span className="text-emerald-500">Soon.</span>
        </h3>
        <p className="font-body mt-4 max-w-sm text-lg font-bold text-slate-400">
          ทีมงานกำลังจัดเตรียมข้อมูลเชิงลึกชุดใหม่
          เพื่อสร้างมูลค่าเพิ่มให้แก่แผนงานธุรกิจของคุณ
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          variants={item}
          className="group relative flex flex-col overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-2 transition-all duration-700 hover:border-emerald-500/30 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.12)]"
        >
          {/* ส่วนแสดงผลภาพหน้าปกบทความ */}
          <Link
            href={`/blog/${post.slug}`}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.8rem] bg-slate-50"
            aria-label={`เจาะลึกรายละเอียด: ${post.title}`}
          >
            <Image
              src={post.thumbnail || "/images/blog/placeholder.webp"}
              alt={`AEMDEVWEB Insight: ${post.title}`}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />

            <div className="absolute top-6 left-6 z-10">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-950/80 px-4 py-2 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase italic ring-1 ring-white/10 backdrop-blur-xl">
                {post.category || "TECHNOLOGY"}
              </span>
            </div>
          </Link>

          {/* ส่วนข้อมูลและเนื้อหาบทความ */}
          <div className="flex flex-1 flex-col px-8 pt-10 pb-12">
            <div className="mb-6 flex items-center gap-6">
              <div className="font-heading flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300 uppercase italic transition-colors group-hover:text-emerald-500/60">
                <Calendar size={14} className="text-emerald-500" />
                {post.date}
              </div>
              <div className="font-heading flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
                <Clock size={14} className="text-slate-200" />
                {post.readingTime || "5 MIN"} READ
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="font-heading text-3xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-700">
                  {post.title}
                </h3>
              </Link>
              <p className="font-body line-clamp-3 text-base leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-600">
                {post.description}
              </p>
            </div>

            {/* ส่วนปุ่มการเข้าถึงข้อมูล */}
            <div className="mt-12 border-t border-slate-50 pt-10">
              <Link
                href={`/blog/${post.slug}`}
                className="group/btn inline-flex items-center gap-5 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:rotate-6 group-hover/btn:bg-emerald-600 group-hover/btn:text-white group-hover/btn:shadow-xl group-hover/btn:shadow-emerald-500/20">
                  <ArrowRight size={20} strokeWidth={3} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
                    View Insight
                  </span>
                  <span className="font-heading text-[11px] font-black tracking-[0.2em] text-slate-950 uppercase italic transition-colors group-hover/btn:text-emerald-600">
                    เจาะลึกรายละเอียด
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-1000 ease-in-out group-hover:w-full" />
        </motion.article>
      ))}
    </motion.div>
  )
}
