function loginActivate(){
	const loginForm = document.getElementById("loginFormMH");
	const loginButton = document.getElementById("loginButtonX");
	const loginErrorMsg = document.getElementById("login-error-msg");
    const username = loginForm.uname.value;
    const passwrd = loginForm.psd.value;

    if (username === "test" && passwrd === "test1")
	{
        window.location.assign("euromicHTML.html");
    }
	
	else
	{
        loginErrorMsg.style.opacity = 1;
    }
}


