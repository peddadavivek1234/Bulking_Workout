import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import './CTA.css'

const CTA = () => {
  const benefits = [
    'Structured workout programs',
    'Nutrition and meal guidance',
    'Progress-focused training'
  ]

  return (
    <section className="cta-section" id="join">
      <div className="cta-overlay"></div>

      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="cta-label">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            STOP DREAMING.
            <span> START BUILDING.</span>
          </h2>

          <p className="cta-description">
            Your stronger version is waiting. Follow a structured
            workout routine, fuel your body with proper nutrition,
            and build the strength you've always wanted.
          </p>

          <div className="cta-benefits">
            {benefits.map((benefit, index) => (
              <div className="cta-benefit" key={index}>
                <FiCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <a href="#workouts" className="cta-primary-btn">
              Join Now <FiArrowUpRight />
            </a>

            <a href="#schedule" className="cta-secondary-btn">
              Explore Training Plans
            </a>
          </div>

          <div className="cta-bottom-text">
            DISCIPLINE BUILDS THE BODY. CONSISTENCY BUILDS THE LEGACY.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA