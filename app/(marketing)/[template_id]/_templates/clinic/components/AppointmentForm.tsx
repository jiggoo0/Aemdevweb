/** @format */

"use client"

import React, { useState, useEffect } from "react"
import { User, Phone, Calendar, Send, CheckCircle2 } from "lucide-react"

export default function AppointmentForm() {
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // จำลองการส่งข้อมูล (เช่น API หรือ Line Notify)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (!isMounted)
    return (
      <div className="h-[400px] w-full animate-pulse rounded-3xl bg-slate-100" />
    )

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center duration-500 animate-in fade-in zoom-in">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">นัดหมายสำเร็จ!</h3>
        <p className="mt-2 text-slate-500">
          เจ้าหน้าที่กำลังตรวจสอบข้อมูล และจะติดต่อกลับภายใน 15 นาที
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-sm font-medium text-sky-600 hover:underline"
        >
          ทำการนัดหมายอื่นเพิ่ม
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-sky-100">
      <div className="bg-sky-600 px-8 py-10 text-center text-white">
        <h2 className="text-3xl font-bold">ลงทะเบียนนัดหมาย</h2>
        <p className="mt-2 text-sky-100 opacity-90">
          กรอกข้อมูลเบื้องต้นเพื่อให้แพทย์ติดต่อกลับ
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ชื่อ-นามสกุล */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              ชื่อ-นามสกุล
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                required
                type="text"
                placeholder="คุณสมชาย ใจดี"
                className="w-full rounded-2xl border-slate-100 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
              />
            </div>
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              เบอร์โทรศัพท์
            </label>
            <div className="relative">
              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                required
                type="tel"
                placeholder="08X-XXX-XXXX"
                className="w-full rounded-2xl border-slate-100 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
              />
            </div>
          </div>

          {/* วันที่ต้องการนัดหมาย */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">
              วันที่สะดวกเข้ารับบริการ
            </label>
            <div className="relative">
              <Calendar
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                required
                type="date"
                className="w-full rounded-2xl border-slate-100 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
              />
            </div>
          </div>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-sky-600 py-5 font-bold text-white shadow-lg shadow-sky-200 transition-all hover:bg-sky-700 hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
        >
          {isSubmitting ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <>
              <Send size={20} />
              ยืนยันการนัดหมายแพทย์
            </>
          )}
        </button>

        <p className="mt-6 text-center text-xs text-slate-400">
          * ข้อมูลของคุณจะได้รับการเก็บรักษาเป็นความลับตามนโยบาย PDPA
        </p>
      </form>
    </div>
  )
}
