/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v18.0.0 (PRODUCTION_READY)
 * [STRATEGY]: Grid-Symmetry Protocol | Deterministic Sort | Hardware-Accelerated Stacking
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
 * @description ศูนย์กลางการจัดระเบียบ Node บริการ พร้อมระบบควบคุมความสมดุลของ Layout
 */
const ServiceListingHub = ({
  limit,
  category,
  className,
  showEmptyState = true,
}: ServiceListingHubProps) => {
  /**
   * [DATA_ORCHESTRATION]: ระบบคัดกรองข้อมูลระดับ Hardened
   * [LOGIC]: Priority-First -> Title-Secondary (Deterministic)
   */
  const services = useMemo(() => {
    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];

    return [...registry]
      .filter((svc) => !category || svc.category === category)
      .sort((a, b) => {
        // [STRICT_SORT]: ต่ำกว่า 99 คือ Priority สูง
        const pA = a.priority ?? 99;
        const pB = b.priority ?? 99;
        if (pA !== pB) return pA - pB;
        return (a.title || "").localeCompare(b.title || "", "th");
      })
      .slice(0, limit || registry.length);
  }, [category, limit]);

  /**
   * [UI_STATE]: STANDBY_NODE (Empty State Protocol)
   */
  if (services.length === 0 && showEmptyState) {
    return (
      <div
        role="alert"
        className="border-border bg-surface-card/30 relative flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-dashed p-12 text-center backdrop-blur-md transition-all duration-700 md:rounded-[3.5rem] md:p-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          aria-hidden="true"
        />

        <div className="border-border bg-surface-offset shadow-glow-sm relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] border">
          <IconRenderer name="Layers" size={32} className="text-brand-primary/40 animate-pulse" />
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-text-primary font-mono text-sm font-black tracking-[0.5em] uppercase opacity-90">
            Node_Inquiry.Standby
          </h3>
          <p className="text-text-secondary mx-auto max-w-sm text-xs font-medium italic opacity-70">
            ระบบกำลังเตรียมการ Deploy ชุดข้อมูล <br />
            <span className="text-brand-primary font-bold">READY_FOR_ORCHESTRATION</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Professional Service Nodes"
      className={cn(
        // [SYMMETRY_ENGINE]: บังคับ Grid และใช้ gap ที่แม่นยำเพื่อลดอาการยืดยาวของการ์ด
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8",
        "transform-gpu", // บังคับใช้ GPU Layer สำหรับ Grid Animation
        className,
      )}
    >
      {services.map((service, index) => (
        <div
          key={service.id || `svc-${index}`}
          role="listitem"
          className="group flex h-full w-full flex-col"
        >
          {/* [STRATEGY]: หุ้มด้วย flex h-full เพื่อให้ ServiceCard 
              ขยายตัวเต็มพื้นที่ Grid Cell เสมอ (ป้องกันการสูงไม่เท่ากัน) 
          */}
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
