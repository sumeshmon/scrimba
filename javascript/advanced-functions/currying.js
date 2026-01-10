// function calculateVolume(length){
//     return function (width){
//         return function (height){
//             return length * width * height
//         }
//     }
// }

/*
Challenge:
    1. Convert this to arrow functions.
*/
const calculateVolume = width => length => height => width * length * height
const volume = calculateVolume(2)(4)(3)
console.log(volume)


