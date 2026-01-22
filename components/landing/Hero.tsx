/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, ShieldCheck, Star } from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * Hero Section - Strategic First Impression Architecture
 * Optimized for Largest Contentful Paint (LCP) and visual authority.
 * Adheres to AEMDevWeb Industrial Grade Standards.
 */
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white pt-32 lg:pt-48">
      {/* Background Layer: Industrial Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,transparent)] bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Identity Badge: Positioning as Specialist */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2"
          >
            <Zap className="h-4 w-4 text-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">
              Modern Web Architecture Specialist
            </span>
          </motion.div>

          {/* Main Headline: Professional and Result-Oriented Architecture */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-prompt mb-8 max-w-5xl text-5xl leading-[1.1] font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-8xl"
          >
            สถาปัตยกรรมเว็บที่ประณีต <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              เพื่อการปิดยอดขายที่รวดเร็ว
            </span>
          </motion.h1>

          {/* Sub-headline: Solo-Specialist Value Proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-anuphan mb-12 max-w-2xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl"
          >
            ผมช่วยยกระดับธุรกิจ SME
            และโรงงานของคุณด้วยรากฐานเว็บไซต์ที่เน้นความเร็ว ความเสถียร
            และความคุ้มค่าของการลงทุนสูงสุด งานเสร็จจริง รับผิดชอบโดยตรงโดย
            <span className="font-black text-slate-950 italic">
              Specialist Alongkorl
            </span>
          </motion.p>

          {/* Strategic CTAs: High-Conversion Lead Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6 sm:flex-row"
          >
            <Link
              href={siteConfig.contact?.facebook || "#"}
              target="_blank"
              className="group relative flex items-center gap-3 rounded-full bg-slate-950 px-10 py-5 text-base font-black tracking-wider text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              {siteConfig.cta?.main || "ปรึกษาโปรเจกต์กับผม"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="font-prompt flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-emerald-500"
            >
              {siteConfig.cta?.pricing || "ตรวจสอบแพ็กเกจราคา"}
            </Link>
          </motion.div>

          {/* Trust Indicators: Technical and Authority Proofs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-12 border-t border-slate-100 pt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1 text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                Expert Authority Proof
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-slate-900">
                <Zap className="h-5 w-5" />
                <span className="font-prompt text-xl font-black italic">
                  LCP &lt; 1.0s
                </span>
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                Performance Optimized
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-prompt text-xl font-black italic">
                  Industrial Grade
                </span>
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                Security and Stability
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Showcase Image: High-Resolution Proof of Work */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto mt-20 px-4"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-50 shadow-2xl">
          <Image
            src="/images/showcase/aemdevweb-hero.webp"
            alt="Website Showcase by AEMDEVWEB"
            fill
            priority
            quality={90}
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
