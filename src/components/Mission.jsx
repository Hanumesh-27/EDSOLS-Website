
import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'

function Mission() {
  return (
    <section className="mission-section" id="mission">

      <div className="mission-layout">

        {/* Section introduction */}
        <motion.div
          className="mission-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2>
            Turning ideas into
            <br />
            <span>intelligent solutions.</span>
          </h2>

          <p className="mission-description">
            We build intelligent digital platforms that combine AI
            innovation with high-performance software engineering.
          </p>
        </motion.div>

        {/* Main featured capability */}
        <motion.article
          className="mission-featured"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="mission-brain-visual">
            <BrainCircuit size={115} strokeWidth={0.8} />
            <div className="mission-orbit orbit-one" />
            <div className="mission-orbit orbit-two" />
          </div>

          <div className="mission-featured-bottom">
            <div>
              <h3>Custom AI Integration</h3>
              <p>
                We embed intelligence directly into your business workflows.
                From fine-tuned LLMs to computer vision and predictive
                analytics, we transform your data into a strategic advantage.
              </p>
            </div>

          </div>
        </motion.article>

        {/* Secondary capability */}
        <motion.article
          className="mission-secondary"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          

          <div className="mission-code-visual">
            <span>const platform =</span>
            <span className="code-highlight">buildFuture();</span>
            <span>AI + Engineering</span>
          </div>

          <div className="mission-secondary-bottom">
            <h3>Full-Stack Development</h3>
            <p>
              We build scalable web and mobile platforms using modern
              technologies like React, Next.js, and Python — delivering
              secure, high-performance systems designed for real users.
            </p>
            <div className="mission-tech-tags">
              <span>Stripe</span>
              <span>Redis</span>
              <span>Saas</span>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  )
}

export default Mission 