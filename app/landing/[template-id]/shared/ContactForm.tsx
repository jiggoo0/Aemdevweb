/** @format */
"use client"

import React, { useState } from "react"
import { MessageCircle, Send } from "lucide-react"

interface ContactFormProps {
  primaryColor?: string
  t: (content: any) => string
}

export default function ContactForm({
  primaryColor = "#000",
  t,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // TODO: เชื่อมต่อกับ API Route /api/contact
    setTimeout(() => setStatus("success"), 1500)
  }

  if (status === "success") {
    return (
      <div className="border-4 border-slate-900 bg-emerald-50 p-8 text-center">
        <h3 className="text-2xl font-black uppercase tracking-tighter">
          ส่งข้อมูลเรียบร้อย!
        </h3>
        <p className="mt-2 font-medium">
          เจ้าหน้าที่จะติดต่อกลับหาคุณโดยเร็วที่สุด
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-xs font-black uppercase tracking-widest">
          ชื่อผู้ติดต่อ
        </label>
        <input
          required
          className="border-2 border-slate-900 p-3 focus:outline-none focus:ring-2"
          style={{ borderColor: primaryColor }}
          placeholder="คุณสมชาย ใจดี"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-black uppercase tracking-widest">
          เบอร์โทรศัพท์
        </label>
        <input
          required
          type="tel"
          className="border-2 border-slate-900 p-3 focus:outline-none focus:ring-2"
          style={{ borderColor: primaryColor }}
          placeholder="081-XXX-XXXX"
        />
      </div>
      <button
        disabled={status === "loading"}
        className="mt-4 flex items-center justify-center gap-2 bg-slate-900 py-4 font-black uppercase tracking-widest text-white transition-transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
        style={{ backgroundColor: primaryColor }}
      >
        {status === "loading" ? (
          "กำลังส่ง..."
        ) : (
          <>
            <Send size={18} /> ส่งข้อความตอนนี้
          </>
        )}
      </button>
    </form>
  )
}
