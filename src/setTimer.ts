import { analogStart } from "./analog";
import { alarmView } from "./timesupvy";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { event } from "jquery";

const app = document.querySelector<HTMLDivElement>("#app")!;
let minutes = 10;
const alarmTypes: Array<String> = [
  "analog",
  "digital",
  "visual",
  "text",
  "circles",
];
let choice = 0;

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

function buildPage(input: String) {
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
  //eventlisterner sparar 0-2 beroende på vad som är iklickat (göra genom if sats)
  const textOne: HTMLElement = document.createElement("p");
  textOne.innerText = "intervals";
  const textTwo: HTMLElement = document.createElement("p");
  textTwo.innerText = "5 min break / interval";

  // const checkBoxOne: HTMLInputElement = document.createElement('input');
  // checkBoxOne.type = "checkbox";


  //function to check if box1 is selected
  checkBoxOne.addEventListener('change', () => {
    if (checkBoxOne.checked) {
      console.log('CheckboxOne is selected');
    } else {
      console.log('CheckboxOne is not selected');
    }

  });

  checkBoxTwo.addEventListener("change", function (this: HTMLInputElement, event: Event): void {
    if (this.checked) {
      console.log('Checkboxtwo is selected');
    } else {
      console.log('Checkboxtwo is not selected');
    }
  });

  // checkBoxTwo.addEventListener('Change'), (event: Event) => {
  //   if ((event.target as HTMLInputElement).checked) {
  //     console.log('Checkboxtwo is selected');
  //   } else {
  //     console.log('Checkboxtwo is not selected');
  //   }
  // }


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
function getTimerValue(input: number, alarmType: String) {
  console.log(input, alarmType);
  if (alarmType.includes("analog")) {
    //skicka med input minuter + valet du gjorde. (0 = inget val, 1 = interval, 2 = 5min break)
    analogStart(input, 2);
  }
  if (alarmType.includes("digital")) {
    startCountdown(input);
  }
  if (alarmType.includes("visual")) {
    visualTimerFunc(input);
  }
  if (alarmType.includes("text")) {
    console.log("not finished");
  }
  if (alarmType.includes("cirkles")) {
    console.log("object");
  }
}
