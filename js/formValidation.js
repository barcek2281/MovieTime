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

form.addEventListener('resetik', function(event){
    document.querySelectorAll('input').forEach(input =>
        input.value = '')
});

resetik.addEventListener("click", function(event){
    form.dispatchEvent(new CustomEvent("resetik"));
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
  
    let currentIndex = 0;
    if (navLinks[currentIndex]) {
      navLinks[currentIndex].focus();
    }
  
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          moveFocus(1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          moveFocus(-1); 
          break;
          
        default:
          break;
      }
    });
  
    function moveFocus(direction) {

      if (navLinks[currentIndex]) {
        navLinks[currentIndex].blur();
      }
      currentIndex = (currentIndex + direction + navLinks.length) % navLinks.length;
  

      if (navLinks[currentIndex]) {
        navLinks[currentIndex].focus();
      }
    }
  });
  
  

function updateDateTime() {
    const now = new Date();

    const currentDateTime = now.toLocaleString();


    document.querySelector('#datetime').textContent = "your date registration: " + currentDateTime;
};

setInterval(updateDateTime, 1000);

