const app = document.querySelector<HTMLDivElement>("#app")!;
let contentAppended = false;

export function visualTimerFunc() {
  if (!contentAppended) {
    app.innerHTML = "";

    const visualTimerCont = document.createElement("div");
    visualTimerCont.classList.add("visualTimerCont");

    const navLogoVisual = document.createElement("div");
    navLogoVisual.classList.add("navLogoVisual"); // Fix the class name here

    const logoCont: HTMLDivElement = document.createElement("div");
    logoCont.classList.add("navLogo");

    const visualTimer = document.createElement("div");
    visualTimer.classList.add("visualTimer");

    const glassUpper = document.createElement("div");
    glassUpper.classList.add("glassUpper");

    const sandUpper = document.createElement("div");
    sandUpper.classList.add("sandUpper");

    const fillet = document.createElement("div");
    fillet.classList.add("fillet");

    const glassBottom = document.createElement("div");
    glassBottom.classList.add("sandBottom");

    const sandBottom = document.createElement("div");
    sandBottom.classList.add("sandBottom");

    const frame = document.createElement("div");
    frame.classList.add("frame");

    const button: HTMLButtonElement = document.createElement("button");
    button.addEventListener("click", () => abortTimer());
    button.classList.add("greyButton");
    button.innerText = "ABORT TIMER";

    const svgCont: HTMLImageElement = document.createElement("img");
    svgCont.setAttribute("type", "img/svg+xml");
    svgCont.setAttribute("src", "../public/flippedLogo.svg");
    svgCont.setAttribute("width", "32");
    svgCont.setAttribute("height", "32");

    logoCont.appendChild(svgCont);
    visualTimerCont.append(logoCont);
    visualTimerCont.append(visualTimer);
    visualTimer.append(glassUpper, sandUpper, glassBottom, sandBottom, fillet, frame);
    visualTimerCont.append(button);

    app.append(visualTimerCont);

    function abortTimer() {
      window.location.reload();
    }

    contentAppended = true; // Set to true after appending content
  }
}

// Start the countdown
visualTimerFunc();

