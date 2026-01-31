/** @format */
// พิกัดข้อมูล: app/(shops)/templates/page.tsx
// หน้าที่: ศูนย์รวมแม่พิมพ์ระบบงาน (Strategic Template Marketplace)
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Zero Warning
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import TemplateCatalogClient from "./TemplateCatalogClient";

/**
 * [STRATEGIC METADATA]: การจัดการโครงสร้างข้อมูลเพื่อยึดครองพิกัด Marketplace
 * ยุทธศาสตร์: เน้นการนำเสนอความพร้อมใช้งาน (Ready-to-Deploy) และประสิทธิภาพทางเทคนิค (Technical Excellence)
 */
export const metadata: Metadata = {
  title: `คลังเทมเพลตเว็บไซต์ประสิทธิภาพสูง | ${siteConfig.project.name}`,
  description:
    "คลังเทมเพลตเว็บไซต์ Next.js 16 ที่ผ่านการจูนสมรรถนะระดับสูงสุดโดย นายเอ็มซ่ามากส์ พร้อมสำหรับการทำอันดับบน Google และปิดการขายผ่าน LINE ทันทีที่ติดตั้ง",
  keywords: [
    ...siteConfig.keywords.list,
    "เทมเพลตเว็บไซต์สำเร็จรูป",
    "Sale Page คุณภาพสูง",
    "โครงสร้างเว็บ Next.js",
  ],
  alternates: { canonical: `${siteConfig.project.url}/templates` },
  openGraph: {
    title: `Web Templates Marketplace | ${siteConfig.project.name}`,
    description:
      "คลังรูปแบบเว็บไซต์ธุรกิจที่ผ่านการเพิ่มประสิทธิภาพระดับสูงสุด โครงสร้างแม่นยำ พร้อมดำเนินการติดตั้งภายใน 24 ชั่วโมง",
    url: `${siteConfig.project.url}/templates`,
    images: [{ url: siteConfig.project.ogImage }],
    type: "website",
  },
};

/**
 * [MAIN PAGE COMPONENT]
 * โครงสร้างเน้นความเร็วในการโหลด (Static First) 
 * และส่งต่อการประมวลผลระบบกรอง (Filtering) ให้กับ TemplateCatalogClient
 */
export default function Page() {
  return <TemplateCatalogClient />;
}
