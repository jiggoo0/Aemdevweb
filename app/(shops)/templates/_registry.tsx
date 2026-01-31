/** @format */

import React from "react";
import dynamic from "next/dynamic";

/** [TYPES]: นำเข้าพิกัดสัญญาข้อมูลพื้นฐาน */
import { TemplateMetadata } from "@/types";

/** [SCHEMAS]: นำเข้าพิกัดรูปทรงข้อมูลเฉพาะทาง (Strategic Union Nodes) */
import { SalePageData } from "./_components/salepage_single/schema";
import { FacebookAdsData } from "./_components/facebookadsexpert/schema";
import { StarterLandingData } from "./_components/starter_landing/schema";
import { HotelData } from "./_components/hotelresort/schema";
import { CorporateLiteData } from "./_components/corporate_lite/schema";
import { CorporateProData } from "./_components/corporate_pro/schema";
import { ShopMasterData } from "./_components/shopmasterpro/schema";
import { CleaningServiceData } from "./_components/cleaningpro/schema";
import { LocalServiceData } from "./_components/local_service/schema";
import { RestaurantCafeData } from "./_components/restaurant_cafe/schema";
import { WebRentalData } from "./_components/webrental/schema";
import { PersonalBioData } from "./_components/personal_bio/schema";
import { MaintenanceData } from "./_components/maintenance_page/schema";
// [CLEANUP]: ปิดพิกัดที่ยังไม่ได้เปิดใช้งานเพื่อเคลียร์ Warning
// import { EventMagicData } from "./_components/event_magic/schema";
// import { SeoAgencyData } from "./_components/seo_agency/schema";

/** [INVENTORY ASSETS]: นำเข้าพิกัดชุดข้อมูลตัวอย่าง */
import { salePageData } from "./_components/salepage_single/data";
import { facebookAdsData } from "./_components/facebookadsexpert/data";
import { starterLandingData } from "./_components/starter_landing/data";
import { hotelResortData } from "./_components/hotelresort/data";
import { corporateLiteData } from "./_components/corporate_lite/data";
import { corporateProData } from "./_components/corporate_pro/data";
import { shopMasterData } from "./_components/shopmasterpro/data";
import { cleaningProData } from "./_components/cleaningpro/data";
import { localServiceData } from "./_components/local_service/data";
import { restaurantCafeData } from "./_components/restaurant_cafe/data";
import { webRentalData } from "./_components/webrental/data";
import { personalBioData } from "./_components/personal_bio/data";
import { maintenanceData } from "./_components/maintenance_page/data";
// [CLEANUP]: ปิดพิกัดที่ยังไม่ได้เปิดใช้งานเพื่อเคลียร์ Warning
// import { eventMagicData } from "./_components/event_magic/data";
// import { seoAgencyData } from "./_components/seo_agency/data";

/**
 * [STRATEGIC FIX]: Union Type สำหรับข้อมูลเทมเพลตทั้งหมด
 */
export type AllTemplateData =
  | SalePageData
  | FacebookAdsData
  | StarterLandingData
  | HotelData
  | CorporateLiteData
  | CorporateProData
  | ShopMasterData
  | CleaningServiceData
  | LocalServiceData
  | RestaurantCafeData
  | WebRentalData
  | PersonalBioData
  | MaintenanceData
  // | EventMagicData
  // | SeoAgencyData
  | Record<string, unknown>;

/**
 * [UX ENGINE]: ระบบโหลดระหว่างวางพิกัดหน้าเว็บ
 */
const StructureLoader = () => (
  <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-6 bg-white/50 text-center backdrop-blur-xl">
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-500/10" />
      <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-slate-100 border-t-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
    </div>
    <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
      กำลังวางพิกัดระบบงาน...
    </p>
  </div>
);

export interface RegistryEntry {
  component: React.ComponentType<{ data: any }>; // eslint-disable-line @typescript-eslint/no-explicit-any
  data: AllTemplateData;
  metadata: TemplateMetadata;
}

/**
 * [Master Registry]: ทะเบียนรวมพิกัดระบบงาน (Updated Prices & Descriptions 2026)
 */
