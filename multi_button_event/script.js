let redCount = 0;
let blueCount = 0;
let yellowCount = 0; // NEW COUNT VARIABLE

document.getElementById("redBtn").addEventListener("click", () => {
    redCount++;
    document.getElementById("message").innerText =
        "赤ボタンを " + redCount + " 回押しました";
});

document.getElementById("blueBtn").addEventListener("click", () => {
    blueCount++;
    document.getElementById("message").innerText =
        "青ボタンを " + blueCount + " 回押しました";
});

// NEW YELLOW BUTTON LISTENER ADDED HERE
document.getElementById("yellowBtn").addEventListener("click", () => {
    yellowCount++;
    document.getElementById("message").innerText =
        "黄ボタンを " + yellowCount + " 回押しました";
});
