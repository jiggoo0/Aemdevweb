/** @format */
"use client"

import React, { useState } from "react"
import { useForm, ControllerRenderProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
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
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุล"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  phone: z.string().min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
  subject: z.string().min(5, "กรุณาระบุหัวข้อที่ต้องการปรึกษา"),
  message: z.string().min(10, "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร"),
})

type FormValues = z.infer<typeof formSchema>

// ✅ เพิ่ม Interface สำหรับ Props เพื่อรับ templateId
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
      // ✅ นำ templateId ไปใช้ร่วมกับข้อมูล (เช่น ส่งไปกับ Metadata ของ Email)
      console.log("Form Values:", { ...values, source: templateId })

      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      toast({
        title: "ส่งข้อมูลสำเร็จ!",
        description: "ผมได้รับข้อมูลแล้ว จะติดต่อกลับหาคุณโดยเร็วที่สุดครับ",
      })
      form.reset()
    } catch (err) {
      console.error("Submit Error:", err)
      toast({
        variant: "destructive",
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้งครับ",
      })
    } finally {
      setIsPending(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center space-y-6 border-4 border-emerald-500 bg-emerald-50 p-12 text-center">
        <div className="flex h-20 w-20 items-center justify-center bg-emerald-500 text-white shadow-enterprise-md">
          <CheckCircle2 size={40} />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">
            Submission Received
          </h3>
          <p className="font-bold text-slate-600">
            ขอบคุณที่ติดต่อเข้ามาครับ ผมจะรีบดำเนินการตรวจสอบข้อมูลโดยเร็วที่สุด
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="rounded-none border-2 border-slate-900 font-black uppercase tracking-widest"
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
        className="space-y-8 border-4 border-brand-navy bg-white p-8 shadow-enterprise-lg md:p-12"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({
              field,
            }: {
              field: ControllerRenderProps<FormValues, "name">
            }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="h-14 rounded-none border-2 border-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({
              field,
            }: {
              field: ControllerRenderProps<FormValues, "email">
            }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="contact@company.com"
                    {...field}
                    className="h-14 rounded-none border-2 border-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({
              field,
            }: {
              field: ControllerRenderProps<FormValues, "phone">
            }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="08X-XXX-XXXX"
                    {...field}
                    className="h-14 rounded-none border-2 border-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({
              field,
            }: {
              field: ControllerRenderProps<FormValues, "subject">
            }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="หัวข้อการติดต่อ"
                    {...field}
                    className="h-14 rounded-none border-2 border-slate-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({
            field,
          }: {
            field: ControllerRenderProps<FormValues, "message">
          }) => (
            <FormItem>
              <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Message Detail
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="รายละเอียดความต้องการ..."
                  className="min-h-[160px] rounded-none border-2 border-slate-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="h-18 w-full rounded-none border-4 border-brand-navy bg-brand-navy text-xs font-black uppercase tracking-[0.3em] text-white"
        >
          {isPending ? (
            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
          ) : (
            <>
              <Send className="mr-3 h-4 w-4" /> Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
