function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            alert("Your session is end!");
        }
    }, 1000);
}

window.onload = function () {
    const display = document.getElementById("timer");
    startTimer(modeDurationSeconds, display);
}