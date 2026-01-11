/** @format */

"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react"

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    /**
     * ✅ ปิดกฎ ESLint เฉพาะจุดสำหรับแพทเทิร์น Hydration Fix
     * เพื่อระบุว่าส่วนประกอบถูกเรนเดอร์บน Client Side แล้ว
     * ป้องกันความแตกต่างของ UI ระหว่าง Server และ Client
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  // แสดงผลเบื้องต้นแบบ Skeleton เพื่อความเร็วในการโหลด (LCP)
  if (!isMounted) {
    return (
      <div className="h-[500px] w-full animate-pulse rounded-[3rem] bg-slate-100" />
    )
  }

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.55364856012!2d100.5284343!3d13.7455712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ0LjEiTiAxMDDCsDMxJzQyLjQiRQ!5e0!3m2!1sth!2sth!4v1625000000000!5m2!1sth!2sth"

  return (
    <section id="location" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col overflow-hidden rounded-[3rem] bg-slate-50 shadow-xl shadow-slate-200/50 lg:flex-row">
          {/* ─── Info Sidebar ─── */}
          <div className="flex flex-col justify-center bg-white p-8 md:p-12 lg:w-1/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">ติดต่อเรา</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-sky-500" />
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ที่ตั้งคลินิก</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    456 Wellness Avenue, Sukhumvit Road,
                    <br />
                    แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">เวลาทำการ</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    เปิดให้บริการทุกวัน
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    08:00 - 20:00 น.
                  </p>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">เบอร์โทรศัพท์</h4>
                  <p className="mt-1 text-lg font-bold text-sky-600">
                    02-123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 font-bold text-white transition-all hover:bg-sky-600 hover:shadow-lg active:scale-95"
            >
              <Navigation size={18} />
              นำทางด้วย Google Maps
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </div>

          {/* ─── Map Display ─── */}
          <div className="relative min-h-[400px] flex-1 lg:min-h-full">
            <iframe
              src={googleMapsUrl}
              title="Clinic Location Map"
              className="absolute inset-0 h-full w-full border-0 contrast-[1.1] grayscale-[0.2]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
