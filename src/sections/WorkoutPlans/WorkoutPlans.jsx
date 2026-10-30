
import React from 'react'
import {
  FiArrowUpRight,
  FiClock,
  FiCalendar,
  FiCheckCircle
} from 'react-icons/fi'
import { workoutPlans } from '../../data/workoutPlans'
import './WorkoutPlans.css'

const WorkoutPlans = () => {
  return (
    <section className="workout-section" id="workouts">

      <div className="workout-container">

        <div className="workout-heading">

          <div className="workout-subtitle">
            <span></span>
            TRAIN SMARTER. GROW STRONGER.
          </div>

          <h2>
            CHOOSE YOUR <span>WORKOUT PLAN</span>
          </h2>

          <p>
            Find the perfect training program for your fitness level.
            Build muscle, increase strength, and achieve your body goals
            with structured workout plans.
          </p>

        </div>

        <div className="workout-cards">

          {workoutPlans.map((plan) => (
            <div className="workout-card" key={plan.id}>

              <div className="workout-image-wrapper">

                <img
                  src={plan.image}
                  alt={plan.title}
                  className="workout-image"
                />

                <div className="workout-image-overlay"></div>

                <span className={`difficulty-badge ${plan.difficulty.toLowerCase()}`}>
                  {plan.difficulty}
                </span>

                <span className="workout-level">
                  {plan.level}
                </span>

              </div>

              <div className="workout-card-content">

                <div className="workout-meta">

                  <span>
                    <FiClock />
                    {plan.duration}
                  </span>

                  <span>
                    <FiCalendar />
                    {plan.days}
                  </span>

                </div>

                <h3>{plan.title}</h3>

                <p className="workout-description">
                  {plan.description}
                </p>

                <div className="workout-type">
                  <FiCheckCircle />
                  <span>{plan.exercises}</span>
                </div>

                <a href="#schedule" className="workout-explore-btn">
                  Explore Plan
                  <FiArrowUpRight />
                </a>

              </div>

            </div>
          ))}

        </div>

        <div className="workout-bottom">

          <p>
            Not sure which plan is right for you?
            <span> Start with your fitness level.</span>
          </p>

          <a href="#schedule">
            View Training Schedule
            <FiArrowUpRight />
          </a>

        </div>

      </div>

    </section>
  )
}

export default WorkoutPlans
