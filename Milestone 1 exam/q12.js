function calculateRentalCost(daysRented, carType) {
    const rentalRates = {
        Economy: 4000,
        Midsize: 10000,
        Luxury: 20000
    };

    if (rentalRates.hasOwnProperty(carType)) {
        const rentalCost = rentalRates[carType] * daysRented;
        return rentalCost;
    } else {
        throw new Error('Invalid car type');
    }
}

// Example usage:
const daysRented = 3; // Example number of days rented
const carType = 'Midsize'; // Example car type
try {
    const totalRentalCost = calculateRentalCost(daysRented, carType);
    console.log(`Total rental cost: Rs. ${totalRentalCost}`);
} catch (error) {
    console.error(error.message);
}
