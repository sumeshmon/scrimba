import http from 'node:http'
import { getDataFromDB } from './database/db.js'
const PORT = 8000
/*
Challenge:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/

/*
Challenge: 
1. Check the ‘method’ property on the req object.
   Only serve our string if it’s ‘GET’. 
*/

/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/
const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    // console.log(destinations);
    if (req.url === '/api' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(destinations))
    } else {
        res.statusCode = 400
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}));
        
    }

})

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);

})