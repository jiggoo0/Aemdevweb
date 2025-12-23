/** @format */
"use client"

import React, { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ConversionFormProps {
  title?: string
  description?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export const ConversionForm: React.FC<ConversionFormProps> = ({
  title = "สนใจสั่งทำเว็บไซต์?",
  description = "กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับเร็วที่สุด",
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
      if (onSubmit) {
        await onSubmit({ name, email, message })
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

  return (
    <div className="w-full max-w-lg rounded-lg border-2 border-brand-navy p-8 shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]">
      <h3 className="mb-2 text-2xl font-black text-brand-navy">{title}</h3>
      <p className="mb-6 text-slate-600">{description}</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="ชื่อของคุณ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="ข้อความ / รายละเอียด"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
        />

        <Button
          type="submit"
          className="mt-4 h-14 w-full bg-brand-blue font-black uppercase text-white hover:bg-brand-navy"
          disabled={loading}
        >
          {loading ? "กำลังส่ง..." : success ? "ส่งเรียบร้อย!" : "ส่งข้อความ"}
        </Button>
      </form>
    </div>
  )
}

export default ConversionForm
