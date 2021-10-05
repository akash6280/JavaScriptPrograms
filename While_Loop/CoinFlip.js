
const HEAD=0;
const TAIL=0;
let toss;
let countHeads = 0;
let countTails = 0;

while (countHeads < 11 && countTails < 11) {
    toss = Math.floor(Math.random() * 10) % 2;
    if (toss == HEAD){
        countHeads++
    }
    else{
        countTails++;
    }
}

let winner=(countHeads>countTails)?"Head":"Tail";
console.log(winner);