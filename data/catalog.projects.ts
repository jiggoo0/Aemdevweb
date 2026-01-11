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
 * การรวบรวม "ผลงานที่ใช้งานจริง" เพื่อสร้างความมั่นใจให้ลูกค้า
 */
export const catalogProjects: Project[] = [
  // ─── 01. คาเฟ่และร้านอาหาร (Premium Look) ───
  {
    id: "project-cafe-01",
    title: cafeConfig?.name || "The Caffeine Hub",
    category: "cafe",
    serviceSlug: "cafe",
    templateId: "cafe",
    description:
      "เปลี่ยนเมนูเดิมๆ เป็น Digital Menu ที่สวยงามและโหลดไว ช่วยให้ลูกค้าตัดสินใจสั่งง่ายขึ้น พร้อมดีไซน์ที่สะท้อนบรรยากาศร้านที่เป็นเอกลักษณ์",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/smj-cafe.jpg",
    tags: ["Digital Menu", "ร้านอาหารรุ่นใหม่", "โหลดไวผ่านมือถือ"],
    stats: { label: "คะแนนการใช้งาน", value: "100/100" },
  },

  // ─── 02. บริษัทรับเหมาก่อสร้าง (Professional Trust) ───
  {
    id: "project-construction-01",
    title: constructionConfig?.name || "Master Craft Construction",
    category: "construction",
    serviceSlug: "construction",
    templateId: "construction",
    description:
      "เน้นสร้างความน่าเชื่อถือให้บริษัทรับเหมา ด้วยระบบโชว์พอร์ตโฟลิโอโครงการที่ดูยิ่งใหญ่และเป็นมืออาชีพ ช่วยดึงดูดคู่ค้าและโปรเจกต์ใหญ่",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/construction.jpg",
    tags: ["น่าเชื่อถือระดับองค์กร", "โชว์ผลงานก่อสร้าง", "B2B Trust"],
    stats: { label: "ความเร็วการโหลด", value: "0.45 วิ" },
  },

  // ─── 03. ธุรกิจโรงไม้และวัสดุก่อสร้าง (Digital Transformation) ───
  {
    id: "project-wood-01",
    title: woodBusinessConfig?.name || "สุโขทัยค้าไม้",
    category: "construction",
    serviceSlug: "wood-business",
    templateId: "wood-business",
    description:
      "กรณีศึกษาการเปลี่ยน 'หน้าร้านออฟไลน์' สู่โลกออนไลน์ ด้วยแคตตาล็อกสินค้าที่เข้าถึงกลุ่มช่างผ่าน LINE OA ได้ทันที สะดวกและปิดการขายง่ายกว่าเดิม",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/WoodBusiness/wood-1.jpg",
    tags: ["เปลี่ยนออฟไลน์สู่เว็บ", "แคตตาล็อกออนไลน์", "เชื่อมต่อ LINE OA"],
    stats: { label: "การตอบกลับไว", value: "< 15 นาที" },
  },

  // ─── 04. คลินิกและศูนย์สุขภาพ (Service & Booking) ───
  {
    id: "project-clinic-01",
    title: clinicConfig?.name || "Aura Clinic",
    category: "clinic",
    serviceSlug: "clinic",
    templateId: "clinic",
    description:
      "ยกระดับคลินิกด้วยระบบแสดงรีวิว Before/After ที่ชัดเจน และช่องทางนัดหมายคุณหมอที่ง่ายขึ้น เปลี่ยนผู้เข้าชมเว็บให้กลายเป็นคนไข้จริงได้อย่างแม่นยำ",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/clinic.jpg",
    tags: ["ระบบนัดหมาย", "คลินิกความงาม", "รีวิวคนไข้จริง"],
    stats: { label: "ยอดนัดหมายเพิ่ม", value: "+45%" },
  },

  // ─── 05. โครงการอสังหาริมทรัพย์ (Premium Listing) ───
  {
    id: "project-real-estate-01",
    title: realEstateConfig?.name || "Modern Living",
    category: "real-estate",
    serviceSlug: "realestate",
    templateId: "realestate",
    description:
      "หน้าเว็บที่สื่อสารถึงความหรูหราสำหรับโครงการอสังหาฯ พร้อมระบบข้อมูลทำเลที่ช่วยให้ลูกค้ารู้สึกคุ้มค่ากับการลงทุนตั้งแต่วินาทีแรกที่เห็น",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/real-estate.jpg",
    tags: ["ดีไซน์หรูหรา", "ข้อมูลทำเลแม่นยำ", "เจาะกลุ่มนักลงทุน"],
    stats: { label: "ลูกค้าคุณภาพเพิ่ม", value: "+30%" },
  },

  // ─── 06. ร้านค้าปลีกรุ่นเริ่มต้น (Single Product) ───
  {
    id: "project-starter-01",
    title: starterConfig?.name || "Minimalist Store",
    category: "starter",
    serviceSlug: "starter",
    templateId: "starter",
    description:
      "เว็บหน้าเดียวที่เน้นขายสินค้าตัวท็อป โหลดเร็วที่สุดและสั่งซื้อได้สั้นที่สุด เพื่อโอกาสการปิดการขายที่ดีที่สุดสำหรับแบรนด์ที่กำลังเริ่มต้น",
    image:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/catalog/gadget-store.jpg",
    tags: ["เน้นปิดการขาย", "สำหรับแบรนด์เริ่มต้น", "เว็บหน้าเดียว"],
    stats: { label: "ประสิทธิภาพเว็บ", value: "98/100" },
  },
]

/**
 * 🛠️ DATA RETRIEVAL HELPERS
 */
export const helpers = {
  getByTemplate: (id: string): Project[] =>
    catalogProjects.filter((p) => p.templateId === id),

  getByCategory: (cat: Project["category"]): Project[] =>
    catalogProjects.filter((p) => p.category === cat),

  getFeatured: (limit = 3): Project[] => catalogProjects.slice(0, limit),
}
