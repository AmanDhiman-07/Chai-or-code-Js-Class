// arrays

// const myArray = [1, 2, 3, 4, 5];
const myHeros = ["ironman", "captain america", "thor", "hulk", "spiderman"];

// console.log(myArray[1]);
const myArray2 = new Array(1, 2, 3, 4, 5, 6);

// Arrays method 

// myArray.push(6); // In this case to add elements in last of arrays
// myArray.push(7);
// myArray.push(8);
// myArray.pop() // In this case to remove elements in last of arrays.
// console.log(myArray)




//  In this method is used in add lemenet in start in array.
// myArray.unshift(8)
// console.log(myArray)


// myArray.shift() // In this method is used in remove lemenet in start in array.
// console.log(myArray)


// Some Methods in Arrays

// console.log(myArray.includes(3))
// console.log(myArray.indexOf(3)) // In this method is used in find index of element in array.

// const newArr = myArray.join()
// console.log(myArray)
// console.log(newArr) // In this method is used in convert array to string.
// console.log(typeof newArr) // In this method is used in convert array to string.


// slice and splice

const myArray = [1, 2, 3, 4, 5];

console.log("A ", myArray);

const nyarr1 = myArray.slice(1, 3)

console.log("slice", nyarr1);

console.log("B ", myArray)

const myarr2 = myArray.splice(1, 3)

console.log("splice", myarr2);

console.log("C", myArray, 'afer splice org')



//  splice is effect in main array , to cut in main array

// slice is not effect in main array, not cut in main array