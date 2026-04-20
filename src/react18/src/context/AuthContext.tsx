import React, { createContext, useContext, useMemo, useState } from 'react'
import { User } from '../types'
import * as mockApi from '../api/mockApi'

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (username: string, password: string) => {
    const res = await mockApi.login(username, password)
    setUser(res.user)
  }

  const logout = () => {
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, login, logout }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
