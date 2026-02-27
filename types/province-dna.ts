/**
 * Province Visual DNA Schema (Aemza Standard)
 * โครงสร้างข้อมูลสำหรับเนรมิตหน้าจังหวัดให้เป็น Mini-site
 */

export interface ProvinceDNA {
  slug: string;
  name: string;
  tier: 1 | 2; // 1 = Major City (Industrial Dashboard), 2 = Standard Province (Professional)
  theme: {
    primary: string; // HSL หรือ Hex
    accent: string;
    bgStyle: "midnight" | "industrial" | "clean";
  };
  content: {
    localHeroUrl: string;
    localTitle: string;
    localDescription: string;
    landmarks: string[]; // สถานที่สำคัญเพื่อใช้ทำ SEO Entity Linking
  };
  seo: {
    keywords: string[];
    canonicalUrl: string;
  };
}
