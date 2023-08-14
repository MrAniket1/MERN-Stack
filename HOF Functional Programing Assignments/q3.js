// Store's inventory with items and their prices in USD
const inventory = {
    item1: 10,   // USD
    item2: 25,   // USD
    item3: 5,    // USD
    item4: 50,   // USD
};

// Exchange rate: 1 USD = 80 INR
const exchangeRate = 80;

// Function to convert prices to Indian Rupees
function convertToRupees(priceInUSD) {
    return priceInUSD * exchangeRate;
}

// Use the map function to create a new object with prices in Rupees
const convertedInventory = Object.fromEntries(
    Object.entries(inventory).map(([item, price]) => [item, convertToRupees(price)])
);

// Display the converted inventory
console.log("Converted Inventory:", convertedInventory);
