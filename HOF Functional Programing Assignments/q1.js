// Define the input string
const input = "Hello, World!";

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to perform the delay and reversal
function delayAndReverse(input) {
    setTimeout(function () {
        const reversed = reverseString(input);
        console.log("Reversed String:", reversed);
    }, 2000); // Delay of 2 seconds (2000 milliseconds)
}

// Call the function with the input string
delayAndReverse(input);
