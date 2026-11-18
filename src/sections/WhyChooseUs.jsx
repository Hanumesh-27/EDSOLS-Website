
import { motion } from 'framer-motion'
import '../styles/WhyChooseUs.css'
import {
  ShieldCheck,
  Rocket,
  Layers3,
  Users,
} from 'lucide-react'

const advantages = [
  {
    title: '100% IP Ownership',
    description:
      'You own every line of code and every trained model. We believe in complete transparency and client autonomy.',
    icon: ShieldCheck,
  },
  {
    title: 'Rapid Prototyping',
    description:
      'We transform concepts into functional MVPs quickly so you can test the market and iterate faster.',
    icon: Rocket,
  },
  {
    title: 'Scalable by Design',
    description:
      'From the first user to the millionth, our architecture is built to handle growth without compromising performance.',
    icon: Layers3,
  },
  {
    title: 'Strategic Partnership',
    description:
      'We act as technical partners, guiding you through the complex AI and software development landscape.',
    icon: Users,
  },
]

function WhyChooseUs() {
  return (
    <section className="why-grid-section" id="why-us">
      <div className="why-container">
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="why-eyebrow">WHY CHOOSE US</span>

          <h2>
            The <span>Competitive Edge</span>
          </h2>

          <p>
            Here are the key advantages of partnering with us
            for your next AI and software development project.
          </p>
        </motion.div>

        <div className="why-cards">
          {advantages.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className="why-card"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div className="why-card-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
    