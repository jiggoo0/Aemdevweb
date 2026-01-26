/** @format */
import React from "react"
import { ShopMasterData } from "./schema"
import { ShopNavbar } from "./_parts/ShopNavbar"
import { ShopHero } from "./_parts/ShopHero"
import { ShopStats } from "./_parts/ShopStats"
import { ShopProducts } from "./_parts/ShopProducts"
import { ShopFooter } from "./_parts/ShopFooter"

export const ShopMasterTemplate: React.FC<{ data: ShopMasterData }> = ({
  data,
}) => {
  return (
    <div className="shop-master-template bg-white font-sans text-slate-900 selection:bg-orange-100">
      <ShopNavbar data={data.navigation} />
      <ShopHero data={data.hero} />
      <ShopStats data={data.benefits} />
      <ShopProducts data={data.products} />
      <ShopFooter data={data.footer} logo={data.navigation.logo} />
    </div>
  )
}
