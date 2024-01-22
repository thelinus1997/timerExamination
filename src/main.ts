import "./scss/style.scss";
import "./scss/_digitalTimer.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";
import { visualTimerFunc } from "./visual";
import { createMenu } from "./menu";
import "./breakview";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
// createMenu();
// startLoading();
// startCountdown();
// startLoading();
// startCountdown();

// visualTimerFunc();