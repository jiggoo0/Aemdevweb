/** @format */
"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { Send, Loader2, CheckCircle } from "lucide-react" // ✅ Removed unused MapPin
import { TEMPLATE_REGISTRY } from "../_config/registry"

export default function ContactPage() {
  const { template_id } = useParams()
  const entry = TEMPLATE_REGISTRY[(template_id as string).toLowerCase()]

  // Form State
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    budget: "",
  })

  if (!entry) return null
  const { themeColor, contact } = entry.config
  const methods = contact?.methods || []

  // Handle Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          templateId: template_id,
          source_url: typeof window !== "undefined" ? window.location.href : "",
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", phone: "", businessType: "", budget: "" })
      }
    } catch (error) {
      console.error("Submission failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pb-20 pt-40">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* 1. LEFT_SIDE: INFO - Industrial Style */}
        <div>
          <div className="mb-12 border-l-8 border-slate-900 pl-6">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
              Connect_With_Us
            </span>
            <h1 className="text-6xl font-black uppercase leading-none tracking-tighter text-slate-900">
              คุยกับเรา <br />
              เพื่อเริ่มงาน
            </h1>
          </div>
          <div className="space-y-8">
            {methods.map((method: any) => (
              <a
                href={method.link}
                key={method.label}
                className="group block border-b border-slate-100 pb-6 transition-colors"
              >
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  {method.label}
                </span>
                <span className="text-2xl font-bold text-slate-800 transition-colors group-hover:opacity-70">
                  {method.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 2. RIGHT_SIDE: FORM (CONNECTED TO API) */}
        <div className="border border-slate-200 bg-slate-50 p-10">
          {success ? (
            <div className="flex h-full flex-col items-center justify-center py-20 text-center duration-500 animate-in fade-in zoom-in">
              <CheckCircle size={64} className="mb-6 text-green-500" />
              <h3 className="mb-4 text-3xl font-black uppercase text-slate-900">
                ส่งข้อมูลสำเร็จ!
              </h3>
              <p className="mb-8 font-bold uppercase tracking-tight text-slate-500">
                เราได้รับข้อมูลของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 underline transition-colors hover:text-slate-900"
              >
                Send_Another_Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Full_Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-slate-200 bg-white p-4 font-bold outline-none transition-all focus:border-slate-900"
                  placeholder="ชื่อ-นามสกุล ของคุณ"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Phone_Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border border-slate-200 bg-white p-4 font-bold outline-none transition-all focus:border-slate-900"
                    placeholder="08x-xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Budget_Plan
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full border border-slate-200 bg-white p-4 font-bold outline-none transition-all focus:border-slate-900"
                  >
                    <option value="">เลือกงบประมาณ</option>
                    <option value="Starter (3,900)">Starter (3,900)</option>
                    <option value="Business (5,900)">Business (5,900)</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                style={{ backgroundColor: themeColor }}
                className="flex w-full items-center justify-center gap-3 py-5 font-black uppercase tracking-[0.4em] text-white shadow-xl transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Send_Inquiry <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
