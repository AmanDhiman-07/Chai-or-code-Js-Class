// Object Literal

const user = {
    username: 'Hitesh',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user details from database")
        console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())


// Constructor function

//[ new ]  keyword is a Constructor function
// har bar ek new instantes deta ha 

// const  promiseOne = new Promise()
// const date = new Date()


function User(username, logincount, isLoggedIn) {
    this.username = username
    this.loginCount = logincount
    this.isLoggedIn = isLoggedIn

    return this  // isa likha ya na likha code chala ga hi
}

const userOne = new User("Hitesh", 12, true)
const userTwo = new User("Chaiorcode", 11, false)
console.log(userOne)
console.log(userTwo)


// new keyword notes
// - new keyword use in empty object {} create instance bola jatha ha
// - (2) construstor function Call new keyword ka karenn ya hamara arrgument ko  pack kar ka da deta ha
//  - (3) this keyword in arrgument is  inject in this
// -(4) Aap ko miljata ha  