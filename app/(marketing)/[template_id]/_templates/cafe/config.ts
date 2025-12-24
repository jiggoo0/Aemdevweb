// app/(marketing)/[template_id]/_templates/cafe/config.ts
export const cafeConfig = {
  id: "cafe",
  name: "AEMDEVWEB CAFE",
  themeColor: "#1e3932", // สีเขียว Starbucks Signature
  secondaryColor: "#d4e9e2", // สีเขียวอ่อน/มิ้นท์
  metadata: {
    title: "Cafe Aemdevweb | Experience the Perfect Brew",
    description:
      "พื้นที่สร้างสรรค์ของเหล่านักพัฒนาและคนรักกาแฟ กลิ่นอาย Starbucks สไตล์ Modern Industrial",
    ogImage: "/images/projects/smj-cafe.jpg",
  },
  content: {
    heroTitle: "BREW_AND_CODE",
    heroSubtitle: "Crafting exceptional coffee for exceptional developers.",
    features: [
      {
        id: 1,
        label: "PREMIUM_BEANS",
        detail: "เมล็ดกาแฟคัดพิเศษระดับ Micro-lot",
      },
      {
        id: 2,
        label: "DEV_FRIENDLY",
        detail: "ปลั๊กไฟครบ สัญญาณ Wi-Fi ระดับ Fiber",
      },
      {
        id: 3,
        label: "SIGNATURE_MENU",
        detail: "เมนูพิเศษที่มีเฉพาะที่นี่ที่เดียว",
      },
    ],
    menuItems: [
      {
        id: "1",
        name: "ESPRESSO_CORE",
        price: "120.00 THB",
        img: "/images/cafe/espresso.webp",
        desc: "กาแฟคั่วเข้ม สกัดด้วยแรงดันสูง เพื่อความเข้มข้นถึงขีดสุด",
      },
      {
        id: "2",
        name: "CODE_LATTE",
        price: "145.00 THB",
        img: "/images/cafe/latte.webp",
        desc: "ลาเต้ร้อน/เย็น ผสมผสานอย่างลงตัว เพื่อการเขียนโค้ดที่ลื่นไหล",
      },
      {
        id: "3",
        name: "BUG_FIX_TEA",
        price: "110.00 THB",
        img: "/images/cafe/tea.webp",
        desc: "ชาสมุนไพรสูตรพิเศษ คลายความเครียดจากการ Debug",
      },
      {
        id: "4",
        name: "MEMORY_LEAK_CAKE",
        price: "95.00 THB",
        img: "/images/cafe/cake.webp",
        desc: "เค้กช็อกโกแลตเข้มข้น อร่อยจนลืม Memory Leak ไปเลย",
      },
    ],
    memberBenefits: [
      "สะสมคะแนนทุกการสั่งซื้อ",
      "ส่วนลดพิเศษสำหรับเมนูใหม่",
      "เข้าถึง Exclusive Wi-Fi Zone",
      "กิจกรรม Workshop พิเศษสำหรับสมาชิก",
    ],
  },
}
