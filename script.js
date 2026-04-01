let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    seconds = minutes = hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timer === null) return;

    const lapTime = document.createElement("li");
    lapTime.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(lapTime);
}
function clearLaps() {
  document.getElementById("laps").innerHTML = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "s") start();
  if (e.key === "p") pause();
  if (e.key === "r") reset();
  if (e.key === "l") lap();
});
lapTime.innerText = `Lap ${document.getElementById("laps").children.length + 1}: ${display}`;
localStorage.setItem("laps", JSON.stringify(lapsArray));