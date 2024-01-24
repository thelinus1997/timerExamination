import Timer from "easytimer.js";
import { breakView } from "./breakview";
import { alarmView } from "./alarmvy";

// Initialize EasyTimer
let timer = new Timer();
const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;
const myVarVal = "60s";
document.documentElement.style.setProperty("oneMinute", myVarVal);


function getTimerValue(timerValue: number, alarmType: String) {
  if (alarmType.includes("visual")) {
    visualTimerFunc(timerValue);
  }
  button.addEventListener("click", () => getTimerValue(minutes, input, choice));
}

export function visualTimerFunc() {
 
    app.innerHTML = "";

    const visualTimerCont = document.createElement("div");
    visualTimerCont.classList.add("visualTimerCont");

    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");

    const digitalTimerVisual = document.createElement("div");
    digitalTimerVisual.classList.add('digitalTimerVisual');

    const textArea:HTMLElement = document.createElement("h1");
    textArea.classList.add("timeTextDisplay")
    textArea.innerText ="10:00"

    const visualTimer = document.createElement("div");
    visualTimer.classList.add("visualTimer");

    const glassUpper = document.createElement("div");
    glassUpper.classList.add("glassUpper");

    const sandUpper = document.createElement("div");
    sandUpper.classList.add("sandUpper");

    const fillet = document.createElement("div");
    fillet.classList.add("fillet");

    const glassBottom = document.createElement("div");
    glassBottom.classList.add("glassbottom");

    const sandBottom = document.createElement("div");
    sandBottom.classList.add("sandBottom");

    const frame = document.createElement("div");
    frame.classList.add("frame");

    const button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", () => abortTimer());
    button.classList.add("greyButton");
    button.innerText = "ABORT TIMER";

    const svgCont: HTMLImageElement = document.createElement("img");
    svgCont.setAttribute("type", "img/svg+xml");
    svgCont.setAttribute("src", "./public/flippedLogo.svg");
    svgCont.setAttribute("width", "32");
    svgCont.setAttribute("height", "32");
    svgCont.style.fill= "white";

    logoCont.appendChild(svgCont);
    frame.append(glassUpper, sandUpper, glassBottom, sandBottom, fillet);
    
    visualTimerCont.append(svgCont, frame, button, textArea);


    app.append(visualTimerCont);

    function abortTimer() {
      window.location.reload();
    }

  }

