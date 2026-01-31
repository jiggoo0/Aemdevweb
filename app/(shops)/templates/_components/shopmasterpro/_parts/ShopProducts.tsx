/** @format */

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อความแม่นยำของระบบงาน                    */
/* -------------------------------------------------------------------------- */

interface ProductItem {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  tag?: string;
}

interface ShopProductsProps {
  data: ProductItem[];
}

/**
 * ShopProducts - ส่วนแสดงรายการสินค้าในระบบ ShopMasterPro
 * ยุทธศาสตร์: โหลดไว (LCP Optimized) และจัดวางพิกัดให้สะดุดตากลุ่มลูกค้า SME
 */
export const ShopProducts = ({ data }: ShopProductsProps) => (
  <section id="products" className="relative z-0 bg-white py-24 lg:py-32">
    <div className="container mx-auto px-6">
      {/* ส่วนหัวแสดงกลุ่มสินค้า: เน้นการจัดวางที่โปร่งและดูเป็นระเบียบ */}
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="space-y-4 text-left">
          <span className="font-heading text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase italic">
            Curated Collection
          </span>
          <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
            Featured Products
          </h2>
        </div>

        <button
          type="button"
          className="font-heading flex items-center gap-3 border-b border-slate-200 pb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-all hover:border-orange-600 hover:text-orange-600 active:scale-95"
        >
          View All <ChevronRight size={14} />
        </button>
      </div>

      {/* ตารางแสดงรายการสินค้า (Product Grid Layout) */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {data.map((prod, i) => (
          <div
            key={`${prod.name}-${i}`}
            className="group relative cursor-pointer"
          >
            {/* พื้นที่รูปภาพสินค้า: ล็อคพิกัด 3:4 และจัดการเงาให้ดูมีมิติพรีเมียม */}
            <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-orange-600/5">
              {prod.tag && (
                <span className="absolute top-4 left-4 z-20 rounded-full bg-white px-4 py-1.5 text-[9px] font-black tracking-widest text-orange-600 uppercase shadow-sm">
                  {prod.tag}
                </span>
              )}

              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>

            {/* ข้อมูลสินค้า: เน้นความชัดเจนและอ่านง่ายตามมาตรฐานโครงการ */}
            <h3 className="font-body mb-1 truncate text-base font-bold text-slate-900 transition-colors group-hover:text-orange-600">
              {prod.name}
            </h3>

            <div className="flex items-center gap-3">
              <span className="font-heading text-lg font-black text-orange-600 italic">
                {prod.price}
              </span>
              {prod.originalPrice && (
                <span className="font-body text-xs font-medium text-slate-400 line-through">
                  {prod.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
