import Timer from "easytimer.js";
import { setTimer } from "./setTimer";
import { visualTimerFunc } from "./visual";
import { analogStart } from "./analog";
import { startCountdown } from "./digital";
const app = document.querySelector<HTMLDivElement>("#app")!;

let breakTimer = new Timer();

/*
Skicka med timern som pausas från till exempel analog. till exempel pausas timer vid 4:50
skapa ny timer med 5min countdown.
då 5min är över resuma första timern och återställ sidan till föregående vy.
*/

export function breakView(inputTimer: Timer, typeOfTimer: String, extraChoice) {
  console.log(inputTimer);
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
  breakTimer.start({
    countdown: true,
    startValues: { seconds: 5 },
    target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
  });
  breakTimer.addEventListener("secondsUpdated", () => {
    console.log(breakTimer);
    // You can update the UI here with the current time, e.g., display on a label
    const currentTime = breakTimer.getTimeValues();
    console.log(`Current time: ${currentTime.minutes}:${currentTime.seconds}`);
  });

  // Add an event listener for the 'targetAchieved' event to handle timer completion
  breakTimer.addEventListener("targetAchieved", () => {
    // You can update the UI here with the current time, e.g., display on a label
    const currentTime = inputTimer.getTimeValues();

    switch (typeOfTimer) {
      case "analog":
        analogStart(currentTime.minutes, extraChoice);
        break;
      case "digital":
        startCountdown(currentTime.minutes, extraChoice);
        break;
      case "visual":
        visualTimerFunc();
        break;
      case "text":
        // Check for string at index 3
        break;
      case "cirkles":
        // Check for string at index 4
        break;
      default:
        // Handle the case when index is not within the expected range
        break;

      // Kod som går tillbaka till föregående
    }
  });
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
