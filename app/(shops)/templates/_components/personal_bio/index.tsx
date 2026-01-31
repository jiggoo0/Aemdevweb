/** @format */

"use client";

import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Facebook,
  Github,
  ExternalLink,
  Zap,
  Star,
  type LucideIcon, // [FIX]: นำเข้าประเภทข้อมูลเพื่อล้างพิกัด any
} from "lucide-react";
import Link from "next/link";
import { PersonalBioData } from "./schema";

/** * IconMap - ตัวช่วยแปลงชื่อไอคอนจากพิกัดข้อมูลให้เป็นคอมโพเนนต์จริง
 * [FIX]: ระบุประเภทข้อมูล LucideIcon แทนการใช้ any เพื่อความกริบของระบบงาน
 */
const IconMap: Record<string, LucideIcon> = {
  MessageCircle: MessageCircle,
  Facebook: Facebook,
  Github: Github,
};

/**
 * [Personal Bio Template]: ชุดพิกัดหน้าเว็บสำหรับโปรไฟล์ส่วนตัวและพอร์ตโฟลิโอ
 * แนวคิด: เรียบง่าย ทรงพลัง และวางระบบให้โหลดไวระดับเสี้ยววินาที
 * วางโครงสร้างโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function PersonalBioTemplate({
  data,
}: {
  data: PersonalBioData;
}) {
  // [Safety Shield]: ตรวจสอบความเรียบร้อยของพิกัดข้อมูลก่อนเริ่มแสดงผล
  if (!data || !data.profile) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Loading Profile Data...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* วางพิกัดพื้นหลัง: ลายตารางจางๆ เพื่อความเนี้ยบสไตล์งานระบบสมัยใหม่ */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      <main className="container mx-auto max-w-2xl px-6 pt-20 pb-32">
        {/* 1. ส่วนพิกัดข้อมูลส่วนตัว (Profile Section) */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-10">
            <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/10" />
            <div className="shadow-3xl relative h-36 w-36 overflow-hidden rounded-full border-4 border-slate-950">
              {data.profile.avatar ? (
                <Image
                  src={data.profile.avatar}
                  alt={data.profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="font-heading flex h-full w-full items-center justify-center bg-slate-100 text-5xl font-black text-slate-300 italic">
                  {data.profile.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="absolute -right-2 -bottom-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 shadow-2xl ring-4 ring-white">
              <Zap size={24} className="fill-slate-950" />
            </div>
          </div>

          <h1 className="font-heading text-4xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
            {data.profile.name}
          </h1>
          <div className="mt-3 inline-block rounded-full bg-slate-50 px-4 py-1">
            <p className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
              {data.profile.role}
            </p>
          </div>

          <p className="mt-10 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            {data.profile.bio}
          </p>
        </div>

        {/* 2. ส่วนพิกัดตัวเลขสถิติ (Stats Section) */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-y border-slate-50 py-12">
          {data.stats.map(
            (stat: { value: string; label: string }, i: number) => (
              <div key={i} className="text-center">
                <p className="font-heading text-3xl font-black text-slate-950 italic">
                  {stat.value}
                </p>
                <p className="mt-2 text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
                  {stat.label}
                </p>
              </div>
            ),
          )}
        </div>

        {/* 3. รายการพิกัดลิงก์ติดต่อ (Links Section) */}
        <div className="mt-16 space-y-5">
          <p className="font-heading mb-8 text-center text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
            Connect & Work with me
          </p>
          {data.socials.map(
            (
              social: { icon: string; href: string; label: string },
              i: number,
            ) => {
              const Icon = IconMap[social.icon] || ExternalLink;
              return (
                <Link
                  key={i}
                  href={social.href}
                  className="group flex items-center justify-between rounded-[2rem] border border-slate-50 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950">
                      <Icon size={24} />
                    </div>
                    <span className="font-heading text-sm font-black tracking-widest text-slate-950 uppercase italic">
                      {social.label}
                    </span>
                  </div>
                  <ExternalLink
                    size={18}
                    className="mr-2 text-slate-200 transition-colors group-hover:text-emerald-500"
                  />
                </Link>
              );
            },
          )}
        </div>

        {/* 4. ส่วนพิกัดปิดการขาย (CTA Section) */}
        <div className="mt-24">
          <Link
            href={data.cta.href}
            className="group font-heading flex h-24 items-center justify-center gap-6 rounded-[2.5rem] bg-slate-950 text-sm font-black tracking-[0.3em] text-emerald-500 uppercase italic shadow-2xl shadow-slate-950/20 transition-all hover:bg-emerald-600 hover:text-slate-950 active:scale-95"
          >
            <Star
              size={22}
              className="fill-current transition-transform group-hover:rotate-12"
            />
            {data.cta.text}
          </Link>
        </div>
      </main>

      {/* ลายเซ็นต์ท้ายพิกัดหน้าเว็บ: ตอกย้ำมาตรฐานปี 2026 */}
      <footer className="py-12 text-center opacity-30 select-none">
        <p className="font-heading text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Speed Profile Unit • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}
