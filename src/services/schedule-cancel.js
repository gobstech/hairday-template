import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Appointment cancelled successfully!");
  } catch (error) {
    console.log(error);
    alert("It isn't possible to cancel the appointment");
  }
}
