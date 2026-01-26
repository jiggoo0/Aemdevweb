/** @format */
import { WebRentalData } from "./schema"

export const webRentalData: WebRentalData = {
  seo: {
    title:
      "เช่าเว็บไซต์สำเร็จรูป เกรดพรีเมียม โหลดไว ติดหน้าแรก Google | เริ่มต้น 590.-",
    description:
      "บริการเช่าเว็บไซต์รายเดือนที่เหนือกว่า Wix ด้วยเทคโนโลยี Next.js แรง เร็ว ปลอดภัย ดูแลให้ตลอดอายุสัญญา ไม่ต้องทำเอง",
    keywords: [
      "เช่าเว็บไซต์รายเดือน",
      "ทำเว็บรายเดือน",
      "เว็บสำเร็จรูป SEO",
      "AEMDEVWEB",
    ],
    ogImage: "/images/templates/rental-og.webp",
  },
  navigation: {
    logo: "AEM.RENTAL",
    links: [
      { label: "ทำไมต้องเรา", href: "#why-us" },
      { label: "ตัวอย่างเว็บ", href: "#showcase" },
      { label: "ค่าบริการ", href: "#pricing" },
    ],
    cta: "ปรึกษาฟรี",
  },
  hero: {
    badge: "สำหรับ SME ยุคใหม่ 2026",
    title: "เลิกเสียเวลากับเว็บสำเร็จรูปที่",
    highlight: "อืดและพังง่าย",
    description:
      "ยกระดับธุรกิจของคุณด้วยเว็บไซต์โครงสร้างระดับโลก (Enterprise Grade) ที่เราดูแลให้ครบวงจร ตั้งแต่เซิร์ฟเวอร์ ความปลอดภัย ยัน SEO โดยที่คุณไม่ต้องเขียนโค้ดเองแม้แต่บรรทัดเดียว",
    priceLabel: "รายเดือนเริ่มต้นเพียง",
    priceValue: "590",
    bgImage: "/images/templates/rental-hero.webp",
  },
  painPoints: {
    title: "คุณกำลังเจอปัญหาเหล่านี้กับ Wix/WordPress ใช่ไหม?",
    items: [
      {
        icon: "Snail",
        title: "เว็บโหลดช้ามาก",
        desc: "ลูกค้ากดหนีเพราะหมุนติ้ว เสียค่าโฆษณาฟรี",
      },
      {
        icon: "ShieldAlert",
        title: "โดนแฮกบ่อย",
        desc: "WordPress ไม่ได้อัปเดต ปลั๊กอินพัง เว็บล่ม",
      },
      {
        icon: "CreditCard",
        title: "จุกจิกเรื่องค่าใช้จ่าย",
        desc: "ค่าโฮสติ้ง ค่าโดเมน ค่าธีม ค่าจ้างคนแก้ บานปลาย",
      },
    ],
  },
  features: {
    title: "จ่ายรายเดือนหลักร้อย ได้สเปคหลักแสน",
    list: [
      {
        icon: "Zap",
        title: "Speed Score 100",
        desc: "โครงสร้าง Next.js ที่ Google รัก โหลดเสร็จใน 0.7 วินาที",
      },
      {
        icon: "Search",
        title: "Technical SEO 100%",
        desc: "วางโครงสร้าง Schema Markup ให้ครบ ดันอันดับง่ายกว่า",
      },
      {
        icon: "Server",
        title: "Free Cloud Hosting",
        desc: "ใช้ Server ระดับโลก วิ่งไว ไม่ล่ม ไม่จำกัด Bandwidth",
      },
      {
        icon: "Wrench",
        title: "Free Maintenance",
        desc: "เราดูแลระบบหลังบ้านให้ตลอดชีพ ไม่ทิ้งงาน มีปัญหาแก้ทันที",
      },
      {
        icon: "Lock",
        title: "SSL Security",
        desc: "ความปลอดภัยระดับธนาคาร (HTTPS) ฟรีตลอดอายุสัญญา",
      },
      {
        icon: "PenTool",
        title: "Design Premium",
        desc: "ไม่ใช่เทมเพลตโหลๆ แต่ผ่านการคิด UX/UI มาเพื่อปิดการขาย",
      },
    ],
  },
  showcase: {
    title: "เลือกรูปแบบที่ใช่ สำหรับธุรกิจคุณ",
    description:
      "ทุกเทมเพลตผ่านการวิจัยพฤติกรรมลูกค้าในไทยมาแล้ว ว่าใช้ง่ายและขายได้จริง",
    templates: [
      {
        name: "Grand Hotel",
        category: "โรงแรม/ที่พัก",
        image: "/images/showcase/hotel.webp",
      },
      {
        name: "Shop Master",
        category: "ร้านค้าออนไลน์",
        image: "/images/showcase/shop.webp",
      },
      {
        name: "Cleaning Pro",
        category: "บริการ/บริษัท",
        image: "/images/showcase/service.webp",
      },
    ],
  },
  pricing: {
    title: "ราคาเดียว จบครบทุกอย่าง",
    tiers: [
      {
        name: "Starter",
        price: "590",
        features: [
          "เว็บ 1 หน้า (Single Page)",
          "Hosting ฟรี",
          "ดูแลระบบฟรี",
          "รองรับมือถือ 100%",
        ],
        buttonText: "เลือกแพ็กเกจนี้",
      },
      {
        name: "Business",
        price: "990",
        isPopular: true,
        features: [
          "เว็บ 5 หน้า ครบวงจร",
          "ฟรี .com โดเมน",
          "ระบบ SEO ขั้นสูง",
          "เชื่อมต่อ Line/FB",
          "แก้ไขข้อมูลได้เอง",
        ],
        buttonText: "เลือกแพ็กเกจนี้",
      },
      {
        name: "Enterprise",
        price: "1,590",
        features: [
          "ระบบ E-Commerce เต็มรูปแบบ",
          "ไม่จำกัดสินค้า",
          "ระบบตะกร้าสินค้า",
          "รองรับการชำระเงิน",
          "Report ยอดขาย",
        ],
        buttonText: "ติดต่อทีมงาน",
      },
    ],
  },
  footer: {
    brand: "AEM.RENTAL",
    tagline: "บริการเช่าเว็บไซต์คุณภาพสูง โดย AEMDEVWEB",
    contact: { phone: "09X-XXX-XXXX", line: "@AEMDEVWEB" },
  },
}
