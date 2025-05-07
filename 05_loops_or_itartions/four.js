const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} : shortcut is for ${myObject[key]}`)
}



// forin in arrays par bhi

const programming = ['js', 'rb', 'cpp', 'py', 'java']

for (const key in programming) {
    // console.log(`programming value is : ${programming[key]}`)
}



// file three.js Q

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United state of America")
// map.set("FR", "France")

// for (const key in map) {
//     // console.log(key) // maps is not itrative 
// }