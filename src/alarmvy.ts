const app = document.querySelector<HTMLDivElement>("#app")!;
import { setTimer } from "./setTimer";
export function alarmView() {
  app.innerHTML = "";
  const main: HTMLDivElement = document.createElement("div");
  main.classList.add("alarmMainCont");
  const alarmSvgContainer: HTMLImageElement = document.createElement("img");
  alarmSvgContainer.src = "../public/alarm.svg";
  alarmSvgContainer.setAttribute("width", "50");
  alarmSvgContainer.setAttribute("height", "50");
  const ellipseOne: HTMLDivElement = document.createElement("div");
  ellipseOne.id = "ellipseOne";

  const ellipseTwo: HTMLDivElement = document.createElement("div");
  ellipseTwo.id = "ellipseTwo";

  const ellipseThree: HTMLDivElement = document.createElement("div");
  ellipseThree.id = "ellipseThree";

  const ellipseFour: HTMLDivElement = document.createElement("div");
  ellipseFour.id = "ellipseFour";
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => setTimer());
  button.classList.add("newTimerButton");
  button.innerText = "SET NEW TIMER";
  ellipseOne.appendChild(ellipseTwo);
  ellipseTwo.appendChild(ellipseThree);
  ellipseThree.appendChild(ellipseFour);
  ellipseFour.appendChild(alarmSvgContainer);
  main.append(ellipseOne, button);
  app.appendChild(main);
}
