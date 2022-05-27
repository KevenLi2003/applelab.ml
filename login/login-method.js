function comparePassword() {
    let signInState = false;
    let userEmailInput = document.getElementById("userEmail").value;
    let correctEmail = "vtam@sd38.bc.ca";
    let userPasswordInput = document.getElementById("userPassword").value;
    let correctPassword = 618618;
    if (userEmailInput == correctEmail && userPasswordInput == correctPassword) {
        window.location.href = '../home/index.html';
        let signInState = true;
    } else if (userEmailInput != correctEmail && userPasswordInput == correctPassword) {
            window.alert('This email has not been registered yet');
        } else if (userEmailInput == correctEmail && userPasswordInput != correctPassword) {
        window.alert('Password error!')
    } else if (userEmailInput != correctEmail && userPasswordInput != correctPassword) {
        window.alert('Please enter the correct password!')
    }
}
