// @format
// พิกัดข้อมูล: types/seo.ts
// หน้าที่: กำหนดโครงสร้างข้อมูล (Type Definition) สำหรับระบบ Technical SEO
// ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
// ระดับความลึก: Ultra-Deep Level 7 (Strict Typing)

/**
 * SeoBenefit: พิกัดข้อมูลผลลัพธ์ที่ได้รับจากการปรับจูนระบบ
 */
export interface SeoBenefit {
  title: string;
  desc: string;
}

/**
 * SeoFaq: ชุดข้อมูลคำถามที่พบบ่อยเพื่อสนับสนุนการตัดสินใจ
 */
export interface SeoFaq {
  question: string;
  answer: string;
}

/**
 * SeoPackagePrice: พิกัดงบประมาณและเงื่อนไขการให้บริการ
 */
export interface SeoPackagePrice {
  /** price: พิกัดข้อมูลตัวเลขสำหรับใช้ในระบบคำนวณและ Schema Markup */
  price: number;
  /** label: ข้อความแสดงราคา เช่น "15,900" */
  label: string;
  /** suffix: หน่วยเรียกงบประมาณ เช่น "/ ครั้ง", "/ เดือน" */
  suffix?: string;
  /** isPopular: พิกัดคัดเลือกบริการเด่นเพื่อนำขึ้นแสดงผลในส่วนแนะนำ */
  isPopular?: boolean;
}

/**
 * SeoAddOn: รายการระบบเสริมเพื่อเพิ่มขีดความสามารถเฉพาะจุด
 */
export interface SeoAddOn {
  title: string;
  price: string;
  description: string;
}

/**
 * SeoServiceItem: โครงสร้างหลักของข้อมูลบริการ SEO
 * ทุกฟิลด์ถูกระบุประเภทชัดเจนเพื่อกำจัดจุด Warning 'any' ในระบบ Scan
 */
export interface SeoServiceItem {
  /** id: รหัสอ้างอิงภายในพิกัดระบบงาน */
  id: string;
  /** * slug: พิกัด URL และกุญแจหลักสำหรับเรียกพิกัดรูปภาพอัตโนมัติ
   * พิกัดภาพอ้างอิง: /images/seo/${slug}.webp 
   */
  slug: string;
  title: string;
  subtitle: string;
  /** description: คำโปรยสำหรับแสดงผลในการ์ดพิกัดบริการ */
  description: string;
  /** iconName: ชื่อพิกัดไอคอนที่ลงทะเบียนไว้ในระบบ IconRenderer */
  iconName: string;
  /** painPoints: รายการจุดเสี่ยงที่ระบบจะเข้าไปจัดการแก้ไข */
  painPoints: string[];
  /** features: ขอบเขตการทำงานระดับเทคนิคที่ลูกค้าจะได้รับ */
  features: string[];
  /** benefits: ผลลัพธ์เชิงบวกที่มีต่อพิกัดการเติบโตของธุรกิจ */
  benefits: SeoBenefit[];
  /** pricing: พิกัดงบประมาณและสถานะความนิยม */
  pricing: SeoPackagePrice;
  /** addOns: รายการระบบเพิ่มเติม (Optional) */
  addOns?: SeoAddOn[];
  /** faq: ข้อมูลตอบโต้ข้อสงสัยในพิกัดบริการ */
  faq: SeoFaq[];
}

/**
 * SeoServiceCardProps: รูปแบบการรับส่งข้อมูลสำหรับคอมโพเนนต์การ์ดแสดงผล
 */
export interface SeoServiceCardProps {
  data: SeoServiceItem;
  className?: string;
}
