let timer; // ตัวแปรเก็บเวลาที่เหลืออยู่ (วินาที)
let intervalId; // ตัวแปรเก็บ ID ของ setInterval เพื่อใช้หยุด timer ภายหลัง
let isPaused = false; // true = หยุดชั่วคราว / false = ทำงานอยู่
let originalDuration; // เวลาเริ่มต้นเพื่อให้กดปุ่ม "เริ่มใหม่" แล้วเริ่มที่ค่านี้เสมอ

// อัปเดตตัวเลขบนหน้าจอ
function updateDisplay(display, time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    display.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

// เริ่มจับเวลา
function startTimer(duration, display) {
    clearInterval(intervalId);
    timer = duration;
    originalDuration = duration;
    updateDisplay(display, timer);

    intervalId = setInterval(() => {
        if (!isPaused) {
            timer--;
            updateDisplay(display, timer);

            if (timer < 0) {
                clearInterval(intervalId);
                display.textContent = "Time's up!";
                alert("Your session has ended!");
            }
        }
    }, 1000);
}

// เริ่มทำงานเมื่อโหลดหน้า
window.onload = function () {
    const display = document.getElementById("timer");
    const pauseBtn = document.getElementById("pause-btn");
    const restartBtn = document.getElementById("restart-btn");
    const backBtn = document.getElementById("back-btn");

    startTimer(modeDurationSeconds, display); // เริ่มจับเวลา

    // Pause Button
    if (pauseBtn) {
        pauseBtn.addEventListener("click", () => {
            isPaused = !isPaused;
            //continue here
        })
    }
}