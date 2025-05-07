// let myName = "Amandeep    "

// console.log(myName.trim().length)



let myHeros = ["thor", "Spiderman"]

let heroPower = {
    thor: 'hamer',
    spiderman: 'sling',
    getSpideyPower: function () {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// In this is create a high level hirarchi to create a property inside the object than calling in another Array, function ,strings..

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in All Object!..`)
}


Array.prototype.heyHitesh = function () {
    // console.log(`Hitesh says hellooooo!...`)
}

// heroPower.hitesh()
// myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() => heroPower.heyHitesh is not a function


// Old Syntax

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = User

// Morden Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// Question Solving

let anotherUsername = "ChaiOrCode   "

String.prototype.truelength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()


"amaakkkkk    ".truelength()
"amandeep dhiman@123   gamil.com".truelength()