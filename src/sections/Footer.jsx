import { MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContactForm } from '../components/useContactForm'
import '../styles/Footer.css'

function Footer() {
  const { openContactForm } = useContactForm()

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/edsols-logo.png"
            alt="EDSOLS Innovations Private Limited"
          />

          <p>
            Engineering the next generation of intelligent digital
            ecosystems through precision architecture and edge-AI
            integration.
          </p>
        </div>

        <div className="footer-column">
          <h4>CORPORATE HEADQUARTERS</h4>
          
<a
  href="https://www.google.com/maps/place/34,+6th+Main+Rd,+Shamanna+Layout,+Subaiya+Reddy+Layout,+Banaswadi,+Bengaluru,+Karnataka+560043/@13.010749,77.6471199,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16d46989b1c3:0xf2c7a605c00f9708!8m2!3d13.010749!4d77.6496948!16s%2Fg%2F11fy_db5gy?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-contact footer-address-link"
>
  <MapPin />
  <p>
    34, 6th Main, Banaswadi Main Road,
    Bangalore, Karnataka, India – 560043
  </p>
</a>

        </div>

        <div className="footer-column">
          <h4>ECOSYSTEM</h4>
          <a href="#solutions">Solutions & Platforms</a>
          <a href="#hardware">AI Hardware stack</a>
          <Link to="/founders-program">Founders Program</Link>
          <a href="#careers">Careers</a>
          <button
            type="button"
            className="footer-contact-trigger"
            onClick={openContactForm}
          >
            Global Inquiries
          </button>
        </div>

        <div className="footer-column">
          <h4>DIGITAL PRESENCE</h4>

          <a href="mailto:sales@edsols.in" className="footer-contact">
            <Mail />
            <span>sales@edsols.in</span>
          </a>

          <a
  href="https://www.linkedin.com/company/edsolsinnovations/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-contact footer-linkedin"
>
  <span>Connect on LinkedIn</span>
  <ArrowUpRight size={16} />
</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 EDSOLS INNOVATION PRIVATE LIMITED</p>
        <a href="#terms">
          TERMS OF USE <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
