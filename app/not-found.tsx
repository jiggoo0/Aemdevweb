/**
 * [SYSTEM MODULE]: NOT_FOUND_UI v17.4.5 (HYBRID_STABILIZED)
 * [STRATEGY]: Technical Resilience | Aesthetic Recovery | Multi-Theme Orchestration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import Link from "next/link";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/**
 * @component NotFound
 * @description หน้าจอแสดงผลกรณีไม่พบหน้าเว็บ (HTTP 404)
 * [STABILIZED]: ปรับจูนระบบแสงเงาและ Contrast ให้สอดคล้องกับโหมด Dark/Light
 */
export default function NotFound() {
  // [DETERMINISTIC]: ใช้ค่าวันปัจจุบันเพื่อสร้าง Trace ID ที่เสถียร (สำหรับการแสดงผล)
  const traceDate = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-surface-main selection:bg-brand-primary/20 relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 transition-colors duration-500">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์พื้นหลัง */}
      <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" aria-hidden="true" />

      {/* Ambient Aura: ปรับตามตัวแปร --ambient-opacity ของระบบ */}
      <div
        className="ambient-aura absolute top-[-10%] right-[-10%] h-[600px] w-[600px] opacity-[var(--ambient-opacity)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-blue-600/5 opacity-[var(--ambient-opacity)] mix-blend-screen blur-[100px]"
        aria-hidden="true"
      />

      {/* 02. ERROR DIAGNOSTIC DISPLAY: ส่วนประมวลผลความผิดพลาด */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Error Code Anchor: ใช้สีที่ปรับตามธีมเพื่อความนุ่มนวล */}
        <div className="relative mb-16 flex items-center justify-center">
          <span className="text-border text-[12rem] leading-none font-black tracking-tighter opacity-30 select-none md:text-[16rem]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "bg-surface-card border-border shadow-glow group flex h-24 w-24 items-center justify-center rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 hover:rotate-12",
              )}
            >
              <IconRenderer
                name="SearchX"
                size={48}
                className="text-brand-primary animate-pulse"
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>

        {/* Diagnostic Message: การสื่อสารระดับ Specialist */}
        <div className="mb-14 space-y-6">
          <h1 className="text-text-primary text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
            Route <br /> <span className="text-brand-primary">Not_Found.</span>
          </h1>
          <p className="text-text-secondary border-brand-primary/50 mx-auto max-w-lg border-l-4 pl-8 text-left text-lg leading-relaxed font-medium italic">
            ขออภัยครับ ดูเหมือนพิกัดข้อมูลที่คุณเรียกใช้งานจะไม่มีอยู่ในระบบ
            <span className="text-text-primary mt-2 block font-black">
              // แนะนำให้คุณกลับไปตั้งหลักที่หน้าแรก หรือปรึกษาทีมงานได้ทันทีครับ
            </span>
          </p>
        </div>

        {/* 03. RECOVERY ACTIONS: ระบบกู้คืนการนำทาง */}
        <div className="flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="bg-text-primary text-surface-main hover:bg-brand-primary shadow-glow group flex w-full items-center justify-center gap-x-4 rounded-[1.5rem] px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="Home" size={18} />
            กลับหน้าหลัก
          </Link>

          <Link
            href={SITE_CONFIG.links.line}
            className="bg-surface-offset border-border text-text-primary hover:border-brand-primary flex w-full items-center justify-center gap-x-4 rounded-[1.5rem] border px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="MessageCircle" size={18} />
            ทักแชทสอบถาม
          </Link>
        </div>

        {/* 04. SYSTEM TRACE META: ข้อมูลอ้างอิงของระบบ */}
        <div className="border-border mt-24 w-full border-t pt-10">
          <div className="text-text-muted/50 flex flex-col items-center justify-between gap-4 font-mono text-[9px] tracking-[0.4em] uppercase md:flex-row">
            <span>Status: 404_NOT_FOUND</span>
            <div className="bg-brand-primary/20 hidden h-1 w-1 rounded-full md:block" />
            <span>Trace_ID: {traceDate} // SYSTEM_STABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
