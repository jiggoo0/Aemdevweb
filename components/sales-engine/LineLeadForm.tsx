/** @format */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MessageSquare,
  Copy,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 🛡️ Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "กรุณาระบุชื่อผู้ติดต่อ"),
  phone: z
    .string()
    .regex(/^0[689]\d{8}$/, "เบอร์โทรศัพท์ไม่ถูกต้อง (เช่น 0812345678)"),
  service: z.string().min(1, "กรุณาเลือกบริการ"),
  requirement: z.string().optional(),
});

interface LineLeadFormProps {
  defaultService?: string;
  variant?: "default" | "button";
  label?: string;
  className?: string;
}

/**
 * 📥 LineLeadForm: ระบบ Lead Generation
 * แก้ไขปัญหา ESLint: _err is defined but never used
 */
export function LineLeadForm({
  defaultService = "",
  variant = "default",
  label = "ส่งข้อมูลปรึกษาฟรี",
  className,
}: LineLeadFormProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: defaultService,
      requirement: "",
    },
  });

  const handleDirectLine = () => {
    window.open(siteConfig.links.line, "_blank");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsRedirecting(true);

    const message = `
👋 สนใจทำเว็บครับ/ค่ะ (${values.service})
----------------
👤 ชื่อ: ${values.name}
📞 เบอร์: ${values.phone}
📝 รายละเอียด: ${values.requirement || "-"}
----------------
*ส่งจากหน้าเว็บ ${siteConfig.name}*
    `.trim();

    try {
      await navigator.clipboard.writeText(message);

      toast({
        title: "✅ คัดลอกข้อมูลสำเร็จ!",
        description: "กำลังเปิด LINE... กด 'วาง' ในแชทได้เลยครับ",
        className: "bg-emerald-500 text-white font-bold border-none",
      });

      setTimeout(() => {
        window.open(siteConfig.links.line, "_blank");
        setIsRedirecting(false);
        form.reset();
      }, 1500);
    } catch {
      // ✅ Fixed: ลบ _err ออกเพื่อให้ Linter ผ่าน (Fallback redirect)
      window.open(siteConfig.links.line, "_blank");
      setIsRedirecting(false);
    }
  };

  if (variant === "button") {
    return (
      <Button
        onClick={handleDirectLine}
        className={cn(
          "group h-12 rounded-full bg-[#06C755] px-8 font-bold text-white shadow-lg transition-all hover:bg-[#05b34c] hover:shadow-xl",
          className
        )}
        size="lg"
      >
        <MessageSquare className="mr-2 h-5 w-5 fill-white text-white" />
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    );
  }

  return (
    <div
      className={cn(
        "glass-card shadow-luminous relative overflow-hidden rounded-[2.5rem] border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl md:p-10",
        className
      )}
    >
      <div className="bg-aurora-cyan/10 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[60px]" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative z-10 space-y-6"
        >
          <div className="text-aurora-cyan/90 border-aurora-cyan/20 bg-aurora-cyan/5 flex items-start gap-3 rounded-2xl border p-4 text-sm backdrop-blur-md">
            <Sparkles className="text-aurora-cyan mt-0.5 h-5 w-5 shrink-0 animate-pulse" />
            <p className="font-anuphan leading-relaxed font-medium">
              กรอกข้อมูลเบื้องต้นเพื่อให้เราเตรียมคำตอบที่แม่นยำที่สุด แล้วกดปุ่มเพื่อเริ่มคุยงานใน LINE ได้ทันทีครับ
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-prompt text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    ชื่อผู้ติดต่อ
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="คุณสมพงษ์"
                      {...field}
                      className="focus:border-aurora-cyan/50 focus:ring-aurora-cyan/20 font-anuphan h-12 rounded-xl border-white/10 bg-slate-950/50 text-white transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-medium text-rose-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-prompt text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    เบอร์โทรศัพท์
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="08x-xxx-xxxx"
                      {...field}
                      maxLength={10}
                      className="focus:border-aurora-cyan/50 focus:ring-aurora-cyan/20 font-anuphan h-12 rounded-xl border-white/10 bg-slate-950/50 text-white transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-medium text-rose-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-prompt text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  บริการที่สนใจ
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="focus:border-aurora-cyan/50 focus:ring-aurora-cyan/20 font-anuphan h-12 rounded-xl border-white/10 bg-slate-950/50 text-white transition-all">
                      <SelectValue placeholder="เลือกบริการที่ต้องการ..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-white/10 bg-slate-950 text-slate-200">
                    <SelectItem value="Sale Page">Sale Page</SelectItem>
                    <SelectItem value="Corporate Website">Corporate</SelectItem>
                    <SelectItem value="E-Commerce">E-Commerce</SelectItem>
                    <SelectItem value="Web Application">Web App</SelectItem>
                    <SelectItem value="Consult">ขอคำปรึกษา</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs font-medium text-rose-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-prompt text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  รายละเอียดเพิ่มเติม
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="เช่น ต้องการฟีเจอร์คำนวณราคา..."
                    className="focus:border-aurora-cyan/50 focus:ring-aurora-cyan/20 font-anuphan min-h-[100px] resize-none rounded-xl border-white/10 bg-slate-950/50 text-white transition-all"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-medium text-rose-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isRedirecting}
            className="group h-14 w-full rounded-xl bg-[#06C755] font-bold text-white shadow-[0_0_20px_rgba(6,199,85,0.3)] transition-all hover:bg-[#05b34c]"
          >
            {isRedirecting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                กำลังพาไปที่ LINE...
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                คัดลอกข้อมูล & ทักไลน์ทันที
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <CheckCircle2 className="text-aurora-emerald h-3 w-3" />
            <span>นายเอ็มตอบเองภายใน 5 นาที</span>
          </div>
        </form>
      </Form>
    </div>
  );
}
