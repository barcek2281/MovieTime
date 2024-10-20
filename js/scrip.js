function changeBackground(color) {
    document.body.style.backgroundColor = color; //background change
}

function showDateTime() { //time now
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = `Current Date & Time: ${formattedDateTime}`;
}

setInterval(showDateTime, 1000); //update time every time
//adil changes next
// grad change
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / maxScroll;

    const startColor = `rgba(26, 26, 26, ${1 - scrollPercentage})`; // dark
    const endColor = `rgba(0, 123, 255, ${scrollPercentage})`; //blue

    //apply grad to backgr
    document.body.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
});
document.addEventListener('DOMContentLoaded', () => {
    const hoverSound = document.getElementById('hover-sound');
    const cards = document.querySelectorAll('.card');

    //card sound
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // rewind sound
            hoverSound.play().catch(error => {
                console.error('Ошибка воспроизведения звука:', error);
            });
        });
    });
});
