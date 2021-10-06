let repeatedArray = new Array();

let lowerLimit=0;
let upperLimit=100;


function isPalindrome(number) {
    let remainder=0,reverseNumber=0;
    let  originalNumber= number;
    while (number > 0) {
        remainder = number % 10;
        reverseNumber = reverseNumber * 10 + remainder;
        number = parseInt(number / 10); 
    }
    if (originalNumber==reverseNumber) {
        return true
    }
    else {
        return false
    }
}

for(let number=lowerLimit;number<=upperLimit;number++){
    if(number>9){
        if(isPalindrome(number)) {
         repeatedArray.push(number)
        }
    }
}
console.log(repeatedArray)