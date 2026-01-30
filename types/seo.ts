/** @format */

// พิกัดข้อมูล: types/seo.ts
// หน้าที่: กำหนดโครงสร้างข้อมูลสำหรับระบบ Technical SEO
// ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
// ระดับความลึก: Ultra-Deep Level 7 (Strict Typing & Immutable)

export interface SeoBenefit {
  readonly title: string;
  readonly desc: string;
}

export interface SeoFaq {
  readonly question: string;
  readonly answer: string;
}

export interface SeoPackagePrice {
  readonly price: number;
  readonly label: string;
  readonly currency: "THB" | "USD";
  readonly suffix?: string;
  readonly isPopular?: boolean;
}

export interface SeoAddOn {
  readonly title: string;
  readonly price: string;
  readonly description: string;
}

export interface SeoServiceItem {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly iconName: string;
  readonly painPoints: readonly string[];
  readonly features: readonly string[];
  readonly benefits: readonly SeoBenefit[];
  readonly pricing: SeoPackagePrice;
  readonly addOns?: readonly SeoAddOn[];
  readonly faq: readonly SeoFaq[];
}

export interface SeoServiceCardProps {
  readonly data: SeoServiceItem;
  readonly className?: string;
  readonly priority?: boolean;
}
