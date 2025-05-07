// This is to declare yhe number in variables

const score = 400
// console.log(score);


// This is another method of create a number variable

const balance = new Number(100)
// console.log(balance.toString()); // this is return a string
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // that is usallay used in e-commerce  websites  to show customers balance.

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)) // this is important to define perecision values.



const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));   // this is important to define


// maxvalue 
// minvalue
//  is also define in Number datatype.

// +++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

// console.log(Math);  // The give me a object object [Math] {}
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.3));
// console.log(Math.sqrt(20))
// console.log(Math.min(10,4,5,3,2,9)) // The provide a minimum value in Arrays.
// console.log(Math.max(10,4,5,3,2,9)) // The provide a maximum value in Arrays.





// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log((Math.random() * 10) + 1); // The above example to avoid that 
// console.log(Math.floor(Math.random() * 10) + 1);   // In this example to see the lowest value in this side.


// Important Mathed in 

const min = 10
const max = 20

// console.log(Math.floor(((Math.random() * 10) + 1) + min)); 

// or

// console.log(Math.floor(Math.random() * (max - min + 1) + min)); // That provide the range value in min and max.  