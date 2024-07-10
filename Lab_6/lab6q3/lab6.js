function reverseNumber() {
    let number = document.getElementById('Input1').value;
    if (!isNaN(number)) {
        let reversedNumber = number.split('').reverse().join('');
        document.getElementById('output').innerHTML = `Reversed Number: ${reversedNumber}`;
    } else {
        alert("Please enter a valid number.");
    }
}

function sortString() {
    let str = document.getElementById('Input1').value;
    if (isNaN(str)) {
        let sortedString = str.split('').sort().join('');
        document.getElementById('output').innerHTML = `Sorted String: ${sortedString}`;
    } else {
        alert("Please enter a valid string.");
    }
}

function checkNegativeNumber() {
    let number = parseFloat(document.getElementById('Input1').value);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    if (number < 0) {
        alert("Error: You entered a negative number.");
    } else {
        alert("The number is not negative.");
    }
}

function displayOddNumbers() {
    let number = parseInt(document.getElementById('Input1').value);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    else if (number < 0) {
        alert("Error: You entered a negative number.");
        return;
    }
    else{
    let oddNumbers = [];
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    if (oddNumbers.length > 0) {
        document.getElementById('output').innerHTML = `Odd Numbers: ${oddNumbers.join(', ')}`;
    } else {
        document.getElementById('output').innerHTML = "No odd numbers found.";
    }

}
}
