import { analogStart } from "./analog";
import { alarmView } from "./alarmvy";
import { breakView } from "./breakview";
const app = document.querySelector<HTMLDivElement>("#app")!;
let minutes = 10;

export function setTimer() {
  app.innerHTML = "";
  buildPage();
}
console.log(app);
function updateNegative() {
  if (minutes == 1) {
    minutes = 99;
  } else {
    minutes -= 1;
  }
  const minutesText = document.querySelector(
    "#app > div > div.timePicker > div > h1"
  ) as HTMLElement;
  minutesText.innerText = minutes.toString();
}
function updatePositive() {
  if (minutes == 99) {
    minutes = 1;
  } else {
    minutes += 1;
  }
  const minutesText = document.querySelector(
    "#app > div > div.timePicker > div > h1"
  ) as HTMLElement;
  minutesText.innerText = minutes.toString();
}

function buildPage() {
  console.log("hej");
  const main: HTMLDivElement = document.createElement("div");
  main.classList.add("setTimer");

  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");

  logoCont.appendChild(svgCont);

  const timeContainer: HTMLDivElement = document.createElement("div");
  timeContainer.classList.add("timePicker");
  const arrowLeft: HTMLImageElement = document.createElement("img");
  arrowLeft.src = "../public/arrowLeft.svg";
  arrowLeft.addEventListener("click", updateNegative);
  const arrowRight: HTMLImageElement = document.createElement("img");
  arrowRight.src = "../public/arrowRight.svg";
  arrowRight.addEventListener("click", updatePositive);
  const minuteContainer: HTMLDivElement = document.createElement("div");
  const minuteShower: HTMLElement = document.createElement("h1");
  minuteShower.innerText = minutes.toString();
  const minuteText: HTMLElement = document.createElement("p");
  minuteText.innerText = "minutes";

  const choiceContainer: HTMLDivElement = document.createElement("div");
  choiceContainer.classList.add("choiceContainer");
  const intervalContainer: HTMLDivElement = document.createElement("div");
  intervalContainer.classList.add("choiceSubContainer");
  const breakContainer: HTMLDivElement = document.createElement("div");
  breakContainer.classList.add("choiceSubContainer");

  const checkBoxOne: HTMLInputElement = document.createElement("input");
  checkBoxOne.type = "checkbox";
  const checkBoxTwo: HTMLInputElement = document.createElement("input");
  checkBoxTwo.type = "checkbox";

  const textOne: HTMLElement = document.createElement("p");
  textOne.innerText = "intervals";
  const textTwo: HTMLElement = document.createElement("p");
  textTwo.innerText = "5 min break / interval";

  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => getTimerValue(minutes));
  button.classList.add("whiteButton");
  button.innerText = "START TIMER";
  intervalContainer.append(checkBoxOne, textOne);
  breakContainer.append(checkBoxTwo, textTwo);
  choiceContainer.append(intervalContainer, breakContainer);
  minuteContainer.append(minuteShower, minuteText);
  timeContainer.append(arrowLeft, minuteContainer, arrowRight);
  main.append(logoCont, timeContainer, choiceContainer, button);
  app.appendChild(main);
}
function getTimerValue(input: number) {
  console.log(input);
  alarmView();
  // breakView();
}
