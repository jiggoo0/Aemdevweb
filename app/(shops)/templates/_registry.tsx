/** @format */

import dynamic from "next/dynamic"
import React from "react"
import { TemplateMetadata } from "@/types/template"

/** [Inventory Data Assets]: รวบรวมพิกัดชุดข้อมูลเทมเพลต */
import { salePageData } from "./_components/salepage_single/data"
import { facebookAdsData } from "./_components/facebookadsexpert/data"
import { starterLandingData } from "./_components/starter_landing/data"
import { hotelResortData } from "./_components/hotelresort/data"
import { corporateLiteData } from "./_components/corporate_lite/data"
import { corporateProData } from "./_components/corporate_pro/data"
import { shopMasterData } from "./_components/shopmasterpro/data"
import { cleaningProData } from "./_components/cleaningpro/data"
import { localServiceData } from "./_components/local_service/data"
import { restaurantCafeData } from "./_components/restaurant_cafe/data"
import { eventMagicData } from "./_components/event_magic/data"
import { webRentalData } from "./_components/webrental/data"
import { personalBioData } from "./_components/personal_bio/data"
import { seoAgencyData } from "./_components/seo_agency/data"
import { maintenanceData } from "./_components/maintenance_page/data"

/** * [UX ENGINE]: ระบบโหลดระหว่างวางพิกัดหน้าเว็บ (Performance Optimized)
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
)

/**
 * [Registry Interface]: สัญญาข้อมูลทะเบียนกลาง
 */
interface RegistryEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<{ data: any }>
  data: Record<string, unknown>
  metadata: TemplateMetadata
}

/**
 * [Master Registry]: ทะเบียนรวมพิกัดระบบงานฉบับสมบูรณ์ (Professional & Sharp Edition)
 */
