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
import { CatalogHeader } from "./_components/CatalogHeader";
import { SearchOrchestrator } from "./_components/SearchOrchestrator";
import { ProductGrid, EmptyState } from "./_components/ProductGrid";
import { ProductNode } from "./_components/ProductNode";
import { InquiryPortal } from "./_components/InquiryPortal";
import { TechnicalSpecSheet } from "./_components/TechnicalSpecSheet";

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
        <CatalogHeader title={data.title} subtitle={data.description} nodeCount={allNodes.length} />

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
