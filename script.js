const stopwatch = document.getElementById('stopwatch');

let interval;
let time = 0;

let pauseState = true;

function start() {
    interval = setInterval(() => {
        time++;

        let hour = Math.floor((time / 3600)).toString();
        let minute = Math.floor((time - (hour * 3600)) / 60).toString();
        let second = Math.floor(time - ((hour * 3600) + (minute * 60))).toString();

        stopwatch.innerHTML = `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;

    }, 1000);
}

function padZero(val) {
    return (val.length == 1) ? `0${val}` : val;
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
        if (pauseState) {
            start();
            pauseState = false;
        } else {
            pauseState = true;
            clearInterval(interval);
        }
    } else if (e.keyCode == 27) {
        time = 0;
        pauseState = true;
        clearInterval(interval);
        stopwatch.innerHTML = '00:00:00';
    }
});