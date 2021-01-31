// let's get input for timer from user
let inputDiv = document.querySelector(".input-div");
let input = document.querySelector("input");
let okBtn = document.querySelector("#ok");
okBtn.addEventListener("click", timerBegin);
// let's also get buttonDiv and timer01 div
let buttonDiv = document.querySelector(".button-div");
let timer01 = document.querySelector("#timer01");
// let's create a function where after timer runs out do some changes in DOM
function timersUp() {
    inputDiv.style.display = "block"; // make visible
    buttonDiv.style.display = "none"; // make invisible
    // timer01.remove();
    document.body.style.background = "honeydew";
}
// lets create a function which will begin our timer functionality
function timerBegin() {
    // initial setup for Timer
    inputDiv.style.display = "none";
    buttonDiv.style.display = "flex";
    timer01.style.backgroundColor = "#ee3";
    timer01.style.display = "flex";
    // timer01.classList.add("timer");
    timer01.style.marginLeft = "-333px";
    let time = input.value; // user input for timer
    let timer = new Timer({
        title: "custom timer",
        time: time,
        format: "Time Remaining:: hh hours: mm minutes: ss seconds",
        onComplete: function () { console.log("Time's Up!!"); }
    });
    // start clock
    timer.start();
    // lets see that timer in action within DOM
    timer01.appendChild(timer.domEl);
    // as we have that DOM node inserted, let's listen for custom events
    timer.domEl.addEventListener("timer.tick", (evt) => {
        // lets see timer detail, as this custom event has an object named as such
        console.log(evt.detail);
        if (evt.detail.time < 1) { timer01.style.backgroundColor = "red"; }
    });
    timer.domEl.addEventListener("timer.complete", () => {
        timer01.innerText = "Time's Completed!!";
        timer01.style.marginLeft = "-17%";
        setTimeout(() => {
            timersUp();
            timer01.innerText = "";
            timer01.style.backgroundColor = "none";
        }, 1100);
    });
    // lets access pause button
    let pause = document.querySelector("#pause");
    pause.addEventListener("click", () => timer._pause());
    // lets access reset button
    let reset = document.querySelector("#reset");
    // reset.addEventListener("click", () => timer._resetTimer(4));
    reset.addEventListener("click", () => {
        timer.stop();
        timersUp();
        timer01.innerText = "";
        timer01.style.backgroundColor = "none";
    });
}
// let's call timersUp() to begin with
timersUp();



/**
 // import Timer from "timer.js";
let timer = new Timer({
    title: "custom timer",
    time:2,
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
    timer01.style.marginLeft = "-17%";
});
// lets access pause button
// let pause = document.querySelector("button");
// this following statement is actually runnign stop() functiona nd attaching it to eventListener
//  and asssigning that return value fromthat function to click, instead it needs to be called via function call
// pause.addEventListener("click", timer.stop());
// pause.addEventListener("click", ()=>timer.stop()); // this works but it doesn't unpause it when clicked again
let pause = document.querySelector("#pause");
pause.addEventListener("click", () => timer._pause());
// pause.addEventListener("click", timer._pause());
 */

/**
 let timer = new Timer({
   title: "custom timer",
   time:2,
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
   timer01.style.marginLeft = "-17%";
});
// lets access pause button
let pause = document.querySelector("#pause");
pause.addEventListener("click", () => timer._pause());
// pause.addEventListener("click", timer._pause());
 */

/**
 // let's get input for timer from user
let inputDiv = document.querySelector(".input-div");
// inputDiv.style.display = "block"; // make visible
let input = document.querySelector("input");
// let time = input.value;
let okBtn = document.querySelector("#ok");
okBtn.addEventListener("click", timerBegin);
// let's also get buttonDiv
let buttonDiv = document.querySelector(".button-div");
// timer01 div
let timer01 = document.querySelector("#timer01");

// let's create a function where after timer runs out do some changes in DOM
function timersUp() {
   inputDiv.style.display = "block"; // make visible
   buttonDiv.style.display = "none"; // make invisible
   // timer01.remove();
   document.body.style.background = "honeydew";
}

function timerBegin() {
   inputDiv.style.display = "none";
   buttonDiv.style.display = "flex";
   timer01.style.backgroundColor = "#ee3";
   timer01.style.display = "flex";
   // timer01.classList.add("timer");
   timer01.style.marginLeft = "-333px";
   let time = input.value;
   let timer = new Timer({
       title: "custom timer",
       time: time,
       format: "Time Remaining:: hh hours: mm minutes: ss seconds",
       onComplete: function () { console.log("Time's Up!!"); }
   });
   // start clock
   timer.start();
   // lets see that timer in action within DOM
   // let timer01 = document.querySelector("#timer01");
   timer01.appendChild(timer.domEl);
   // as we have that DOM node inserted, let's listen for custom events
   timer.domEl.addEventListener("timer.tick", (evt) => {
       // lets see timer detail, as this custom event has an object named as such
       console.log(evt.detail);
       if (evt.detail.time < 1) { timer01.style.backgroundColor = "red"; }
   });
   timer.domEl.addEventListener("timer.complete", () => {
       timer01.innerText = "Time's Completed!!";
       timer01.style.marginLeft = "-17%";
       setTimeout(() => {
           timersUp();
           timer01.innerText = "";
           timer01.style.backgroundColor = "none";
       }, 1100);
       // timersUp();
   });
   // lets access pause button
   let pause = document.querySelector("#pause");
   pause.addEventListener("click", () => timer._pause());
   // pause.addEventListener("click", timer._pause());
   // lets access reset button
   let reset = document.querySelector("#reset");
   // reset.addEventListener("click", () => timer._resetTimer(4));
   // reset.addEventListener("click", () => timersUp());
   reset.addEventListener("click", () => {
       timer.stop();
       timersUp();
       timer01.innerText = "";
       timer01.style.backgroundColor = "none";
   });
}
 */