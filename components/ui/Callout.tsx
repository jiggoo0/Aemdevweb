/**
 * [UI COMPONENT]: CALLOUT_NODE v1.0.2 (STABILIZED)
 * [STRATEGY]: Information Hierarchy | Visual Anchor | MDX Integration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/types";

interface CalloutProps {
  /** [FIX]: Made optional to satisfy MDX generic component types */
  children?: React.ReactNode;
  type?: "info" | "warning" | "success" | "danger";
  icon?: IconName;
}

export function Callout({ children, type = "info", icon }: CalloutProps) {
  // [SAFETY]: ป้องกันการเรนเดอร์ Layout เปล่าหากไม่มีเนื้อหา (Satisfy TS optionality)
  if (!children) return null;

  const styles = {
    info: "border-brand-primary bg-brand-primary/5 text-text-primary",
    warning: "border-yellow-500/50 bg-yellow-500/5 text-yellow-200",
    success: "border-emerald-500/50 bg-emerald-500/5 text-emerald-200",
    danger: "border-red-500/50 bg-red-500/5 text-red-200",
  };

  return (
    <div
      className={cn(
        "my-8 flex gap-4 rounded-[2rem] border p-6 backdrop-blur-md transition-all duration-500",
        styles[type],
      )}
    >
      {icon && (
        <div className="mt-1 shrink-0">
          <IconRenderer name={icon} size={22} strokeWidth={2.5} />
        </div>
      )}
      <div className="text-base leading-relaxed font-medium italic opacity-90">{children}</div>
    </div>
  );
}
