export const loggedUser = {
  id: 1,
  name: "Sarah Johnson",
  email: "sarah.johnson@company.com",
  role: "System Administrator"
}

export const initialAlerts = [
  {
    id: 1,
    type: "warning",
    message: "High memory usage detected on API server."
  },
  {
    id: 2,
    type: "error",
    message: "Payment service reported intermittent failures."
  },
  {
    id: 3,
    type: "success",
    message: "Backup completed successfully."
  }
]

export const initialEvents = [
  {
    id: 1,
    title: "Database maintenance scheduled",
    description: "Planned maintenance window for database optimization.",
    category: "Maintenance",
    priority: "High",
    createdBy: "Sarah Johnson",
    completed: false
  },
  {
    id: 2,
    title: "New user access review",
    description: "Review recently added user permissions.",
    category: "Security",
    priority: "Medium",
    createdBy: "Sarah Johnson",
    completed: true
  }
]