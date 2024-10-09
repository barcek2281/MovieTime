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