function getMessages(req, res) {
    return res.send('<ul><li>Hello Brido!</li></ul>');
}

function postMessage(req, res) {
    console.log("Updating messages....");
}

module.exports = {
    getMessages,
    postMessage
}