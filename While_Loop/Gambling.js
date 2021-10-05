const INITIAL_STAKE=100;
const BET_PER_GAME=1;
const WIN=1;
const LOSE=0;
let noOfWin=0;
let noOfLost=0;
let currentBalance=INITIAL_STAKE;

while(currentBalance<200||currentBalance>0){
    
    let result=Math.floor(Math.random() * 10) % 2;
    console.log(option);
    if(result==WIN){
        currentBalance+=BET_PER_GAME;
        noOfWin++;
    }
    else{
        currentBalance-=BET_PER_GAME;
        noOfLost++;
    }   
}
if(currentBalance==0){
    console.log("Player lost");
}
else {
    console.log("Player won");
    console.log("Total winning bets"+ noOfWin);
    console.log("Total number of bets"+noOfWin+noOfLost);
}   