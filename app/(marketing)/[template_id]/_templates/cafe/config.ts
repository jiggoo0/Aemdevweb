/** @format */
// ----------------------------------------------------
// 🏗️ CAFE CONFIGURATION (NAMED EXPORT)
// Path: app/(marketing)/[template_id]/_templates/cafe/config.ts
// Fix: Added explicit named export to resolve import errors
// ----------------------------------------------------

export const cafeConfig = {
  id: "template-cafe-industrial",
  name: "THE SOURCE ROASTERS",
  themeColor: "#1e3932", // Deep Forest Green
  secondaryColor: "#d4e9e2", // Mint Cream

  metadata: {
    title: "The Source Roasters | Premium Cafe Template by AEMDEVWEB",
    description:
      "ยกระดับร้านกาแฟของคุณด้วยระบบเว็บไซต์ Digital Menu สไตล์ Industrial Modern โหลดไว พร้อมระบบสะสมแต้ม",
    ogImage:
      "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/og-image.jpg",
  },

  content: {
    // --- Hero Section ---
    heroTitle: "CRAFTED_FOR_PERFECTION",
    heroSubtitle:
      "ประสบการณ์กาแฟระดับ Specialty ในบรรยากาศ Industrial Modern ที่ออกแบบมาเพื่อคุณ",

    // --- Value Propositions ---
    features: [
      {
        id: 1,
        label: "DIRECT_TRADE_BEANS",
        detail: "เมล็ดกาแฟคัดพิเศษส่งตรงจากเกษตรกรไทยและแหล่งปลูกระดับโลก",
      },
      {
        id: 2,
        label: "ARTISAN_ROASTERY",
        detail:
          "คั่วสดใหม่ในโรงคั่วของเราเอง ควบคุมโปรไฟล์รสชาติด้วยระบบดิจิทัล",
      },
      {
        id: 3,
        label: "CO-CREATIVE_SPACE",
        detail:
          "พื้นที่กว้างขวาง ปลั๊กไฟครบครัน รองรับทั้งการพักผ่อนและการทำงาน",
      },
    ],

    // --- Digital Menu Mockup ---
    menuItems: [
      {
        id: "1",
        name: "SIGNATURE_ESPRESSO",
        price: "120",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/espresso.webp",
        desc: "กาแฟคั่วเข้ม Body หนักแน่น พร้อม Notes ของ Dark Chocolate และ Caramelized",
      },
      {
        id: "2",
        name: "DIRTY_SOUL",
        price: "155",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/dirty.webp",
        desc: "กาแฟสกัดเข้มข้น On-top บนนมเย็นจัดสูตรลับเฉพาะ ให้สัมผัสแยกชั้นที่กลมกล่อม",
      },
      {
        id: "3",
        name: "VELVET_LATTE",
        price: "145",
        currency: "THB",
        img: "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Template/cafe/latte.webp",
        desc: "สัมผัสนุ่มละมุนดุจผ้ากำมะหยี่ จากนมคุณภาพเยี่ยมและกาแฟคั่วกลาง (Medium Roast)",
      },
    ],

    // --- Services & CRM (Upsell Features) ---
    memberBenefits: [
      "ระบบสมาชิกดิจิทัล สะสมแต้มง่ายๆ ผ่านเบอร์โทรศัพท์",
      "สิทธิพิเศษวันเกิด รับส่วนลดพิเศษอัตโนมัติ",
      "ระบบจองโต๊ะล่วงหน้า ผ่านหน้าเว็บได้ทันที",
      "เชื่อมต่อ LINE OA รับข่าวสารและโปรโมชั่นใหม่ๆ",
    ],
  },

  // --- Contact Information ---
  contact: {
    address: "123 Industrial Park, Sukhumvit Rd, Bangkok",
    googleMap: "https://goo.gl/maps/example",
    openHours: "Mon - Sun | 08:00 AM - 06:00 PM",
    social: {
      line: "@thesourceroasters",
      facebook: "thesourceroasters",
      instagram: "thesourceroasters",
    },
  },
}
