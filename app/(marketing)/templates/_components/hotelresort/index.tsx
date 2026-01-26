/** @format */
import React from "react"
import { HotelData } from "./schema"
import { HotelNavbar } from "./_parts/HotelNavbar"
import { HotelHero } from "./_parts/HotelHero"
import { HotelStats } from "./_parts/HotelStats"
import { HotelRooms } from "./_parts/HotelRooms"
import { HotelFooter } from "./_parts/HotelFooter"

export const HotelResortTemplate: React.FC<{ data: HotelData }> = ({
  data,
}) => {
  return (
    <div className="hotel-template bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <HotelNavbar data={data.navigation} />
      <HotelHero data={data.hero} />
      <HotelStats data={data.stats} />
      <HotelRooms data={data.rooms} />
      <HotelFooter data={data.footer} logo={data.navigation.logo} />
    </div>
  )
}
