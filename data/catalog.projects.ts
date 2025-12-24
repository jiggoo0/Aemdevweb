/** @format */
import { Project } from "./types"

// 🛡️ นำเข้า Config เพื่อใช้เป็น Single Source of Truth
import { clinicConfig } from "@/app/(marketing)/[template_id]/_templates/clinic/config"
import { cafeConfig } from "@/app/(marketing)/[template_id]/_templates/cafe/config"
import { realEstateConfig } from "@/app/(marketing)/[template_id]/_templates/realestate/config"
import { constructionConfig } from "@/app/(marketing)/[template_id]/_templates/construction/config"
import { starterConfig } from "@/app/(marketing)/[template_id]/_templates/starter/config"

/**
 * Catalog of real projects
 * ข้อมูลจะถูก Sync โดยตรงจากไฟล์ Config ของแต่ละเทมเพลต
 */
export const catalogProjects: Project[] = [
  {
    id: "project-cafe-01",
    title: cafeConfig?.name || "The Caffeine Hub / SMJ Coffee",
    category: "cafe",
    serviceSlug: "cafe",
    templateId: "cafe",
    description:
      cafeConfig?.content?.heroSubtitle ||
      "เปลี่ยนจากเมนูกระดาษสู่ Digital Menu ที่เพิ่มยอดขายได้จริง พร้อมดีไซน์เท่ที่ช่วยสร้างภาพจำให้แบรนด์โรงคั่วกาแฟ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/smj-cafe.jpg",
    tags: ["Digital Menu", "Brand Identity", "Cafe Industrial"],
    stats: { label: "User Experience Score", value: "100/100" },
  },
  {
    id: "project-construction-01",
    title: constructionConfig?.name || "Master Craft Construction",
    category: "construction",
    serviceSlug: "construction",
    templateId: "construction",
    description:
      constructionConfig?.content?.heroSubtitle ||
      "ยกระดับความน่าเชื่อถือให้บริษัทรับเหมาด้วยระบบ Project Portfolio ที่ดูแกร่งและเป็นมืออาชีพ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/construction.jpg",
    tags: ["Engineering Look", "Portfolio System", "Trust Builder"],
    stats: { label: "Ultra-Fast Load", value: "0.45s" },
  },
  {
    id: "project-clinic-01",
    title: clinicConfig?.name || "Aura Clinic & Wellness",
    category: "clinic",
    serviceSlug: "clinic",
    templateId: "clinic",
    description:
      clinicConfig?.content?.heroSubtitle ||
      "Landing Page ที่เน้นผลลัพธ์ Before/After อย่างชัดเจน ช่วยเพิ่มจำนวนเคสจริงจากผู้เข้าชมเว็บไซต์",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/clinic.jpg",
    tags: ["Conversion Focused", "Medical Grade UI", "Smart Lead Gen"],
    stats: { label: "Conversion Rate", value: "+45%" },
  },
  {
    id: "project-real-estate-01",
    title: realEstateConfig?.name || "Modern Living Residency",
    category: "real-estate",
    serviceSlug: "realestate",
    templateId: "realestate",
    description:
      realEstateConfig?.content?.heroSubtitle ||
      "นำเสนอทำเลศักยภาพด้วยระบบ Location Insight ที่แม่นยำ ช่วยปิดการขายโครงการระดับพรีเมียม",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/real-estate.jpg",
    tags: ["Luxury Interface", "Location Insight", "Lead Magnet"],
    stats: { label: "Customer Lead Growth", value: "+30%" },
  },
  {
    id: "project-starter-01",
    title: starterConfig?.name || "Minimalist Gadget Store",
    category: "starter",
    serviceSlug: "starter",
    templateId: "starter",
    description:
      starterConfig?.content?.heroSubtitle ||
      "ตัวอย่างความสำเร็จของ Single Product Store ที่สร้างยอดขายหลักล้าน ด้วยหน้าเว็บที่โหลดไว",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/gadget-store.jpg",
    tags: ["Direct Sell", "High Performance", "Starter Success"],
    stats: { label: "Mobile Performance", value: "98/100" },
  },
]

/**
 * Utility helpers
 */
export const getProjectsByTemplate = (templateId: string): Project[] =>
  catalogProjects.filter((project) => project.templateId === templateId)

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] =>
  catalogProjects.filter((project) => project.category === category)
