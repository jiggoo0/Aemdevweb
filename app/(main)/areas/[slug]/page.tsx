/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  MapPin,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Heart,
} from "lucide-react"; // [FIX]: ลบ ArrowRight ออกเนื่องจากไม่ได้ถูกเรียกใช้งาน
import { areaNodes } from "@/constants/area-nodes";
import { templateRegistry } from "@/app/(shops)/templates/_registry";
import { Badge } from "@/components/ui/badge";

/**
 * [TYPE DEFINITION]
 * มาตรฐาน Next.js 15+ สำหรับ Async Params
 */
interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * [SEO GENERATOR]
 * ปรับจูนให้ Google รู้ว่าพิกัดนี้ "ทำสำเร็จจริง"
 */
export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areaNodes.find((a) => a.slug === slug);

  if (!area) return {};

  return {
    title: `ปักหมุดสำเร็จแล้วที่ จ.${area.province} | รับทำเว็บไซต์และ SEO - นายเอ็มซ่ามากส์`,
    description: `พิสูจน์ความสำเร็จใน จ.${area.province}: ${area.description} ดันธุรกิจ SME ให้ติดหน้าแรก Google ด้วยเว็บโหลดไว 0.4s`,
    // [FIX]: แปลงจาก readonly string[] เป็น mutable string[] เพื่อแก้ปัญหา Type TS2322
    keywords: [...area.keywords], 
    openGraph: {
      title: `ปักหมุดความสำเร็จในพิกัด จ.${area.province}`,
      description: area.description,
      type: "website",
      url: `https://aemdevweb.com/areas/${slug}`,
    },
  };
}

/**
 * [SSG OPTIMIZATION]
 * สร้างพิกัดล่วงหน้าเพื่อความเร็วในการเข้าถึง (Build-time)
 */
export async function generateStaticParams() {
  return areaNodes.map((area) => ({
    slug: area.slug,
  }));
}

/**
 * [MAIN COMPONENT]
 * ระบบแสดงผลพิกัดความสำเร็จ: ดึงเทมเพลตและฉีดข้อมูลแบบเน้น "ผลลัพธ์จริง"
 */
export default async function AreaSlugPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areaNodes.find((a) => a.slug === slug);

  if (!area) notFound();

  // ดึงแม่พิมพ์ที่เลือกไว้สำหรับแต่ละจังหวัดจาก Registry
  const registryEntry = templateRegistry[area.templateSlug];
  if (!registryEntry) notFound();

  const { component: TemplateComponent, data: defaultData } = registryEntry;

  // [STRATEGIC INJECTION]: ปรับแต่งข้อความในเทมเพลตให้เข้ากับวิถีคนพื้นที่
  const injectedData = {
    ...defaultData,
    heroTitle: `ปักหมุดสำเร็จแล้วที่ จ.${area.province}`,
    heroSubtitle: `เราทำให้คนในจังหวัด${area.province}หาคุณเจอเป็นเจ้าแรกบน Google`,
    description: area.description,
    ctaLabel: `อยากปักหมุดแบบ จ.${area.province} ทักเลย`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- TOP STATUS: LOCAL GREETING (สร้างความสนิทใจ) --- */}
      <div className="bg-emerald-500 py-2.5 px-4 text-center border-b border-emerald-600 shadow-sm">
        <p className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-widest flex items-center justify-center gap-2">
          <Heart size={12} className="fill-slate-900" />
          ภูมิใจที่ได้ดูแลพี่น้องชาว {area.province} :{" "}
          {area.districts.slice(0, 3).join(" • ")} และใกล้เคียง
        </p>
      </div>

      {/* --- RENDER TEMPLATE: การแสดงผลแม่พิมพ์หลัก --- */}
      <main className="relative flex-1">
        <TemplateComponent data={injectedData} />
      </main>

      {/* --- LOCAL TRUST SECTION: ขยี้จุดแข็งรายพื้นที่ --- */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container-za">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-1 font-bold">
                SUCCESS STORY IN {area.province.toUpperCase()}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase italic">
                สูตรลับปักหมุด <br />
                <span className="text-emerald-500 underline decoration-slate-900 underline-offset-8">
                  ที่คนพื้นที่ไว้ใจ
                </span>
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                ทำไมธุรกิจใน จ.{area.province} ถึงเลือกให้ **นายเอ็มซ่ามากส์**
                ดูแล? เพราะเราไม่ได้แค่ส่งงาน แต่เราส่งมอบ "โอกาส"
                ให้คนหาคุณเจอจริงๆ ในทำเลดิจิทัลที่ทำเงินที่สุด
              </p>

              <div className="grid gap-5 pt-4 text-left">
                {[
                  `รู้ลึกพฤติกรรมการค้นหาของคนใน จ.${area.province}`,
                  `จูนคีย์เวิร์ดที่คน ${area.province} ใช้เสิร์ชหาของจริงๆ`,
                  "เว็บโหลดไว 0.4 วินาที ไม่ปล่อยให้ลูกค้าในพื้นที่รอนาน",
                  "ปักหมุด Google Maps ให้แม่นยำ ลูกค้าขับรถมาไม่มีหลง",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-slate-700"
                  >
                    <div className="bg-emerald-500 text-white rounded-full p-1 shadow-md shadow-emerald-500/20">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-bold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* การรับรองความน่าเชื่อถือ (Trust Card) */}
            <div className="w-full lg:w-[420px]">
              <div className="bg-slate-950 p-12 rounded-[3rem] border-b-[10px] border-emerald-500 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <MapPin size={150} className="text-white" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="bg-emerald-500 w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl shadow-emerald-500/20">
                    <ShieldCheck size={28} className="text-slate-950" />
                  </div>
                  <h3 className="text-white text-2xl font-black italic uppercase">
                    พิสูจน์แล้วว่าสำเร็จ
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    "เป้าหมายของเราคือทำให้ธุรกิจของคุณเป็น 'เจ้าแรก'
                    ที่คนนึกถึงใน จ.{area.province}
                    เหมือนที่เราปักหมุดสำเร็จมาแล้วในหลายๆ พิกัดครับ"
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[11px] text-emerald-500 font-black uppercase tracking-widest">
                      Verified by นายเอ็มซ่ามากส์
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AREA SPECIFIC FOOTER: พิกัดครอบคลุม --- */}
      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container-za text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm mb-10 group cursor-default">
            <Zap
              size={16}
              className="text-emerald-500 group-hover:scale-125 transition-transform"
            />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600">
              ปักหมุดสำเร็จได้ทุกพิกัด ทั่วประเทศไทย
            </span>
          </div>

          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
            {area.districts.map((district) => (
              <span
                key={district}
                className="text-[12px] font-bold text-slate-400 hover:text-emerald-500 transition-all cursor-pointer"
              >
                • {district}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold">
              AEMDEVWEB Specialist System | Node: {area.slug.toUpperCase()}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              ไม่ว่าคุณจะอยู่จังหวัดไหน เราพร้อมไปปักหมุดความสำเร็จให้ถึงที่
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
