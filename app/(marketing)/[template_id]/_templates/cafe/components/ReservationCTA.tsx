/** @format */

"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react"
import styles from "../CafeStyle.module.css"

interface CTAProps {
  hours: string
  address: string
  phoneNumber?: string
  lineId?: string
  googleMapsUrl?: string
}

export default function ReservationCTA({
  hours,
  address,
  phoneNumber = "08X-XXX-XXXX",
  lineId = "@cafe.specialty",
  googleMapsUrl = "https://goo.gl/maps/example",
}: CTAProps) {
  const [mounted, setMounted] = useState(false)

  /**
   * ✅ แก้ไข ESLint Error: react-hooks/set-state-in-effect
   * จำเป็นต้องใช้เพื่อรอให้ Client mount ก่อนเรียกใช้ CSS Modules
   * เพื่อป้องกัน Hydration Mismatch ระหว่าง Server และ Client
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const handleMapClick = () => {
    if (typeof window !== "undefined") {
      window.open(googleMapsUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Reservation Box Container */}
        <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-[#4A3428] text-white shadow-2xl lg:flex-row">
          {/* ─── Contact Information ─── */}
          <div className="flex flex-col justify-center p-10 md:p-16 lg:w-1/2">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Reservation
            </span>
            <h2 className="mb-8 text-4xl font-light tracking-tight md:text-5xl">
              Visit Our <span className="italic">Space</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MapPin className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                    Location
                  </p>
                  <p className="mt-1 text-lg font-light leading-relaxed opacity-90">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Clock className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                    Open Hours
                  </p>
                  <p className="mt-1 text-lg font-light opacity-90">{hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Phone className="text-[#D4AF37]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                    Call Us
                  </p>
                  <p className="mt-1 text-lg font-light opacity-90">
                    {phoneNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Conversion Actions */}
            <div className="mt-14 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  if (typeof window !== "undefined")
                    window.location.href = `tel:${phoneNumber}`
                }}
                className={
                  mounted
                    ? styles.ctaButton
                    : "rounded-full bg-[#D4AF37] px-8 py-4 text-white opacity-0"
                }
              >
                Book a Table
              </button>

              <a
                href={`https://line.me/ti/p/${lineId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-[#4A3428]"
              >
                <MessageCircle size={18} />
                {lineId}
              </a>
            </div>
          </div>

          {/* ─── Visual Interactive Map Box ─── */}
          <div
            className="group relative min-h-[400px] cursor-pointer bg-[#2D241E] lg:h-auto lg:w-1/2"
            onClick={handleMapClick}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10" />

            {/* Floating Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-black shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A3428] text-white">
                  <Navigation size={24} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Find Us
                  </p>
                  <p className="text-sm font-bold">Get Directions on Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
