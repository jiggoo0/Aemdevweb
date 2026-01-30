// @format
// พิกัดข้อมูล: types/seo.ts
// หน้าที่: กำหนดโครงสร้างข้อมูล (Type Definition) สำหรับระบบ Technical SEO
// ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
// ระดับความลึก: Ultra-Deep Level 7 (Strict Typing & Immutable)

/**
 * SeoBenefit: พิกัดข้อมูลผลลัพธ์ที่ได้รับจากการปรับจูนระบบ
 */
export interface SeoBenefit {
  readonly title: string
  readonly desc: string
}

/**
 * SeoFaq: ชุดข้อมูลคำถามที่พบบ่อยเพื่อสนับสนุนการตัดสินใจ (Support FAQ Schema)
 */
export interface SeoFaq {
  readonly question: string
  readonly answer: string
}

/**
 * SeoPackagePrice: พิกัดงบประมาณและเงื่อนไขการให้บริการ
 * ออกแบบมารองรับ Offer Schema ของ Google Search
 */
export interface SeoPackagePrice {
  /** price: พิกัดข้อมูลตัวเลขสำหรับใช้ในระบบคำนวณ (e.g., 15900) */
  readonly price: number
  /** label: ข้อความแสดงราคาที่ผ่านการ Format แล้ว (e.g., "15,900") */
  readonly label: string
  /** currency: หน่วยเงินที่ใช้ (Default: "THB") */
  readonly currency: "THB" | "USD"
  /** suffix: หน่วยเรียกงบประมาณ เช่น "/ ครั้ง", "/ เดือน" */
  readonly suffix?: string
  /** isPopular: พิกัดคัดเลือกบริการเด่นเพื่อนำขึ้นแสดงผลในส่วนแนะนำ */
  readonly isPopular?: boolean
}

/**
 * SeoAddOn: รายการระบบเสริมเพื่อเพิ่มขีดความสามารถเฉพาะจุด
 */
export interface SeoAddOn {
  readonly title: string
  readonly price: string
  readonly description: string
}

/**
 * SeoServiceItem: โครงสร้างหลักของข้อมูลบริการ SEO (Core Logic Node)
 * ปรับปรุงโดยใช้ Readonly เพื่อป้องกันการกลายพันธุ์ของข้อมูล (Data Mutation)
 */
export interface SeoServiceItem {
  /** id: รหัสอ้างอิงภายในพิกัดระบบงาน (Unique ID) */
  readonly id: string
  /** slug: พิกัด URL และกุญแจหลักสำหรับเรียกพิกัดรูปภาพอัตโนมัติ */
  readonly slug: string
  readonly title: string
  readonly subtitle: string
  /** description: คำโปรยสำหรับแสดงผลในการ์ดพิกัดบริการ */
  readonly description: string
  /** iconName: ชื่อพิกัดไอคอนที่ลงทะเบียนไว้ใน IconRenderer */
  readonly iconName: string
  /** painPoints: รายการจุดเสี่ยงที่ระบบจะเข้าไปจัดการแก้ไข */
  readonly painPoints: readonly string[]
  /** features: ขอบเขตการทำงานระดับเทคนิคที่ลูกค้าจะได้รับ */
  readonly features: readonly string[]
  /** benefits: ผลลัพธ์เชิงบวกที่มีต่อพิกัดการเติบโตของธุรกิจ */
  readonly benefits: readonly SeoBenefit[]
  /** pricing: พิกัดงบประมาณและสถานะความนิยม */
  readonly pricing: SeoPackagePrice
  /** addOns: รายการระบบเพิ่มเติม (Optional) */
  readonly addOns?: readonly SeoAddOn[]
  /** faq: ข้อมูลตอบโต้ข้อสงสัยในพิกัดบริการ */
  readonly faq: readonly SeoFaq[]
}

/**
 * SeoServiceCardProps: รูปแบบการรับส่งข้อมูลสำหรับคอมโพเนนต์การ์ดแสดงผล
 */
export interface SeoServiceCardProps {
  data: SeoServiceItem
  className?: string
  /** priority: กำหนดให้ Fetch รูปภาพเป็นลำดับแรก (LCP Optimization) */
  priority?: boolean
}
