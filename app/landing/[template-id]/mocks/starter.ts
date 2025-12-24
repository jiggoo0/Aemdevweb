/** @format */
import { StarterTemplateProps } from "../types"

export const starterMock: Record<string, StarterTemplateProps> = {
  "starter-landing-01": {
    id: "starter-landing-01",
    variant: "starter",
    name: { th: "AEM DEV WEB", en: "AEM DEV WEB" },
    primaryColor: "#2563eb", // สีน้ำเงิน Blue 600 เพื่อความน่าเชื่อถือแบบ Tech
    phone: "081-234-5678",
    lineId: "@aemdev",
    defaultLanguage: "th",

    // 🏗️ 1. Hero Layer
    hero: {
      title: {
        th: "ยกระดับธุรกิจด้วยเว็บไซต์วิศวกรรมล่าสุด",
        en: "Elevate Your Business with Engineering Excellence",
      },
      subtitle: {
        th: "Landing Page ประสิทธิภาพสูง พัฒนาด้วย Next.js 15 เพื่อยอดขายที่โตขึ้นของ SME",
        en: "High-converting landing pages built with Next.js 15 for ambitious SMEs.",
      },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80",
    },

    // 🏗️ 2. Features Layer (FeatureHighlights)
    features: [
      {
        icon: "Zap",
        title: { th: "โหลดไวระดับ Ultra-Fast", en: "Ultra-Fast Loading" },
        description: {
          th: "ทำคะแนน Core Web Vitals ได้ดีเยี่ยม ส่งผลบวกต่อการทำ SEO",
          en: "Optimized for Core Web Vitals to boost your Google search ranking.",
        },
      },
      {
        icon: "ShieldCheck",
        title: { th: "ความปลอดภัยระดับสูง", en: "Enterprise Security" },
        description: {
          th: "ปกป้องข้อมูลด้วยมาตรฐานความปลอดภัยล่าสุดจาก Vercel Edge",
          en: "Protect your data with the latest security standards from Vercel Edge.",
        },
      },
      {
        icon: "Layout",
        title: { th: "ดีไซน์ Neobrutalism", en: "Unique Design" },
        description: {
          th: "โดดเด่นไม่ซ้ำใคร ด้วยดีไซน์ที่เน้นความดิบและทันสมัย",
          en: "Stand out with a modern industrial and neobrutalist aesthetic.",
        },
      },
    ],

    // 🏗️ 3. Trust Badges Layer
    badges: [
      {
        icon: "Award",
        title: { th: "มาตรฐาน Next.js 15", en: "Next.js 15 Standard" },
        description: {
          th: "ใช้เทคโนโลยีล่าสุดของปี 2025",
          en: "Built with the latest tech stack of 2025.",
        },
      },
      {
        icon: "Globe",
        title: { th: "รองรับ Multi-lang", en: "Multi-language Ready" },
        description: {
          th: "ขยายธุรกิจไปต่างประเทศได้ทันที",
          en: "Ready to scale your business globally.",
        },
      },
      {
        icon: "Code2",
        title: { th: "Clean Code", en: "Clean Code" },
        description: {
          th: "ปรับแต่งง่าย โครงสร้างเป็นระเบียบ",
          en: "Highly maintainable and organized structure.",
        },
      },
    ],

    // 🏗️ 4. Social Proof Layer
    socialProof: [
      {
        id: 1,
        name: "คุณสมชาย เจ้าของธุรกิจโรงงาน",
        role: "Managing Director",
        comment: {
          th: "ตั้งแต่ใช้บริการ AEM DEV เว็บไซต์โหลดไวขึ้นมาก ลูกค้าติดต่อผ่านฟอร์มเยอะขึ้นอย่างเห็นได้ชัด",
          en: "Since using AEM DEV, the site is much faster. Leads from the contact form have increased significantly.",
        },
        rating: 5,
      },
      {
        id: 2,
        name: "คุณวิภาดา เจ้าของคาเฟ่",
        role: "Cafe Founder",
        comment: {
          th: "ดีไซน์เท่มากค่ะ เข้ากับคอนเซปต์ร้านที่เป็นอินดัสเทรียลสุดๆ ทีมงานดูแลดีมาก",
          en: "The design is very cool and fits our industrial concept perfectly. Great support team.",
        },
        rating: 5,
      },
    ],

    // 🏗️ 5. FAQ Layer
    faqs: [
      {
        question: { th: "ใช้เวลาทำนานไหม?", en: "How long does it take?" },
        answer: {
          th: "เทมเพลตมาตรฐานของเราสามารถออนไลน์ได้ภายใน 3-5 วันทำการครับ",
          en: "Our standard templates can go live within 3-5 business days.",
        },
      },
      {
        question: {
          th: "แก้ไขดีไซน์ได้หรือไม่?",
          en: "Can I customize the design?",
        },
        answer: {
          th: "แน่นอนครับ เราออกแบบมาให้ปรับเปลี่ยนสี ฟอนต์ และรูปภาพได้ตามแบรนด์ของคุณ",
          en: "Absolutely. Colors, fonts, and images can be customized to fit your brand.",
        },
      },
    ],

    // 🏗️ 6. Form Content
    form: {
      title: {
        th: "เริ่มสร้างเว็บไซต์ของคุณวันนี้",
        en: "Start Your Project Today",
      },
      description: {
        th: "กรอกข้อมูลเบื้องต้น ทีมวิศวกรของเราจะติดต่อกลับภายใน 24 ชม.",
        en: "Fill in the details and our engineer will contact you back within 24 hours.",
      },
    },

    // 🟢 AEM Infrastructure Info
    aemService: {
      supportLevel: "Priority Support",
      infrastructure: {
        framework: "Next.js 15",
        hosting: "Edge Network",
      },
    },
  },
}
