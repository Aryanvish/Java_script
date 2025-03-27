// Q1) filter for numbers divisible by 10 from a given array

let arr1 = [12,20,45,70,80,690,90]
let arr2 = arr1.filter((value)=>{
    return (value%10)==0
})
console.log(arr2)  // returns a new array of elements divisible by 10 :)

// Q2) create an array of square of given numbers 

let arr3 = [12,3,4,7,8,15]
let arr4 = arr3.map((s)=>{
    return s*s
})
console.log(arr4)

// Q3) use reduce to calcuate factorial of a given number from an array 
// let arr5 = [1,3,4,23,6,7]
// let n = prompt("enter a number from array :",arr5[])   


// Q4) create an array of numbers and take user input to add numbers to this array

let arr6 = [1,2,4,3,5,6,7]
let m = prompt("enter a number:") // covert into integer   

let added_arr = arr6.map((v)=>{
    return v + m
    console.log("added array is")
})
console.log(added_arr)