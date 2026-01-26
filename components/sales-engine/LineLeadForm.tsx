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
import { siteConfig } from "@/constants/site-config"

// กำหนดเกณฑ์การตรวจสอบข้อมูลพิกัดงาน
const formSchema = z.object({
  name: z.string().min(2, "ขอชื่อเล่นหรือชื่อบริษัทเพื่อความสะดวกในการคุยครับ"),
  businessType: z.string().min(1, "เลือกประเภทธุรกิจให้ผมหน่อยครับ"),
  requirement: z
    .string()
    .min(5, "บอกพิกัดงานที่ต้องการคร่าวๆ เพื่อให้ผมเตรียมข้อมูลรอคุยครับ"),
  budget: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface LineLeadFormProps {
  variant?: "inline" | "button"
  label?: string
  className?: string
}

/**
 * LineLeadForm - ระบบรับพิกัดข้อมูลเพื่อเชื่อมต่อกับ LINE Official Account
 * ออกแบบมาเพื่อเพิ่มอัตราการปิดยอดขายสำหรับ SME และกลุ่มโรงงาน
 */
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

    // จำลองการประมวลผลระบบงาน
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // วางพิกัดชุดข้อความเพื่อส่งเข้า LINE
    const message = `สวัสดีครับคุณเอ็ม ผมชื่อ ${data.name} ทำธุรกิจ ${data.businessType} สนใจเรื่อง: ${data.requirement} (งบประมาณ: ${data.budget || "ยังไม่ได้ระบุ"})`

    // ดึงพิกัด ID จากค่าคอนฟิกที่ล็อคไว้
    const lineId = siteConfig.contact?.lineId || siteConfig.links?.lineId || "@aemdevweb"
    const lineUrl = `https://line.me/R/oaMessage/${lineId}/?${encodeURIComponent(message)}`

    setIsPending(false)
    setIsSuccess(true)

    // นำพิกัดงานไปเปิดในแอปพลิเคชัน LINE
    window.open(lineUrl, "_blank")

    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 3000)
  }

  // รูปแบบปุ่มติดต่อด่วน
  if (variant === "button") {
    const lineHref = siteConfig.links?.line || "#"

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
        <span className="font-heading uppercase italic">{label}</span>
        <Sparkles className="h-5 w-5 animate-pulse text-white" />
      </a>
    )
  }

  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
                <h3 className="font-heading text-2xl font-black text-slate-900 uppercase italic">
                  ระบุพิกัดโปรเจกต์ของคุณ
                </h3>
                <p className="font-body mt-2 text-sm font-bold text-slate-400">
                  ส่งพิกัดงานเบื้องต้น แล้วคุยกับผมต่อทาง LINE ได้เลยครับ
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    {...register("name")}
                    placeholder="ชื่อของคุณ หรือ ชื่อบริษัท"
                    className="font-body w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  />
                  {errors.name && (
                    <p className="font-body mt-1 ml-4 text-xs text-rose-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    {...register("businessType")}
                    className="font-body w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  >
                    <option value="">เลือกกลุ่มธุรกิจของคุณ</option>
                    <option value="SME / ร้านค้าออนไลน์">SME / ร้านค้าออนไลน์</option>
                    <option value="โรงงานอุตสาหกรรม">โรงงานอุตสาหกรรม</option>
                    <option value="บริษัท / หจก.">บริษัท / หจก.</option>
                    <option value="กลุ่มงานบริการ">กลุ่มงานบริการ</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                  {errors.businessType && (
                    <p className="font-body mt-1 ml-4 text-xs text-rose-500">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("requirement")}
                    placeholder="เล่าพิกัดงานคร่าวๆ (เช่น เว็บโรงงาน 2 ภาษา, ระบบแคตตาล็อกสินค้า)"
                    rows={3}
                    className="font-body w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-sm font-bold transition-all outline-none focus:border-emerald-500/50 focus:bg-white"
                  />
                  {errors.requirement && (
                    <p className="font-body mt-1 ml-4 text-xs text-rose-500">
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
                    <span className="font-heading uppercase italic">{label}</span>
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
              <h3 className="font-heading text-2xl font-black text-slate-900 uppercase italic">
                บันทึกพิกัดงานเรียบร้อย
              </h3>
              <p className="font-body mt-2 font-bold text-slate-500">
                ผมได้รับข้อมูลแล้ว ระบบกำลังพาคุณไปคุยต่อที่ LINE...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
