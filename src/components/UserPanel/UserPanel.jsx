import { useAuth } from "../../context/AuthContext"
import "./UserPanel.css"

function UserPanel() {
  const { user } = useAuth()

  return (
    <section className="user-panel card">
      <h2 className="section-title">Logged User</h2>

      <div className="user-panel__content">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </section>
  )
}

export default UserPanel