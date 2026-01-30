/** @format */

import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import ServicesClient from "./ServicesClient"

/**
 * [STRATEGIC METADATA]: การจัดการโครงสร้างข้อมูลเพื่อยึดครองพิกัด SEO
 * มาตรฐาน: Ultra-Deep Level 7 | Zero Warning
 */
export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.project.name}`,
  description: "บริการพัฒนาเว็บไซต์และ Technical SEO ครบวงจร มาตรฐาน Level 7 ปรับแต่งเพื่อสมรรถนะและความเร็วสูงสุด",
  alternates: { canonical: `${siteConfig.project.url}/services` },
  openGraph: {
    title: `Our Services | ${siteConfig.project.name}`,
    description: "เลือกโหนดบริการที่ตอบโจทย์ความต้องการทางธุรกิจของคุณ ทุกพิกัดรหัสถูกปรับแต่งเพื่อสมรรถนะสูงสุด",
    url: `${siteConfig.project.url}/services`,
    images: [{ url: siteConfig.project.ogImage }],
  },
}

export default function Page() {
  return <ServicesClient />
}
