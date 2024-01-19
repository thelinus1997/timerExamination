import "./scss/style.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import "./scss/_analog.scss";
import { setTimer } from "./setTimer";
import { startCountdown } from "./digital";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
startLoading();
//startCountdown();

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
