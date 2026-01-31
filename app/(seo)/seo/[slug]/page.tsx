/** @format */
// พิกัดข้อมูล: app/(seo)/seo/[slug]/page.tsx
// หน้าที่: ส่วนควบคุมการแสดงผลบริการ SEO เชิงเทคนิครายพิกัด (Individual Service Page)
// มาตรฐาน: Next.js 16 (App Router) | Ultra-Deep Level 7 | Zero Warning
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// [RESOURCES]: นำเข้าพิกัดข้อมูล ยุทธศาสตร์ และคอมโพเนนต์แกนหลัก
import { getAllSeoSlugs, getSeoServiceBySlug, getServiceSchema } from "@/lib/seo";
import { getSeoComponent } from "../_registry";
import { siteConfig } from "@/constants/site-config";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * [INTERFACE]: กำหนดรูปแบบพิกัดข้อมูลสำหรับ Page Props
 * มาตรฐาน Next.js 15/16: params ต้องประมวลผลเป็น Promise
 */
interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 1. [STATIC GENERATION PROTOCOL]
 * เตรียมหน้าเว็บล่วงหน้า (SSG) เพื่อความเร็ว LCP ต่ำกว่า 0.8 วินาที
 */
export async function generateStaticParams() {
  const slugs = getAllSeoSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

/**
 * 2. [DYNAMIC METADATA SYSTEM]
 * ปรับแต่งพิกัด SEO Metadata รายหน้าเพื่อการทำอันดับสูงสุด
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSeoServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  const pageUrl = `${siteConfig.project.url}/seo/${slug}`;
  const imageUrl = `${siteConfig.project.url}/images/seo/${slug}.webp`;

  return {
    title: `${service.title} | ${siteConfig.project.nameTH}`,
    description: service.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${service.title} - ${siteConfig.expert.name}`,
      description: service.description,
      url: pageUrl,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: service.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [imageUrl],
    },
  };
}

/**
 * 3. [SYSTEM PAGE RENDERER]
 * Render Node หลักสำหรับบริการ Technical SEO รายพิกัด
 */
export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params;
  const serviceData = getSeoServiceBySlug(slug);

  // กรณีไม่พบพิกัดบริการในฐานข้อมูล Immutable
  if (!serviceData) notFound();

  // ดึงคอมโพเนนต์การแสดงผลตามพิกัด Slug จาก Registry
  const ServiceComponent = getSeoComponent(slug);

  /**
   * [STRATEGIC JSON-LD]: รหัสโครงสร้างเพื่อยืนยันพิกัดบริการและ FAQ
   * สื่อสารโดยตรงกับระบบ AI และบอทการค้นหา
   */
  const serviceSchema = getServiceSchema(serviceData);
  
  const faqSchema = serviceData.faq && {
    "@type": "FAQPage",
    "mainEntity": serviceData.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      }
    }))
  };

  return (
    <>
      {/* [SCHEMA INJECTION]: ยืนยันตัวตนระดับโครงสร้าง */}
      <JsonLd type="Service" data={serviceSchema} />
      {faqSchema && <JsonLd type="Graph" data={faqSchema} />}

      {/* [VIEWPORT RENDER]: แสดงผลส่วนหน้าเว็บ */}
      <main className="min-h-screen">
        <ServiceComponent data={serviceData} />
      </main>
    </>
  );
}
