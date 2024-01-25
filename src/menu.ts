import { setTimer } from "./setTimer";
const app = document.querySelector<HTMLDivElement>("#app")!;

//Skapar all HTML för meny samt get klasser etc.
export function createMenu() {
  app.innerHTML = "";
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navigationLogo");

  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogoWhite.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  document.getElementById("app")?.appendChild(logoCont);
  logoCont.append(svgCont);

  document.getElementById("app")?.appendChild(logoCont);

  const menuContainer = document.createElement("ul");
  menuContainer.classList.add("menu-Container");

  const menuItems = [
    "ANALOG TIMER",
    "DIGITAL TIMER",
    "VISUAL TIMER",
    "TEXT TIMER",
    "CIRKLES TIMER",
  ];
  //Skapar eventlisterners för menuItems och lägger dem i lista + lägger upp på sidan
  menuItems.forEach((itemText) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(itemText);
    //I eventlisterner skickas själva elementet som klickats med i funktionen handleChoice
    node.addEventListener("click", () => handleChoice(node));
    node.appendChild(textnode);
    menuContainer.appendChild(node);
  });

  const appElement = document.getElementById("app");
  appElement?.appendChild(menuContainer);
}
//med hjälp av objektet kollar man vad som klickats
function handleChoice(input: HTMLElement | null | undefined) {
  //input.textContent är samma som menuItems och avgör därifrån vad som är klickat.
  if (input?.textContent) {
    console.log(input.textContent);
    if (input.textContent.includes("ANALOG")) {
      setTimer(0);
    }
    if (input.textContent.includes("DIGITAL")) {
      setTimer(1);
    }
    if (input.textContent.includes("VISUAL")) {
      setTimer(2);
    }
    if (input.textContent.includes("TEXT")) {
      setTimer(3);
    }
    if (input.textContent.includes("CIRKLES")) {
      setTimer(4);
    }
  }
}
