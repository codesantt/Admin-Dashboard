export async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1200))

  const shouldFail = false

  if (shouldFail) {
    throw new Error("Failed to load users.")
  }

  return [
    {
      id: 1,
      name: "Amanda Blake",
      email: "amanda.blake@company.com",
      status: "Active",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Michael Carter",
      email: "michael.carter@company.com",
      status: "Inactive",
      role: "Backend Developer"
    },
    {
      id: 3,
      name: "Olivia Smith",
      email: "olivia.smith@company.com",
      status: "Active",
      role: "QA Analyst"
    }
  ]
}