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
  main.append(logoCont);
  app.appendChild(main);
}
