const endingDate = "2025-09-13";
console.log("yo");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(endingDate);

  console.log(newYearsDate - currentDate);
  let totalSecs = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs / 3600) % 24);
  const mins = Math.floor((totalSecs / 60) % 60);
  const secs = Math.floor(totalSecs % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(secs);
  
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}
countdown();
setInterval(countdown, 1000);
