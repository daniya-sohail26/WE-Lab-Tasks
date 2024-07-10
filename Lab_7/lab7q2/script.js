const usernameRegex = /^[a-zA-Z0-9]{3,}$/;  // Username must be at least 3 characters long and contain only letters and digits
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  // Password must be at least 8 characters long, with one uppercase, one lowercase, one digit, and one special character

function doReset() {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#iusername").innerHTML = "";
    document.querySelector("#ipassword").innerHTML = "";
}

function validation() {
    let isValid = true;
    
    const userName = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (!usernameRegex.test(userName)) {
        document.querySelector("#iusername").innerHTML = "Invalid username";
        isValid = false;
    } else {
        document.querySelector("#iusername").innerHTML = "";
    }

    if (!passwordRegex.test(password)) {
        document.querySelector("#ipassword").innerHTML = "Invalid password";
        isValid = false;
    } else {
        document.querySelector("#ipassword").innerHTML = "";
    }

    if (isValid) {
        alert("Form is valid");
    } else {
        alert("Form contains errors");
    }
}

