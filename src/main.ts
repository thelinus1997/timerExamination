import "./scss/style.scss";
import "./scss/_digitalTimer.scss"
import { startLoading } from "./loadingScreen";
import "./analog";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
//startLoading();
startCountdown();

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
