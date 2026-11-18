import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Footer from "./Footer";
import '../styles/Products.css'
import Navbar from '../components/Navbar'
import { useContactForm } from '../components/useContactForm'
const products = [
  {
    title: 'Next-Gen Early Childhood Ecosystem',
    subtitle: 'Empowering parents through AI-driven development tracking.',
    features: [
      'Intelligent milestone tracking tailored to each child',
      'Expert-led educational content modules',
      'Secure architecture protecting family data',
    ],
    status: 'Live in Market | Active Users | Scaling Nationally',
    video: 'child-development.mp4',
  },
  {
    title: 'Custom LLM for Workflow Automation',
    subtitle: 'Bridging the gap between enterprise data and decision making.',
    features: [
      'Semantic search across thousands of internal documents',
      'AI-generated operational reports',
      'Integration with CRM and project management tools',
    ],
    status: 'Deployed | Reduced Internal Search Time by 60%',
    video: 'enterprise-automation.mp4',
  },
  {
    title: 'Scalable SaaS Launchpad',
    subtitle: 'The backbone for high-growth startups launching MVPs quickly.',
    features: [
      'Modular user authentication system',
      'Subscription management with Stripe / Razorpay',
      'Real-time dashboards built with React and D3.js',
    ],
    status: 'Operational | Successfully launched 5+ startups',
    video: 'saas-ecosystem.mp4',
  },
]

const lifecycle = [
  {
    number: '01',
    title: 'Continuous Optimization',
    description:
      'We monitor real user feedback and AI performance metrics to continuously improve the product and release meaningful updates.',
  },
  {
    number: '02',
    title: 'Infrastructure Management',
    description:
      'Our team manages cloud infrastructure across AWS and GCP, ensuring your platform stays fast, secure, and scalable.',
  },
  {
    number: '03',
    title: 'Data-Driven Evolution',
    description:
      'We analyze real user behavior and platform analytics to recommend the next high-impact features for your roadmap.',
  },
]

function Products() {
  const { openContactForm } = useContactForm()

  return (
    <main className="products-page">
      <Navbar />

      <section className="products-hero">
        <div className="products-hero-content">
          <span className="products-eyebrow">OUR PRODUCTS</span>
          <h1>
            From Concept to Market
            <span> Solutions That Drive Impact.</span>
          </h1>
          <p>
            We don’t just build software; we launch ecosystems. Explore the
            diverse platforms we have developed, deployed, and scaled in the
            real world.
          </p>
        </div>
      </section>

      <section className="products-showcase">
        <div className="products-section-heading">
          <span className="products-eyebrow">FEATURED PRODUCTS</span>
          <h2>
            Platforms We’ve <span>Built and Scaled.</span>
          </h2>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <motion.article
              className={`product-row ${index % 2 === 1 ? 'reverse' : ''}`}
              key={product.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-info">
                <span className="product-number">
                  PRODUCT / 0{index + 1}
                </span>
                <h3>{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>

                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <p className="product-status">
                  <span className="status-dot" />
                  Status: {product.status}
                </p>
              </div>

              <div className="product-image">
  <video
    src={`/videos/${product.video}`}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="products-lifecycle">
        <div className="products-section-heading">
          <span className="products-eyebrow">BEYOND THE LAUNCH</span>
          <h2>
            Our <span>Lifecycle Approach.</span>
          </h2>
        </div>

        <div className="lifecycle-grid">
          {lifecycle.map((item) => (
            <motion.article
              className="lifecycle-card"
              key={item.number}
              whileHover={{ y: -6 }}
            >
              <span className="lifecycle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="products-cta">
        <span className="products-eyebrow">HAVE AN IDEA?</span>
        <h2>
          Got the Next Big <span>Product Idea?</span>
        </h2>
        <p>
          Let’s turn your vision into the next success story on this page. Our
          team helps startups and enterprises launch scalable platforms faster.
        </p>
        <button
          type="button"
          className="products-cta-button"
          onClick={openContactForm}
        >
          Pitch Your Product Idea <ArrowUpRight size={18} />
        </button>
      </section>

      <Footer />
    </main>
  )
}

export default Products

