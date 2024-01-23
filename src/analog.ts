import Timer from "easytimer.js";
import { breakView } from "./breakview";
let timer = new Timer();
let typeOfTimer = "";
const app = document.querySelector<HTMLDivElement>("#app")!;
export function analogStart(minutes: number, extraChoice) {
  app.innerHTML = "";
  typeOfTimer = "analog";
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.classList.add("analogContainer");
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
  const clockContainer: HTMLDivElement = document.createElement("div");
  clockContainer.classList.add("analogClockContainer");
  const clockFaceSvg: HTMLImageElement = document.createElement("img");
  clockFaceSvg.src = "../public/clock.svg";
  clockFaceSvg.setAttribute("width", "400");
  clockFaceSvg.setAttribute("height", "400");
  const secondHand: HTMLImageElement = document.createElement("img");
  secondHand.src = "../public/secondHand.svg";
  secondHand.setAttribute("id", "secondHand");
  const minuteHand: HTMLImageElement = document.createElement("img");
  minuteHand.src = "../public/minuteHand.svg";
  minuteHand.setAttribute("id", "minuteHand");
  const centerCover: HTMLDivElement = document.createElement("div");
  centerCover.setAttribute("id", "centerClockFaceCover");
  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";
  clockContainer.append(clockFaceSvg, secondHand, minuteHand, centerCover);
  mainContainer.append(logoCont, clockContainer, button);
  app.append(mainContainer);
  // Calculate the rotation angles based on the input minutes
  const secondHandRotation = 360 * minutes;
  const minuteHandRotation = (360 / 60) * minutes;

  // Set up the rotation animation for the second hand
  secondHand.style.animation = `rotateClockwise ${
    minutes * 60
  }s linear infinite`;

  // Set up the rotation animation for the minute hand
  minuteHand.style.animation = `rotateMinuteHand ${
    minutes * 60
  }s linear infinite`;

  // Set up the keyframes for the rotation animations
  const styleSheet = document.styleSheets[0];

  styleSheet.insertRule(
    `@keyframes rotateClockwise {
        to {
          transform: translate(-50%, -100%) rotate(${secondHandRotation}deg);
        }
      }`,
    styleSheet.cssRules.length
  );

  styleSheet.insertRule(
    `@keyframes rotateMinuteHand {
        to {
          transform: translate(-50%, -100%) rotate(${minuteHandRotation}deg);
        }
      }`,
    styleSheet.cssRules.length
  );
  timer.start({
    countdown: true,
    startValues: { minutes: minutes },
    target: { seconds: 0 }, // When the countdown reaches 0 seconds, trigger the 'targetAchieved' event
  });
  function handleAnimationEnd() {
    alert("Timer Finished!");
  }
}
// Add an event listener for the 'secondsUpdated' event to update the UI
timer.addEventListener("secondsUpdated", () => {
  console.log(timer);
  // You can update the UI here with the current time, e.g., display on a label
  const currentTime = timer.getTimeValues();
  if(choice)
  }
  console.log(`Current time: ${currentTime.minutes}:${currentTime.seconds}`);
});

// Add an event listener for the 'targetAchieved' event to handle timer completion
timer.addEventListener("targetAchieved", () => {
  alert("Timer Finished!");
  abortTimer();
  // Optionally perform any actions when the timer completes
});

function abortTimer() {
  window.location.reload();
}
