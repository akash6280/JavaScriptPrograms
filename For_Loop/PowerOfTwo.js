
const args = process.argv.slice(2);
let number = parseInt(args[0]);

for (let count = 0; count <= number; count++) {
    console.log(Math.pow(2, count));
}