import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">Admin Monitoring Dashboard</h1>
        <p className="header__subtitle">
          System overview, user activity, and event management
        </p>
      </div>
    </header>
  )
}

export default Header