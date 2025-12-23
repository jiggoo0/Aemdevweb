/** @format */
import React from "react"
import Image from "next/image"

// 🟢 แก้ไข 1: ทำให้ properties เป็น Optional (?) เพื่อรองรับข้อมูลที่อาจไม่ครบถ้วน
interface Room {
  id?: string | number
  type?: string
  name?: string
  price?: string
  image?: string
}

export interface RoomTypeCardsProps {
  rooms: Room[]
}

const RoomTypeCards: React.FC<RoomTypeCardsProps> = ({ rooms = [] }) => {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
        Available Properties
      </h2>

      {/* 🛡️ ป้องกันการ Render ล้มเหลวหาก rooms เป็น empty array */}
      {rooms.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {rooms.map((room, idx) => (
            <div
              key={room.id || idx}
              className="group border-2 border-slate-900 bg-white p-4 transition-all hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              {/* ✅ เปลี่ยนเป็น Next.js Image Component */}
              <div className="relative mb-4 aspect-video overflow-hidden border-2 border-slate-900 bg-slate-100">
                <Image
                  src={room.image || "/api/placeholder/400/300"}
                  alt={room.name || room.type || "Property"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 🟢 รายละเอียดห้อง */}
              <div className="space-y-1">
                <h3 className="text-xl font-black uppercase italic leading-tight text-slate-900">
                  {room.name || room.type || "Special Unit"}
                </h3>

                <p className="text-lg font-bold text-slate-500">
                  {room.price || "Contact for Price"}
                </p>
              </div>

              {/* Decor Line */}
              <div className="mt-4 h-1 w-full bg-slate-50 transition-colors group-hover:bg-slate-900" />
            </div>
          ))}
        </div>
      ) : (
        <div className="border-4 border-dashed border-slate-200 bg-slate-50/50 py-20 text-center">
          <p className="font-bold uppercase tracking-widest text-slate-400">
            No property data available.
          </p>
        </div>
      )}
    </section>
  )
}

export default RoomTypeCards
