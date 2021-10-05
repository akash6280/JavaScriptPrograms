
const args = process.argv.slice(2);
let number = parseInt(args[0]);

switch(number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("TenThousand");
        break;
    default:
        console.log("Invalid input");
}