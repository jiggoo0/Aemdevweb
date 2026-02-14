/**
 * [COMPONENT]: DIRECT_ORDER_FORM v17.9.103 (LINT_STABILIZED)
 * [STRATEGY]: Zero-Friction UX | Dynamic Branding | Input Sanitization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, memo, useCallback } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle, Send, ShieldCheck } from "lucide-react";

interface DirectOrderFormProps {
  readonly price?: string | number;
  readonly unit?: string;
  readonly accentColor?: string;
}

export const DirectOrderForm = memo(
  ({ price, unit = "โปรเจกต์", accentColor = "#e11d48" }: DirectOrderFormProps) => {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [phone, setPhone] = useState("");

    // [LOGIC]: Simple Phone Formatter (08X-XXX-XXXX)
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        let formatted = value;
        if (value.length > 3 && value.length <= 6) {
          formatted = `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 6) {
          formatted = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
        }
        setPhone(formatted);
      }
    };

    // [HANDLER]: Form Submission
    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsPending(true);

      try {
        // [NODE]: ในโปรดักชั่นจริง จะเปลี่ยนตรงนี้เป็นคำสั่ง fetch API หรือ Action
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSuccess(true);
        toast.success("ส่งข้อมูลคำสั่งซื้อเรียบร้อยแล้ว", {
          description: "เจ้าหน้าที่จะติดต่อกลับหาคุณโดยเร็วที่สุด",
        });
      } catch {
        // [FIXED]: ปรับเป็น Optional Catch Binding เพื่อแก้ปัญหา Unused Variable
        toast.error("เกิดข้อผิดพลาดในการส่งข้อมูล", {
          description: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต",
        });
      } finally {
        setIsPending(false);
      }
    }, []);

    // [UI]: Success Transition Node
    if (isSuccess) {
      return (
        <div className="animate-in fade-in zoom-in shadow-glow flex flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl duration-500 md:p-12">
          <div
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            className="mb-6 flex h-24 w-24 items-center justify-center rounded-full shadow-lg"
          >
            <CheckCircle size={48} strokeWidth={2} className="animate-bounce" />
          </div>
          <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic">
            Order Received!
          </h3>
          <p className="font-thai mt-4 text-lg text-slate-300">
            ระบบได้รับข้อมูลเรียบร้อยแล้ว <br />
            ทีมงานจะติดต่อกลับเพื่อยืนยันยอดสั่งซื้อภายใน 5 นาที
          </p>

          {price && (
            <div className="mt-4 text-sm font-bold text-slate-400">
              ยอดรวม: ฿{typeof price === "number" ? price.toLocaleString() : price} {unit}
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-10 text-xs font-black tracking-[0.3em] text-slate-500 uppercase transition-all hover:tracking-[0.4em] hover:text-white"
          >
            [ Back to Form ]
          </button>
        </div>
      );
    }

    return (
      <div className="relative isolate">
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* [SECTION 1]: Identification */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="group space-y-2">
              <label
                htmlFor="name"
                className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase"
              >
                ชื่อ-นามสกุล *
              </label>
              <input
                id="name"
                required
                name="customer_name"
                autoComplete="name"
                placeholder="คุณลูกค้า (ระบุชื่อ)"
                className="w-full rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 ring-1 ring-slate-200 transition-all outline-none focus:bg-white focus:ring-2"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
              />
            </div>

            <div className="group space-y-2">
              <label
                htmlFor="phone"
                className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase"
              >
                เบอร์โทรศัพท์ *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder="08X-XXX-XXXX"
                className="w-full rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 ring-1 ring-slate-200 transition-all outline-none focus:bg-white focus:ring-2"
                style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
              />
            </div>
          </div>

          {/* [SECTION 2]: Logistics Detail */}
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase"
            >
              รายละเอียดเพิ่มเติม / ที่อยู่
            </label>
            <textarea
              id="address"
              rows={3}
              placeholder="ระบุความต้องการพิเศษ หรือที่อยู่จัดส่ง..."
              className="w-full resize-none rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 ring-1 ring-slate-200 transition-all outline-none focus:bg-white focus:ring-2"
              style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
            />
          </div>

          {/* [SECTION 3]: Payment Logic Overlay */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 backdrop-blur-sm">
            <p className="mb-4 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              Select Payment Method
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="has-[:checked]:border-brand-primary/50 flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-sm transition-all hover:border-slate-200">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="h-5 w-5 accent-current"
                  style={{ color: accentColor }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-900">โอนเงิน / PromptPay</span>
                  <span className="text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
                    Fast processing
                  </span>
                </div>
              </label>

              <label className="flex w-full cursor-not-allowed items-center gap-4 rounded-xl border border-slate-100 bg-slate-100/50 p-4 opacity-50 grayscale">
                <input type="radio" disabled className="h-5 w-5" />
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-500">เก็บเงินปลายทาง</span>
                  <span className="text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
                    Unavailable
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* [CTA_ENGINE] */}
          <button
            type="submit"
            disabled={isPending}
            style={{
              backgroundColor: accentColor,
              boxShadow: isPending ? "none" : `0 12px 40px -10px ${accentColor}80`,
            }}
            className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl py-6 text-xl font-black text-white transition-all hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:grayscale"
          >
            {isPending ? (
              <Loader2 className="h-7 w-7 animate-spin" />
            ) : (
              <div className="relative z-10 flex items-center gap-3">
                <span>ยืนยันคำสั่งซื้อ</span>
                {price && (
                  <span className="text-sm font-normal opacity-80">
                    (฿{typeof price === "number" ? price.toLocaleString() : price} {unit})
                  </span>
                )}
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            )}

            {/* High-end Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>

          {/* Security Indicator */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Encrypted Secure Transaction</span>
          </div>
        </form>
      </div>
    );
  },
);

DirectOrderForm.displayName = "DirectOrderForm";
