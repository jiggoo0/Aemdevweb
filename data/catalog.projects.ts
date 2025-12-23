/** @format */

import { Project } from "./types"

/**
 * Catalog of real projects that are tied to templates & services
 * ใช้สำหรับ:
 * - หน้า /catalog
 * - หน้า /landing/[templateSlug]
 * - Proof / Case study ที่ผูกกับ template
 */
export const catalogProjects: Project[] = [
  {
    id: "project-cafe-01",
    title: "The Caffeine Hub / SMJ Coffee",
    category: "cafe",
    serviceSlug: "aem-cafe-industrial",
    templateId: "aem-cafe-industrial",
    description:
      "เปลี่ยนจากเมนูกระดาษสู่ Digital Menu ที่เพิ่มยอดขายได้จริง พร้อมดีไซน์เท่ที่ช่วยสร้างภาพจำให้แบรนด์โรงคั่วกาแฟ",
    image: "/images/projects/smj-cafe.jpg",
    tags: ["Digital Menu", "Brand Identity", "Cafe Industrial"],
    stats: {
      label: "User Experience Score",
      value: "100/100",
    },
  },
  {
    id: "project-construction-01",
    title: "Master Craft Construction",
    category: "construction",
    serviceSlug: "construction-industrial-01",
    templateId: "construction-industrial-01",
    description:
      "ยกระดับความน่าเชื่อถือให้บริษัทรับเหมาด้วยระบบ Project Portfolio ที่ดูแกร่งและเป็นมืออาชีพ จบปัญหาภาพลักษณ์บริษัทไม่ชัดเจน",
    image: "/images/projects/construction.jpg",
    tags: ["Engineering Look", "Portfolio System", "Trust Builder"],
    stats: {
      label: "Ultra-Fast Load",
      value: "0.45s",
    },
  },
  {
    id: "project-clinic-01",
    title: "Aura Clinic & Wellness",
    category: "clinic",
    serviceSlug: "clinic-solution-01",
    templateId: "clinic-solution-01",
    description:
      "Landing Page ที่เน้นผลลัพธ์ Before/After อย่างชัดเจน ช่วยเพิ่มจำนวนเคสจริงจากผู้เข้าชมเว็บไซต์",
    image: "/images/projects/clinic.jpg",
    tags: ["Conversion Focused", "Medical Grade UI", "Smart Lead Gen"],
    stats: {
      label: "Conversion Rate",
      value: "+45%",
    },
  },
  {
    id: "project-real-estate-01",
    title: "Modern Living Residency",
    category: "real-estate",
    serviceSlug: "real-estate-premium-01",
    templateId: "real-estate-premium-01",
    description:
      "นำเสนอทำเลศักยภาพด้วยระบบ Location Insight ที่แม่นยำ ช่วยปิดการขายโครงการอสังหาฯ ระดับพรีเมียมได้รวดเร็วยิ่งขึ้น",
    image: "/images/projects/real-estate.jpg",
    tags: ["Luxury Interface", "Location Insight", "Lead Magnet"],
    stats: {
      label: "Customer Lead Growth",
      value: "+30%",
    },
  },
  {
    id: "project-starter-01",
    title: "Minimalist Gadget Store",
    category: "starter",
    serviceSlug: "starter-landing-01",
    templateId: "starter-landing-01",
    description:
      "ตัวอย่างความสำเร็จของ Single Product Store ที่สร้างยอดขายหลักล้าน ด้วยหน้าเว็บที่โหลดไวและ Conversion สูง",
    image: "/images/projects/gadget-store.jpg",
    tags: ["Direct Sell", "High Performance", "Starter Success"],
    stats: {
      label: "Mobile Performance",
      value: "98/100",
    },
  },
]

/**
 * Utility helpers (optional but recommended)
 */

export const getProjectsByTemplate = (templateId: string): Project[] =>
  catalogProjects.filter((project) => project.templateId === templateId)

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] =>
  catalogProjects.filter((project) => project.category === category)
