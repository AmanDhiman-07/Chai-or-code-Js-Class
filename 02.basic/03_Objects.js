// singleton

// object literals
// Object.create  =>in this method is used in to create a new object in form of constructor.i singleton.


//  In object inbuil in key => value => key = name , value = value.


// Add symbol in object Interview Questions
// first define symbol in veriable

const Mysym = Symbol("key1");


const JsUser = {
    name: "Hitesh",
    age: 18,
    "fullName": "Hitesh Choudhary",
    [Mysym]: "myKey1", // symbol is deffine in this is method.

    // Mysym: "myKey1",  

    Location: "Delhi",
    email: "hites@google.com",
    isLoggedIn: false,
    LastloggedIn: ["monday", "saturday", "tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser.fullName);


// console.log(JsUser[Mysym]);  // symbol 


// change the value in JsUser ///////////////////////
// email: "hites@google.com" // > OLD email

JsUser.email = "hites@chatgpt.com";
// console.log(JsUser)  // update email is =>  email: 'hites@chatgpt.com',

// freeze =>  is used in object to fixed in object key and values , So coder is not change in objects.
// Object.freeze(JsUser);

JsUser.email = "hiteh@microsoft.com";
// console.log(JsUser)  not change in object



// greetings in objects to use in include function in object.

JsUser.greeting = function () {
    console.log("hello JS user");
}


JsUser.greetingTwo = function () {
    console.log(`hello JS user, ${this.name}`);   // string interpolation
}

// {This.} is used in operate in same object is used in [This function].


// console.log(JsUser.greeting);// [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
