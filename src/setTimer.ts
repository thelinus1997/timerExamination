import { analogStart } from "./analog";
import { alarmView } from "./alarmvy";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { event } from "jquery";
import { createMenu } from "./menu";

const app = document.querySelector<HTMLDivElement>("#app")!;

//var med basvärde för timern, startar på 10min.
let minutes = 10;
//Array för att hålla koll på vad för klockvy som är vald
const alarmTypes: Array<String> = [
  "analog",
  "digital",
  "visual",
  "text",
  "circles",
];
//var som används för att kontrollera extra val (interval/break)
let choice = 0;
//setTimer tar emot nummer som med hjälp utav vår array "alarmTypes" visar vad för vy du valt.
export function setTimer(alarmChoice: number) {
  app.innerHTML = "";
  let chosenType: String = "";
  switch (alarmChoice) {
    case 0:
      chosenType = alarmTypes[0];
      break;
    case 1:
      chosenType = alarmTypes[1];
      break;
    case 2:
      chosenType = alarmTypes[2];
      break;
    case 3:
      chosenType = alarmTypes[3];
      break;
    case 4:
      chosenType = alarmTypes[4];
      break;
  }
  buildPage(chosenType);
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
//Tar emot den valda vyn som input, skapar sedan all HTML för att välja tid samt extraval (interval/break)
function buildPage(input: String) {
  console.log("hej");
  const main: HTMLDivElement = document.createElement("div");
  main.classList.add("setTimer");

  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navigationLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");

  logoCont.appendChild(svgCont);

  // eventlistener för att gå till menyn
  svgCont.addEventListener("click", createMenu);
  document.getElementById("app")?.appendChild(logoCont);
  logoCont.append(svgCont);

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

  //eventlisteners för båda checkboxes som ser till att du enbart har en vald samt håller koll på vad du valt genom variabeln "choice"
  checkBoxOne.addEventListener("change", () => {
    if (checkBoxOne.checked) {
      if (checkBoxTwo.checked) {
        checkBoxTwo.checked = false;
        choice = 1;
      } else {
        choice = 1;
      }
    } else {
      choice = 0;
    }
  });

  checkBoxTwo.addEventListener("change", () => {
    if (checkBoxTwo.checked) {
      if (checkBoxOne.checked) {
        checkBoxOne.checked = false;
        choice = 2;
      } else {
        choice = 2;
      }
    } else {
      choice = 0;
    }
  });

  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => getTimerValue(minutes, input));
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

//skicka med input minuter + string som avgör ditt vy-val
function getTimerValue(input: number, alarmType: String) {
  //Choice är deklarerat högst i koden så den är tillgänglig här.
  //Choice kan vara 0, 1 eller 2. 0 är vanlig timer, 1 är interval (startar om så fort timern är slut), 2 är break (ex: timer satt 20 min, varje 5 min får du 5min paus, timern fortsätter sen där den var, 20, 15, 10, 5, slut.)
  console.log(input, alarmType);
  if (alarmType.includes("analog")) {
    analogStart(input, choice);
  }
  if (alarmType.includes("digital")) {
    startCountdown(input, choice);
  }
  if (alarmType.includes("visual")) {
    visualTimerFunc(input, choice);
  }
  if (alarmType.includes("text")) {
    console.log("not finished");
  }
  if (alarmType.includes("cirkles")) {
    console.log("object");
  }
}
