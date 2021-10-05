let minimum = Number.MAX_VALUE;
let maximum = Number.MIN_VALUE;

for (let index = 0; index < 5; index++) {
    let number = Math.floor(Math.random() * 1000);
    if(number>=maximum)
    maximum=number;
    else
    minimum=number;
}
console.log("Maximum = " + maximum, " Minimum = " + minimum);