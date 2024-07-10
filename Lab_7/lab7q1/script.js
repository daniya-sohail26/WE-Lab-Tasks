const correctfn = /^[a-zA-Z]{1,}$/;
const correctmn = /^[a-zA-Z]{1,}$/;
const correctln = /^[a-zA-Z]{1,}$/;

function validation() {
    let isValid = true;

    const firstname = document.querySelector("#firstname").value;
    const middlename = document.querySelector("#middlename").value;
    const lastname = document.querySelector("#lastname").value;
    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;

    if (!correctfn.test(firstname)) {
        document.querySelector("#ifn").innerHTML = "Invalid first name";
        isValid = false;
        alert("First name is invalid");
    } else {
        document.querySelector("#ifn").innerHTML = "";
    }

    if (!correctmn.test(middlename)) {
        document.querySelector("#imn").innerHTML = "Invalid middle name";
        isValid = false;
        alert("Middle name is invalid");
    } else {
        document.querySelector("#imn").innerHTML = "";
    }

    if (!correctln.test(lastname)) {
        document.querySelector("#iln").innerHTML = "Invalid last name";
        isValid = false;
        alert("Last name is invalid");
    } else {
        document.querySelector("#iln").innerHTML = "";
    }

    if (isNaN(age) || age < 17) {
        document.querySelector("#ia").innerHTML = "Invalid age";
        isValid = false;
        alert("Age is invalid");
    } else {
        document.querySelector("#ia").innerHTML = "";
    }

    if (isNaN(weight) || weight < 80 || weight > 120) {
        document.querySelector("#iw").innerHTML = "Invalid weight";
        isValid = false;
        alert("Weight is invalid");
    } else {
        document.querySelector("#iw").innerHTML = "";
    }

    if (isValid) {
        alert("Form is valid");
    }
}