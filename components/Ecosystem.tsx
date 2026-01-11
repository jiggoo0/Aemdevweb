/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { ExternalLink, ShieldCheck, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden border-t-8 border-[#0F172A] bg-white py-24">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className="inline-block border-4 border-[#0F172A] bg-[#F97316] px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#0F172A]">
              Flagship Product
            </div>

            <h2 className="font-heading text-5xl font-black uppercase italic leading-none tracking-tighter text-[#0F172A] md:text-7xl">
              Beyond <br />
              <span className="text-[#1E3A8A]">Services.</span>
            </h2>

            <p className="max-w-xl text-xl font-bold leading-relaxed text-slate-600">
              เราไม่ได้แค่รับจ้างทำเว็บ แต่เราสร้าง{" "}
              <span className="text-[#0F172A] underline decoration-[#F97316] decoration-4">
                Platform ระดับ Production
              </span>{" "}
              ที่ใช้งานจริง พิสูจน์มาตรฐานงานวิศวกรรมผ่าน Unlink-TH
              บริการจัดการชื่อเสียงออนไลน์ที่คุณสัมผัสความเร็วได้จริง
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 font-black uppercase tracking-tight text-[#0F172A]">
                <Zap className="text-[#F97316]" /> 0.5s Loading Speed
              </div>
              <div className="flex items-center gap-3 font-black uppercase tracking-tight text-[#0F172A]">
                <ShieldCheck className="text-[#F97316]" /> Enterprise Security
              </div>
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="h-20 rounded-none border-4 border-[#0F172A] bg-[#0F172A] px-10 text-lg font-black uppercase tracking-[0.2em] text-white shadow-[10px_10px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95"
              >
                <a
                  href="https://unlink-th.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch App <ExternalLink className="ml-3 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: Mockup & Dashboard Preview */}
          <div className="relative">
            {/* Background Block */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 border-4 border-[#0F172A] bg-slate-100" />

            {/* Main Image Container */}
            <div className="relative border-4 border-[#0F172A] bg-white p-4 shadow-2xl">
              <div className="aspect-video relative w-full overflow-hidden border-2 border-slate-200 bg-slate-50">
                {/* ✅ แก้ไขจาก <img> เป็น <Image /> เพื่อประสิทธิภาพสูงสุด */}
                <Image
                  src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/unlink-preview.jpg"
                  alt="Unlink-TH Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 border-4 border-[#0F172A] bg-white p-6 shadow-[8px_8px_0px_0px_#1E3A8A]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#0F172A] bg-[#10b981] text-white">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-400">
                      Live_Status
                    </div>
                    <div className="font-black text-[#0F172A]">
                      Online_Production
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
