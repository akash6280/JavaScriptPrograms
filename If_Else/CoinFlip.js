const HEAD = 0;
const TAIL = 1; 

let toss = Math.floor(Math.random() * 2);

if (toss == HEAD) {
    console.log("Head");
} else {
    console.log("Tail");
}