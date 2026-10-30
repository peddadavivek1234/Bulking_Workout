import React from 'react'
import {
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiCoffee,
  FiArrowUpRight,
  FiCalendar
} from 'react-icons/fi'
import { weeklySchedule } from '../../data/schedule'
import './TrainingSchedule.css'

const TrainingSchedule = () => {
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-container">

        <div className="schedule-heading">
          <div className="schedule-subtitle">
            <span></span>
            STAY CONSISTENT. GET STRONGER.
          </div>

          <h2>
            YOUR WEEKLY <span>TRAINING SCHEDULE</span>
          </h2>

          <p>
            Follow a structured weekly workout routine designed to
            build muscle, improve strength, and support proper recovery.
          </p>
        </div>

        <div className="schedule-top-info">
          <div className="schedule-info-item">
            <div className="schedule-info-icon">
              <FiCalendar />
            </div>
            <div>
              <h4>7 Days</h4>
              <p>Weekly Plan</p>
            </div>
          </div>

          <div className="schedule-info-item">
            <div className="schedule-info-icon">
              <FiActivity />
            </div>
            <div>
              <h4>6 Days</h4>
              <p>Training Sessions</p>
            </div>
          </div>

          <div className="schedule-info-item">
            <div className="schedule-info-icon">
              <FiCoffee />
            </div>
            <div>
              <h4>1 Day</h4>
              <p>Rest & Recovery</p>
            </div>
          </div>
        </div>

        <div className="schedule-grid">
          {weeklySchedule.map((day) => (
            <div
              className={`schedule-card ${day.status === 'Rest' ? 'rest-card' : ''}`}
              key={day.id}
            >
              <div className="schedule-card-top">
                <span className="schedule-day">{day.day}</span>

                <span className={`schedule-status ${day.status.toLowerCase()}`}>
                  {day.status === 'Rest' ? <FiCoffee /> : <FiActivity />}
                  {day.status}
                </span>
              </div>

              <div className="schedule-card-heading">
                <h3>{day.focus}</h3>
                <p>{day.type}</p>
              </div>

              <div className="schedule-exercises">
                {day.exercises.map((exercise, index) => (
                  <div className="schedule-exercise" key={index}>
                    <div className="exercise-check">
                      <FiCheckCircle />
                    </div>

                    <div className="exercise-details">
                      <h4>{exercise.name}</h4>
                      <p>
                        {exercise.sets} <span>•</span> {exercise.reps}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="schedule-card-bottom">
                <span>
                  <FiClock />
                  {day.duration}
                </span>

                <span className="schedule-card-number">
                  {String(day.id).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-note">
          <div className="schedule-note-icon">
            <FiActivity />
          </div>

          <div className="schedule-note-content">
            <h3>Consistency Creates Results</h3>
            <p>
              Focus on proper exercise technique, gradual progression,
              sufficient nutrition, and recovery. Adjust training volume
              according to your experience and recovery.
            </p>
          </div>

          <a href="#nutrition" className="schedule-note-link">
            Nutrition Guide <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  )
}

export default TrainingSchedule
