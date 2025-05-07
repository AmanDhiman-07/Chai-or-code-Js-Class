// fetch('https//somthjing.com').then().catch().finally()


// Promise ek object ka representing the eventual completion or failure of an asynchronous opertion.
// new key is class to acces the object.

// Create some Promises so you IDEA to create 

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls,cryptography,network
    setTimeout(function () {
        console.log("Async Task is complete");
        resolve()  // this is method to call a important. resolve is connected to then() pomise
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed!")
})

// //////////////////////////////////two//////////////////////////////////////

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async2 tast is completed')
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async Resolved!")
})

/////////////////////////////Three////////////////////////////////////////////////////////


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "Chai@example.com" })
    }, 1000)
})




// permeter is use in conneted to resolve into then statement

promiseThree.then(function (user) {
    console.log(user)
})



// ///////////////////////////////Four/////////////////////////////////////////////////


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Hitesh", password: '123' })
        } else {
            reject("ERROR: something went wrong!")
        }
    }, 1000)
})




promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => { console.log('The Promise is either resolve and rejected') }) // This is defult in runnning statement.


// //////////////////////////////////Five/////////////////////////////////////////////////



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "Aman@123" })
        } else {
            reject("ERROR: js went Worng!")
        }
    }, 1000)
})



// use async and await method 
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// All over Will use in Api fetching  in async : await

// async function getAllUser() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
// }

// getAllUser()



// All over fetching Api data in use of then(),catch(),finally() Method use


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })


