console.log(1);

setTimeout(() => {
    console.log(2);
    
}, 5000);

console.log(3);

// 2 will move to stack, then move the function in to webAPIs. After completing 5sec it will move to task queue. Then move to call stack for execution.
const start = performance.now()

setTimeout(() => {
    const end = performance.now()
    console.log(`The execution time is ${start - end}`);
    
}, 5000);