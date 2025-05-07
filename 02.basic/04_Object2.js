// const tinderUser = new Object();  // this is a singleton object.
// console.log(tinderUser);   // {} empty object


const tinderUser = {} // non sinsleton object.
// console.log(tinderUser); // {} empty object

tinderUser.id = "123@user";
tinderUser.name = "hitesh";
tinderUser.contactNo = 1234567879;
tinderUser.email = "hitesh@gmail.com";
tinderUser.password = "hitesh@321"
tinderUser.location = "Nepal";

// console.log(tinderUser);



// nesting in Object


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "John",
            lastName: "smith"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName)



// +++++++++++++++++++++++++++++++++++++++  comebine object to object  Add one obect to another    ++++++++++++++++++++++++++++++=

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = { obj1, obj2 }

// console.log(obj3)   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// ================== print another method
// const obj3 = Object.assign(obj1, obj2, obj4)

// console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3 = Object.assign({}, obj1, obj2, obj4) // This is a perfect method to Add objects in onject,Assign method and to use {} that is traget and another object is source.

// console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }




// """""""""""""""""""""""""" Most commenly used in this method     easy to use

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



// //////////////////////////////////////////////

const User = [
    {
        id: 1,
        email: "H@example"
    },
    {
        id: 2,
        email: "T@example"
    },
    {
        id: 3,
        email: "U@example"
    },
    {
        id: 4,
        email: "O@example"
    }
]

// console.log(User[2].email)

///////////////////////////////////////////////////////////////


// console.log(tinderUser);

const tiderData = Object.keys(tinderUser)
const tiderData1 = Object.values(tinderUser)
const tiderData2 = Object.entries(tinderUser)


// console.log(tiderData) //[ 'id', 'name', 'contactNo', 'email', 'password', 'location' ]

// console.log(tiderData1)   // give some  value of an object.

// console.log(tiderData2) // [ 'id', '123@user' ],
// [ 'name', 'hitesh' ],
// [ 'contactNo', 1234567879 ],
// [ 'email', 'hitesh@gmail.com' ],
// [ 'password', 'hitesh@321' ],
// [ 'location', 'Nepal' ]




// console.log(tinderUser.hasOwnProperty('email')); // In this Property is use to take a value in object and check the value is exsited ya not in object.




// for (let i = 0; i < tiderData.length; i++) {
//     const element = tiderData[i];
//     // console.log(element)

// }

// console.log(tiderData)

// const a = Object.values(tinderUser);
// console.log(`${tiderData}: ${a}`)




// //////////////////////////////////////// json video//////////////////////////////
///////////////////////////////////////  DESTURCTUREING OBJECTS \\\\\\\\\\\\\\\\\///////////////////////////////////


const course = {
    courseName: "js in hindi",
    couserInstructor: "Hitesh",
    price: "999"
}

// ////////// Normal print

// console.log(course)
// console.log(course.couserInstructor)


// /////////////
// Advance method in print to particular value in object 

// const { couserInstructor } = course
// console.log(couserInstructor)

const { couserInstructor: Instructor } = course  // to give the another small name in object . 
// console.log(Instructor)


// //////////////////API

///////////////////////////// JSON Format in Js


// in json api format ma dono hi string ma ho ti ha key or value...!

// {
//     "name": "Hitesh",
//         "courseName": 'js in hindi',
//             "Price": "Free"
// }



// Api 

// {
//     "results": [
//         {
//             "gender": "female",
//             "name": {
//                 "title": "Miss",
//                 "first": "Alejandra",
//                 "last": "Peña"
//             },
//             "location": {
//                 "street": {
//                     "number": 4403,
//                     "name": "Avenida de La Albufera"
//                 },
//                 "city": "Bilbao",
//                 "state": "Asturias",
//                 "country": "Spain",
//                 "postcode": 38350,
//                 "coordinates": {
//                     "latitude": "-37.5031",
//                     "longitude": "59.0298"
//                 },
//                 "timezone": {
//                     "offset": "+2:00",
//                     "description": "Kaliningrad, South Africa"
//                 }
//             },
//             "email": "alejandra.pena@example.com",
//             "login": {
//                 "uuid": "0b387222-5e2a-4101-9a27-886179c5781b",
//                 "username": "heavyleopard570",
//                 "password": "bing",
//                 "salt": "6jPebfwM",
//                 "md5": "2032cdba5e79a50116a845e9656118dc",
//                 "sha1": "d3587c015def58e0e5f1412314e16f6e98365038",
//                 "sha256": "02c8f4e7a22aa57c499aa12926f9124c46a9d61754430823e0f62196dc51d96f"
//             },
//             "dob": {
//                 "date": "1968-09-22T01:41:31.004Z",
//                 "age": 56
//             },
//             "registered": {
//                 "date": "2003-11-17T12:39:20.805Z",
//                 "age": 21
//             },
//             "phone": "967-345-076",
//             "cell": "681-837-504",
//             "id": {
//                 "name": "DNI",
//                 "value": "35286452-Z"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/women/45.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
//             },
//             "nat": "ES"
//         }
//     ],
//         "info": {
//         "seed": "c33f090781ccc119",
//             "results": 1,
//                 "page": 1,
//                     "version": "1.4"
//     }
// }



[
    {},
    {},
    {}
]