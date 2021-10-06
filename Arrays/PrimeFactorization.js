const args = process.argv.slice(2);
let number = parseInt(args[0]);
let primeFactorArray= new Array();
while (number % 2 == 0) {
    primeFactorArray.push(2);
    number /= 2;
}
for (let i = 2; i <= Math.sqrt(number); i++) {
    while (number % i == 0) {
        if (number % i == 0) {
            primeFactorArray.push(i);
            number /= i;
        }
    }
}
if (number> 2) {
    primeFactorArray.push(number);
}

console.log(primeFactorArray);