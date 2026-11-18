
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import HeroScene from '../three/HeroScene'
import { siteContent } from '../data/siteContent'
import { useContactForm } from '../components/useContactForm'

function Hero() {
  const { hero } = siteContent
  const { openContactForm } = useContactForm()

  return (
    <section className="hero-section">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-label">
          {hero.label}
        </div>

        <h1 className="hero-title">
          {hero.heading.split('AI & Custom Development')[0]}
<span className="hero-title-accent">
  AI &amp; Custom Development
</span>
        </h1>

        <p className="hero-description">
          {hero.description}
        </p>

        <p className="hero-supporting-text">
          {hero.supportingText}
        </p>

        <div className="hero-actions">
          <Link to="/products" className="primary-button">
            {hero.primaryButton}
            <ArrowRight size={19} />
          </Link>

          <button
            type="button"
            className="secondary-button"
            onClick={openContactForm}
          >
            <Play size={17} />
            {hero.secondaryButton}
          </button>
        </div>

        <div className="hero-statistics">
          {hero.statistics.map((stat, index) => (
            <div className="hero-stat" key={index}>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
  className="hero-visual"
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.2 }}
>
  <HeroScene />
</motion.div>
    </section>
  )
}

export default Hero
