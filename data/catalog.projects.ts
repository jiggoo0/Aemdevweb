/** @format */
import { Project } from "./types"

// 🛡️ ระบบ Single Source of Truth: ดึงข้อมูลแบรนด์และคำเปรยจากต้นฉบับ
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"
import { starterConfig as woodBusinessConfig } from "@/app/(marketing)/[template_id]/_templates/WoodBusiness/config"

/**
 * 🏛️ CATALOG REGISTRY
 * การรวบรวม "สถาปัตยกรรมดิจิทัล" ที่ใช้งานจริง
 * เป้าหมาย: แสดงให้เห็นว่าแต่ละโครงสร้างช่วยธุรกิจในแต่ละกลุ่มอุตสาหกรรมอย่างไร
 */
export const catalogProjects: Project[] = [
  // ─── 01. CAFE & ROASTERY ───
  {
    id: "project-cafe-01",
    title: cafeConfig?.name || "The Caffeine Hub",
    category: "cafe",
    serviceSlug: "cafe",
    templateId: "cafe",
    description:
      "เปลี่ยนเมนูกระดาษสู่ Digital Menu ประสบการณ์ใหม่ที่ช่วยเพิ่มยอดขายต่อบิล (AOV) พร้อมงานดีไซน์ Industrial ที่สะท้อนตัวตนโรงคั่วกาแฟ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/smj-cafe.jpg",
    tags: ["Digital Menu", "Brand Identity", "F&B Architecture"],
    stats: { label: "UX Excellence", value: "100/100" },
  },

  // ─── 02. INDUSTRIAL CONSTRUCTION ───
  {
    id: "project-construction-01",
    title: constructionConfig?.name || "Master Craft Construction",
    category: "construction",
    serviceSlug: "construction",
    templateId: "construction",
    description:
      "โครงสร้างเว็บที่เน้นความน่าเชื่อถือ (Trust Builder) สำหรับบริษัทรับเหมา ด้วยระบบแสดงผลพอร์ตโฟลิโอโครงการที่ดูทรงพลังและเป็นมืออาชีพ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/construction.jpg",
    tags: ["Engineering Look", "Portfolio System", "B2B Trust"],
    stats: { label: "System Latency", value: "0.45s" },
  },

  // ─── 03. LOCAL BUSINESS TRANSFORMATION (Wood) ───
  {
    id: "project-wood-01",
    title: woodBusinessConfig?.name || "สุโขทัยค้าไม้",
    category: "construction",
    serviceSlug: "wood-business",
    templateId: "wood-business",
    description:
      "กรณีศึกษาการย้าย 'หน้าร้านออฟไลน์' สู่ระบบออนไลน์เต็มรูปแบบ ด้วย Digital Catalog ที่เข้าถึงกลุ่มช่างและผู้รับเหมาผ่าน LINE OA ได้ทันที",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/WoodBusiness/wood-1.jpg",
    tags: ["Legacy to Digital", "Lead Generation", "Inventory Display"],
    stats: { label: "Lead Response", value: "< 15 Min" },
  },

  // ─── 04. MEDICAL & WELLNESS ───
  {
    id: "project-clinic-01",
    title: clinicConfig?.name || "Aura Clinic",
    category: "clinic",
    serviceSlug: "clinic",
    templateId: "clinic",
    description:
      "สถาปัตยกรรมเว็บที่เน้น Conversion ผลลัพธ์ Before/After ที่ชัดเจน และระบบ Lead Gen ที่เปลี่ยนผู้เข้าชมเป็น 'เคสจริง' ได้อย่างแม่นยำ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/clinic.jpg",
    tags: ["Conversion Engine", "Medical Grade UI", "Patient Acquisition"],
    stats: { label: "Conversion Lift", value: "+45%" },
  },

  // ─── 05. PREMIUM REAL ESTATE ───
  {
    id: "project-real-estate-01",
    title: realEstateConfig?.name || "Modern Living",
    category: "real-estate",
    serviceSlug: "realestate",
    templateId: "realestate",
    description:
      "High-End Interface สำหรับโครงการอสังหาฯ ที่ต้องการสื่อสารความหรูหรา พร้อมระบบ Location Insight ที่ช่วยให้ลูกค้าเห็นศักยภาพทำเลได้ทันที",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/real-estate.jpg",
    tags: ["Luxury UI", "Map Intelligence", "Investment Focus"],
    stats: { label: "Qualified Leads", value: "+30%" },
  },

  // ─── 06. SINGLE PRODUCT STARTER ───
  {
    id: "project-starter-01",
    title: starterConfig?.name || "Minimalist Store",
    category: "starter",
    serviceSlug: "starter",
    templateId: "starter",
    description:
      "โครงสร้างเว็บแบบ Product-First สำหรับแบรนด์เริ่มต้น เน้นความเร็วในการโหลดสูงสุดและกระบวนการสั่งซื้อที่สั้นที่สุดเพื่อปิดการขายหน้าเดียว",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/gadget-store.jpg",
    tags: ["Direct Sales", "Performance optimized", "One-Page Logic"],
    stats: { label: "Core Web Vitals", value: "98/100" },
  },
]

/**
 * 🛠️ DATA RETRIEVAL HELPERS
 * ฟังก์ชันช่วยเรียกใช้ข้อมูลแบบแบ่งกลุ่ม (Filters)
 */
export const helpers = {
  // ดึงตาม Template ID (เช่น แสดงในหน้าพรีวิวเฉพาะตัว)
  getByTemplate: (id: string): Project[] =>
    catalogProjects.filter((p) => p.templateId === id),

  // ดึงตามหมวดหมู่ (เช่น แสดงในหน้า Catalog หลัก)
  getByCategory: (cat: Project["category"]): Project[] =>
    catalogProjects.filter((p) => p.category === cat),

  // ดึงโปรเจกต์เด่น (สำหรับหน้า Home)
  getFeatured: (limit = 3): Project[] => catalogProjects.slice(0, limit),
}
