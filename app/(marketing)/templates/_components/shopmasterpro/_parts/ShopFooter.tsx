/** @format */

import React from "react"
import { Phone, MessageCircle, Mail } from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface ShopFooterProps {
  data: {
    description: string
    payments: string[]
    contact: {
      phone: string
      line: string
      email: string
    }
  }
  logo: string
}

/**
 * ShopFooter - ส่วนท้ายของระบบ ShopMasterPro
 * ปรับปรุงพิกัด Type และระบบ Font ให้เป็นมาตรฐาน Specialist 2026
 */
export const ShopFooter = ({ data, logo }: ShopFooterProps) => (
  <footer className="border-t border-slate-900 bg-slate-950 py-32 text-left text-slate-500">
    <div className="container mx-auto grid gap-20 px-6 lg:grid-cols-4">
      {/* 1. ส่วนแบรนด์และพิกัดการชำระเงิน */}
      <div className="space-y-10 lg:col-span-2">
        <div className="font-heading text-3xl font-black tracking-tighter text-white uppercase italic">
          {logo}
          <span className="text-orange-600">.</span>
        </div>

        <p className="font-body max-w-md text-base leading-loose font-bold">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {data.payments.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] font-black tracking-widest text-white/40 uppercase italic"
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* 2. ส่วนศูนย์บริการติดต่อ (Contact Center) */}
      <div className="space-y-10">
        <h4 className="font-heading text-[10px] font-black tracking-[0.3em] text-white uppercase italic">
          Contact Center
        </h4>

        <ul className="font-body space-y-6 text-sm font-bold">
          <li className="flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
            <Phone size={16} className="text-orange-500" />
            {data.contact.phone}
          </li>
          <li className="flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
            <MessageCircle size={16} className="text-orange-500" />
            {data.contact.line}
          </li>
          <li className="flex cursor-pointer items-center gap-4 transition-colors hover:text-white">
            <Mail size={16} className="text-orange-500" />
            {data.contact.email}
          </li>
        </ul>
      </div>
    </div>

    {/* พิกัดลิขสิทธิ์ระบบท้ายหน้า */}
    <div className="container mx-auto mt-24 border-t border-white/5 px-6 pt-12 text-center md:text-left">
      <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-700 uppercase italic">
        Architecture by AEMDEVWEB v2026
      </p>
    </div>
  </footer>
)
