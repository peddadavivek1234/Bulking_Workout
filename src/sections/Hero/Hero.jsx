import React from 'react'
import {
  FiArrowUpRight,
  FiPlay,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <FiTrendingUp />
            <span>YOUR FITNESS JOURNEY STARTS HERE</span>
          </div>

          <h1>
            BUILD MUSCLE.
            <br />
            BUILD <span>STRENGTH.</span>
          </h1>

          <p className="hero-description">
            Transform your body with structured bulking programs,
            expert workout plans, and smart nutrition strategies.
            Your stronger version starts today.
          </p>

          <div className="hero-buttons">
            <a href="#workouts" className="hero-primary-btn">
              Start Your Journey
              <FiArrowUpRight />
            </a>

            <a href="#schedule" className="hero-secondary-btn">
              <span className="play-icon">
                <FiPlay />
              </span>
              Explore Plans
            </a>
          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <h3>12K<span>+</span></h3>
              <p>Active Members</p>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <h3>50<span>+</span></h3>
              <p>Workout Plans</p>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <h3>98<span>%</span></h3>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

        <div className="hero-floating-card">
          <div className="floating-icon">
            <FiUsers />
          </div>
          <div>
            <h4>Stronger Together</h4>
            <p>Join our fitness community</p>
          </div>
        </div>

      </div>

      <div className="hero-bottom-label">
        <span></span>
        DISCIPLINE. DEDICATION. RESULTS.
      </div>

    </section>
  )
}

export default Hero
