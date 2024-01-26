import Timer from "easytimer.js";
import { breakView } from "./breakview";
import { alarmView } from "./alarmvy";
import { createMenu } from "./menu";

// Initialize EasyTimer
let timer = new Timer();
const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;
const myVarVal = "60s";
document.documentElement.style.setProperty("oneMinute", myVarVal);

export function visualTimerFunc(minutes: number, extraChoice: number) {
  app.innerHTML = "";

  const visualTimerCont = document.createElement("div");
  visualTimerCont.classList.add("visualTimerCont");

  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("headerNavLogo");

  const headerText: HTMLElement = document.createElement("p");
  headerText.innerText = "interval";

  const textArea: HTMLElement = document.createElement("h1");
  textArea.classList.add("timeTextDisplay");

  const visualTimer = document.createElement("div");
  visualTimer.classList.add("visualTimer");

  const glassUpper = document.createElement("div");
  glassUpper.classList.add("glassUpper");

  const sandUpper = document.createElement("div");
  sandUpper.classList.add("sandUpper");

  const fillet = document.createElement("div");
  fillet.classList.add("fillet");

  const glassBottom = document.createElement("div");
  glassBottom.classList.add("glassBottom");

  const sandBottom = document.createElement("div");
  sandBottom.classList.add("sandBottom");

  const frame = document.createElement("div");
  frame.classList.add("frame");

  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";

  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "./public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  svgCont.style.fill = "white";
  svgCont.addEventListener("click", createMenu);
  logoCont.append(svgCont, headerText);
  frame.append(glassUpper, sandUpper, glassBottom, sandBottom, fillet);

  visualTimerCont.append(logoCont, frame, button, textArea);

  app.append(visualTimerCont);

  if (extraChoice == 0) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, 
    });
  
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
      // You can update the UI here with the current time, e.g., display on a label
      const currentTime = timer.getTimeValues();
      textArea.innerText = `${currentTime.minutes}:${currentTime.seconds}`;
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
      textArea.innerText = `${currentTime.minutes}:${currentTime.seconds}`;

      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });

    
    timer.addEventListener("targetAchieved", () => {
      visualTimerFunc(minutes, extraChoice);
     
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
      textArea.innerText = `${currentTime.minutes}:${currentTime.seconds}`;

      console.log(minutes);
      console.log(currentTime.minutes);
      if (currentTime.minutes + 1 == minutes - 5) {
        console.log("-5 bro");
        breakView(timer, "visual", extraChoice);
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

function abortTimer() {
  window.location.reload();
}
