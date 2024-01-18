const app = document.querySelector<HTMLDivElement>("#app")!;

export function startLoading() {
  const centerCont: HTMLDivElement = document.createElement("div");
  centerCont.classList.add("center");
  const imgElement: HTMLImageElement = document.createElement("img");
  imgElement.src = "../public/logo.svg";
  imgElement.classList.add("logo");
  const title: HTMLElement = document.createElement("h1");
  title.innerText = "INTERVAL";
  const subTitle: HTMLElement = document.createElement("p");
  subTitle.innerText = "For all your timing needs";
  centerCont.append(imgElement, title, subTitle);
  app.append(centerCont);
}
