
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  Eye,
  Layers3,
  LayoutTemplate,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Workflow,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { useContactForm } from '../components/useContactForm'
import Footer from './Footer'
import '../styles/Services.css'

const aiServices = [
  {
    title: 'Generative AI & LLMs',
    description: 'Custom LLM implementation for business automation.',
    icon: BrainCircuit,
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, user behaviour and market shifts.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Computer Vision',
    description: 'Automated monitoring, object detection and quality control.',
    icon: Eye,
  },
  {
    title: 'Data Engineering',
    description: 'Clean and reliable pipelines powering AI systems.',
    icon: Database,
  },
]

const developmentServices = [
  {
    title: 'Web Applications',
    description: 'High performance portals and SaaS platforms.',
    icon: LayoutTemplate,
    image: '/images/service-web-development.jpg',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform experiences for iOS and Android.',
    icon: Smartphone,
    image: '/images/service-mobile-development.jpg',
  },
  {
    title: 'Backend Architecture',
    description: 'Robust server logic using Python and Node.',
    icon: Server,
    image: '/images/service-backend-architecture.jpg',
  },
  {
    title: 'API Development',
    description: 'Secure REST & GraphQL integrations.',
    icon: Workflow,
    image: '/images/service-api-development.jpg',
  },
]

const designServices = [
  {
    title: 'UI/UX Design',
    description:
      'High-fidelity prototypes and wireframes that prioritize user flow and conversion.',
    icon: Palette,
    image: '/images/service-uiux-design.jpg',
  },
  {
    title: 'Technical Consulting',
    description:
      'Choose the right tech stack and shape a clear, practical development roadmap.',
    icon: Code2,
    image: '/images/service-technical-consulting.jpg',
  },
  {
    title: 'MVP Development',
    description:
      'A streamlined fast-track service for startups to launch a functional product in 6–8 weeks.',
    icon: Rocket,
    image: '/images/service-mvp-development.jpg',
  },
]

const technologyGroups = [
  { title: 'AI / ML', technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain'] },
  { title: 'Frontend', technologies: ['React', 'Next.js', 'Tailwind', 'TypeScript'] },
  { title: 'Backend', technologies: ['Python', 'Node.js', 'Django', 'FastAPI'] },
  { title: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Docker', 'Vercel'] },
]

function ServiceCard({ service, index, className = '' }) {
  const Icon = service.icon

  return (
    <motion.article
      className={`service-card ${service.image ? 'service-card-with-image' : ''} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      {service.image && (
        <img className="service-card-image" src={service.image} alt="" loading="lazy" />
      )}
      <div className={`service-card-content ${service.image ? 'service-card-content-with-image' : ''}`}>
        {!service.image && (
          <div className="service-card-top">
            <span className="service-icon-wrap" aria-hidden="true">
              <Icon size={23} strokeWidth={1.7} />
            </span>
          </div>
        )}
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </motion.article>
  )
}

function Services() {
  const { openContactForm } = useContactForm()

  return (
    <main className="services-page">
      <Navbar />

      <section className="services-hero">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <span className="services-eyebrow">ENGINEERING, BUILT AROUND YOU</span>
          <h1>
            High-performance engineering for an{' '}
            <span>AI-driven world.</span>
          </h1>
          <p>
            From fine-tuning large language models to architecting scalable
            full-stack ecosystems, we turn ambitious ideas into functional
            reality.
          </p>
          <div className="services-hero-actions">
            <button
              type="button"
              className="services-button"
              onClick={openContactForm}
            >
              Start a Project <ArrowUpRight size={17} />
            </button>
            <a href="#services" className="services-text-link">
              Explore our services <ArrowDown size={16} />
            </a>
          </div>
          <div className="services-hero-note">
            <span className="services-live-dot" />
            AI, software & product design — under one roof
          </div>
        </motion.div>
        <motion.div
          className="services-hero-art"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="services-orbit services-orbit-outer" />
          <div className="services-orbit services-orbit-inner" />
          <div className="services-art-glow" />
          <div className="services-art-core">
            <BrainCircuit size={76} strokeWidth={1.15} />
          </div>
          <span className="services-art-label services-art-label-one">INTELLIGENCE</span>
          <span className="services-art-label services-art-label-two">ENGINEERING</span>
          <span className="services-art-label services-art-label-three">IMPACT</span>
        </motion.div>
      </section>

      <section className="services-section services-ai-section" id="services">
        <div className="services-section-heading">
          <div>
            <span className="services-eyebrow">AI SERVICES</span>
            <h2>Intelligence <span>integrated.</span></h2>
          </div>
          <p>
            We build intelligent AI systems that automate workflows, unlock
            insights, and power real-world products.
          </p>
        </div>
        <div className="services-grid">
          {aiServices.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.title} />
          ))}
        </div>
      </section>

      <section className="services-section services-development-section">
        <div className="services-section-heading">
          <div>
            <span className="services-eyebrow">FULL-STACK DEVELOPMENT</span>
            <h2>Scalable. Secure. <span>Seamless.</span></h2>
          </div>
          <p>
            We build the engine and the interface, delivering fast, scalable
            and reliable platforms.
          </p>
        </div>
        <div className="services-grid">
          {developmentServices.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.title} />
          ))}
        </div>
      </section>

      <section className="services-design-section">
        <div className="services-design-cards">
          {designServices.map((service, index) => (
            <ServiceCard
              service={service}
              index={index}
              key={service.title}
              className="service-card-compact"
            />
          ))}
        </div>
        <div className="services-design-copy">
          <span className="services-eyebrow">PRODUCT DESIGN</span>
          <h2>Design that speaks <span>your brand.</span></h2>
          <p>
            A powerful backend is useless without a great user experience. We
            bridge the gap between complex logic and human intuition.
          </p>
        </div>
      </section>

      <section className="services-tech-section">
        <div className="services-tech-heading">
          <span className="services-eyebrow">TECHNOLOGIES</span>
          <h2>Tools we <span>master.</span></h2>
          <p>
            A battle-tested stack of industry-leading technologies, selected to
            turn complex challenges into competitive advantages.
          </p>
        </div>
        <div className="services-tech-grid">
          {technologyGroups.map((group, index) => (
            <motion.article
              className="services-tech-card"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="services-tech-card-heading">
                <Layers3 size={18} strokeWidth={1.7} aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <div className="services-tech-list">
                {group.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <span className="services-eyebrow">LET'S BUILD WHAT'S NEXT</span>
        <h2>Let’s build the <span>future together.</span></h2>
        <p>
          Whether you’re launching a new product or scaling an existing idea,
          our team helps you build and ship faster.
        </p>
        <button
          type="button"
          className="services-button"
          onClick={openContactForm}
        >
          Bring Your Idea to Life <ArrowUpRight size={17} />
        </button>
      </section>

      <Footer />
    </main>
  )
}

export default Services
