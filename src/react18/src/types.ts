export interface User {
  id: string
  username: string
  displayName: string
}

export interface AuthState {
  user: User | null
}
