/** @format */
"use client"

import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  MessageSquare,
  User,
  Phone,
  CheckCircle2,
  Loader2,
  Wallet,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface IContactForm {
  businessType: string
  name: string
  phone: string
  budget: string
  templateId?: string
}

export default function ContactForm({ templateId }: { templateId?: string }) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<IContactForm>({
    businessType: "sme",
    name: "",
    phone: "",
    budget: "",
    templateId: templateId || "main-contact",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_url: window.location.href,
          metadata: {
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          },
        }),
      })

      if (!response.ok) throw new Error("Submission failed")
      setSubmitted(true)
    } catch (error: any) {
      alert("เกิดข้อผิดพลาด กรุณาทัก Line หาผมโดยตรงได้เลยครับ")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Card className="w-full rounded-none border-4 border-brand-navy bg-white shadow-enterprise-lg duration-500 animate-in fade-in zoom-in">
        <CardContent className="space-y-10 py-24 text-center">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center border-2 border-emerald-500 bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="space-y-4">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter text-brand-navy">
              ได้รับข้อมูลแล้วครับ!
            </h3>
            <p className="text-lg font-bold leading-relaxed text-slate-500">
              ผมจะรีบตรวจสอบความต้องการของคุณ <br />
              แล้วจะติดต่อกลับไปพร้อมข้อเสนอที่ดีที่สุดครับ
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="h-14 rounded-none border-2 border-brand-navy px-12 font-black uppercase tracking-widest transition-all hover:bg-brand-navy hover:text-white"
          >
            ส่งข้อความใหม่อีกครั้ง
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="relative w-full overflow-hidden rounded-none border-2 border-brand-navy bg-white shadow-enterprise-lg">
      {/* ─── INDUSTRIAL ACCENT ─── */}
      <div className="absolute left-0 right-0 top-0 h-2 bg-brand-blue" />
      <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-slate-50" />

      <CardHeader className="pb-8 pt-16 text-center">
        <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center border-2 border-brand-navy bg-slate-50 text-brand-navy shadow-enterprise-sm">
          <MessageSquare className="h-10 w-10" />
        </div>
        <CardTitle className="text-4xl font-black uppercase italic tracking-tighter text-brand-navy">
          เริ่มโปรเจกต์ของคุณ
        </CardTitle>
        <CardDescription className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          กรอกข้อมูลเบื้องต้นเพื่อรับการประเมินราคาฟรี
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4 md:p-14">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Business Type: Modular Switch */}
          <div className="space-y-5">
            <Label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">
              <Briefcase size={14} /> 01. เลือกประเภทธุรกิจ
            </Label>
            <Tabs
              value={formData.businessType}
              onValueChange={(v) =>
                setFormData((prev) => ({ ...prev, businessType: v }))
              }
              className="w-full"
            >
              <TabsList className="grid h-16 w-full grid-cols-3 rounded-none border-2 border-brand-navy bg-slate-100 p-1.5">
                {["sme", "restaurant", "corporate"].map((type) => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className="rounded-none text-[10px] font-black uppercase tracking-widest transition-all data-[state=active]:bg-brand-navy data-[state=active]:text-white"
                  >
                    {type === "sme"
                      ? "SME"
                      : type === "restaurant"
                        ? "ร้านอาหาร"
                        : "บริษัท/หจก."}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">
                <User size={14} /> 02. ข้อมูลติดต่อ
              </Label>
              <Input
                placeholder="ชื่อ-นามสกุล ของคุณ"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="h-16 rounded-none border-2 border-slate-100 bg-slate-50 font-bold transition-all placeholder:text-slate-300 focus:border-brand-blue focus:bg-white"
              />
            </div>

            <div className="space-y-4">
              <Label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-transparent md:text-brand-blue">
                <Phone size={14} /> &nbsp;
              </Label>
              <Input
                placeholder="เบอร์โทรศัพท์ (08x-xxx-xxxx)"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="h-16 rounded-none border-2 border-slate-100 bg-slate-50 font-bold transition-all placeholder:text-slate-300 focus:border-brand-blue focus:bg-white"
              />
            </div>
          </div>

          {/* Budget Selection */}
          <div className="space-y-5">
            <Label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">
              <Wallet size={14} /> 03. ประมาณการงบประมาณ
            </Label>
            <Select
              value={formData.budget}
              onValueChange={(v) =>
                setFormData((prev) => ({ ...prev, budget: v }))
              }
              required
            >
              <SelectTrigger className="h-16 rounded-none border-2 border-slate-100 bg-slate-50 font-bold text-brand-navy focus:border-brand-blue">
                <SelectValue placeholder="เลือกช่วงงบประมาณที่เหมาะสม" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-2 border-brand-navy shadow-enterprise-lg">
                <SelectItem value="starter" className="py-4 font-bold">
                  5,000 - 15,000 (Starter)
                </SelectItem>
                <SelectItem value="pro" className="py-4 font-bold">
                  15,001 - 35,000 (Pro SME)
                </SelectItem>
                <SelectItem value="custom" className="py-4 font-bold">
                  35,000+ (Custom System)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button: Brutal Style */}
          <div className="pt-8">
            <Button
              type="submit"
              disabled={loading}
              className="group relative h-20 w-full rounded-none bg-brand-navy text-sm font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-brand-blue active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <span className="flex items-center gap-4">
                  <Sparkles
                    size={20}
                    className="text-brand-blue group-hover:text-white"
                  />
                  ส่งข้อมูลให้พาร์ทเนอร์ประเมินราคา
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </span>
              )}
            </Button>
            <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Your data is processed securely & privately
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
