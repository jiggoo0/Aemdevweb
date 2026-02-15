"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

interface SpecItem {
  label: string;
  value: string;
}

interface TechnicalSpecSheetProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly data: {
    name: string;
    description: string;
    icon?: string;
    specs?: SpecItem[];
    technicalID: string;
  };
}

/**
 * @component TechnicalSpecSheet
 * @description หน้าต่างแสดงรายละเอียดทางเทคนิคแบบเจาะลึก รองรับ Identity Override
 */
export const TechnicalSpecSheet = ({ isOpen, onClose, data }: TechnicalSpecSheetProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with Neural Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-[var(--surface-main)] shadow-2xl"
          >
            {/* Header: Identity Label */}
            <div className="flex items-center justify-between border-[var(--foreground)]/10 border-b-[var(--border-width)] bg-[var(--brand-primary)]/5 p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-[calc(var(--radius)*0.5)] bg-[var(--brand-primary)] p-2 text-[var(--surface-main)]">
                  <IconRenderer name={(data.icon as IconName) || "Settings"} size={20} />
                </div>
                <div>
                  <p className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                    Specification_Entry: {data.technicalID}
                  </p>
                  <h2 className="font-[family-name:var(--font-primary)] text-xl font-black tracking-tight uppercase md:text-2xl">
                    {data.name}
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-[var(--foreground)]/5"
              >
                <IconRenderer name="X" size={24} />
              </button>
            </div>

            {/* Content: Blueprint Data */}
            <div className="custom-scrollbar flex-grow space-y-10 overflow-y-auto p-6 md:p-10">
              {/* Description Node */}
              <div className="space-y-4">
                <p className="font-mono text-[10px] font-bold tracking-widest uppercase italic opacity-40">
                  // Overview_Analysis
                </p>
                <p className="text-lg leading-relaxed font-medium text-[var(--text-primary)]/80 italic">
                  {data.description}
                </p>
              </div>

              {/* Technical Grid (The Table) */}
              <div className="space-y-6">
                <p className="font-mono text-[10px] font-bold tracking-widest uppercase italic opacity-40">
                  // Data_Parameters
                </p>
                <div className="grid grid-cols-1 gap-[var(--border-width)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 md:grid-cols-2">
                  {(
                    data.specs || [
                      { label: "Material_Grade", value: "Industrial_Standard_A1" },
                      { label: "Deployment_Speed", value: "NextJS_Optimized" },
                      { label: "Integration_Type", value: "API_First" },
                      { label: "Security_Level", value: "Enterprise_Hardened" },
                    ]
                  ).map((spec, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between bg-[var(--surface-main)] p-4 transition-colors hover:bg-[var(--brand-primary)]/5"
                    >
                      <span className="font-mono text-[11px] tracking-wider uppercase opacity-60">
                        {spec.label}
                      </span>
                      <span className="font-[family-name:var(--font-primary)] font-bold tracking-tight text-[var(--brand-primary)]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Note */}
              <div className="border-l-4 border-[var(--brand-primary)] bg-[var(--brand-primary)]/5 p-6 italic">
                <p className="text-sm leading-relaxed opacity-70">
                  * ข้อมูลข้างต้นถูกสร้างขึ้นผ่านสถาปัตยกรรม Programmatic SEO
                  เพื่อความแม่นยำสูงสุดในการจัดทำฐานข้อมูล สำหรับการปรับแต่งสเปกเชิงลึก
                  กรุณาติดต่อทีมวิศวกรระบบของเราผ่านช่องทาง RFQ
                </p>
              </div>
            </div>

            {/* Footer: Action Node */}
            <div className="flex flex-col items-center justify-between gap-6 border-[var(--foreground)]/10 border-t-[var(--border-width)] bg-[var(--surface-card)] p-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="font-mono text-[10px] font-black tracking-widest uppercase opacity-60">
                  Ready_To_Order_Registry
                </span>
              </div>
              <Button variant="neo" size="lg" className="h-14 w-full px-10 md:w-auto">
                ส่งคำขอใบเสนอราคา (RFQ)
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
