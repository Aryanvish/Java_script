
// sum of two no. functions
const sum = (a,b)=>{
    let c= a+b;
    return c ;
}
let y = sum(-33,45);
console.log(y)

// write a function that calculates the area of a rectangle given its length and width 

// const area = (l,w)=>{
//     let area = l*w ;
//     console.log("area of a rectangle is ",area)
// }
// area(8,8)

//  by taking user inputs 

let l = prompt("enter the length of rectangle")
let w = prompt("enter the width of rectangle")
const area = (l,w)=>{
     if(l<=0){
         throw new RangeError("Lenght should be a positive number");
     }
     if(w<=0){
         throw new RangeError("width should be a positive number");
     }
     let area = l*w ;
     return area ;
 }
let x = area(l,w)
 console.log("area of the rectangle is",x) 


 //  write a function that tells if the given numbers is even or odd 

let n = prompt("Enter a number :")

const num = (n)=>{
     if(n%2===0){
         console.log(n," is an even number ")
    }
     else{
         console.log(n," is an odd number")
    }
}
let m = num(n)
console.log(num(n))


 // write a function that finds smallest no. among three given numbers Math.min not allowed

let num1 = prompt("enter num1")
let num2 = prompt("enter num2")
let num3 = prompt("enter num3")

const arr1 = [num1 , num2 , num3]
//const smallestnum = ()
let s = arr1.sort()
console.log("The smallest number is ", s[0]) // not working for negative numbers 

//  using a function 

const smallnum = (p,q,r)=>{
    switch(true){
        case p<q && p<r :
            return "p is smallest",p ;
        case q<p && q<r :
            return "q is the smallest",q ;
        case r<q && r<p :
            return "r is the smallest",r;
        default:
            return " invalid input"
    }

}
console.log(smallnum(12,23,45))

// reverse a string using functionss 
const reversestring1 = (str1)=>{
    result = "";
    for(i = str1.length - 1 ; i<=str1.length ; i--){
        result = result + str1[i] ;
    }
    return result 
}

console.log(reversestring1("Aryan"))