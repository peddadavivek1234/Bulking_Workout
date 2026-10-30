
import React from 'react'
import { motion } from 'framer-motion'
import {
  FiTrendingUp,
  FiTarget,
  FiCoffee,
  FiActivity,
  FiAward,
  FiRefreshCw,
  FiArrowUpRight,
  FiCheckCircle
} from 'react-icons/fi'
import { benefits } from '../../data/benefits'
import './Benefits.css'

const benefitIcons = {
  trending: <FiTrendingUp />,
  target: <FiTarget />,
  nutrition: <FiCoffee />,
  activity: <FiActivity />,
  strength: <FiAward />,
  recovery: <FiRefreshCw />
}

const Benefits = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">

        <div className="benefits-heading">
          <div className="benefits-subtitle">
            <span></span>
            WHY CHOOSE IRONFORGE?
          </div>

          <h2>
            BUILT FOR <span>YOUR PROGRESS</span>
          </h2>

          <p>
            Everything you need to stay focused, train smarter,
            build strength, and support your muscle-building journey.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              className="benefit-card"
              key={benefit.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <div className="benefit-card-top">
                <div className="benefit-icon">
                  {benefitIcons[benefit.icon]}
                </div>

                <span className="benefit-number">
                  {benefit.number}
                </span>
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <div className="benefit-card-bottom">
                <span>IRONFORGE ADVANTAGE</span>
                <FiCheckCircle />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="benefits-banner">
          <div className="benefits-banner-content">
            <span>YOUR JOURNEY. YOUR STRENGTH.</span>

            <h3>
              SMALL STEPS. <span>BIG RESULTS.</span>
            </h3>

            <p>
              Stay disciplined, follow your plan, and keep moving
              forward. Build habits that support lasting progress.
            </p>
          </div>

          <a href="#testimonials" className="benefits-banner-btn">
            See Success Stories <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Benefits
