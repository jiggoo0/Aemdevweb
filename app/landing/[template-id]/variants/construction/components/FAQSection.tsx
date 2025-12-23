/** @format */
import React from "react"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FAQSection
