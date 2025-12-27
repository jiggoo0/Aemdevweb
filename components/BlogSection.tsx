/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Terminal } from "lucide-react"
import { BlogPost } from "@/types/blog"
// ✅ ลบ import { cn } ออกเรียบร้อย

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug || post.id}`}
          className="group relative flex flex-col border-[6px] border-slate-900 bg-white p-6 transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#1E3A8A]"
        >
          {/* 🖼️ IMAGE CONTAINER: INDUSTRIAL FRAME */}
          <div className="relative mb-8 aspect-[16/9] overflow-hidden border-4 border-slate-900 bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
            />
            {/* OVERLAY BADGE */}
            <div className="absolute left-4 top-4 border-2 border-slate-900 bg-white px-3 py-1 shadow-[4px_4px_0px_0px_#0F172A]">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">
                {post.category}
              </span>
            </div>
          </div>

          {/* 🏷️ META INFORMATION */}
          <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                LOG_ID: {post.id.slice(0, 8)}
              </span>
            </div>
            <span className="font-mono text-[10px] font-black text-slate-900">
              [{post.date}]
            </span>
          </div>

          {/* 📝 TITLE & DESCRIPTION */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 group-hover:text-brand-blue">
              {post.title}
            </h3>

            <p className="line-clamp-2 text-base font-bold leading-relaxed text-slate-500">
              {post.description}
            </p>
          </div>

          {/* 👤 FOOTER: AUTHOR & ACTION */}
          <div className="mt-10 flex items-center justify-between border-t-4 border-slate-900 pt-8">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_#000]">
                {typeof post.author !== "string" ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900 text-[10px] text-white">
                    {post.author.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Published By
                </span>
                <span className="text-xs font-black uppercase text-slate-900">
                  {typeof post.author === "string"
                    ? post.author
                    : post.author.name}
                </span>
              </div>
            </div>

            <div className="group/btn flex items-center gap-3 bg-slate-900 px-4 py-2 text-xs font-black uppercase italic text-white transition-colors group-hover:bg-brand-blue">
              READ_ENTRY
              <ArrowRight
                size={16}
                strokeWidth={3}
                className="transition-transform group-hover:translate-x-2"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
