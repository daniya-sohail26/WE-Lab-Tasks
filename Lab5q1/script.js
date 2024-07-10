
function generateTable() {
    var table='';
    for (let i = 5; i <= 15; i++) {
        let square = i * i;
        let cube = i * i * i;
        table += `${i}\t${square}\t${cube}\n`;
    }
    alert(table);
}


function findLargestNumber() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }

    document.getElementById('largestNumber').textContent = `The largest number is: ${largest}`;
}



function calculateMarks() {
    let numStudents = prompt("Enter the number of students:");
    numStudents = parseInt(numStudents);

    if (isNaN(numStudents) || numStudents <= 0) {
        alert("Please enter a valid number of students.");
        return;
    }

    let marks = [];
    for (let i = 1; i <= numStudents; i++) {
        let mark = prompt(`Enter marks for student ${i}:`);
        mark = parseFloat(mark.trim());

        if (isNaN(mark)) {
            alert(`Invalid input for student ${i}. Please enter a valid number.`);
            return;
        }

        marks.push(mark);
    }

    let sum = marks.reduce((total, mark) => total + mark, 0);
    let average = sum / marks.length;

    alert(`Sum of marks: ${sum}\nAverage of marks: ${average.toFixed(2)}`);
}



function sumDivisible() {
    let limit = parseInt(document.getElementById('limit').value);
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    document.getElementById('divisibleOutput').textContent = `Sum of numbers divisible by 3 or 5 up to ${limit}: ${sum}`;
}

