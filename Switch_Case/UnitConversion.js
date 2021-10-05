
  
const args = process.argv.slice(2);
let number = parseInt(args[0]);
let choice = parseInt(args[1]);


switch(choice) {
    case 1:
        console.log(a*12);
        break;
    case 2:
        console.log(a*0.0833333);
        break;
    case 3:
        console.log(a*0.3048);
        break;
    case 4:
        console.log(a*3.281);
        break;
}