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

  const clockContainer: HTMLImageElement = document.createElement("img");
  clockContainer.src = "../public/clock.svg";
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";
  mainContainer.append(logoCont, clockContainer, button);
  app.append(mainContainer);
}
function abortTimer() {
  window.location.reload();
}
