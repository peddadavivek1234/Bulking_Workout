import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiActivity
} from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Workout Plans', path: '#workouts' },
    { name: 'Schedule', path: '#schedule' },
    { name: 'Nutrition', path: '#nutrition' },
    { name: 'About', path: '#about' }
  ]

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <FiActivity />
          </div>

          <span>
            IRON<span className="logo-highlight">FORGE</span>
          </span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#join"
            className="mobile-join-btn"
            onClick={closeMenu}
          >
            Join Now <FiArrowUpRight />
          </a>
        </nav>

        <div className="navbar-right">

          <a href="#join" className="navbar-join-btn">
            Join Now <FiArrowUpRight />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar
