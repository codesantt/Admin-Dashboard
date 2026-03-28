import { useState } from "react"
import "./CreateEventForm.css"

const initialForm = {
  title: "",
  description: "",
  category: "Maintenance",
  priority: "Medium"
}

function CreateEventForm({ onCreateEvent, isSubmitting, submitError, submitSuccess }) {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value
    }))
  }

  function validateForm() {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required."
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required."
    }

    if (formData.title.trim().length > 0 && formData.title.trim().length < 5) {
      newErrors.title = "Title must have at least 5 characters."
    }

    if (
      formData.description.trim().length > 0 &&
      formData.description.trim().length < 10
    ) {
      newErrors.description = "Description must have at least 10 characters."
    }

    return newErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    const wasCreated = await onCreateEvent(formData)

    if (wasCreated) {
      setFormData(initialForm)
      setErrors({})
    }
  }

  return (
    <section className="create-event card">
      <h2 className="section-title">Create Event</h2>

      <form className="create-event__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
          />
          {errors.title && <p className="field-error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the event"
          />
          {errors.description && (
            <p className="field-error">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Maintenance">Maintenance</option>
            <option value="Security">Security</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Users">Users</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Event"}
        </button>

        {submitSuccess && (
          <p className="success-message">Event created successfully.</p>
        )}

        {submitError && <p className="error-message">{submitError}</p>}
      </form>
    </section>
  )
}

export default CreateEventForm