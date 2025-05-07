// for
// ["","",""]
// [{},{},[]]


// FOR OF 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!"

// break and for of

// for (const greet of greetings) {

//     if (greet == " ") {
//         console.log("space is Detacted")
//         break;

//     }
//     console.log(`Each char is ${greet}`)
// }

// continue

// for (const greet of greetings) {

//     if (greet == " ") {
//         console.log("space is Detacted")
//         continue;

//     }
//     console.log(`Each char is ${greet}`)
// }




// Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 

// and unique value define , dublecate value is not display.

const map = new Map()
// map.set("name", "AmanDeep")
// map.set("location", "Delhi")
// map.set("pincode", 110092)

map.set("IN", "India")
map.set("USA", "United state of America")
map.set("FR", "France")
// map.set("IN", "India") dublecate value is not display 

// console.log(map.delete("IN"))
// console.log(map)

for (const key of map) {
    // console.log(key)
}

// output->
// [ 'IN', 'India' ]
// [ 'USA', 'United state of America' ]
// [ 'FR', 'France' ]

for (const [key, value] of map) {
    // console.log(key + ":-" + value)
}

// output->

// IN:-India
// USA:-United state of America     
// FR:-France



// const myObject = {
//     "game1": "spiderman",
//     "game2": "Football"
// }

// OR

const myObject = {
    game1: "spiderman",
    game2: "Football"
}

for (const [key, value] of myObject) {
    console.log(key + ":-" + value)
}

// output=> TypeError: myObject is not iterable
