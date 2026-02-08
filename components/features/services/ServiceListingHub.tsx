/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.0.3 (TYPE_PERFECT)
 * [STRATEGY]: Strategic Grid Alignment | Empty Node Grace | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useMemo, memo } from "react";

// --- 1. Infrastructure & UI ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceData, ServiceCategory } from "@/types";

// --- 2. Utilities & Types ---
import { cn } from "@/lib/utils";

interface ServiceListingHubProps {
  readonly limit?: number;
  readonly category?: ServiceCategory | string;
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
   */
  const services = useMemo(() => {
    // Defensive Check: ป้องกัน undefined registry
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];

    // Normalize Category string
    const targetCategory = typeof category === "string" ? category : undefined;

    return (
      registry
        .filter((svc) => !targetCategory || svc.category === targetCategory)
        // Sort ตาม Priority น้อยไปหามาก (1 = สำคัญสุด)
        .sort((a, b) => (a.priority || 99) - (b.priority || 99))
        .slice(0, limit || registry.length)
    );
  }, [category, limit]);

  /* 01. Empty State (v17 Design) */
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

  /* 02. Grid Layout */
  return (
    <div
      className={cn("grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10", className)}
    >
      {services.map((service, index) => (
        <ServiceCard
          // Use unique ID or fallback
          key={service.id || service.templateSlug || index}
          // Type Assertion here is safe because MASTER_REGISTRY items conform to ServiceData
          data={service as ServiceData}
          index={index}
          isPopular={service.isPopular}
        />
      ))}
    </div>
  );
};

export default memo(ServiceListingHub);
