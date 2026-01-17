/** @format */

export type ProjectCategory =
  | "Food & Beverage"
  | "Corporate"
  | "E-commerce"
  | "Service"
  | "Internal System"

export interface CaseStudyItem {
  id: string
  slug: string
  title: string
  client: string
  category: ProjectCategory
  description: string // คำอธิบายสั้นๆ (Card)
  challenge: string // ปัญหาเดิมของลูกค้า
  solution: string // สิ่งที่เราทำให้
  impact: string // ผลลัพธ์ที่เป็นตัวเลข (Highlight)
  image: string
  tech: string[]
  stats: {
    label: string
    value: string
  }[]
  isFeatured?: boolean
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "case_01",
    slug: "project-01",
    title: "Raan-Aroi Delivery Platform",
    client: "ร้านอร่อย เดลิเวอรี่",
    category: "Food & Beverage",
    description:
      "เปลี่ยนร้านอาหารธรรมดาให้กลายเป็น Digital Franchise ด้วยระบบสั่งอาหารผ่านเว็บที่ตัดบัตรเครดิตได้ทันที",
    challenge:
      "ลูกค้าต้องรอลูกน้องตอบแชทนาน ทำให้เสียยอดขาย และระบบจัดการออเดอร์หลังบ้านมั่วซั่ว สต็อกไม่ตรง",
    solution:
      "พัฒนาระบบ Web App สั่งอาหารออนไลน์ เชื่อมต่อ Line OA แจ้งเตือนออเดอร์ทันที และตัดบัตรเครดิตผ่าน Stripe",
    impact: "ยอดขายเพิ่มขึ้น 300% ใน 3 เดือน",
    image: "/images/showcase/project-01.webp",
    tech: ["Next.js", "Tailwind CSS", "Stripe Payment", "Line API"],
    stats: [
      { label: "Page Speed", value: "99/100" },
      { label: "Conversion", value: "+4.5%" },
      { label: "Traffic", value: "15k/mo" },
    ],
    isFeatured: true,
  },
  {
    id: "case_02",
    slug: "tech-build-construction",
    title: "TechBuild Corporate Site",
    client: "บริษัท เทคบิลด์ คอนสตรัคชั่น จำกัด",
    category: "Corporate",
    description:
      "ยกระดับภาพลักษณ์บริษัทรับเหมาพันล้าน ด้วยเว็บไซต์ Corporate ที่น่าเชื่อถือและติดหน้าแรก Google",
    challenge:
      "เว็บไซต์เดิมเก่า ไม่รองรับมือถือ และค้นหาใน Google ไม่เจอ ทำให้พลาดโอกาสในการประมูลงานใหญ่",
    solution:
      "รื้อโครงสร้างใหม่ทำ SEO Structure เต็มรูปแบบ ออกแบบ UI ให้ดู Modern & Professional รองรับ 2 ภาษา",
    impact: "ติดหน้า 1 Google Keyword 'รับเหมาโรงงาน'",
    image: "/images/showcase/project-01.webp", // ควรเปลี่ยนเป็นรูปจริง
    tech: ["Next.js", "CMS Integration", "i18n", "SEO Schema"],
    stats: [
      { label: "SEO Rank", value: "#1" },
      { label: "Leads", value: "+150%" },
      { label: "Mobile Score", value: "100" },
    ],
    isFeatured: true,
  },
  {
    id: "case_03",
    slug: "glow-skin-ecommerce",
    title: "Glow Skin E-commerce",
    client: "Glow Skin Thailand",
    category: "E-commerce",
    description:
      "ระบบ E-commerce ขายสกินแคร์ที่รองรับ Flash Sale รับคนเข้าเว็บพร้อมกันได้หลักหมื่นคนไม่ล่ม",
    challenge:
      "เว็บล่มทุกครั้งที่จัดโปร 9.9 ลูกค้าด่า เช็คเอาท์ไม่ได้ ระบบตะกร้าสินค้าซับซ้อนเกินไป",
    solution:
      "ใช้ Next.js + Vercel Serverless รองรับ Traffic มหาศาล และออกแบบ Flow การจ่ายเงินใหม่ให้จบใน 3 คลิก",
    impact: "รองรับ User พร้อมกัน 10,000 คน ไม่ล่ม",
    image: "/images/showcase/project-01.webp", // ควรเปลี่ยนเป็นรูปจริง
    tech: ["Next.js Commerce", "Supabase", "Redis", "Omise"],
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Load Time", value: "0.5s" },
      { label: "Checkout", value: "20s" },
    ],
    isFeatured: false,
  },
  {
    id: "case_04",
    slug: "unlink-th",
    title: "AemDevWeb Official Site",
    client: "Unlink-TH (Internal)",
    category: "Corporate",
    description:
      "เว็บไซต์ Official ของนายเอ็มซ่ามากส์ ที่เน้นความเร็วระดับปีศาจ (Speed Demon) และ SEO Structure ที่แข็งแกร่งที่สุด",
    challenge:
      "ต้องการสร้างมาตรฐานใหม่ให้วงการ Web Dev ไทย ด้วยการโชว์ผลลัพธ์ว่าเว็บที่ดีจริงๆ ต้องเร็วขนาดไหน",
    solution:
      "เขียนใหม่ด้วย Next.js 15 (App Router) ใช้ React Server Components 100% ลด JS Bundle ให้เล็กที่สุด",
    impact: "Google PageSpeed 100/100 (Mobile)",
    image: "/images/showcase/unlink-th.webp",
    tech: [
      "Next.js 15",
      "React Server Components",
      "Vercel Edge",
      "OKLCH Color",
    ],
    stats: [
      { label: "LCP", value: "0.8s" },
      { label: "Performance", value: "100" },
      { label: "SEO", value: "100" },
    ],
    isFeatured: true,
  },
]

/**
 * 🛠️ Helpers Functions
 */

// 🔍 ดึงข้อมูลโปรเจกต์ตาม Slug
export const getCaseStudyBySlug = (slug: string): CaseStudyItem | undefined => {
  return caseStudiesData.find((c) => c.slug === slug)
}

// 🔍 ดึงโปรเจกต์แนะนำ (Featured)
export const getFeaturedCaseStudies = (): CaseStudyItem[] => {
  return caseStudiesData.filter((c) => c.isFeatured)
}

// 🔍 ดึงโปรเจกต์ที่เกี่ยวข้อง (Same Category) แต่ไม่รวมตัวปัจจุบัน
export const getRelatedCaseStudies = (currentSlug: string): CaseStudyItem[] => {
  const currentProject = getCaseStudyBySlug(currentSlug)
  if (!currentProject) return []

  return caseStudiesData
    .filter(
      (c) => c.category === currentProject.category && c.slug !== currentSlug
    )
    .slice(0, 3) // เอามาแค่ 3 อันดับแรก
}
