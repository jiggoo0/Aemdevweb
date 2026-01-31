/** @format */

import Link from "next/link";
import {
  MapPin,
  Target,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Users,
  MousePointerClick,
} from "lucide-react"; // ลบ Zap, Search, Award และ Globe ที่ไม่ได้ใช้ออก
import { areaNodes } from "@/constants/area-nodes";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * SEO Metadata: เน้นความง่ายและตรงไปตรงมา
 */
export const metadata = {
  title: "ปักหมุดสำเร็จได้ทุกพิกัด | รับทำ SEO และเว็บไซต์รายพื้นที่ | AEMDEVWEB",
  description:
    "ดันธุรกิจ SME ให้ติดหน้าแรก Google ไม่ว่าคุณจะอยู่ที่ไหน เราพร้อมปักหมุดความสำเร็จให้คุณทุกพื้นที่ ดูแลโดย นายเอ็มซ่ามากส์",
};

export default function AreasPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* --- SECTION 1: HERO (คุยแบบคนกันเอง) --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-emerald-500 text-slate-950 font-bold px-4 py-1 rounded-md uppercase tracking-wider text-[10px]">
            Every Location Success 2026
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase leading-[1.1]">
            ปักหมุดสำเร็จ <br />
            <span className="text-emerald-500">ได้ทุกพิกัด</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            “ไม่ว่าธุรกิจของคุณจะอยู่ที่ไหน เราพร้อมทำให้คนหาคุณเจอเป็นเจ้าแรก”{" "}
            <br />
            <span className="font-bold text-emerald-400">
              ดูแลงานโดย นายเอ็มซ่ามากส์
            </span>
            ผู้ช่วยปั้นธุรกิจท้องถิ่นให้โตบนหน้าแรก Google
          </p>
        </div>
      </section>

      {/* --- SECTION 2: THE VALUE (ทำไมต้องปักหมุดกับเรา) --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 uppercase">
            ทำไมต้องให้เรา <span className="text-emerald-500">ปักหมุดให้?</span>
          </h2>
          <p className="text-slate-500 font-medium">
            เราเปลี่ยนการค้นหาบนมือถือ ให้กลายเป็นยอดขายที่หน้าบ้านคุณ
          </p>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card: Google Maps */}
          <div className="p-10 border border-slate-100 bg-slate-50/50 rounded-3xl hover:shadow-xl transition-all duration-300 group">
            <div className="bg-emerald-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-8 shadow-lg shadow-emerald-500/20">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 italic">
              หาเจอง่ายบนแผนที่
            </h3>
            <p className="text-slate-600 leading-relaxed">
              คนในพื้นที่ค้นหาเมื่อไหร่ ต้องเจอร้านคุณบน Google Maps
              เป็นอันดับต้นๆ
              ช่วยนำทางลูกค้าจากหน้าจอให้เดินเข้ามาถึงในร้านคุณจริงๆ
            </p>
          </div>

          {/* Card: Ad Cost */}
          <div className="p-10 border border-slate-100 bg-slate-50/50 rounded-3xl hover:shadow-xl transition-all duration-300 group">
            <div className="bg-emerald-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-8 shadow-lg shadow-emerald-500/20">
              <TrendingDown size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 italic">
              ยอดขายขึ้นแบบไม่ต้องอัดแอด
            </h3>
            <p className="text-slate-600 leading-relaxed">
              เมื่อติดอันดับการค้นหาแบบธรรมชาติ (Organic)
              คุณจะประหยัดค่าโฆษณาไปได้มหาศาล แต่ยังได้ลูกค้าใหม่ๆ
              ทักเข้ามาอย่างต่อเนื่องทุกวัน
            </p>
          </div>

          {/* Card: High Conversion */}
          <div className="p-10 border border-slate-100 bg-slate-50/50 rounded-3xl hover:shadow-xl transition-all duration-300 group">
            <div className="bg-emerald-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl mb-8 shadow-lg shadow-emerald-500/20">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 italic">
              ได้ลูกค้าที่พร้อมโอนจริง
            </h3>
            <p className="text-slate-600 leading-relaxed">
              คนที่เสิร์ชหาชื่อจังหวัดพร้อมสินค้า
              คือคนที่มีเงินในมือและพร้อมจะซื้ออยู่แล้ว
              เรามีหน้าที่แค่พาธุรกิจคุณไปอยู่ต่อหน้าเขาในจังหวะที่เขาต้องการ
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SUCCESS CASES (พิกัดตัวอย่างที่ทำสำเร็จ) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              พิกัดตัวอย่างที่เราปั้นจนสำเร็จ
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              เราลงพื้นที่จริง ทำความเข้าใจคนซื้อและคนขายในแต่ละจังหวัด <br />
              นี่คือตัวอย่างความสำเร็จที่เราพร้อมไปทำให้คุณในจังหวัดอื่นๆ
              ทั่วประเทศ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {areaNodes.map((area) => (
              <Link
                href={`/areas/${area.slug}`}
                key={area.slug}
                className="group"
              >
                <Card className="p-0 border-none shadow-lg overflow-hidden group-hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-slate-950 p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Globe size={180} className="text-emerald-500" />
                    </div>

                    <div className="relative z-10">
                      <Badge className="bg-emerald-500 text-slate-950 mb-6 font-bold px-3 py-1">
                        SUCCESS CASE
                      </Badge>
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-4 italic uppercase">
                        จ.{area.province}
                      </h2>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-md font-light">
                        {area.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {area.districts.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-md text-emerald-400 border border-emerald-500/20 uppercase"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 text-emerald-500 font-bold text-xs uppercase tracking-wider group-hover:gap-5 transition-all">
                        ดูผลงานในจังหวัดนี้ <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {/* CARD พิเศษ: สำหรับจังหวัดอื่นๆ */}
            <div className="group relative flex items-center justify-center p-1 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50 min-h-[400px]">
              <div className="text-center p-8">
                <div className="bg-slate-200 text-slate-400 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                  <MousePointerClick size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">
                  จังหวัดของคุณคือที่ถัดไป
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                  ไม่ว่าคุณจะอยู่ที่ไหน
                  เราพร้อมปักหมุดความสำเร็จให้ธุรกิจคุณเป็นเจ้าแรกในพิกัดนั้นๆ
                </p>
                <Link href="/contact">
                  <button className="text-emerald-600 font-bold text-sm uppercase tracking-widest border-b-2 border-emerald-600 pb-1 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                    คุยเรื่องพิกัดของคุณ{" "}
                    <ArrowRight className="inline-block ml-1" size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE PROMISE (คุยแบบคนทำธุรกิจ) --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <h2 className="text-4xl font-black text-slate-900 uppercase mb-8 relative z-10 leading-tight italic">
                เข้าใจคนค้าขาย <br />{" "}
                <span className="text-emerald-500 underline decoration-slate-900 underline-offset-8">
                  ไม่ใช่แค่ทำตามสูตร
                </span>
              </h2>
              <div className="space-y-6 relative z-10">
                {[
                  "เน้นคำที่คนในพื้นที่ใช้ค้นหาจริงๆ เพื่อให้เจอตรงจุด",
                  "คุยกันแบบคนทำงาน เข้าใจหัวอกเจ้าของธุรกิจ",
                  "ทำให้ Google รู้ว่าคุณคือตัวจริงในพิกัดนี้",
                  "เว็บโหลดไวทันใจลูกค้า ไม่ปล่อยให้คนซื้อต้องรอนาน",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 text-slate-700 font-medium"
                  >
                    <div className="bg-emerald-100 p-1.5 rounded-full flex-shrink-0">
                      <CheckCircle2 className="text-emerald-600" size={18} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-12 rounded-[2.5rem] text-center border-b-8 border-emerald-500 shadow-2xl relative overflow-hidden">
              <Users
                className="text-emerald-500 mx-auto mb-6 relative z-10"
                size={56}
              />
              <h4 className="text-white text-2xl font-black mb-4 uppercase relative z-10">
                ปักหมุดความสำเร็จของคุณวันนี้
              </h4>
              <p className="text-slate-400 text-sm font-light mb-10 leading-relaxed relative z-10 px-4">
                ไม่ว่าธุรกิจของคุณจะอยู่จังหวัดไหน
                มาทำให้ลูกค้าหาคุณเจอเป็นเจ้าแรกบนหน้าแรก Google
                ปรึกษาและเช็คราคากับนายเอ็มซ่ามากส์ได้เลยครับ
              </p>
              <Link href="/contact" className="relative z-10 block">
                <button className="bg-emerald-500 text-slate-950 font-bold px-10 py-5 rounded-xl w-full hover:bg-emerald-400 hover:scale-[1.02] transition-all uppercase text-lg shadow-xl shadow-emerald-500/10">
                  ปรึกษางานและเช็คราคา
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-slate-100 text-center bg-slate-50/50">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">
          Local Success Guaranteed by AEMDEVWEB Node System
        </p>
        <p className="text-xs text-slate-500">
          &copy; 2026 ออกแบบและดูแลโดย{" "}
          <span className="font-bold text-slate-900 uppercase underline decoration-emerald-500 underline-offset-4">
            นายเอ็มซ่ามากส์
          </span>
        </p>
      </footer>
    </div>
  );
}

// [FIXED]: Custom Globe Component เพื่อไม่ให้ชนกับ Lucide Globe Import
function Globe({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
