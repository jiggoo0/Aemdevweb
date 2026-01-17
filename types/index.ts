/** @format */

// --- 🌐 SITE & NAVIGATION CONFIG ---
export interface NavItem {
  title: string;
  name?: string; // รองรับคอมโพเนนต์ที่เรียกใช้ .name
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface SiteConfig {
  name: string;
  companyName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    line: string;
    facebook?: string;
    messenger?: string;
    lineId?: string;
    github?: string;
  };
  keywords: string[];
}

// --- 📄 BLOG & CONTENT (MDX) ---
export interface BlogPostProps {
  title: string;
  excerpt?: string;
  description?: string; // รองรับการดึงจาก MDX Metadata
  slug: string;
  date: string;
  coverImage: string;
  category?: string;
  readingTime?: string; // แก้ Error ใน BlogCard.tsx
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  coverImage: string;
  author: string;
  readingTime?: string;
}

export interface BlogPost extends BlogMetadata {
  slug: string;
  // ✅ Fixed: เปลี่ยน any เป็น unknown เพื่อความปลอดภัยของข้อมูล content
  content?: unknown; 
}

// --- 💼 SERVICES & SOLUTIONS ---
export type ServiceIconName =
  | "Rocket"
  | "ShieldCheck"
  | "Code2"
  | "Gauge"
  | "Zap";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: ServiceIconName;
  features: string[];
  priceRange?: string;
  slug: string;
  priceDisplay?: string;
  mockups?: {
    desktop: string;
    mobile: string;
  };
}

// --- 🏆 CASE STUDIES & SHOWCASE ---
export interface ShowcaseStats {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  stats: ShowcaseStats;
  tags: string[];
  results: string[];
  clientQuote?: {
    text: string;
    author: string;
  };
}

// --- 🎨 TEMPLATE ENGINE ---
export type TemplateCategory =
  | "SalePage"
  | "Corporate"
  | "ECommerce"
  | "Service"
  | "Portfolio"
  | string;

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  themeColor?: string;
}

export interface TemplateItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: TemplateCategory;
  image: string;
  demoUrl?: string;
  price?: number;
  salePrice?: number;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  themeColor?: string;
  
  mockups?: {
    desktop?: string;
    mobile?: string;
  };

  salesData?: {
    soldCount: number;
    rating: number;
    reviews: number;
  };
}

// --- 📩 LEAD & CONVERSION ---
export interface LeadFormSubmission {
  name: string;
  email?: string;
  lineId: string;
  businessType: string;
  budget: string;
  message: string;
  source: string;
  timestamp: string;
}

// --- ⭐ SOCIAL PROOF ---
export interface TestimonialItem {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
  company?: string;
}
