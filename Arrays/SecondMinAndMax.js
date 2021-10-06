let numberArray = new Array();

var secondMinimumValue=Number.MAX_VALUE
var secondMaximumvalue=Number.MIN_VALUE; 

for(let index=0;index<10;index++){
    let number=Math.floor(Math.random()*(1000));
    numberArray.push(number);
}
numberArray.sort(function(a, b){return a - b});
secondMinimumValue=numberArray[1];
secondMaximumvalue=numberArray[numberArray.length-2];
console.log("Second minimum number = "+secondMinimumValue);
console.log("Second maximum number = "+secondMaximumvalue);