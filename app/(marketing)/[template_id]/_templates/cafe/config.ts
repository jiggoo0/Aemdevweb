/** @format */

export const cafeConfig = {
  id: "cafe",
  name: "Premium Cafe & Restaurant",

  // ✅ เพิ่ม metadata เพื่อให้ตรงกับ TemplateEntry interface ใน registry.ts
  metadata: {
    title: "Premium Specialty Cafe | Experience the Art of Coffee",
    description:
      "สัมผัสประสบการณ์กาแฟพิเศษและขนมอบโฮมเมดในบรรยากาศพรีเมียมใจกลางเมือง",
    ogImage: "/images/template/cafe/cafe-hero.webp",
  },

  theme: {
    primary: "#4A3428", // Coffee Brown
    secondary: "#F5F5DC", // Beige
    accent: "#D4AF37", // Gold
  },

  content: {
    hero: {
      title: "Experience the Art of Specialty Coffee",
      subtitle: "บรรยากาศที่ลงตัว พร้อมรสชาติกาแฟที่คุณจะลืมไม่ลง",
      cta: "จองโต๊ะตอนนี้",
    },

    // สำหรับส่วนสิทธิประโยชน์หรือจุดเด่นของร้าน
    features: [
      "Specialty Coffee Beans",
      "Homemade Bakery",
      "Co-working Space & Free Wi-Fi",
      "Pet-Friendly Area",
    ],

    // รายการบริการหลัก
    services: [
      {
        title: "Signature Drinks",
        detail: "กาแฟสูตรพิเศษจากบาริสต้ามืออาชีพที่พิถีพิถันทุกแก้ว",
      },
      {
        title: "Bakery & Brunch",
        detail: "ขนมอบสดใหม่จากเตาและอาหารเช้าสไตล์ยุโรป",
      },
      {
        title: "Event Hosting",
        detail: "พื้นที่ส่วนตัวสำหรับจัดงานเลี้ยงและประชุมขนาดเล็ก",
      },
    ],

    // ข้อมูลติดต่อและการนำทาง
    contact: {
      address: "123 Creative Street, Bangkok",
      phone: "08X-XXX-XXXX",
      lineId: "@premiumcafe",
      openHours: "08:00 - 18:00 (Everyday)",
      mapsUrl: "https://goo.gl/maps/example",
    },
  },
}
