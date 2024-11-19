// script.js
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');

let cart = [];

function updateCart() {
    // Clear current cart display
    cartItemsList.innerHTML = '';

    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;"> ${item.name} - Rp ${item.price.toLocaleString()}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: Rp ${total.toLocaleString()}`;
    
    // Enable or disable checkout button
    checkoutButton.disabled = cart.length === 0;
}

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCart();
}

// Add event listeners to buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseInt(e.target.getAttribute('data-price'));
        const image = e.target.getAttribute('data-image');
        addToCart(name, price, image);
    });
});

checkoutButton.addEventListener('click', () => {
    alert('Terima kasih telah berbelanja! Anda akan diarahkan untuk membayar.');
    cart = [];
    updateCart();
});
