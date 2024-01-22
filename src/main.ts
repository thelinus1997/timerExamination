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
import { analogStart } from "./analog";
import { alarmView } from "./alarmvy";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
// startLoading();
//createMenu();
// startCountdown();
alarmView(); //startCountdown();

//visualTimerFunc();
