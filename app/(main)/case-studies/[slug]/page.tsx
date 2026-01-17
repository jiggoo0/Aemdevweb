/** @format */
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Sparkles,
  Code2,
  LineChart,
  Target,
  Zap,
  MessageCircle,
} from "lucide-react"

// ✅ Components & UI
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 📦 Mock Data Manager (Luminous Edition)
const getCaseStudy = (slug: string) => {
  const cases = [
    {
      slug: "project-01",
      title: "Raan-Aroi Delivery",
      client: "ร้านอร่อย เดลิเวอรี่",
      category: "Food & Beverage",
      impact: "ยอดขายเพิ่มขึ้น 300% ใน 3 เดือน",
      description:
        "เปลี่ยนร้านอาหารธรรมดาให้กลายเป็น Digital Franchise ด้วยระบบสั่งอาหารที่เสถียรที่สุด ตัดบัตรได้ทันที ลดภาระแอดมิน 100%",
      image: "/images/showcase/project-01.webp",
      tech: ["Next.js 15", "Tailwind CSS", "Stripe Payment", "Line API"],
      stats: [
        { label: "Page Speed", value: "99/100" },
        { label: "Conversion", value: "+4.5%" },
        { label: "Traffic", value: "15k/mo" },
      ],
    },
  ]
  return cases.find((c) => c.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 🔍 SEO Metadata
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)

  if (!project) return { title: "Case Study Not Found" }

  return {
    title: `${project.title} | Case Study by AEMDEVWEB`,
    description: `เบื้องหลังการสร้างรายได้เพิ่มขึ้น 300% ของ ${project.client}`,
    openGraph: { images: [project.image] },
  }
}

/**
 * 🚀 Case Study: Luminous Edition
 */
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getCaseStudy(slug)

  if (!project) return notFound()

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Aurora Ambient: แสงจางๆ ขับให้ตัวหนังสือเด่น */}
      <div className="aurora-bg top-0 right-0 h-[600px] w-full opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* 🔙 Back Navigation */}
        <Link
          href="/services"
          className="hover:text-aurora-cyan group font-prompt mb-12 inline-flex items-center text-[10px] font-black tracking-widest text-slate-500 uppercase transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Back to Services
        </Link>

        {/* 🏆 Header Section: The Impact */}
        <header className="mb-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Badge
                variant="luminous"
                className="mb-6 px-4 py-1.5 tracking-widest uppercase"
              >
                {project.category}
              </Badge>
              <h1 className="font-prompt mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-7xl">
                {project.title}
              </h1>
              <p className="font-anuphan text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
                {project.description}
              </p>
            </div>

            <div className="glass-card border-aurora-emerald/30 bg-aurora-emerald/5 shadow-luminous min-w-[300px] rounded-3xl p-8">
              <span className="font-prompt mb-2 block text-[10px] font-black tracking-widest text-slate-500 uppercase">
                Project Impact
              </span>
              <span className="font-prompt text-aurora-emerald text-2xl leading-tight font-black uppercase italic md:text-3xl">
                {project.impact}
              </span>
            </div>
          </div>
        </header>

        {/* 🖼️ Hero Showcase Image */}
        <div className="shadow-luminous group relative mb-24 aspect-video w-full overflow-hidden rounded-[3rem] border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </div>

        {/* 📄 Content Grid */}
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left: The Story (8/12) */}
          <div className="space-y-20 lg:col-span-8">
            <div className="prose prose-invert prose-lg md:prose-xl prose-headings:font-prompt prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white prose-p:font-anuphan prose-p:text-slate-400 prose-p:font-medium prose-p:leading-relaxed max-w-none">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Target className="text-aurora-cyan h-6 w-6" />
                </div>
                <h2 className="!mb-0 text-3xl">🎯 โจทย์ที่ได้รับ</h2>
              </div>
              <p>
                ลูกค้าต้องการขยายฐานลูกค้าจากออฟไลน์สู่ออนไลน์
                แต่ติดปัญหาเรื่องเว็บเดิมโหลดช้า และลูกค้าไม่กล้ากรอกบัตรเครดิต
                เราจึงทำการรื้อระบบใหม่ทั้งหมดโดยใช้{" "}
                <span className="text-white">Next.js 15+</span>
                เพื่อความเร็วและความปลอดภัยสูงสุดที่คู่แข่งในตลาดเทียบไม่ติด
              </p>

              <div className="mt-16 mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Zap className="text-aurora-emerald h-6 w-6" />
                </div>
                <h2 className="!mb-0 text-3xl">💡 สิ่งที่นายเอ็มจัดให้</h2>
              </div>
              <ul className="grid list-none gap-4 p-0 md:grid-cols-1">
                {[
                  "ออกแบบ UX/UI ใหม่ เน้น Mobile First เพื่อการสั่งซื้อที่ลื่นไหลที่สุด",
                  "เชื่อมต่อ Payment Gateway ตัดยอดทันที ไม่ต้องรอแอดมินคอนเฟิร์ม",
                  "วางโครงสร้าง SEO แบบ Technical เพื่อให้ติดหน้าแรก Google ในระยะยาว",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="font-anuphan flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 text-slate-300"
                  >
                    <Sparkles className="text-aurora-cyan h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Sidebar Stats & CTA (4/12) */}
          <aside className="sticky top-32 space-y-8 lg:col-span-4">
            {/* Stats Glass Card */}
            <div className="glass-card rounded-[2.5rem] border-white/5 p-8">
              <h4 className="font-prompt mb-8 flex items-center gap-3 text-xs font-black tracking-widest text-white uppercase">
                <LineChart className="text-aurora-cyan h-4 w-4" /> Results
              </h4>
              <div className="space-y-6">
                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between"
                  >
                    <span className="font-anuphan text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      {stat.label}
                    </span>
                    <span className="font-prompt group-hover:text-aurora-cyan text-xl font-black text-white transition-colors">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="glass-card rounded-[2.5rem] border-white/5 p-8">
              <h4 className="font-prompt mb-6 flex items-center gap-3 text-xs font-black tracking-widest text-white uppercase">
                <Code2 className="text-aurora-emerald h-4 w-4" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-white/10 bg-white/5 font-medium text-slate-400"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Dynamic CTA Card */}
            <div className="border-aurora-cyan/30 bg-aurora-cyan/5 group relative overflow-hidden rounded-[2.5rem] border p-10 text-center">
              <div className="aurora-bg -top-1/2 -left-1/2 opacity-10 transition-opacity group-hover:opacity-20" />
              <h3 className="font-prompt relative z-10 mb-4 text-2xl font-black tracking-tighter text-white uppercase italic">
                อยากได้เว็บ <br />
                <span className="text-aurora-cyan">แบบนี้บ้างไหม?</span>
              </h3>
              <p className="font-anuphan relative z-10 mb-8 text-sm font-medium text-slate-400">
                อย่ารอให้คู่แข่งแซงหน้า ทักมาคุยไอเดีย <br />
                ให้นายเอ็มวางเครื่องยนต์ธุรกิจให้ครับ
              </p>
              <Button
                variant="premium"
                className="shadow-aurora-glow relative z-10 h-14 w-full text-sm font-black"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" /> ขอใบเสนอราคาฟรี
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>

      <LineStickyButton />
    </main>
  )
}
