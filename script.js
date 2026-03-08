function signIn (event){
    event.preventDefault();
    const inputUsername = document.getElementById("inputUsername");
    const userName= inputUsername.value;
    console.log(userName)
    const inputPassword = document.getElementById("inputPassword");
    const password = inputPassword.value;
    console.log(password)
    if(userName == "admin" && password == 'admin123'){
        alert('Login success')
        window.location.assign('./home.html')
    }else{
        alert('login failed')
        return;
    }
}
