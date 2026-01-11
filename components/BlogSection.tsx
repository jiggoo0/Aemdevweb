/** @format */
"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Terminal, BookOpen, Star } from "lucide-react"
import { BlogPost } from "@/types/blog"

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const renderText = (text: any) => {
    if (typeof text === "string") return text
    return text?.th || text?.en || ""
  }

  if (!isMounted) {
    return <div className="grid grid-cols-1 gap-12 opacity-0 md:grid-cols-2" />
  }

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post) => {
        const isUnlinkCaseStudy = post.id === "case-study-unlink-th"

        return (
          <Link
            key={post.id}
            href={`/blog/${post.slug || post.id}`}
            className={`group relative flex flex-col border-[6px] border-slate-900 bg-white p-6 transition-all hover:-translate-x-2 hover:-translate-y-2 ${
              isUnlinkCaseStudy
                ? "border-[#1E3A8A] hover:shadow-[16px_16px_0px_0px_#F97316]"
                : "hover:shadow-[16px_16px_0px_0px_#1E3A8A]"
            }`}
          >
            {isUnlinkCaseStudy && (
              <div className="absolute -right-2 -top-2 z-30 bg-[#F97316] px-4 py-1 font-black uppercase italic tracking-tighter text-white shadow-[4px_4px_0px_0px_#0F172A]">
                <span className="flex items-center gap-2">
                  <Star size={14} fill="currentColor" /> Highlight Case
                </span>
              </div>
            )}

            <div className="relative mb-8 aspect-[16/9] overflow-hidden border-4 border-slate-900 bg-slate-100">
              <Image
                src={post.image || "/images/blog/default-blog.webp"}
                alt={renderText(post.title)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                  isUnlinkCaseStudy
                    ? "grayscale-0"
                    : "grayscale group-hover:grayscale-0"
                }`}
                priority={isUnlinkCaseStudy}
              />
              <div
                className={`absolute left-4 top-4 border-2 border-slate-900 px-3 py-1 shadow-[4px_4px_0px_0px_#0F172A] ${
                  isUnlinkCaseStudy
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white text-[#1E3A8A]"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {post.category || "INSIGHTS"}
                </span>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Terminal
                  size={14}
                  className={
                    isUnlinkCaseStudy ? "text-[#1E3A8A]" : "text-[#F97316]"
                  }
                />
                <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                  {isUnlinkCaseStudy
                    ? "SYSTEM_MANIFEST"
                    : `ENTRY_ID: ${post.id.slice(0, 8).toUpperCase()}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={12} className="text-slate-400" />
                <span className="font-mono text-[10px] font-black text-slate-900">
                  [{post.date}]
                </span>
              </div>
            </div>

            <div className="flex-grow space-y-4">
              <h3
                className={`text-3xl font-black uppercase italic leading-[0.9] tracking-tighter transition-colors md:text-4xl ${
                  isUnlinkCaseStudy
                    ? "text-[#1E3A8A] group-hover:text-[#F97316]"
                    : "text-slate-900 group-hover:text-[#1E3A8A]"
                }`}
              >
                {renderText(post.title)}
              </h3>

              <p className="line-clamp-2 text-base font-bold leading-relaxed text-slate-500">
                {renderText(post.excerpt || post.description)}
              </p>
            </div>

            <div
              className={`mt-10 flex items-center justify-between border-t-4 pt-8 ${
                isUnlinkCaseStudy ? "border-[#1E3A8A]" : "border-slate-900"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_#000]">
                  <Image
                    src={
                      typeof post.author !== "string" && post.author?.avatar
                        ? post.author.avatar
                        : "/images/profile/default-avatar.webp"
                    }
                    alt="author"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    Project Architect
                  </span>
                  <span className="text-xs font-black uppercase text-slate-900">
                    {typeof post.author === "string"
                      ? post.author
                      : post.author?.name || "AEMDEV TEAM"}
                  </span>
                </div>
              </div>

              <div
                className={`group/btn flex items-center gap-3 px-5 py-3 text-[10px] font-black uppercase italic text-white transition-all ${
                  isUnlinkCaseStudy
                    ? "bg-[#1E3A8A] group-hover:bg-[#F97316]"
                    : "bg-slate-900 group-hover:bg-[#1E3A8A]"
                }`}
              >
                {isUnlinkCaseStudy ? "VIEW_CASE" : "READ_ENTRY"}
                <ArrowRight
                  size={14}
                  strokeWidth={3}
                  className="transition-transform group-hover:translate-x-2"
                />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
