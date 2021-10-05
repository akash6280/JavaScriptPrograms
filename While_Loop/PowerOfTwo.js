const args = process.argv.slice(2);
let number = parseInt(args[0]);

let power = 0;
while (Math.pow(2,power) <= Math.pow(2,power) && Math.pow(2,power)<= 256){
    console.log(Math.pow(2,power));
    power++;
}