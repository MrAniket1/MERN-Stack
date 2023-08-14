const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Rounded off to two decimal places
};

// Example usage:
const originalPrice = 100; // Original price of the product
const discountedPrice = 70; // Discounted price of the product
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);

