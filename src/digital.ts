import Timer from "easytimer.js";
// Initialize EasyTimer
let timer = new Timer();
const app = document.querySelector<HTMLDivElement>("#app")!;

let contentAppended = false;
// const secTimerDisplay: HTMLDivElement = document.createElement("div");

export function startCountdown(
  minutes //variabel som är 0-2 (valet du gjorde), 0= vanlig timer, 1= interval, 2= breaks
) {
  app.innerHTML = "";
  // Create a new  elements
  const secTimerDisplay: HTMLDivElement = document.createElement("div");
  secTimerDisplay.classList.add("timerBoxDisplay");

  const navLogoTimerCont: HTMLDivElement = document.createElement("div");
  navLogoTimerCont.classList.add("navLogoTimer");

  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navLogo");
  const timerCont: HTMLDivElement = document.createElement("div");
  timerCont.classList.add("timerCont");
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";

  // Create new elements only if they haven't been appended yet
  if (!contentAppended) {
    // Create new elements

    secTimerDisplay.classList.add("timerBoxDisplay");

    const navLogoTimerCont: HTMLDivElement = document.createElement("div");
    navLogoTimerCont.classList.add("navLogoTimer");
    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");
    const timerCont: HTMLDivElement = document.createElement("div");
    timerCont.classList.add("timerCont");
    const button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", () => abortTimer());
    button.classList.add("abortButton");
    button.innerText = "ABORT TIMER";

    const svgCont: HTMLImageElement = document.createElement("img");
    svgCont.setAttribute("type", "img/svg+xml");
    svgCont.setAttribute("src", "../public/flippedLogo.svg");
    svgCont.setAttribute("width", "32");
    svgCont.setAttribute("height", "32");

    timerCont.append(logoCont, secTimerDisplay, button);

    timerCont.append(logoCont);
    timerCont.append(secTimerDisplay);
    timerCont.append(button);

    app.append(timerCont);

    const headerText: HTMLElement = document.createElement("p");
    headerText.classList.add("headerText");
    headerText.innerText = "interval";

    logoCont.append(svgCont, headerText);
    timerCont.append(logoCont);
    timerCont.append(secTimerDisplay);
    timerCont.append(button);

    app.append(timerCont);

    contentAppended = true;
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
    });
  }

  // Update display on every tick
  timer.addEventListener("secondsUpdated", function (e: any) {
    const currentTime = timer.getTimeValues();
    const formattedTime = `${currentTime.minutes}:${currentTime.seconds}`;
    secTimerDisplay.textContent = formattedTime;
  });

  // Triggered when countdown is completed
  timer.addEventListener("targetAchieved", function (e: any) {
    secTimerDisplay.textContent = "TIMES UP!";
  });
}

// Call the startCountdown function
//

function abortTimer() {
  // Stop the timer and reload the window
  timer.stop();
  window.location.reload();
}
