import "./scss/style.scss";
import "./scss/_digitalTimer.scss"
import "./scss/_digitalTimer.scss";
import "./scss/_alarmvy.scss";
import "./scss/_breakvy.scss";
import "./scss/_visualTimer.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import "./alarmvy";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { Timer } from "easytimer.js";




import { createMenu } from "./menu";
import { analogStart } from "./analog";
import { alarmView } from "./alarmvy";
import { breakView } from "./breakview";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
//startLoading();
//startCountdown();
visualTimerFunc();
//visualTimerFunc();
/* const timer = new Timer(); */
// createMenu();
// startLoading();
// startCountdown();
// startLoading();
// startCountdown();
//breakView(); 

// //startLoading();
// startCountdown();

// visualTimerFunc();
