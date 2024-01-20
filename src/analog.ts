const app = document.querySelector<HTMLDivElement>("#app")!;
export function analogStart(input: number) {
  app.innerHTML = "";
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.classList.add("analogContainer");
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  const headerText: HTMLElement = document.createElement("p");
  headerText.classList.add("headerText");
  headerText.innerText = "interval";

  logoCont.append(svgCont, headerText);
  const clockContainer: HTMLDivElement = document.createElement("div");
  clockContainer.classList.add("analogClockContainer");
  const clockFaceSvg: HTMLImageElement = document.createElement("img");
  clockFaceSvg.src = "../public/clock.svg";
  clockFaceSvg.setAttribute("width", "400");
  clockFaceSvg.setAttribute("height", "400");
  const secondHand: HTMLImageElement = document.createElement("img");
  secondHand.src = "../public/secondHand.svg";
  secondHand.setAttribute("id", "secondHand");
  const minuteHand: HTMLImageElement = document.createElement("img");
  minuteHand.src = "../public/minuteHand.svg";
  minuteHand.setAttribute("id", "minuteHand");
  const centerCover: HTMLDivElement = document.createElement("div");
  centerCover.setAttribute("id", "centerClockFaceCover");
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";
  clockContainer.append(clockFaceSvg, secondHand, minuteHand, centerCover);
  mainContainer.append(logoCont, clockContainer, button);
  app.append(mainContainer);
}
function abortTimer() {
  window.location.reload();
}
