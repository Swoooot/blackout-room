'use strict'

var pageBottomBorder = pageYOffset + document.documentElement.clientHeight;

function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
	};

function AnimatedCounter(options) {
    this.counters = options.counters;
    this.totalAnimateTime = options.time;
    this.counterCoord = getCoords(this.counters[0]).top;
    this.calculateSteps();
    this.initialseEvents();
    this.played = false;
};


AnimatedCounter.prototype.calculateSteps = function() {
    this.countData = [];
    var MIN_BROWSER_INTERVAL = 4;

    for(var i = 0; i < this.counters.length; i++) {
        var finalCount = parseInt(this.counters[i].textContent);
        var step = 1;
        var intervalCheck = (this.totalAnimateTime / (finalCount / step)) < MIN_BROWSER_INTERVAL;
        var interval = null;

        while(intervalCheck) {
            step++;
            if(finalCount % step) step++;
            intervalCheck = (this.totalAnimateTime / (finalCount / step)) < MIN_BROWSER_INTERVAL;
        }

        interval = this.totalAnimateTime / (finalCount / step);

        this.countData.push({count:finalCount, step: step, interval: interval, currentCount: 0});
				this.counters[i].textContent = 0;
		}
};

AnimatedCounter.prototype.startCount = function() {
		for(let i = 0; i < this.countData.length; i++) {
			let timer = setInterval(function() {
				if(this.countData[i].currentCount >= this.countData[i].count) {
					clearInterval(timer);
					this.counters[i].textContent = this.countData[i].count;
				}
				this.countData[i].currentCount += this.countData[i].step;
				this.counters[i].textContent = this.countData[i].currentCount;
			}.bind(this), this.countData[i].interval);
		}
};

AnimatedCounter.prototype.checkView = function() {
    pageBottomBorder = pageYOffset + document.documentElement.clientHeight;
    if(pageBottomBorder >= this.counterCoord && !this.played) {
        this.startCount();
				this.played = true;
    }
}

AnimatedCounter.prototype.initialseEvents = function() {
    var check = this.checkView.bind(this);
    document.addEventListener('scroll', check);
}

var options = {
    counters: document.querySelectorAll(".stats__number"),
    time: 2000
}

var number = new AnimatedCounter(options);