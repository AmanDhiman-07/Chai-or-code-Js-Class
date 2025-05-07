function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function AddtwoNum(num1, num2) {
//     console.log(num1 + num2)
// }

// AddtwoNum(3, 4) // 7
// AddtwoNum(3, "7")  // 37
// AddtwoNum(3, "a")   //3a
// AddtwoNum(3, null)   //3


function AddtwoNum(num1, num2) {
    // let result = num1 + num2;
    // // console.log("amana")
    // return result;


    return num1 + num2
    // console.log("aman")
}

// const result = AddtwoNum(3, 5)

// console.log("result: ", result);

// note : return ka baad ma kuch bhi print nhi ho ta....


// function loginUserMassage(username) {

//     if (username === undefined) {
//         console.log("please provide a username")
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMassage()) // undefined
// console.log(loginUserMassage())



//  in just add a defult value in usename give in  parameter like

function loginUserMassage(username = "Sam") {

    if (!username) {
        console.log("please provide a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage()) // undefined
// console.log(loginUserMassage("AmanDeep")) // that is override our stetement in defult values.


//////// part 2 //////////////// function ////////////



// Rest operater Define

// function calcuateCartprice(num1) {
//     return num1
// }

// console.log(calcuateCartprice(200)); =>  200 in simpple function define



// rest operater is use

// function calcuateCartprice(...num1) {
//     return num1
// }


// console.log(calcuateCartprice(200,300,400,2000));  //=>[ 200, 300, 400, 2000 ] giving a array 

// another condution
function calcuateCartprice(val1, valu2, ...num1) {
    return num1
}

// console.log(calcuateCartprice(200,300,400,2000)) => [ 400, 2000 ]
// console.log(calcuateCartprice(2000, 2000, 3000, 4000))


// object passing in function

const user = {
    userName: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user) //=> Username is hitesh and price is 199



// another method to pass the object 
handleObject({
    userName: "Sam",
    price: 399
})

// =>Username is Sam and price is 399



// Array passing in function

const myNewarray = [100, 200, 300, 400];

function returnThirdvalue(getArray) {
    return getArray[3]
}

// console.log(returnThirdvalue(myNewarray))

console.log(returnThirdvalue([100,200,300,400]))