const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reUsername = /^[a-zA-Z0-9]{3,16}$/;
const rePassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{8,}$/;

const form = document.getElementById("regForm");
const resetik = document.getElementById("resetik");


form.addEventListener('submit', function(event){
    let isValid = true;

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let password2Error = document.getElementById("password2Error");

    if (!reUsername.test(username.value)){
        isValid = false;
        usernameError.style.display = 'block';
    }else{
        usernameError.style.display = 'none';
    }

    if(!reEmail.test(email.value)){
        isValid = false;
        emailError.style.display = 'block';
    }else{
        emailError.style.display = 'none';
    }

    if(!rePassword.test(password.value)){
        passwordError.style.display = 'block';
        isValid = false;
    }else{
        passwordError.style.display = 'none';
    }

    if (!(password === password2)){
        password2Error.style.display = 'block';
        isValid = false;
    }else{
        password2Error.style.display = 'none';
    }


    if(!isValid){
        event.preventDefault();
    }

    const response =  fetch("http://127.0.0.1:5500/profile.html",
        {
            method: "POST",
            body: true
        }
    );

    // const result = response.json();


});

form.addEventListener('resetik', function(event){
    document.querySelectorAll('input').forEach(input =>
        input.value = '')
});

resetik.addEventListener("click", function(event){
    form.dispatchEvent(new CustomEvent("resetik"));
});

  

function updateDateTime() {
    const now = new Date();

    const currentDateTime = now.toLocaleString();


    document.querySelector('#datetime').textContent = "your date registration: " + currentDateTime;
};

setInterval(updateDateTime, 1000);

