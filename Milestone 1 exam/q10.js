function doubleCartQuantities(cart) {
    const doubledCart = cart.map(quantity => quantity * 2);
    return doubledCart;
}

// Example usage:
const cartQuantities = [2, 3, 1, 4]; // Example cart quantities
const correctedCart = doubleCartQuantities(cartQuantities);
console.log(correctedCart);
