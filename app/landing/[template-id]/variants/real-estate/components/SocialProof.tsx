/** @format */
import React from "react"
import Image from "next/image"

interface Testimonial {
  id: string | number
  name: string
  feedback: string
  avatar?: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials = [] }) => {
  if (!testimonials.length) return null

  return (
    <section className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-10 w-2 bg-slate-900" />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={t.id || idx}
            className="group relative border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* Quote Icon Decoration */}
            <div className="absolute -left-3 -top-3 border-2 border-slate-900 bg-blue-600 px-2 py-1 text-xl font-black italic text-white">
              “
            </div>

            <p className="mb-8 font-medium italic leading-relaxed text-slate-600">
              "{t.feedback}"
            </p>

            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
              {/* ✅ Next.js Optimized Avatar */}
              {t.avatar && (
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              )}

              <div>
                <h4 className="font-black uppercase tracking-tight text-slate-900">
                  {t.name}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Verified Client
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialProof
