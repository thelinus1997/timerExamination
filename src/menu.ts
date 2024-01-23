import { setTimer } from "./setTimer";
export function createMenu() {
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navigationLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  document.getElementById("app")?.appendChild(logoCont);
  logoCont.append(svgCont);

  //append logo container to #app
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

  menuItems.forEach((itemText) => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(itemText);
    node.addEventListener("click", () => handleChoice(node));
    node.appendChild(textnode);
    // document.getElementById('app')?.appendChild(node);
    menuContainer.appendChild(node);
  });

  const appElement = document.getElementById("app");
  appElement?.appendChild(menuContainer);
}

function handleChoice(input: HTMLElement) {
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
