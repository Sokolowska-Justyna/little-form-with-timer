const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
const endDate = new Date(2019, 10, 25, 23, 59, 59);

let alert = document.getElementById("alert");
let clock = document.getElementById("clock");
const nextDays = document.getElementById("nextDays");
const prevDays = document.getElementById("days");
const nextHours = document.getElementById("nextHours");
const prevHours = document.getElementById("hours");
const nextMinutes = document.getElementById("nextMinutes");
const prevMinutes = document.getElementById("minutes");
const nextSeconds = document.getElementById("nextSeconds");
const prevSeconds = document.getElementById("seconds");
let dayDesc = document.getElementById('daysDesc');
let daysDesc2 = document.getElementById('daysDesc2');
let deleteDay = document.getElementById("deleteDay");

var flipper1 = document.getElementsByClassName("flipper1");
var flipper2 = document.getElementsByClassName("flipper2");
var flipper3 = document.getElementsByClassName("flipper3");
var flipper4 = document.getElementsByClassName("flipper4");

var flipcontainer1 = document.getElementsByClassName("flip-container1");
var flipcontainer2 = document.getElementsByClassName("flip-container2");
var flipcontainer3 = document.getElementsByClassName("flip-container3");
var flipcontainer4 = document.getElementsByClassName("flip-container4");

const getTimeDiff = (start, end) => {
const dateDiff = end - start;
const dateDiffTime = end.getTime() - start.getTime();
const days = parseInt(dateDiff / (1000 * 60 * 60 * 24));
const hours = parseInt((dateDiff / (1000 * 60 * 60)) % 24);
const minutes = parseInt((dateDiffTime / (1000 * 60)) % 60);
const seconds = parseInt((dateDiffTime / 1000) % 60);

return {
  seconds,
  minutes,
  hours,
  days,
  isOver: function () {
    return (
      this.seconds <= 0 &&
      this.minutes <= 0 &&
      this.hours <= 0 &&
      this.days <= 0
    );
  }
};
};

const updateTime = (prevElem, prevTime, nextElem, nextTime, type) => {
if (prevTime[type] !== nextTime[type]) {
  nextElem.innerText = nextTime[type];
  prevElem.innerText = prevTime[type];
  prevTime[type] = nextTime[type];
} else {
  nextElem.innerText = prevTime[type];
  prevElem.innerText = prevTime[type];
}
};

let prevDiff = getTimeDiff(new Date(), endDate);
(nextSeconds.innerText = prevDiff.seconds),
(seconds.innerText = prevDiff.seconds);
(nextMinutes.innerText = prevDiff.minutes),
(minutes.innerText = prevDiff.minutes);
(nextHours.innerText = prevDiff.hours),
(hours.innerText = prevDiff.hours);
(nextDays.innerText = prevDiff.days), (days.innerText = prevDiff.days);

if (prevDays.innerText === "1") {
dayDesc.style.display = "none";
daysDesc2.style.display = "block";
} else if(prevDays.innerText === "0") {
deleteDay.style.display = "none";
}
else {
dayDesc.style.display = "block";
daysDesc2.style.display = "none";
}


setInterval(() => {
const newDiff = getTimeDiff(new Date(), endDate);
updateTime(prevSeconds, prevDiff, nextSeconds, newDiff, "seconds");
updateTime(prevMinutes, prevDiff, nextMinutes, newDiff, "minutes");
updateTime(prevHours, prevDiff, nextHours, newDiff, "hours");
updateTime(prevDays, prevDiff, nextDays, newDiff, "days");

if (newDiff.isOver()) {
  clock.style.display = "none";
  alert.style.display = "block";
}
}, 100);