import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    // Makes request
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converts to JSON
    const data = await response.json();

    // Filters appointments by the day selected
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("It wasn't possible to search for appointments to day selected.");
  }
}
