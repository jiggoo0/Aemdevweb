/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.0.2 (STABILIZED)
 * [STRATEGY]: Strategic Grid Alignment | Empty Node Grace | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useMemo, memo } from "react";

// --- 1. Infrastructure & UI ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceData, ServiceCategory } from "@/types"; // ✅ Import จาก Global Types เพื่อความถูกต้อง

// --- 2. Utilities & Types ---
import { cn } from "@/lib/utils";

interface ServiceListingHubProps {
  readonly limit?: number;
  readonly category?: ServiceCategory | string; // รองรับทั้ง Type และ String
  readonly className?: string;
  readonly showEmptyState?: boolean;
}

/**
 * @component ServiceListingHub
 * @description ศูนย์รวมรายการบริการที่ปรับจูนมาเพื่อความเร็วและความแม่นยำของข้อมูล
 */
const ServiceListingHub = ({
  limit,
  category,
  className,
  showEmptyState = true,
}: ServiceListingHubProps) => {
  /**
   * [DATA PROCESSING]: คัดเลือกและเรียงลำดับข้อมูลตาม Priority
   * เพื่อให้มั่นใจว่าบริการที่สำคัญที่สุดจะปรากฏแก่สายตาลูกค้าก่อนเสมอ
   */
  const services = useMemo(() => {
    // ใช้ Fallback [] กรณี MASTER_REGISTRY ยังไม่ถูกโหลด
    const registry = MASTER_REGISTRY || [];

    // แปลง category เป็น string เพื่อการเปรียบเทียบที่ปลอดภัย
    const targetCategory = typeof category === "string" ? category : undefined;

    return (
      registry
        .filter((svc) => !targetCategory || svc.category === targetCategory)
        // Sort ตาม Priority น้อยไปหามาก (1 = สำคัญสุด)
        .sort((a, b) => (a.priority || 99) - (b.priority || 99))
        .slice(0, limit || registry.length)
    );
  }, [category, limit]);

  /* 01. กรณีระบบกำลังจัดเตรียมข้อมูล (Empty Node State - v17 Design) */
  if (services.length === 0 && showEmptyState) {
    return (
      <div className="hover:border-brand-primary/20 flex flex-col items-center justify-center rounded-[2.5rem] border border-dashed border-white/10 bg-[#050505]/50 p-16 text-center backdrop-blur-md transition-all duration-500 md:p-24">
        <div className="bg-surface-offset mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/5 shadow-inner shadow-black/50">
          <IconRenderer name="Database" size={48} className="text-brand-primary/50 animate-pulse" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-[0.2em] text-white/90 uppercase italic">
            Service_Deployment.Pending
          </h3>
          <p className="mx-auto max-w-md text-sm leading-relaxed font-medium text-gray-500">
            ขณะนี้ระบบกำลังประมวลผลข้อมูลบริการชุดใหม่ <br />
            เพื่อส่งมอบประสบการณ์ที่ดีที่สุดให้กับธุรกิจของคุณ
          </p>
        </div>
      </div>
    );
  }

  /* 02. ระบบการจัดวาง Grid แบบ Specialist */
  return (
    <div
      className={cn(
        // Grid System: ปรับระยะห่างให้ดูโปร่ง (Breathable Space)
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10",
        className,
      )}
    >
      {services.map((service, index) => (
        <ServiceCard
          // ใช้ id เป็น key หลัก ถ้าไม่มีให้ใช้ title หรือ index (Fallback)
          key={service.id || service.title || index}
          data={service as ServiceData} // Type Assertion เพื่อความชัวร์
          index={index} // ส่ง Index เพื่อให้ ServiceCard ทำ Staggered Animation
        />
      ))}
    </div>
  );
};

export default memo(ServiceListingHub);
