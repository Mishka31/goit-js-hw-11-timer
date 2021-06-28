const refs = {
  body: document.querySelector(".timer"),
  divEl: document.querySelector(".value"),
};
refs.body.style =
  "display: flex;justify-content: center;margin-top: 80px;font-size: 30px";

const date1 = Date.now();

setTimeout(() => {
  const date2 = Date.now();
  console.log("date1", date1);
  console.log("date2", date2);
  console.log("Diff", date2 - date1);
}, 1000);

//Плагин это класс CountdownTimer, экземпляр

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
