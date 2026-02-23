"use client";

import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitConsultation } from "@/app/actions/consult";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import IconRenderer from "@/components/ui/IconRenderer";
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
    <section id="consult-gateway" className="relative overflow-hidden py-32 md:py-48 bg-surface-main">
      {/* Ambient Neural Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--brand-primary) 1.5px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="bg-brand-primary/10 absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 transform-gpu rounded-full opacity-30 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12"
              >
                {/* Left Side: Content */}
                <div className="space-y-12 lg:col-span-7">
                  <div className="space-y-6">
                    <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2">
                      <IconRenderer name="Target" size={14} className="text-brand-primary" />
                      <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                        Strategic_Partnership_Initiative
                      </span>
                    </div>

                    <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
                      Ready to <br />
                      <span className="text-brand-primary">Dominate?</span>
                    </h2>

                    <p className="text-text-secondary max-w-xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                      ยกระดับธุรกิจของคุณด้วยโครงสร้างพื้นฐานดิจิทัลที่ <br />
                      <span className="text-text-primary decoration-brand-primary font-bold underline decoration-4 underline-offset-8">
                        ฉลาดและแม่นยำ
                      </span>{" "}
                      ที่สุดในไทย
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 opacity-40">
                    <div className="flex items-center gap-3">
                      <IconRenderer name="ShieldCheck" size={18} />
                      <span className="font-mono text-[10px] font-black tracking-widest uppercase">
                        Zero_Risk_Audit
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconRenderer name="Activity" size={18} />
                      <span className="font-mono text-[10px] font-black tracking-widest uppercase">
                        Live_Performance_Monitoring
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-5">
                  <div className="group relative">
                    <div className="from-brand-primary/20 absolute -inset-1 rounded-[3rem] bg-gradient-to-r to-emerald-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                    
                    <div className="bg-surface-card relative space-y-8 rounded-[3.5rem] border border-white/5 p-8 shadow-2xl md:p-12">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black tracking-tighter uppercase italic">
                          Start_Feasibility_Study
                        </h3>
                        <p className="text-sm font-medium italic opacity-60">
                          คุยกับ Technical Specialist เพื่อประเมินโอกาสรายจังหวัดและระดับประเทศ
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                          <Input name="name" placeholder="ชื่อของคุณ / Name" required disabled={isPending} className="rounded-2xl h-14" />
                          {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase px-2">{errors.name[0]}</p>}
                        </div>
                        
                        <div className="space-y-1">
                          <Input name="email" type="email" placeholder="อีเมล / Email" required disabled={isPending} className="rounded-2xl h-14" />
                          {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase px-2">{errors.email[0]}</p>}
                        </div>

                        <div className="space-y-1">
                          <select
                            name="service"
                            required
                            disabled={isPending}
                            className="flex h-14 w-full rounded-2xl border border-border bg-surface-card px-4 py-2 text-base font-medium text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                          >
                            <option value="" disabled selected>เลือกบริการที่ต้องการ</option>
                            {MASTER_REGISTRY.map((s) => (
                              <option key={s.templateSlug} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                          {errors.service && <p className="text-[10px] font-bold text-red-500 uppercase px-2">{errors.service[0]}</p>}
                        </div>

                        <div className="space-y-1">
                          <Textarea name="message" placeholder="รายละเอียดธุรกิจ หรือเป้าหมาย SEO..." required disabled={isPending} className="rounded-2xl min-h-[100px]" />
                          {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase px-2">{errors.message[0]}</p>}
                        </div>

                        <Button
                          type="submit"
                          variant="neo"
                          size="lg"
                          className="w-full h-20 text-lg group/btn rounded-2xl"
                          disabled={isPending}
                        >
                          {isPending ? (
                            <IconRenderer name="Loader2" size={20} className="animate-spin text-surface-main" />
                          ) : (
                            <span className="flex items-center gap-2">
                              SEND_REQUEST
                              <IconRenderer name="Send" size={20} className="text-surface-main transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            </span>
                          )}
                        </Button>
                      </form>

                      {/* Status Indicator Bar */}
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-30">
                            Security_Status
                          </span>
                          <span className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                            Encrypted_Connection
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary ring-8 ring-brand-primary/5">
                  <IconRenderer name="CheckCircle2" size={64} className="text-brand-primary" />
                </div>

                <h2 className="mb-4 font-[family-name:var(--font-primary)] text-5xl font-black uppercase italic md:text-6xl">
                  Strategic <span className="text-brand-primary">Received.</span>
                </h2>

                <p className="max-w-xl text-xl font-medium text-text-secondary italic">
                  ระบบได้รับคำขอปรึกษาของคุณแล้วครับ ผมจะทำการวิเคราะห์เบื้องต้นและติดต่อกลับเพื่อเริ่มวางแผน Feasibility Study ทันที
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsSuccess(false)}
                    className="gap-2 rounded-2xl h-16 px-8"
                  >
                    <IconRenderer name="ArrowRight" size={16} className="rotate-180" />
                    BACK_TO_FORM
                  </Button>
                  <Button variant="neo" size="lg" asChild className="rounded-2xl h-16 px-8">
                    <Link href="/">RETURN_HOME</Link>
                  </Button>
                </div>

                {/* OKLCH Success Badge */}
                <div className="mt-16 inline-flex items-center gap-2 rounded-full border border-[oklch(var(--brand-primary-raw)/0.2)] bg-[oklch(var(--brand-primary-raw)/0.05)] px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-primary">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-primary" />
                  Request_ID: {Math.random().toString(36).substring(7).toUpperCase()} // STATUS: QUEUED
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-32 border-t border-white/5 py-12">
        <div className="container mx-auto flex justify-center px-4 opacity-20">
          <p className="text-center font-mono text-[8px] font-black tracking-[0.6em] uppercase">
            AEMZA_MACKS_PRIVATE_REGISTRY // ARCHITECTURAL_INTEGRITY_VERIFIED
          </p>
        </div>
      </div>
    </section>
  );
};
