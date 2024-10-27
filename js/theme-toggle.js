document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);

    toggleButton.addEventListener('click', () => {
        const theme = document.body.classList.contains('dark') ? 'light' : 'dark';
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        localStorage.setItem('theme', theme);
    });
});
