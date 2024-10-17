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
  