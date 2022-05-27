function emailCheck() {
    let userEmailInput = document.getElementById("userEmail").value;
    let correctEmail = "vtam@sd38.bc.ca";
    if (userEmailInput != correctEmail) {
        window.alert("This email has not been registered yet!")
    }
}

function comparePassword() {
    let newPassword = document.getElementById("userNewPassword").value;
    let correctPassword = 618618;
    if (newPassword == correctPassword) {
        window.alert("The new and old password can't be the same!");
    }
}

function checkPassword() {
    let reEnterPassword = document.getElementById("userNewPassword").value;
    let userConfirmNewPassword = document.getElementById("userConfirmNewPassword").value;
    if (reEnterPassword == userConfirmNewPassword) {
        window.alert("The two password inputs are the sane!")
    } else {
        window.alert("Please check the password input")
    }
}