
import React from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FiTarget />,
      title: 'Goal-Oriented Training',
      description: 'Every workout is designed to help you achieve measurable fitness goals.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Progressive Growth',
      description: 'Build strength and muscle through structured progressive training.'
    },
    {
      icon: <FiUsers />,
      title: 'Supportive Community',
      description: 'Stay motivated with a community that encourages your fitness journey.'
    }
  ]

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
            alt="IRONFORGE fitness training"
            className="about-image"
          />

          <div className="about-experience-card">
            <h3>100%</h3>
            <p>Commitment to Growth</p>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">ABOUT IRONFORGE</span>

          <h2>
            WE BUILD
            <span> STRONGER </span>
            PEOPLE.
          </h2>

          <p className="about-description">
            IRONFORGE is built for people who want to transform their fitness
            journey through consistency, discipline, and smart training.
            Our goal is to make muscle building easier to understand with
            structured workout plans and practical nutrition guidance.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div className="about-feature" key={index}>
                <div className="about-feature-icon">
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#workouts" className="about-button">
            Explore Our Programs <FiArrowUpRight />
          </a>
        </motion.div>

      </div>

      <div className="about-bottom-stats">
        <div className="about-stat">
          <h3>12K+</h3>
          <p>Fitness Enthusiasts</p>
        </div>

        <div className="about-stat">
          <h3>50+</h3>
          <p>Training Programs</p>
        </div>

        <div className="about-stat">
          <h3>100%</h3>
          <p>Focus on Progress</p>
        </div>

        <div className="about-stat">
          <h3>24/7</h3>
          <p>Fitness Inspiration</p>
        </div>
      </div>
    </section>
  )
}

export default About
