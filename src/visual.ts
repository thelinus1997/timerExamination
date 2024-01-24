import Timer from "easytimer.js";
let timer = new Timer();

const app = document.querySelector<HTMLDivElement>("#app")!;
const myVarVal = "60s";
document.documentElement.style.setProperty("oneMinute", myVarVal);
export function visualTimerFunc(input:number, minutes) {
  app.innerHTML = "";

  console.log(input)

    const visualTimerCont = document.createElement("div");
    visualTimerCont.classList.add("visualTimerCont");

    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");

    const digitalTimerVisual = document.createElement("div");
    digitalTimerVisual.classList.add("digitalTimerVisual");
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
    visualTimerCont.append(digitalTimerVisual);
    visualTimerCont.append(visualTimer);
    frame.append(glassUpper, sandUpper, glassBottom, sandBottom, fillet);
    visualTimer.append(frame);
    visualTimerCont.append(button);

    app.append(visualTimerCont);

    timer.start({ countdown: true, startValues: { seconds: 60 } });

    const animationDuration = input + "s";
    document.styleSheets[0].insertRule(`@keyframes sandDown { 0% { background-image: linear-gradient(45deg, $sand 100%, transparent 0%); } ... 100% { background-image: linear-gradient(45deg, $sand 0%, transparent 0%); } }`, 0);
    document.styleSheets[0].insertRule(`@keyframes sandUp { 0% { background-image: linear-gradient(45deg, transparent 100%, $sand 0%); } ... 100% { background-image: linear-gradient(45deg, transparent 0%, $sand 0%); } }`, 0);
    timer.addEventListener('secondsUpdated', function (e) {
      if (timer.getTimeValues().seconds === 0) {
        timer.stop();
      }
    });
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
    });
    timer.addEventListener("secondsUpdated", function (e: any) {
      const currentTime = timer.getTimeValues();
      const formattedTime = `${currentTime.minutes}:${currentTime.seconds}`;
      digitalTimerVisual.textContent = formattedTime;
    });
  
    // Triggered when countdown is completed
    timer.addEventListener("targetAchieved", function (e: any) {
      digitalTimerVisual.textContent = "TIMES UP!";
    });
  
      function abortTimer() {
        window.location.reload();
      }
  
  }

 

visualTimerFunc(60);