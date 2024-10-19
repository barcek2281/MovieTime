document.addEventListener('DOMContentLoaded', function () {
    const ratingContainers = document.querySelectorAll('.rating-container');

    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        const ratingInput = container.querySelector('input[type="hidden"]');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const rating = this.getAttribute('data-rating');
                ratingInput.value = rating;
                updateStars(stars, rating);
            });

            star.addEventListener('mouseover', function () {
                const hoverRating = this.getAttribute('data-rating');
                updateStars(stars, hoverRating);
            });

            star.addEventListener('mouseout', function () {
                const currentRating = ratingInput.value;
                updateStars(stars, currentRating);
            });
        });

        const initialRating = ratingInput.value;
        updateStars(stars, initialRating);
    });

    function updateStars(stars, rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
});
