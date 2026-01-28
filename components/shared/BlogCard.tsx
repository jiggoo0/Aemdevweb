/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, BookOpen, Clock, Zap } from "lucide-react"
import { BlogPost } from "@/types"

/**
 * BlogCard - ระบบแสดงผลรายการบทความและพิกัดความรู้
 * แนวคิด: เรียบง่าย อ่านง่าย และวางระบบให้โหลดไวที่สุด (LCP Optimized)
 * [FIX]: ล้างพิกัด Warning Unused 'cn' เพื่อความกริบของโค้ด
 */
interface BlogCardProps {
  posts: BlogPost[]
}

export default function BlogCard({ posts }: BlogCardProps) {
  // จัดการพิกัดกรณีไม่มีข้อมูล ให้ระบบยังคงความเนี้ยบและน่าเชื่อถือ
  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-[3rem] border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center">
        <div className="relative mb-6">
          <BookOpen className="text-slate-200" size={64} />
          <Zap
            className="absolute -top-2 -right-2 animate-pulse text-emerald-500"
            size={24}
          />
        </div>
        <h3 className="font-heading text-xl font-black tracking-tighter text-slate-900 uppercase italic">
          Knowledge Base{" "}
          <span className="text-emerald-600 underline decoration-emerald-500/20">
            Standby.
          </span>
        </h3>
        <p className="font-body mt-2 text-sm font-bold text-slate-400">
          กำลังเตรียมเนื้อหาพิกัดใหม่
          เพื่อส่งต่อเทคนิคงานระบบให้ธุรกิจของคุณครับ
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10"
        >
          {/* พิกัดแสดงภาพประกอบ (Visual Content) */}
          <Link
            href={`/blog/${post.slug}`}
            className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50"
            aria-label={`อ่านบทความ: ${post.title}`}
          >
            <Image
              src={post.thumbnail || "/images/blog/placeholder.webp"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3} // วางระบบเพื่อค่า LCP ที่ดีที่สุด
            />

            {/* ป้ายประเภทเนื้อหา: วางโครงสร้างโปร่งแสงดูเนี้ยบ */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-2 rounded-xl bg-slate-950/60 px-4 py-2 text-[10px] font-black tracking-widest text-emerald-400 uppercase italic ring-1 ring-white/10 backdrop-blur-xl">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                {post.category || "เทคนิคพิกัดงาน"}
              </span>
            </div>
          </Link>

          {/* พิกัดข้อมูลและเนื้อหาบทคัดย่อ (Body Content) */}
          <div className="flex flex-1 flex-col p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
                <Calendar size={14} className="text-emerald-500" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
                <Clock size={14} className="text-slate-300" />
                {post.readingTime || "5 นาที"} อ่าน
              </div>
            </div>

            <Link href={`/blog/${post.slug}`} className="flex-1">
              <h3 className="font-heading mb-4 text-2xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
                {post.title}
              </h3>
              <p className="font-body mb-8 line-clamp-3 text-[15px] leading-relaxed font-bold text-slate-500">
                {post.description}
              </p>
            </Link>

            {/* ปุ่มเข้าสู่ระบบเนื้อหา (Action) */}
            <div className="mt-auto border-t border-slate-50 pt-8">
              <Link
                href={`/blog/${post.slug}`}
                className="group/btn inline-flex items-center gap-4 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic transition-all"
              >
                <span className="relative pb-1">
                  อ่านต่อพิกัดนี้
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover/btn:w-full" />
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-all group-hover/btn:translate-x-1 group-hover/btn:bg-emerald-600 group-hover/btn:text-white group-hover/btn:shadow-lg group-hover/btn:shadow-emerald-500/20">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
