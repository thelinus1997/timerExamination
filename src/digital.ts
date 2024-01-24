import Timer from "easytimer.js";
import { breakView } from "./breakview";
import { alarmView } from "./alarmvy";
import { createMenu } from "./menu";
// Initialize EasyTimer
let timer = new Timer();

const secTimerDisplay: HTMLDivElement = document.createElement("div");
const app = document.querySelector<HTMLDivElement>("#app")!;

export function startCountdown(minutes: number, extraChoice: number) {
  app.innerHTML = "";

  secTimerDisplay.classList.add("timerBoxDisplay");

  const navLogoTimerCont: HTMLDivElement = document.createElement("div");
  navLogoTimerCont.classList.add("navLogoTimer");
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navLogo");
  const timerCont: HTMLDivElement = document.createElement("div");
  timerCont.classList.add("timerCont");
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("abortButton");
  button.innerText = "ABORT TIMER";

  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");

  // Added a clickfuntion on the logo to return to the menu sight
  svgCont.addEventListener('click', createMenu);
  document.getElementById("app")?.appendChild(logoCont);
  logoCont.append(svgCont);

  timerCont.append(logoCont, secTimerDisplay, button);

  const headerText: HTMLElement = document.createElement("p");
  headerText.classList.add("headerText");
  headerText.innerText = "interval";

  logoCont.append(svgCont, headerText);
  timerCont.append(logoCont);
  timerCont.append(secTimerDisplay);
  timerCont.append(button);

  app.append(timerCont);

  if (extraChoice == 0) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
    });
    // Add an event listener for the 'secondsUpdated' event to update the UI
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
      // You can update the UI here with the current time, e.g., display on a label
      const currentTime = timer.getTimeValues();
      secTimerDisplay.innerText = `${currentTime.minutes}:${currentTime.seconds}`;
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });

    // Add an event listener for the 'targetAchieved' event to handle timer completion
    timer.addEventListener("targetAchieved", () => {
      alert("Timer Finished!");
      alarmView();
      // Optionally perform any actions when the timer completes
    });
  }

  if (extraChoice == 1) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
    });
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
      // You can update the UI here with the current time, e.g., display on a label
      const currentTime = timer.getTimeValues();
      secTimerDisplay.innerText = `${currentTime.minutes}:${currentTime.seconds}`;

      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });

    // Add an event listener for the 'targetAchieved' event to handle timer completion
    timer.addEventListener("targetAchieved", () => {
      startCountdown(minutes, extraChoice);
      // Optionally perform any actions when the timer completes
    });
  }
  if (extraChoice == 2) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
    });
    timer.addEventListener("secondsUpdated", () => {
      console.log("in break version");
      const currentTime = timer.getTimeValues();
      secTimerDisplay.innerText = `${currentTime.minutes}:${currentTime.seconds}`;

      console.log(minutes);
      console.log(currentTime.minutes);
      if (currentTime.minutes + 1 == minutes - 5) {
        console.log("-5 bro");
        breakView(timer, "digital", extraChoice);
      }
      // You can update the UI here with the current time, e.g., display on a label
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });
    // Add an event listener for the 'targetAchieved' event to handle timer completion
    timer.addEventListener("targetAchieved", () => {
      alarmView();
      // Optionally perform any actions when the timer completes
    });
  }
  function handleAnimationEnd() {
    alert("Timer Finished!");
  }
}

function abortTimer() {
  // Stop the timer and reload the window
  timer.stop();
  window.location.reload();
}
