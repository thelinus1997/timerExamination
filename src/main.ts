import "./scss/style.scss";
import "./scss/_digitalTimer.scss"
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";


import { Timer } from "easytimer.js";
const timer = new Timer();



const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
//startLoading();
startCountdown();

//visualTimerFunc();
