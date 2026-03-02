import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { constructMetadata } from "@/lib/seo-utils";
import LayoutEngine from "@/components/templates/LayoutEngine";
import PredictiveTerminal from "@/components/features/ai/PredictiveTerminal";
import TrustBadge from "@/components/shared/TrustBadge";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: `AI Strategy Consultant | เครื่องมือจำลอง ROI สำหรับธุรกิจ | ${SITE_CONFIG.expert.displayName}`,
    description:
      "ทดลองใช้ระบบ AI อัจฉริยะวิเคราะห์โครงสร้างธุรกิจและคำนวณโอกาสเติบโต (ROI) ของคุณได้ฟรีทันที",
    path: "/ai-consultant",
  });
}

export default function AIConsultantPage() {
  return (
    <LayoutEngine spacing="none">
      <main className="bg-surface-main min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4">
          {/* --- 01. LAB HEADER --- */}
          <header className="mx-auto mb-24 max-w-4xl space-y-8 text-center">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mx-auto inline-flex items-center gap-4 rounded-full border px-6 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
              <span>Predictive_ROI_Laboratory.v1.1</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              AI Strategy <br />
              <span className="text-brand-primary">Consultant.</span>
            </h1>

            <p className="text-text-secondary mx-auto max-w-2xl text-xl font-bold italic md:text-3xl">
              “วิเคราะห์รายได้ที่หายไป และปลดล็อกศักยภาพใหม่ <br className="hidden md:block" />
              ด้วยขุมพลัง <span className="text-text-primary underline">Predictive AI</span>{" "}
              รุ่นล่าสุด”
            </p>
          </header>

          {/* --- 02. INTERACTIVE TERMINAL --- */}
          <section className="mx-auto max-w-5xl">
            <div className="glass-card shadow-pro-xl rounded-section border-border/50 relative overflow-hidden border p-1 backdrop-blur-3xl">
              <div className="bg-surface-card overflow-hidden rounded-[1.2rem]">
                {/* Terminal Top Bar */}
                <div className="border-border/10 bg-surface-offset flex items-center justify-between border-b px-6 py-4">
                  <div className="flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                  </div>
                  <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-40">
                    Neural_Handshake_Active
                  </span>
                </div>

                {/* THE ACTUAL AI ENGINE UI */}
                <PredictiveTerminal />
              </div>
            </div>
          </section>

          {/* --- 03. TRUST PILLARS --- */}
          <div className="mt-32">
            <TrustBadge />
          </div>
        </div>
      </main>
    </LayoutEngine>
  );
}
