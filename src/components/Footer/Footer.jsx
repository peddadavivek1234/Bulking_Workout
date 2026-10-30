import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiActivity,
  FiArrowUpRight,
  FiMapPin,
  FiMail,
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiTwitter,
  FiArrowUp
} from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Workout Plans', path: '#workouts' },
    { name: 'Training Schedule', path: '#schedule' },
    { name: 'Nutrition', path: '#nutrition' },
    { name: 'Benefits', path: '#benefits' },
    { name: 'Testimonials', path: '#testimonials' }
  ]

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://www.instagram.com/' },
    { icon: <FiFacebook />, url: 'https://www.facebook.com/' },
    { icon: <FiYoutube />, url: 'https://www.youtube.com/' },
    { icon: <FiTwitter />, url: 'https://www.x.com/' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <FiActivity />
              </div>
              <span>
                IRON<span>FORGE</span>
              </span>
            </Link>

            <p>
              Build strength, develop discipline, and transform
              your fitness journey with structured workouts and
              smart nutrition.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <a
                  href={social.url}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Social media ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>QUICK LINKS</h3>

            {quickLinks.map((link) => (
              <a href={link.path} key={link.name}>
                {link.name}
                <FiArrowUpRight />
              </a>
            ))}
          </div>

          <div className="footer-contact">
            <h3>CONTACT US</h3>

            <div className="footer-contact-item">
              <FiMapPin />
              <p>Available Online Worldwide</p>
            </div>

            <div className="footer-contact-item">
              <FiMail />
              <a href="mailto:hello@ironforge.com">
                hello@ironforge.com
              </a>
            </div>

            <div className="footer-contact-item">
              <FiPhone />
              <a href="tel:+911234567890">
                +91 12345 67890
              </a>
            </div>

            <a href="#join" className="footer-contact-btn">
              Join Our Community <FiArrowUpRight />
            </a>
          </div>

        </div>

        <div className="footer-newsletter">
          <div>
            <span>STAY STRONG. STAY UPDATED.</span>
            <h3>Keep Your Fitness Journey Moving.</h3>
            <p>Follow us for workout inspiration and fitness tips.</p>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-follow-btn"
          >
            Follow Us <FiArrowUpRight />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} IRONFORGE. All Rights Reserved.
          </p>

          <p className="footer-made">
            BUILT FOR STRENGTH. POWERED BY DISCIPLINE.
          </p>

          <a href="#home" className="footer-back-top">
            Back to Top <FiArrowUp />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer