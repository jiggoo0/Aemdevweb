/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Strategic Grid Alignment | Deterministic Sort | Zero-Any Policy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useMemo, memo } from "react";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard"; // Ensure this path is correct
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceCategory, TemplateMasterData } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceListingHubProps {
  readonly limit?: number;
  readonly category?: ServiceCategory | string;
  readonly className?: string;
  readonly showEmptyState?: boolean;
}

const ServiceListingHub = ({
  limit,
  category,
  className,
  showEmptyState = true,
}: ServiceListingHubProps) => {
  // [DATA_ORCHESTRATION]: Logic การกรองและจัดลำดับข้อมูลแบบ Deterministic
  const services = useMemo(() => {
    // Safety check: ensure registry is array
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];

    return (
      registry
        .filter((svc) => !category || svc.category === category)
        // Sort by priority (Ascending: 1 is highest priority)
        .sort((a, b) => (a.priority || 99) - (b.priority || 99))
        .slice(0, limit || registry.length)
    );
  }, [category, limit]);

  // [UI_STATE]: การจัดการสถานะเมื่อไม่พบข้อมูล (Empty State Visualization)
  if (services.length === 0 && showEmptyState) {
    return (
      <div className="bg-surface-card/50 border-border flex flex-col items-center justify-center rounded-[2rem] border border-dashed p-10 text-center backdrop-blur-md transition-all duration-500 md:rounded-[3rem] md:p-24">
        <div className="bg-surface-offset border-border shadow-pro-sm mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border md:mb-8 md:h-24 md:w-24 md:rounded-[2rem]">
          <IconRenderer
            name="Database"
            size={32}
            className="text-brand-primary/50 animate-pulse md:h-10 md:w-10"
          />
        </div>
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-text-primary text-lg font-black tracking-[0.3em] uppercase italic opacity-90 md:text-xl">
            Node_Inquiry.Empty
          </h3>
          <p className="text-text-secondary mx-auto max-w-sm text-xs font-medium italic opacity-70 md:max-w-md md:text-sm">
            ขออภัยครับ ระบบยังไม่พบ Service Node ในหมวดหมู่นี้ <br />
            ทีมงานกำลังเร่ง Deploy ข้อมูลชุดใหม่เร็วๆ นี้ครับ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-12",
        className,
      )}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          data={service as TemplateMasterData}
          index={index}
          isPopular={service.isPopular}
        />
      ))}
    </div>
  );
};

export default memo(ServiceListingHub);
