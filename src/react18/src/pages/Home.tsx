import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home: React.FC = () => {
  const { user } = useAuth()
  const name = user?.displayName ?? 'Guest'
  return (
    <div className="home-page">
      <h1>Welcome, {name}</h1>
      <p>This is the home page of the React 18+ demo app. You are logged in.</p>
      <div className="dashboard">
        <div className="card">Dashboard Card 1</div>
        <div className="card">Dashboard Card 2</div>
        <div className="card">Dashboard Card 3</div>
      </div>
      <Link to="/about" className="btn-link">Learn more About</Link>
    </div>
  )
}

export default Home
