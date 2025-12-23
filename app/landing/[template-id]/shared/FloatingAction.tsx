/** @format */
"use client"

import React from "react"
import { MessageCircle, Phone } from "lucide-react"

interface FloatingActionProps {
  lineId?: string
  phone?: string
  primaryColor?: string
}

export default function FloatingAction({
  lineId,
  phone,
  primaryColor = "#10b981",
}: FloatingActionProps) {
  if (!lineId && !phone) return null

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 md:bottom-8 md:right-8">
      {lineId && (
        <a
          href={`https://line.me/ti/p/${lineId.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center border-4 border-slate-900 bg-[#06C755] text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 active:scale-95"
          title="ติดต่อทาง LINE"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="flex h-14 w-14 items-center justify-center border-4 border-slate-900 bg-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform hover:-translate-y-1 active:scale-95"
          title="โทรติดต่อเรา"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      )}
    </div>
  )
}
