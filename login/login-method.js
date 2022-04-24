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
            window.alert('你输入的邮箱尚未注册!');
        } else if (userEmailInput == correctEmail && userPasswordInput != correctPassword) {
        window.alert('密码错误!')
    } else if (userEmailInput != correctEmail && userPasswordInput != correctPassword) {
        window.alert('请输入正确的邮箱和密码!')
    }
}
