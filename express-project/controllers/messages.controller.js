const path = require('path')

function getMessages(req, res) {
    const picture = path.join(__dirname, '..', 'public/images', 'sounds2.jpg')
    // res.sendFile(picture)
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Elon Musk'
    })
}

function postMessage(req, res) {
    console.log("Updating messages....");
}

module.exports = {
    getMessages,
    postMessage
}