// Reduce Function

// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// cart Example

const myNum = [1, 2, 3]

// Normal function

// const Total = myNum.reduce(function (acc, currvalue) {
//     console.log(`acc: ${acc} and currvalue: ${currvalue}`);
//     return acc + currvalue
// }, 0)


// Arrow function

// const Total = myNum.reduce((acc, currvalue) => acc + currvalue, 0)

// console.log(Total)



const shoppingCart = [
    {
        itemName: "js course hindi",
        price: 1000
    },
    {
        itemName: "java course ",
        price: 3000
    },
    {
        itemName: "Python course",
        price: 5000
    },
    {
        itemName: "Mobile dev course",
        price: 10000
    },
    {
        itemName: "React course",
        price: 7000
    },
    {
        itemName: "Data science course",
        price: 12000
    },
]

// const total = shoppingCart.reduce((acc, item) => (acc + item.price),0)
// or
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// or

// const Total = shoppingCart.reduce((acc, item) => {
//     return acc + item.price
// }, 0)

console.log(total)