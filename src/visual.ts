const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;

export function visualTimerFunc() {
  app.innerHTML = "";
  if (!contentAppended) {
    const visualTimerCont = document.createElement("div");
    visualTimerCont.classList.add("visualTimerCont");
    const navLogoVisual = document.createElement("navLogoVisual");
    navLogoVisual.classList.add("navLogoVisual");
    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");
    const visualTimer = document.createElement("div");
    visualTimer.classList.add("visualTimer");
    const button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", () => abortTimer());
    button.classList.add("greyButton");
    button.innerText = "ABORT TIMER";

    function abortTimer() {
      window.location.reload();
    }
  }
}

// Start the countdown
