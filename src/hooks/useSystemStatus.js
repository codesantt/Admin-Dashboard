import { useState } from "react"

export function useSystemStatus(initialStatus = "Online") {
  const [status, setStatus] = useState(initialStatus)

  function toggleStatus() {
    setStatus((currentStatus) =>
      currentStatus === "Online" ? "Offline" : "Online"
    )
  }

  return {
    status,
    toggleStatus
  }
}