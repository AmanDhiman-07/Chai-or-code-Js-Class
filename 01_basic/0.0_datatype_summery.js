// Primitive Datatype  or value type


// Note==> In prmitive datatype is call by value ,show in copy value  not acutally value . in decilar in variable.

//  7 type of prmitive datatype

// 1: String , 2: Number, 3: Boolean, 4: Null ==> Meaning in empty (khali) , not = 0
// 5: undefined 6: symbol , 7: BigInteger


// Examples

const score = 100
const scoreValue = 100.3
const isLoogedIn = false
let userEmail; // That is undefined datatype.

// Symbol

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid)

// BigInt

// const bigInt = 973797397947937974937n




// Reference type (Non primitive datatypes)

// Array , function , Object  datatype of typeof in function / and function typeof in object function


const hero = ["shaktiman", "naagraj", "doga"]

const myObj = {
    name: "hitesh",
    age: 23
}

const myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof bigInt)




// return type of variables in JavaScript

// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint


// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// two type of memory in js
// 1) Stack ==>  is used in (Primitive Datatype)
// 2) Heap ==>  is used in (Non-primitive Datatype)

// Stack


let myYoutubenme = "hiteshchoudharydotcom";
let anothername = myYoutubenme;


anothername = "Chaiorcode"

console.log(myYoutubenme)
console.log(anothername)

// or is ma aap ko copy value milti ha kisi ki bhi ----- not original value ---- 




// Heap

let objectOne = {
    email: "userOne@google.com",
    upi: "user@ybl"
}


let objectTwo = objectOne
objectTwo.email = "userTwo@google.com"

console.log(objectOne.email)
console.log(objectTwo.email)

// is ma aap ko kisi bho value ka reference milta ha  in heap memory