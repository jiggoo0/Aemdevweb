/** @format */
import React from "react"

interface Testimonial {
  id: string
  name: string
  feedback: string
}

interface SocialProofProps {
  testimonials: Testimonial[]
}

const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  return (
    <section>
      <h2>Customer Reviews</h2>
      <ul>
        {testimonials.map((t) => (
          <li key={t.id}>
            <p>"{t.feedback}"</p>
            <p>- {t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SocialProof
