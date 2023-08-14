function calculateBillPerPerson(dishCosts, numberOfPeople) {
    const totalBill = dishCosts.reduce((total, cost) => total + cost, 0);
    const billPerPerson = totalBill / numberOfPeople;

    const billInfo = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return billInfo;
}

// Example usage:
const dishCosts = [250, 180, 320, 150]; // Example cost of each dish
const numberOfPeople = 4; // Example number of people sharing
const billDetails = calculateBillPerPerson(dishCosts, numberOfPeople);
console.log(`Total bill: Rs. ${billDetails.totalBill}`);
console.log(`Bill per person: Rs. ${billDetails.billPerPerson}`);
