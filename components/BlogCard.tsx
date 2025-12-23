/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"
import { Calendar, ArrowRight, Clock } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
  const blogLink = `/blog/${post.slug || post.id}`
  const description = post.description || (post as any).excerpt || ""

  return (
    <Link href={blogLink} className="group block h-full">
      {/* ─── CARD STRUCTURE: INDUSTRIAL BRUTALISM ─── */}
      <div className="flex h-full flex-col border-2 border-brand-navy bg-white transition-all duration-300 hover:shadow-enterprise-md group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Thumbnail: High-End Editorial Style */}
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-brand-navy bg-slate-100">
          <Image
            src={post.image || "/images/blog-placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover grayscale-[0.4] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category Tag: Engineering Label */}
          <div className="absolute bottom-0 left-0 bg-brand-navy px-5 py-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
              {post.category || "Insight"}
            </span>
          </div>
        </div>

        {/* Content Area: Blueprint Hierarchy */}
        <div className="flex flex-grow flex-col space-y-6 p-8 lg:p-10">
          {/* Metadata Section */}
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-brand-blue" />
              <span>{post.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-blue" />
              <span>{post.readTime || "5 MIN READ"}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h3 className="line-clamp-2 text-xl font-black uppercase italic leading-[1.1] tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue md:text-2xl">
              {post.title}
            </h3>
            <p className="line-clamp-2 border-l-2 border-slate-100 pl-4 text-sm font-bold leading-relaxed text-slate-500">
              {description}
            </p>
          </div>

          {/* Action Area: Functional Design */}
          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-50 pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy transition-colors group-hover:text-brand-blue">
              Read Document
            </span>
            <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-navy bg-white text-brand-navy transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white">
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
