const subscribeBtn = document.getElementById('subscribe-btn');
        const popup = document.getElementById('popup');
        const closeBtn = document.getElementById('close-btn');

        subscribeBtn.addEventListener('click', () => {
            popup.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
        // adil changes next
const clickSound = document.getElementById('click-sound');
const hoverSound = document.getElementById('hover-sound');

// sub sound
subscribeBtn.addEventListener('click', () => {
    clickSound.play();
    popup.style.display = 'flex';
});

//card sound
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => hoverSound.play());
});
subscribeBtn.addEventListener('click', () => {
    popup.classList.add('show');
    clickSound.play();
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});
