function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (num % 2 === 0) {
            continue; // Skip even numbers
        }

        if (num % 3 === 0) {
            console.log(num);
        }
    }
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can change this array
printDivisibleBy3NotBy2(numberArray);
