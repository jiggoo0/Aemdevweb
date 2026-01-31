/** @format */

import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import PrivacyClient from "./PrivacyClient";

/**
 * [STRATEGIC METADATA]: การประกาศมาตรฐานการคุ้มครองข้อมูลส่วนบุคคล
 * มาตรฐาน: Ultra-Deep Level 7 | SEO Optimized
 */
export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.project.name}`,
  description:
    "นโยบายความเป็นส่วนตัวและมาตรฐานการรักษาความปลอดภัยข้อมูลของ AEMDEVWEB",
  alternates: { canonical: `${siteConfig.project.url}/privacy` },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.project.name}`,
    description:
      "มาตรฐานการคุ้มครองข้อมูลส่วนบุคคลสำหรับโครงการธุรกิจยุทธศาสตร์",
    url: `${siteConfig.project.url}/privacy`,
    images: [{ url: siteConfig.project.ogImage }],
  },
};

export default function Page() {
  return <PrivacyClient />;
}
