const refs = {
  body: document.querySelector("body"),
  timerEl: document.querySelector(".timer"),
};
refs.body.style = "background: coral";
refs.timerEl.style = "background: red;display: flex;justify-content: center;margin-top: 80px;font-size: 50px";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.valueDays = document.querySelector(`${selector} [data-value="days"]`);
    this.valueHours = document.querySelector(`${selector} [data-value="hours"]`);
    this.valueMins = document.querySelector(`${selector} [data-value="mins"]`);
    this.valueSecs = document.querySelector(`${selector} [data-value="secs"]`);
  }
  start() {
    setInterval(() => {
      const timeNow = Date.now();
      const timeDifferent = this.targetDate - timeNow;
      const time = this.getTimeElements(timeDifferent);
      this.updateReTime(time);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimeElements(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  updateReTime({ days, hours, mins, secs }) {
    this.valueDays.textContent = `${days}`;
    this.valueHours.textContent = `${hours}`;
    this.valueMins.textContent = `${mins}`;
    this.valueSecs.textContent = `${secs}`;
  }
}
const example = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("dec 30, 2021"),
});
example.start();
