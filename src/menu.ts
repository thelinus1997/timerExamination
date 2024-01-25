import { setTimer } from "./setTimer";
const app = document.querySelector<HTMLDivElement>("#app")!;
export function createMenu() {
  app.innerHTML = "";
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navigationLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");

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

function handleChoice(input: HTMLElement| null | undefined) {
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