export const templateRegistry: Record<string, RegistryEntry> = {
  salepage_single: {
    component: dynamic(
      () => import("./_components/salepage_single").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: salePageData as Record<string, unknown>,
    metadata: {
      id: "SALE-SINGLE-01",
      slug: "salepage_single",
      name: "High-Performance Sale Page",
      category: "ReadyMade",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "เน้นการปิดการขายด้วย Interface ที่รวดเร็วและลื่นไหล ออกแบบมาเพื่อแคมเปญโฆษณาโดยเฉพาะ",
      priceValue: 1990,
      priceLabel: "1,990",
      isNew: true,
      isFeatured: true,
    },
  },
  facebookadsexpert: {
    component: dynamic(
      () => import("./_components/facebookadsexpert").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: facebookAdsData as Record<string, unknown>,
    metadata: {
      id: "FB-MKT-01",
      slug: "facebookadsexpert",
      name: "Conversion Optimized Page",
      category: "ReadyMade",
      thumbnail: "/images/templates/facebookadsexpert/facebookadsexpert.webp",
      description:
        "เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยโครงสร้างที่เน้น Conversion และเสถียรภาพสูงสุดขณะทำโฆษณา",
      priceValue: 12900,
      priceLabel: "12,900",
    },
  },
  starter_landing: {
    component: dynamic(
      () => import("./_components/starter_landing").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: starterLandingData as Record<string, unknown>,
    metadata: {
      id: "START-LND-01",
      slug: "starter_landing",
      name: "Starter Business Landing",
      category: "ReadyMade",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "หน้าแรกของธุรกิจที่คงความเรียบหรูและเปี่ยมประสิทธิภาพ ในงบประมาณที่เข้าถึงได้ง่าย",
      priceValue: 1990,
      priceLabel: "1,990",
      isNew: true,
    },
  },
  hotelresort: {
    component: dynamic(
      () => import("./_components/hotelresort").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: hotelResortData as Record<string, unknown>,
    metadata: {
      id: "HTL-PREM-01",
      slug: "hotelresort",
      name: "Premium Resort Solutions",
      category: "Business",
      thumbnail: "/images/templates/hotelresort/hotelresort.webp",
      description:
        "สะท้อนความเหนือระดับของที่พักผ่านงานดีไซน์ที่ประณีต พร้อมระบบที่กระตุ้นการจองโดยตรง",
      priceValue: 35000,
      priceLabel: "35,000",
    },
  },
  corporate_lite: {
    component: dynamic(
      () => import("./_components/corporate_lite").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: corporateLiteData as Record<string, unknown>,
    metadata: {
      id: "CORP-LITE-01",
      slug: "corporate_lite",
      name: "Business Identity Page",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "สร้างความน่าเชื่อถือให้องค์กรด้วยหน้าเว็บที่ตอบสนองฉับไวและรองรับมาตรฐาน SEO สากล",
      priceValue: 9900,
      priceLabel: "9,900",
    },
  },
  corporate_pro: {
    component: dynamic(
      () => import("./_components/corporate_pro").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: corporateProData as Record<string, unknown>,
    metadata: {
      id: "CORP-PRO-01",
      slug: "corporate_pro",
      name: "Corporate Pro Solution",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "ยกระดับภาพลักษณ์องค์กรสู่ระดับสากล ด้วยดีไซน์พรีเมียมและระบบที่รองรับข้อมูลขนาดใหญ่",
      priceValue: 45000,
      priceLabel: "45,000",
      isNew: true,
      isFeatured: true,
    },
  },
  shopmasterpro: {
    component: dynamic(
      () => import("./_components/shopmasterpro").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: shopMasterData as Record<string, unknown>,
    metadata: {
      id: "SHOP-PRO-01",
      slug: "shopmasterpro",
      name: "E-Commerce Master Pro",
      category: "Business",
      thumbnail: "/images/templates/shopmasterpro/shopmasterpro.webp",
      description:
        "ระบบร้านค้าออนไลน์ที่สมบูรณ์แบบ จัดการสต็อกง่าย มอบประสบการณ์ช้อปปิ้งที่ไร้รอยต่อ",
      priceValue: 25000,
      priceLabel: "25,000",
      isFeatured: true,
    },
  },
  cleaningpro: {
    component: dynamic(
      () => import("./_components/cleaningpro").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: cleaningProData as Record<string, unknown>,
    metadata: {
      id: "CLN-PRO-01",
      slug: "cleaningpro",
      name: "Professional Service Platform",
      category: "Business",
      thumbnail: "/images/templates/cleaningpro/cleaningpro.webp",
      description:
        "แพลตฟอร์มสำหรับธุรกิจบริการที่เน้นความแม่นยำและการจัดการตารางเวลาที่มีประสิทธิภาพ",
      priceValue: 15000,
      priceLabel: "15,000",
    },
  },
  local_service: {
    component: dynamic(
      () => import("./_components/local_service").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: localServiceData as Record<string, unknown>,
    metadata: {
      id: "LOCAL-SRV-01",
      slug: "local_service",
      name: "Local Business Hub",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "เพิ่มโอกาสให้ธุรกิจท้องถิ่นเข้าถึงลูกค้าได้มากขึ้น ด้วยระบบที่เน้นการติดต่อสื่อสารที่รวดเร็ว",
      priceValue: 8900,
      priceLabel: "8,900",
    },
  },
  restaurant_cafe: {
    component: dynamic(
      () => import("./_components/restaurant_cafe").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: restaurantCafeData as Record<string, unknown>,
    metadata: {
      id: "REST-CAFE-01",
      slug: "restaurant_cafe",
      name: "Culinary & Cafe Showcase",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "นำเสนอประสบการณ์ด้านอาหารผ่าน Interface ที่สวยงาม พร้อมระบบระบุพิกัดที่แม่นยำ",
      priceValue: 15900,
      priceLabel: "15,900",
    },
  },
  event_magic: {
    component: dynamic(
      () => import("./_components/event_magic").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: eventMagicData as Record<string, unknown>,
    metadata: {
      id: "EVT-MAG-01",
      slug: "event_magic",
      name: "Event & Wedding Portfolio",
      category: "Business",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "บันทึกความทรงจำและรายละเอียดงานสำคัญผ่านหน้าเว็บที่ออกแบบมาอย่างประณีตและทันสมัย",
      priceValue: 12000,
      priceLabel: "12,000",
    },
  },
  webrental: {
    component: dynamic(
      () => import("./_components/webrental").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: webRentalData as Record<string, unknown>,
    metadata: {
      id: "WEB-RENT-01",
      slug: "webrental",
      name: "Web Rental for Business",
      category: "Digital",
      thumbnail: "/images/templates/webrental/webrental.webp",
      description:
        "ทางเลือกใหม่ของธุรกิจเริ่มต้น บริหารงบประมาณได้คล่องตัวด้วยระบบเช่ารายเดือนคุณภาพสูง",
      priceValue: 1990,
      priceLabel: "1,990",
      isNew: true,
      isFeatured: true,
    },
  },
  personal_bio: {
    component: dynamic(
      () => import("./_components/personal_bio").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: personalBioData as Record<string, unknown>,
    metadata: {
      id: "BIO-PREM-01",
      slug: "personal_bio",
      name: "Digital Profile Master",
      category: "Digital",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "รวมทุกช่องทางติดต่อและประวัติส่วนตัวไว้ในลิงก์เดียว ด้วยโครงสร้างที่เรียบหรูและตอบสนองฉับไว",
      priceValue: 1990,
      priceLabel: "1,990",
    },
  },
  seo_agency: {
    component: dynamic(
      () => import("./_components/seo_agency").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: seoAgencyData as Record<string, unknown>,
    metadata: {
      id: "SEO-AG-01",
      slug: "seo_agency",
      name: "SEO Agency Professional",
      category: "Digital",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "เน้นการแสดงผลลัพธ์เชิงสถิติที่ชัดเจน สื่อถึงความเชี่ยวชาญในการทำอันดับและวิเคราะห์ข้อมูล",
      priceValue: 19900,
      priceLabel: "19,900",
      isNew: true,
    },
  },
  maintenance_page: {
    component: dynamic(
      () => import("./_components/maintenance_page").then((m) => m.default),
      { loading: () => <StructureLoader /> }
    ),
    data: maintenanceData as Record<string, unknown>,
    metadata: {
      id: "MAINT-PAGE-01",
      slug: "maintenance_page",
      name: "System Maintenance Page",
      category: "Digital",
      thumbnail: "/images/templates/project-01.webp",
      description:
        "แจ้งสถานะการปรับปรุงระบบอย่างเป็นมืออาชีพ เพื่อการกลับมาทำงานที่เต็มประสิทธิภาพกว่าเดิม",
      priceValue: 990,
      priceLabel: "990",
    },
  },
}