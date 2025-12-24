/** @format */
import { ClinicTemplateProps } from "../types"

export const clinicMock: Record<string, ClinicTemplateProps> = {
  "clinic-solution-01": {
    id: "clinic-solution-01",
    variant: "clinic",
    name: { th: "เอ็ม เอสเตติก คลินิก", en: "M Aesthetic Clinic" },
    primaryColor: "#0d9488", // สี Teal สื่อถึงความสะอาดและสุขภาพ
    phone: "02-123-4567",
    lineId: "@mclinic",
    address: "99 M-Tower, Sukhumvit Rd, Bangkok",
    defaultLanguage: "th",

    // 🟢 AEM DEV LAYER: วิศวกรรมเบื้องหลัง (Real Service)
    aemService: {
      supportLevel: "Direct Developer Support",
      infrastructure: {
        framework: "Next.js 15 (App Router)",
        hosting: "Cloud-Native Vercel/Edge",
      },
      standardFeatures: [], // ใช้ค่า Default จาก ServiceInclusionSection
    },

    // 🔵 CLINIC CONTENT LAYER: ธุรกิจจำลอง (Mock Business)
    hero: {
      title: { th: "ดูแลผิวคุณด้วยผู้เชี่ยวชาญ", en: "Expert Skin Care" },
      subtitle: {
        th: "มั่นใจในผลลัพธ์ที่พิสูจน์ได้จริง กับนวัตกรรมระดับโลก",
        en: "Confidence in proven results with world-class innovation",
      },
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80",
    },
    doctors: [
      {
        name: { th: "นพ. วิทยา ใจดี", en: "Dr. Wittaya" },
        specialty: {
          th: "ผู้เชี่ยวชาญด้านผิวพรรณ",
          en: "Dermatologist Specialist",
        },
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80",
        after:
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80",
        label: { th: "รักษาสิว", en: "Acne Treatment" },
      },
    ],
    socialProof: [
      {
        name: "คุณเปิ้ล",
        content: "คุณหมอให้คำปรึกษาดีมากค่ะ ประทับใจผลลัพธ์",
        rating: 5,
      },
    ],
  },
}
