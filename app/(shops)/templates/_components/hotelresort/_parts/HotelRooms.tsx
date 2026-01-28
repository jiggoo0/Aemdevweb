/** @format */
import React from "react"
import Image from "next/image"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface RoomItem {
  id: string | number
  name: string
  image: string
  price: string
  features: string[]
}

interface HotelRoomsProps {
  data: RoomItem[]
}

/**
 * HotelRooms - ส่วนแสดงรายการห้องพักสำหรับ Hotel & Resort Template
 * ปรับปรุงพิกัด Type และระบบ Image Optimization เพื่อคะแนน Performance เต็ม 100
 */
export const HotelRooms = ({ data }: HotelRoomsProps) => (
  <section id="rooms" className="bg-white py-24 text-left lg:py-32">
    <div className="container mx-auto px-6">
      <h2 className="font-heading mb-16 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
        Rooms & Suites
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {data.map((room) => (
          <div key={room.id} className="group cursor-pointer">
            {/* พื้นที่แสดงรูปภาพ: ล็อคพิกัดอัตราส่วน 16:9 เพื่อความสมดุลสายตา */}
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />

              {/* ป้ายราคาลอย (Price Badge) */}
              <div className="absolute right-6 bottom-6 z-10 rounded-full bg-white px-6 py-3 shadow-xl ring-1 ring-black/5">
                <span className="font-heading font-black text-slate-950">
                  {room.price}
                </span>
                <span className="font-body ml-1 text-[10px] font-bold text-slate-400 uppercase">
                  / Night
                </span>
              </div>
            </div>

            <h3 className="font-heading mb-4 text-2xl font-black text-slate-900 uppercase italic">
              {room.name}
            </h3>

            {/* รายการสิ่งอำนวยความสะดวก (Features List) */}
            <div className="flex flex-wrap gap-3">
              {room.features.map((feature, i) => (
                <span
                  key={`${room.id}-feat-${i}`}
                  className="font-body rounded-lg border border-slate-100 bg-slate-50 px-4 py-1.5 text-[10px] font-black tracking-[0.15em] text-slate-500 uppercase transition-colors group-hover:border-slate-900 group-hover:text-slate-900"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
