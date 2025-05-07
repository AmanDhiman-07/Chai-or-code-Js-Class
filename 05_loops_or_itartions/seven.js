// Map Function

// (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]

// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => {
//     return num + 10
// })

// OR

// const newNums = myNums.map((num) => (num + 20))



// CHANING IN MAP / FILTER /REDUCE  in javaScript.

// FOR Example
const newNums = myNums
                        .map((num) => (num * 10))   // [10,20,30,40......100]
                        .map((num) => (num + 1))      //[11,21,31,41,51,61....101]
                        .filter((num)=>(num >= 40))   //[41,51,61,71,81,19,101]

                        
console.log(newNums)