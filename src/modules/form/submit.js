import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Current Date for the input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Loads current date
selectedDate.value = inputToday;

// Defines the minimum date as being the current date.
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Avoids the default form behavior of paging reload
  event.preventDefault();

  try {
    //  Getting client name.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Type client name!");
    }

    // Get the selected hour
    const hourSelected = document.querySelector(".hour-selected");
    console.log(hourSelected);

    // Getting the selected hour
    if (!hourSelected) {
      return alert("Select an hour.");
    }

    // Gets only the hour
    const [hour] = hourSelected.innerText.split(":");
    console.log(hour);

    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    // Generate an ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });

    // Refresh the appointments
    await schedulesDay();
  } catch (error) {
    alert("It wasn't possible to make the appointment.");
    console.log(error);
  }
};
