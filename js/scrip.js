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
    const scrollTop = window.scrollY; // Current scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scrollable height
    const scrollPercentage = Math.min(scrollTop / maxScroll, 1); // Calculate scroll percentage, clamped to 1

    // Define the start and end colors
    const startColor = [30, 30, 30]; // Dark gray
    const endColor = [0, 150, 255]; // Bright blue

    // Interpolate the color based on the scroll percentage
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

    // Apply the background color
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
