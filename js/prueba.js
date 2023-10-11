// JavaScript para el carrito de compras
let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(productName, price);
        });
    });
});
