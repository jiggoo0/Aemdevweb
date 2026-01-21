/** @format */

"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
// ✅ Import Config เข้ามา
import { siteConfig } from "@/constants/site-config"

// 🛡️ Schema สำหรับการคัดกรองลูกค้า
const formSchema = z.object({
  name: z.string().min(2, "ขอชื่อเล่นหรือชื่อบริษัทเพื่อความสะดวกในการคุยครับ"),
  businessType: z.string().min(1, "เลือกประเภทธุรกิจให้เอ็มนิดนึงครับ"),
  requirement: z
    .string()
    .min(5, "บอกสิ่งที่ต้องการคร่าวๆ เพื่อให้เอ็มเตรียมข้อมูลรอคุยครับ"),
  budget: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface LineLeadFormProps {
  variant?: "inline" | "button"
  label?: string
  className?: string
}

export const LineLeadForm = ({
  variant = "inline",
  label = "ส่งข้อมูลให้ผมประเมินงาน",
  className,
}: LineLeadFormProps) => {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsPending(true)

    // 🧬 จำลอง Delay เพื่อความสมจริง
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 🚀 สร้างข้อความ
    const message = `สวัสดีครับนายเอ็มซ่ามากส์ ผมชื่อ ${data.name} ทำธุรกิจ ${data.businessType} สนใจเรื่อง: ${data.requirement} (งบประมาณเบื้องต้น: ${data.budget || "ยังไม่ได้ระบุ"})`

    // ✅ [FIXED]: แก้จาก siteConfig.links.lineId เป็น siteConfig.contact.lineId
    // (เพราะ ID เราเก็บไว้ใน contact ส่วน links เก็บ URL เต็ม)
    const lineId = siteConfig.contact?.lineId || "@aemdevweb"
    const lineUrl = `https://line.me/R/oaMessage/${lineId}/?${encodeURIComponent(message)}`

    setIsPending(false)
    setIsSuccess(true)

    // เปิดหน้า LINE
    window.open(lineUrl, "_blank")

    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 3000)
  }

  // --- Variant: Button ---
  if (variant === "button") {
    // ✅ [FIXED]: เพิ่ม Optional chaining (?.) ป้องกัน Error จอขาวกรณี Config ยังไม่อัปเดต
    const lineHref = siteConfig.links?.line || "https://line.me/ti/p/@aemdevweb"

    return (
      <a
        href={lineHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-12 py-6 text-lg font-black tracking-widest text-slate-950 transition-all hover:scale-105 hover:shadow-2xl active:scale-95",
          className
        )}
      >
        <MessageCircle className="h-6 w-6 fill-slate-950" />
        {label}
        <Sparkles className="h-5 w-5 animate-pulse text-white" />
      </a>
    )
  }

  // --- Variant: Form ---
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12"
      >
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="text-center">
                <h3 className="font-prompt text-2xl font-black text-slate-900">
                  บอกโปรเจกต์ของคุณ
                </h3>
                <p className="font-anuphan mt-2 text-sm font-bold text-slate-400">
                  ส่งข้อมูลเบื้องต้น แล้วคุยกับผมต่อทาง LINE ได้เลยครับ
                </p>
              </div>

              <div className="space-y-4">
                {/* 1. Name */}
                <div>
                  <input
                    {...register("name")}
                    placeholder="ชื่อของคุณ หรือ ชื่อบริษัท"
                    className="font-anuphan w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  />
                  {errors.name && (
                    <p className="mt-1 ml-4 text-xs text-rose-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* 2. Business Type */}
                <div>
                  <select
                    {...register("businessType")}
                    className="font-anuphan w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  >
                    <option value="">เลือกประเภทธุรกิจของคุณ</option>
                    <option value="SME / ร้านค้าออนไลน์">
                      SME / ร้านค้าออนไลน์
                    </option>
                    <option value="โรงงานอุตสาหกรรม">โรงงานอุตสาหกรรม</option>
                    <option value="บริษัท / หจก.">บริษัท / หจก.</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                  {errors.businessType && (
                    <p className="mt-1 ml-4 text-xs text-rose-500">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>

                {/* 3. Requirement */}
                <div>
                  <textarea
                    {...register("requirement")}
                    placeholder="เล่าให้ผมฟังคร่าวๆ ว่าอยากได้เว็บแบบไหนครับ? (เช่น เว็บโรงงาน 2 ภาษา, เซลล์เพจยิงแอด)"
                    rows={3}
                    className="font-anuphan w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  />
                  {errors.requirement && (
                    <p className="mt-1 ml-4 text-xs text-rose-500">
                      {errors.requirement.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 py-5 text-base font-black tracking-widest text-white transition-all hover:bg-emerald-500 hover:text-slate-950 active:scale-95 disabled:opacity-50"
              >
                {isPending ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {label}
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="font-prompt text-2xl font-black text-slate-900">
                เรียบร้อยครับ!
              </h3>
              <p className="font-anuphan mt-2 font-bold text-slate-500">
                ผมได้รับข้อมูลแล้ว กำลังพาคุณไปคุยต่อที่ LINE นะครับ...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
