
class PlayTimer { 
	constructor(duration, tickSize=1000) {
		this.duration = duration;
		this.tickSize = tickSize;
		this.isTicking = false;
	}

	start() {
		if(this.isTicking) return;
		this.isTicking = true;

		let timer = this;
		const startTime = Date.now();
		let elapsed, timeObj;

		(function ticker() {
			elapsed = timer.duration - (((Date.now() - startTime) / 1000) | 0);

			if(elapsed > 0) {
				setTimeout(ticker, timer.tickSize);
			} else {
				elapsed = 0;
				timer.isTicking = false;
			}

			timeObj = PlayTimer.parseElapsed(elapsed);
			timer.onTickCallback.call(this, timeObj.minutes, timeObj.seconds);

			if(!timer.isTicking) {
				timer.onExpiredCallback.call(this);
			}
		}());
	}

	onExpired(fn) {
		if(typeof fn === 'function') {
			this.onExpiredCallback = fn;
		}
		return this;
	}

	onTick(fn) {
		if(typeof fn === 'function') {
			this.onTickCallback = fn;
		}
		return this;
	}

	static parseElapsed(elapsed) {
		const minutes = (elapsed / 60) | 0;
		const seconds = (elapsed % 60) | 0;

		const timeObj = {
			minutes,
			seconds
		}
		return timeObj;
	}
}

export default PlayTimer;