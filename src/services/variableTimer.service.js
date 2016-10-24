const noop = () => {};
const isNumeric = (value) => {
    return typeof value === 'number' && !isNaN(value);
};

export default function VariableTimer(callback = noop, initialInterval = 1000) {
    this.timeout = noop;
    this.interval = initialInterval || 1000;
    this.callback = callback;
    this.stopped = false;

    this.runLoop = () => {
        if (this.stopped) return;

        // Give control to the user to change the interval or stop it in place
        const newInterval = this.callback.call(this);
        if (isNumeric(newInterval)) {
            this.interval = newInterval;
        }

        this.loop();
    };

    this.stop = () => {
        this.stopped = true;
        window.clearTimeout(this.timeout);
    };

    this.start = () => {
        this.stopped = false;

        return this.loop();
    };

    this.loop = () => {
        this.timeout = window.setTimeout(this.runLoop, this.interval);

        return this;
    }

    return this;
}
