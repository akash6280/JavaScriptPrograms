const BIRTH_YEAR_1992=0;
const BIRTH_YEAR_1993=1;
let birthYear,birthMonth;
let birthYear1992Map=new Map();
let birthYear1993Map=new Map();

for(let index=1;index<=50;index++){
    let year = Math.floor(Math.random() * 10) % 2;
    if(year == BIRTH_YEAR_1992){
        
        let birthMonth = Math.floor(Math.random() * 100) % 12+1;
        if(birthYear1992Map.has(birthMonth)){
            let sameBirthMonthArray = birthYear1992Map.get(birthMonth);
            sameBirthMonthArray.push(index);
            birthYear1992Map.set(birthMonth, sameBirthMonthArray);
        }else {
            let sameBirthMonthArray = new Array();
            sameBirthMonthArray.push(index);
            birthYear1992Map.set(birthMonth, sameBirthMonthArray);
        }
    }
    else {
        let birthMonth = 1 + Math.floor(Math.random() * 100) % 12;
        if(birthYear1993Map.has(birthMonth)){
            let sameBirthMonthArray = birthYear1993Map.get(birthMonth);
            sameBirthMonthArray.push(index);
            birthYear1993Map.set(birthMonth, sameBirthMonthArray);
        }else {
            let sameBirthMonthArray = new Array();
            sameBirthMonthArray.push(index);
            birthYear1993Map.set(birthMonth, sameBirthMonthArray);
        }
    }
   
}
console.log("People with same birth month in year 1992 ");
console.log(birthYear1992Map);

console.log("People with same birth month in year 1993 ");
console.log(birthYear1993Map);