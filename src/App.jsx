import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import WorkoutPlans from './sections/WorkoutPlans/WorkoutPlans'
import TrainingSchedule from './sections/TrainingSchedule/TrainingSchedule'
import Nutrition from './sections/Nutrition/Nutrition'
import Benefits from './sections/Benefits/Benefits'
import Testimonials from './sections/Testimonials/Testimonials'
import CTA from './sections/CTA/CTA'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WorkoutPlans />
      <TrainingSchedule />
      <Nutrition />
      <Benefits />
      <Testimonials />
      <CTA />
      <About />
      <Footer />
    </div>
  )
}

export default App