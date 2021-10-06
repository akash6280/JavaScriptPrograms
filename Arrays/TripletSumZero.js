let array = [0, -1, 2, -3, 1];
  
function findTriplets(array) {
     let found = false;
     for (let index1 = 0; index1< array.length - 2; index1++) {
        for (let index2 = index1 + 1; index2 < array.length - 1; index2++) {
            for (let index3 = index2 + 1; index3 < array.length; index3++) {
                if (array[index1] + array[index2] + array[index3] == 0){
                       return true;
                }
            }
        }
        if(found === false) {
            return false;
        }
    }
}
if(findTriplets(array)){
    console.log("Triplet with sum zero exist");
}
else{
    console.log("Triplet with sumzero does not exist");
}