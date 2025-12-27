/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FOOTER (SUKHOTHAI EDITION)
// Identity: Stable Local Enterprise (ความมั่นคงและที่ตั้งที่ชัดเจน)
// ----------------------------------------------------

"use client"

import React from "react"
import { Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react" // ✅ ลบ Mail และ Facebook ออกเพื่อแก้ Warning

interface FooterProps {
  contact?: {
    lineId: string
    phone: string
    facebook?: string
    email: string
    address?: string
    workingHours?: string
  }
}

export default function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl">
        {/* MAIN_FOOTER_GRID: ระบบตารางที่แข็งแรงสไตล์โรงงาน */}
        <div className="grid grid-cols-1 gap-0 border-x border-slate-800 md:grid-cols-12">
          {/* 1. BRAND & IDENTITY: ยืนยันตัวตนคนสุโขทัย */}
          <div className="border-b border-slate-800 p-10 transition-colors hover:bg-slate-800/20 md:col-span-5 md:border-r md:p-16">
            <div className="mb-8 flex select-none items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-[#7B3F00] font-black italic text-white">
                ST
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">
                สุโขทัยค้าไม้
              </span>
            </div>
            <p className="mb-10 max-w-sm text-sm font-medium leading-relaxed text-slate-400">
              ตัวแทนจำหน่ายไม้แปรรูปคุณภาพสูง ประสบการณ์กว่า 25
              ปีในจังหวัดสุโขทัย
              เรามุ่งมั่นส่งมอบไม้ที่ดีที่สุดเพื่อบ้านที่แข็งแรงของท่าน
            </p>
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <ShieldCheck size={14} className="text-[#7B3F00]" />
              Verified_Sukhothai_Business
            </div>
          </div>

          {/* 2. CONTACT_INFO: ข้อมูลติดต่อที่รวดเร็ว */}
          <div className="border-b border-slate-800 p-10 md:col-span-4 md:border-r md:p-16">
            <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A0522D]">
              Contact_Details
            </h4>
            <div className="space-y-6">
              <a
                href={`tel:${contact?.phone}`}
                className="group flex items-center gap-4 transition-colors hover:text-[#A0522D]"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-700 group-hover:border-[#A0522D]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    โทรศัพท์
                  </p>
                  <p className="font-bold">{contact?.phone || "055-xxx-xxx"}</p>
                </div>
              </a>
              <a
                href={`https://line.me/ti/p/${contact?.lineId?.replace("@", "")}`}
                className="group flex items-center gap-4 transition-colors hover:text-green-500"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-700 group-hover:border-green-500">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    Line Official
                  </p>
                  <p className="font-bold">
                    {contact?.lineId || "@SukhothaiWood"}
                  </p>
                </div>
              </a>
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-slate-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    ที่อยู่ร้าน
                  </p>
                  <p className="max-w-[180px] text-xs font-bold leading-relaxed">
                    {contact?.address || "อ.กงไกรลาศ จ.สุโขทัย"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. WORKING_HOURS: เวลาเปิด-ปิด */}
          <div className="p-10 md:col-span-3 md:p-16">
            <h4 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A0522D]">
              Service_Hours
            </h4>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  เปิดให้บริการ
                </p>
                <p className="font-bold text-slate-200">จันทร์ - เสาร์</p>
                <p className="text-sm font-medium text-slate-400">
                  08:00 - 17:00 น.
                </p>
              </div>
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  วันอาทิตย์
                </p>
                <p className="font-bold italic text-slate-600">
                  ปิดทำการ (ทักแชทสอบถามได้)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM_BAR: ลิขสิทธิ์และพิกัด */}
        <div className="flex flex-col items-center justify-between border-x border-slate-800 px-10 py-8 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 md:flex-row">
          <p className="text-center md:text-left">
            © {currentYear} SUKHOTHAI_TIMBER_SYSTEMS // ALL_RIGHTS_RESERVED
          </p>
          <div className="mt-6 flex items-center gap-6 md:mt-0">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Store_Open_Now
            </span>
            <span className="hidden text-slate-800 sm:block">|</span>
            <span className="text-slate-400">สุโขทัย, ประเทศไทย</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
