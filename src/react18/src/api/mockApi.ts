import { User } from '../types'

type ApiUser = {
  id: string
  username: string
  password: string
  displayName: string
}

const MOCK_USERS: ApiUser[] = [
  { id: '1', username: 'admin', password: 'admin123', displayName: 'Admin User' },
  { id: '2', username: 'user', password: 'user123', displayName: 'Regular User' }
]

export const login = (username: string, password: string) => {
  return new Promise<{ user: User }>((resolve, reject) => {
    setTimeout(() => {
      const found = MOCK_USERS.find((u) => u.username === username && u.password === password)
      if (found) {
        resolve({ user: { id: found.id, username: found.username, displayName: found.displayName } })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}

export const getUserInfo = (): Promise<User | null> => {
  // In a real app we'd fetch this; for demo, return null or fake data
  return Promise.resolve(null)
}

export default { login, getUserInfo }
