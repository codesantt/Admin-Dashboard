import { initialAlerts } from "../data/mockData"

export async function getAlerts() {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return initialAlerts
}