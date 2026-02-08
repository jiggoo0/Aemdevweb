/**
 * [SYSTEM MODULE]: NOT_FOUND_UI v16.4 (ATMOSPHERIC)
 * [STRATEGY]: Technical Resilience | Aesthetic Recovery | Specialist Tone
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import Link from "next/link";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @component NotFound
 * @description หน้าจอแสดงผลกรณีไม่พบหน้าเว็บ (HTTP 404)
 * ออกแบบมาเพื่อลดความสับสนและนำทางผู้ใช้งานกลับสู่หน้าหลักอย่างรวดเร็ว
 */
export default function NotFound() {
  return (
    <div className="bg-surface-main selection:bg-brand-primary/10 relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์พื้นหลังเชิงเทคนิค */}
      <div className="bg-infrastructure-grid absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Ambient Aura: แสงตกกระทบที่สร้างมิติความลึก */}
      <div
        className="ambient-aura absolute top-[-10%] right-[-10%] h-[600px] w-[600px] opacity-20"
        aria-hidden="true"
      />
      <div
        className="ambient-aura absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] opacity-10"
        aria-hidden="true"
      />

      {/* 02. ERROR DIAGNOSTIC DISPLAY: ส่วนประมวลผลความผิดพลาด */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Error Code Anchor: ออกแบบให้ดูเหมือนระบบที่กำลังตรวจสอบพิกัดข้อมูล */}
        <div className="relative mb-16 flex items-center justify-center">
          <span className="text-surface-muted text-[12rem] leading-none font-black tracking-tighter opacity-50 select-none md:text-[16rem]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-surface-main border-brand-primary/20 shadow-pro-lg group flex h-24 w-24 items-center justify-center rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 hover:rotate-12">
              <IconRenderer
                name="SearchX"
                size={48}
                className="text-brand-primary animate-pulse"
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>

        {/* Diagnostic Message: การสื่อสารแบบมืออาชีพ (Consultant Tone) */}
        <div className="mb-14 space-y-6">
          <h1 className="text-text-primary text-4xl leading-none font-black tracking-tighter uppercase italic md:text-6xl">
            ไม่พบหน้าที่ <br /> คุณเรียกใช้งาน
          </h1>
          <p className="text-text-secondary border-brand-primary mx-auto max-w-lg border-l-4 pl-8 text-left text-lg leading-relaxed font-medium italic opacity-90">
            ขออภัยด้วยครับ ดูเหมือนว่าลิ้งก์ที่คุณกำลังเข้าถึงจะไม่มีอยู่ในระบบ
            หรืออาจมีการเปลี่ยนชื่อหน้าที่อยู่ใหม่
            <span className="text-text-primary font-black">
              {" "}
              แนะนำให้คุณกลับไปเริ่มต้นใหม่ที่หน้าแรก หรือทักหาทีมงานของเราได้ทันทีครับ
            </span>
          </p>
        </div>

        {/* 03. RECOVERY ACTIONS: ทางออกที่รวดเร็ว (One-Click Recovery) */}
        <div className="flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="bg-brand-primary hover:bg-text-primary shadow-pro group flex w-full items-center justify-center gap-x-4 rounded-[1.5rem] px-10 py-5 text-[11px] font-black tracking-[0.3em] text-white uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="Home" size={18} />
            กลับหน้าหลัก
          </Link>

          <Link
            href={SITE_CONFIG.links.line}
            className="bg-surface-offset border-surface-muted text-text-primary hover:border-brand-primary flex w-full items-center justify-center gap-x-4 rounded-[1.5rem] border px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="MessageCircle" size={18} />
            ทักแชทสอบถาม
          </Link>
        </div>

        {/* 04. SYSTEM TRACE META: ข้อมูลอ้างอิงของระบบ */}
        <div className="border-surface-muted/30 mt-24 w-full border-t pt-10">
          <div className="text-brand-primary/40 flex flex-col items-center justify-between gap-4 font-mono text-[9px] tracking-[0.3em] uppercase md:flex-row">
            <span>สถานะ: ค้นหาข้อมูลไม่พบ (404_NOT_FOUND)</span>
            <div className="bg-brand-primary/10 hidden h-1 w-1 rounded-full md:block" />
            <span>รหัสอ้างอิง: {new Date().toISOString().split("T")[0]} // SYSTEM_OK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
