// import Timer from "timer.js";
let timer = new Timer({
    title: "custom timer",
    time:8,
    format: "Time Remaining:: hh hours: mm minutes: ss seconds",
    onComplete: function() {console.log("Time's Up!!");}
});
// start clock
timer.start();
// lets see that timer in action within DOM
let timer01 = document.querySelector("#timer01");
timer01.appendChild(timer.domEl);
// as we have that DOM node inserted, let's listen for custom events
timer.domEl.addEventListener("timer.tick", (evt) => {
    // lets see timer detail, as this custom event has an object named as such
    console.log(evt.detail);
    if(evt.detail.time < 1) {timer01.style.backgroundColor = "red";}
});
timer.domEl.addEventListener("timer.complete", () => {
    timer01.innerText = "Time's Completed!!";
});
// lets access pause button
let pause = document.querySelector("button");
// this following statement is actually runnign stop() functiona nd attaching it to eventListener
//  and asssigning that return value fromthat function to click, instead it needs to be called via function call
// pause.addEventListener("click", timer.stop());
// pause.addEventListener("click", ()=>timer.stop()); // this works but it doesn't unpause it when clicked again
pause.addEventListener("click", () => timer._pause());
// pause.addEventListener("click", timer._pause());