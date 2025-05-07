//  agar block scope ka andar ki hoi value ko only andar hi use or catch kar sak ta ha .

// magar  Global sope ma hum varibale ko sope ka bahara bhi declear kar sakta ha or use bhara or block scope ka undar bhi kar sakta ha .


// global scope
// var a = 20 

// {
// console.log(a)
// }


// or

// block scope
// {
// let a = 40;
// console.log(a)
// }



let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner block = " + a)
}

// console.log(a)

//////////////////////////////////// 2 part ////////////////////////////

// Nested function
/////





// function one() {
//     const username = "hitesh"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website)

//     two()
// }

// one()


// Nesting in if conduction

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++++ Intersting +++++++++++++++++++++++++++++++++


function addone(num) {
    return num + 1
}
addone(5)




// addtwo() => this is decler in error  in this  side 

const addtwo = function (num) {
    return num + 2
}

// console.log(addtwo(7))




