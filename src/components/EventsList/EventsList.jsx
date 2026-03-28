import "./EventsList.css"

function EventsList({
  events,
  isLoading,
  error,
  onCompleteEvent,
  onRemoveEvent,
  onClearCompleted
}) {
  const hasCompletedEvents = events.some((event) => event.completed)

  return (
    <section className="events-list card">
      <div className="events-list__header">
        <h2 className="section-title">Events</h2>

        <button
          className="events-list__clear-button"
          onClick={onClearCompleted}
          disabled={!hasCompletedEvents}
        >
          Clear Completed
        </button>
      </div>

      {isLoading && <p className="info-message">Loading events...</p>}

      {!isLoading && error && <p className="error-message">{error}</p>}

      {!isLoading && !error && events.length === 0 && (
        <p className="empty-message">No events found.</p>
      )}

      {!isLoading && !error && events.length > 0 && (
        <ul className="events-list__items">
          {events.map((event) => (
            <li
              key={event.id}
              className={`events-list__item ${
                event.completed ? "events-list__item--completed" : ""
              }`}
            >
              <div className="events-list__top">
                <div className="events-list__title-group">
                  <h3>{event.title}</h3>

                  {event.completed && (
                    <span className="events-list__completed-badge">
                      Completed
                    </span>
                  )}
                </div>

                <span
                  className={`events-list__priority events-list__priority--${event.priority.toLowerCase()}`}
                >
                  {event.priority}
                </span>
              </div>

              <p className="events-list__description">{event.description}</p>

              <div className="events-list__footer">
                <div className="events-list__meta">
                  <span>{event.category}</span>
                  <span>Created by: {event.createdBy}</span>
                </div>

                <div className="events-list__actions">
                  {!event.completed && (
                    <button
                      className="events-list__action-button events-list__action-button--complete"
                      onClick={() => onCompleteEvent(event.id)}
                    >
                      Complete
                    </button>
                  )}

                  {event.completed && (
                    <button
                      className="events-list__action-button events-list__action-button--remove"
                      onClick={() => onRemoveEvent(event.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default EventsList