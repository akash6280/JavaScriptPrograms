const args = process.argv.slice(2);
let number = parseInt(args[0]);

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

if (isPalindrome(number)) {
    console.log("Number is palindrome")
}
else {
    console.log("Number is not palindrome")
}