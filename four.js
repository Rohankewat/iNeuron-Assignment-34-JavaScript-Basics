                //Question no :- 4 

const prompt = require("prompt-sync") ();
let number =  parseInt(prompt("Enter number "));
if (number % 2 == 0){
    console.log("Even number")
} else {
    console.log("not even number(odd number)")
}