// This => keyword is used in current contaxt ko access kar ta ha .

// example

const user = {
    username: "Aman",
    price: 999,
    welcomeMessgae: function () {
        console.log(`${this.username} , wlcome to webite`)
        console.log(this)
    }
}

// user.welcomeMessgae()
// user.username = "sam"
// user.welcomeMessgae()

// console.log(this) => {} empty object node eniverment



// //////////////////////////////////////


// function chai() {

//     let username = "aman"
//     console.log(this.username)
// }

// chai() => undefined


// ////////////////

// const chai = function () {
//     let username = "aman"
//     console.log(this.username)
// }


const chai = () => {
    let username = "aman"
    console.log(this.username)
}

// chai()

// arrow function///////////////////

//  syntax

// first Arrow function deffine

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(5, 5))


// another arrow function

// let addtwo = (num1, num2) => num1 + num2
// console.log(addtwo(4, 5))

// another Arrow function use () => This is used in react in most of time.

// const addtwo = (num1, num2) => (num1 + num2)
// console.log(addtwo(20, 20))



// define object in arrow function simplecity
const addtwo = () => ({ username: "Aman" })
console.log(addtwo())