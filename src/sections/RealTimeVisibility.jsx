
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Circle,
  LayoutDashboard,
  Users,
  Search,
  Clock,
  MessageSquare,
} from 'lucide-react'
import '../styles/RealTimeVisibility.css'

const stages = [
  {
    title: 'Architectural Blueprint',
    description: 'Forging the foundation for infinite scalability and security.',
  },
  {
    title: 'Strategic Iteration',
    description: 'Building the core mechanics of your digital ecosystem.',
  },
  {
    title: 'Synergistic Expansion',
    description: 'Seamlessly bridging specialized services and global networks.',
  },
  {
    title: 'Global Launch-Ready',
    description: 'Orchestrating the transition from staging to market dominance.',
  },
]

const tasks = [
  { category: 'Engineering', title: 'Enterprise Data Fabric', description: 'Architecting multi-layer isolation for secure cross-platform systems.', date: 'Dec 28', color: 'green' },
  { category: 'Performance', title: 'High-Throughput Tuning', description: 'Eliminating bottlenecks for high-performance APIs.', date: 'Dec 25', color: 'orange' },
  { category: 'Communications', title: 'Automated Messaging Bridge', description: 'Orchestrating mission-critical transactional workflows.', date: 'Dec 20', color: 'purple' },
  { category: 'Commerce', title: 'Global Commerce Gateway', description: 'Engineering resilient subscription logic.', date: 'Jan 02', color: 'red' },
  { category: 'Intelligence', title: 'Intelligence Insights Engine', description: 'Streaming telemetry data into actionable insights.', date: 'Dec 31', color: 'blue' },
  { category: 'Reliability', title: 'Infrastructure Stress-Test', description: 'Simulating high-scale scenarios to validate reliability.', date: 'Dec 18', color: 'green' },
  { category: 'Security', title: 'Unified Identity Core', description: 'Bridging enterprise SSO protocols.', date: 'Jan 05', color: 'purple' },
]

function RealTimeVisibility() {
  const [activeStage, setActiveStage] = useState(1)

  return (
    <section className="rt-section" id="real-time-visibility">
      <div className="rt-layout">

        <motion.div
          className="rt-content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rt-eyebrow">REAL-TIME VISIBILITY</span>

          <h2>
            Watch Your Vision
            <span>Evolve in Real-Time</span>
          </h2>

          <p className="rt-description">
            Gain unparalleled visibility into our agile engineering process.
            We turn your strategic roadmap into a high-performance reality
            with total transparency at every milestone.
          </p>

          <div className="rt-stages">
            {stages.map((stage, index) => (
              <button
                className={`rt-stage ${activeStage === index ? 'active' : ''}`}
                key={stage.title}
                onClick={() => setActiveStage(index)}
              >
                <span className="rt-stage-icon">
                  {index < activeStage
                    ? <CheckCircle2 size={22} />
                    : activeStage === index
                      ? <Circle size={22} />
                      : <Circle size={22} />}
                </span>

                <span className="rt-stage-text">
                  <strong>{stage.title}</strong>
                  <small>{stage.description}</small>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rt-dashboard"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="rt-browser-bar">
            <div className="rt-browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span><Clock size={13} /> app.edsols.in/project/active</span>
          </div>

          <div className="rt-dashboard-body">
            <aside className="rt-sidebar">
              <LayoutDashboard />
              <Users />
              <Search />
              <MessageSquare />
            </aside>

            <div className="rt-board">
              <div className="rt-board-heading">
                <div>
                  <h3>Active Sprint</h3>
                  <p>JAN 2026 · 12 TASKS REMAINING</p>
                </div>
                <div className="rt-avatars">
                  <i>H</i><i>A</i><i>R</i><b>+8</b>
                </div>
              </div>

              <div className="rt-status-row">
                <span>🔵 In Progress <b>3</b></span>
                <span>🟠 In Review <b>2</b></span>
                <span>🟢 Completed <b>8</b></span>
              </div>

              <div className="rt-task-grid">
                {tasks.map((task, index) => (
                  <motion.article
                    className="rt-task"
                    key={task.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <span className="rt-task-category">{task.category}</span>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="rt-task-footer">
                      <span><Clock size={12} /> {task.date}</span>
                      <i className={`rt-person ${task.color}`}>
                        {task.title.charAt(0)}
                      </i>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="rt-online-notification"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <CheckCircle2 size={34} />
            <div>
              <strong>Services Online</strong>
              <span>Core platform logic successfully stress-tested</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default RealTimeVisibility
