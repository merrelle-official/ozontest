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
    progressBarAPI.setValue(e.target.value);
});

animateInput.addEventListener("change", (e) => {
    progressBarAPI.toggleAnimation(e.target.checked);
});

hideInput.addEventListener("change", (e) => {
    progressBarAPI.toggleVisibility(e.target.checked);
});

const progressBarAPI = {
    setValue(value) {
        value = Math.min(Math.max(value, 0), 100);
        const offset = circumference - (value / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
        input.value = value;
    },

    toggleAnimation(isAnimated) {
        progressOptionsElements.forEach(element => toggleClass(element, "progress__rotate", isAnimated));
        toggleClass(progressBar, "progress__rotate", isAnimated);
        animateInput.checked = isAnimated;
    },

    toggleVisibility(isHidden) {
        progressBar.classList.toggle("hidden", isHidden);
        hideInput.checked = isHidden;
    }
};

window.progressBarAPI = progressBarAPI;