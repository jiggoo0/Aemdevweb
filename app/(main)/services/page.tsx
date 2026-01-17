/** @format */
import { Metadata } from "next"
import { servicesData } from "@/constants/services-data"
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
} from "lucide-react"

// ✅ Components & UI
import { ServiceCard } from "@/components/shared/ServiceCard"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "บริการทำเว็บไซต์ครบวงจร | AEMDEVWEB",
  description:
    "รวมแพ็กเกจทำเว็บไซต์ Sale Page, Corporate, และระบบ Custom ที่ออกแบบมาเพื่อปิดการขายและรองรับ SEO ปี 2026",
}

/**
 * 🛠️ Services Hub: Luminous Edition
 * ยกระดับหน้าบริการด้วยระบบแสง Aurora และ Layout ที่เน้นความพรีเมียม
 */
export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />
      <div className="aurora-bg bg-aurora-violet -bottom-40 -left-40 h-[600px] w-[600px] opacity-[0.05] blur-[150px]" />

      {/* 🌤️ 1. HERO SECTION: The Engine Hook */}
      <section className="relative container mx-auto mb-20 px-4 text-center">
        <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5" /> High-End Web Solutions
        </div>

        <h1 className="font-prompt mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl">
          บริการที่ <br className="md:hidden" />
          <span className="text-aurora-cyan drop-shadow-luminous">
            สร้างยอดขาย
          </span>
        </h1>

        <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
          เลือกแพ็กเกจที่เหมาะกับสเกลธุรกิจของคุณ ทุกงานขับเคลื่อนด้วย{" "}
          <span className="text-white italic">"Luminous Engine"</span>
          (Next.js 15) โหลดไว ติด SEO และทรงพลังที่สุดในปี 2026
        </p>

        {/* Feature Highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-60">
          {[
            { icon: Zap, text: "Ultra Fast Load" },
            { icon: ShieldCheck, text: "100% Google Score" },
            { icon: MessageCircle, text: "Line Integration" },
          ].map((item, i) => (
            <div
              key={i}
              className="font-prompt flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300 uppercase"
            >
              <item.icon className="text-aurora-cyan h-4 w-4" /> {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 2. SERVICES GRID: The Solution Gallery */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {servicesData.map((service) => (
            <div key={service.id} className="group relative">
              {/* Glow effect on hover */}
              <div className="bg-aurora-cyan/10 absolute -inset-2 rounded-[2.5rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* 📢 3. CTA & HELP: Glass Support Card */}
      <section className="relative z-10 container mx-auto px-4 pb-24">
        <div className="glass-card shadow-luminous relative overflow-hidden rounded-[4rem] border border-white/10 p-12 text-center md:p-20">
          {/* Internal Aurora Glow */}
          <div className="aurora-bg -top-1/2 -right-1/2 h-full w-full opacity-10" />

          <h2 className="font-prompt mb-6 text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
            ยังไม่แน่ใจว่าต้องใช้อันไหน?
          </h2>
          <p className="font-anuphan mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-400">
            ไม่ต้องเดาให้ปวดหัว ทักไลน์มาคุยสโคปงานกันก่อนได้ครับ{" "}
            <br className="hidden md:block" />
            นายเอ็มปรึกษาฟรี ไม่มีกั๊ก{" "}
            <span className="text-aurora-cyan decoration-aurora-cyan/30 underline underline-offset-8">
              ตอบเองทุกแชทภาษาพี่น้อง
            </span>
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <LineLeadForm variant="button" label="ทักไลน์ ปรึกษานายเอ็ม" />
            <Button
              variant="outline"
              size="lg"
              className="hover:border-aurora-cyan group h-16 rounded-2xl border-white/10 px-10 text-lg transition-all"
            >
              ดูผลงานที่ผ่านมา{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}
