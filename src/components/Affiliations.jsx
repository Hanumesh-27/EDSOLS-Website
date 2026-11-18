
import { motion } from 'framer-motion'

function Affiliations() {
  return (
    <section className="affiliations-section" id="affiliations">
      <motion.div
        className="affiliations-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="affiliations-label">
          PROFESSIONAL AFFILIATIONS
        </p>

        <h2>Associated With</h2>

        <div className="affiliations-logos">
          <div className="affiliation-item">
            <img
              src="/images/nvidia-inception.png"
              alt="NVIDIA Inception"
            />
          </div>

          <div className="affiliation-item">
            <img
              src="/images/cdac.jpg"
              alt="C-DAC"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Affiliations
