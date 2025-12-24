// app/(main)/services/page.tsx
import React from "react"
import { Metadata } from "next"
import { servicesData } from "@/data/servicesData"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "",
  description: "",
}

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Header Section */}
      <div className="mb-20 border-l-8 border-slate-900 pl-8">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter text-slate-900 md:text-8xl">
          SERVICE<span className="text-blue-600 text-primary">_</span>MATRIX
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-bold text-slate-500">""</p>
      </div>

      {/* Services Grid */}
      <ServicesPageClient services={servicesData} />

      {/* Footer Note */}
      <div className="mt-20 border-t-4 border-slate-900 pt-10 text-center">
        <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-slate-400">
          All templates are optimized for SEO & High-Performance
        </p>
      </div>
    </section>
  )
}
