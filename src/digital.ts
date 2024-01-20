const app = document.querySelector<HTMLDivElement>("#app")!;



let secTimer: number = 10;
let minTimer: number = 1;

export function startCountdown() {
  const intervalId = setInterval(() => {
    app.innerHTML = "";
    secTimer--;

    // check if the time is 0 then it will displa time is up
    if (secTimer < 0) {
      secTimer = 59; // reset seconds
      minTimer--;

      // Check if the countdown is finished
      if (minTimer < 0) {
        clearInterval(intervalId);
        console.log("TIMES UP!");
      }
    }

    // Display the current time
    console.log(`${minTimer}:${secTimer}`);

  }, 1000); // 1000 milliseconds = 1 second
}

// Start the countdown
startCountdown();

// Create a new div element
const secTimerDisplay = document.createElement("div");
secTimerDisplay.classList.add("timerBoxDisplay")

// Append the new div to the document body
app.appendChild(secTimerDisplay);



// Update the text content of the div using setInterval
setInterval(() => {
  secTimerDisplay.textContent = `${minTimer}:${secTimer-1}`;
}, 1000);



const varNum = 20;
const newNum = 3;
let sum = varNum - newNum;
console.log(sum)