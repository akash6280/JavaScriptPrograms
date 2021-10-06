function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5 / 9;
}

const args = process.argv.slice(2);
let temperature = parseInt(args[0]);

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Enter 1 for fahrenheit to celsius \n 2 for celsius to fahenheit : ', choice => {
    switch (parseInt(choice)) {
        case 1: if (temperature >= 32 && temperature <= 212) {
            console.log(fahrenheitToCelsius(temperature));
        }
        break;

        case 2: if (temperature >= 0 && temperature <= 100) {
            console.log(celsiusToFahrenheit(temperature));
        }
        break;
        
        default: console.log("Invalid input");
    }
    readLine.close();
});

