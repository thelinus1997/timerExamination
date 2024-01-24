import Timer from "easytimer.js";
let timer = new Timer();

const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;
const myVarVal = "60s";
document.documentElement.style.setProperty("oneMinute", myVarVal);
export function visualTimerFunc(input:number) {
  console.log(input)
  if (!contentAppended) {
    app.innerHTML = "";

    const visualTimerCont = document.createElement("div");
    visualTimerCont.classList.add("visualTimerCont");

    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");

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
    visualTimerCont.append(logoCont);
    visualTimerCont.append(visualTimer);
    frame.append(glassUpper, sandUpper, glassBottom, sandBottom, fillet);
    visualTimer.append(frame);
    visualTimerCont.append(button);

    app.append(visualTimerCont);

    timer.start({ countdown: true, startValues: { seconds: 60 } });

    // Use the 'secondsUpdated' event to continuously check if the timer has reached 0
    // timer.addEventListener('secondsUpdated', function (e) {
    //   if (e.target.getTimeValues().seconds === 0) {
    //     timer.stop();
    //     // Additional actions when the timer reaches 0 seconds
    //   }
    // });

    function abortTimer() {
      window.location.reload();
    }

    contentAppended = true; // Set to true after appending content
  }
}

visualTimerFunc();