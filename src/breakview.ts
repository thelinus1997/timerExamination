const app = document.querySelector<HTMLDivElement>("#app")!;
import { setTimer } from "./setTimer";
export function breakView() {
  app.innerHTML = "";
  const main: HTMLDivElement = document.createElement("div");
  main.classList.add("alarmMainCont");
  const alarmSvgContainer: HTMLImageElement = document.createElement("img");
  alarmSvgContainer.src = "../public/pause.svg";
  alarmSvgContainer.setAttribute("width", "50");
  alarmSvgContainer.setAttribute("height", "50");
  const alertText: HTMLElement = document.createElement("p");
  alertText.classList.add("breatheText");
  alertText.innerText = "Pause & breathe";
  const ellipseOne: HTMLDivElement = document.createElement("div");
  ellipseOne.id = "ellipseOne";

  const ellipseTwo: HTMLDivElement = document.createElement("div");
  ellipseTwo.id = "ellipseTwo";

  const ellipseThree: HTMLDivElement = document.createElement("div");
  ellipseThree.id = "ellipseThree";

  const ellipseFour: HTMLDivElement = document.createElement("div");
  ellipseFour.id = "ellipseFour";
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => resumeTimer());
  button.classList.add("newTimerButton");
  button.innerText = "NO PAUSE, GO NOW!";
  ellipseOne.appendChild(ellipseTwo);
  ellipseTwo.appendChild(ellipseThree);
  ellipseThree.appendChild(ellipseFour);
  ellipseFour.appendChild(alarmSvgContainer);
  main.append(ellipseOne, alertText, button);
  app.appendChild(main);
}
function resumeTimer() {
  alert("add code to make timer resume");
}

// timer.start({
//   countdown: true,
//   startValues: { minutes: 0 },
//   target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
// });
// function handleAnimationEnd() {
//   alert("Timer Finished!");
// }

// // Add an event listener for the 'secondsUpdated' event to update the UI
// timer.addEventListener("secondsUpdated", () => {
//   // You can update the UI here with the current time, e.g., display on a label
//   const currentTime = timer.getTimeValues();
//   console.log(`Current time: ${currentTime.minutes}:${currentTime.seconds}`);
// });

// // Add an event listener for the 'targetAchieved' event to handle timer completion
// timer.addEventListener("targetAchieved", () => {
//   alert("Timer Finished!");
//   abortTimer();
//   // Optionally perform any actions when the timer completes
// });

// function abortTimer() {
//   window.location.reload();
// }
