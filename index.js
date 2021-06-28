const refs = {
  body: document.querySelector(".timer"),
  divEl: document.querySelector(".value"),
};
refs.body.style =
  "display: flex;justify-content: center;margin-top: 80px;font-size: 30px";

const reTimer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      console.log("start", startTime);
      console.log("current", currentTime);
    }, 1000);
  },
};
reTimer.start();

//Плагин это класс CountdownTimer, экземпляр

// const example = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2021"),
// });
