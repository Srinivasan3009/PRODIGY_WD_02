let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    milliseconds=00;
    seconds = 0;
    minutes = 0;
    hours = 0;
    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
