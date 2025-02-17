
const clickSound = new Audio('sounds/clicksound.mp3');

function playClickSound() {
    clickSound.currentTime = 0; // Reset the sound to the beginning
    clickSound.play();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playClickSound);
});

const jellyfish = document.getElementById("jellyfish");
let isAwake = true;

setInterval(() => {
    isAwake = !isAwake;
    jellyfish.src = isAwake ? "assets/jellyawake.png" : "assets/jellysleep.png";
}, 2000); // Change every 2 seconds

document.addEventListener("keydown", function(event) {
    const key = event.key; // Get the pressed key
    
    // Define allowed keys and their corresponding values
    const keyMap = {
        "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
        "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
        "+": "+", "-": "-", "*": "*", "/": "/", ".": ".",
        "Enter": "=", "Backspace": "C", "(": "(", ")": ")",
        "^": "**" // Power function
    };

    if (key in keyMap) {
        if (key === "Enter") {
            calculate(); // Calculate when Enter is pressed
        } else if (key === "Backspace") {
            clearDisplay(); // Clear when Backspace is pressed
        } else {
            appendValue(keyMap[key]); // Append value for other keys
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (document.getElementById("calculatorPopup").style.display === "block") {
        // Only process input when calculator is visible
    }
});

function pressButton(key) {
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 150);
    }
}

// Modify keydown function to include:
pressButton(key);


function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value); // Evaluate the expression
        document.getElementById("display").value = parseFloat(result.toFixed(3)); // Round to 3 decimal places
    } catch (error) {
        document.getElementById("display").value = "Error"; // Handle invalid input
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculatorPopup").style.display = "block";
});