import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()
  return (
    <nav className="navbar">
      <div className="brand">React 18 Demo</div>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <button className="btn" onClick={logout} style={{ marginLeft: 8 }}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Navbar
