import { schedulesDay } from "../schedules/load";

// Select a date input
const selectedDate = document.getElementById("date");

// Refreshes the hour list when data input change
selectedDate.onchange = () => {
  schedulesDay();
};
