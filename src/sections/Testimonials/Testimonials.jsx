import React from 'react'
import { motion } from 'framer-motion'
import {
  FiStar,
  FiMessageSquare,
  FiArrowUpRight
} from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="testimonials-label">
            <span></span>
            REAL RESULTS. REAL PEOPLE.
          </span>

          <h2>
            SUCCESS STORIES FROM
            <span> OUR COMMUNITY</span>
          </h2>

          <p>
            Discover how our structured workout plans and nutrition
            guidance are helping people build strength and transform
            their fitness journeys.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FiStar key={index} />
                  ))}
                </div>

                <FiMessageSquare className="testimonial-quote-icon" />
              </div>

              <p className="testimonial-review">
                "{testimonial.review}"
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-user">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div className="testimonial-user-info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                  <small>{testimonial.duration}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3>YOUR TRANSFORMATION STARTS TODAY.</h3>
            <p>
              Take the first step towards a stronger version of yourself.
            </p>
          </div>

          <a href="#join" className="testimonials-cta">
            Start Your Journey <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
