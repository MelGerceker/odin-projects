const display = document.getElementById("displayText");
let currentInput = "";

let num1 = null;
let operator = null;
let waitingForNum2 = false;

// event listeners for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "Clear") {
            currentInput = "";
            num1 = null;
            operator = null;
            waitingForNum2 = false;
            display.textContent = "";

        } else if (["+", "-", "*", "/"].includes(value)) {
            // save num1 and operator
            num1 = parseFloat(currentInput);
            operator = value;
            waitingForNum2 = true;
            currentInput = "";
        } else if (value == "=") {
            if (operator && num1 !== null) {
                const num2 = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case "+": result = add(num1, num2); break;
                    case "-": result = subtract(num1, num2); break;
                    case "*": result = multiply(num1, num2); break;
                    case "/": result = divide(num1, num2); break;
                    default: result = "ERROR";
                }

                display.textContent = result;
                currentInput = result.toString();
                num1 = null;
                operator = null;
                waitingForNum2 = false;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;

        }
    });
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "ERROR";
    } else {
        return num1 / num2;
    }
}