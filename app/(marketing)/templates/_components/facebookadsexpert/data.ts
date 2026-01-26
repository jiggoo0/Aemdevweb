/** @format */

export interface FacebookAdsData {
  navbar: {
    logo: string
    cta: string
  }
  expert: {
    name: string
    title: string
    bio: string
    image: string
  }
  stats: { label: string; value: string; suffix: string }[]
  services: {
    heading: string
    items: { title: string; desc: string; detail: string }[]
  }
  cta: {
    title: string
    subtitle: string
    buttonText: string
  }
}

export const data: FacebookAdsData = {
  navbar: {
    logo: "ADS EXPERT",
    cta: "จองคิวปรึกษา",
  },
  expert: {
    name: "นายเอ็มซ่ามากส์",
    title: "Facebook Ads Performance Specialist",
    bio: "ช่วยธุรกิจ SME เพิ่มยอดขายด้วยการวางโครงสร้างโฆษณาที่แม่นยำและวัดผลได้จริง ประสบการณ์บริหารงบโฆษณารวมกว่า 50 ล้านบาท",
    image: "/images/showcase/placeholder.webp", // แนะนำรูปหน้าตรง พื้นหลังเรียบ
  },
  stats: [
    { label: "เฉลี่ย ROAS", value: "8.5", suffix: "x" },
    { label: "บริหารงบโฆษณา", value: "50", suffix: "M+" },
    { label: "ดูแลแบรนด์สะสม", value: "200", suffix: "+" },
  ],
  services: {
    heading: "ยกระดับโฆษณาของคุณให้เหนือกว่าคู่แข่ง",
    items: [
      {
        title: "Ads Strategy",
        desc: "วางโครงสร้างแคมเปญให้สอดคล้องกับพฤติกรรมลูกค้า",
        detail:
          "วิเคราะห์กลุ่มเป้าหมายและจัดวางงบประมาณให้เกิดประสิทธิภาพสูงสุด",
      },
      {
        title: "Creative Direction",
        desc: "ออกแบบเนื้อหาโฆษณาที่หยุดนิ้วคนดู",
        detail: "ไกด์แนวทางการทำภาพและวิดีโอที่ช่วยเพิ่มอัตราการคลิก (CTR)",
      },
      {
        title: "Audit & Scale",
        desc: "ปรับจูนโฆษณาเดิมให้แรงขึ้นและขยายผล",
        detail: "ตรวจสอบจุดบกพร่องและเพิ่มงบประมาณในส่วนที่ทำกำไร",
      },
    ],
  },
  cta: {
    title: "พร้อมเปลี่ยนงบยิงแอดเป็นยอดขายหรือยัง?",
    subtitle: "รับคำปรึกษาเบื้องต้นฟรี เพื่อวิเคราะห์จุดอ่อนโฆษณาของคุณ",
    buttonText: "คุยทาง LINE ตอนนี้",
  },
}
