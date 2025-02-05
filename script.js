document.addEventListener("DOMContentLoaded", function () {
    // Gallery functionality
    const images = document.querySelectorAll(".gallery img");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    let currentIndex = 0;

    function updateGallery() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add("image-large");
                img.classList.remove("image-small");
            } else {
                img.classList.add("image-small");
                img.classList.remove("image-large");
            }
        });
    }

    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    updateGallery();

    // Cart functionality
    let cart = [];
    let totalAmount = 0.00;

    // Function to add product to cart
    function addToCart(productName, price) {
        // Add product to the cart array
        cart.push({ name: productName, price: price });

        // Update total amount
        totalAmount += price;

        // Update the total displayed on the page
        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
    }

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach((button, index) => {
        // Get product details for each card (you can expand this for more cards if needed)
        const productTitles = document.querySelectorAll('.product-title');
        const productPrices = document.querySelectorAll('.product-price');

        const productName = productTitles[index].innerText;
        const price = parseFloat(productPrices[index].innerText.replace('$', ''));

        button.addEventListener('click', () => {
            addToCart(productName, price);
        });
    });
});
