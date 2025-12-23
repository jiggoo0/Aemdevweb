/** @format */
export const cafeMock = {
  // ✅ เปลี่ยน Key ให้ตรงกับ URL ที่คุณเรียก: aem-cafe-industrial
  "aem-cafe-industrial": {
    id: "aem-cafe-industrial",
    variant: "cafe",
    name: { th: "เอ็ม คาเฟ่ อินดัสเทรียล", en: "AEM Cafe Industrial" },
    primaryColor: "#451a03", // สีน้ำตาลเข้มเกือบดำ สไตล์เท่ๆ
    phone: "099-888-7777",
    lineId: "@aemcafe",
    googleMapUrl: "https://maps.app.goo.gl/xxxx",
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
    menu: [
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
    openingHours: [
      {
        day: { th: "เปิดให้บริการทุกวัน", en: "Open Daily" },
        time: "08:30 - 18:00",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d744264?q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80",
    ],
  },

  // ✅ เก็บตัวเดิมไว้เผื่อคุณใช้ URL อื่นทดสอบ
  "cafe-solution-01": {
    id: "cafe-solution-01",
    variant: "cafe",
    name: { th: "อารมณ์ดี คาเฟ่", en: "Arom-D Cafe" },
    primaryColor: "#7c2d12",
    phone: "099-888-7777",
    lineId: "@aromdcafe",
    hero: {
      title: { th: "รสชาติของความสุขในทุกแก้ว", en: "Happiness in Every Sip" },
      subtitle: {
        th: "เมล็ดกาแฟคัดพิเศษ บรรยากาศอบอุ่นสไตล์โฮมมี่",
        en: "Premium beans & Cozy homey atmosphere",
      },
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80",
    },
    menu: [
      { name: { th: "อเมริกาโน่น้ำส้ม", en: "Orange Americano" }, price: "85" },
    ],
    openingHours: [
      {
        day: { th: "วันจันทร์ - วันศุกร์", en: "Mon - Fri" },
        time: "07:30 - 18:00",
      },
    ],
  },
}
