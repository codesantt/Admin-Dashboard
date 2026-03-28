import { createContext, useContext } from "react"
import { loggedUser } from "../data/mockData"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ user: loggedUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}