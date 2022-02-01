// const request = require('./request')
// const response = require('./response')
module.exports = {
    // send: request.send,
    // read: response.read,

    ...require('./request'),
    ...require('./response')
}