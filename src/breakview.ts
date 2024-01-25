import Timer from "easytimer.js";
import { setTimer } from "./setTimer";
import { visualTimerFunc } from "./visual";
import { analogStart } from "./analog";
import { startCountdown } from "./digital";
const app = document.querySelector<HTMLDivElement>("#app")!;

let breakTimer = new Timer();

/*
skapar HTML och timer för break. Visar tiden som är kvar på breaken.
Tar emot timern som användes innan och pausar den.
Tar emot vilken vy som användes i en sträng samt extravalet.
*/

export function breakView(inputTimer: Timer, typeOfTimer: String, extraChoice) {
  inputTimer.pause();
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

  const breakTimeLeft: HTMLElement = document.createElement("h1");
  breakTimeLeft.classList.add("floatingBreakTimeText");
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () =>
    resumeTimer(typeOfTimer, inputTimer.getTimeValues(), extraChoice)
  );
  button.classList.add("newTimerButton");
  button.innerText = "NO PAUSE, GO NOW!";
  ellipseOne.appendChild(ellipseTwo);
  ellipseTwo.appendChild(ellipseThree);
  ellipseThree.appendChild(ellipseFour);
  ellipseFour.appendChild(alarmSvgContainer);
  main.append(ellipseOne, alertText, button);
  app.append(main, breakTimeLeft);

  //timer för paus startas
  breakTimer.start({
    countdown: true,
    startValues: { minutes: 5 },
    target: { seconds: 0 },
  });
  breakTimer.addEventListener("secondsUpdated", () => {
    console.log(breakTimer);
    //Visar hur långt kvar der är av pausen
    const currentTime = breakTimer.getTimeValues();
    console.log(`Current time: ${currentTime.minutes}:${currentTime.seconds}`);
    breakTimeLeft.innerText = `${currentTime.minutes}:${currentTime.seconds}`;
  });

  // Add an event listener for the 'targetAchieved' event to handle timer completion
  breakTimer.addEventListener("targetAchieved", () => {
    // You can update the UI here with the current time, e.g., display on a label
    const currentTime = inputTimer.getTimeValues();
    resumeTimer(typeOfTimer, inputTimer.getTimeValues(), extraChoice);
  });
}
//När pausen är över skickas all input tillbaka till föregående funktion, ex: Du startar analog på 20min med break valt, efter 5min får du en paus på 5minuter.
//efter 5 minuter återgår du till den analoga vyn med 15min kvar på timern. detta kommer hända igen sedan vid 10min och 5min.
function resumeTimer(typeOfTimer, timeLeft, extraChoice) {
  switch (typeOfTimer) {
    case "analog":
      analogStart(timeLeft.minutes, extraChoice);
      break;
    case "digital":
      startCountdown(timeLeft.minutes, extraChoice);
      break;
    case "visual":
      visualTimerFunc(timeLeft.minutes, extraChoice);
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
}
