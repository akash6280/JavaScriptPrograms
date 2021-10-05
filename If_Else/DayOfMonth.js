const args = process.argv.slice(2);
let day = parseInt(args[0]);
let month = parseInt(args[1]);

if(month >= 3 && month <= 6){
    if(month == 3 || month == 5){
        if(day>=20 && day <= 31){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
    else{
        if(day>=20 && date <= 30){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }    
}else{
    console.log("false");
} 