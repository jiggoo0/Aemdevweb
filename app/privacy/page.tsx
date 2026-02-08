/**
 * [CORE PAGE]: PRIVACY_POLICY v16.2 (STRATEGIC TRUST OPTIMIZED)
 * [PLAN]: Data Integrity | Professional Transparency | PDPA Alignment
 * [REVISED BY]: Gemini AI (Specialist & Human-Centric Tone)
 */

import React from "react";
import type { Metadata } from "next";

/* 1. System Infrastructure & Layout */
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * [METADATA]: ปรับปรุงเพื่อสื่อถึงความใส่ใจในการดูแลข้อมูลของคุณ
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัวและความปลอดภัยของข้อมูล | ${SITE_CONFIG.brandName}`,
  description:
    "เราให้ความสำคัญกับการรักษาความลับและมาตรฐานความปลอดภัยของข้อมูลคุณอย่างสูงสุด เพื่อความโปร่งใสและสบายใจในการร่วมงานกันครับ",
};

/**
 * @page PrivacyPage
 * @description หน้าที่บอกถึงความตั้งใจในการดูแลข้อมูลของพาร์ทเนอร์
 * เปลี่ยนจากเอกสารที่อ่านยาก ให้เป็นคำสัญญาที่ชัดเจนและไว้ใจได้
 */
export default function PrivacyPage() {
  // อัปเดตข้อมูลล่าสุดตามวันปัจจุบัน
  const lastUpdated = "8 กุมภาพันธ์ 2569";

  return (
    <LayoutEngine>
      {/* 01. HERO LAYER: การประกาศพันธสัญญาความเป็นส่วนตัว */}
      <HeroEngine
        title="ข้อมูลของคุณสำคัญสำหรับเรา เหมือนเป็นข้อมูลของเราเองครับ"
        subtitle="ความไว้ใจคือรากฐานของการทำงานร่วมกัน เราจึงวางระบบจัดการข้อมูลที่ปลอดภัยและได้มาตรฐาน เพื่อให้พาร์ทเนอร์ทุกท่านมั่นใจว่าข้อมูลจะได้รับการดูแลอย่างดีที่สุด"
      />

      {/* 02. CONTENT LAYER: รายละเอียดการดูแลข้อมูลที่เป็นระบบ */}
      <section className="relative container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl space-y-20">
          <div className="border-surface-muted flex items-center justify-between border-b pb-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-text-primary text-[10px] font-black tracking-[0.3em] uppercase">
                Privacy Protection v16.2
              </span>
            </div>
            <span className="text-text-muted text-[10px] font-bold tracking-wider uppercase italic">
              อัปเดตล่าสุด: {lastUpdated}
            </span>
          </div>

          {/* ส่วนที่ 1: ขอบเขตการเก็บข้อมูล */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              01. เราเก็บข้อมูลอะไรบ้าง และเก็บไปเพื่ออะไร
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              เพื่อให้การวางแผนระบบเป็นไปอย่างแม่นยำ
              เราจะขอจัดเก็บเฉพาะข้อมูลที่จำเป็นต่อการทำงานร่วมกันเท่านั้นครับ เช่น ชื่อผู้ติดต่อ
              เบอร์โทรศัพท์ อีเมล หรือรายละเอียดเป้าหมายทางธุรกิจ
              โดยข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์ธุรกิจของคุณมากที่สุดครับ
            </p>
          </article>

          {/* ส่วนที่ 2: มาตรฐานการใช้งานข้อมูล */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              02. วิธีที่เราดูแลและใช้ข้อมูลของคุณ
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              ข้อมูลของคุณจะถูกใช้เพื่อวิเคราะห์และเพิ่มประสิทธิภาพให้กับงานที่เราดูแลเท่านั้น
              เรายึดมั่นในความซื่อสัตย์เป็นสำคัญ: **เราไม่มีนโยบายการนำข้อมูลของคุณไปขาย แลกเปลี่ยน
              หรือส่งต่อให้คนอื่น** เพื่อผลประโยชน์ทางการค้าอย่างเด็ดขาดครับ
            </p>
          </article>

          {/* ส่วนที่ 3: ระบบรักษาความปลอดภัย */}
          <article className="space-y-8">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              03. ความปลอดภัยที่คุณไว้ใจได้
            </h2>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-medium">
                เราใช้เทคโนโลยีเข้ารหัสและระบบรักษาความปลอดภัยของเซิร์ฟเวอร์ที่ทันสมัย
                เพื่อป้องกันไม่ให้ข้อมูลรั่วไหลหรือถูกเข้าถึงโดยไม่ได้รับอนุญาต
                ข้อมูลแผนธุรกิจของคุณจะถูกรักษาเป็นความลับอย่างเข้มงวดตลอดเวลาที่เราดูแลกันครับ
              </p>
              <blockquote className="border-brand-primary bg-surface-offset shadow-pro-sm text-text-primary rounded-[2rem] border-l-8 p-8 text-base leading-relaxed font-medium italic">
                "เพราะความลับของคุณคือหัวใจของธุรกิจ ข้อมูลทุกอย่างที่เราได้รับ
                จะถูกดูแลด้วยมาตรฐานความปลอดภัยที่ผมให้ความสำคัญเป็นอันดับหนึ่งครับ"
              </blockquote>
            </div>
          </article>

          {/* ส่วนที่ 4: สิทธิ์ตามกฎหมาย PDPA */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              04. สิทธิ์ของคุณในการจัดการข้อมูลส่วนตัว
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              คุณคือเจ้าของข้อมูลและมีสิทธิ์เต็มที่ครับ ไม่ว่าจะเป็นการขอเข้ามาดู แก้ไข
              หรือขอให้เราลบข้อมูลของคุณออกจากระบบ คุณสามารถแจ้งความประสงค์ได้ทุกเมื่อ
              ทีมงานของเราพร้อมดำเนินการให้ทันทีโดยไม่มีเงื่อนไขครับ
            </p>
          </article>

          {/* ส่วนที่ 5: ช่องทางการสื่อสาร */}
          <div className="border-surface-muted border-t pt-16">
            <div className="bg-text-primary text-surface-main group relative overflow-hidden rounded-[3rem] p-10 md:p-14">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">
                  สอบถามเรื่องความปลอดภัยข้อมูล
                </h3>
                <p className="text-base leading-relaxed font-medium opacity-70">
                  หากคุณมีข้อสงสัยหรือกังวลใจเรื่องการเก็บข้อมูล ทักแชทมาคุยกับผมผ่าน Line OA
                  หรือช่องทางที่สะดวกได้เลยนะครับ
                  ผมยินดีให้คำอธิบายและดูแลเรื่องนี้ให้คุณอย่างเต็มที่ครับ
                </p>
              </div>
              <div className="bg-brand-primary absolute -right-10 -bottom-10 h-40 w-40 opacity-20 blur-[80px]" />
            </div>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
