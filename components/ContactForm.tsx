/** @format */
"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2 } from "lucide-react" // ✅ ลบ AlertCircle ออก
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
// ✅ ลบ ControllerRenderProps และ cn ออกเนื่องจากไม่ได้ใช้

const formSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุล"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "กรุณากรอกเฉพาะตัวเลข")
    .min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
  subject: z.string().min(5, "กรุณาระบุหัวข้อที่ต้องการปรึกษา"),
  message: z.string().min(10, "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร"),
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
      const payload = { ...values, source: templateId || "direct_contact" }
      console.log("Transmitting Data:", payload)

      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast({
        title: "DATA TRANSMITTED",
        description: "ผมได้รับข้อมูลแล้ว จะติดต่อกลับหาคุณโดยเร็วที่สุดครับ",
      })
      form.reset()
    } catch (err) {
      console.error("Submit Error:", err)
      toast({
        variant: "destructive",
        title: "SYSTEM ERROR",
        description: "ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
      })
    } finally {
      setIsPending(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center space-y-8 border-4 border-[#10b981] bg-white p-12 text-center shadow-[12px_12px_0px_0px_#10b981]">
        <div className="flex h-24 w-24 items-center justify-center border-4 border-[#10b981] bg-[#10b981] text-white shadow-[6px_6px_0px_0px_#065f46]">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-4">
          <h3 className="font-heading text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Submission <span className="text-[#10b981]">Received.</span>
          </h3>
          <p className="max-w-xs font-bold leading-relaxed text-slate-500">
            ขอบคุณที่ติดต่อเข้ามาครับ <br />
            ทีมวิศวกรเว็บของเรากำลังตรวจสอบข้อมูลของคุณ
          </p>
        </div>
        <Button
          onClick={() => setIsSuccess(false)}
          className="h-14 rounded-none border-4 border-slate-900 bg-white px-8 font-black uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white"
        >
          ส่งข้อความอื่นเพิ่มเติม
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 border-[6px] border-[#0F172A] bg-white p-8 shadow-[16px_16px_0px_0px_#0F172A] md:p-14"
      >
        <div className="space-y-2">
          <h2 className="font-heading text-3xl font-black uppercase italic tracking-tighter text-slate-900">
            Request <span className="text-[#1E3A8A]">Consultation</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#F97316]" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Client_Full_Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold uppercase italic" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Access_Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="contact@company.com"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold uppercase italic" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Contact_Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="08X-XXX-XXXX"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold uppercase italic" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Project_Subject
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="หัวข้อการติดต่อ"
                    {...field}
                    className="h-16 rounded-none border-4 border-slate-100 bg-slate-50 px-6 font-bold focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold uppercase italic" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Specification_Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="รายละเอียดความต้องการของคุณ..."
                  className="min-h-[180px] rounded-none border-4 border-slate-100 bg-slate-50 p-6 font-bold focus:border-[#1E3A8A] focus:bg-white focus:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[10px] font-bold uppercase italic" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="group h-20 w-full rounded-none border-4 border-[#0F172A] bg-[#0F172A] text-sm font-black uppercase tracking-[0.4em] text-white shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-70"
        >
          {isPending ? (
            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
          ) : (
            <div className="flex items-center gap-4">
              <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span>Initialize Transmission</span>
            </div>
          )}
        </Button>
      </form>
    </Form>
  )
}
