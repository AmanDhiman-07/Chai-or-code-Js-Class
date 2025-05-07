const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount + "Values")
// that is not use in concatination in morden java script ❌



// And in Morden days java script isWrite in this way
// In String InterPolation => `${}` use this.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   ✔






const gameName = new String("Hitesh") // In that is string is an object in console.log.

// console.log(gameName[0]); // This is Access to key or value

// console.log(gameName.__proto__); // This is access The prototype 

// console.log(gameName.length); // This is Access to length of string

// console.log(gameName.toUpperCase()) // This is a Access to the prototype functions and Changed the values === but==== original value not changed.

// console.log(gameName) // but original value not changed. OK

// console.log(gameName.charAt(0)) // 

// console.log(gameName.indexOf("t")) // that is Access to index values of strings




// some features of strings


// SubString 

// let newString = gameName.substring(0,4) // the output is hite in 3 string 4rt string is not included.
// console.log(newString)

// slice

// let anotherString = gameName.slice(0,3) // Same as substring
// console.log(anotherString)

// Trim

let newStringOne = "      hitesh     "
// console.log(newStringOne)  // This is space in String 

// console.log(newStringOne.trim()) // This is space trim output



// let one = "      hitesh      "
// let two = "hitesh"
// console.log(one.trim())
// console.log(two)



// Replace Method 

let url = "http://hitesh.com/hitesh%20chodhary"
// console.log(url)

// replace method Apply

url.replace("%20", "_")

// console.log(url.replace("%20","-"))


// includes method

// console.log(url.includes("hitesh"))



// split method  in string

let gameChar = "hitesh - manish-rajat - aman"


// console.log(gameChar.split("-"))
console.log(gameChar.startsWith("h"))
