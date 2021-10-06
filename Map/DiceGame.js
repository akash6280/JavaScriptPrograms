let diceMap  = new Map();

let maximumOccuredNumber=Number.MIN_VALUE;
let maximumOccuredNumberCount=Number.MIN_VALUE;
let minimumOccuredNumber=Number.MAX_VALUE;
let minimumOccuredNumbeCount=Number.MAX_VALUE;

while(!(Array.from(diceMap.values()).includes(10))){
    let numberRolled=(Math.floor(Math.random()*10)%6)+1;
    if(!diceMap.has(numberRolled)){
        diceMap.set(numberRolled,1);
    }
    else {
        diceMap.set(numberRolled,diceMap.get(numberRolled)+1);
    }
}

for (let [key, value] of diceMap) {
    if(value>maximumOccuredNumberCount){
        maximumOccuredNumberCount=value;
        maximumOccuredNumber=key;
    }
    else if(value<minimumOccuredNumbeCount){
        minimumOccuredNumbeCount=value;
        minimumOccuredNumber=key;
    }   
}

console.log("Most Occured number: "+maximumOccuredNumber+" with count "+diceMap.get(maximumOccuredNumber)+" times");
console.log("Least Occured number: "+minimumOccuredNumber+" with count "+diceMap.get(minimumOccuredNumber)+" times");
