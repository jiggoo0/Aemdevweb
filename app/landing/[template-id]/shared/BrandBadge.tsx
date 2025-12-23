/** @format */
import React from "react"
import Image from "next/image"

interface BrandBadgeProps {
  items: Array<{
    label: string
    image?: string
  }>
  primaryColor?: string
}

export default function BrandBadge({
  items,
  primaryColor = "#000",
}: BrandBadgeProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          {item.image ? (
            <div className="relative h-12 w-32 md:h-16 md:w-40">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ) : (
            <span
              className="border-2 px-4 py-2 text-sm font-black uppercase tracking-widest"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
