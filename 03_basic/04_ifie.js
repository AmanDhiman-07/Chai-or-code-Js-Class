// Immediately Invoked Function Expressions (IIFE)


// simple function used  that = ()

(function chai() {
    // named ifie function
    console.log(`DB CONNECTED`)
})();      // ; is used in last in end of function.



(() => {
    // unnamed ifie function
    console.log(`DB CONNECT TWO`)
})();


//  so pass the varble in ifie function is 
((name) => {
    console.log(`DB CONNETED ${name}`)
})("Hitesh"); 
