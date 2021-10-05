const args = process.argv.slice(2);
let number1 = parseInt(args[0]);
let number2 = parseInt(args[1]);
let number3 = parseInt(args[2]);


minimum = Number.MAX_VALUE
maximum = Number.MIN_VALUE

let resultArray = [number1 + number2 * number3, number1 % number2 + number3, number3 + number1 / number2, number1 * number2 + number3];

resultArray.forEach(number => {
    if(number>maximum)
        maximum = number;
});
resultArray.forEach(number => {
    if(number<minimum)
        minimum = number;
});
console.log("maximum: "+maximum+" minimum: "+minimum); 
