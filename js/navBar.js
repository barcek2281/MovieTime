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



// ---------------------------LOGIN PAGE--------------------------------------


const usernameDisplay = document.getElementById('username-display');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById('logout-link');

function checkUserSession() {
  const username = localStorage.getItem('username');
  
  if (username) {
      usernameDisplay.textContent = `${username}`;
      usernameDisplay.style.display = 'inline';
      loginLink.style.display = 'none';
      logoutLink.style.display = 'inline';
  } else {
      usernameDisplay.style.display = 'none';
      loginLink.style.display = 'inline';
      logoutLink.style.display = 'none';
  }
}

loginLink.addEventListener('click', function(event) {
  event.preventDefault();  
  
  const username = prompt("Enter your username:");
  if (username) {
      localStorage.setItem('username', username);
      checkUserSession();
      alert(`Welcome, ${username}!`);
  }
});

logoutLink.addEventListener('click', function(event) {
  event.preventDefault();  
  
  localStorage.removeItem('username');
  checkUserSession();
});

window.onload = checkUserSession;
