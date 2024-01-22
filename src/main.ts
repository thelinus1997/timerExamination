import "./scss/style.scss";
import "./scss/_digitalTimer.scss";
import "./scss/_alarmvy.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import "./alarmvy";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { createMenu } from "./menu";
<<<<<<< HEAD
import "./breakview";


import { Timer } from "easytimer.js";
const timer = new Timer();


=======
import { analogStart } from "./analog";
import { alarmView } from "./alarmvy";
>>>>>>> Linus

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
// createMenu();
// startLoading();
// startCountdown();
// startLoading();
// startCountdown();
alarmView(); //startCountdown();

//startLoading();
startCountdown();


visualTimerFunc();