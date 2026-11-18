
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Circle,
  Compass,
  Code2,
  Layers3,
  Rocket,
  ArrowUpRight,
} from 'lucide-react'

const stages = [
  {
    title: 'Architectural Blueprint',
    description:
      'Forging the foundation for infinite scalability and security.',
    detail:
      'We establish the technical foundation, define the architecture and map the project requirements.',
    icon: Compass,
    status: 'Foundation',
  },
  {
    title: 'Strategic Iteration',
    description:
      'Building the core mechanics of your digital ecosystem.',
    detail:
      'We develop, test and refine the essential features through focused development cycles.',
    icon: Code2,
    status: 'Development',
  },
  {
    title: 'Synergistic Expansion',
    description:
      'Seamlessly bridging specialized services and global networks.',
    detail:
      'We connect the platform components and integrate the services required for the complete solution.',
    icon: Layers3,
    status: 'Integration',
  },
  {
    title: 'Global Launch-Ready',
    description:
      'Orchestrating the transition from staging to market dominance.',
    detail:
      'We prepare the completed solution for deployment, launch and ongoing operation.',
    icon: Rocket,
    status: 'Launch',
  },
]

function ProjectJourney() {
  const [activeStage, setActiveStage] = useState(1)
  const current = stages[activeStage]
  const CurrentIcon = current.icon

  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">

        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="journey-eyebrow">REAL-TIME VISIBILITY</span>
          <h2>
            Watch Your Vision
            <br />
            <span>Evolve in Real-Time.</span>
          </h2>
          <p>
            Gain visibility into every stage of development.
            We turn your strategic roadmap into a high-performance reality.
          </p>
        </motion.div>

        <div className="journey-layout">

          <div className="journey-timeline">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon
              const isActive = activeStage === index
              const isComplete = index < activeStage

              return (
                <button
                  key={stage.title}
                  className={`journey-stage ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStage(index)}
                >
                  <span className="journey-stage-marker">
                    {isComplete ? (
                      <CheckCircle2 size={21} />
                    ) : isActive ? (
                      <StageIcon size={21} />
                    ) : (
                      <Circle size={21} />
                    )}
                  </span>

                  <span className="journey-stage-copy">
                    <strong>{stage.title}</strong>
                    <span>{stage.description}</span>
                  </span>

                  <ArrowUpRight className="journey-stage-arrow" size={19} />
                </button>
              )
            })}
          </div>

          <div className="journey-dashboard">
            <div className="journey-dashboard-top">
              <span>PROJECT DEVELOPMENT</span>
              <span className="journey-live">
                <i /> LIVE JOURNEY
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                className="journey-dashboard-content"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="journey-icon-display">
                  <div className="journey-icon-orbit" />
                  <CurrentIcon size={54} strokeWidth={1.4} />
                </div>

                <span className="journey-stage-label">
                  CURRENT DEVELOPMENT STAGE
                </span>

                <h3>{current.title}</h3>
                <p>{current.detail}</p>

                <div className="journey-progress">
                  {stages.map((stage, index) => (
                    <span
                      key={stage.title}
                      className={index <= activeStage ? 'filled' : ''}
                    />
                  ))}
                </div>

                <div className="journey-progress-labels">
                  <span>{current.status}</span>
                  <span>Stage {activeStage + 1} of 4</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="journey-dashboard-footer">
              <span>EDSOLS / DEVELOPMENT JOURNEY</span>
              <span>INTERACTIVE OVERVIEW ↗</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProjectJourney
