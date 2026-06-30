import http from 'node:http'

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
const server = http.createServer((req, res) => {
    // console.log(req.method);
    
    if (req.url === '/api' && req.method === 'GET') {
       res.end('This is from server')
    }


    

})
server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);

})