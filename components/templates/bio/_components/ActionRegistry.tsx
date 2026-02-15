"use client";
import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import type { CatalogItem } from "@/types";

interface ActionRegistryProps {
  links: CatalogItem[];
}

export const ActionRegistry = ({ links }: ActionRegistryProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-3">
      {links && links.length > 0 ? (
        links.map((link, idx) => (
          <a
            key={idx}
            href="#" // ใน Production ควร map field url จาก CMS
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-5 transition-all hover:translate-x-1 hover:border-[var(--brand-primary)]"
          >
            <div className="flex items-center gap-4">
              <div className="text-[var(--brand-primary)]">
                <IconRenderer name={(link.icon as IconName) || "ExternalLink"} size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm leading-none font-black uppercase italic">{link.name}</p>
                <p className="mt-1 font-mono text-[10px] tracking-tighter uppercase opacity-40">
                  Registry_Node_0{idx + 1}
                </p>
              </div>
            </div>
            <IconRenderer
              name="ChevronRight"
              size={16}
              className="opacity-20 transition-all group-hover:text-[var(--brand-primary)] group-hover:opacity-100"
            />
          </a>
        ))
      ) : (
        <p className="text-center font-mono text-[10px] opacity-30">No_Active_Nodes_In_Registry</p>
      )}
    </div>
  );
};
