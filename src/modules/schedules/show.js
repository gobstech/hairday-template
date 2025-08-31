import dayjs from "dayjs";

// Select morning, afternoon and night sections
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Render appointments by period.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adds appointment id
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Create an icon that cancels the appointment
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // Adds the time, name and icon on item
      item.append(time, name, cancelIcon);

      // Gets only the hour
      const hour = dayjs(schedule.when).hour();

      // Renders the session appointment (morning, afternoon, night)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("It wasn't possible to show the appointments");
  }
}
