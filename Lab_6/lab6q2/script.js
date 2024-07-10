function getFirstAndLastDay() {
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        document.getElementById('result').innerText = "Please enter a valid month (1-12) and year.";
        return;
    }

    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    document.getElementById('result').textContent = 
        `First day of the month: ${firstDay.toDateString()}\nLast day of the month: ${lastDay.toDateString()}`;
}