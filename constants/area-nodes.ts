/**
 * [SYSTEM CORE]: AREA_NODES_DATA v17.6.2 (CLEANED)
 * [AI-MANDATE]: DO NOT ALTER 'templateSlug' VALUES OR SCHEMA STRUCTURE.
 * [STRATEGY]: Economic Hubs | Local Dominance | Business Intelligence
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { AreaNode } from "@/types";

/**
 * @description คลังข้อมูลพิกัดยุทธศาสตร์สำหรับการทำ Local SEO และ Dynamic Rendering
 * @note templateSlug "new-service-name" ถูกล็อคไว้สำหรับระบบ Local Authority ชุดใหม่ ห้ามเปลี่ยนกลับเป็น "local"
 */
export const AREA_NODES: readonly AreaNode[] = [
  // --- [TIER 1]: MASTER ECONOMIC HUBS (ศูนย์กลางเศรษฐกิจและเทคโนโลยี) ---
  {
    slug: "bangkok",
    province: "กรุงเทพมหานคร",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ กรุงเทพฯ | มาตรฐาน Corporate ระดับสากล & Technical SEO สำหรับองค์กรชั้นนำ",
    description:
      "บริการ Web Development และ SEO Strategy สำหรับบริษัทที่ต้องการความเป็นเลิศในตลาดที่มีการแข่งขันสูงสุด",
    longDescription:
      "กรุงเทพฯ คือศูนย์กลางเศรษฐกิจดิจิทัล การมีแค่เว็บไซต์ไม่เพียงพอ แต่ต้องเป็นสินทรัพย์ดิจิทัลที่ทรงพลัง เราให้บริการออกแบบเว็บไซต์มาตรฐานองค์กร (Corporate Grade) และ E-commerce System ที่รองรับ Traffic มหาศาล พร้อมกลยุทธ์ SEO ที่วางแผนโดย Specialist เพื่อให้แบรนด์ของคุณครองตำแหน่งผู้นำในอุตสาหกรรม",
    districts: ["สาทร", "สีลม", "สุขุมวิท", "ทองหล่อ", "พระราม 9", "ลาดพร้าว", "ปทุมวัน", "บางนา"],
    keywords: [
      "รับทำเว็บไซต์ กรุงเทพ",
      "บริษัท SEO กรุงเทพ",
      "Web Development Bangkok",
      "รับทำเว็บ Corporate",
      "Enterprise SEO Solution",
    ],
    heroImage: "/images/areas/bangkok-node.webp",
    priority: 100,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ กรุงเทพฯ (Bangkok) | บริษัทพัฒนาเว็บไซต์และ SEO มาตรฐานสากล",
    seoDescription:
      "ยกระดับธุรกิจในกรุงเทพฯ ด้วยเว็บไซต์คุณภาพสูงและกลยุทธ์ SEO สายขาว เน้นผลลัพธ์เชิงธุรกิจและการเติบโตที่ยั่งยืน",
    coordinates: { lat: 13.7563, lng: 100.5018 },
  },
  {
    slug: "chon-buri",
    province: "ชลบุรี",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ ชลบุรี พัทยา | โซลูชั่นเว็บอุตสาหกรรม EEC และธุรกิจท่องเที่ยวรองรับหลายภาษา",
    description:
      "ออกแบบเว็บไซต์โรงงาน อสังหาฯ และโรงแรม ในเขต EEC รองรับระบบ Multi-Language (ไทย-อังกฤษ-จีน-ญี่ปุ่น)",
    longDescription:
      "ชลบุรีคือประตูสู่การค้าโลกและ EEC ธุรกิจที่นี่ต้องการความน่าเชื่อถือระดับสากล เราเชี่ยวชาญการทำเว็บไซต์โรงงานอุตสาหกรรมที่เน้นข้อมูลทางเทคนิค และเว็บไซต์ธุรกิจบริการในพัทยาที่ต้องรองรับชาวต่างชาติ ด้วยโครงสร้าง SEO ที่เจาะกลุ่มเป้าหมายได้ทั่วโลก",
    districts: ["เมืองพัทยา", "ศรีราชา", "แหลมฉบัง", "อมตะนคร", "บางแสน", "สัตหีบ"],
    keywords: [
      "รับทำเว็บไซต์ ชลบุรี",
      "รับทำเว็บไซต์ พัทยา",
      "Industrial Web Design",
      "ทำเว็บโรงงาน EEC",
      "รับทำ SEO อสังหาริมทรัพย์",
    ],
    heroImage: "/images/areas/chon-buri-node.webp",
    priority: 99,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ชลบุรี พัทยา | ผู้เชี่ยวชาญเว็บอุตสาหกรรม EEC และธุรกิจส่งออก",
    seoDescription:
      "บริการทำเว็บไซต์ในชลบุรี ศรีราชา พัทยา เน้นมาตรฐานโรงงานและธุรกิจอินเตอร์ รองรับ SEO ภาษาต่างประเทศ",
    coordinates: { lat: 13.3611, lng: 100.9847 },
  },
  {
    slug: "chiang-mai",
    province: "เชียงใหม่",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ เชียงใหม่ | Web Design ผสานอัตลักษณ์ Lanna Modern เพื่อธุรกิจไลฟ์สไตล์",
    description:
      "ยกระดับธุรกิจคาเฟ่ โรงแรม และ Wellness ด้วยดีไซน์ที่เล่าเรื่องราว พร้อมระบบ Booking Engine ที่ทรงประสิทธิภาพ",
    longDescription:
      "เชียงใหม่เมืองแห่งความคิดสร้างสรรค์ เว็บไซต์ของคุณต้องสะท้อน Taste และ Storytelling ที่โดดเด่น เราผสานงานดีไซน์ที่มีเอกลักษณ์เข้ากับเทคโนโลยีเว็บไซต์สมัยใหม่ ช่วยให้ธุรกิจ Boutique Hotel, Cafe และ Tour Agency สามารถเปลี่ยนผู้ชมให้กลายเป็นลูกค้าได้ทันที",
    districts: ["นิมมาน", "เมืองเก่า", "สันกำแพง", "แม่ริม", "หางดง"],
    keywords: [
      "รับทำเว็บไซต์ เชียงใหม่",
      "Chiang Mai Web Design",
      "ทำเว็บโรงแรม Boutique",
      "รับทำ SEO ท่องเที่ยว",
      "Creative Web Agency",
    ],
    heroImage: "/images/areas/chiang-mai-node.webp",
    priority: 98,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ เชียงใหม่ | ออกแบบเว็บสวยมีสไตล์ สำหรับธุรกิจท่องเที่ยวและ Wellness",
    seoDescription:
      "บริการรับทำเว็บไซต์ในเชียงใหม่ ที่เข้าใจ DNA ของธุรกิจไลฟ์สไตล์ เน้นดีไซน์สวยงามและระบบจองที่ใช้งานง่าย",
    coordinates: { lat: 18.7883, lng: 98.9853 },
  },
  {
    slug: "phuket",
    province: "ภูเก็ต",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ ภูเก็ต | Premium Web Design สำหรับธุรกิจ Luxury และตลาดนักท่องเที่ยว High-End",
    description:
      "สร้างภาพลักษณ์ World-Class ให้กับโรงแรม วิลล่า และธุรกิจ Yacht ด้วยเว็บไซต์และ SEO มาตรฐานสากล",
    longDescription:
      "ภูเก็ตคือตลาดระดับโลกที่ต้องการความเป็นเลิศ เราให้บริการออกแบบเว็บไซต์ Luxury ที่เน้น Visual Experience ระดับสูง สำหรับธุรกิจ Real Estate, 5-Star Hospitality และ Marine Tourism พร้อมทำ SEO ภาษาอังกฤษ/รัสเซีย เพื่อดึงดูดกลุ่มลูกค้าที่มีกำลังซื้อสูงโดยตรง",
    districts: ["ป่าตอง", "กะรน", "เชิงทะเล (Laguna)", "ราไวย์", "เมืองภูเก็ต"],
    keywords: [
      "รับทำเว็บไซต์ ภูเก็ต",
      "Phuket Web Design",
      "Luxury Real Estate Website",
      "ทำเว็บโรงแรมภูเก็ต",
      "International SEO",
    ],
    heroImage: "/images/areas/phuket-node.webp",
    priority: 97,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ภูเก็ต (Phuket) | บริการทำเว็บ Luxury Hotel และอสังหาฯ ระดับโลก",
    seoDescription:
      "ผู้เชี่ยวชาญด้าน Premium Website ในภูเก็ต เจาะตลาดชาวต่างชาติและนักลงทุน ด้วยดีไซน์ที่หรูหราและ SEO ประสิทธิภาพสูง",
    coordinates: { lat: 7.8804, lng: 98.3923 },
  },

  // --- [TIER 2]: REGIONAL GROWTH (หัวเมืองเศรษฐกิจภูมิภาค) ---
  {
    slug: "khon-kaen",
    province: "ขอนแก่น",
    templateSlug: "salepage",
    title: "รับทำเว็บไซต์ ขอนแก่น | Digital Hub แห่งอีสาน โซลูชั่นการตลาดออนไลน์และ Sale Page",
    description:
      "เครื่องมือปิดการขายสำหรับ Smart SME และธุรกิจคลินิกความงาม เน้นความรวดเร็วและแม่นยำด้วย Conversion Focus",
    longDescription:
      "ขอนแก่นคือศูนย์กลาง Smart City ของอีสาน ธุรกิจที่นี่ต้องปรับตัวไว เรานำเสนอเครื่องมือการตลาดอย่าง Sale Page (High Conversion) และระบบเว็บไซต์ที่รองรับการยิงโฆษณาเต็มรูปแบบ เหมาะสำหรับธุรกิจความงาม คลินิก และ SME ที่ต้องการสร้างยอดขายผ่านช่องทางออนไลน์อย่างจริงจัง",
    districts: ["เมืองขอนแก่น", "มหาวิทยาลัยขอนแก่น", "ชุมแพ", "บ้านไผ่"],
    keywords: [
      "รับทำเว็บไซต์ ขอนแก่น",
      "รับทำ Sale Page อีสาน",
      "Digital Marketing ขอนแก่น",
      "ทำเว็บคลินิกความงาม",
      "SME Web Solution",
    ],
    heroImage: "/images/areas/khon-kaen-node.webp",
    priority: 95,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ ขอนแก่น | โซลูชั่น Sale Page และการตลาดออนไลน์สำหรับ Smart SME",
    seoDescription:
      "บริการทำเว็บไซต์และ Sale Page ในขอนแก่น ออกแบบมาเพื่อปิดการขายและรองรับ Digital Marketing เต็มรูปแบบ",
    coordinates: { lat: 16.4322, lng: 102.8236 },
  },
  {
    slug: "korat",
    province: "นครราชสีมา",
    templateSlug: "corporate",
    title:
      "รับทำเว็บไซต์ โคราช | ฐานข้อมูลสินค้า (E-Catalog) และเว็บธุรกิจสำหรับโรงงานและผู้รับเหมา",
    description:
      "ระบบจัดการสต็อกสินค้าออนไลน์และเว็บไซต์องค์กร สร้างความน่าเชื่อถือให้ธุรกิจรับเหมาและ Supply Chain",
    longDescription:
      "นครราชสีมาคือประตูสู่อีสานและฐานการผลิตสำคัญ เราช่วยยกระดับธุรกิจรับเหมาก่อสร้าง ร้านวัสดุ และโรงงาน ด้วยระบบ E-Catalog ที่ช่วยบริหารจัดการข้อมูลสินค้าจำนวนมาก และเว็บไซต์ Corporate ที่สร้างความมั่นใจให้กับคู่ค้าและ Supplier",
    districts: ["เมืองนครราชสีมา", "ปากช่อง (เขาใหญ่)", "สีคิ้ว", "วังน้ำเขียว"],
    keywords: [
      "รับทำเว็บไซต์ โคราช",
      "รับทำเว็บไซต์ นครราชสีมา",
      "ทำเว็บรับเหมาก่อสร้าง",
      "ระบบ E-Catalog โคราช",
      "เว็บโรงงานอุตสาหกรรม",
    ],
    heroImage: "/images/areas/korat-node.webp",
    priority: 94,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ โคราช (นครราชสีมา) | ออกแบบเว็บโรงงานและระบบจัดการสินค้าออนไลน์",
    seoDescription:
      "บริการรับทำเว็บไซต์ในโคราช เขาใหญ่ เน้นระบบ E-Catalog และเว็บไซต์องค์กร เพื่อสร้างความน่าเชื่อถือทางธุรกิจ",
    coordinates: { lat: 14.9759, lng: 102.1177 },
  },

  // --- [TIER 3]: LOCAL DOMINANCE (การสร้างรากฐานธุรกิจท้องถิ่น) ---
  {
    slug: "nakhon-sawan",
    province: "นครสวรรค์",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title: "รับทำเว็บไซต์ นครสวรรค์ | ผู้นำตลาดท้องถิ่นด้วย Local SEO และระบบค้นหา Google Maps",
    description:
      "เปลี่ยนร้านค้าดั้งเดิมให้เป็นผู้นำตลาดดิจิทัล ดักจับลูกค้าในพื้นที่ด้วยการค้นหาที่แม่นยำ",
    longDescription:
      "ในยุคที่คนนครสวรรค์ค้นหาทุกอย่างผ่านมือถือ ธุรกิจของคุณต้องเป็น 'ตัวเลือกแรก' ที่ลูกค้าเห็น เราเชี่ยวชาญการทำ Local SEO และปรับแต่ง Google Business Profile เพื่อดึง Traffic จากออนไลน์เข้าสู่หน้าร้านจริง เหมาะสำหรับร้านอาหาร คลินิก และธุรกิจบริการ",
    districts: ["เมืองนครสวรรค์", "ลาดยาว", "ตาคลี", "พยุหะคีรี"],
    keywords: [
      "รับทำเว็บไซต์ นครสวรรค์",
      "Local SEO นครสวรรค์",
      "ปักหมุด Google Maps",
      "Digital Transformation",
    ],
    heroImage: "/images/areas/nakhon-sawan-node.webp",
    priority: 90,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ นครสวรรค์ | ยึดพื้นที่การขายในจังหวัดด้วย Local SEO และเว็บไซต์",
    seoDescription:
      "ช่วยร้านค้าในนครสวรรค์ให้ติดอันดับการค้นหา Google Maps เพิ่มยอดขายหน้าร้านด้วยกลยุทธ์ Local Digital Marketing",
    coordinates: { lat: 15.7042, lng: 100.1372 },
  },
  {
    slug: "kamphaeng-phet",
    province: "กำแพงเพชร",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ กำแพงเพชร | ยกระดับธุรกิจเกษตรและร้านค้า ด้วยเว็บไซต์ราคาที่คุ้มค่าการลงทุน",
    description:
      "เริ่มต้นสร้างตัวตนบนโลกออนไลน์อย่างมืออาชีพ ด้วยงบประมาณที่เข้าถึงได้ สำหรับ SME ยุคใหม่",
    longDescription:
      "เปลี่ยนภาพลักษณ์ธุรกิจท้องถิ่นให้ดูทันสมัย เราให้บริการทำเว็บไซต์สำหรับธุรกิจเกษตรสมัยใหม่ (Smart Farm) ร้านทอง และผู้ประกอบการรายย่อยในกำแพงเพชร เพื่อสร้างหน้าร้านออนไลน์ที่ดูดี น่าเชื่อถือ และใช้งานง่าย ในราคาที่สมเหตุสมผลกับการเริ่มต้น",
    districts: ["เมืองกำแพงเพชร", "ขาณุวรลักษบุรี", "คลองขลุง"],
    keywords: [
      "รับทำเว็บไซต์ กำแพงเพชร",
      "ทำเว็บร้านค้าชุมชน",
      "Smart Farm Website",
      "SME Digital",
    ],
    heroImage: "/images/areas/kamphaeng-phet-node.webp",
    priority: 85,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ กำแพงเพชร | สร้างตัวตนธุรกิจออนไลน์ มาตรฐานมืออาชีพ",
    seoDescription:
      "บริการทำเว็บไซต์ในกำแพงเพชร เน้นความคุ้มค่าและภาพลักษณ์ที่ทันสมัย ช่วยธุรกิจท้องถิ่นเข้าสู่ตลาดออนไลน์ได้ง่ายขึ้น",
    coordinates: { lat: 16.4828, lng: 99.5227 },
  },
  {
    slug: "sukhothai",
    province: "สุโขทัย",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ สุโขทัย | Digital Storytelling สำหรับสินค้า OTOP และการท่องเที่ยวเชิงวัฒนธรรม",
    description:
      "เพิ่มมูลค่าสินค้าชุมชนและโฮมสเตย์ ด้วยเว็บไซต์ที่เน้นการเล่าเรื่อง (Content Marketing) และอัตลักษณ์ไทย",
    longDescription:
      "สุโขทัยมีต้นทุนทางวัฒนธรรมที่สูงลิ่ว เราช่วยนำเสนอคุณค่าเหล่านั้นผ่านเว็บไซต์ที่เน้น Storytelling เพื่อยกระดับสินค้า OTOP งานหัตถกรรม และที่พักเชิงวัฒนธรรม ให้ดึงดูดนักท่องเที่ยวและผู้ซื้อจากทั่วประเทศ เพิ่มมูลค่าสินค้าด้วยภาพลักษณ์ที่ดี",
    districts: ["เมืองสุโขทัย", "ศรีสัชนาลัย", "กงไกรลาศ", "สวรรคโลก"],
    keywords: [
      "รับทำเว็บไซต์ สุโขทัย",
      "ทำเว็บ OTOP",
      "Content Marketing สุโขทัย",
      "เว็บท่องเที่ยวชุมชน",
    ],
    heroImage: "/images/areas/sukhothai-node.webp",
    priority: 84,
    seoTitle:
      "AEMDEVWEB | รับทำเว็บไซต์ สุโขทัย | สร้างมูลค่าเพิ่มให้สินค้า OTOP และธุรกิจท่องเที่ยว",
    seoDescription:
      "รับออกแบบเว็บไซต์ในสุโขทัย เน้นการเล่าเรื่องราวเพื่อเพิ่มมูลค่าสินค้าชุมชนและดึงดูดนักท่องเที่ยว",
    coordinates: { lat: 17.0078, lng: 99.8235 },
  },
  {
    slug: "tak",
    province: "ตาก",
    templateSlug: "corporate",
    title: "รับทำเว็บไซต์ ตาก แม่สอด | ศูนย์กลาง Logistics และการค้าชายแดน (Cross-border Trade)",
    description: "ระบบเว็บไซต์รองรับธุรกิจนำเข้า-ส่งออก และขนส่งสินค้า พร้อมฟังก์ชันหลายภาษา",
    longDescription:
      "ในพื้นที่เศรษฐกิจพิเศษตาก-แม่สอด เว็บไซต์คือเครื่องมือเจรจาธุรกิจที่สำคัญ เราเชี่ยวชาญการทำเว็บสำหรับบริษัท Logistics ชิปปิ้ง และโรงงานชายแดน ที่ต้องการระบบจัดการข้อมูลที่แม่นยำ และรองรับภาษาเพื่อนบ้านเพื่อการสื่อสารที่ไร้รอยต่อ",
    districts: ["เมืองตาก", "แม่สอด", "แม่ระมาด", "พบพระ"],
    keywords: [
      "รับทำเว็บไซต์ ตาก",
      "รับทำเว็บไซต์ แม่สอด",
      "ทำเว็บ Logistics",
      "เว็บนำเข้าส่งออก",
      "Cross-border Web Solution",
    ],
    heroImage: "/images/areas/tak-node.webp",
    priority: 83,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ ตาก แม่สอด | โซลูชั่นเว็บ Logistics และการค้าชายแดน",
    seoDescription:
      "บริการทำเว็บไซต์ในตากและแม่สอด รองรับธุรกิจขนส่งและนำเข้า-ส่งออก ด้วยระบบมาตรฐานที่รองรับการค้าระหว่างประเทศ",
    coordinates: { lat: 16.8831, lng: 99.1258 },
  },
  {
    slug: "phichit",
    province: "พิจิตร",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title: "รับทำเว็บไซต์ พิจิตร | Agri-Business Solution ยกระดับธุรกิจเกษตรและโรงสีสู่ตลาดออนไลน์",
    description:
      "สร้างความน่าเชื่อถือให้ธุรกิจโรงสีและร้านวัสดุการเกษตร ด้วยเว็บไซต์ที่ค้นหาเจอง่ายบน Google",
    longDescription:
      "ยกระดับธุรกิจเกษตรดั้งเดิมสู่ Agri-Business ยุคใหม่ เราช่วยสร้างเว็บไซต์ให้โรงสีข้าว ร้านจำหน่ายปุ๋ยยา และธุรกิจท้องถิ่นในพิจิตร ให้มีตัวตนบนโลกออนไลน์ที่น่าเชื่อถือ เพิ่มช่องทางการติดต่อและขยายฐานลูกค้าได้กว้างไกลกว่าเดิม",
    districts: ["เมืองพิจิตร", "ตะพานหิน", "บางมูลนาก", "โพทะเล"],
    keywords: [
      "รับทำเว็บไซต์ พิจิตร",
      "ทำเว็บธุรกิจเกษตร",
      "Agri-Business Website",
      "ปักหมุดร้านพิจิตร",
    ],
    heroImage: "/images/areas/phichit-node.webp",
    priority: 82,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ พิจิตร | ยกระดับธุรกิจเกษตรและร้านค้าท้องถิ่นสู่ออนไลน์",
    seoDescription:
      "รับทำเว็บไซต์ในพิจิตร ช่วยธุรกิจโรงสีและเกษตรกรรมให้เข้าถึงตลาดออนไลน์ สร้างความน่าเชื่อถือและยอดขาย",
    coordinates: { lat: 16.4428, lng: 100.3501 },
  },
  {
    slug: "uttaradit",
    province: "อุตรดิตถ์",
    templateSlug: "new-service-name", // [LOCKED]: DO NOT MOVE
    title:
      "รับทำเว็บไซต์ อุตรดิตถ์ | จากสินค้าท้องถิ่นสู่ E-commerce ระดับประเทศ (Local to Global)",
    description:
      "ขยายตลาดสินค้าเกษตรแปรรูปและของฝาก ด้วยระบบร้านค้าออนไลน์ที่จัดการออเดอร์ได้เอง 24 ชม.",
    longDescription:
      "ปลดล็อกศักยภาพสินค้าอุตรดิตถ์ด้วยระบบ E-commerce เราช่วยผู้ประกอบการสินค้าแปรรูปและของฝาก สร้างหน้าร้านออนไลน์ที่สามารถรับชำระเงินและจัดการสต็อกได้เอง เปลี่ยนการขายแค่ในจังหวัด เป็นการส่งออกสินค้าดีๆ ไปสู่ลูกค้าทั่วประเทศ",
    districts: ["เมืองอุตรดิตถ์", "ลับแล", "พิชัย", "น้ำปาด"],
    keywords: [
      "รับทำเว็บไซต์ อุตรดิตถ์",
      "ทำเว็บขายของฝาก",
      "E-commerce อุตรดิตถ์",
      "เว็บสินค้าแปรรูป",
    ],
    heroImage: "/images/areas/uttaradit-node.webp",
    priority: 81,
    seoTitle: "AEMDEVWEB | รับทำเว็บไซต์ อุตรดิตถ์ | ระบบร้านค้าออนไลน์สำหรับสินค้า OTOP และของฝาก",
    seoDescription:
      "บริการทำเว็บไซต์ E-commerce ในอุตรดิตถ์ ช่วยขยายตลาดสินค้าท้องถิ่นสู่ระดับประเทศ ด้วยระบบขายของออนไลน์ที่ใช้งานง่าย",
    coordinates: { lat: 17.6256, lng: 100.0993 },
  },
] as const;
