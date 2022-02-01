const EventEmitter = require('events')

const celebrity = new EventEmitter()

// Subscribe to celebrety for user 1

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("You are the best, congrats");
    }
})

// Subscribe to celebrety for user 1
celebrity.on('race', (result) => {
    if (result === 'lost') {
        console.log("You deserved");
    }
})

celebrity.on('exit', (code) => {
    console.log("You areexitting on the code: ", code);
})

celebrity.emit('race', "win")
celebrity.emit('race', 'lost')
