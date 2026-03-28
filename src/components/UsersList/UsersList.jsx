import "./UsersList.css"

function UsersList({ users, isLoading, error }) {
  return (
    <section className="users-list card">
      <h2 className="section-title">Users</h2>

      {isLoading && <p className="info-message">Loading users...</p>}

      {!isLoading && error && <p className="error-message">{error}</p>}

      {!isLoading && !error && users.length === 0 && (
        <p className="empty-message">No users found.</p>
      )}

      {!isLoading && !error && users.length > 0 && (
        <ul className="users-list__items">
          {users.map((user) => (
            <li key={user.id} className="users-list__item">
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>

              <div className="users-list__meta">
                <span
                  className={`users-list__status ${
                    user.status === "Active"
                      ? "users-list__status--active"
                      : "users-list__status--inactive"
                  }`}
                >
                  {user.status}
                </span>
                <span className="users-list__role">{user.role}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UsersList