const args = process.argv.slice(2);
let number = parseInt(args[0]);

let nthHarmonicNumber=0;
if(number>0){
    for (let i = 1; i <= number; i++) {
        nthHarmonicNumber += 1 / i;
    }
    console.log(nthHarmonicNumber);
}
else{
    console.log("enter positive value of n");
}