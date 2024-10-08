// Task Tracker
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
document.getElementById("add-task-btn").addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Pomodoro Timer
let timer;
let isRunning = false;
const startButton = document.getElementById("start-timer");
const resetButton = document.getElementById("reset-timer");
let time = 1500; // 25 minutes in seconds
startButton.addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(countdown, 1000);
        isRunning = true;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    time = 1500;
    document.getElementById("timer").textContent = "25:00";
    isRunning = false;
});

function countdown() {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (time <= 0) {
        clearInterval(timer);
        alert("Time's up! Take a break.");
        isRunning = false;
    }
}

// Grade Calculator
document.getElementById("calculate-grade").addEventListener("click", () => {
    const gradeInput = document.getElementById("grade-input").value;
    const result = gradeInput >= 50 ? "Pass" : "Fail";
    document.getElementById("grade-result").textContent = `Result: ${result}`;
});

// Quick Notes
document.getElementById("save-notes").addEventListener("click", () => {
    const notes = document.getElementById("notes-input").value;
    document.getElementById("saved-notes").textContent = notes ? `Saved Notes: ${notes}` : "No notes to save.";
});
