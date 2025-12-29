// fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // update the DOM to warn the user
//         // access an alternative API
//     })
//     .finally(()=> console.log('The operation completed.'))  


/*
Challenge:
1. Convert the above code to use async/await, handle errors with “try/catch” blocks, and add a “finally” block.

*/
async function breeds() {
    try {
        const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
        if  (!response.ok){
            throw new Error('Sometning problem with API')
        }
        const data = await response.json()
        console.log(data);
    }
    catch (err) {
        console.log(err)
    } finally {
        console.log('The operation completed.')
    }
}
breeds()