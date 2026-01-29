// @format
// พิกัดข้อมูล: app/(seo)/seo/[slug]/page.tsx
// หน้าที่: ส่วนควบคุมการแสดงผลบริการ SEO เชิงเทคนิครายพิกัด (Individual Service Page)
// มาตรฐาน: Next.js 16 (App Router) | Ultra-Deep Level 7 (Strict Typing)
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// [DATA SOURCE]: อ้างอิงพิกัดข้อมูลจาก Master Data และระบบตัวจัดการส่วนแสดงผล
import { seoServicesData } from "@/constants/seo-services";
import { getSeoComponent } from "../_registry";
import { siteConfig } from "@/constants/site-config";

/**
 * [INTERFACE]: กำหนดรูปแบบพิกัดข้อมูลสำหรับ Page Props
 * มาตรฐาน Next.js 16: params ต้องถูกจัดการในรูปแบบ Promise
 */
interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 1. [STATIC GENERATION PROTOCOL]
 * หน้าที่: สั่งการให้ระบบเตรียมหน้าเว็บล่วงหน้า (Build Time) 
 * เพื่อลดระยะเวลาการเข้าถึงข้อมูลให้เหลือน้อยที่สุดตามเกณฑ์ความเร็วสากล
 */
export async function generateStaticParams() {
  return seoServicesData.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * 2. [DYNAMIC METADATA SYSTEM]
 * หน้าที่: ปรับแต่งข้อมูลเพื่อการทำอันดับให้ตรงตามพิกัดหมวดหมู่บริการ
 * เน้นความแม่นยำของ Entity ข้ามแพลตฟอร์ม
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServicesData.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "ไม่พบพิกัดข้อมูลบริการ",
    };
  }

  const pageUrl = `${siteConfig.project.url}/seo/${slug}`;
  const imageUrl = `${siteConfig.project.url}/images/seo/${slug}.webp`;

  return {
    title: `${service.title} | ${siteConfig.project.nameTH}`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: pageUrl,
      siteName: siteConfig.project.name,
      locale: "th_TH",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

/**
 * 3. [SYSTEM PAGE RENDERER]
 * ส่วนควบคุมการแสดงผลหลักของหน้าพิกัดบริการ SEO เชิงเทคนิค
 */
export default async function SeoServicePage({ params }: PageProps) {
  // รับพิกัด Slug ตามมาตรฐาน Next.js 16
  const { slug } = await params;
  
  // ตรวจสอบความถูกต้องของข้อมูลบริการในคลังระบบกลาง (Strict Comparison)
  const serviceData = seoServicesData.find((item) => item.slug === slug);
  
  if (!serviceData) {
    notFound();
  }

  // เรียกใช้พิกัด Component เฉพาะทางจากระบบ Registry
  const ServiceComponent = getSeoComponent(slug);

  /**
   * [JSON-LD ENTITY DATA]: ชุดข้อมูลโครงสร้างเพื่อยืนยันพิกัดบริการกับระบบ AI
   * ออกแบบตามมาตรฐาน Schema.org เพื่อความน่าเชื่อถือระดับสูงสุด
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.title,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "url": siteConfig.project.url,
      "logo": siteConfig.project.logo
    },
    "areaServed": "TH",
    "url": `${siteConfig.project.url}/seo/${slug}`,
    "offers": {
      "@type": "Offer",
      "price": serviceData.pricing.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      {/* ระบบเรนเดอร์ส่วนแสดงผลบริการเชิงลึกแบบ Dynamic */}
      <ServiceComponent data={serviceData} />
      
      {/* ระบบฝังรหัสโครงสร้างข้อมูลเพื่อยืนยันพิกัดความถูกต้องกับระบบการค้นหา */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
