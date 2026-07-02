import http from 'node:http'
import { getDataFromDB } from './database/db.js'
const PORT = 8000
/*
Challenge 1:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/

/*
Challenge 2: 
1. Check the ‘method’ property on the req object.
   Only serve our string if it’s ‘GET’. 
*/

/*
Challenge 3:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

/*
  Challenge 4:
  1. Check if the url starts with “/api/continent”.
    (Is there a JS method that allows you to check what a string starts with?)

  2. If it does, serve only items from that continent.
    (How can you get to what comes after the final slash?)
    (What method can you use to filter data?)
  */
const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    // console.log(destinations);
    if (req.url === '/api' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(destinations))
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        const filteredData = destinations.filter((destination) => {
            return destination.continent.toLocaleLowerCase() === continent.toLocaleLowerCase()
        })
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(filteredData))

    }

    else {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: "not found", message: "The requested route does not exist" }));

    }

})

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);

})