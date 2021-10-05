let digit = Math.floor(Math.random() * 10);
console.log("Digit is "+digit);

let diceNumber = 1 + Math.floor(Math.random() * 10)%6;
console.log("Dice number is = "+diceNumber);

let diceNumber1 = 1 + Math.floor(Math.random() * 10)%6;
let diceNumber2 = 1 + Math.floor(Math.random() * 10)%6;
let sum=diceNumber1+diceNumber2;
console.log("sum is "+ sum); 

sum = 0;
for(let count=1; count<=5;count++)
    sum += Math.floor(Math.random() * 100);
console.log("sum is "+ sum);
let avg = sum/5;
console.log("average is "+avg); 

let feetInInch = 12;
console.log("42 inches in feet  "+ (1/feetInInch)*42);

let feetInMeter = .304;
let areaInMeters = 60*feetInMeter * 40*feetInMeter;
console.log("Area in meters = "+areaInMeters)

let acreInMeter=4046.86;
console.log("Area of 25 plots in acre = "+25*areaInMeters*(1/acreInMeter));