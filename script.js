
const launchDateDisplay = document.querySelector("#launchDate");
const launchDate = "1 Jan 2026 12:00 AM";

launchDateDisplay.innerHTML = launchDate;
const divs = document.querySelectorAll(".block > div");

const countDown = () => {
  const launchDateObj = new Date(launchDate);
  const currentDate = new Date();

  const difference = (launchDateObj - currentDate) / 1000;

  if (difference < 0) {
    clearInterval(countDown);
    launchDateDisplay.innerHTML = "Happy New Year!";
    return;
  }

  const days = Math.floor(difference / 3600 / 24);
  const hours = Math.floor(difference / 3600) % 24;
  const minutes = Math.floor(difference / 60) % 60;
  const seconds = Math.floor(difference) % 60;

  divs[0].innerHTML = days;
  divs[1].innerHTML = hours;
  divs[2].innerHTML = minutes;
  divs[3].innerHTML = seconds;
};

setInterval(countDown, 1000);
