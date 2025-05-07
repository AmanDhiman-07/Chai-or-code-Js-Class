// for loop


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)

// }


// again


// for (let i = 0; i <= 10; i++) {
//     const element = i;

//     if (element == 5) {
//         console.log(`5 is best number`)
//     }
//     console.log(element)

// }


// again

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value:${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value : ${j} and inner loop ${i}`)
//     }
// }

// Table print 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(`output in outerloop ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j} `)
//     }
// }


// forloop in Arrays

// const myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)

// }


// brark and continue

// break;

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detacted 5`)
//         break;
//     }
//     const element = index;
//     console.log(`value of index is ${element}`)
// }


// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detacted 5`)
        continue;
    }
    const element = index;
    console.log(`value of index is ${element}`)
}