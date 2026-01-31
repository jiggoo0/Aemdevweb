/** @format */
// พิกัดข้อมูล: app/(main)/services/page.tsx
// หน้าที่: ศูนย์รวมโหนดบริการหลัก (Strategic Services Hub)
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Zero Warning
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import ServicesClient from "./ServicesClient";

/**
 * [STRATEGIC METADATA]: การจัดการโครงสร้างข้อมูลเพื่อยึดครองพิกัดการค้นหา
 * ยุทธศาสตร์: เน้นความชัดเจนของตัวตน (Expertise) และผลลัพธ์เชิงสมรรถนะ (Performance)
 */
export const metadata: Metadata = {
  title: `บริการจูนระบบและวางรากฐานเว็บไซต์ | ${siteConfig.project.name}`,
  description:
    "ยกระดับธุรกิจด้วยบริการพัฒนาเว็บไซต์ Next.js 16 และ Technical SEO โดย นายเอ็มซ่ามากส์ เน้นความเร็ว LCP ต่ำกว่า 0.8 วินาที และพิกัดโครงสร้างที่ Google เชื่อมั่น",
  keywords: [...siteConfig.keywords.list, "บริการทำ SEO", "รับทำ Sale Page"],
  alternates: { canonical: `${siteConfig.project.url}/services` },
  openGraph: {
    title: `Strategic Web Services | ${siteConfig.project.name}`,
    description:
      "เลือกโหนดบริการที่ตอบโจทย์ความต้องการทางธุรกิจของคุณ ทุกพิกัดรหัสถูกปรับแต่งเพื่อสมรรถนะสูงสุดและปิดการขายได้จริง",
    url: `${siteConfig.project.url}/services`,
    images: [{ url: siteConfig.project.ogImage }],
    type: "website",
  },
};

/**
 * [MAIN PAGE COMPONENT]
 * โครงสร้างเน้นการ Render ฝั่ง Server สำหรับ Metadata 
 * และส่งต่อการแสดงผลเชิง Interactive ให้กับ ServicesClient
 */
export default function Page() {
  return <ServicesClient />;
}
