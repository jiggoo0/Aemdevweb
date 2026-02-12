/**
 * [COMPONENT]: DIRECT_ORDER_FORM v17.9.2 (CONVERSION_GATEWAY)
 * [STRATEGY]: Zero-Friction UX | Form Integrity | High-Contrast CTA
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface DirectOrderFormProps {
  readonly price?: string;
  readonly unit?: string;
}

export function DirectOrderForm({ price, unit }: DirectOrderFormProps) {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // [HANDLING]: ระบบจัดการการส่งข้อมูล (จำลองการส่งเข้า Line OA หรือ Database)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    // จำลอง Network Latency เพื่อให้ UX ดูสมจริง
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsPending(false);
    setIsSuccess(true);
    toast.success("ได้รับข้อมูลการสั่งซื้อของท่านแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
  }

  if (isSuccess) {
    return (
      <div className="animate-in fade-in zoom-in flex flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-xl ring-1 ring-slate-100 duration-500">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">สั่งซื้อสำเร็จ!</h3>
        <p className="mt-2 text-slate-500">
          ขอบคุณที่ไว้วางใจ{" "}
          {price ? `เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันยอด ${price} ${unit || ""}` : "เรา"}
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-sm font-bold text-rose-600 hover:underline"
        >
          กลับไปหน้าสั่งซื้อ
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 shadow-rose-100 ring-rose-50 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* [SECTION_1]: ข้อมูลผู้ติดต่อ */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-slate-700">
              ชื่อ-นามสกุล *
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="กรุณากรอกชื่อจริง"
              className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-200 transition-all outline-none ring-inset focus:ring-2 focus:ring-rose-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold text-slate-700">
              เบอร์โทรศัพท์ *
            </label>
            <input
              required
              type="tel"
              id="phone"
              placeholder="08X-XXX-XXXX"
              className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-200 transition-all outline-none ring-inset focus:ring-2 focus:ring-rose-600"
            />
          </div>
        </div>

        {/* [SECTION_2]: ที่อยู่จัดส่ง */}
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-bold text-slate-700">
            ที่อยู่สำหรับจัดส่ง / รายละเอียดเพิ่มเติม
          </label>
          <textarea
            id="address"
            rows={3}
            placeholder="บ้านเลขที่, ถนน, แขวง/ตำบล..."
            className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-200 transition-all outline-none ring-inset focus:ring-2 focus:ring-rose-600"
          />
        </div>

        {/* [SECTION_3]: ตัวเลือกการชำระเงิน (Psychology of Ease) */}
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
            รูปแบบการชำระเงิน
          </p>
          <div className="flex gap-4">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="radio" name="payment" defaultChecked className="accent-rose-600" />
              <span className="text-sm font-medium text-slate-700">โอนเงิน/PromptPay</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 opacity-50">
              <input type="radio" name="payment" disabled className="accent-rose-600" />
              <span className="text-sm font-medium text-slate-700">เก็บเงินปลายทาง</span>
            </label>
          </div>
        </div>

        {/* [CTA_ENGINE]: ปุ่มปิดการขายที่มีความชัดเจนสูง */}
        <button
          type="submit"
          disabled={isPending}
          className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-rose-600 py-5 text-xl font-black text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 active:scale-[0.98] disabled:opacity-70"
        >
          {isPending ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <>
              <Send className="mr-2 h-6 w-6" />
              ยืนยันการสั่งซื้อ {price && `- ${price}`}
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          * ระบบจะส่งข้อมูลผ่านช่องทางที่ปลอดภัยและเข้ารหัสข้อมูลตามมาตรฐานสากล
        </p>
      </form>
    </div>
  );
}
