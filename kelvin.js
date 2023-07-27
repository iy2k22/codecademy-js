// Sets the temperature to 293 kelvin
const kelvin = 293;
// Celsius is 273 less than kelvin
const celsius = kelvin - 273;
// This is the formula for converting celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// rounds the value stored in fahrenheit to the lowest number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// conversion to newton scale
let newton = celsius * (33 / 100);
console.log(`The temperature is ${newton} newton.`);