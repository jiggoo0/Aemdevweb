/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, Rocket, ShieldCheck, Gauge, ArrowRight } from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * ShopPromotion - ส่วนผลักดันอัตราการเปลี่ยนผ่านกลุ่มเป้าหมาย (The Conversion Accelerator)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างแรงจูงใจผ่านความน่าเชื่อถือทางเทคนิคและผลลัพธ์ที่จับต้องได้
 * มาตรฐาน: Strategic Interface Design ระดับพรีเมียมปี 2026
 */
export const ShopPromotion = () => {
  return (
    <section className="relative overflow-hidden rounded-[4rem] bg-slate-950 px-8 py-20 text-center lg:py-32">
      {/* [LAYER 1]: ลายเส้นโครงสร้างเชิงระบบ (Strategic Grid Overlay) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* [LAYER 2]: รัศมีแสงมรกตเพื่อสร้างมิติความเหนือระดับ (Atmospheric Depth) */}
      <div
        className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-48 -bottom-48 h-[600px] w-[600px] rounded-full bg-emerald-600/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* มาตรฐานการดำเนินงานโครงการ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-2.5 backdrop-blur-sm"
        >
          <Rocket size={16} className="text-emerald-400" />
          <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
            Business Acceleration Protocol 2026
          </span>
        </motion.div>

        {/* หัวข้อนำเสนอคุณค่าหลัก (Value Proposition) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading mb-10 text-6xl leading-[0.85] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-9xl"
        >
          Build Fast. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent">
            Rank Faster.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-body mx-auto mb-20 max-w-2xl text-xl leading-relaxed font-bold text-slate-400 md:text-2xl"
        >
          ยกระดับเว็บไซต์ของคุณให้เป็นสินทรัพย์ดิจิทัลที่สร้างผลลัพธ์จริง{" "}
          <br className="hidden md:block" />
          ด้วย{" "}
          <span className="text-white underline decoration-emerald-500/50 underline-offset-8">
            โครงสร้างระบบประสิทธิภาพสูง
          </span>{" "}
          ที่ออกแบบมาเพื่อการเข้าถึงกลุ่มเป้าหมายอย่างแม่นยำ
        </motion.p>

        {/* ส่วนแสดงคุณสมบัติเชิงเทคนิค (Technical Features Matrix) */}
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: <Zap size={22} />,
              label: "Strategic Deployment",
              desc: "พร้อมดำเนินการภายใน 24 ชม.",
            },
            {
              icon: <ShieldCheck size={22} />,
              label: "Security Protocol",
              desc: "มาตรฐานความปลอดภัยระดับสากล",
            },
            {
              icon: <Gauge size={22} />,
              label: "Performance Excellence",
              desc: "ประสิทธิภาพความเร็ว LCP < 0.8s",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.03] p-10 backdrop-blur-md transition-all hover:border-emerald-500/20 hover:bg-white/[0.08]"
            >
              <div className="text-emerald-500 transition-transform group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              <div className="space-y-1">
                <span className="font-heading block text-[11px] font-black tracking-widest text-white uppercase italic">
                  {item.label}
                </span>
                <span className="font-body block text-xs font-bold text-slate-500 transition-colors group-hover:text-emerald-400/70">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ปุ่มกระตุ้นการตัดสินใจ (Primary Call-to-Action) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 rounded-[2rem] bg-emerald-500 px-12 py-8 text-slate-950 shadow-2xl shadow-emerald-500/20 transition-all hover:bg-white active:scale-95"
          >
            <div className="flex flex-col items-start text-left">
              <span className="font-heading text-[10px] font-black tracking-widest uppercase italic opacity-70">
                Project Discussion
              </span>
              <span className="font-heading text-xl leading-tight font-black uppercase italic">
                เริ่มต้นปรึกษาแผนงานโครงการ
              </span>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-emerald-500 transition-transform group-hover:translate-x-2">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
