// Strings in js
let name = "Aryan"
console.log(name.length)
// Strings can also be created using single qoutes
let name2 = 'Gaurav'
console.log(name2)

// Template Literals : with this it is possible to use both single as well as double qoute within string
// example:
let sentence ='City of dreams is "Mumbai" ' 
console.log(sentence)
// we can also insert variable directly in template literals , known as string interploation
//  Example:
let Sentence = `i am ${name}`
console.log(Sentence)




// String properties and Methods 
// 1) length of string
console.log(name.length)
// 2) to upper case
// console.log(name.touppercase())
//  3) to lower case
const lowercasetext = name.toLowercase(); 
console.log(lowercasetext)  
//  4) slincing a string 
console.log(name.slice(1,5)) // 5th charcter will not be included and starts fron 0 
console.log(name.slice(1))   // prints from 1 to end 
//  5) replacing word 
let name1 = "Aryan Sharma"
console.log(name1.replace("Sharma", "Vishwakarma"))
//  6) concatenation 
let name1a= " good boy"
console.log(name1.concat(name1a))
//  7) triming
console.log(name1.trim())
//  8) we can also print a single character in a string for example
console.log(name[0])  // it will print 0th charcter of name 
//  9) use of \n , \t , \r in js 
console.log("Aryan\tis\ta\tgood\tboy\t,who\tstudies\tEngineering") // puts tab space between words
console.log("Aryan is a good boy \nwho studies Engineering") // used to print in new line

