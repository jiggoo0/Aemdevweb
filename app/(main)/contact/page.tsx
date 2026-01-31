/** @format */

import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import ContactClient from "./ContactClient";

/**
 * [STRATEGIC METADATA]: การจัดการโครงสร้างข้อมูลเพื่อชิงพิกัด Search Results
 * มาตรฐาน: Ultra-Deep Level 7 | SEO Optimized
 */
export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.project.name}`,
  description:
    "ติดต่อเราเพื่อรับคำปรึกษาด้านการพัฒนาเว็บไซต์และกลยุทธ์ SEO ระดับสูง พร้อมวางแผนระบบงานดิจิทัล",
  alternates: { canonical: `${siteConfig.project.url}/contact` },
  openGraph: {
    title: `Contact Us | ${siteConfig.project.name}`,
    description: "ปรึกษาแผนงานระบบและกลยุทธ์ SEO กับผู้เชี่ยวชาญโดยตรง",
    url: `${siteConfig.project.url}/contact`,
    images: [{ url: siteConfig.project.ogImage }],
  },
};

export default function Page() {
  return <ContactClient />;
}
