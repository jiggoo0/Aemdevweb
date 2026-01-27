/** @format */

import dynamic from "next/dynamic"
import React from "react"
import { TemplateMetadata } from "@/types/template"

// พิกัดข้อมูลเบื้องต้น (Data Assets)
import { hotelResortData } from "./_components/hotelresort/data"
import { cleaningProData } from "./_components/cleaningpro/data"
import { facebookAdsData } from "./_components/facebookadsexpert/data"
import { shopMasterData } from "./_components/shopmasterpro/data"
import { webRentalData } from "./_components/webrental/data"

/**
 * TemplateLoader: แสดงผลระหว่างที่ระบบกำลังโหลดโครงสร้างหน้าจอ
 */
const TemplateLoader = () => (
  <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-6 bg-slate-50/30 backdrop-blur-sm">
    <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-slate-100 border-t-emerald-500 shadow-inner" />
    <div className="flex flex-col items-center gap-3">
      <p className="font-prompt text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
        Building Structure...
      </p>
      <span className="h-[1px] w-8 rounded-full bg-emerald-500/30" />
    </div>
  </div>
)

/**
 * โครงสร้างข้อมูลสำหรับ Registry ของแต่ละเทมเพลต
 */
export interface TemplateRegistryEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<{ data: any }>
  data: unknown
  metadata: TemplateMetadata
}

/**
 * [STRATEGY] Template Registry System:
 * รวมพิกัดหน้าเทมเพลตทั้งหมดไว้ที่นี่ที่เดียว ง่ายต่อการจัดการและขยายผล
 */
export const templateRegistry: Record<string, TemplateRegistryEntry> = {
  "hotel-resort": {
    component: dynamic(
      () =>
        import("./_components/hotelresort").then((m) => m.HotelResortTemplate),
      { loading: () => <TemplateLoader />, ssr: true }
    ),
    data: hotelResortData,
    metadata: {
      id: "hotel-resort-001",
      slug: "hotel-resort",
      name: "Luxury Hotel & Resort",
      category: "hotel",
      thumbnail: "/images/templates/hotelresort.webp",
      description:
        "ยกระดับภาพลักษณ์ที่พักให้ดูแพงและน่าเชื่อถือ จัดเรียงข้อมูลมาเพื่อปิดการขายโดยเฉพาะ",
      priceValue: "35,000",
      isNew: false,
    },
  },

  "cleaning-pro": {
    component: dynamic(
      () =>
        import("./_components/cleaningpro").then((m) => m.CleaningProTemplate),
      { loading: () => <TemplateLoader />, ssr: true }
    ),
    data: cleaningProData,
    metadata: {
      id: "cleaning-pro-001",
      slug: "cleaning-pro",
      name: "Cleaning Pro Specialist",
      category: "service",
      thumbnail: "/images/templates/cleaningpro.webp",
      description:
        "เปลี่ยนงานบริการให้เป็นระบบด้วยหน้าเว็บไซต์ที่ดูสะอาดตาและใช้งานง่าย",
      priceValue: "15,000",
      isNew: false,
    },
  },

  "facebook-ads-expert": {
    component: dynamic(
      () =>
        import("./_components/facebookadsexpert").then(
          (m) => m.FacebookAdsTemplate
        ),
      { loading: () => <TemplateLoader />, ssr: true }
    ),
    data: facebookAdsData,
    metadata: {
      id: "fb-ads-001",
      slug: "facebook-ads-expert",
      name: "Conversion Landing Page",
      category: "marketing",
      thumbnail: "/images/templates/facebookadsexpert.webp",
      description:
        "เน้นเปลี่ยนคนดูให้กลายเป็นลูกค้า ด้วยโครงสร้างหน้าเว็บที่รับแรงกระแทกจากโฆษณาได้ดีเยี่ยม",
      priceValue: "12,900",
      isNew: false,
    },
  },

  "shop-master-pro": {
    component: dynamic(
      () =>
        import("./_components/shopmasterpro").then((m) => m.ShopMasterTemplate),
      { loading: () => <TemplateLoader />, ssr: true }
    ),
    data: shopMasterData,
    metadata: {
      id: "shop-master-001",
      slug: "shop-master-pro",
      name: "Shop Master E-Commerce",
      category: "ecommerce",
      thumbnail: "/images/templates/shopmasterpro.webp",
      description:
        "ร้านค้าออนไลน์ที่เน้นประสบการณ์การซื้อที่ลื่นไหล พร้อมระบบจัดการสินค้าที่เป็นระเบียบ",
      priceValue: "25,000",
      isNew: true,
    },
  },

  webrental: {
    component: dynamic(
      () => import("./_components/webrental").then((m) => m.WebRentalTemplate),
      { loading: () => <TemplateLoader />, ssr: true }
    ),
    data: webRentalData,
    metadata: {
      id: "web-rental-001",
      slug: "webrental",
      name: "Business Web Rental",
      category: "platform",
      thumbnail: "/images/templates/webrental.webp",
      description:
        "เว็บไซต์ธุรกิจแบบรายเดือน ทางเลือกที่ช่วยให้ธุรกิจเริ่มต้นได้ไวโดยไม่ต้องลงทุนก้อนใหญ่",
      pricePrefix: "เริ่มต้น",
      priceValue: "590",
      isNew: true,
    },
  },
}
