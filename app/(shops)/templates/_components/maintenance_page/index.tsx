/** @format */

import React from "react";
import { Settings, MessageCircle, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import { MaintenanceData } from "./schema";

/**
 * MaintenanceTemplate - หน้าแจ้งสถานะการปรับปรุงระบบ
 * แนวคิด: สื่อสารอย่างตรงไปตรงมา จริงใจ และรวดเร็วในสไตล์นายเอ็มซ่ามากส์
 * ตอกย้ำความมั่นใจว่าเรากำลังจูนเครื่องเพื่อให้เว็บกลับมาซิ่งกว่าเดิมครับ
 */
export default function MaintenanceTemplate({
  data,
}: {
  data: MaintenanceData;
}) {
  // [Safety Check]: ตรวจสอบข้อมูลก่อนแสดงผลเพื่อป้องกันหน้าจอค้าง
  if (!data?.hero) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* ส่วนตกแต่งพื้นหลัง: ลายตารางจางๆ เพื่อโชว์ความเนี้ยบของงานระบบ */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* ส่วนไอคอนเคลื่อนไหว: สื่อถึงการกำลังเร่งมือจูนเครื่อง */}
        <div className="relative mb-12">
          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-emerald-500 shadow-2xl">
            <Settings size={40} className="animate-[spin_4s_linear_infinite]" />
          </div>
        </div>

        {/* ส่วนข้อความแจ้งเตือน: เนื้อหาที่จริงใจและเข้าใจง่าย */}
        <h1 className="font-heading text-5xl leading-tight font-black tracking-tighter text-slate-950 md:text-8xl">
          {data.hero.title} <br />
          <span className="text-emerald-500 italic">{data.hero.highlight}</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
          {data.hero.description}
        </p>

        {/* ส่วนช่องทางติดต่อ: ให้ลูกค้าอุ่นใจว่ายังคุยกับเราได้เสมอ */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="h-px w-20 bg-slate-200" />

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
              {data.contact.label}
            </span>
            <Link
              href={data.contact.href}
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xl font-black text-slate-950 shadow-sm ring-1 ring-slate-100 transition-all hover:bg-slate-950 hover:text-white hover:shadow-xl active:scale-95"
            >
              <MessageCircle size={22} className="text-emerald-500" />
              {data.contact.linkText}
            </Link>
          </div>

          <Link
            href="/"
            className="group mt-12 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:text-slate-950"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </main>

      {/* ส่วนรายละเอียดด้านล่าง: ตอกย้ำเทคโนโลยีที่ใช้ */}
      <footer className="fixed bottom-8 w-full text-center opacity-30 select-none">
        <div className="flex items-center justify-center gap-2">
          <Zap size={12} className="text-emerald-600" />
          <p className="font-heading text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
            Maintenance Mode • AEM Engine v2026
          </p>
        </div>
      </footer>
    </div>
  );
}
