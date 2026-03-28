import "./SystemStatusCard.css"

function SystemStatusCard({ status, onToggle }) {
  const isOnline = status === "Online"

  return (
    <section className="system-status card">
      <h2 className="section-title">System Status</h2>

      <div className="system-status__content">
        <span
          className={`system-status__badge ${
            isOnline ? "system-status__badge--online" : "system-status__badge--offline"
          }`}
        >
          {status}
        </span>

        <button className="system-status__button" onClick={onToggle}>
          Toggle Status
        </button>
      </div>
    </section>
  )
}

export default SystemStatusCard