function appendToCalc(value) {
    const display=document.getElementById("action");
    display.value += value;
}

function calculateResult() {
    const display=document.getElementById("action");
    try {
        display.value = eval(display.value);
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function sqrtCalc() {
    try {
        document.calc.action.value = Math.sqrt(eval(document.calc.action.value));
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function logCalc() {
    try {
        document.calc.action.value = Math.log(eval(document.calc.action.value));
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function trigCalc(func) {
    try {
        document.calc.action.value = Math[func](eval(document.calc.action.value));
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function squareCalc() {
    try {
        document.calc.action.value = Math.pow(eval(document.calc.action.value), 2);
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function cubeCalc() {
    try {
        document.calc.action.value = Math.pow(eval(document.calc.action.value), 3);
    } catch (e) {
        document.calc.action.value = "Error";
    }
}

function solveQuadratic() {
    let a = parseFloat(prompt("Enter coefficient a:"));
    let b = parseFloat(prompt("Enter coefficient b:"));
    let c = parseFloat(prompt("Enter coefficient c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.calc.action.value = "Invalid input";
        return;
    }

    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        document.calc.action.value = "No real roots";
        return;
    }

    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.calc.action.value = `Roots: ${root1}, ${root2}`;
}