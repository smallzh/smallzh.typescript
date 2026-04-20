import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <section className="about-page">
      <h1>About This Demo</h1>
      <p>This React 18+ demo showcases a simple login flow, protected routes, and a small dashboard UI using React Router v6 and context-based authentication.</p>
      <p>All API calls are mocked with in-memory data. No real backend is involved.</p>
      <Link to="/" className="btn-link">Back to Home</Link>
    </section>
  )
}

export default About
