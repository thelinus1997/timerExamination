const app = document.querySelector<HTMLDivElement>("#app")!;

let secTimer: number = 10;
let minTimer: number = 1;

export function startCountdown() {
  app.innerHTML = "";

  const intervalId = setInterval(() => {
    secTimer--;

    // check if the time is 0 then it will display time is up
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

  // Create a new div element
  const secTimerDisplay: HTMLDivElement = document.createElement("div");
  secTimerDisplay.classList.add("timerBoxDisplay");
  const hamBurgareMeny: HTMLImageElement= document.createElement("img");
 /*  hamBurgareMeny.classList.add("hamBurgareMeny");
  hamBurgareMeny.src=".././pub */
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("navLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  const headerText: HTMLElement = document.createElement("p");
  headerText.classList.add("headerText");
  headerText.innerText = "interval";

  logoCont.append(svgCont, headerText);

  // Append the new div to the document body
  app.append(logoCont,secTimerDisplay);
  

  // Update the text content of the div using setInterval
  setInterval(() => {
    secTimerDisplay.textContent = `${minTimer}:${secTimer - 1}`;
  }, 1000);
}

// Start the countdown
startCountdown();

const varNum = 20;
const newNum = 3;
let sum = varNum - newNum;
console.log(sum);
