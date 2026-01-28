/** @format */

import dynamic from "next/dynamic"
import React from "react"
import { TemplateMetadata } from "@/types/template"

/** * [Template Data Assets]: รวบรวมชุดข้อมูลพื้นฐานของทุกระบบงาน */
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

const StructureLoader = () => (
  <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-6 bg-white/50 text-center backdrop-blur-xl">
    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-500/10" />
      <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-slate-100 border-t-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
    </div>
    <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
      กำลังวางพิกัดความแรงหน้าเว็บ...
    </p>
  </div>
)

/**
 * [Master Registry]: ทะเบียนรวมพิกัดเทมเพลตฉบับสมบูรณ์
 * [FIX]: ปรับประเภทข้อมูลเป็น { data: any } เพื่อล้างพิกัด Error TS2345
 * ช่วยให้ทะเบียนรองรับโครงสร้างข้อมูลที่หลากหลายของแต่ละแผนงานได้กริบที่สุด
 */
export const templateRegistry: Record<
  string,
  {
    component: React.ComponentType<{ data: any }>
    data: any
    metadata: TemplateMetadata
  }
> = {
  salepage_single: {
    component: dynamic(() => import("./_components/salepage_single").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: salePageData,
    metadata: {
      id: "SLP-001",
      slug: "salepage_single",
      name: "เซลเพจหน้าเดียวตัวแรง",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "เน้นปิดการขายพิกัดหน้าเดียว โหลดไวและกริบที่สุด",
      isNew: true,
    },
  },
  facebookadsexpert: {
    component: dynamic(() => import("./_components/facebookadsexpert").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: facebookAdsData,
    metadata: {
      id: "MKT-001",
      slug: "facebookadsexpert",
      name: "ระบบเว็บพิกัดยิงแอดตรง",
      category: "business",
      thumbnail: "/images/templates/facebookadsexpert.webp",
      description: "วางโครงสร้างระบบงานเพื่อรองรับลูกค้าจากการยิงแอด",
    },
  },
  starter_landing: {
    component: dynamic(() => import("./_components/starter_landing").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: starterLandingData,
    metadata: {
      id: "STT-001",
      slug: "starter_landing",
      name: "ระบบพิกัดเริ่มต้นธุรกิจใหม่",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "พิกัดพื้นฐานครบถ้วน เนี้ยบมาตรฐาน Specialist",
    },
  },
  hotelresort: {
    component: dynamic(() => import("./_components/hotelresort").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: hotelResortData,
    metadata: {
      id: "HTL-001",
      slug: "hotelresort",
      name: "ระบบจองห้องพักพิกัดหรู",
      category: "business",
      thumbnail: "/images/templates/hotelresort.webp",
      description: "วางระบบจองพิกัดง่ายตามมาตรฐานงานระดับสูง",
    },
  },
  corporate_lite: {
    component: dynamic(() => import("./_components/corporate_lite").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: corporateLiteData,
    metadata: {
      id: "COR-001",
      slug: "corporate_lite",
      name: "ระบบพิกัดธุรกิจรุ่นประหยัด",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "เน้นความน่าเชื่อถือในพิกัดราคาที่คุ้มค่าที่สุด",
    },
  },
  corporate_pro: {
    component: dynamic(() => import("./_components/corporate_pro").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: corporateProData,
    metadata: {
      id: "COR-002",
      slug: "corporate_pro",
      name: "ระบบข้อมูลธุรกิจพิกัดใหญ่",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "จัดเต็มพิกัดข้อมูลระบบงาน รองรับข้อมูลจำนวนมาก",
      isNew: true,
    },
  },
  shopmasterpro: {
    component: dynamic(() => import("./_components/shopmasterpro").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: shopMasterData,
    metadata: {
      id: "ECM-001",
      slug: "shopmasterpro",
      name: "ระบบร้านค้าพิกัดออนไลน์โปร",
      category: "business",
      thumbnail: "/images/templates/shopmasterpro.webp",
      description: "ระบบร้านค้าพิกัดสมบูรณ์ วางพิกัดปิดการขายได้รวดเร็ว",
    },
  },
  cleaningpro: {
    component: dynamic(() => import("./_components/cleaningpro").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: cleaningProData,
    metadata: {
      id: "CLN-001",
      slug: "cleaningpro",
      name: "ระบบงานบริการพิกัดสะอาด",
      category: "business",
      thumbnail: "/images/templates/cleaningpro.webp",
      description: "รวมพิกัดบริการที่ลูกค้าหาเจอและทักได้ไวที่สุด",
    },
  },
  local_service: {
    component: dynamic(() => import("./_components/local_service").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: localServiceData,
    metadata: {
      id: "LCL-001",
      slug: "local_service",
      name: "ระบบพิกัดธุรกิจท้องถิ่น",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "เน้นการเข้าถึงกลุ่มลูกค้าพิกัดพื้นที่ด้วยข้อมูลที่ชัดเจน",
    },
  },
  restaurant_cafe: {
    component: dynamic(() => import("./_components/restaurant_cafe").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: restaurantCafeData,
    metadata: {
      id: "RST-001",
      slug: "restaurant_cafe",
      name: "ระบบโชว์เมนูพิกัดร้านอาหาร",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "โชว์พิกัดเมนูและบรรยากาศร้านพิกัดเนี้ยบ",
    },
  },
  event_magic: {
    component: dynamic(() => import("./_components/event_magic").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: eventMagicData,
    metadata: {
      id: "EVN-001",
      slug: "event_magic",
      name: "ระบบจองคิวพิกัดงานอีเวนต์",
      category: "business",
      thumbnail: "/images/templates/project-01.webp",
      description: "รวบรวมพิกัดความประทับใจไว้อย่างกริบ",
    },
  },
  webrental: {
    component: dynamic(() => import("./_components/webrental").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: webRentalData,
    metadata: {
      id: "PLT-001",
      slug: "webrental",
      name: "ระบบเช่าพิกัดรายเดือนแรง",
      category: "digital",
      thumbnail: "/images/templates/webrental.webp",
      description: "ระบบเช่าพิกัดง่ายที่จัดการได้เองและโหลดไวระดับปีศาจ",
      isNew: true,
    },
  },
  personal_bio: {
    component: dynamic(() => import("./_components/personal_bio").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: personalBioData,
    metadata: {
      id: "BIO-001",
      slug: "personal_bio",
      name: "ระบบพิกัดแนะนำตัวเนี้ยบ",
      category: "digital",
      thumbnail: "/images/templates/project-01.webp",
      description: "หน้าพิกัดรวมลิงก์ส่วนบุคคลที่ดูมาตรฐานสูง",
    },
  },
  seo_agency: {
    component: dynamic(() => import("./_components/seo_agency").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: seoAgencyData,
    metadata: {
      id: "SEO-001",
      slug: "seo_agency",
      name: "ระบบงานพิกัดอันดับ Google",
      category: "digital",
      thumbnail: "/images/templates/project-01.webp",
      description: "วางโครงสร้างระบบงานมาเพื่อให้ Google รักตั้งแต่บรรทัดแรก",
    },
  },
  maintenance_page: {
    component: dynamic(() => import("./_components/maintenance_page").then((m) => m.default), { loading: () => <StructureLoader /> }),
    data: maintenanceData,
    metadata: {
      id: "SYS-001",
      slug: "maintenance_page",
      name: "หน้าพักพิกัดระบบงาน",
      category: "digital",
      thumbnail: "/images/templates/project-01.webp",
      description: "หน้าพักพิกัดระหว่างทำการปรับจูนความแรงระบบ",
    },
  },
}
