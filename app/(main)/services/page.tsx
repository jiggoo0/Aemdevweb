/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Search, Clock, Zap, ShieldCheck, ArrowRight } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ServicesPage - ศูนย์รวมโซลูชันแผนงานระบบ AEMDEVWEB
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การนำเสนอสินทรัพย์ดิจิทัลเชิงกลยุทธ์ (Strategic Service Inventory)
 */
export default function ServicesPage() {
  // การกำหนดค่าการเคลื่อนไหวเพื่อความต่อเนื่องเชิงระบบ
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10"
    >
      {/* [1. SERVICE SCHEMA]: การระบุโครงสร้างข้อมูลเพื่อรองรับมาตรฐาน Google Knowledge Graph */}
      <JsonLd
        type="Graph"
        data={{
          "@graph": [
            {
              "@type": "Service",
              name: "Web Infrastructure & Technical SEO",
              provider: { "@id": `${siteConfig.links.personal}/#person` },
              areaServed: "TH",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AEM Strategic Solutions",
                itemListElement: servicesData.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Offer",
                    name: s.title,
                    price: s.priceValue,
                    priceCurrency: "THB",
                  },
                })),
              },
            },
          ],
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* [2. HERO SECTION]: ส่วนนำเสนอระดับประสิทธิภาพของระบบ */}
      <section className="relative overflow-hidden border-b border-slate-50 bg-slate-50/50 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              variants={fadeInUp}
              className="mb-10 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
                Strategic System Solutions
              </span>
            </motion.div>

            <h1 className="font-heading text-7xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[11rem]">
              Service <br />
              <span className="text-emerald-500">
                Inventory<span className="text-slate-950">.</span>
              </span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="font-body mt-12 max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-3xl md:leading-tight"
            >
              เลือกโซลูชันที่ตอบโจทย์ความต้องการทางธุรกิจของคุณ
              ทุกระบบถูกปรับแต่งเพื่อประสิทธิภาพและความเร็วระดับสูงสุด
            </motion.p>
          </div>
        </div>
      </section>

      {/* [3. MAIN CATALOG]: รายการแผนงานระบบ (Staggered Grid) */}
      <section className="relative z-10 -mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard
                  data={service}
                  className="bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [4. THE STANDARD]: ความเชี่ยวชาญเบื้องหลังความสำเร็จ */}
      <section className="py-32 lg:py-56">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
            <div className="space-y-20">
              <div className="space-y-6">
                <h2 className="font-heading text-6xl font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
                  Built for <span className="text-emerald-500">Scale.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                {[
                  {
                    icon: <Zap />,
                    title: "LCP < 0.8s",
                    desc: "การแสดงผลที่รวดเร็วระดับสูงสุด",
                  },
                  {
                    icon: <Search />,
                    title: "Strategic SEO",
                    desc: "วางโครงสร้าง Schema ที่แม่นยำ",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Stability First",
                    desc: "เสถียรภาพระบบที่เชื่อถือได้",
                  },
                  {
                    icon: <Clock />,
                    title: "Rapid Implementation",
                    desc: "พร้อมดำเนินการภายใน 24-48 ชม.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group space-y-4 border-l-2 border-slate-100 pl-6 transition-colors hover:border-emerald-500"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-emerald-600 transition-all group-hover:bg-slate-950 group-hover:text-emerald-400">
                      {React.isValidElement(item.icon)
                        ? React.cloneElement(
                            item.icon as React.ReactElement<{ size?: number }>,
                            { size: 24 }
                          )
                        : item.icon}
                    </div>
                    <h3 className="font-heading text-lg font-black tracking-tight text-slate-950 uppercase italic">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm font-bold text-slate-400 group-hover:text-slate-600">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* [5. STRATEGIC QUOTE] */}
            <div className="relative">
              <motion.div
                whileHover={{ rotate: -2, scale: 1.02 }}
                className="relative rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-900/40 md:p-20"
              >
                <blockquote className="font-body text-4xl leading-[1] font-black italic md:text-6xl">
                  "ผมสร้าง{" "}
                  <span className="text-emerald-400">Digital Assets</span>{" "}
                  ที่จะสร้างมูลค่าเพิ่มให้ธุรกิจของคุณอย่างยั่งยืน"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* [6. FINAL STRATEGIC CTA] */}
      <section className="container mx-auto px-6">
        <div className="rounded-[3rem] bg-emerald-600 p-12 text-center text-slate-950 shadow-2xl shadow-emerald-500/20 md:p-24">
          <h2 className="font-heading mb-10 text-4xl leading-none font-black uppercase italic md:text-6xl lg:text-7xl">
            Ready to Accelerate?
          </h2>
          <a
            href={siteConfig.links.line}
            className="group inline-flex items-center gap-4 rounded-2xl bg-slate-950 px-12 py-7 text-white transition-all hover:bg-white hover:text-slate-950 active:scale-95"
          >
            <span className="font-heading text-lg font-black tracking-widest uppercase italic">
              ปรึกษาแผนงานระบบกับผู้เชี่ยวชาญ
            </span>
            <ArrowRight
              size={24}
              className="transition-transform group-hover:translate-x-2"
            />
          </a>
        </div>
      </section>
    </motion.main>
  )
}
