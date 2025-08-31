import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel";
const periods = document.querySelectorAll(".period");

// Generates a click event for each list (morning, afternoon and night)
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      // Gets the id of appointment to remove
      const id = Number(item.dataset.id);

      // ID has been selected
      if (id) {
        // Confirms if user wants to remove or cancel
        const isConfirm = confirm(
          "Are you sure you want to cancel this appointment?"
        );

        if (isConfirm) {
          // Makes the API request to cancel
          await scheduleCancel({ id });

          // Refresh the list with its data
          schedulesDay();
        }
      }
    }
  });
});
