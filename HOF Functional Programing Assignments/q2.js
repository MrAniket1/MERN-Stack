function generateRandomNumberWithDelay(delayInSeconds) {
    // Display initial message
    console.log("Generating random number in " + delayInSeconds + " seconds...");

    // Calculate the delay in milliseconds
    const delayInMilliseconds = delayInSeconds * 1000;

    // Update interval (in milliseconds) for progress messages
    const updateInterval = 1000; // 1 second

    // Calculate the number of intervals
    const numIntervals = delayInMilliseconds / updateInterval;

    let remainingTime = delayInSeconds;

    // Display progress messages
    const progressInterval = setInterval(function () {
        remainingTime--;
        console.log("Time remaining: " + remainingTime + " seconds...");

        if (remainingTime <= 0) {
            clearInterval(progressInterval);
            generateRandomNumber();
        }
    }, updateInterval);

    // Generate random number after the specified delay
    function generateRandomNumber() {
        setTimeout(function () {
            const randomNum = Math.floor(Math.random() * 100); // Change the range as needed
            console.log("Random number generated:", randomNum);
        }, delayInMilliseconds);
    }
}

// Specify the delay in seconds
const delayInSeconds = 3;

// Call the function to generate a random number with the specified delay
generateRandomNumberWithDelay(delayInSeconds);
