import Timer from 'easytimer.js';
  // Initialize EasyTimer
 let timer = new Timer();

const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;
const secTimerDisplay: HTMLDivElement = document.createElement("div");

export function startCountdown() {
  // Create new elements only if they haven't been appended yet
  if (!contentAppended) {
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
      startValues: { minutes: 10 },
      target: { seconds: 0 },
    });

  }
 

  // Update display on every tick
  timer.addEventListener('secondsUpdated', function (e: any) {
    const currentTime = timer.getTimeValues();
    const formattedTime = `${currentTime.minutes}:${currentTime.seconds}`;
    secTimerDisplay.textContent = formattedTime;
  });

  // Triggered when countdown is completed
  timer.addEventListener('targetAchieved', function (e: any) {
    secTimerDisplay.textContent = 'TIMES UP!';

  });
}

// Call the startCountdown function
startCountdown();

function abortTimer() {
  // Stop the timer and reload the window
  timer.stop();
  window.location.reload();
}
