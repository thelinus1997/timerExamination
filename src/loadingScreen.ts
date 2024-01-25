import { create } from "domain";
import { setTimer } from "./setTimer";
import { createMenu } from "./menu";

//hämtar app för att kunna appenda
const app = document.querySelector<HTMLDivElement>("#app")!;

//skapar timer for att simulera laddning
const myTimer = setTimeout(() => {
  // Efter timern är över fortsätter koden i FinishLoading()
  finishLoading();
}, 2000);

//Appenda det som behövs för att få sidan att se ut som den skall
export function startLoading() {
  app.innerHTML = "";
  const centerCont: HTMLDivElement = document.createElement("div");
  centerCont.classList.add("center");
  const imgElement: HTMLImageElement = document.createElement("img");
  imgElement.src = "../public/logo.svg";
  imgElement.classList.add("logo");
  const title: HTMLElement = document.createElement("h1");
  title.innerText = "INTERVAL";
  const subTitle: HTMLElement = document.createElement("p");
  subTitle.innerText = "For all your timing needs";
  centerCont.append(imgElement, title, subTitle);
  app.append(centerCont);
  //Här startar timern som simulerar laddning
  myTimer;
}
//Funktionen tar bort all HTML från laddningssidan, kör sedan menyfunktion.
function finishLoading() {
  app.innerHTML = "";
  console.log("loading");
  createMenu();
}
