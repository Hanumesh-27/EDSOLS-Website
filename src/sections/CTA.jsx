
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useContactForm } from '../components/useContactForm'
import '../styles/CTA.css'

function CTA() {
  const { openContactForm } = useContactForm()

  return (
    <section className="cta-section" id="contact">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="cta-eyebrow">LET'S CREATE SOMETHING GREAT</span>

        <h2>
          Your Vision, Our Code.
          <span>Let's Build the Future.</span>
        </h2>

        <p>
          Ready to integrate AI into your workflow or build a custom
          platform from scratch? Our team is ready to jump in.
        </p>

        <button
          type="button"
          className="cta-button"
          onClick={openContactForm}
        >
          Book Your Free Consultation
          <ArrowUpRight size={19} />
        </button>
      </motion.div>
    </section>
  )
}

export default CTA
