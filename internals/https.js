// import {send} from "./internals/request.mjs"
// import {read} from "./internals/response.mjs"

const {send, read} = require('./internals')



function makeRequest(url, data) {
    internals.send(url, data);
    return internals.read()
}

const responseData = makeRequest("htpps://google.com", "hello")

console.log(responseData)