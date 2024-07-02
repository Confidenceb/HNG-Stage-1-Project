function updateTimeAndDate() {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4]; // Extract the time in HH:MM:SS format
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" }); // Get the current day of the week

  document.getElementById("time").textContent = utcTime;
  document.getElementById("day").textContent = dayOfWeek;
}

// Call the function to update time and date
updateTimeAndDate();

// Optionally, update the time every second
setInterval(updateTimeAndDate, 1000);
