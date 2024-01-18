import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}
