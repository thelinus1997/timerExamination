import Timer from "easytimer.js";
import { breakView } from "./breakview";
import { alarmView } from "./alarmvy";
import { createMenu } from "./menu";
//skapar easyTimer + tom sträng som används för att hålla koll på vilken timer du för nuvarande använder (används för att komma tillbaka hit efter breaktimer)
let timer = new Timer();
let typeOfTimer = "";

const app = document.querySelector<HTMLDivElement>("#app")!;
//tar emot minuter timern skall gå samt extra val (interval/break)
export function analogStart(minutes: number, extraChoice: number) {
  app.innerHTML = "";
  typeOfTimer = "analog";
  const mainContainer: HTMLDivElement = document.createElement("div");
  mainContainer.classList.add("analogContainer");
  const logoCont: HTMLDivElement = document.createElement("div");
  logoCont.classList.add("headerNavLogo");
  const svgCont: HTMLImageElement = document.createElement("img");
  svgCont.setAttribute("type", "img/svg+xml");
  svgCont.setAttribute("src", "../public/flippedLogo.svg");
  svgCont.setAttribute("width", "32");
  svgCont.setAttribute("height", "32");
  const headerText: HTMLElement = document.createElement("p");
  headerText.innerText = "interval";
  svgCont.addEventListener("click", createMenu);
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

  const button: HTMLButtonElement = document.createElement("button");
  button.addEventListener("click", () => abortTimer());
  button.classList.add("greyButton");
  button.innerText = "ABORT TIMER";
  clockContainer.append(clockFaceSvg, secondHand, minuteHand);
  mainContainer.append(logoCont, clockContainer, button);
  app.append(mainContainer);

  //säger åt secondHand att den skall rotera 360 grader * mängd minuter (5 min ska det gå 360deg * 5)
  const secondHandRotation = 360 * minutes;
  //säger åt minuteHand att göra detsamma fast delat på 60 då det finns 60min på en timme.
  const minuteHandRotation = (360 / 60) * minutes;

  //Säger åt hur visarna skall röra sig.
  secondHand.style.animation = `rotateClockwise ${
    minutes * 60
  }s linear infinite`;

  minuteHand.style.animation = `rotateMinuteHand ${
    minutes * 60
  }s linear infinite`;

  //Skapar ny styleSheet för just denna animation
  const styleSheet = document.styleSheets[0];
  //Skapar regler som avgör när visarna skall sluta röra på sig, använder sig utav vår tidigare kod.
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
  //Kodblocket nedan hanterar extravalen, väljer du 0 (inget icheckat i setTimer) kommer den enbart köras en gång sedan avslutas timern i att skicka dig till alarmView()
  //väljer du 1 blir funktionen rekursiv och oändlig
  //väljer du 2 får du 5minuters pauser var 5e minut, timern fortsätter sedan där den pausades. Detta görs i alla olika klockvyer.
  if (extraChoice == 0) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 }, //när sekunder är 0 körs "targetAchieved"
    });
    // Kod som körs varje sekund (används bland annat för att visa tid som är kvar på digital + breakview)
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);
      const currentTime = timer.getTimeValues();
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });
    //kod som körs när taget är nått, i våran kod är det när seconds = 0.
    timer.addEventListener("targetAchieved", () => {
      alarmView();
    });
  }

  if (extraChoice == 1) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
    });
    timer.addEventListener("secondsUpdated", () => {
      console.log(timer);

      const currentTime = timer.getTimeValues();
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });

    timer.addEventListener("targetAchieved", () => {
      analogStart(minutes, extraChoice);
    });
  }
  if (extraChoice == 2) {
    timer.start({
      countdown: true,
      startValues: { minutes: minutes },
      target: { seconds: 0 },
    });
    timer.addEventListener("secondsUpdated", () => {
      console.log("in break version");
      const currentTime = timer.getTimeValues();
      console.log(minutes);
      console.log(currentTime.minutes);
      if (currentTime.minutes + 1 == minutes - 5) {
        console.log("-5 bro");
        breakView(timer, "analog", extraChoice);
      }
      console.log(
        `Current time: ${currentTime.minutes}:${currentTime.seconds}`
      );
    });
    timer.addEventListener("targetAchieved", () => {
      alarmView();
    });
  }
}
//klickar du på abort startas sidan om helt enkelt
function abortTimer() {
  window.location.reload();
}
