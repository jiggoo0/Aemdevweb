/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { getBlogPostsMetadata } from "@/lib/blog"

/**
 * BlogCard: ระบบจัดแสดงพิกัดคลังความรู้เชิงธุรกิจ
 * แนวทาง: นำเสนอเนื้อหาที่ช่วยสนับสนุน Organic Search และสร้างความเชื่อถือแก่ SME
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function BlogCard() {
  const posts = getBlogPostsMetadata()

  if (!posts || posts.length === 0) return null

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
        >
          {/* 1. Visual Layer: พิกัดภาพหน้าปกบทความ (LCP Optimized) */}
          <Link
            href={`/blog/${post.slug}`}
            className="relative aspect-video w-full overflow-hidden bg-slate-100"
          >
            <Image
              src={post.thumbnail || "/images/blog/placeholder.webp"}
              // ระบุพิกัดข้อความ Alt เพื่อรองรับการทำ technical SEO
              alt={post.title || "บทความความรู้จาก AEMDEVWEB"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-[9px] font-black tracking-widest text-slate-950 uppercase italic shadow-sm backdrop-blur-md">
                {post.category || "Insight"}
              </span>
            </div>
          </Link>

          {/* 2. Content Layer: ส่วนข้อมูลเนื้อหาและหัวข้อ */}
          <div className="flex flex-1 flex-col p-8">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase italic">
              <Calendar size={12} className="text-emerald-500" />
              {post.date}
            </div>

            <Link href={`/blog/${post.slug}`} className="flex-1">
              <h3 className="mb-4 text-xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
                {post.title || "กำลังจัดเตรียมพิกัดหัวข้อ"}
              </h3>
              <p className="font-body mb-6 line-clamp-2 text-sm leading-relaxed font-medium text-slate-500">
                {post.description ||
                  "อ่านพิกัดเนื้อหาเชิงลึกเพื่อการเติบโตของธุรกิจได้ที่นี่"}
              </p>
            </Link>

            {/* 3. Footer Layer: ปุ่มนำทางไปยังพิกัดเนื้อหาฉบับเต็ม */}
            <div className="mt-auto border-t border-slate-50 pt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-950 uppercase italic transition-all hover:gap-4 hover:text-emerald-600"
              >
                อ่านพิกัดเนื้อหาฉบับเต็ม
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
