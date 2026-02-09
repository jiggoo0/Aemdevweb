/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Strategic Grid Alignment | Multi-Theme Resilience | Zero-Any Architecture
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useMemo, memo } from "react";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceData, ServiceCategory } from "@/types";
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
  // [DATA_ORCHESTRATION]: Filter & Sort Logic
  const services = useMemo(() => {
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];

    return registry
      .filter((svc) => !category || svc.category === category)
      .sort((a, b) => (a.priority || 99) - (b.priority || 99))
      .slice(0, limit || registry.length);
  }, [category, limit]);

  // [UI_STATE]: Empty State Visualization
  if (services.length === 0 && showEmptyState) {
    return (
      <div className="bg-surface-card/50 border-border flex flex-col items-center justify-center rounded-[3rem] border border-dashed p-16 text-center backdrop-blur-md transition-all duration-500 md:p-24">
        <div className="bg-surface-offset border-border shadow-pro-sm mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border">
          <IconRenderer name="Database" size={40} className="text-brand-primary/50 animate-pulse" />
        </div>
        <div className="space-y-4">
          <h3 className="text-text-primary text-xl font-black tracking-[0.3em] uppercase italic opacity-90">
            Node_Inquiry.Empty
          </h3>
          <p className="text-text-secondary mx-auto max-w-md text-sm font-medium italic opacity-70">
            ขออภัยครับ ระบบไม่พบรายการบริการในหมวดหมู่นี้ <br />
            กำลังเตรียมการ Onboarding ข้อมูลชุดใหม่เร็วๆ นี้ครับ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12", className)}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          data={service as ServiceData}
          index={index}
          isPopular={service.isPopular}
        />
      ))}
    </div>
  );
};

export default memo(ServiceListingHub);
