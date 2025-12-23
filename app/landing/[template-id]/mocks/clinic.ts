/** @format */
export const clinicMock = {
  // ✅ เปลี่ยน Key ให้ตรงกับ URL ที่คุณเรียก (clinic-solution-01)
  "clinic-solution-01": {
    id: "clinic-solution-01",
    variant: "clinic",
    name: { th: "เอ็ม เอสเตติก คลินิก", en: "M Aesthetic Clinic" },
    primaryColor: "#0d9488",
    phone: "02-123-4567",
    lineId: "@mclinic",
    hero: {
      title: { th: "ดูแลผิวคุณด้วยผู้เชี่ยวชาญ", en: "Expert Skin Care" },
      subtitle: {
        th: "มั่นใจในผลลัพธ์ที่พิสูจน์ได้จริง",
        en: "Confidence in proven results",
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
          "https://images.unsplash.com/photo-1512290902246-0902246-0902246",
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
