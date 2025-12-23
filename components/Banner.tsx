/** @format */
"use client"

import React, { useState } from "react"
import { Megaphone, X, Timer, Sparkles } from "lucide-react"

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 top-0 z-[100] p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative border-4 border-slate-900 bg-yellow-400 p-4 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] md:p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            
            {/* Left Side: Icon & Main Message */}
            <div className="flex items-start gap-4">
              <div className="hidden rounded-none border-2 border-slate-900 bg-white p-2 md:block">
                <Megaphone className="h-6 w-6 text-slate-900" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase italic tracking-tight text-slate-900 md:text-xl">
                  Under Construction / กำลังดำเนินการ
                </h3>
                <p className="max-w-2xl text-sm font-bold leading-snug text-slate-800 md:text-base">
                  เว็บไซต์กำลังปรับปรุงและคาดว่าจะเปิดตัวอย่างเป็นทางการหลังปีใหม่นี้! 
                  เตรียมพบกับ <span className="bg-slate-900 px-1 text-white">โปรโมชั่นพิเศษ</span> ที่คุณไม่ควรพลาด ขอบคุณที่ติดตามครับ
                </p>
              </div>
            </div>

            {/* Right Side: Signature & Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border-2 border-slate-900 bg-white px-3 py-1 text-xs font-black uppercase italic">
                <Sparkles size={14} />
                <span>Dev Aem / เดฟเอเม</span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="group border-2 border-slate-900 bg-slate-900 p-2 text-white transition-all hover:bg-white hover:text-slate-900"
                aria-label="Close banner"
              >
                <X size={20} className="transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </div>

          {/* Bottom Progress Bar Decor */}
          <div className="absolute bottom-[-4px] left-[-4px] right-[-4px] h-1.5 overflow-hidden border-x-4 border-slate-900">
             <div className="h-full w-[70%] bg-slate-900 animate-[pulse_2s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  )
}
