/** @format */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  // ✅ Fixed: Removed unused 'MessageCircle' to clear ESLint error
  Zap,
} from "lucide-react";

// 📦 Data & Utils
import {
  getServiceBySlug,
  getOtherServices,
  servicesData,
} from "@/constants/services-data";
import { siteConfig } from "@/constants/site-config";

// 🛠️ Components
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm";
import { LineStickyButton } from "@/components/shared/LineStickyButton";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 🧬 1. Static Params (SSG)
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * 🔍 2. Dynamic Metadata
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | บริการทำเว็บไซต์โดย ${siteConfig.shortName}`,
    description: service.description,
    openGraph: {
      images: [service.mockups.desktop],
    },
  };
}

/**
 * 🚀 3. Main Service Detail Page
 */
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  const otherServices = getOtherServices(slug);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 right-0 h-[600px] w-[600px] opacity-[0.1] blur-[120px]" />

      {/* --- HEADER: Hero & Pricing --- */}
      <section className="relative z-10 container mx-auto mb-24 px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content Area */}
          <div className="space-y-8">
            <Badge
              variant="luminous"
              className="px-4 py-1.5 tracking-widest uppercase"
            >
              ✨ Best Value Solution
            </Badge>

            <h1 className="font-prompt text-5xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-7xl">
              {service.title}
            </h1>

            <p className="font-anuphan max-w-xl text-xl leading-relaxed font-medium text-slate-400">
              {service.description}
            </p>

            <div className="flex flex-col items-start gap-8 pt-6 sm:flex-row sm:items-center">
              <div className="flex flex-col">
                <span className="font-anuphan mb-1 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                  Starting at
                </span>
                <span className="font-prompt text-aurora-cyan drop-shadow-luminous text-4xl font-black italic">
                  {service.priceDisplay}
                </span>
              </div>
              <Button
                variant="premium"
                size="lg"
                className="shadow-aurora-glow group h-16 px-10 text-lg"
                asChild
              >
                <Link href="/contact">
                  สนใจแพ็กเกจนี้{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Mockup Glass Panel */}
          <div className="group relative">
            <div className="bg-aurora-cyan/20 absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl transition-all duration-1000 group-hover:opacity-50" />
            <div className="shadow-luminous relative aspect-video w-full rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-3 backdrop-blur-sm transition-all duration-700 hover:rotate-0 lg:rotate-2">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-800">
                <Image
                  src={service.mockups.desktop}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS: Deep Dive Content --- */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Main Content Area */}
          <div className="space-y-16 lg:col-span-8">
            {/* รายละเอียดบริการ */}
            <div className="space-y-6">
              <h3 className="font-prompt flex items-center gap-3 text-2xl font-black tracking-tighter text-white uppercase">
                <div className="bg-aurora-cyan h-8 w-1.5 rounded-full" />
                รายละเอียดบริการ
              </h3>
              <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400">
                {service.longDescription}
              </p>
            </div>

            {/* Features List Grid */}
            <div className="rounded-[3rem] border border-white/5 bg-white/[0.03] p-10 backdrop-blur-sm">
              <h3 className="font-prompt mb-10 flex items-center gap-3 text-xl font-black tracking-widest text-white uppercase">
                <Zap className="text-aurora-cyan h-6 w-6 animate-pulse" />
                สิ่งที่คุณจะได้รับ
              </h3>
              <ul className="grid gap-6 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="group flex items-start gap-4">
                    <div className="bg-aurora-emerald/10 group-hover:bg-aurora-emerald/30 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors">
                      <CheckCircle2 className="text-aurora-emerald h-4 w-4" />
                    </div>
                    <span className="font-anuphan text-base font-bold text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="border-aurora-cyan/30 bg-aurora-cyan/5 shadow-luminous group sticky top-32 overflow-hidden rounded-[2.5rem] border p-8">
              <div className="aurora-bg -top-1/2 -right-1/2 opacity-10 transition-opacity group-hover:opacity-20" />
              <div className="relative z-10">
                <h3 className="font-prompt mb-4 text-2xl font-black tracking-tighter text-white uppercase italic">
                  พร้อมเริ่มงาน?
                </h3>
                <p className="font-anuphan mb-8 font-medium text-slate-400">
                  ส่งข้อมูลให้เราประเมิน หรือนัดคุยรายละเอียดผ่าน{" "}
                  <span className="text-white">LINE Official</span> ตอบไวภายใน 5 นาทีครับ
                </p>
                {/* ✅ เรียกใช้ Lead Form */}
                <LineLeadForm variant="default" />
                <div className="mt-8 border-t border-white/10 pt-6 text-center">
                  <div className="font-prompt text-aurora-cyan inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                    <Sparkles className="h-3 w-3" /> Sales Engine Expert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CROSS SELL: Other Services --- */}
      <section className="relative z-10 border-t border-white/5 bg-white/[0.01] py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-white uppercase italic md:text-5xl">
              บริการอื่นๆ <br />
              <span className="text-aurora-cyan">ที่น่าสนใจ</span>
            </h2>
            <Link
              href="/services"
              className="font-prompt group flex items-center gap-2 text-xs font-black tracking-[0.2em] text-slate-500 uppercase transition-colors hover:text-white"
            >
              View All Solutions{" "}
              <ArrowRight className="text-aurora-cyan h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {otherServices.slice(0, 3).map((svc) => (
              <ServiceCard key={svc.id} {...svc} />
            ))}
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  );
}
