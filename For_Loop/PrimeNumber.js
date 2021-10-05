const args = process.argv.slice(2);
let lowLimit = parseInt(args[0]);
let highLimit= parseInt(args[1]);
let flag = true;
for(let number=lowLimit;number<=highLimit;number++){
    flag=true;
    for (let factor = 2; factor<= Math.sqrt(number); factor++) {
      if (number % factor == 0)
         flag=false;
    }
if (flag)
    console.log(number);
}