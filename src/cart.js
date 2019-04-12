
/**
 * 
 * Initialize cart 
 */

export function init() {
    // Add click event for the clear button
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', clear);

    const checkOutButton = document.getElementById('checkout-button');
    checkOutButton.addEventListener('click',() => alert('CheckOut!'));
}

/**
 * 
 * Add a product to the cart 
 */

export function add(product) {
    const shoppingCart = document.getElementById('shopping-cart');

    // Create cart item element
    const item = document.createElement('li');
    item.className = 'list-group-item cart-item d-flex';
    item.innerHTML = `
    <img class="rounded-circle m-1" src="${product.image}" alt="${product.name}" width="40px" height="40px">
    <div class="mx-2">
        <div class="cart-item-title">${product.name}</div>
        <div class="text-primary bold text-monospace">${product.price}</div>
    </div>
    `
    shoppingCart.appendChild(item);
}

/**
 * clear cart items
 */

function clear() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach((item) => item.remove());
}


/**
 * 
 *  Remove a product from the cart 
 */

function remove(item) {

}