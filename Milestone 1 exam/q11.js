function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Example usage:
const temperatureInCelsius = 25; // Example temperature in Celsius
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(`Temperature in Fahrenheit: ${temperatureInFahrenheit}°F`);
