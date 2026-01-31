/** @format */
import { SeoServiceItem } from "@/types/seo";

/**
 * [SEO SERVICE NODE]: Entity & Local Authority
 * พิกัดการจูนตัวตนธุรกิจบนแผนที่และระบบ Knowledge Graph เพื่อครองพื้นที่การค้นหาท้องถิ่น
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB 2026)
 */
export const entityLocalAuthorityData: SeoServiceItem = {
  id: "seo-entity-003",
  slug: "entity-local-authority",
  title: "Entity & Local Authority",
  subtitle:
    "พิกัด Local SEO ปักหมุดแม่นยำ ดันตัวตนธุรกิจให้ Google และ AI มั่นใจ",
  description:
    "จัดการพิกัดข้อมูลธุรกิจ (NAP) และโครงสร้าง Entity Authority ให้แข็งแกร่ง เพื่อยืนยันตัวตนกับ Google Bot ว่าคุณคือตัวจริงในพื้นที่ เพิ่มโอกาสติดอันดับบน Map Pack และหน้าแรกการค้นหาท้องถิ่น",
  iconName: "MapPin",
  painPoints: [
    "หมุดร้านค้าบน Google Maps แสดงผลผิดพลาด หรือถูกคู่แข่งบดบังพิกัดสำคัญ",
    "ข้อมูลชื่อ ที่อยู่ เบอร์โทร (NAP) กระจัดกระจายและไม่ตรงกันในแต่ละแพลตฟอร์ม",
    "บอทสับสนและไม่สามารถเชื่อมโยงความสัมพันธ์ระหว่าง 'เว็บไซต์' กับ 'สถานที่จริง' ได้",
    "ขาดความน่าเชื่อถือ (Trust) ในระดับท้องถิ่น ทำให้ Google ไม่ดันอันดับให้",
  ],
  features: [
    "Advanced NAP Tuning: จูนข้อมูลชื่อ-ที่อยู่-เบอร์โทร ให้เป็นมาตรฐานพิกัดเดียวทั่วโลกอินเทอร์เน็ต",
    "Local Business Schema Mastery: ฝังรหัสโครงสร้างพิกัดภูมิศาสตร์และประเภทธุรกิจเชิงลึก",
    "SameAs Entity Mapping: เชื่อมโยงพิกัดโซเชียลมีเดียและแหล่งอ้างอิงทุกจุดเข้ากับเว็บไซต์หลัก",
    "GMB Performance Tuning: ปรับแต่ง Google Business Profile ให้รองรับเกณฑ์มาตรฐานปี 2026",
  ],
  benefits: [
    {
      title: "Map Pack Dominance",
      desc: "ยึดพื้นที่หน้าแรกบน Google Maps เมื่อมีการค้นหาบริการในพิกัดใกล้เคียง",
    },
    {
      title: "E-E-A-T Trust Building",
      desc: "สร้างความน่าเชื่อถือสูงสุดในสายตา AI ผ่านการยืนยันตัวตนที่แม่นยำและตรวจสอบได้",
    },
  ],
  pricing: {
    price: 8900, // [SYNCED]: ปรับจูนราคาให้สอดคล้องกับ Local Specialist Hub
    label: "8,900",
    currency: "THB",
    suffix: "/ ระบบ",
    isPopular: false,
  },
  faq: [
    {
      question: "ต้องมีหน้าร้านจริงเท่านั้นถึงจะทำได้ใช่ไหม?",
      answer:
        "ไม่จำเป็นครับ ธุรกิจบริการที่ไม่มีหน้าร้าน (Service Area Business) ก็สามารถจูนพิกัดตัวตนเพื่อครองพื้นที่การค้นหาในท้องถิ่นได้เช่นกันครับ",
    },
    {
      question: "เห็นผลภายในกี่วัน?",
      answer:
        "พิกัดข้อมูลจะเริ่มถูก Google AI จัดลำดับใหม่ภายใน 2-4 สัปดาห์หลังการจูนระบบสมบูรณ์ครับ",
    },
  ],
};
