import React from "react";

interface ExperienceNodesProps {
  isTourismHeavy?: boolean;
}

export const ExperienceNodes = ({ isTourismHeavy }: ExperienceNodesProps) => {
  return (
    <section className="bg-[var(--brand-primary)]/5 py-24">
      <div className="container mx-auto px-4">
        <div className="grid h-full grid-cols-1 gap-6 lg:h-[700px] lg:grid-cols-12">
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-12 lg:col-span-7">
            <div className="absolute top-0 right-0 origin-top-right rotate-90 p-8 font-mono text-[10px] tracking-[0.4em] uppercase opacity-20">
              Identity_Node_Protocol
            </div>
            <div className="relative z-10 space-y-4">
              {isTourismHeavy && (
                <div className="mb-2 flex items-center gap-2 text-emerald-500">
                  <div className="h-1 w-8 rounded-full bg-emerald-500" />
                  <div className="h-1 w-4 rounded-full bg-emerald-500/30" />
                  <span className="font-mono text-[8px] font-bold tracking-widest uppercase">
                    Speed_Optimized
                  </span>
                </div>
              )}
              <h3 className="font-[family-name:var(--font-primary)] text-4xl leading-none font-black uppercase italic md:text-5xl">
                {isTourismHeavy ? "Global Speed & Mobile First." : "The Private Stargazing."}
              </h3>
              <p className="max-w-md italic opacity-60">
                {isTourismHeavy
                  ? "ในพื้นที่ที่มี Global Traffic หนาแน่น เว็บไซต์ของคุณต้องโหลดเสร็จในเสี้ยววินาทีเพื่อรั้งนักท่องเที่ยวจากทั่วโลก"
                  : "สัมผัสประสบการณ์ดูดาวในมุมที่เงียบสงบที่สุด พร้อมระบบโครงสร้างพื้นฐานดิจิทัลที่เสถียรที่สุด"}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6 lg:col-span-5">
            <div className="flex flex-col justify-center rounded-[var(--radius)] bg-[var(--brand-primary)] p-10 text-white">
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                {isTourismHeavy ? "Booking_Optimization" : "Culinary_Workshop"}
              </h4>
              <p className="italic opacity-80">
                {isTourismHeavy
                  ? "เพิ่มอัตราการจองตรง (Direct Booking) ด้วย UX ที่ลื่นไหลบนทุกอุปกรณ์"
                  : "เรียนรู้การวางระบบข้อมูลสินค้าแบบ Matrix สำหรับธุรกิจเฉพาะทาง"}
              </p>
            </div>
            <div className="rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-black p-10 text-white">
              <h4 className="mb-4 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                {isTourismHeavy ? "Multi-Lingual_Node" : "Mist_Photography"}
              </h4>
              <p className="italic opacity-80">
                {isTourismHeavy
                  ? "รองรับการเข้าถึงจากทั่วโลกด้วยระบบ Multi-language และ CDN ระดับพรีเมียม"
                  : "บันทึกข้อมูลและประวัติการทำงานผ่านระบบ Ledger ที่ปลอดภัยสูงสุด"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
