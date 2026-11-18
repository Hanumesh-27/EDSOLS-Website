
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import '../styles/TechStack.css'

const techCategories = [
  { name: 'Frontend', technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Sass'] },
  { name: 'Backend', technologies: ['Python', 'PHP', 'Node.js', 'Java', 'Go'] },
  { name: 'Frameworks', technologies: ['Angular', 'Next.js', 'Django', 'Flask', 'Laravel', 'Express'] },
  { name: 'Libraries & CSS', technologies: ['React', 'Vue.js', 'Tailwind', 'Bootstrap', 'jQuery', 'Redux'] },
  { name: 'Database', technologies: ['Postgres', 'MySQL', 'MongoDB', 'Redis', 'SQLite'] },
  { name: 'DevOps & Tools', technologies: ['Docker', 'Git', 'GitHub', 'Kubernetes', 'Composer', 'npm'] },
  { name: 'Cloud & Servers', technologies: ['AWS', 'GCP', 'Nginx', 'Apache', 'Linux', 'Ubuntu'] },
  { name: 'Mobile', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'] },
  { name: 'UI/UX Design', technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'] },
  { name: 'AI & APIs', technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'Claude'] },
]

function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0)
  const active = techCategories[activeCategory]

  return (
    <section className="tech-section" id="technologies">
      <div className="tech-container">

        <div className="tech-heading">
          <span className="tech-eyebrow">TECHNOLOGIES</span>
          <h2>Tools We <span>Master.</span></h2>
          <p>
  We leverage a battle-tested stack of industry-leading technologies
  to architect high-performance, scalable solutions that transform
  complex challenges into competitive advantages.
</p>
        </div>

        <div className="tech-tabs">
          {techCategories.map((category, index) => (
            <button
              key={category.name}
              className={`tech-tab ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="tech-panel">
          <div className="tech-panel-heading">
            <div>
              <Code2 size={19} />
              <h3>{active.name}</h3>
            </div>
            <span>{active.technologies.length} TECHNOLOGIES</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="tech-grid"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {active.technologies.map((technology, index) => (
                <motion.div
                  className="tech-item"
                  key={technology}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <span className="tech-dot" />
                  {technology}
                  <ArrowUpRight size={13} className="tech-item-arrow" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default TechStack
