/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Star, Zap, LayoutTemplate } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TemplateItem } from "@/constants/templates-data"

interface TemplateGridProps {
  templates?: TemplateItem[]
}

/**
 * 🔑 TemplateGrid Component
 */
export function TemplateGrid({ templates = [] }: TemplateGridProps) {
  // 🛡️ Case: No results found
  if (templates.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/30 py-20 text-center"
      >
        <div className="mb-4 rounded-full bg-slate-800 p-4">
          <LayoutTemplate className="h-8 w-8 text-slate-500" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">
          ยังไม่มีเทมเพลตในหมวดนี้
        </h3>
        <p className="max-w-md text-slate-400">
          ทีมงานกำลังเร่งอัปเดตผลงานใหม่ๆ อยู่ครับ <br />
          ลองดูหมวดอื่นก่อน หรือทักไลน์เพื่อสั่งทำพิเศษได้เลย
        </p>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template, index) => {
        const detailUrl = `/${template.category}/${template.slug}`

        return (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20"
          >
            {/* 🖼️ Image Area */}
            <Link
              href={detailUrl}
              className="relative block aspect-[4/3] cursor-pointer overflow-hidden bg-slate-800"
            >
              <Image
                src={template.image}
                alt={template.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                {template.isNew && (
                  <Badge className="border-none bg-blue-600 text-white shadow-lg hover:bg-blue-500">
                    NEW ✨
                  </Badge>
                )}
                {template.isBestSeller && (
                  <Badge className="border-none bg-amber-500 text-white shadow-lg hover:bg-amber-400">
                    BEST SELLER 🔥
                  </Badge>
                )}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex translate-y-4 transform items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 font-bold text-white transition-all duration-300 group-hover:translate-y-0">
                  ดูรายละเอียด <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* 📝 Content Area */}
            <div className="flex flex-1 flex-col p-5">
              <Link href={detailUrl} className="block no-underline">
                <h3 className="mb-2 line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                  {template.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-400">
                  {template.description}
                </p>
              </Link>

              <div className="mb-4 flex flex-wrap gap-2">
                {template.features
                  .slice(0, 2)
                  .map((feature: string, i: number) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 rounded border border-slate-800 bg-slate-950 px-2 py-1 text-[10px] font-medium tracking-wider text-slate-500 uppercase"
                    >
                      <Zap className="h-3 w-3" /> {feature.split(":")[0]}
                    </span>
                  ))}
              </div>

              {/* 💰 Pricing Area */}
              <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500">
                    ราคาเริ่มต้น
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-emerald-400">
                      {/* ✅ แก้ไข: เพิ่มวงเล็บครอบการทำ Logic ก่อนใช้ ?? 0 */}฿
                      {(
                        (template.salePrice || template.price) ??
                        0
                      ).toLocaleString()}
                    </span>
                    {template.salePrice && (
                      <span className="text-xs text-slate-600 line-through">
                        ฿{(template.price ?? 0).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs font-bold text-slate-300">5.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
