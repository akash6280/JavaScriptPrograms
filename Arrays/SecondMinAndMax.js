let numberArray = new Array();

var firstMinimumValue=Number.MAX_VALUE;
var secondMinimumValue=Number.MAX_VALUE;

var firstMaximumvalue=Number.MIN_VALUE;
var secondMaximumvalue=Number.MIN_VALUE; 

for(let index=0;index<10;index++){
    let number=Math.floor(Math.random()*(1000));
    numberArray.push(number);
    firstMaximumvalue=Math.max(firstMaximumvalue,numberArray[index]);
    firstMinimumValue=Math.min(firstMinimumValue,numberArray[index])
}

for(let index=0;index<10;index++){
    if (numberArray[index] != firstMaximumvalue)
        secondMaximumvalue = Math.max(secondMaximumvalue,numberArray[index]);
    if (numberArray[index] != firstMinimumValue)
        secondMinimumValue = Math.min(secondMinimumValue,numberArray[index]);
}

console.log("Second minimum number = "+secondMinimumValue);
console.log("Second maximum number = "+secondMaximumvalue);