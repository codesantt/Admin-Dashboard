import DashboardPage from "./pages/Dashboard/DashboardPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <DashboardPage />
    </AuthProvider>
  )
}

export default App