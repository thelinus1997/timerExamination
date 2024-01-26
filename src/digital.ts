import Timer from "easytimer.js";
import { breakView } from "./breakview";
import { alarmView } from "./alarmvy";
import { createMenu } from "./menu";

let timer = new Timer();

const secTimerDisplay: HTMLDivElement = document.createElement("div");
const app = document.querySelector<HTMLDivElement>("#app")!;

export function startCountdown(minutes: number, extraChoice: number) {
  app.innerHTML = "";
  console.log(extraChoice);

  secTimerDisplay.classList.add("timerBoxDisplay");

  const navLogoTimerCont: HTMLDivElement = document.createElement("div");
  navLogoTimerCont.classList.add("navLogoTimer");
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("headerNavLogo");
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
  const headerText: HTMLElement = document.createElement("p");
  headerText.innerText = "interval";

  svgCont.addEventListener("click", createMenu);
  document.getElementById("app")?.appendChild(logoCont);
  logoCont.append(svgCont, headerText);

  timerCont.append(logoCont, secTimerDisplay, button);

  app.append(timerCont);

  if (extraChoice == 0) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, 
    });
    
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
      const currentTime = timer.getTimeValues();
      secTimerDisplay.innerText = `${currentTime.minutes}:${currentTime.seconds}`;
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });
    timer.addEventListener("targetAchieved", () => {
      alarmView();
    });
  }

  if (extraChoice == 1) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
    });
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
     
      const currentTime = timer.getTimeValues();
      secTimerDisplay.innerText = `${currentTime.minutes}:${currentTime.seconds}`;

      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });


    timer.addEventListener("targetAchieved", () => {
      startCountdown(minutes, extraChoice);
      
    });
  }
  if (extraChoice == 2) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
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
     
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });
    
    timer.addEventListener("targetAchieved", () => {
      alarmView();
      
    });
  }
}
