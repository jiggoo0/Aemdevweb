/**
 * [TEMPLATE]: CATALOG_ORCHESTRATOR v18.0.39 (STABILIZED_BUILD)
 * [STRATEGY]: Node Integration | Intelligence FAQ | Named Import Standard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useMemo, useState } from "react";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Component Registry ---
import { CatalogHeader } from "../sections/CatalogHeader";
import { SearchOrchestrator } from "../sections/SearchOrchestrator";
import { ProductGrid, EmptyState } from "../sections/ProductGrid";
import { ProductNode } from "../sections/ProductNode";
import { InquiryPortal } from "../sections/InquiryPortal";
import { TechnicalSpecSheet } from "../sections/TechnicalSpecSheet";
import { RegionalRoadmap } from "../sections/RegionalRoadmap";
import { LocalSuccessNode } from "../sections/LocalSuccessNode";
import { RegionalGallery } from "../sections/RegionalGallery";
import { LocalInsight } from "../sections/LocalInsight";
import { DirectTerminal } from "../sections/DirectTerminal";

/** * [INJECT]: ดึงระบบ FAQ Engine ด้วย Named Import { DynamicFAQ }
 * [TECHNICAL_FIX]: เปลี่ยนจาก Default Import เป็น Named Import เพื่อป้องกันค่า undefined ในช่วง Prerender
 */
import { DynamicFAQ } from "../sections/DynamicFAQ";

// --- 2. Type Definition & Interface ---
type CatalogNode = {
  name: string;
  description: string;
  icon: string;
  type: string;
  technicalID?: string;
};

/**
 * @component CatalogTemplate
 * @description ศูนย์กลางการบริหารจัดการ Node ข้อมูลและอัตลักษณ์เฉพาะพื้นที่แบบ Type-Safe
 */
const CatalogTemplate = ({ data }: { data: UniversalTemplateProps }) => {
  // [STATE_MANAGEMENT]: ประมวลผลสถานะการเลือก Node
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedNode, setSelectedNode] = useState<CatalogNode | null>(null);

  // [SEO_OPTIMIZATION]: สร้าง Schema Markup แบบ Dynamic ตามข้อมูล Node
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [DATA_MERGER]: รวม Items และ Features เข้าด้วยกันเพื่อสร้าง Unified Search Index
  const allNodes = useMemo<CatalogNode[]>(() => {
    const items = (data.items || []).map((i) => ({
      name: i.name,
      description: i.description,
      icon: i.icon,
      type: "item",
    }));

    const features = (data.coreFeatures || []).map((f) => ({
      name: f.title,
      description: f.description,
      icon: f.icon,
      type: "feature",
    }));

    return [...items, ...features];
  }, [data.items, data.coreFeatures]);

  // [FILTER_ENGINE]: ระบบ Filter ประสิทธิภาพสูงรองรับ Case-Insensitive
  const filteredNodes = useMemo<CatalogNode[]>(() => {
    if (!searchTerm) return allNodes;
    const lowerTerm = searchTerm.toLowerCase();
    return allNodes.filter(
      (n) =>
        n.name.toLowerCase().includes(lowerTerm) || n.description.toLowerCase().includes(lowerTerm),
    );
  }, [allNodes, searchTerm]);

  return (
    <LayoutEngine spacing="specialist">
      <JsonLd data={schema} />

      <div className="container mx-auto px-4 py-20">
        {/* --- Phase 01: Status & Navigation --- */}
        <CatalogHeader
          title={data.title}
          subtitle={data.description}
          nodeCount={allNodes.length}
          banner={data.regionalVisuals?.banner}
        />

        {/* [NEW]: Regional Market Context */}
        {data.province && (
          <div className="mb-20">
            <LocalInsight
              insight={data.localContext?.marketInsight || ""}
              painPoints={(data.localContext?.painPoints as string[]) || []}
              marketSaturation={data.marketSaturation}
            />
          </div>
        )}

        {/* [NEW]: Regional Promotions (Industrial/Catalog Style) */}
        {data.promotions && data.promotions.length > 0 && (
          <section className="mb-20">
            <div className="shadow-pro-lg rounded-[var(--radius)] border border-[var(--brand-primary)]/20 bg-[var(--surface-card)] p-8 transition-all hover:border-[var(--brand-primary)]/40 md:p-12">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)]/10 px-4 py-1">
                    <span className="font-mono text-[9px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                      Industrial_Promotion_Active
                    </span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                    {data.promotions[0].title}
                  </h3>
                  <p className="max-w-xl text-base font-medium opacity-60">
                    {data.promotions[0].description}
                  </p>
                </div>
                {data.promotions[0].discount && (
                  <div className="shadow-glow flex flex-col items-center justify-center rounded-3xl bg-[var(--brand-primary)] px-10 py-8 text-white">
                    <p className="mb-1 font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">
                      Value_Add
                    </p>
                    <p className="text-4xl font-black tracking-tighter italic">
                      {data.promotions[0].discount}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* [NEW]: Regional Showcase Gallery */}
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}

        {/* --- Phase 02: Search & Filter Interface --- */}
        <SearchOrchestrator value={searchTerm} onChange={setSearchTerm} />

        {/* --- Phase 03: Registry Grid (Node Mapping) --- */}
        {filteredNodes.length > 0 ? (
          <ProductGrid>
            {filteredNodes.map((node, idx) => {
              const techID = `NODE_0x${(idx + 1).toString(16).toUpperCase().padStart(2, "0")}`;

              return (
                <div
                  key={`${node.name}-${idx}`}
                  onClick={() => setSelectedNode({ ...node, technicalID: techID })}
                  className="group/node h-full cursor-pointer"
                >
                  <ProductNode
                    index={idx}
                    name={node.name}
                    description={node.description}
                    icon={node.icon}
                    technicalID={techID}
                  />
                </div>
              );
            })}
          </ProductGrid>
        ) : (
          <EmptyState />
        )}

        {/* [NEW]: Regional Roadmap & Terminal */}
        {data.province && (
          <>
            <div className="-mx-4 md:-mx-10">
              <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
            </div>

            {/* [NEW]: Local Success Story */}
            {data.localSuccessStory && (
              <div className="py-12">
                <LocalSuccessNode
                  title={data.localSuccessStory.title}
                  result={data.localSuccessStory.result}
                  province={data.province}
                />
              </div>
            )}

            <div className="mx-auto max-w-2xl py-24">
              <DirectTerminal
                mode="health-check"
                province={data.province}
                latency={data.regionalLatency}
              />
            </div>
          </>
        )}

        {/* --- Phase 04: Intelligence FAQ (Objection Killer) --- 
            [STRATEGY]: ใช้ Named Component เพื่อความแม่นยำในการ Render 
        */}
        <div className="mt-24 border-t border-[var(--foreground)]/5">
          <DynamicFAQ
            items={data.faqs}
            title="Registry_Intelligence_FAQ"
            description="ข้อมูลเชิงลึกเกี่ยวกับมาตรฐานสินค้าและการรับประกันทางเทคนิค"
          />
        </div>

        {/* --- Phase 05: Conversion Gateway (RFQ Portal) --- */}
        <InquiryPortal />
      </div>

      {/* --- Global Overlay: Technical Specification Sheet --- */}
      <TechnicalSpecSheet
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        data={
          selectedNode || {
            name: "",
            description: "",
            technicalID: "NULL_NODE",
            icon: "Disc",
            type: "null",
          }
        }
      />
    </LayoutEngine>
  );
};

export default CatalogTemplate;
