const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Batman", "flash"];

// marvel_heros.push(dc_heros); // 〽


// console.log(marvel_heros);   //  output --> [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'flash' ] ]

// Then

// console.log(marvel_heros[3][0]) // output --> [ 'Superman', 'Batman', 'flash' ]',


// C O N C A T --> Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let mix_heros = marvel_heros.concat(dc_heros)

// console.log(marvel_heros) // output ==> [ 'Thor', 'Ironman', 'Spiderman' ]   

// console.log(mix_heros)  // output ==> [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'flash' ]   2






// another Method to join two or more arrays together. ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// spread operator ==> The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const all_new_arrays = [...marvel_heros, ...dc_heros,];
// console.log(all_new_arrays);  //  output ==> [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'flash' ]



// flat() opertions ==> Create a new array with the sub-array elements concatenated:

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// const mom = another_array.flat(1)
// console.log(mom)



// console.log(Array.isArray("Hitesh")); // out=> false
// console.log(Array.from("Hitesh")); // out=> [ 'H', 'i', 't', 'e', 's', 'h' ] in string
// console.log(Array.from({ name: "Hitesh" }));   // out=> empty - []             INTERVIEW Questions

// const a = "aman"
// Array.from(a)
// console.log(Array.from(a))



// ////////////////////////////////////////////////////

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));   // Returns a new array from a set of elements.

