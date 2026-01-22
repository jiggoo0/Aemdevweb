/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Factory, Zap } from "lucide-react"

// Data configuration for trusted partnerships
const clients = [
  { name: "Unlink TH", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Industrial Solutions", logo: "/images/showcase/project-01.webp" },
  { name: "SME Thailand", logo: "/images/showcase/aemdevweb-hero.webp" },
  { name: "Factory Pro", logo: "/images/showcase/project-01.webp" },
  { name: "Digital Partner", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Tech Export", logo: "/images/showcase/aemdevweb-hero.webp" },
]

// Strategic Impact Statistics
const stats = [
  {
    label: "ธุรกิจที่ได้รับความไว้วางใจ",
    value: "50+",
    icon: Users,
    description: "ยกระดับสถาปัตยกรรมดิจิทัลให้กับ SME และสตาร์ทอัพไทย",
  },
  {
    label: "ภาคอุตสาหกรรมและโรงงาน",
    value: "12+",
    icon: Factory,
    description: "วางรากฐานระบบเว็บไซต์ที่มีความเสถียรสูงสุดสำหรับโรงงานผลิต",
  },
  {
    label: "ดัชนีประสิทธิภาพเว็บไซต์",
    value: "99/100",
    icon: Zap,
    description: "ค่าเฉลี่ย Google PageSpeed Score ที่ผมทำให้ทุกโปรเจกต์",
  },
]

const HomeClientSections = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Infrastructure Layer: Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Infinite Logo Slider: CSS Animation Optimized for TBT/CLS */}
        <div className="mb-32">
          <p className="font-prompt mb-12 text-center text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase italic">
            Trusted by Forward-Thinking Businesses
          </p>

          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="animate-infinite-scroll flex w-max items-center gap-20 pr-20">
              {/* Loop replication for seamless animation with optimized image payload */}
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative h-12 w-40 shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    // Optimized sizes to reduce mobile LCP and unnecessary bandwidth
                    sizes="(max-width: 480px) 100px, (max-width: 768px) 120px, 160px"
                    // Priority rendering for the first visible set of items
                    priority={i < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Statistics Grid: Industrial Value Presentation */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-[2.5rem] border border-slate-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-prompt text-5xl font-black tracking-tighter text-slate-900 italic md:text-6xl">
                  {stat.value}
                </span>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="font-prompt text-[11px] font-black tracking-[0.2em] text-slate-600 uppercase italic">
                {stat.label}
              </h3>
              <p className="font-anuphan mt-4 text-sm font-bold text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Close: Solo-Specialist Authority Hook */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="shadow-3xl mt-28 rounded-[3rem] bg-slate-950 p-12 text-center md:p-24"
        >
          <h2 className="font-prompt text-4xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-6xl">
            จากธุรกิจ SME สู่ระบบโรงงาน <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              ผมเปลี่ยนดัชนีความเร็ว ให้เป็นผลกำไรทางธุรกิจ
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeClientSections
