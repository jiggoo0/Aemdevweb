/** @format */
"use client"

import React from "react"
import { Megaphone } from "lucide-react"

interface PromoBannerProps {
  text: string
  primaryColor?: string
}

export default function PromoBanner({
  text,
  primaryColor = "#000",
}: PromoBannerProps) {
  if (!text) return null

  return (
    <div
      className="flex items-center justify-center gap-3 px-6 py-3 text-white"
      style={{ backgroundColor: primaryColor }}
    >
      <Megaphone size={18} className="animate-bounce" />
      <span className="text-xs font-black uppercase tracking-[0.2em] md:text-sm">
        {text}
      </span>
    </div>
  )
}
