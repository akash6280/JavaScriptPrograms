const args = process.argv.slice(2);
let number = parseInt(args[0]);

while (number % 2 == 0) {
    console.log(2);
    number /= 2;
}
for (let i = 2; i <= Math.sqrt(number); i++) {
    while (number % i == 0) {
        if (number % i == 0) {
            console.log(i);
            number /= i;
        }
    }
}
if (number> 2) {
    console.log(number);
}