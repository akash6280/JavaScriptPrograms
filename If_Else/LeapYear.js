const args = process.argv.slice(2);
let year = parseInt(args[0]);

if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}