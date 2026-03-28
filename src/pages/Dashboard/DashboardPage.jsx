import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import UserPanel from "../../components/UserPanel/UserPanel"
import SystemStatusCard from "../../components/SystemStatusCard/SystemStatusCard"
import AlertList from "../../components/AlertList/AlertList"
import UsersList from "../../components/UsersList/UsersList"
import EventsList from "../../components/EventsList/EventsList"
import CreateEventForm from "../../components/CreateEventForm/CreateEventForm"
import { useSystemStatus } from "../../hooks/useSystemStatus"
import { getUsers } from "../../services/userService"
import { getAlerts } from "../../services/alertsService"
import { createEvent, getEvents, completeEvent, removeEvent, clearCompletedEvents } from "../../services/eventService"
import { useAuth } from "../../context/AuthContext"
import "./DashboardPage.css"

function DashboardPage() {
  const { status, toggleStatus } = useSystemStatus()
  const { user } = useAuth()

  const [alerts, setAlerts] = useState([])

  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(true)
  const [usersError, setUsersError] = useState("")

  const [events, setEvents] = useState([])
  const [eventsLoading, setEventsLoading] = useState(true)
  const [eventsError, setEventsError] = useState("")

  const [isSubmittingEvent, setIsSubmittingEvent] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    async function loadAlerts() {
      const alertsData = await getAlerts()
      setAlerts(alertsData)
    }

    loadAlerts()
  }, [])

  useEffect(() => {
    async function loadUsers() {
      try {
        setUsersLoading(true)
        setUsersError("")

        const usersData = await getUsers()
        setUsers(usersData)
      } catch (error) {
        setUsersError(error.message)
      } finally {
        setUsersLoading(false)
      }
    }

    loadUsers()
  }, [])

  useEffect(() => {
    async function loadEvents() {
      try {
        setEventsLoading(true)
        setEventsError("")

        const eventsData = await getEvents()
        setEvents(eventsData)
      } catch (error) {
        setEventsError(error.message)
      } finally {
        setEventsLoading(false)
      }
    }

    loadEvents()
  }, [])

  async function handleCreateEvent(formData) {
    try {
      setIsSubmittingEvent(true)
      setSubmitError("")
      setSubmitSuccess(false)

      const createdEvent = await createEvent({
        ...formData,
        createdBy: user.name
      })

      setEvents((currentEvents) => [createdEvent, ...currentEvents])
      setSubmitSuccess(true)

      return true
    } catch (error) {
      setSubmitError(error.message)
      setSubmitSuccess(false)
      return false
    } finally {
      setIsSubmittingEvent(false)
    }
  }

  async function handleCompleteEvent(eventId) {
    try {
      const updatedEvents = await completeEvent(eventId)
      setEvents(updatedEvents)
    } catch (error) {
      setEventsError(error.message)
    }
  }

  async function handleRemoveEvent(eventId) {
    try {
      const updatedEvents = await removeEvent(eventId)
      setEvents(updatedEvents)
    } catch (error) {
      setEventsError(error.message)
    }
  }

  async function handleClearCompleted() {
    try {
      const updatedEvents = await clearCompletedEvents()
      setEvents(updatedEvents)
    } catch (error) {
      setEventsError(error.message)
    }
  }

  return (
    <main className="dashboard">
      <Header />

      <section className="dashboard__top-grid">
        <UserPanel />
        <SystemStatusCard status={status} onToggle={toggleStatus} />
      </section>

      <section className="dashboard__middle-grid">
        <AlertList alerts={alerts} />
        <CreateEventForm
          onCreateEvent={handleCreateEvent}
          isSubmitting={isSubmittingEvent}
          submitError={submitError}
          submitSuccess={submitSuccess}
        />
      </section>

      <section className="dashboard__bottom-grid">
        <UsersList
          users={users}
          isLoading={usersLoading}
          error={usersError}
        />

        <EventsList
          events={events}
          isLoading={eventsLoading}
          error={eventsError}
          onCompleteEvent={handleCompleteEvent}
          onRemoveEvent={handleRemoveEvent}
          onClearCompleted={handleClearCompleted}
        />
      </section>
    </main>
  )
}

export default DashboardPage