import "./scss/style.scss";
import "./scss/_digitalTimer.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
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
startLoading();
