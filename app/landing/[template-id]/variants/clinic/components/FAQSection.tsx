/** @format */
import React from "react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
