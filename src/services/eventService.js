import { initialEvents } from "../data/mockData"

let eventsDatabase = [...initialEvents]

export async function getEvents() {
  await new Promise((resolve) => setTimeout(resolve, 900))
  return [...eventsDatabase]
}

export async function createEvent(newEvent) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const shouldFail = false

  if (shouldFail) {
    throw new Error("Failed to create event.")
  }

  const createdEvent = {
    id: Date.now(),
    ...newEvent,
    completed: false
  }

  eventsDatabase = [createdEvent, ...eventsDatabase]

  return createdEvent
}

export async function completeEvent(eventId) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  eventsDatabase = eventsDatabase.map((event) =>
    event.id === eventId
      ? { ...event, completed: true }
      : event
  )

  return [...eventsDatabase]
}

export async function removeEvent(eventId) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  eventsDatabase = eventsDatabase.filter((event) => event.id !== eventId)

  return [...eventsDatabase]
}

export async function clearCompletedEvents() {
  await new Promise((resolve) => setTimeout(resolve, 500))

  eventsDatabase = eventsDatabase.filter((event) => !event.completed)

  return [...eventsDatabase]
}