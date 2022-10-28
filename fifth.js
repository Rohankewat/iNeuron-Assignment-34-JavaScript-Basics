const prompt = require("prompt-sync") ();           //Question no :- 5

let score = parseInt(prompt("Enter score "));
if (80 <= score && score <= 100){
    console.log("A Grade")
} else if (70 <= score && score <= 89){
    console.log("B Grade")
} else if (60 <= score && score <= 69){
    console.log("C Grade")
} else if (50 <= score && score <= 59){
    console.log("D Grade")
} else if ( 0 <= score && score <= 49){
    console.log("F Grade")
} else{
    console.log("Invalid Score")
}