/**
 * [COMPONENT]: THAI_TRUST_BADGE v17.9.2 (TRUST_ENGINEERING)
 * [STRATEGY]: Psychological Safety Signals | Clean Grid Layout | Local Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { ShieldCheck, Truck, Award, CreditCard } from "lucide-react";
import type { ReactNode } from "react";

interface TrustItemProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

/**
 * [SUB-COMPONENT]: TRUST_ITEM
 * ออกแบบมาให้เป็น Atomic Unit เพื่อความเสถียรของ Layout
 */
function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-transparent p-6 text-center transition-all duration-300 hover:border-slate-100 hover:bg-slate-50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

interface ThaiTrustBadgeProps {
  readonly clientTrust?: string;
}

export function ThaiTrustBadge({ clientTrust }: ThaiTrustBadgeProps) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <span className="text-sm font-bold tracking-widest text-rose-600 uppercase">
          ความมั่นใจ 100%
        </span>
        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
          มั่นใจในทุกการสั่งซื้อ
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-rose-200" />
      </div>

      {/* Trust Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TrustItem
          icon={<ShieldCheck className="h-8 w-8" />}
          title="จดทะเบียนถูกต้อง"
          description="ดำเนินงานภายใต้บริษัทที่จดทะเบียนพาณิชย์ ตรวจสอบได้ทุกขั้นตอน"
        />
        <TrustItem
          icon={<CreditCard className="h-8 w-8" />}
          title="ชำระเงินปลอดภัย"
          description="รองรับการโอนผ่านธนาคารชั้นนำ และระบบ PromptPay พร้อมหลักฐานยืนยัน"
        />
        <TrustItem
          icon={<Truck className="h-8 w-8" />}
          title="จัดส่งรวดเร็ว"
          description="พันธมิตรขนส่งชั้นนำทั่วไทย สินค้าถึงมือใน 1-3 วันทำการ"
        />
        <TrustItem
          icon={<Award className="h-8 w-8" />}
          title="การันตีคุณภาพ"
          description={
            clientTrust || "คัดสรรสิ่งที่ดีที่สุดเพื่อลูกค้า พร้อมระบบ Support ตลอด 24 ชม."
          }
        />
      </div>

      {/* [LOCAL_SIGNALS]: ตราสัญลักษณ์ที่คนไทยคุ้นเคย (Mockup Icons) */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale transition-all hover:grayscale-0">
        {/* ในระบบจริงจะใช้เป็นภาพ WebP ขนาดเล็กที่ Optimized แล้ว */}
        <div className="flex items-center gap-2 grayscale transition-all hover:grayscale-0">
          <span className="text-xs font-bold text-slate-400">PAYMENT SECURED BY</span>
          <div className="flex gap-4">
            {/* Simulated Bank Logos / SSL */}
            <div className="h-8 w-12 rounded bg-slate-200" />
            <div className="h-8 w-12 rounded bg-slate-200" />
            <div className="h-8 w-12 rounded bg-slate-200" />
          </div>
        </div>
      </div>

      {/* [REASSURANCE_TEXT]: ข้อความตอกย้ำความปลอดภัยท้ายส่วน */}
      <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
        <p className="text-sm font-medium text-slate-600">
          <span className="font-bold text-slate-900">หมายเหตุ:</span>{" "}
          ข้อมูลส่วนตัวและข้อมูลการชำระเงินของคุณจะถูกรักษาเป็นความลับสูงสุดตามมาตรฐาน PDPA
        </p>
      </div>
    </div>
  );
}
