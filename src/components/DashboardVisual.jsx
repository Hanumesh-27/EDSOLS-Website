
import { motion } from 'framer-motion'
import { CheckCircle2, Cloud, ShieldCheck } from 'lucide-react'
import '../styles/DashboardVisual.css'

function DashboardVisual() {
  return (
    <div className="dashboard-visual">

      {/* Main enterprise dashboard */}
      <motion.div
        className="dashboard-main-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/enterprise-dashboard.png"
          alt="Enterprise analytics dashboard"
        />

        <div className="dashboard-features">
          <div>
            <Cloud size={18} />
            <span>Cloud Architecture</span>
          </div>
          <div>
            <ShieldCheck size={18} />
            <span>Automated SSO</span>
          </div>
        </div>
      </motion.div>

      {/* Floating workflow automation card */}
      <motion.div
        className="workflow-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="workflow-card-heading">
          WORKFLOW AUTOMATION
        </div>

        <img
          src="/images/workflow-automation.png"
          alt="Workflow automation builder"
        />

        <div className="workflow-tags">
          <span>Stripe</span>
          <span>Redis</span>
          <span>SaaS</span>
        </div>
      </motion.div>

      {/* Active instance status */}
      <motion.div
        className="active-instance"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <CheckCircle2 size={34} />
        <div>
          <strong>Active Instance</strong>
          <span>All Services Operational</span>
        </div>
      </motion.div>

    </div>
  )
}

export default DashboardVisual
