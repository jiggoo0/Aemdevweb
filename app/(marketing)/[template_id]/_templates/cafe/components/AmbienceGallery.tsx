/** @format */

"use client"

import React from "react"
import Image from "next/image"

export default function AmbienceGallery() {
  /**
   * 💡 AI Note: ลบการ import styles ออกเพื่อแก้ไข ESLint Warning
   * เนื่องจากคอมโพเนนต์นี้ใช้ Tailwind Utility Classes เป็นหลัก
   */
  const photos = [
    {
      src: "/images/template/cafe/ambience-1.webp",
      alt: "บรรยากาศภายในร้านโทนอบอุ่น",
      span: "md:col-span-8",
    },
    {
      src: "/images/template/cafe/ambience-2.webp",
      alt: "มุมกาแฟ Specialty",
      span: "md:col-span-4",
    },
    {
      src: "/images/template/cafe/ambience-3.webp",
      alt: "เบเกอรี่อบใหม่",
      span: "md:col-span-4",
    },
  ]

  return (
    <section className="bg-[#FDFCFB] py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header ส่วน Gallery */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            The Experience
          </span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-[#2D241E] md:text-5xl">
            Ambience & <span className="italic">Soul</span>
          </h2>
          <div className="mt-6 h-[1px] w-20 bg-[#4A3428]/20" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:h-[700px] md:grid-cols-12">
          {/* Main Large Image */}
          <div className="group relative h-[400px] overflow-hidden rounded-[2rem] shadow-sm md:col-span-8 md:h-auto">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 66vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwFByNxgAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
          </div>

          {/* Side Column Stack */}
          <div className="grid h-full grid-cols-1 gap-6 md:col-span-4">
            {/* Top Right Image */}
            <div className="group relative h-[300px] overflow-hidden rounded-[2rem] shadow-sm md:h-full">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            </div>

            {/* Bottom Right Image */}
            <div className="group relative h-[300px] overflow-hidden rounded-[2rem] shadow-sm md:h-full">
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
