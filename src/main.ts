import "./scss/style.scss";
import { startLoading } from "./loadingScreen";
import "./analog";

const app = document.querySelector<HTMLDivElement>("#app")!;
console.log(app);
startLoading();
interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
