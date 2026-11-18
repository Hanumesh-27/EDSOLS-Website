
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import '../styles/FAQ.css'

const faqs = [
  {
    question: 'How do I start a project with EDSOLS?',
    answer: "Starting a project is easy! Simply click the Start Your Project button and our comprehensive project form will guide you through describing your requirements. One of our project managers will reach out to discuss your needs in detail. Alternatively, you can contact us directly and we'll help you get started.",
  },
  {
    question: 'What is your development process like?',
    answer: 'Our Agile process includes discovery, planning, design, development, testing, and launch—followed by continuous support. We ensure transparency with regular updates and clear progress tracking throughout the project.',
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary by complexity: simple websites (2–4 weeks), custom web apps (8–16 weeks), and enterprise solutions (16+ weeks). We provide a detailed timeline after understanding your project requirements.',
  },
  {
    question: 'How is pricing determined for custom projects?',
    answer: 'Pricing is based on project scope, complexity, features, design, and timeline. We offer fixed pricing for well-defined projects and flexible time-based pricing for evolving needs, with a clear proposal and transparent costs upfront.',
  },
  {
    question: 'Do you provide invoices and receipts for payments?',
    answer: 'We offer detailed invoices, payment receipts, and annual statements, with custom invoicing for enterprise clients. All documents are accessible in your client portal and delivered via email.',
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-eyebrow">GOT QUESTIONS?</span>
          <h2>Frequently Asked <span>Questions.</span></h2>
          <p>Everything you need to know before starting your project with EDSOLS.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
