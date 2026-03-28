import "./AlertList.css"

function AlertList({ alerts }) {
  return (
    <section className="alerts card">
      <h2 className="section-title">Alerts</h2>

      {alerts.length === 0 ? (
        <p className="empty-message">No alerts at this time.</p>
      ) : (
        <ul className="alerts__list">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`alerts__item alerts__item--${alert.type}`}
            >
              {alert.message}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default AlertList