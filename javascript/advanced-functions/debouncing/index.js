function handleResize(e){
    console.log(e);
    
}
/*
Challenge:
1. Recreate the logic using an arrow function. 
   🤔 What is the best way to pass arguments remembering 
   that ideally this throttle function is reusable?
   🛟 hint.md for help! 
*/
function throttle(func, delay) {
    let throttleTimeout = null
    return (...args)=> {
       if(!throttleTimeout) {
           func(...args)
           throttleTimeout = setTimeout(()=> {
               throttleTimeout = null
           }, delay)
       } 
    }
}


// function throttle(func, delay){
//      let throttleTimeout = null
//      return function(){
//         if(!throttleTimeout) {
//             func.apply(this, arguments)
//             throttleTimeout = setTimeout(() => {
//                 throttleTimeout = null
//             }, delay)
//         }  
//      }
// }
const throttledHandleResize = throttle(handleResize, 1000)
const output = window.addEventListener('resize', throttledHandleResize)

// const output = window.addEventListener('resize', handleResize)
console.log(output);


