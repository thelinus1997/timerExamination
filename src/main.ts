import "./scss/style.scss";
import { startLoading } from "./loadingScreen";
import "./analog";
import { setTimer } from "./setTimer";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
startLoading();

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
