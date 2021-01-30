class Timer {
    constructor({title, time=5, format="hh:mm:ss", onComplete, onTick}) {
        // creating DOM node so that this element will be working as an interface for class instances
        // and will be used for dom manipulation based on events gets sets off during this process
        this._el = document.createElement("span");
        // storing properties for our various functions to access and perform actions on them
        this._title = title;
        this._startingTime = time;
        this._timeRemaining = this._startingTime;
        this._format = format;
        // create event handlers unless use passed in callbacks
        this._complete = onComplete || function() {};
        this._tick = onTick || function() {};
    }
    // retrieve created DOM node
    get domEl() {return this._el;}
    // get current timer count
    get time() {return this._timeRemaining;}
    // get timer current title
    get title() {return this._title;}
    // change timer's current title
    set title(newTitle) {this._title = newTitle;}
    // set timer count in number of seconds
    set time(newTime) {
        // replacing current time with newTime, for both of our time properties
        this._startingTime = newTime;
        this._timeRemaining = newTime;
    }
    // setters for event listeners
    set onComplete(cb) {this._complete = cb;}
    set onTick(cb) {this._tick = cb;}
    // stop timer, just pauses
    stop() {
        clearInterval(this._timer); // _timer is a prop
    }
    // starts clock and renders
    start() {
        this._render();
        this._timer = setInterval(()=>this._render(), 1100);
    }
    _render() {
        // decrementing counter
        this._timeRemaining--;
        // custom events to manage tick and completion
        this._tickEvent = new CustomEvent("timer.tick", 
        {detail: {title: this._title, time: this._timeRemaining}});
        this._completeEvent = new CustomEvent("timer.complete", 
        {detail: {title: this._title, timeElapsed: this._startingTime}});
        // setting formatted time string
        let hours = Math.floor(this._timeRemaining/3600);
        let mins = Math.floor((this._timeRemaining - (hours * 3600))/60);
        let secs = this._timeRemaining % 60;
        let timeString = this._format.replace("hh",hours)
        .replace("mm",mins).replace("ss",secs);
        // insert formatted time string
        this._el.innerText = timeString;
        // call tick() for each, when there is any
        this._tick();
        //  also trigger DOM custom event through dispatchEvent()
        this._el.dispatchEvent(this._tickEvent);
        // when timer reached zero
        if(this._timeRemaining <= 0) {
            // stop clock
            this.stop();
            // reset timer _remainingTime counter to Zero
            this._timeRemaining = 0;
            // acknowledge completed
            this._complete();
            // also trigger DOM's custom event for completion as well
            this._el.dispatchEvent(this._completeEvent);
        }
    }
    _pause() {
        if(this._timer) {
            this.stop();
            // this._timer = undefined;
            this._timer = 0;
        } else {
            this.start();
        }
    }
}

// export