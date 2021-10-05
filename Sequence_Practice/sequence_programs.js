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
