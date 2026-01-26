/** @format */
import React from "react"
import { Phone, MessageCircle } from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface RentalFooterProps {
  data: {
    brand: string
    tagline: string
    contact: {
      phone: string
      line: string
    }
  }
}

/**
 * RentalFooter - ส่วนท้ายของระบบเช่าเว็บไซต์
 * ปรับปรุงพิกัด Type และระบบ Font ให้เป็นมาตรฐาน Specialist
 */
export const RentalFooter = ({ data }: RentalFooterProps) => (
  <footer className="border-t border-slate-900 bg-slate-950 py-20 text-slate-400">
    <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
      {/* ส่วนพิกัดแบรนด์และสโลแกน */}
      <div className="text-center md:text-left">
        <h3 className="font-heading mb-2 text-2xl font-black tracking-tighter text-white uppercase italic">
          {data.brand}
        </h3>
        <p className="font-body text-sm font-bold tracking-wide">
          {data.tagline}
        </p>
      </div>

      {/* ส่วนพิกัดช่องทางติดต่อ (Conversion Links) */}
      <div className="flex flex-wrap justify-center gap-8">
        <a
          href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
          className="font-body flex items-center gap-2 text-sm font-bold transition-colors hover:text-white"
        >
          <Phone size={18} className="text-indigo-500" />
          {data.contact.phone}
        </a>

        <a
          href={`https://line.me/ti/p/~${data.contact.line.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body flex items-center gap-2 text-sm font-bold transition-colors hover:text-white"
        >
          <MessageCircle size={18} className="text-indigo-500" />
          {data.contact.line}
        </a>
      </div>
    </div>

    {/* พิกัดลิขสิทธิ์ระบบ (Copyright) */}
    <div className="container mx-auto mt-16 border-t border-white/5 px-6 pt-8 text-center">
      <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase italic">
        Powered by AEMDEVWEB Structure v2026
      </p>
    </div>
  </footer>
)
