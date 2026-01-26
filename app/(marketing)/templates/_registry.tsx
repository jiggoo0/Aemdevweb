/** @format */

import dynamic from "next/dynamic"
import React from "react"
import { TemplateMetadata } from "@/types/template"

// นำเข้าก้อนข้อมูลจากหมวดหมู่ต่างๆ
import { hotelResortData } from "./_components/hotelresort/data"
import { cleaningProData } from "./_components/cleaningpro/data"
import { facebookAdsData } from "./_components/facebookadsexpert/data"
import { shopMasterData } from "./_components/shopmasterpro/data"
import { webRentalData } from "./_components/webrental/data"

/**
 * TemplateLoader - พิกัดการรอโหลด (Skeleton State)
 */
const TemplateLoader = () => (
  <div className="flex h-96 w-full flex-col items-center justify-center gap-6 bg-slate-50/50">
    <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-slate-200 border-t-emerald-500 shadow-lg" />
    <div className="flex flex-col items-center gap-2">
      <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
        Injected Component Structure
      </p>
      <span className="h-0.5 w-12 rounded-full bg-emerald-500/20" />
    </div>
  </div>
)

/**
 * นิยามพิกัดประเภทข้อมูลของ Registry เพื่อล้าง Warning
 * เราใช้ Record<string, unknown> แทน any เพื่อความปลอดภัยที่สูงกว่า
 */
export interface TemplateRegistryEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<{ data: any }>
  data: unknown
  metadata: TemplateMetadata
}

export const templateRegistry: Record<string, TemplateRegistryEntry> = {
  "hotel-resort": {
    component: dynamic(
      () =>
        import("./_components/hotelresort").then((m) => m.HotelResortTemplate),
      {
        loading: () => <TemplateLoader />,
        ssr: true,
      }
    ),
    data: hotelResortData,
    metadata: {
      id: "hotel-resort",
      name: "Luxury Hotel & Resort",
      category: "hotel",
      thumbnail: "/images/templates/hotelresort.webp",
      description: "ยกระดับภาพลักษณ์ธุรกิจโรงแรมด้วยความเร็วมาตรฐานสากล",
      priceValue: "35,000",
      isNew: false,
    },
  },

  "cleaning-pro": {
    component: dynamic(
      () =>
        import("./_components/cleaningpro").then((m) => m.CleaningProTemplate),
      {
        loading: () => <TemplateLoader />,
        ssr: true,
      }
    ),
    data: cleaningProData,
    metadata: {
      id: "cleaning-pro",
      name: "Cleaning Pro Specialist",
      category: "service",
      thumbnail: "/images/templates/cleaningpro.webp",
      description: "ปิดการขายบริการทำความสะอาดไวขึ้นด้วยระบบจองด่วน",
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
      {
        loading: () => <TemplateLoader />,
        ssr: true,
      }
    ),
    data: facebookAdsData,
    metadata: {
      id: "facebook-ads-expert",
      name: "Facebook Ads Landing Page",
      category: "marketing",
      thumbnail: "/images/templates/facebookadsexpert.webp",
      description: "เน้น Conversion Rate สูงสุดสำหรับเอเจนซี่โฆษณา",
      priceValue: "12,900",
      isNew: false,
    },
  },

  "shop-master-pro": {
    component: dynamic(
      () =>
        import("./_components/shopmasterpro").then((m) => m.ShopMasterTemplate),
      {
        loading: () => <TemplateLoader />,
        ssr: true,
      }
    ),
    data: shopMasterData,
    metadata: {
      id: "shop-master-pro",
      name: "Shop Master E-Commerce",
      category: "ecommerce",
      thumbnail: "/images/templates/shopmasterpro.webp",
      description: "จัดการออเดอร์และสินค้าได้รวดเร็ว รองรับมาตรฐานปี 2026",
      priceValue: "25,000",
      isNew: true,
    },
  },

  "web-rental-platform": {
    component: dynamic(
      () => import("./_components/webrental").then((m) => m.WebRentalTemplate),
      {
        loading: () => <TemplateLoader />,
        ssr: true,
      }
    ),
    data: webRentalData,
    metadata: {
      id: "web-rental-platform",
      name: "SaaS Web Rental Platform",
      category: "platform",
      thumbnail: "/images/templates/webrental.webp",
      description: "แพลตฟอร์มให้เช่าเว็บไซต์ครบวงจรสำหรับผู้เริ่มต้น",
      pricePrefix: "เริ่มต้น",
      priceValue: "590",
      isNew: true,
    },
  },
}
