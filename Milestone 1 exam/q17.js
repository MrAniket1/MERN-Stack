const bank = {
    customers: [
        { name: 'Alice', balance: 1000 },
        { name: 'Bob', balance: 1500 },
        { name: 'Charlie', balance: 2000 }
    ],

    findCustomerIndex(customerName) {
        return this.customers.findIndex(customer => customer.name === customerName);
    },

    deposit(customerName, amount) {
        const customerIndex = this.findCustomerIndex(customerName);
        if (customerIndex !== -1) {
            this.customers[customerIndex].balance += amount;
            console.log(`Deposited ${amount} into ${customerName}'s account. New balance: ${this.customers[customerIndex].balance}`);
        } else {
            console.log(`Customer '${customerName}' not found.`);
        }
    },

    withdraw(customerName, amount) {
        const customerIndex = this.findCustomerIndex(customerName);
        if (customerIndex !== -1) {
            if (this.customers[customerIndex].balance >= amount) {
                this.customers[customerIndex].balance -= amount;
                console.log(`Withdrawn ${amount} from ${customerName}'s account. New balance: ${this.customers[customerIndex].balance}`);
            } else {
                console.log(`Insufficient balance for ${customerName}.`);
            }
        } else {
            console.log(`Customer '${customerName}' not found.`);
        }
    }
};

// Example usage:
bank.deposit('Alice', 500);
bank.withdraw('Bob', 200);
bank.deposit('Eve', 100); // Customer not found
bank.withdraw('Charlie', 2500); // Insufficient balance
