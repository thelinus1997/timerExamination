import "./scss/style.scss";
import "./scss/_digitalTimer.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { createMenu } from "./menu";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
// startLoading();
//createMenu();
// startCountdown();
startLoading();
//startCountdown();

//visualTimerFunc();
