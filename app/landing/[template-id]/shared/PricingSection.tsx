/** @format */
import React from "react"
import { Check } from "lucide-react"

interface Plan {
  name: string
  price: string
  unit?: string
  features: string[]
  isRecommended?: boolean
}

interface PricingProps {
  plans: Plan[]
  primaryColor?: string
}

export default function PricingSection({
  plans,
  primaryColor = "#000",
}: PricingProps) {
  if (!plans || plans.length === 0) return null

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative flex flex-col border-4 border-slate-900 p-8 ${
            plan.isRecommended ? "bg-white ring-4 ring-yellow-400" : "bg-white"
          }`}
        >
          {plan.isRecommended && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
              Recommended
            </div>
          )}
          <h3 className="text-2xl font-black uppercase tracking-tighter">
            {plan.name}
          </h3>
          <div className="my-6">
            <span className="text-5xl font-black">{plan.price}</span>
            {plan.unit && (
              <span className="ml-2 font-bold text-slate-500">{plan.unit}</span>
            )}
          </div>
          <ul className="mb-8 flex-grow space-y-4">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-medium text-slate-700"
              >
                <Check
                  size={18}
                  className="mt-1 shrink-0"
                  style={{ color: primaryColor }}
                />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="w-full py-4 font-black uppercase tracking-widest text-white transition-transform hover:-translate-y-1"
            style={{ backgroundColor: primaryColor }}
          >
            เลือกแพ็กเกจนี้
          </button>
        </div>
      ))}
    </div>
  )
}
