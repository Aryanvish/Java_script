// Q1 programm to print marks of a student in object using for loop
const obj ={
    harry : 98,
    rohan : 70,
    aakash : 75
}
for(let a in obj ){
    console.log(" marks of " + a + " are " +obj[a])
}


//Q2 programm to print try again untill user enters correct number\
 let b = prompt("enter the value of b:")
 while(b===99){
 }












//Q3 function to find mean of 5 numbers
let u = prompt("enter the value of u:")
let v = prompt("enter the value of v:")
let x = prompt("enter the value of x:")
let y = prompt("enter the value of y:")
let z = prompt("enter the value of z:")


function meanof(l,m,n,o,p){
    return (l+m+n+o+p)/5
}
console.log("mean of u,v,w,x,y,z is",meanof(u,v,x,y,z))