const newYearDate = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYearDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

function showMessage() {
  document.getElementById("message").innerText =
    "✨ May all your dreams come true this year! ✨";
}
