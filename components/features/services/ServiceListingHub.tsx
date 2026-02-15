/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v17.9.104 (STABLE_ALIGNMENT)
 * [STRATEGY]: Strategic Grid Alignment | Deterministic Sort | Registry Orchestration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo, memo } from "react";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceCategory, TemplateMasterData } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceListingHubProps {
  readonly limit?: number;
  readonly category?: ServiceCategory | string;
  readonly className?: string;
  readonly showEmptyState?: boolean;
}

/**
 * @component ServiceListingHub
 * @description ศูนย์กลางการจัดระเบียบและแสดงผล Node บริการตามเงื่อนไขที่กำหนด
 */
const ServiceListingHub = ({
  limit,
  category,
  className,
  showEmptyState = true,
}: ServiceListingHubProps) => {
  /**
   * [DATA_ORCHESTRATION]: ระบบคัดกรองและจัดลำดับความสำคัญ (Priority Orchestration)
   * [LOGIC]: Priority Based -> Deterministic Fallback
   */
  const services = useMemo(() => {
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];
    let filtered = [...registry];

    // Filter by Category
    if (category) {
      filtered = filtered.filter((svc) => svc.category === category);
    }

    // [DETERMINISTIC_SORT]: เรียงตาม Priority และตามด้วย Title เพื่อความนิ่งของ UI
    return filtered
      .sort((a, b) => {
        const priorityDiff = (a.priority || 99) - (b.priority || 99);
        if (priorityDiff !== 0) return priorityDiff;
        return (a.title || "").localeCompare(b.title || "");
      })
      .slice(0, limit || registry.length);
  }, [category, limit]);

  /**
   * [UI_STATE]: Empty State Node (Architecture Debugger)
   */
  if (services.length === 0 && showEmptyState) {
    return (
      <div
        role="alert"
        className="bg-surface-card/30 border-border relative flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-dashed p-12 text-center backdrop-blur-md transition-all duration-700 md:rounded-[3.5rem] md:p-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          aria-hidden="true"
        />

        <div className="bg-surface-offset border-border shadow-glow-sm relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border">
          <IconRenderer name="Layers" size={36} className="text-brand-primary/40 animate-pulse" />
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-text-primary text-xl font-black tracking-[0.4em] uppercase italic opacity-90">
            Node_Inquiry.Empty
          </h3>
          <p className="text-text-secondary mx-auto max-w-sm text-sm font-medium italic opacity-70">
            ระบบกำลังเตรียมการ Deploy ข้อมูลชุดใหม่ในหมวดหมู่นี้ <br />
            กรุณาติดตามการอัปเดตจาก <span className="text-brand-primary">AEMZA_MACKS</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Service offerings"
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12", // [ALIGNED]: ตรงกับ SkeletonGrid
        className,
      )}
    >
      {services.map((service, index) => (
        <div key={service.id || `svc-${index}`} role="listitem" className="h-full">
          <ServiceCard
            data={service as TemplateMasterData}
            index={index}
            isPopular={service.isPopular}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
};

ServiceListingHub.displayName = "ServiceListingHub";

export default memo(ServiceListingHub);
