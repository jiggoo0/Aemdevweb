/**
 * [ROUTE PAGE]: SERVICE_DETAIL_RENDERER v17.5.5 (STABILIZED)
 * [STRATEGY]: Outcome-Driven Architecture | Graph-Based SEO | Lean Performance
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// --- 1. Infrastructure & Core Data ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, AreaNode, TemplateMasterData } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateServiceSchema, generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. Templates (The Strategic Nodes) ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import CorporateTemplate from "@/components/templates/corporate/Index";
import SalePageTemplate from "@/components/templates/salepage/Index";
import CatalogTemplate from "@/components/templates/catalog/Index";
import BioTemplate from "@/components/templates/bio/Index";
import LocalTemplate from "@/components/templates/new-service-name/index";
import SeoAgencyTemplate from "@/components/templates/seo_agency/index";
import HotelTemplate from "@/components/templates/hotelresort/Index";

export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

export async function generateMetadata(props: PageProps<{ slug: string }>): Promise<Metadata> {
  const params = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === params.slug);

  if (!service) return { title: "Service Not Found" };

  return constructMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${params.slug}`,
    image: service.image,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage(props: PageProps<{ slug: string }>) {
  const params = await props.params;
  const service = MASTER_REGISTRY.find((s) => s.templateSlug === params.slug);

  if (!service) notFound();

  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
      { name: "บริการทั้งหมด", item: `${SITE_CONFIG.siteUrl}/services` },
      { name: service.title, item: `${SITE_CONFIG.siteUrl}/services/${params.slug}` },
    ]),
    generateServiceSchema(service),
  ]);

  const renderTemplate = () => {
    switch (service.templateSlug) {
      case "corporate": return <CorporateTemplate data={service} />;
      case "salepage": return <SalePageTemplate data={service} />;
      case "catalog": return <CatalogTemplate data={service} />;
      case "bio": return <BioTemplate data={service} />;
      case "new-service-name": 
        return <LocalTemplate data={service as unknown as AreaNode} />;
      case "seo_agency": return <SeoAgencyTemplate data={service} />;
      case "hotelresort": return <HotelTemplate data={service} />;
      default: return <CorporateTemplate data={service} />;
    }
  };

  return (
    <LayoutEngine spacing="none" theme={service.theme}>
      <JsonLd data={fullSchema} />
      <main className="animate-in fade-in slide-in-from-bottom-2 relative z-10 duration-1000">
        <div className="flex justify-center pt-24 pb-4">
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
            Node_Deployment: v{SITE_CONFIG.project.version}
          </span>
        </div>
        {renderTemplate()}
      </main>
    </LayoutEngine>
  );
}
