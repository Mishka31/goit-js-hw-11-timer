const refs = {
  body: document.querySelector("body"),
  timerEl: document.querySelector(".timer"),
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};
refs.body.style = "background: coral";
refs.timerEl.style =
  "background: red;display: flex;justify-content: center;margin-top: 80px;font-size: 50px";

class CountdownTimer {
  constructor({ targetDate, onTick }) {
    this.targetDate = targetDate;
    this.onTick = onTick;
  }
  start() {
    setInterval(() => {
      const timeNow = Date.now();
      const timeDifferent = this.targetDate - timeNow;
      const time = getTimeElements(timeDifferent);
      this.onTick(time);
    }, 1000);
  }
}
const reTimer = new CountdownTimer({
  onTick: updateReTime,
});

reTimer.start();

function updateReTime({ days, hours, mins, secs }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minsEl.textContent = `${mins}`;
  refs.secsEl.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
function getTimeElements(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
const example = new CountdownTimer({
  //   selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
