// Array's in Javascript
let marks = [45,76,44,79,96]  // Array declaration
// elements in array start with 0 
// 1) accecing valus in array
console.log(marks[4])
// 2) finding length of array
console.log(marks.length)
//  3) changing the values 
marks[3]=23
console.log(marks)
// in Js arrays are objects example 
console.log(typeof marks) // shows output as object 


// there are some methods in array
// 1) tostring() converts an array into a string 
let n=[1,2,4,5]
let b = n.toString()
console.log(b)

// 2) join() joins all array elements using a separator 
// let a = [12,2,3,45,67]
let c = n.join('_')
console.log(c) 

// 3) pop() removes the last elements of the array
// console.log(a.pop())  // it returns the eliminated value 
// console.log(a)   // prints the array after elimination

// 4) push() add new element at the end of the array 
// console.log(a.push(5))
// console.log(a)

// sort() it sorts an array alphabetically
// eg :
// console.log(a.sort()) // alpahbetically sorted 
//  but if we need to arrange them in a ascending order then we need to use optional compare function 
const compare = (a,b)=>{
    return a-b
}
let a = [12,2,3,45,67]
a.sort(compare)
console.log(a) // output in asceding order , for descending just b-a
 
// splice() used to add new items to an array 
let m = ( a.splice(3,2,21,33))
console.log(m) // returns deleted numbers 
console.log(a) // print the modified array


// slice()  slice a piece of an array and ceate a new array
 
let w = [1,55,67,34,65]
let x = w.slice(3)
console.log(x) // returns new array 
console.log(w) // prints the original array 

// Looping through array's
 

// let d = [23,43,56,78,16]
// for(i=0;i<d.length;i++){
//     console.log(d[i])
// }

// methods 
// 1) for each loop 
let d = [23,43,56,78,16]

d.forEach((element)=>{
    console.log(element*element)

})


// 2) map()
let arr = [23,1,5,4,3]
let f = arr.map((value)=>{
    console.log(value)
    return value*value
})
console.log(f)

// filter()method

let arr2=[1,34,5,76,67,4,5]
 
let y = arr.filter((g)=>{
    return g<10
})
console.log(y)// does not change original array


// reduce method 
let arr3=[1,2,3,56,79,89]
let arr4 =arr.reduce((h1,h2)=>{
    return h1+h2    
})
console.log(arr4)  // sums up the elements of array 

