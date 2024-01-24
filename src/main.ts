import "./scss/_alarmvy.scss";
import "./scss/_analog.scss";
import "./scss/_breakvy.scss";
import "./scss/_colors.scss";
import "./scss/_digitalTimer.scss";
import "./scss/_fonts.scss";
import "./scss/_menu.scss";
import "./scss/_mixins.scss";
import "./scss/_visualTimer.scss";
import "./scss/style.scss";
import { startLoading } from "./loadingScreen";
import "./analog";

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
