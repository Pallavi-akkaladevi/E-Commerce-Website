const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const images = document.querySelectorAll('.gallery img');

let currentIndex = 1;

function updateGallery() {
    // Remove classes for transition
    images.forEach(img => img.style.transform = `translateX(-${currentIndex * 100}%)`);
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // loop back to the last image
    }
    updateGallery();
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back to the first image
    }
    updateGallery();
});

// Initial call to position images
updateGallery();
