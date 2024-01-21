const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;
const secTimerDisplay: HTMLDivElement = document.createElement("div");

let secTimer: number = 10;
let minTimer: number = 1;

export function startCountdown() {
  if (!contentAppended) {
    // Create a new elements
    
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
  }

  const intervalId = setInterval(() => {
    secTimer--;

    // check if the time is 0 then it will display "TIMES UP!"
    if (secTimer < 0) {
      secTimer = 59; // reset seconds
      minTimer--;

      // Check if the countdown is finished
      if (minTimer <= 0 && secTimer <= 0) {
        clearInterval(intervalId);
        console.log("TIMES UP!");
      }
    }

    // Display the current time
    console.log(`${minTimer}:${secTimer}`);
  }, 1000); // 1000 milliseconds = 1 second

  // Update the text content of the div using setInterval
  setInterval(() => {
    secTimerDisplay.textContent = `${minTimer}:${secTimer}`;
  }, 1000);
}

// Start the countdown
startCountdown();

const varNum = 20;
const newNum = 3;
let sum = varNum - newNum;
console.log(sum);

function abortTimer() {
  window.location.reload();
}
