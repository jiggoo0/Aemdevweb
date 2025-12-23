/** @format */
export const realEstateMock = {
  // ✅ เพิ่ม Key ให้ตรงกับ URL ที่คุณเพิ่งเรียก
  "real-estate-premium-01": {
    id: "real-estate-premium-01",
    variant: "real-estate",
    name: { th: "เดอะ พรีเมียม เรสซิเดนซ์", en: "The Premium Residence" },
    primaryColor: "#1e293b",
    phone: "02-999-8888",
    lineId: "@thepremium",
    hero: {
      title: {
        th: "ที่สุดแห่งการใช้ชีวิตเหนือระดับ",
        en: "Ultimate Luxury Living",
      },
      subtitle: {
        th: "คอนโดหรูพร้อมอยู่ ใจกลางทองหล่อ",
        en: "Ready-to-move-in luxury condo at Thong Lor",
      },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80",
    },
    roomTypes: [
      {
        name: { th: "Penthouse Suite", en: "Penthouse Suite" },
        size: "120 sq.m.",
        price: "25M",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80",
        features: ["Private Pool", "270 Degree View"],
      },
    ],
    locationInsight: {
      title: { th: "ทำเลทองหล่อ", en: "Thong Lor Location" },
      description: {
        th: "ใกล้แหล่งไลฟ์สไตล์ระดับโลก",
        en: "World-class lifestyle hub",
      },
      nearbyPlaces: [],
    },
  },

  // ตัวเก่าก็ยังเก็บไว้ได้
  "real-estate-solution-01": {
    id: "real-estate-solution-01",
    variant: "real-estate",
    name: { th: "เดอะ ลักซูรี่ เรสซิเดนซ์", en: "The Luxury Residence" },
    // ... ข้อมูลเดิม
  },
}
