// const userEmail = "h@estes.com"  // useremail is so than this is truthy value.
// const userEmail =  "" ,[]  // useremail is so than this is falsy value.

// if (userEmail) {
//     console.log("got a user email")
// }
// else{
//     console.log("Don't have a user email")
// }

// falsy values

// false, 0, -0, BigInt, "", 0n, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function () { } 


// check the empty array in truthy or falsey value

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

// check the empty object in truthy or falsey value

// const emptyobject = {}
// if (Object.keys(emptyobject).length === 0) {
//     console.log("object is empty")
// }


// IMPORTANT AND NEW
// Nullish Coalescing Operator(??): null , undefined

// for example

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // Agar db sa value aa rahi ha tho  value write ho jaya gai // or nhi tho null  write ho jaya ga. 
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20  print = 10 => beacuse the db is send  first value 10 ,so the first value will be print.  


console.log(val1)


// Terniary Operator

// syntax =>  condition ? ture : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")  // output => More than 80