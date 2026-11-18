
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContactForm } from './useContactForm'

function Navbar() {
  const { openContactForm } = useContactForm()
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Our Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Founders Program', href: '/founders-program' },
  ]

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Link to="/" className="nav-logo">
        <img
          src="/images/edsols-logo.png"
          alt="EDSOLS Innovations Private Limited"
        />
      </Link>

      <nav aria-label="Main navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <a
        className="nav-edu-link"
        href="https://edu.edsols.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        EDU Website
      </a>

      <button
        type="button"
        className="nav-cta"
        onClick={openContactForm}
      >
        Let's Talk <ArrowUpRight size={15} />
      </button>
    </motion.header>
  )
}

export default Navbar
  