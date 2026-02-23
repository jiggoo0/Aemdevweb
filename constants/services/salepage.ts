/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_ENGINE v18.0.1 (ROAS_OPTIMIZED)
 * [STRATEGY]: Aggressive Conversion | Server-Side Tracking | Neon Rose Theme
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "High-Performance Sale Page | หน้าปิดการขายอัจฉริยะ ยอดทักแชทแตก แอดแม่นยำ",
  description:
    "เปลี่ยนคลิกเป็นยอดโอนด้วย Sale Page โครงสร้าง Next.js ที่โหลดไวระดับมิลลิวินาที พร้อมระบบ Conversion API (CAPI) ที่ส่งข้อมูลลูกค้าตัวจริงกลับไปเทรน AI โฆษณาให้ฉลาดขึ้น 10 เท่า เลิกตำน้ำพริกละลายแม่น้ำกับเว็บสำเร็จรูปที่โหลดช้า",

  image: "/images/services/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",

  // [PRICING_MASTER]: ราคากลางสำหรับ Sale Page (คุ้มค่าเมื่อเทียบกับผลลัพธ์)
  price: "3,500",
  priceValue: 3500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  // [THEME_STANDARD]: ธีม Neon Rose (Vibrant Pink/Dark)
  // จิตวิทยา: สีแดง/ชมพูสดกระตุ้น Heart Rate และความอยากซื้อ (Impulse Buying)
  theme: {
    mode: "dark", // Dark Mode ช่วยให้สินค้าและปุ่ม CTA ดูโดดเด่นที่สุด
    primary: "#f43f5e", // Rose 500: สีหลักสดใส กระตุ้น Action
    secondary: "#881337", // Rose 900: สีพื้นหลังส่วนลึก
    background: "#0f0505", // Obsidian: ดำเกือบสนิท (Premium Dark)
    foreground: "#fff1f2", // Rose 50: ตัวหนังสืออ่านง่าย
    accent: "#fb7185", // Rose 400: สีปุ่มรองหรือ Highlight
    gradient: "from-[#f43f5e]/20 via-transparent to-transparent", // Glow Effect
  },

  // [TRUST_SIGNAL]
  clientTrust:
    "Performance Proven: ช่วยธุรกิจลดต้นทุนต่อการทัก (Cost per Message) เฉลี่ย 40% หลังเปลี่ยนมาใช้โครงสร้างนี้",

  benefits: [
    "Instant Load: โหลดเสร็จในพริบตา (0.5s) ลูกค้าไม่กดออกเพราะรอนาน ช่วยดันคะแนน Quality Score ของโฆษณา",
    "Smart Pixel Integration: ฝัง Facebook Pixel & TikTok Pixel แบบ Advanced Matching เก็บ Data ลูกค้าได้แม่นยำกว่าคู่แข่ง",
    "Bot-Friendly: โครงสร้าง Clean Code ที่ AI ของแพลตฟอร์มโฆษณาชอบ ช่วยให้คอนเทนต์ถูกนำส่งได้ดีขึ้น",
  ],

  coreFeatures: [
    {
      title: "Server-Side CAPI",
      description: "ส่ง Event การซื้อจากเซิร์ฟเวอร์โดยตรง แก้ปัญหา iOS 14+ บล็อกการติดตาม",
      icon: "Activity",
    },
    {
      title: "Auto-Line Notification",
      description: "แจ้งเตือนออเดอร์ใหม่เข้า LINE OA ทันที (Real-time) ไม่พลาดทุกยอดขาย",
      icon: "MessageCircle",
    },
    {
      title: "Sticky CTA Bar",
      description:
        "แถบปุ่ม 'ซื้อเลย / แอดไลน์' ที่ตามติดหน้าจอโทรศัพท์ตลอดเวลา เพิ่มโอกาสกด 2 เท่า",
      icon: "MousePointerClick",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้อง Next.js ไม่ใช้ WordPress หรือเว็บสำเร็จรูป?",
      answer:
        "เพราะ 'ความเร็ว' คือเงินครับ Next.js โหลดไวกว่ามาก และไม่มีปัญหาระบบล่มหรือโดนแฮกเหมือน CMS เก่าๆ ที่สำคัญคือจ่ายครั้งเดียวจบ เป็นกรรมสิทธิ์ของคุณ 100%",
    },
    {
      question: "Conversion API (CAPI) สำคัญแค่ไหน?",
      answer:
        "สำคัญที่สุดในยุคนี้ครับ เพราะ Browser เริ่มบล็อกการเก็บข้อมูล (Cookie) การใช้ CAPI จะช่วยกู้คืนข้อมูลลูกค้าที่หายไปกลับมาได้ถึง 30-40% ทำให้แอดแม่นขึ้น",
    },
    {
      question: "ไม่มีพื้นฐานเทคนิคเลย ดูแลยากไหม?",
      answer:
        "ไม่ต้องดูแลเลยครับ ผมเซ็ตระบบให้จบพร้อมใช้งาน หน้าที่ของคุณคือแค่เอาลิงก์ไปยิงแอด แล้วรอตอบแชทลูกค้าครับ",
    },
    {
      question: "แก้ไขข้อมูลสินค้าเองได้ไหม?",
      answer:
        "ได้ครับ ผมมีระบบหลังบ้าน (Admin Panel) ให้คุณเข้าไปแก้ราคา เปลี่ยนรูป หรือแก้ข้อความโปรโมชั่นได้เองง่ายๆ ผ่านมือถือครับ",
    },
    {
      question: "รวมโดเมนและโฮสติ้งไหม?",
      answer:
        "แพ็กเกจนี้ยังไม่รวมครับ แต่ผมมีบริการจดโดเมนและเช่า Cloud Server ความเร็วสูงให้ในราคาต้นทุน พร้อมดูแลความปลอดภัยให้ฟรีครับ",
    },
  ],

  keywords: [
    "รับทำ Sale Page ยิงแอด",
    "ทำ Landing Page TikTok",
    "ติดตั้ง Conversion API",
    "Sale Page Next.js",
    "เว็บหน้าเดียว ขายของออนไลน์",
  ],

  priority: 1, // สินค้าขายดีอันดับ 1
  isFeatured: true,
};
