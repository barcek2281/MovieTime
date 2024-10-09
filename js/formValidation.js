// function validateForm(){
//     let username = document.forms["form"]["username"].value;
//     let email = document.forms["form"]["email"].value;
//     let password = document.forms["form"]["password"].value;
//     let password2 = document.forms["form"]["password2"].value;

//     // regex
//     const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const reUsername = /^[a-zA-Z0-9]{3,16}$/;
//     const rePassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{8,}$/;

//     // Error message
//     let errorMesaage = [];

//     if (username.length < 5){
//         errorMesaage.push("username should be more than 4!");
//     }

//     if (!reUsername.test(username)){
//         errorMesaage.push("username should contain only latin alph and digits")
//     }

//     if (email < 1 || !reEmail.test(email)){
//         errorMesaage.push("email is not valid!")
//     }

//     if (password.length < 7){
//         errorMesaage.push("password should be more than or equal 8!");
//     }

//     if(!rePassword.test(password)){
//         errorMesaage.push("password is not valid")
//     }

//     if (!(password === password2)){
//         errorMesaage.push("passwords shoudl be equal!")
//     }

//     if (errorMesaage.length > 0){
//         alert(errorMesaage.join("\n"))
//         return false;
//     }

//     return true;
// }

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reUsername = /^[a-zA-Z0-9]{3,16}$/;
const rePassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{8,}$/;

const form = document.getElementById("regForm");

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
        password.style.display = 'none';
    }

    if (!(password === password2)){
        password2Error.style.display = 'block';
        isValid = false;
    }else{
        password2.style.display = 'none';
    }


    if(!isValid){
        event.preventDefault();
    }

});
