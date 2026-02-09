/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.3.9 (STABILIZED)
 * [STRATEGY]: Strategic Grid Alignment | Multi-Theme Resilience | Neural Flow
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

const ServiceListingHub = ({ limit, category, className, showEmptyState = true }: ServiceListingHubProps) => {
  const services = useMemo(() => {
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];
    const targetCategory = typeof category === "string" ? category : undefined;

    return registry
      .filter((svc) => !targetCategory || svc.category === targetCategory)
      .sort((a, b) => (a.priority || 99) - (b.priority || 99))
      .slice(0, limit || registry.length);
  }, [category, limit]);

  if (services.length === 0 && showEmptyState) {
    return (
      <div className="bg-surface-main/50 border-border flex flex-col items-center justify-center rounded-[2.5rem] border border-dashed p-16 text-center backdrop-blur-md transition-all duration-500 md:p-24">
        <div className="bg-surface-offset border-border mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border shadow-inner">
          <IconRenderer name="Database" size={48} className="text-brand-primary/50 animate-pulse" />
        </div>
        <div className="space-y-4">
          <h3 className="text-text-primary text-xl font-black tracking-[0.2em] uppercase italic opacity-90">
            Service_Deployment.Pending
          </h3>
          <p className="text-text-secondary mx-auto max-w-md text-sm leading-relaxed font-medium">
            ขณะนี้ระบบกำลังประมวลผลข้อมูลบริการชุดใหม่ <br />
            เพื่อส่งมอบประสบการณ์ที่ดีที่สุดให้กับธุรกิจของคุณ
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10", className)}>
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || service.templateSlug || index}
          data={service as ServiceData}
          index={index}
          isPopular={service.isPopular}
        />
      ))}
    </div>
  );
};

export default memo(ServiceListingHub);
