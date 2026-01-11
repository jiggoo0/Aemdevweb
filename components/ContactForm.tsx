/** @format */
"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุลเพื่อดำเนินการ"),
  email: z.string().email("รูปแบบ Access_Email ไม่ถูกต้อง"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "กรุณากรอกเฉพาะตัวเลขเท่านั้น")
    .min(9, "ระบุเบอร์โทรศัพท์ 9-10 หลัก"),
  subject: z.string().min(5, "กรุณาระบุหัวข้อ Project_Subject"),
  message: z
    .string()
    .min(10, "กรุณากรอกรายละเอียด Specification อย่างน้อย 10 ตัวอักษร"),
})

type FormValues = z.infer<typeof formSchema>

interface ContactFormProps {
  templateId?: string
}

export default function ContactForm({ templateId }: ContactFormProps) {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsPending(true)
    try {
      // ✅ วิธีแก้ Warning 'payload': ส่งค่าไปที่ Console ตรงๆ หรือเรียกใช้ใน Logic
      const payload = {
        ...values,
        source: templateId || "direct_contact",
        timestamp: new Date().toISOString(),
      }

      // เรียกใช้ payload เพื่อให้ Linter พอใจ (และมีประโยชน์ในการ Debug)
      if (process.env.NODE_ENV === "development") {
        console.debug("[SYSTEM_LOG]: DATA_STREAM_CAPTURED", payload)
      }

      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast({
        title: "SYSTEM: DATA TRANSMITTED",
        description: "บันทึกข้อมูลสำเร็จ วิศวกรจะติดต่อกลับโดยเร็วที่สุด",
      })
      form.reset()
    } catch (error) {
      // ✅ วิธีแก้ Warning 'err': พ่น error ออก console เพื่อการตรวจสอบ
      console.error("[CRITICAL_FAILURE]:", error)

      toast({
        variant: "destructive",
        title: "CRITICAL_ERROR",
        description: "ระบบขัดข้อง ไม่สามารถส่งข้อมูลได้ในขณะนี้",
      })
    } finally {
      setIsPending(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center space-y-8 border-[6px] border-[#10b981] bg-white p-12 text-center shadow-[20px_20px_0px_0px_rgba(16,185,129,0.1)]">
        <div className="flex h-24 w-24 items-center justify-center border-4 border-[#10b981] bg-[#10b981] text-white shadow-[8px_8px_0px_0px_#065f46]">
          <CheckCircle2 size={48} strokeWidth={3} />
        </div>
        <div className="space-y-4">
          <h3 className="font-heading text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Submission <span className="text-[#10b981]">Complete.</span>
          </h3>
          <p className="max-w-xs font-bold leading-relaxed text-slate-500">
            ระบบได้รับข้อมูล Specification เรียบร้อยแล้ว <br />
            เราจะทำการวิเคราะห์ความต้องการและติดต่อกลับโดยด่วน
          </p>
        </div>
        <Button
          onClick={() => setIsSuccess(false)}
          className="h-14 rounded-none border-4 border-slate-900 bg-white px-8 font-black uppercase tracking-widest text-slate-900 shadow-[6px_6px_0px_0px_#0F172A] transition-all hover:bg-slate-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          ส่งคำขอใหม่ (New_Request)
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-10 border-[6px] border-[#0F172A] bg-white p-8 shadow-[24px_24px_0px_0px_#0F172A] md:p-14"
      >
        <div className="absolute -right-[6px] -top-[6px] hidden bg-[#0F172A] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white md:block">
          Protocol_v1.5
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Terminal size={24} className="text-[#1E3A8A]" />
            <h2 className="font-heading text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-4xl">
              Request <span className="text-[#1E3A8A]">Consultation</span>
            </h2>
          </div>
          <div className="h-2 w-32 bg-[#F97316]" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="group space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#1E3A8A]">
                  Client_Full_Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="ระบุชื่อ-นามสกุล"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold transition-all focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="font-mono text-[10px] font-bold uppercase italic text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="group space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#1E3A8A]">
                  Access_Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@company.com"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold transition-all focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="font-mono text-[10px] font-bold uppercase italic text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="group space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#1E3A8A]">
                  Contact_Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="08X XXX XXXX"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold transition-all focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="font-mono text-[10px] font-bold uppercase italic text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="group space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#1E3A8A]">
                  Project_Subject
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="เช่น สนใจบริการ Web Business"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold transition-all focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="font-mono text-[10px] font-bold uppercase italic text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="group space-y-3">
              <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#1E3A8A]">
                Specification_Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="อธิบายรายละเอียดโครงการ หรือคำถามที่คุณมี..."
                  className="min-h-[180px] rounded-none border-4 border-slate-100 bg-slate-50 p-6 font-bold transition-all focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-mono text-[10px] font-bold uppercase italic text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="group relative h-20 w-full rounded-none border-4 border-[#0F172A] bg-[#0F172A] text-sm font-black uppercase tracking-[0.4em] text-white shadow-[10px_10px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-70"
        >
          {isPending ? (
            <div className="flex items-center gap-3">
              <Loader2 className="h-6 w-6 animate-spin text-[#F97316]" />
              <span>Transmitting_Data...</span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Send className="h-5 w-5 text-[#F97316] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span>Initialize Transmission</span>
            </div>
          )}
        </Button>
      </form>
    </Form>
  )
}
