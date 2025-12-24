/** @format */
"use client"

import React, { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

interface ConversionFormProps {
  title?: any // รองรับ MultiLangText หรือ string
  description?: any
  primaryColor?: string
  t: (content: any) => string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export const ConversionForm: React.FC<ConversionFormProps> = ({
  title,
  description,
  primaryColor = "#2563eb",
  t,
  onSubmit,
}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      // จำลองการส่งข้อมูล (สามารถเชื่อมต่อ API Routes ต่อได้)
      if (onSubmit) {
        await onSubmit({ name, email, message })
      } else {
        await new Promise((res) => setTimeout(res, 1000))
      }
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Fallback Texts
  const displayTitle = title
    ? t(title)
    : t({ th: "สนใจเริ่มโปรเจกต์กับเรา?", en: "Ready to start a project?" })
  const displayDesc = description
    ? t(description)
    : t({
        th: "กรอกข้อมูลทีมงานจะติดต่อกลับเร็วที่สุด",
        en: "Fill out the form and we'll get back to you shortly.",
      })

  if (success) {
    return (
      <div className="flex w-full max-w-lg flex-col items-center justify-center border-4 border-slate-900 bg-white p-12 text-center shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
        <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-black italic tracking-tighter text-slate-900">
          {t({ th: "ส่งข้อมูลสำเร็จ!", en: "Message Sent!" })}
        </h3>
        <p className="mt-2 font-bold text-slate-500">
          {t({
            th: "เราได้รับข้อมูลของคุณแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
            en: "We have received your message. Our team will contact you soon.",
          })}
        </p>
        <Button
          variant="outline"
          onClick={() => setSuccess(false)}
          className="mt-8 border-2 border-slate-900 font-black uppercase"
        >
          {t({ th: "ส่งข้อความใหม่", en: "Send another message" })}
        </Button>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-lg border-4 border-slate-900 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] md:p-12"
      style={{ borderColor: "#0f172a" }} // ใช้สีเข้มเสมอเพื่อความดุของสไตล์ Neobrutalism
    >
      <h3 className="mb-2 text-3xl font-black italic tracking-tighter text-slate-900">
        {displayTitle}
      </h3>
      <p className="mb-8 font-bold text-slate-500">{displayDesc}</p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400">
            Name
          </label>
          <Input
            type="text"
            placeholder={t({ th: "ชื่อของคุณ", en: "Your Name" })}
            className="h-14 border-2 border-slate-900 bg-slate-50 font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400">
            Email Address
          </label>
          <Input
            type="email"
            placeholder={t({ th: "อีเมลติดต่อ", en: "Email Address" })}
            className="h-14 border-2 border-slate-900 bg-slate-50 font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-black uppercase tracking-widest text-slate-400">
            Message
          </label>
          <Textarea
            placeholder={t({ th: "รายละเอียดโปรเจกต์", en: "Project Details" })}
            className="border-2 border-slate-900 bg-slate-50 font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="group relative mt-4 h-16 w-full overflow-hidden border-2 border-slate-900 p-0 font-black uppercase tracking-tighter transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          style={{ backgroundColor: primaryColor }}
        >
          <span className="relative z-10 text-xl text-white">
            {loading
              ? t({ th: "กำลังส่ง...", en: "Sending..." })
              : t({ th: "ส่งข้อความติดต่อ", en: "Submit Inquiry" })}
          </span>
        </Button>
      </form>
    </div>
  )
}

export default ConversionForm
