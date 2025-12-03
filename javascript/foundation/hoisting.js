// variables and functions declaration are moved to top oftheir containing scope during the compailation phase, before code execution.

function weather(){
    console.log('Today is sunny');
    
}
console.log(weather());



console.log(getName());
function getName(){
    console.log('My name is sumesh');
}

console.log(place);
// var → hoisted, initialized as undefined.
//let / const → hoisted but not initialized, so accessing early causes an error.
var place = 'Thrissur'