import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show.js";

// Selects the data input
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Gets the input data
  const date = selectedDate.value;

  // Search for appointments on API
  const dailySchedules = await scheduleFetchByDay({ date });

  // Show the appointments
  schedulesShow({ dailySchedules });

  // Search the schedules in the API at the right side of the screen
  // The available schedules (future hour + not scheduled) from the left side (form)
  hoursLoad({ date, dailySchedules });
}
