
import { motion } from 'framer-motion'
import '../styles/FeaturedSuccess.css'

const projects = [
  {
    category: 'EDTECH / CHILD DEVELOPMENT',
    title: 'Child Development Platform',
    description:
      'A digital platform designed to make developmental progress and learning milestones easier to track.',
    image: '/images/child-development.png',
  },
  {
    category: 'AI / ENTERPRISE AUTOMATION',
    title: 'Enterprise Automation',
    description:
      'An intelligent workflow environment connecting processes, data and AI-powered automation.',
    image: '/images/enterprise-automation.png',
  },
  {
    category: 'CLOUD / SAAS',
    title: 'SaaS Ecosystem',
    description:
      'A unified analytics environment for monitoring infrastructure, performance and business operations.',
    image: '/images/saas-ecosystem.png',
  },
]

function FeaturedSuccess() {
  return (
    <section className="featured-section" id="featured-success">
      <div className="featured-container">
        <div className="featured-heading">
          <span className="featured-eyebrow">SELECTED WORK</span>
          <h2>
            Featured <span>Success.</span>
          </h2>
          <p>
            Exploring digital experiences powered by thoughtful design,
            intelligent technology and scalable engineering.
          </p>
        </div>

        <div className="featured-grid">
          {projects.map((project, index) => (
            <motion.article
              className="featured-card"
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="featured-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="featured-image-wrap">
  <img src={project.image} alt={project.title} />
</div>
              </div>

              <div className="featured-card-content">
                <span className="featured-category">
                  {project.category}
                </span>

                <div className="featured-title-row">
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSuccess
