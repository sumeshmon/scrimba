/*
Challenge:
1. Get the promise working so it returns “Operation successful!” 
   if it resolves and "Operation failed." if it rejects. 
*/

const promise = new Promise (  (resole, reject)=>{
    const success = Math.random() > 0.5
    if (success) { 
      resole ('Sucess')
      
    } else {
        reject ('Fail')
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
}