/**
 * [CORE PAGE]: TERMS_OF_SERVICE v16.2 (STRATEGIC AGREEMENT OPTIMIZED)
 * [PLAN]: Professional Partnership | Legal Clarity | Mutual Success Flow
 * [REVISED BY]: Gemini AI (Specialist & Business Strategist Tone)
 */

import React from "react";
import type { Metadata } from "next";

/* 1. System Infrastructure & Layout Components */
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * [METADATA]: สื่อสารความโปร่งใสและเป็นมืออาชีพ
 */
export const metadata: Metadata = {
  title: `ข้อตกลงการใช้บริการและมาตรฐานการทำงาน | ${SITE_CONFIG.brandName}`,
  description:
    "ทำความเข้าใจแนวทางการทำงานร่วมกัน เพื่อให้การส่งมอบเว็บไซต์และระบบ SEO เป็นไปอย่างแม่นยำและสร้างผลลัพธ์ที่ดีที่สุดให้ธุรกิจคุณครับ",
};

/**
 * @page TermsPage
 * @description หน้าที่ชี้แจง 'กติกาการทำงาน' เพื่อรักษามาตรฐานคุณภาพงาน
 * และปกป้องผลประโยชน์ของลูกค้าในฐานะพาร์ทเนอร์ระยะยาว
 */
