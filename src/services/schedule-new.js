import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // Making requests to send appointment data
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert(`Appointment successfully made!`);
  } catch (error) {
    console.log(error);
    alert("It wasn't possible to make an appointment. Try again later.");
  }
}
