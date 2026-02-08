/**
 * [ROUTE PAGE]: SYSTEM_STATUS_TERMINAL v17.2.1 (ZERO_ANY_FINALIZED)
 * [STRATEGY]: Kinetic Grid Architecture | Strict Type Integrity | Node Matrix
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import * as motion from "framer-motion/client"; // ใช้ Client Component Proxy สำหรับ Motion

// --- Infrastructure ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import type { IconName } from "@/types";

export const metadata: Metadata = {
  title: `System_Integrity_Report | ${SITE_CONFIG.brandName}`,
  description: "Advanced diagnostic report for multi-node architecture.",
};

// --- [TYPES]: นิยามพิกัดข้อมูล Node Matrix ---
interface StatusNode {
  readonly id: string;
  readonly label: string;
  readonly latency: string;
  readonly load: string;
  readonly status: "OPTIMIZED" | "STABLE" | "INDEXING" | "FAST_PATH" | "LOCKED" | "OPERATIONAL";
  readonly health: number;
  readonly icon: IconName;
}

const ARCHITECTURE_NODES: readonly StatusNode[] = [
  {
    id: "NODE_01",
    label: "Core_Render_Engine",
    latency: "14ms",
    load: "12%",
    status: "OPTIMIZED",
    health: 100,
    icon: "Cpu",
  },
  {
    id: "NODE_02",
    label: "Dynamic_CMS_Protocol",
    latency: "28ms",
    load: "08%",
    status: "STABLE",
    health: 100,
    icon: "Database",
  },
  {
    id: "NODE_03",
    label: "SEO_Authority_Nodes",
    latency: "N/A",
    load: "LOW",
    status: "INDEXING",
    health: 99.9,
    icon: "Search",
  },
  {
    id: "NODE_04",
    label: "Global_Edge_CDN",
    latency: "08ms",
    load: "15%",
    status: "FAST_PATH",
    health: 100,
    icon: "Globe",
  },
  {
    id: "NODE_05",
    label: "Security_Firewall_v16",
    latency: "02ms",
    load: "04%",
    status: "LOCKED",
    health: 100,
    icon: "ShieldCheck",
  },
  {
    id: "NODE_06",
    label: "Asset_Cloud_Distro",
    latency: "42ms",
    load: "22%",
    status: "OPERATIONAL",
    health: 100,
    icon: "Layers",
  },
];

export default function StatusPage() {
  const systemRefId = "AEM-X72-NODE";

  return (
    <LayoutEngine spacing="none">
      {/* 01. TERMINAL HEADER: Kinetic Visual Infrastructure */}
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-4xl space-y-8">
              <div className="flex items-center gap-4">
                <div className="border-brand-primary/20 bg-brand-primary/10 flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                    <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full"></span>
                  </span>
                  <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                    Diagnostic_Mode_v17.2
                  </span>
                </div>
                <span className="hidden font-mono text-[10px] font-bold tracking-widest text-gray-500 uppercase opacity-30 sm:block">
                  Ref_ID: {systemRefId}
                </span>
              </div>

              <h1 className="text-6xl leading-[0.85] font-black tracking-tighter text-white uppercase italic sm:text-7xl md:text-8xl lg:text-9xl">
                System <br className="hidden sm:block" /> Integrity.
              </h1>
            </div>

            {/* Status Panel: Real-time Metrics Visualizer */}
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:w-96">
              <div className="mb-6 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] font-black text-gray-400 uppercase opacity-50">
                    Master_System_Uptime
                  </span>
                  <p className="text-brand-primary font-mono text-3xl leading-none font-black italic">
                    99.99<span className="ml-1 text-sm">%</span>
                  </p>
                </div>
                <IconRenderer name="Activity" size={32} className="text-brand-primary opacity-20" />
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/40">
                <div className="bg-brand-primary h-full w-[99.99%] shadow-[0_0_10px_var(--color-brand-primary)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. NODE MATRIX: Golden Proportions Layout */}
      <section className="bg-surface-main min-h-[70vh] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="font-mono text-xs font-black tracking-[0.5em] text-white uppercase italic">
              Node_Infrastructure_Matrix
            </h2>
            <span className="font-mono text-[9px] font-bold text-gray-500 uppercase opacity-40">
              Total_Nodes: {ARCHITECTURE_NODES.length}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE_NODES.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-700 ease-out",
                  "hover:border-brand-primary/40 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-2xl",
                )}
              >
                {/* Card Header */}
                <div className="mb-14 flex items-start justify-between">
                  <div className="group-hover:border-brand-primary/30 group-hover:text-brand-primary rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-500 group-hover:rotate-6">
                    <IconRenderer name={node.icon} size={24} />
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-brand-primary block font-mono text-[10px] leading-none font-black tracking-widest uppercase">
                      {node.status}
                    </span>
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1 w-12 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="bg-brand-primary h-full"
                          style={{ width: `${node.health}%` }}
                        />
                      </div>
                      <span className="font-mono text-[8px] font-bold text-gray-500 uppercase opacity-40">
                        {node.health}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Node Identity */}
                <div className="relative z-10 space-y-2">
                  <span className="font-mono text-[10px] font-black tracking-[0.2em] text-gray-500 opacity-25">
                    {node.id}
                  </span>
                  <h4 className="group-hover:text-brand-primary text-2xl leading-none font-black tracking-tight text-white uppercase italic transition-colors">
                    {node.label}
                  </h4>
                </div>

                {/* Data Points Layer */}
                <div className="relative z-10 mt-10 grid grid-cols-2 gap-10 border-t border-white/5 pt-8">
                  <div className="space-y-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase opacity-40">
                      Latency
                    </span>
                    <div className="flex items-baseline gap-1">
                      <p className="font-mono text-base font-black text-white italic">
                        {node.latency}
                      </p>
                      {node.latency !== "N/A" && (
                        <span className="text-brand-primary animate-pulse text-[8px] font-black">
                          ▲
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase opacity-40">
                      Load_Factor
                    </span>
                    <p className="font-mono text-base font-black text-white italic">{node.load}</p>
                  </div>
                </div>

                {/* Interaction Aura */}
                <div className="bg-brand-primary pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-10" />
              </motion.div>
            ))}
          </div>

          {/* End Signature */}
          <div className="mt-40 flex flex-col items-center justify-center space-y-8 pb-20">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30" />
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[9px] font-black tracking-[0.8em] text-gray-500 uppercase opacity-30">
                End_of_Integrity_Log
              </span>
              <span className="font-mono text-[7px] font-bold tracking-widest text-gray-500 uppercase opacity-10">
                Nodes_Verified_Secure
              </span>
            </div>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
