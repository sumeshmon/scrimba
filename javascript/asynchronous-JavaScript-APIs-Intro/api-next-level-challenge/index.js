/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/
 
async function responseData() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        if(!response.ok){
            throw new Error('Something issue with API response')
        }
        const data = await response.json()
        console.log(data);
        
    } 
    catch (error) {
        console.log(error);
        
    }
    finally{
        console.log('Completed sucessfully');
        
    }
    
}

responseData()