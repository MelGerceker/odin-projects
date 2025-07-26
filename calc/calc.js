const display = document.getElementById("displayText");
let currentInput = "";

// event listeners for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "Clear") {
            currentInput = "";
        } else {
            currentInput += value;
        }
        display.textContent = currentInput;
    });
});