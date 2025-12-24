/** @format */
import { CafeTemplateProps } from "../types"

export const cafeMock: Record<string, CafeTemplateProps> = {
  "aem-cafe-industrial": {
    id: "aem-cafe-industrial",
    variant: "cafe",
    name: { th: "เอ็ม คาเฟ่ อินดัสเทรียล", en: "AEM Cafe Industrial" },
    primaryColor: "#451a03",
    phone: "099-888-7777",
    lineId: "@aemcafe",
    address: "123 Industrial Road, Bangkok, Thailand", // เพิ่มสำหรับ Footer
    googleMapUrl: "https://maps.google.com/...",
    defaultLanguage: "th",

    // 🟢 AEM DEV LAYER: บริการที่คุณมอบให้จริง
    aemService: {
      supportLevel: "Direct Developer Support",
      infrastructure: {
        framework: "Next.js 15 (App Router)",
        hosting: "Cloud-Native Vercel/Edge",
      },
      standardFeatures: [], // จะไปดึงค่า Default ใน ServiceInclusionSection
    },

    // 🔵 CAFE CONTENT LAYER: ธุรกิจจำลอง
    hero: {
      title: {
        th: "รสชาติเข้มข้น ในบรรยากาศโรงงานเหล็ก",
        en: "Strong Taste, Industrial Vibe",
      },
      subtitle: {
        th: "กาแฟคั่วเข้มพิเศษ สำหรับคนรักความดิบเท่",
        en: "Special dark roast for industrial lovers",
      },
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80",
    },
    menu: {
      categories: [
        {
          name: { th: "เมนูแนะนำ", en: "Signature Drinks" },
          items: [
            {
              name: { th: "เดอร์ตี้ คอฟฟี่", en: "Dirty Coffee" },
              price: "105",
              description: {
                th: "นมเย็นจัดราดด้วยช็อตเอสเพรสโซ่เข้มข้น",
                en: "Cold milk topped with intense espresso shot",
              },
            },
            {
              name: { th: "แบล็คโกโก้", en: "Black Cocoa" },
              price: "90",
              description: {
                th: "โกโก้เข้มข้นสูตรพิเศษ สีดำดุดัน",
                en: "Signature intense black cocoa",
              },
            },
          ],
        },
      ],
    },
    openingHours: [
      {
        day: "เปิดให้บริการทุกวัน", // หรือใช้ { th: "...", en: "..." } ตาม Type
        time: "08:30 - 18:00",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80",
    ],
  },
}
