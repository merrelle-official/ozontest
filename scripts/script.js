const progressRing = document.querySelector(".progress__ring");
const input = document.getElementById("progress");
const animateInput = document.getElementById("animate-input");
const hideInput = document.getElementById("hide-input");
const progressOptionsElements = document.querySelectorAll(".progress__options > *");
const progressBar = document.querySelector(".progress__bar");

const radius = 120;
const circumference = 2 * Math.PI * radius;
progressRing.style.strokeDasharray = circumference;
progressRing.style.strokeDashoffset = circumference;

function toggleClass(element, className, condition) {
    element.classList.toggle(className, condition);
}

input.addEventListener("input", (e) => {
    const value = Number(e.target.value);
    if (isNaN(value)){
        alert("Введите всё-таки число, а не что-то другое, пожалуйста.");
        return;
    };
    
    const percent = Math.max(0, Math.min(100, e.target.value));
    const offset = circumference - (percent / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
});

animateInput.addEventListener("change", (e) => {
    progressOptionsElements.forEach(element => toggleClass(element, "progress__rotate", e.target.checked));
    toggleClass(progressBar, "progress__rotate", e.target.checked);
});

hideInput.addEventListener("change", (e) => {
    progressBar.classList.toggle("hidden", e.target.checked);
});