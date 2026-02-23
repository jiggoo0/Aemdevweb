"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitConsultation } from "@/app/actions/consult";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { CheckCircle2, Send, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const ConsultGateway = () => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitConsultation(formData);
      if (result.success) {
        setIsSuccess(true);
        setErrors({});
      } else if (result.errors) {
        setErrors(result.errors as Record<string, string[]>);
      }
    });
  };

  return (
    <section className="container mx-auto px-4 pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-primary/20 bg-surface-card p-8 md:p-16 lg:p-24 shadow-pro">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-primary/5 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-accent/5 blur-[120px]" />

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.9] font-black uppercase italic md:text-7xl">
                    Strategic <br /> <span className="text-[var(--brand-primary)]">Consultancy.</span>
                  </h2>
                  <div className="h-1 w-20 bg-brand-primary" />
                </div>
                <p className="text-xl leading-relaxed font-medium text-text-secondary italic">
                  พร้อมวางโครงสร้างธุรกิจของคุณให้เป็นผู้นำในตลาดดิจิทัลยุค 2026 หรือยังครับ?
                  นายเอ็มซ่ามากส์ พร้อมเป็นที่ปรึกษาเชิงเทคนิคให้กับคุณ
                </p>

                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-primary/60">
                    <span className="h-px flex-1 bg-brand-primary/20" />
                    Expertise_On_Demand
                    <span className="h-px flex-1 bg-brand-primary/20" />
                  </div>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {["Technical SEO", "High-Performance Web", "AI Search Strategy", "ROI-Driven Design"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-bold text-text-primary italic uppercase">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input name="name" placeholder="ชื่อของคุณ / Your Name" required disabled={isPending} />
                    {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase">{errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Input name="email" type="email" placeholder="อีเมล / Email" required disabled={isPending} />
                    {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase">{errors.email[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input name="company" placeholder="บริษัท / Company (Optional)" disabled={isPending} />
                  <div className="space-y-2">
                    <select
                      name="service"
                      required
                      disabled={isPending}
                      className="flex h-14 w-full rounded-2xl border border-border bg-surface-card px-4 py-2 text-base font-medium text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                    >
                      <option value="" disabled selected>เลือกบริการที่คุณสนใจ</option>
                      {MASTER_REGISTRY.map((s) => (
                        <option key={s.templateSlug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Infrastructure">Custom Infrastructure</option>
                    </select>
                    {errors.service && <p className="text-[10px] font-bold text-red-500 uppercase">{errors.service[0]}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Textarea name="message" placeholder="รายละเอียดธุรกิจ หรือสิ่งที่ต้องการปรึกษา..." required disabled={isPending} />
                  {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase">{errors.message[0]}</p>}
                </div>

                <Button
                  type="submit"
                  variant="neo"
                  size="lg"
                  className="w-full h-20 text-xl group"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface-main border-t-transparent" />
                      กำลังส่งข้อมูล...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      เริ่มต้นวางแผนกลยุทธ์
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  )}
                </Button>

                <p className="text-center font-mono text-[10px] tracking-widest uppercase opacity-40">
                  Data_Encrypted_TLS_1.3
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary ring-8 ring-brand-primary/5">
                <CheckCircle2 className="h-16 w-16" />
              </div>

              <h2 className="mb-4 font-[family-name:var(--font-primary)] text-5xl font-black uppercase italic md:text-6xl">
                Submission <span className="text-brand-primary">Received.</span>
              </h2>

              <p className="max-w-xl text-xl font-medium text-text-secondary italic">
                ได้รับข้อมูลเรียบร้อยแล้วครับ! ผมจะตรวจสอบรายละเอียดและติดต่อกลับไปหาคุณโดยเร็วที่สุด เพื่อเริ่มวางแผนระบบให้ธุรกิจของคุณ
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsSuccess(false)}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  ส่งข้อความใหม่
                </Button>
                <Button variant="neo" size="lg" asChild>
                  <Link href="/">กลับหน้าหลัก</Link>
                </Button>
              </div>

              {/* OKLCH Success Badge */}
              <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-[oklch(var(--brand-primary-raw)/0.2)] bg-[oklch(var(--brand-primary-raw)/0.05)] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-primary">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-primary" />
                Strategic_Consultancy_Active
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
