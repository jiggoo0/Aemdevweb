/** @format */
import React from "react"
import { Metadata } from "next"
import { blogData } from "@/data/blog/allposts"
import BlogSection from "@/components/BlogSection"

export const metadata: Metadata = {
  title: "Insights & Knowledge | AEMDEVWEB",
  description:
    "รวบรวมเทคนิคการทำเว็บไซต์และการตลาดออนไลน์ฉบับพาร์ทเนอร์ เน้นนำไปใช้จริงกับธุรกิจของคุณ",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-20 border-b-8 border-slate-900 pb-12">
          <div className="mb-4 inline-block bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-white">
            KNOWLEDGE_HUB v2.0
          </div>
          <h1 className="text-6xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-9xl">
            Latest <br />
            <span className="text-blue-600">Insights.</span>
          </h1>
        </div>

        {/* CONTENT */}
        <BlogSection posts={blogData} />
      </div>
    </main>
  )
}
