const args = process.argv.slice(2);
let number = parseInt(args[0]);

let flag = true;

for (let factor = 2; factor<= Math.sqrt(number); factor++) {
    if (number % factor == 0)
        flag=false;
}

if (flag)
    console.log("Number is prime");
else
    console.log("Number is not prime");