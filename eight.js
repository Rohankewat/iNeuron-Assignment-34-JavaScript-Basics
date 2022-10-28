const prompt = require("prompt-sync") ();              // Question no:- 6
let month = parseInt(prompt("Enter month "));
switch (month) {
    case 1:
        console.log("Number of days in january are 31");
        break;
    case 2:
        console.log("Number of days in february are 28");
        break;
    case 3:
        console.log("Number of days in march are 31");
        break;
    case 4:
        console.log("Number of days in april are 30");
        break;
    case 5:
        console.log("Number of days in may are 31");
        break;
    case 6:
        console.log("Number of days in june are 30");
        break;
    case 7:
        console.log("Number of days in july are 31");
        break;
    case 8:
        console.log("Number of days in august are 31");
        break;
    case 9:
        console.log("Number of days in september are 30");
        break;
    case 10:
        console.log("Number of days in october are 31");
        break;
    case 11:
        console.log("Number of days in novermber are 30");
        break;
    case 12:
        console.log("Number of days in december are 31");
        break;
    default:
        console.log("you enter wrong month");    
} 
