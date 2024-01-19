const app = document.querySelector<HTMLDivElement>("#app")!;

export function setTimer() {
  buildPage();
}
console.log(app);
function buildPage() {
  console.log("hej");
  const main: HTMLDivElement = document.createElement("div");
  main.classList.add("setTimer");

  const logoCont: HTMLDivElement = document.createElement("div");

  const imgCont: HTMLImageElement = document.createElement("img");
  imgCont.src = "../public/flippedLogo.svg";
  imgCont.classList.add("logo");
  logoCont.appendChild(imgCont);

  const timeContainer: HTMLDivElement = document.createElement("div");
  const arrowLeft: HTMLImageElement = document.createElement("img");
  const arrowRight: HTMLImageElement = document.createElement("img");
  const minuteContainer: HTMLDivElement = document.createElement("div");
  const minuteShower: HTMLElement = document.createElement("h1");
  const minuteText: HTMLElement = document.createElement("p");

  const choiceContainer: HTMLDivElement = document.createElement("div");
  const checkboxContainer: HTMLDivElement = document.createElement("div");
  const textContainer: HTMLDivElement = document.createElement("div");

  const checkBoxOne: HTMLInputElement = document.createElement("input");
  checkBoxOne.type = "checkbox";
  const checkBoxTwo: HTMLInputElement = document.createElement("input");
  checkBoxTwo.type = "checkbox";

  const textOne: HTMLElement = document.createElement("p");
  const textTwo: HTMLElement = document.createElement("p");

  checkboxContainer.append(checkBoxOne, checkBoxTwo);
  textContainer.append(textOne, textTwo);
  choiceContainer.append(checkboxContainer, textContainer);
  minuteContainer.append(minuteShower, minuteText);
  timeContainer.append(arrowLeft, minuteContainer, arrowRight);
  main.append(logoCont, timeContainer, choiceContainer);
  app.appendChild(main);
}
