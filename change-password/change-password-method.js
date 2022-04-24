function emailCheck() {
    let userEmailInput = document.getElementById("userEmail").value;
    let correctEmail = "vtam@sd38.bc.ca";
    if (userEmailInput != correctEmail) {
        window.alert("此邮箱还未注册！")
    }
}

function comparePassword() {
    let newPassword = document.getElementById("userNewPassword").value;
    let correctPassword = 618618;
    if (newPassword == correctPassword) {
        window.alert("新密码和旧密码不可一样！");
    }
}

function checkPassword() {
    let reEnterPassword = document.getElementById("userNewPassword").value;
    let userConfirmNewPassword = document.getElementById("userConfirmNewPassword").value;
    if (reEnterPassword == userConfirmNewPassword) {
        window.alert("两次输入的密码是一样的!")
    } else {
        window.alert("请检查两次输入的密码!")
    }
}