export default function TermsPage() {
  // อัปเดตข้อมูลล่าสุดตามวันปัจจุบัน
  const lastUpdated = "8 กุมภาพันธ์ 2569";

  return (
    <LayoutEngine>
      {/* 01. HERO LAYER: เจตนารมณ์แห่งความร่วมมือที่เป็นธรรม */}
      <HeroEngine
        title="ข้อตกลงการทำงานร่วมกัน เพื่อความสำเร็จของธุรกิจคุณ"
        subtitle="เรายึดเอาความสำเร็จของคุณเป็นที่ตั้งครับ เงื่อนไขเหล่านี้ออกแบบมาเพื่อให้เราเข้าใจตรงกัน และช่วยให้การส่งมอบงานระบบคุณภาพสูงเป็นไปอย่างราบรื่นที่สุด"
      />

      {/* 02. CONTENT LAYER: รายละเอียดแนวทางการดำเนินงานเชิงระบบ */}
      <section className="relative container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl space-y-20">
          <div className="border-surface-muted flex items-center justify-between border-b pb-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-text-primary text-[10px] font-black tracking-[0.3em] uppercase">
                Service Standard v16.2
              </span>
            </div>
            <span className="text-text-muted text-[10px] font-bold tracking-wider uppercase italic">
              อัปเดตล่าสุด: {lastUpdated}
            </span>
          </div>

          {/* ส่วนที่ 1: ขอบเขตงานวิศวกรรมดิจิทัล */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              01. เราดูแลอะไรบ้าง และมาตรฐานงานที่คุณจะได้รับ
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              ที่ AEMDEVWEB เราเน้นสร้างเว็บไซต์ที่ใช้งานได้จริงและช่วยทำเงินให้ธุรกิจครับ
              ขอบเขตงานจะครอบคลุมตั้งแต่การเขียนรหัสหลังบ้านให้สะอาดและโหลดไว, การปรับจูน SEO
              ให้คนหาเจอ ไปจนถึงการวางระบบความปลอดภัยตามที่เราได้ตกลงกันไว้ในแผนงาน (Proposal)
              เพื่อให้คุณได้เว็บที่สมบูรณ์แบบที่สุดครับ
            </p>
          </article>

          {/* ส่วนที่ 2: พันธสัญญาความร่วมมือ */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              02. การทำงานร่วมกันระหว่างคุณและทีมงานของเรา
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              เพื่อให้งานออกมาดีที่สุด
              ผมต้องขอรบกวนให้ทางพาร์ทเนอร์ช่วยเตรียมข้อมูลธุรกิจที่ชัดเจนตามกรอบเวลาที่คุยกันไว้ครับ
              ส่วนในด้านเทคนิค ผมและทีมงานจะคอยรายงานความคืบหน้าให้คุณทราบอย่างโปร่งใสในทุกขั้นตอน
              เพื่อให้คุณมั่นใจว่าระบบกำลังถูกสร้างขึ้นอย่างประณีตครับ
            </p>
          </article>

          {/* ส่วนที่ 3: ลิขสิทธิ์และมูลค่าการลงทุน */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              03. เรื่องค่าบริการและสิทธิ์ในการเป็นเจ้าของเว็บไซต์
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              การทำงานจะเริ่มขึ้นเมื่อเราสรุปแผนงานและชำระค่าบริการตามงวดงานที่ตกลงกันครับ
              เมื่อส่งมอบงานและชำระเงินครบถ้วนแล้ว
              **เว็บไซต์และข้อมูลธุรกิจทั้งหมดจะเป็นกรรมสิทธิ์ของคุณ 100%**
              โดยผมจะทำหน้าที่เป็นพาร์ทเนอร์ที่ปรึกษาด้านเทคนิค
              คอยดูแลความเรียบร้อยของระบบให้ในระยะยาวครับ
            </p>
          </article>

          {/* ส่วนที่ 4: การรับประกันและการดูแลหลังการขาย */}
          <article className="space-y-8">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              04. การดูแลหลังบ้านและความเสถียรของระบบ
            </h2>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-medium">
                ผมมีการดูแลหลังการขายเพื่อให้มั่นใจว่าเว็บของคุณจะทำงานได้ลื่นไหลและติดอันดับ Google
                ตามมาตรฐานที่ตกลงกันไว้ หากพบปัญหาที่เกิดจากรหัสหลังบ้านของเรา
                ผมยินดีรีบแก้ไขให้ทันทีเพื่อให้ธุรกิจของคุณเดินหน้าต่อได้ไม่สะดุดครับ
              </p>
              <blockquote className="border-brand-primary bg-surface-offset shadow-pro-sm text-text-secondary rounded-[2rem] border-l-8 p-8 text-sm leading-relaxed font-medium">
                <span className="text-brand-primary mb-2 block font-black tracking-widest uppercase">
                  ข้อควรรู้เพิ่มเติม:
                </span>
                เพื่อให้ระบบมีความเสถียรสูงสุด
                การรับประกันจะไม่รวมถึงกรณีที่มีการเข้าไปแก้ไขรหัสหลังบ้านหรือฐานข้อมูลโดยบุคคลภายนอก
                ที่ไม่ได้ผ่านการตรวจสอบจากทีมงานของเราก่อนนะครับ
              </blockquote>
            </div>
          </article>

          {/* ส่วนที่ 5: การปรับปรุงเงื่อนไข */}
          <article className="space-y-6">
            <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
              05. การปรับปรุงมาตรฐานการให้บริการ
            </h2>
            <p className="text-text-secondary leading-relaxed font-medium">
              โลกเทคโนโลยีในปี 2026 เปลี่ยนไปไวมากครับ
              ผมอาจมีการปรับปรุงกติกาการทำงานตามความเหมาะสมเพื่อให้สอดคล้องกับเทคโนโลยีใหม่ ๆ
              และเพื่อผลประโยชน์สูงสุดของธุรกิจคุณ โดยจะแจ้งให้ทราบผ่านหน้าเว็บนี้เสมอครับ
            </p>
          </article>

          {/* บทสรุปท้ายหน้า: เน้นความสัมพันธ์แบบพาร์ทเนอร์ */}
          <div className="border-surface-muted space-y-4 border-t pt-20 text-center">
            <p className="text-text-primary text-base font-bold tracking-tight italic">
              "เพราะความเข้าใจที่ตรงกัน คือจุดเริ่มต้นของความสำเร็จที่ยั่งยืนครับ"
            </p>
            <p className="text-text-muted mx-auto max-w-lg text-sm leading-relaxed">
              หากคุณมีข้อสงสัยหรืออยากปรับแต่งเงื่อนไขให้เข้ากับรูปแบบธุรกิจเฉพาะทางของคุณ
              ทักมาคุยกันได้เลยนะครับ ผมยินดีหาแนวทางที่ลงตัวที่สุดสำหรับเราทั้งคู่ครับ
            </p>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
