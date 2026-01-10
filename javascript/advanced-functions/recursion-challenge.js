let str = 'SCRIMBA'


function reverseStr(str) {
   
    if ( str.length === 0){
        return ''
    } else {
        // return str[str.length - 1] + reverseStr(str.slice(0, -1));
        return reverseStr(str.slice(1)) + str.slice(0, 1)
        
    }
}

console.log(reverseStr(str))

/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/