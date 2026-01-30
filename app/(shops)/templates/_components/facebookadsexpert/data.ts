/** @format */

import { FacebookAdsData } from "./schema"

/**
 * facebookAdsData - สถาปัตยกรรมข้อมูลฉบับสมบูรณ์โดย นายเอ็มซ่ามากส์
 * -------------------------------------------------------------------------
 * จุดประสงค์: เพื่อให้หน้าเว็บดึงข้อมูลไปแสดงผลครบทุก Section (Stats, Strategy, Footer)
 * มาตรฐานความเร็ว: LCP < 0.8s | Technical SEO Ready
 */
export const facebookAdsData: FacebookAdsData = {
  // 1. [SEO] พิกัดการดึงดูด Bot และการแสดงผลบน Social Media
  seo: {
    title: "Facebook Ads Expert | จูนยอดขายโดย นายเอ็มซ่ามากส์ AEMDEVWEB",
    description:
      "หยุดงบไหลทิ้ง! เปลี่ยนหน้าเว็บเป็นเครื่องจักรผลิตยอดขายด้วยระบบ Conversion API ขั้นสูง โดยผู้เชี่ยวชาญ นายเอ็มซ่ามากส์",
    keywords: [
      "นายเอ็มซ่ามากส์",
      "Facebook Ads Specialist",
      "ยิงแอดแม่นๆ",
      "AEMDEVWEB",
      "Technical SEO Thailand",
    ],
    ogImage: "/images/templates/facebookadsexpert/og-fb-expert.webp",
  },

  // 2. [Navigation] พิกัดแถบนำทาง
  navigation: {
    logo: "AEM ADS EXPERT",
    cta: "วิเคราะห์แผนงานฟรี",
  },

  // 3. [Hero] พิกัดหยุดนิ้วลูกค้า (First Impression)
  hero: {
    badge: "High-Performance Marketing 2026",
    title: "เปลี่ยนทุกคลิกให้เป็น",
    highlight: "ผลกำไรที่วัดผลได้",
    description:
      "นายเอ็มซ่ามากส์ นำเสนอระบบหน้าเว็บยิงแอดที่จูนโครงสร้างมาเพื่อลดค่า CPC และเพิ่ม ROAS ด้วยสถาปัตยกรรม Next.js ที่เร็วที่สุดในไทย",
    cta: "จองคิวจูนพิกัดยอดขาย",
  },

  // 4. [Stats] พิกัดพิสูจน์ความน่าเชื่อถือ (Social Proof)
  stats: [
    {
      label: "Average ROAS",
      value: "8.5x",
      subValue: "สถิติเฉลี่ยจากพอร์ตลูกค้าสาย E-commerce ปี 2025",
    },
    {
      label: "Ad Spend Managed",
      value: "50M+",
      subValue: "งบประมาณที่นายเอ็มซ่ามากส์ดูแลและบริหารจัดการจริง",
    },
    {
      label: "Conversion Rate",
      value: "+120%",
      subValue: "อัตราการปิดการขายที่เพิ่มขึ้นหลังใช้ระบบ AEM Engine",
    },
  ],

  // 5. [Highlights] พิกัดขยี้จุดแข็ง (Selling Points)
  highlights: {
    items: [
      {
        icon: "Zap",
        title: "Speed Dominance",
        desc: "โหลดหน้าขายของใน 0.4-0.8 วินาที ลูกค้าไม่ทันเปลี่ยนใจ คะแนนคุณภาพโฆษณาพุ่งสูงสุด",
      },
      {
        icon: "Target",
        title: "Precision Tracking",
        desc: "วางระบบ Conversion API และ Server-Side Tracking โดยนายเอ็ม เพื่อการเก็บข้อมูลที่แม่นยำ 100%",
      },
      {
        icon: "TrendingUp",
        title: "Scale-Ready Structure",
        desc: "โครงสร้างเว็บที่ออกแบบมาเพื่อรองรับ Traffic มหาศาล ยิ่งอัดงบยิงแอด เว็บยิ่งเสถียร",
      },
    ],
  },

  // 6. [Strategy] พิกัดโปรโตคอล (Work Process)
  strategy: [
    {
      step: "01",
      title: "Auditing & Zeroing",
      desc: "นายเอ็มซ่ามากส์ตรวจสอบพิกัดงบประมาณที่รั่วไหล และจูนโครงสร้างแคมเปญใหม่จากฐานราก",
    },
    {
      step: "02",
      title: "System Deployment",
      desc: "ติดตั้งหน้า Landing Page สมรรถนะสูง พร้อมระบบ Tracking ขั้นสูงที่เป็นความลับของ AEM",
    },
    {
      step: "03",
      title: "Optimization Loop",
      desc: "วิเคราะห์ข้อมูลแบบ Real-time เพื่อปรับแต่งกลุ่มเป้าหมายและ Scaling กำไรให้ธุรกิจของคุณ",
    },
  ],

  // 7. [Footer] พิกัดปิดการขาย (Final CTA)
  footer: {
    companyName: "AEMDEVWEB | โดย นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)",
    contactLine: "@127cnthn",
    phone: "0xx-xxx-xxxx",
    copy: "© 2026 AEMDEVWEB - High Performance Ad-Systems. All Rights Reserved.",
    link: "https://line.me/ti/p/@127cnthn",
  },
}