export const templateRegistry: Record<string, RegistryEntry> = {
  salepage_single: {
    component: dynamic(
      () => import("./_components/salepage_single").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: salePageData as SalePageData,
    metadata: {
      id: "SALE-SINGLE-01",
      slug: "salepage_single",
      name: "Conversion Sales Engine",
      category: "ReadyMade",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "หน้าขายของปิดการขาย โหลดไว 0.4 วินาที จูนสปีดมาเพื่อหยุดนิ้วสไลด์และเพิ่ม ROI สูงสุดโดย นายเอ็มซ่ามากส์",
      priceValue: 2500,
      priceLabel: "2,500",
      isNew: true,
      isFeatured: true,
    },
  },
  webrental: {
    component: dynamic(
      () => import("./_components/webrental").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: webRentalData as WebRentalData,
    metadata: {
      id: "WEB-RENT-01",
      slug: "webrental",
      name: "Managed Business Infrastructure",
      category: "Digital",
      thumbnail: "/images/templates/webrental/webrental.webp",
      description:
        "เช่าเว็บไซต์พรีเมียมพร้อมคนดูแล ไม่ต้องลงทุนก้อนใหญ่ ฟรีโฮสติ้งและ Support ตลอด 24 ชม. สไตล์ นายเอ็มซ่ามากส์",
      pricePrefix: "เริ่มต้นรายเดือน",
      priceValue: 1990,
      priceLabel: "1,990",
      isNew: true,
      isFeatured: true,
    },
  },
  corporate_pro: {
    component: dynamic(
      () => import("./_components/corporate_pro").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: corporateProData as CorporateProData,
    metadata: {
      id: "CORP-PRO-01",
      slug: "corporate_pro",
      name: "Enterprise Digital Architecture",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "สถาปัตยกรรมเว็บไซต์องค์กรขนาดใหญ่ เน้นความปลอดภัยสูง รองรับระบบ Database และหลายภาษาโดย นายเอ็มซ่ามากส์",
      priceValue: 59000,
      priceLabel: "59,000",
      isNew: true,
      isFeatured: true,
    },
  },
  shopmasterpro: {
    component: dynamic(
      () => import("./_components/shopmasterpro").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: shopMasterData as ShopMasterData,
    metadata: {
      id: "SHOP-PRO-01",
      slug: "shopmasterpro",
      name: "E-Commerce Logistics Hub",
      category: "Business",
      thumbnail: "/images/templates/shopmasterpro/shopmasterpro.webp",
      description:
        "ระบบร้านค้าออนไลน์เต็มรูปแบบ จัดการสต็อกและพิกัดการขายได้ไร้รอยต่อ จูนระบบโดย นายเอ็มซ่ามากส์",
      priceValue: 29000,
      priceLabel: "29,000",
      isFeatured: true,
    },
  },
  hotelresort: {
    component: dynamic(
      () => import("./_components/hotelresort").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: hotelResortData as HotelData,
    metadata: {
      id: "HTL-PREM-01",
      slug: "hotelresort",
      name: "Elite Hospitality Solution",
      category: "Business",
      thumbnail: "/images/templates/hotelresort/hotelresort.webp",
      description:
        "ระบบจองที่พักตรง ลดค่า GP OTA (อโกด้า) รับเงินเต็มๆ พร้อมระบบตัดบัตรเครดิตที่เนี้ยบที่สุด",
      priceValue: 35000,
      priceLabel: "35,000",
    },
  },
  facebookadsexpert: {
    component: dynamic(
      () => import("./_components/facebookadsexpert").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: facebookAdsData as FacebookAdsData,
    metadata: {
      id: "FB-MKT-01",
      slug: "facebookadsexpert",
      name: "Ad-Targeting Optimized Node",
      category: "ReadyMade",
      thumbnail: "/images/templates/facebookadsexpert/facebookadsexpert.webp",
      description:
        "Landing Page ขั้นเทพ ออกแบบโครงสร้างตามจิตวิทยาการขาย (Custom UI) เพื่อลดค่าแอดโดย นายเอ็มซ่ามากส์",
      priceValue: 12900,
      priceLabel: "12,900",
    },
  },
  cleaningpro: {
    component: dynamic(
      () => import("./_components/cleaningpro").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: cleaningProData as CleaningServiceData,
    metadata: {
      id: "CLN-PRO-01",
      slug: "cleaningpro",
      name: "Operational Service Platform",
      category: "Business",
      thumbnail: "/images/templates/cleaningpro/cleaningpro.webp",
      description:
        "ระบบงานบริการ นัดหมาย และจัดการตารางเวลาที่แม่นยำ เหมาะสำหรับคลินิก สปา และงานบริการทุกรูปแบบ",
      priceValue: 15000,
      priceLabel: "15,000",
    },
  },
  corporate_lite: {
    component: dynamic(
      () => import("./_components/corporate_lite").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: corporateLiteData as CorporateLiteData,
    metadata: {
      id: "CORP-LITE-01",
      slug: "corporate_lite",
      name: "Strategic Business Identity",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "สร้างความเชื่อมั่นให้บริษัทด้วยหน้าเว็บมาตรฐานสากล จูนความเร็วและรองรับ SEO โดย นายเอ็มซ่ามากส์",
      priceValue: 9900,
      priceLabel: "9,900",
    },
  },
  starter_landing: {
    component: dynamic(
      () => import("./_components/starter_landing").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: starterLandingData as StarterLandingData,
    metadata: {
      id: "START-LND-01",
      slug: "starter_landing",
      name: "Starter Business Sales Protocol",
      category: "ReadyMade",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "มินิเว็บไซต์หน้าเดียวสำหรับเริ่มต้นธุรกิจ รวบรวมข้อมูลครบจบในที่เดียวในงบประมาณที่คุ้มค่าที่สุด",
      priceValue: 1990,
      priceLabel: "1,990",
      isNew: true,
    },
  },
  restaurant_cafe: {
    component: dynamic(
      () => import("./_components/restaurant_cafe").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: restaurantCafeData as RestaurantCafeData,
    metadata: {
      id: "REST-CAFE-01",
      slug: "restaurant_cafe",
      name: "Culinary Narrative Showcase",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "นำเสนอเมนูและบรรยากาศร้านอาหารผ่านภาพลักษณ์ Visual-First เพื่อกระตุ้นความต้องการลูกค้า",
      priceValue: 15900,
      priceLabel: "15,900",
    },
  },
  personal_bio: {
    component: dynamic(
      () => import("./_components/personal_bio").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: personalBioData as PersonalBioData,
    metadata: {
      id: "BIO-PREM-01",
      slug: "personal_bio",
      name: "Premium Profile Engine",
      category: "Digital",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "นามบัตรดิจิทัลพรีเมียม รวมทุกโซเชียลไว้ในลิงก์เดียว โหลดไว 0.4s ยกระดับ Personal Brand ของคุณ",
      priceValue: 1290,
      priceLabel: "1,290",
    },
  },
  local_service: {
    component: dynamic(
      () => import("./_components/local_service").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: localServiceData as LocalServiceData,
    metadata: {
      id: "LOCAL-SRV-01",
      slug: "local_service",
      name: "Local Specialist Hub",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "เพิ่มโอกาสให้ธุรกิจท้องถิ่นด้วยระบบ Local SEO ปักหมุดแม่นยำ ให้คนในพื้นที่ค้นหาเจอเป็นเจ้าแรก",
      priceValue: 8900,
      priceLabel: "8,900",
    },
  },
  maintenance_page: {
    component: dynamic(
      () => import("./_components/maintenance_page").then((m) => m.default),
      { loading: () => <StructureLoader /> },
    ),
    data: maintenanceData as MaintenanceData,
    metadata: {
      id: "MAINT-PAGE-01",
      slug: "maintenance_page",
      name: "Optimization Status Node",
      category: "Digital",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "หน้าปิดปรับปรุงระบบที่ยังเก็บ Lead ลูกค้าได้ ดีไซน์สวยโปรไฟล์เนี้ยบมาตรฐาน นายเอ็มซ่ามากส์",
      priceValue: 990,
      priceLabel: "990",
    },
  },
};
