/** @format */

import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import TemplateCatalogClient from "./TemplateCatalogClient"

/**
 * [STRATEGIC METADATA]: ยึดครองพิกัดการค้นหาสำหรับ Marketplace
 * มาตรฐาน: Ultra-Deep Level 7 | SEO Optimized
 */
export const metadata: Metadata = {
  title: `Web Templates Marketplace | ${siteConfig.project.name}`,
  description: "คลังเทมเพลตเว็บไซต์สำเร็จรูป High-Performance พร้อมใช้งานสำหรับธุรกิจทุกประเภท ปรับแต่งเพื่อ SEO และความเร็วสูงสุด",
  alternates: { canonical: `${siteConfig.project.url}/templates` },
  openGraph: {
    title: `Web Templates Marketplace | ${siteConfig.project.name}`,
    description: "คลังรูปแบบเว็บไซต์ธุรกิจที่ผ่านการเพิ่มประสิทธิภาพระดับสูงสุด โครงสร้างแม่นยำ พร้อมดำเนินการภายใน 24 ชั่วโมง",
    url: `${siteConfig.project.url}/templates`,
    images: [{ url: siteConfig.project.ogImage }],
  },
}

export default function Page() {
  return <TemplateCatalogClient />
}
