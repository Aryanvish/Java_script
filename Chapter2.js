// Expressions ,conditionsand operators
// Q1 use of logical operator to find age of person lies between 10 and 20
 let age =prompt("whats your age?")
 if(age>=10&&age<=20){
     console,log("true")
 }
 else{
     console,log("false")
 }
//switch case statements in js 
// switch(age=2){
//     case 1:
//         console.log("happy")
//     case 2:
//         console.log("sad")
//         break                 //  If break not given then further statements wil also be executed
//     deafault:
//     console.log("boring")    
// }



// Q3 programm to find no. divisible by 2 and 3
 let num =prompt("enter a number:")
 if(num%2==0 && num%3==0){
     console.log("number divisible by 2 and 3")
 }


// Q4 programm to find no. divisible by 2 or 3
let num1 =30 //prompt("enter a number:")
if(num%2==0 || num%3==0){
    console.log("number divisible by 2 or 3")
}

// valid to drive or not drive program using conditional statemants
let age1 =prompt("whats your age?")
if(age>=18){
    console,log("you can drive");
}
elseif(age<18 || age>60){
    console.log("you cannot drive");
}
else{
    console.log("you are still baby");
}




