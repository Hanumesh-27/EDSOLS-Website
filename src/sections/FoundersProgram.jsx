import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Code2,
  Lightbulb,
  Presentation,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { useContactForm } from '../components/useContactForm'
import Footer from './Footer'
import '../styles/FoundersProgram.css'

const roadmap = [
  {
    title: 'Strategy',
    description:
      'A focused first week to define your product requirements and technical roadmap.',
    icon: Lightbulb,
  },
  {
    title: 'Build',
    description:
      'Agile development with bi-weekly demos, so you can see your product evolve.',
    icon: Code2,
  },
  {
    title: 'Launch',
    description:
      'Production deployment with optimized cloud infrastructure and monitoring.',
    icon: Rocket,
  },
  {
    title: 'Growth',
    description:
      'Technical mentorship and scaling support as your user base expands.',
    icon: TrendingUp,
  },
]

const benefits = [
  {
    title: 'Pitch deck support',
    description: 'Technical diagrams and product roadmap slides that tell your story.',
    icon: Presentation,
  },
  {
    title: 'Flexible partnership',
    description: 'Preferred pricing and partnership options tailored to your stage.',
    icon: BadgeCheck,
  },
  {
    title: 'Fundraising readiness',
    description: 'Technical due diligence support as you prepare for VC conversations.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Built to keep growing',
    description: 'Post-launch scaling, monitoring, and security maintenance.',
    icon: ShieldCheck,
  },
]

function FoundersProgram() {
  const { openContactForm } = useContactForm()

  return (
    <main className="founders-page">
      <Navbar />

      <section className="founders-hero">
        <video className="founders-hero-video" autoPlay muted loop playsInline preload="metadata">
          <source
            src="https://www.edsols.in/assets/founders-hero-BeLgRoEN.mp4"
            type="video/mp4"
          />
        </video>
        <div className="founders-hero-overlay" />
        <motion.div
          className="founders-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="founders-eyebrow">THE EDSOLS FOUNDERS PROGRAM</span>
          <h1>
            We build the tech.
            <span>You build the empire.</span>
          </h1>
          <p>
            An exclusive technical partnership for early-stage startups. Get
            the engineering muscle, AI strategy, and scalable roadmap to take
            your idea from a napkin sketch to a market-ready product.
          </p>
          <button
            type="button"
            className="founders-button"
            onClick={openContactForm}
          >
            Join the Founders Program <ArrowUpRight size={18} />
          </button>
          <div className="founders-hero-caption">
            <span className="founders-caption-line" />
            A hands-on engineering partner from day one
          </div>
        </motion.div>
        <div className="founders-hero-mark" aria-hidden="true">
          <span>IDEA</span>
          <span className="founders-mark-line" />
          <span>IMPACT</span>
        </div>
      </section>

      <section className="founders-problem-section">
        <div className="founders-problem-inner">
          <motion.div
            className="founders-problem-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className="founders-eyebrow">A STRONGER START</span>
            <h2>
              Don’t let tech debt
              <span> kill your vision.</span>
            </h2>
          </motion.div>
          <motion.div
            className="founders-problem-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p>
              Startups can lose momentum by investing in the wrong technology
              or launching an MVP that isn’t ready for real users. We work as
              your fractional CTO and engineering team, helping you create a
              foundation that’s scalable, secure, and ready for due diligence.
            </p>
            <div className="founders-capability-tags">
              <span>Product strategy</span>
              <span>AI engineering</span>
              <span>Scalable architecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="founders-profile-section">
        <div className="founders-section-heading">
          <span className="founders-eyebrow">THE PEOPLE BEHIND THE PARTNERSHIP</span>
          <h2>Meet our <span>founder.</span></h2>
          <p>
            Experienced leadership, thoughtful engineering, and a passion for
            building solutions that make a lasting impact.
          </p>
        </div>
        <motion.article
          className="founder-profile-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="founder-profile-photo">
            <img src="/images/founder-arul.jpg" alt="Dr. Arul Nambi D" loading="lazy" />
            <span className="founder-photo-label">EDSOLS / LEADERSHIP</span>
          </div>
          <div className="founder-profile-info">
            <span className="founders-eyebrow">FOUNDER & CEO</span>
            <h3>Dr. Arul Nambi D</h3>
            <p>
              Guiding the future of innovation with strategic thinking and a
              commitment to building impactful, scalable technology.
            </p>
            <span className="founder-profile-divider" />
            <span className="founder-profile-signoff">Building what comes next.</span>
          </div>
        </motion.article>
      </section>

      <section className="founders-roadmap-section">
        <div className="founders-section-heading">
          <span className="founders-eyebrow">FROM FIRST IDEA TO WHAT’S NEXT</span>
          <h2>The roadmap <span>to launch.</span></h2>
          <p>A focused partnership to take your product from plan to progress.</p>
        </div>
        <div className="founders-roadmap-grid">
          {roadmap.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.article
                className="founders-roadmap-card"
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="founders-roadmap-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="founders-benefits-section">
        <div className="founders-benefits-inner">
          <div className="founders-benefits-heading">
            <span className="founders-eyebrow">MORE THAN DEVELOPMENT</span>
            <h2>Founder-specific <span>benefits.</span></h2>
            <p>
              Practical support for the decisions, conversations, and growth
              moments that shape an early-stage company.
            </p>
          </div>
          <div className="founders-benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.article
                  className="founders-benefit"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <span className="founders-benefit-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="founders-cta">
        <span className="founders-eyebrow">A FEW PARTNERSHIPS EACH QUARTER</span>
        <h2>
          Stop searching.
          <span>Start building.</span>
        </h2>
        <p>
          We work with a limited number of startups each quarter, so every
          founder gets focused engineering attention.
        </p>
        <button
          type="button"
          className="founders-button"
          onClick={openContactForm}
        >
          Apply now — let’s talk strategy <ArrowUpRight size={18} />
        </button>
      </section>

      <Footer />
    </main>
  )
}

export default FoundersProgram
