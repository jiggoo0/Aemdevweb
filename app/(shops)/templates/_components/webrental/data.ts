/** @format */

import { WebRentalData } from "./schema"

/**
 * webRentalData - ข้อมูลพิกัดระบบเช่าเว็บไซต์รายเดือน
 * แนวคิด: เน้นความโปร่งใสของราคา ความคุ้มค่า และมาตรฐานงานที่ SME ไว้วางใจได้จริง
 * วางระบบโดย: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const webRentalData: WebRentalData = {
  seo: {
    title: "เช่าเว็บไซต์รายเดือน วางระบบไว โหลดซิ่งระดับวินาที | AEMDEVWEB",
    description:
      "บริการเช่าเว็บไซต์ที่เน้นมาตรฐานเทคนิกระดับ Specialist ด้วยเทคโนโลยี Next.js 16 เร็วแรงและปลอดภัย วางระบบให้ครบวงจรโดยผู้เชี่ยวชาญตัวจริง",
    keywords: [
      "เช่าเว็บไซต์รายเดือน",
      "รับทำเว็บ SME",
      "Next.js 16",
      "เว็บโหลดไว",
      "วางระบบเว็บไซต์",
      "นายเอ็มซ่ามากส์",
    ],
    ogImage: "/images/templates/webrental/webrental-og.webp",
  },

  navigation: {
    logo: "AEM.RENTAL",
    links: [
      { label: "มาตรฐานงาน", href: "#features" },
      { label: "รูปแบบเว็บไซต์", href: "#showcase" },
      { label: "ราคาและแพ็กเกจ", href: "#pricing" },
    ],
    cta: "ปรึกษาพิกัดงานฟรี",
  },

  hero: {
    badge: "Professional Partner 2026",
    title: "ขยายโอกาสธุรกิจด้วยเว็บไซต์ที่",
    highlight: "เนี้ยบและทรงพลัง",
    description:
      "เปลี่ยนความยุ่งยากของระบบเดิม มาเป็นแผนงานเว็บไซต์เช่าที่ดูแลโดยผู้เชี่ยวชาญ ผมจัดการงานเทคนิคหลังบ้านให้ทั้งหมดเพื่อให้คุณมีเวลาโฟกัสการเติบโตของธุรกิจได้อย่างเต็มพิกัดครับ",
    priceLabel: "งบประมาณเริ่มต้นรายเดือน",
    priceValue: "590",
    bgImage: "/images/templates/webrental.webp",
  },

  painPoints: {
    title: "ปัญหาที่ทำให้พิกัดธุรกิจของคุณหยุดนิ่ง",
    items: [
      {
        icon: "Clock",
        title: "หน้าเว็บโหลดช้า",
        desc: "สูญเสียโอกาสสำคัญเพราะลูกค้าเข้าถึงพิกัดข้อมูลได้ไม่ทันใจ",
      },
      {
        icon: "ShieldAlert",
        title: "ขาดการดูแลต่อเนื่อง",
        desc: "เสี่ยงกับปัญหาระบบขัดข้องโดยไม่มีทีมงานคอยซัพพอร์ตงานหลังบ้าน",
      },
      {
        icon: "BarChart",
        title: "งบประมาณบานปลาย",
        desc: "ภาระค่าใช้จ่ายแฝงจากระบบงานและค่าเซิร์ฟเวอร์ที่ควบคุมยาก",
      },
    ],
  },

  features: {
    title: "ความคุ้มค่าที่พิกัดธุรกิจคุณจะได้รับ",
    list: [
      {
        icon: "Zap",
        title: "Speed Performance",
        desc: "หน้าเว็บประมวลผลรวดเร็ว ช่วยให้พิกัดอันดับบน Google ของคุณดีขึ้นชัดเจน",
      },
      {
        icon: "Search",
        title: "SEO Foundations",
        desc: "วางพื้นฐานข้อมูลให้ครบถ้วนตามมาตรฐานการค้นหาที่ถูกต้องตั้งแต่บรรทัดแรก",
      },
      {
        icon: "Server",
        title: "Managed Cloud",
        desc: "ดูแลพื้นที่จัดเก็บข้อมูลบนเซิร์ฟเวอร์ที่เสถียรและซิ่งไวระดับปีศาจ",
      },
      {
        icon: "ShieldCheck",
        title: "Security & Support",
        desc: "ดูแลความปลอดภัยและระบบงานให้พร้อมใช้งานสม่ำเสมอตลอดสัญญา",
      },
    ],
  },

  showcase: {
    title: "รูปแบบเว็บไซต์ที่พร้อมวางระบบ",
    description:
      "ทุกโครงสร้างถูกปรับจูนให้เข้ากับพฤติกรรมผู้ใช้งานจริง เพื่อผลลัพธ์ที่ลื่นไหลที่สุด",
    templates: [
      {
        name: "Service Elite",
        category: "งานบริการ",
        image: "/images/showcase/service.webp",
      },
      {
        name: "Commerce Pro",
        category: "ร้านค้าออนไลน์",
        image: "/images/showcase/shop.webp",
      },
      {
        name: "Corporate Hub",
        category: "บริษัทและองค์กร",
        image: "/images/showcase/hotel.webp",
      },
    ],
  },

  pricing: {
    title: "แผนงบประมาณที่ชัดเจนและโปร่งใส",
    tiers: [
      {
        name: "Starter Plan",
        price: "590",
        features: [
          "หน้าเว็บแสดงผล 1 หน้า",
          "ดูแลงานเทคนิคให้ฟรี",
          "รองรับการเปิดทุกอุปกรณ์",
          "ระบบความปลอดภัยมาตรฐาน",
        ],
        buttonText: "เริ่มแผนงานนี้",
      },
      {
        name: "Business Plan",
        price: "990",
        isPopular: true,
        features: [
          "หน้าเว็บแสดงผล 5 หน้า",
          "ฟรีพิกัดโดเมนเนม .com",
          "วางพื้นฐาน SEO เบื้องต้น",
          "เชื่อมต่อช่องทางติดต่อครบถ้วน",
        ],
        buttonText: "เลือกแผนงานแนะนำ",
      },
      {
        name: "Professional",
        price: "1,590",
        features: [
          "ระบบจัดการข้อมูลสินค้า",
          "วางโครงสร้างร้านค้าออนไลน์",
          "ระบบวิเคราะห์ผู้เข้าชม",
          "ดูแลงานเทคนิคระดับสูง",
        ],
        buttonText: "คุยกับผู้เชี่ยวชาญ",
      },
    ],
  },

  footer: {
    brand: "AEM.RENTAL",
    tagline: "มาตรฐานงานเช่าเว็บไซต์โดย Specialist นายเอ็มซ่ามากส์",
    contact: { phone: "09X-XXX-XXXX", line: "@127cnthn" },
  },
}
