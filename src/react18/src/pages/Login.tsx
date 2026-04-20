import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { login as loginApi } from '../api/mockApi'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!username || !password) {
      setError('Please enter username and password')
      return
    }
    setLoading(true)
    try {
      await login(username, password)
      // Redirect to home after successful login
      navigate('/')
    } catch (err) {
      setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin or user"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading} className="btn">
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <p className="hint">Demo credentials: admin/admin123 or user/user123</p>
    </div>
  )
}

export default Login
