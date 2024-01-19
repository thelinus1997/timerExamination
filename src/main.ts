import "./scss/style.scss";
import "./loadingScreen";
import "./menu";
const app = document.querySelector<HTMLDivElement>("#app")!;

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
