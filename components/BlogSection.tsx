/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BlogPost } from "@/types/blog"

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug || post.id}`}
          className="group relative flex flex-col border-4 border-slate-900 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#2563eb]"
        >
          {/* 🖼️ IMAGE CONTAINER */}
          <div className="relative mb-6 aspect-video overflow-hidden border-2 border-slate-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale transition-all group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          {/* 🏷️ META INFORMATION */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              {post.category}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              {post.date}
            </span>
          </div>

          {/* 📝 TITLE & DESCRIPTION */}
          <h3 className="mb-4 text-2xl font-black uppercase italic leading-tight tracking-tighter text-slate-900 group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="mb-8 line-clamp-2 text-sm font-bold text-slate-500">
            {post.description}
          </p>

          {/* 👤 FOOTER: AUTHOR & ACTION */}
          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-slate-900 bg-slate-100">
                {/* ✅ FIX: Type Guarding สำหรับ Author Object */}
                {typeof post.author !== "string" ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-[8px]">
                    N/A
                  </div>
                )}
              </div>
              <span className="text-[10px] font-black uppercase">
                {typeof post.author === "string"
                  ? post.author
                  : post.author.name}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase italic text-slate-900 group-hover:text-blue-600">
              READ_MORE <ArrowRight size={14} strokeWidth={3} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
