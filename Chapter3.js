// Loops and Functions
// basic for loop programm 
for(i=0;i<11;i++){
    console.log("i*2=",i*2)
}
/* for in loop programm
   for in loop programm is used through keys of an object */
const a={
    name :"Aryan",
    age : 19,
    education : "engineering"
}
for(let b in a){
    console.log("age of a " + b + " are " +  a[b])
}
// for of loop " only prints strings in object "
for(let b of "Aryan"){
    console.log(b)
}
// while loop in js 
j=0
while(j<11){
    console.log(j)
    j++ ;
}
// do while loop in js
let k = 12  
do{
    console.log(k)
    k++ ;
}while(k<11)  // output will be 12 bcz it will run first then check the condition 


/* functions in js 
lets start with an example , 
suppose we have to print average between two numbers for three inputs */
let l = 1
let m = 2
let n = 3

function avg(x,y){
    console.log("Done")
    return (x+y)/2
}

console.log("average of l and m is",avg(l,m))

console.log("average of l and n is",avg(l,n))

console.log("average of n amd m is",avg(n,m))
/* from above example we can do this but while performing more values or making 
a change , like to print done after each iteration we can use a function 
for such operations*/
//  arrow functions "example of taking sum "
 const sum =(p,q)=>{
    return p+q
 }
 console.log(sum(l,m))
//  function can also be made with out arrgument
// const hello=()=>{
    // console.log("hey how are you")
// }
// hello();
// if returns a value
const hello=()=>{
    console.log("hey how are you")
    return "Hi"
}
let v = hello();

