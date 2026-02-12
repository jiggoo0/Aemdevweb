/**
 * [COMPONENT]: SALE_HERO v17.9.2 (LCP_OPTIMIZED)
 * [STRATEGY]: FetchPriority High | Layout Stability | Product-Centric UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import Image from "next/image";
import { MoveRight } from "lucide-react";
import type { ReactNode } from "react";

interface SaleHeroProps {
  readonly title: string | ReactNode;
  readonly description: string;
  readonly image?: string;
}

export function SaleHero({ title, description, image }: SaleHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-16">
          {/* [01] COPYWRITING COLUMN (THE HOOK) */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-rose-600/20 ring-inset">
              <span>ลดราคาพิเศษสำหรับ 5 ท่านแรกของวัน</span>
            </div>

            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              <span className="block text-slate-900">{title}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#order"
                className="group inline-flex items-center justify-center rounded-xl bg-rose-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-rose-200 transition-all hover:bg-rose-700 hover:shadow-xl active:scale-95"
              >
                สั่งซื้อตอนนี้
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3 px-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">
                  <span className="font-bold text-slate-900">1,200+</span> คนไทยไว้วางใจ
                </p>
              </div>
            </div>
          </div>

          {/* [02] VISUAL COLUMN (THE PRODUCT - LCP PRIORITY) */}
          <div className="relative mt-16 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Background Decorative Element */}
              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-rose-50 blur-3xl" />

              {/* [IMAGE_ENGINEERING]: 
                  - priority={true}: บอก Next.js ให้โหลดรูปนี้ทันทีโดยไม่รอ Lazy load
                  - fetchPriority="high": บอก Browser ให้จัดคิวโหลดรูปนี้เป็นอันดับ 1
                  - fill: ให้รูปขยายเต็ม Container ที่เราจองพื้นที่ไว้ (Aspect Ratio 1:1)
              */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
                {image ? (
                  <Image
                    src={image}
                    alt={typeof title === "string" ? title : "Product Showcase"}
                    fill
                    priority={true}
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                    Product Image Placeholder
                  </div>
                )}
              </div>

              {/* Float Trust Badge (มนุษย์ไทยชอบเห็นตราประทับ) */}
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Quality Verified
                  </p>
                  <p className="text-sm font-bold text-slate-900">รับประกันคุณภาพ 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
