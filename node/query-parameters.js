import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
const PORT = 8000

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(queryObj);
    
    
})

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);

})