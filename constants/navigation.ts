/** @format */
// พิกัดข้อมูล: constants/navigation.ts
// หน้าที่: กำหนดพิกัดทางเดินข้อมูล (Routing) และระบบเมนูสำหรับ www.aemdevweb.com
// มาตรฐาน: Next.js 16 | Ultra-Deep Level 7 | Specialist Optimization 2026
// นโยบาย: No backend • No form submission • LINE-only communication
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)

import { siteConfig } from "./site-config";

/**
 * [TYPE DEFINITIONS]
 */
export interface NavItem {
  readonly name: string;
  readonly href: string;
  readonly description?: string;
  readonly badge?: string;
  readonly external?: boolean;
  readonly disabled?: boolean;
}

export interface NavigationConfig {
  readonly main: readonly NavItem[];
  readonly footer: {
    readonly services: readonly NavItem[];
    readonly company: readonly NavItem[];
    readonly support: readonly NavItem[];
    readonly legal: readonly NavItem[];
    readonly areas: readonly NavItem[];
  };
}

/**
 * Navigation Strategy 2026: "Authority & Local Dominance"
 * ยุทธศาสตร์: กระจายพิกัดจากศูนย์กลาง (Core) สู่พิกัดความสำเร็จรายพื้นที่ (Success Pins)
 */
export const navigation: NavigationConfig = {
  /* [MAIN NAVIGATION HUB] */
  main: [
    {
      name: "ศูนย์กลางระบบ",
      href: "/",
      description: "ภาพรวมโครงสร้างระบบและพิกัดยุทธศาสตร์เพื่อการเติบโตของธุรกิจ",
    },
    {
      name: "บริการหลัก",
      href: "/services",
      description: "รายละเอียดแผนการลงทุนและสเปกการทำงานระดับ Specialist",
    },
    {
      name: "ปักหมุดสำเร็จได้ทุกพิกัด",
      href: "/areas",
      badge: "Local",
      description: "Local SEO Strategy พิสูจน์ความสำเร็จจริงในพิกัดพื้นที่เป้าหมาย",
    },
    {
      name: "Technical SEO",
      href: "/seo",
      badge: "Pro",
      description: "ปรับโครงสร้างระบบเว็บเชิงลึกเพื่อให้ Google และ AI เชื่อมั่น",
    },
    {
      name: "คลังความรู้",
      href: "/blog",
      description: "ข้อมูลเทคนิคและกลยุทธ์การบริหารจัดการระบบโดย Specialist",
    },
    {
      name: "เทมเพลต",
      href: "/templates",
      description: "โครงสร้างเว็บไซต์สำเร็จรูปที่ผ่านการจูนสมรรถนะพร้อมใช้งาน",
    },
    {
      name: "กรณีศึกษา",
      href: "/case-studies",
      description: "พิกัดยืนยันความสำเร็จและผลลัพธ์เชิงประจักษ์จากโครงการจริง",
    },
  ],

  /* [FOOTER CONNECTIVITY NODES] */
  footer: {
    services: [
      {
        name: "Conversion Sales Engine",
        href: "/services/salepage_single",
        badge: "Hot",
      },
      {
        name: "Technical SEO Audit",
        href: "/seo/technical-structure-audit",
      },
      {
        name: "Web Speed Optimization",
        href: "/seo/core-web-vitals-speed",
      },
      {
        name: "Managed Web Infrastructure",
        href: "/services/webrental",
      },
    ],

    areas: [
      {
        name: "ปักหมุดสำเร็จ จ.ตาก",
        href: "/areas/tak",
        description: "ยึดพิกัดการค้นหาแม่สอดและเขตเศรษฐกิจพิเศษ",
      },
      {
        name: "ปักหมุดสำเร็จ จ.กำแพงเพชร",
        href: "/areas/kamphaeng-phet",
        description: "ดันพิกัดธุรกิจ SME และบริการท้องถิ่นขึ้นหน้าแรก",
      },
      {
        name: "พิกัดความสำเร็จทั้งหมด",
        href: "/areas",
        badge: "View All",
      },
    ],

    company: [
      {
        name: "เกี่ยวกับ AEMDEVWEB",
        href: "/about",
      },
      {
        name: "พิสูจน์ผลงานจริง",
        href: "/case-studies",
      },
      {
        name: "ปรึกษา นายเอ็มซ่ามากส์",
        href: "/contact",
      },
    ],

    support: [
      {
        name: "ติดต่อผ่าน LINE (Official)",
        href: siteConfig.links.line,
        external: true,
      },
      {
        name: "เทคนิคการจูนระบบ",
        href: "/blog",
      },
      {
        name: "Status: All Nodes Active",
        href: "#",
        disabled: true,
      },
    ],

    legal: [
      {
        name: "นโยบายความเป็นส่วนตัว",
        href: "/privacy",
      },
      {
        name: "เงื่อนไขการใช้บริการ",
        href: "/terms",
      },
    ],
  },
};

export const mainNav = navigation.main;
export const footerNavigation = navigation.footer;

/**
 * [STRATEGIC KEYWORDS 2026]
 * พิกัดคำค้นหาสำคัญเพื่อการดักจับบอทในพิกัดยุทธศาสตร์
 */
export const siteKeywords: readonly string[] = [
  ...siteConfig.keywords.list,
  "ปักหมุดสำเร็จได้ทุกพิกัด",
  "รับทำ SEO รายพื้นที่",
  "ทำเว็บไซต์ จ.ตาก โดยนายเอ็ม",
  "ทำเว็บไซต์ จ.กำแพงเพชร โดยนายเอ็ม",
  "Technical SEO Specialist Thailand",
  "นาย อลงกรณ์ ยมเกิด",
  "นายเอ็มซ่ามากส์",
];
