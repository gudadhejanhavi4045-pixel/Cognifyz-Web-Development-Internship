
function changeColor() {
    const button = document.getElementById("colorButton");

    if (button.style.backgroundColor === "orange") {
        button.style.backgroundColor = "#34495e";
    } else {
        button.style.backgroundColor = "orange";
    }
}

function showGreeting() {
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent =
            "Please enter both numbers.";
        return;
    }

    const sum = num1 + num2;

    document.getElementById("result").textContent =
        "Result: " + sum;
}
