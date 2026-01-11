/** @format */

export const clinicConfig = {
  id: "clinic",
  name: "AEM Medical Center",
  // SEO & Open Graph Configuration
  metadata: {
    title: "AEM Medical Center | ผู้เชี่ยวชาญด้านการดูแลสุขภาพเฉพาะทาง",
    description:
      "บริการทางการแพทย์ระดับพรีเมียม ด้วยเทคโนโลยีทันสมัยและทีมแพทย์ผู้เชี่ยวชาญ เพื่อคุณภาพชีวิตที่ดีขึ้นของคุณ",
    ogImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200&h=630",
    keywords: [
      "คลินิกเฉพาะทาง",
      "ตรวจสุขภาพ",
      "AEM Medical",
      "นัดหมายแพทย์ออนไลน์",
    ],
  },
  // Theme Color System (Sky Blue & Health Green)
  theme: {
    primary: "#0EA5E9", // Sky Blue
    secondary: "#F0F9FF", // Light Azure
    accent: "#22C55E", // Health Green
    surface: "#FFFFFF",
    text: "#334155",
  },
  // Content Database
  content: {
    hero: {
      title: "Your Health, Our Priority",
      subtitle:
        "ดูแลคุณด้วยหัวใจ มอบมาตรฐานการรักษาระดับสากล พร้อมเทคโนโลยีการวินิจฉัยที่แม่นยำ เพื่อสุขภาพที่ดีอย่างยั่งยืน",
      cta: "นัดหมายแพทย์ด่วน",
      /**
       * ✅ แนะนำให้ใช้ Path นี้หากคุณมีไฟล์ใน public/images/template/clinic/hero-bg.webp
       * หากยังไม่มีไฟล์จริง ให้ใช้ URL Unsplash ด้านล่างแทนชั่วคราว
       */
      image: "/images/template/clinic/hero-bg.webp",
      // fallbackImage หากในเครื่องยังไม่มีไฟล์: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800"
    },
    services: [
      {
        title: "ตรวจสุขภาพทั่วไป",
        detail:
          "โปรแกรมตรวจเช็คสุขภาพประจำปีที่ครอบคลุมทุกช่วงวัย พร้อมคำแนะนำจากแพทย์ผู้เชี่ยวชาญโดยตรง",
      },
      {
        title: "คลินิกเฉพาะทาง",
        detail:
          "ศูนย์รวมทีมแพทย์ผู้เชี่ยวชาญเฉพาะทางหลากหลายสาขา พร้อมเครื่องมือทางการแพทย์ที่ทันสมัย",
      },
      {
        title: "ศูนย์กายภาพบำบัด",
        detail:
          "ฟื้นฟูร่างกายและกล้ามเนื้อด้วยเทคโนโลยีสมัยใหม่และนักกายภาพบำบัดมืออาชีพที่ดูแลอย่างใกล้ชิด",
      },
      {
        title: "ศูนย์ทันตกรรม",
        detail:
          "บริการดูแลสุขภาพช่องปากและฟัน ครบวงจร ทั้งการจัดฟัน รากเทียม และทันตกรรมเพื่อความงาม",
      },
    ],
    contact: {
      address: "456 Wellness Avenue, Sukhumvit, Bangkok 10110",
      phone: "02-123-4567",
      email: "contact@aemmedical.com",
      openHours: "จันทร์ - อาทิตย์ (08:00 - 20:00)",
      lineId: "@aem.medical",
      googleMapsUrl: "https://goo.gl/maps/example-clinic",
    },
    // เพิ่มเติมเพื่อใช้ในหน้า Hero Section
    socialProof: {
      patientCount: "2,500+",
      avatars: [
        "https://i.pravatar.cc/100?img=11",
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=13",
      ],
    },
  },
}

export type ClinicConfig = typeof clinicConfig
