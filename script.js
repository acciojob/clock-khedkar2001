function updateTimer() {
  const timer = document.getElementById("timer");
  const now = new Date();

  const formattedTime = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  timer.textContent = formattedTime;
}

// Initial call
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
