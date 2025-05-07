//  Dates


// Method to call 

let myDates = new Date()
// console.log(myDates) //   output--> 2024-12-20T12:50:33.879Z

// console.log(myDates.toString())
// console.log(myDates) // Fri Dec 20 2024 18:22:35 GMT+0530 (India Standard Time)

// console.log(myDates.toDateString())  // --Fri Dec 20 2024

// console.log(myDates.toISOString()) //  == 2024-12-20T12:57:26.307Z

// console.log(myDates.toLocaleString())  // ==12/20/2024, 6:28:18 PM
// console.log(myDates.toLocaleTimeString()) //6:28:56 PM local time
// console.log(myDates.getDay())  // In this get some current day in number.
// console.log(myDates.getFullYear()) // In this get some current year in number.
// console.log(myDates.toJSON()) //2024-12-20T13:02:53.389Z

// console.log(myDates.valueOf()) update value every click.
// console.log(typeof myDates)  // object

// let myCreatedDate = new Date(2022, 0, 20)
// console.log(myCreatedDate) // 2022-04-19T18:30:00.000Z
// console.log(myCreatedDate.toDateString())  //Thu Jan 20 2022

// let myCreatedDate = new Date("2023-01-14") // In this is method  that give the own date ... yy-mm-dd.
// console.log(myCreatedDate.toLocaleString()) //1/14/2023, 5:30:00 AM

// let myCreatedDate = new Date("04-20-2026") // mm-dd-yy in india format is used for display time.
// console.log(myCreatedDate.toLocaleString()) //4/20/2026, 12:00:00 AM



// TimeStamp in Dates

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp)

// let myCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.getTime())

// let myTimeStamp =  Date.now()
// console.log(Math.floor(myTimeStamp/1000))   cal
// console.log(Math.round(myTimeStamp/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1) correct month to add +1
// console.log(newDate.getDay());
// `${newDate.getDay()} and the tim e` // == in string interpolaion.



// customize the local String in object form 

console.log(newDate.toLocaleString('default',{
    day:'numeric',
    weekday:'long',
    month:'long'
}))